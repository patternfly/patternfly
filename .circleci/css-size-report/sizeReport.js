#!/usr/bin/env node
const execSync = require('child_process').execSync;
const path = require('path');
const fs = require('fs');
const glob = require('glob');
const { Octokit }  = require('@octokit/rest');

const octokit = new Octokit({ auth: process.env.GH_PR_TOKEN });
const owner = process.env.CIRCLE_PROJECT_USERNAME; // patternfly
const repo = process.env.CIRCLE_PROJECT_REPONAME;
const prnum = process.env.CIRCLE_PR_NUMBER;

let exitCode = 0;

// download previous package to do the compares against
function npmInstall(package) {
  let lastTag = execSync('git describe --match "v*" --tags --abbrev=0').toString();
  lastTag = lastTag.substr(1, lastTag.length).trim();
  console.log(`npm i -D ${package}@${lastTag}`)
  execSync(`npm i -D ${package}@${lastTag}`, { cwd: __dirname, encoding: 'utf-8' });
}

// build a Map object(<key> = file, <value> = size in kb)
function buildValueMap(distDir) {
  const res = {};
  glob
    .sync(`${distDir}/**/*.css`)
    .forEach(file =>
      res[file.replace(distDir, '').substr(1)] = fs.statSync(file).size
    );

  return res;
}

// compare value maps.
function compareMaps(curMap, prevMap) {
  const differences = [];

  let html = '<table id="css-lint-size">';
  html += '<caption>CSS Size Report</caption>';
  html += '<tr>';
  html += `<th>Name</th>`;
  html += `<th>Current</th>`;
  html += `<th>Previous</th>`;
  html += `<th>Diff %</th>`;
  html += '</tr>';

  Object.entries(curMap)
    .filter(([_file, size]) => size !== 0)
    .forEach(([file, size]) => {
      let psize;
      let diff;
      if (prevMap[file] !== undefined) {
        psize = prevMap[file];
        diff = (size - psize) / size * 100;
      } else {
        psize = "-";
        diff = "-";
      }

      if (parseFloat(diff) !== parseFloat('0')) {
        differences.push({
          file,
          size,
          psize,
          diff
        });
      }
    });

  if (differences.length == 0) {
    html += '<tr>';
    html += `<td>There are no changes in CSS file sizes</td>`
    html += '<tr>';
  } else {
    differences
      .sort((diff1, diff2) => diff1.diff < diff2.diff)
      .forEach(diff => {
        let style = '';
        console.log(diff.file, 'diff', diff.diff);
        if (
          diff.diff > 50 || // component file
          diff.diff > 10 && !diff.file.includes('/') // Root patternfly.css file
        ) {
          exitCode = -1;
        }
        // Styles don't show up on github :(
        if (diff.diff > 10) {
          style += 'background-color: lightsalmon;';
        } else if (diff.diff > 5) {
          style += 'background-color: goldenrodyellow;';
        } else if (diff.diff < 0) {
          style += 'background-color: lightgreen;';
        }
        html += `<tr style="${style}">`;
        html += `<td>${diff.file}</td>`; // Name
        html += `<td>${humanFileSize(diff.size, true)}</td>`; // Current
        html += `<td>${humanFileSize(diff.psize, true)}</td>`; // Previous
        html += `<td>${parseFloat(diff.diff).toFixed(2)}</td>`;
        html += '</tr>';
      });
  }

  html += '</table>';

  fs.writeFileSync(path.join(__dirname, './report.html'), html);
  return html;
}

function humanFileSize(bytes, si) {
  const thresh = si ? 1000 : 1024;
  if (Math.abs(bytes) < thresh) {
    return `${bytes} B`;
  }
  const units = si
    ? ['kB','MB','GB','TB','PB','EB','ZB','YB']
    : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
  var u = -1;
  do {
    bytes /= thresh;
    ++u;
  } while(Math.abs(bytes) >= thresh && u < units.length - 1);
  return `${bytes.toFixed(1)} ${units[u]}`;
}

async function postToPR(html) {
  let commentBody = '';
  const { data } = await octokit.issues
    .listComments({
      owner,
      repo,
      issue_number: prnum
    });
  const existingComment = data.find(comment => comment.user.login === 'patternfly-build');
  if (existingComment) {
    commentBody = existingComment.body.replace(/<table id="css-lint-size">(.*)<\/table>/, '').trim();
  }

  commentBody += '\n';
  commentBody += html;

  if (existingComment) {
    await octokit.issues
      .updateComment({
        owner,
        repo,
        comment_id: existingComment.id,
        body: commentBody
      });
    console.log('Updated comment');
  } else {
    await octokit.issues
      .createComment({
        owner,
        repo,
        issue_number: prnum,
        body: commentBody
      });
    console.log('Created comment');
  }
}

async function run(package) {
  // check if we are running in dev or CI env
  let repoPrefix;
  if (repo) {
    // circleCI repo
    repoPrefix = 'project/dist';
  } else {
    // dev repo
    repoPrefix = 'patternfly-next/dist';
  }

  npmInstall(package);
  const htmlReport = compareMaps(
    buildValueMap(path.join(__dirname, '../../dist'), repoPrefix),
    buildValueMap(path.join(__dirname, './node_modules/', package), package)
  );

  // post report to PR, if running in circleCI
  if (prnum) {
    await postToPR(htmlReport);
    process.exit(exitCode);
  }
}

run('@patternfly/patternfly');
