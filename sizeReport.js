const fs = require('fs');
const glob = require('glob');
const path = require('path');
const Octokit = require('@octokit/rest');

const octokit = new Octokit({ auth: process.env.GH_PR_TOKEN });

const owner = process.env.CIRCLE_PROJECT_USERNAME; // patternfly
const repo = process.env.CIRCLE_PROJECT_REPONAME;
const prnum = process.env.CIRCLE_PR_NUMBER;
let exitCode = 0;
let prevResults;

if (fs.existsSync('dist/size-report.json')) {
  prevResults = require('dist/size-report.json');
} else {
  process.exit(0);
}

let html = '<table>';
html += '<tr>';
html += `<td>Name</td>`;
html += `<td>Current</td>`;
html += `<td>Previous</td>`;
html += `<td>Diff %</td>`;
html += '</tr>';

const results = {};

glob
  .sync(['dist/components/**/*.css', 'dist/patternfly.css', 'dist/patternfly.min.css'])
  .filter(file => prevResults[file])
  .map(file => ({ file, size: fs.statSync(file).size }))
  // .sort(by size)
  .forEach(({ file, size }) => {
    const diff = (html += '<tr>');
    html += `<td>${path.basename(file)}</td>`;
    html += `<td>${size}</td>`;
    html += `<td>${prevResults[file]}</td>`;
    html += '<tr>';
    results[file] = size;
    if (diff > .1 || size > 10000) {
      exitCode = 1;
    }
  });

html += '</table>';
console.log(results);
// console.log(html);
fs.writeFileSync('dist/size-report.json', JSON.stringify(results, null, 2));

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
