#!/usr/bin/env node
const { Command } = require('commander');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');
const { getFileSizes, getHTMLDiffTable, postToPR } = require('./helpers');

const program = new Command();
program
  .version('1.0.0')
  .description("Generates a report comparing a folder's size to another commit's using NPM.")
  .arguments('[pattern]')
  .option('-c, --comment', 'Whether to leave a github comment on CIRCLE_PR_NUMBER', false)
  .option('-d, --dir <dir>', 'Directory to compare', 'dist')
  .option('-i, --ignore <ignore>', 'Globs to ignore', '**/docs/**')
  .action(compare);

async function compare(pattern, options) {
  let compareDir;
  try {
    // Install from NPM
    let shaTag;
    if (pattern) {
      const sha = execSync(`git show-ref -s ${pattern}`);
      shaTag = execSync(`git show-ref --tags | grep ${sha}`)
        .toString()
        .split(' ')[1]
        .replace('refs/tags/', '')
        .replace('prerelease-v', '');
    } else {
      shaTag = execSync('git describe --abbrev=0 --tags')
        .toString()
        .replace('prerelease-v', '');
    }

    // eslint-disable-next-line
    const packageName = require(path.join(process.cwd(), 'package.json')).name;
    const command = `npm i -D ${packageName}@${shaTag}`;
    console.log('>', command);
    execSync(command, { cwd: __dirname });
    compareDir = path.join(__dirname, 'node_modules', packageName);
  } catch (error) {
    // TODO -- move dist, git checkout, npm i, npm run build-patternfly, move dist back
    console.error(error.message);
    process.exit(10);
  }

  const currentSizes = getFileSizes(path.join(process.cwd(), options.dir), options.ignore);
  const prevSizes = getFileSizes(compareDir, options.ignore);
  const { exitCode, htmlReport } = getHTMLDiffTable(currentSizes, prevSizes);

  fs.writeFileSync(path.join(__dirname, 'report.html'), htmlReport);

  if (options.comment) {
    await postToPR(htmlReport);
  }

  process.exit(exitCode);
}

program.parse(process.argv);
