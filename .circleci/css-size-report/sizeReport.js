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

// process command line args
const argv = require('yargs')
  .usage(`Usage:  ${path.basename(__filename)} <command> [options]`)
  .command('run', 'Run the report', () => {}, (argv) => {
    run('@patternfly/patternfly');
  })
  .command('clean', 'Clean up anything the report tool as built out',  () => {}, (argv) => {
    clean();
  })
  .showHelpOnFail(true)
  .strict()
  .demandCommand(1, '')
  .help('h')
  .alias('h', 'help').argv

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
      diff = size !== 0 ? Math.round((size - psize) / size * 100) : 0;
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
}

function run(package) {
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
  const prevMap = buildValueMap(__dirname + '/node_modules/' + package + '/**/*.css', package);
  const currMap = buildValueMap(__dirname + '/../../dist/**/**/*.css', repoPrefix);
  compareMaps(currMap, prevMap);
}

function clean() {
  const deleteFolderRecursive = (dir_path) => {
    if (fs.existsSync(dir_path)) {
      fs.readdirSync(dir_path).forEach((file, index) => {
        const curPath = path.join(dir_path, file);
        if (fs.lstatSync(curPath).isDirectory()) { // recurse
          deleteFolderRecursive(curPath);
        } else { // delete file
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(dir_path);
    }
  };

  deleteFolderRecursive(__dirname + '/node_modules');
}

process.exit(exitCode);
