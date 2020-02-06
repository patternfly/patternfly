const myArgs = process.argv.slice(2);
const package = myArgs[0];

const fs = require('fs');
const glob = require('glob');
const Octokit = require('@octokit/rest');

const octokit = new Octokit({ auth: process.env.GH_PR_TOKEN });

const owner = process.env.CIRCLE_PROJECT_USERNAME; // patternfly
const repo = process.env.CIRCLE_PROJECT_REPONAME;
const prnum = process.env.CIRCLE_PR_NUMBER;

const exitCode = 0;
const results = {};

// the number of files that have changed
let totalFiles = 0;
// the color of the result size value.
let sizeCol = 'green';

let html = '<!DOCTYPE html>';

html += '<head>';
html += '<style>'
html += `th { font-weight:bold; background-color: #e6e6e6; }`
html += `table, th, td { border: 1px solid black; border-collapse: collapse; }`
html += '</style>';
html += '</head>';

html += '<html>';
html += '<body>';

html += '<table style="width:100%">';
html += '<tr>';
html += `<th>Name</th>`;
html += `<th>Current(kb)</th>`;
html += `<th>Previous(kb)</th>`;
html += `<th>Diff %</th>`;
html += '</tr>';

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
  currValues.forEach((size, file) => {
    if (size >= 10000) {
      sizeCol = '#E74C3C';
    } else if (size > 8000 && size < 10000) {
      sizeCol = '#F1C40F';
    } else {
      sizeCol = '#229954';
    }

    let psize;
    let diff;
    if ( typeof prevValues.get(file) !== 'undefined' ) {
      psize = prevValues.get(file)
      diff = size !== 0 ? Math.abs(((size - psize) / size) * 100).toPrecision(2) : 0;
    } else {
      psize = "-";
      diff = "-";
    }

    if ( parseFloat(diff) !== parseFloat('0') ) {
      totalFiles++;
      html += '<tr>';
      html += `<td>${file}</td>`; // Name
      html += `<td style="text-align:center;"><font color=${sizeCol}>${size}</font></td>`; // Current
      html += `<td style="text-align:center;">${psize}</td>`; // Previous
      if (diff > 0) {
        html += `<td style="text-align:center;"><font color='#E74C3C'>${diff}</font></td>`;
      } else if (diff < 0) {
        html += `<td style="text-align:center;"><font color='#229954'>${diff}</font></td>`;
      } else {
        html += `<td style="text-align:center;">${diff}</td>`;
      }
      html += '<tr>';
      results[file] = size;
    }
  });

  if ( totalFiles == 0 ) {
    html += '<tr>';
    html += `<td colspan="4" style="text-align:center;">There are no changes in CSS file sizes</td>`
    html += '<tr>';
  }

  html += '</table>';
  html += '</body>';
  html += '</html>';

  console.log(html);
}

// build previous values
const prevMap = buildValueMap('node_modules/' + package + '/**/*.css', package);
const currMap = buildValueMap('../../dist/**/**/*.css', '../dist');

// compare Maps
compareMaps(currMap, prevMap);

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
