#!/usr/bin/env node

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
  try{
    if (! fs.existsSync(__dirname + '/node_modules')) {
      console.log(__dirname + '/node_modules');
      const execSync = require('child_process').execSync;
      execSync('npm i -D ' + package + "> /dev/null 2>&1", { cwd: __dirname, encoding: 'utf-8' });
    }
  } catch (err) {
    console.log(err.message);
  }
}

// build a Map object(<key> = file, <value> = size in kb), sorting highest to lowest.
function buildValueMap(searchPattern, topLvlPattern) {
  const m = new Map();
  glob
    .sync(searchPattern)
    .forEach(file => {
      const split = file.split('/');
      let normalized = split.slice(split.length - 3, split.length).join('/');

      if (normalized.startsWith(topLvlPattern)) {
        normalized = file.split('/').pop();
      }
      m.set(normalized, fs.statSync(file).size);
    });

    // return sorted map(decending order)
  return new Map([...m.entries()].sort((file, size) => size[1] - file[1]));
}

// compare value maps.
function compareMaps(currValues, prevValues) {
  const results = {};
  // the number of files that have changed
  let totalFiles = 0;

  let html = "<table id='css-lint-size'>";
  html += '<tr>';
  html += `<th>Name</th>`;
  html += `<th>Current(kb)</th>`;
  html += `<th>Previous(kb)</th>`;
  html += `<th>Diff %</th>`;
  html += '</tr>';

  currValues.forEach((size, file) => {
    let psize;
    let diff;
    if ( typeof prevValues.get(file) !== 'undefined' ) {
      psize = prevValues.get(file)
      diff = size !== 0 ? Math.round((size - psize) / size * 100) : 0;
    } else {
      psize = "-";
      diff = "-";
    }

    if ( parseFloat(diff) !== parseFloat('0') ) {
      totalFiles++;
      html += '<tr>';
      html += `<td>${file}</td>`; // Name
      html += `<td>${size}</td>`; // Current
      html += `<td>${psize}</td>`; // Previous
      html += `<td>${diff}</td>`;
      html += '</tr>';
      results[file] = size;
    }
  });

  if ( totalFiles == 0 ) {
    html += '<tr>';
    html += `<td>There are no changes in CSS file sizes</td>`
    html += '<tr>';
  }

  html += '</table>';

  fs.writeFileSync(path.resolve(__dirname, '/tmp/lint-size.html'), html);

  return html;
}

function postToPR(html) {
  console.log("Owner: " + owner);
  console.log("repo: " + repo);
  console.log("prnum: " + prnum);
  console.log('table', html)

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
        commentBody = existingComment.body.replace(/<table id='css-lint-size'>(.*)<\/table>/, html);
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
    repoPrefix = `project/dist`
  } else {
    // dev repo
    repoPrefix = 'patternfly-next/dist'
  }

  setUp(package);
  const htmlReport = compareMaps(
    buildValueMap(__dirname + '/../../dist/**/**/*.css', repoPrefix),
    buildValueMap(__dirname + '/node_modules/' + package + '/**/*.css', package));

  // post report to PR, if running in circleCI
  if (prnum) {
    console.log("Posting comment to PR")
    await postToPR(htmlReport);
    process.exit(exitCode);
  }
}

run('@patternfly/patternfly');
