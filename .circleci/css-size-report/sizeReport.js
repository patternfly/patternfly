#!/usr/bin/env node
const execSync = require('child_process').execSync;
const fs = require('fs');
const glob = require('glob');
const path = require('path');
const { Octokit }  = require('@octokit/rest');

const octokit = new Octokit({ auth: process.env.GH_PR_TOKEN });
const owner = process.env.CIRCLE_PROJECT_USERNAME; // patternfly
const repo = process.env.CIRCLE_PROJECT_REPONAME;
const prnum = process.env.CIRCLE_PR_NUMBER;

let exitCode = 0;

// download previous package to do the compares against
function setUp(package) {
  if (!fs.existsSync(__dirname + '/node_modules')) {
    let lastTag = execSync('git describe --match "v*" --tags --abbrev=0').toString();
    lastTag = lastTag.substr(1, lastTag.length).trim();
    console.log(`npm i -D ${package}@${lastTag}`)
    execSync(`npm i -D ${package}@${lastTag}`, { cwd: __dirname, encoding: 'utf-8' });
  }
}

// build a Map object(<key> = file, <value> = size in kb)
function buildValueMap(searchPattern, topLvlPattern) {
  const res = {};
  glob
    .sync(searchPattern)
    .forEach(file => {
      const split = file.split('/');
      let normalized = split.slice(split.length - 3, split.length).join('/');

      if (normalized.startsWith(topLvlPattern)) {
        normalized = file.split('/').pop();
      }
      res[normalized] = fs.statSync(file).size;
    });

  return res;
}

// compare value maps.
function compareMaps(curMap, prevMap) {
  const differences = [];

  let html = '<table id="css-lint-size">';
  html += '<tr>';
  html += `<th>Name</th>`;
  html += `<th>Current(kb)</th>`;
  html += `<th>Previous(kb)</th>`;
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
      .sort((diff1, diff2) => diff1.diff > diff2.diff)
      .forEach(diff => {
        html += '<tr>';
        html += `<td>${diff.file}</td>`; // Name
        html += `<td>${diff.size}</td>`; // Current
        html += `<td>${diff.psize}</td>`; // Previous
        html += `<td>${diff.diff}</td>`;
        html += '</tr>';
      });
  }

  html += '</table>';

  fs.writeFileSync(__dirname + '/report.html', html);
  return html;
}

function postToPR(html) {
  return new Promise((res, rej) => octokit.issues
    .listComments({
      owner,
      repo,
      issue_number: prnum
    })
    .then(res => res.data)
    .then(comments => {
      let commentBody = '';
      const existingComment = comments.find(comment => comment.user.login === 'patternfly-build');
      if (existingComment) {
        commentBody = existingComment.body.replace(/<table id="css-lint-size">(.*)<\/table>/, '');
      }

      commentBody += '\n';
      commentBody += html;

      if (existingComment) {
        octokit.issues
          .updateComment({
            owner,
            repo,
            comment_id: existingComment.id,
            body: commentBody
          })
          .then(() => console.log('Updated comment'))
          .then(res);
      } else {
        octokit.issues
          .createComment({
            owner,
            repo,
            issue_number: prnum,
            body: commentBody
          })
          .then(() => console.log('Created comment'))
          .then(res);
      }
    })
    .catch(rej)
  );
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

  setUp(package);
  const htmlReport = compareMaps(
    buildValueMap(__dirname + '/../../dist/**/**/*.css', repoPrefix),
    buildValueMap(__dirname + '/node_modules/' + package + '/**/*.css', package)
  );

  // post report to PR, if running in circleCI
  if (prnum) {
    await postToPR(htmlReport);
    process.exit(exitCode);
  }
}

run('@patternfly/patternfly');
