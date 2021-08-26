const path = require('path');
const fs = require('fs');
const glob = require('glob');
const { Octokit } = require('@octokit/rest');

// {file: size in kb}
function getFileSizes(dir, ignore) {
  const res = {};
  glob.sync(`${dir}/**/*.css`, { ignore }).forEach(file => {
    res[file.replace(dir, '').substr(1)] = fs.statSync(file).size;
  });

  return res;
}

function humanFileSize(bytes, si) {
  const thresh = si ? 1000 : 1024;
  if (Math.abs(bytes) < thresh) {
    return `${bytes} B`;
  }
  const units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  let u = -1;
  do {
    bytes /= thresh;
    ++u;
  } while (Math.abs(bytes) >= thresh && u < units.length - 1);
  return `${bytes.toFixed(1)} ${units[u]}`;
}

// compare value maps.
function getHTMLDiffTable(curMap, prevMap) {
  let exitCode = 0;
  const differences = [];

  let html = '<table id="css-lint-size">';
  html += '<caption>CSS Size Report</caption>';
  html += '<tr>';
  html += '<th>Name</th>';
  html += '<th>Current</th>';
  html += '<th>Previous</th>';
  html += '<th>Diff %</th>';
  html += '</tr>';

  Object.entries(curMap)
    .filter(([_file, size]) => size !== 0)
    .forEach(([file, size]) => {
      let psize;
      let diff;
      if (prevMap[file] !== undefined) {
        psize = prevMap[file];
        diff = ((size - psize) / size) * 100;
      } else {
        psize = '-';
        diff = '-';
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

  if (differences.length === 0) {
    html += '<tr>';
    html += '<td>There are no changes in CSS file sizes</td>';
    html += '<tr>';
  } else {
    differences
      .sort((diff1, diff2) => diff1.diff < diff2.diff)
      .forEach(diff => {
        let style = '';
        console.log(diff.file, 'diff', diff.diff);
        if (
          diff.diff > 50 || // component file
          (diff.diff > 10 && !diff.file.includes(path.sep)) // Root patternfly.css file
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

  return { exitCode, htmlReport: html };
}

async function postToPR(html) {
  const octokit = new Octokit({ auth: process.env.GH_PR_TOKEN });
  const owner = process.env.CIRCLE_PROJECT_USERNAME; // patternfly
  const repo = process.env.CIRCLE_PROJECT_REPONAME;
  const prnum = process.env.CIRCLE_PR_NUMBER;

  let commentBody = '';
  const { data } = await octokit.issues.listComments({
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
    await octokit.issues.updateComment({
      owner,
      repo,
      comment_id: existingComment.id,
      body: commentBody
    });
    console.log('Updated comment');
  } else {
    await octokit.issues.createComment({
      owner,
      repo,
      issue_number: prnum,
      body: commentBody
    });
    console.log('Created comment');
  }
}

module.exports = {
  getFileSizes,
  getHTMLDiffTable,
  postToPR
};
