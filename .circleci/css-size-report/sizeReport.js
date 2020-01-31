const fs = require('fs');
const glob = require('glob');
const path = require('path');
const Octokit = require('@octokit/rest');

const octokit = new Octokit({ auth: process.env.GH_PR_TOKEN });

const owner = process.env.CIRCLE_PROJECT_USERNAME; // patternfly
const repo = process.env.CIRCLE_PROJECT_REPONAME;
const prnum = process.env.CIRCLE_PR_NUMBER;

const exitCode = 0;
const results = {};
// size of the previous version cee file being tested
let prevResult;
// percentage difference of css files
let diff;
// the number of files that have changed
let totalFiles = 0;
// the color of the result size value.
let sizeCol = 'green';

let html = '<table>';
html += '<tr>';
html += `<td>Name</td>`;
html += `<td>Current(kb)</td>`;
html += `<td>Previous(kb)</td>`;
html += `<td>Diff %</td>`;
html += '</tr>';

// @todo add: 'dist/patternfly.css', 'dist/patternfly.min.css'
glob
  .sync('../../dist/components/**/*.css')
  // .filter(file => prevResults[file])
  .map(file => ({ file, size: fs.statSync(file).size }))
  // .sort(by size)
  .forEach(({ file, size }) => {
    if (size >= 10000) {
      sizeCol = '#E74C3C';
    } else if (size > 8000 && size < 10000) {
      sizeCol = '#F1C40F';
    } else {
      sizeCol = '#229954';
    }
    prevResult = glob
      .sync(`node_modules/@patternfly/patternfly/**/${path.basename(file)}`)
      .map(file => ({ file, size: fs.statSync(file).size }.size));

    diff = size !== 0 ? Math.abs(((size - prevResult) / size) * 100).toPrecision(2) : 0;

    if ( parseFloat(diff) !== parseFloat('0') ) {
      totalFiles++;
      html += '<tr>';
      html += `<td>${path.basename(file)}</td>`; // Name
      html += `<td><font color=${sizeCol}>${size}</font></td>`; // Current
      html += `<td>${prevResult}</td>`; // Previous
      if (diff > 0) {
        html += `<td><font color='#E74C3C'>${diff}</font></td>`;
      } else if (diff < 0) {
        html += `<td><font color='#229954'>${diff}</font></td>`;
      } else {
        html += `<td>${diff}</td>`;
      }
      html += '<tr>';
      results[file] = size;
    }
  });

if ( totalFiles == 0) {
  html += '<tr>';
  html += `<td colspan="4">There are no changes in CSS file sizes</td>`
  html += '<tr>';
}

html += '</table>';
console.log(html);

if (prnum) {
  octokit.issues
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
        commentBody += existingComment.body;
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
          .then(() => console.log('Updated comment!'));
      } else {
        octokit.issues
          .createComment({
            owner,
            repo,
            issue_number: prnum,
            body: commentBody
          })
          .then(() => console.log('Created comment!'));
      }
    });
}

process.exit(exitCode);
