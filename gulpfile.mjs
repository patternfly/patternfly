import fs from'fs';
import path from 'path';
import gulp from'gulp';
import rimraf from'rimraf';
import { copyFA, copySource, copyAssets, copyDocs, watchCopyDocs } from'./scripts/gulp/copy.mjs';
import { compileSASS, minifyCSS, watchSASS } from'./scripts/gulp/sass.mjs';
import { pfIconFont as definedPfIconFont, pfIcons as definedPfIcons } from'./scripts/gulp/icons.mjs';
import { compileHBS, compileMD, watchHBS, watchMD, watchHelpers } from'./scripts/gulp/html.mjs';
import { generateSnippets } from'./scripts/gulp/snippets.mjs';
import { start } from '@patternfly/documentation-framework/scripts/cli/start.js';
import { build as docsFrameworkBuild} from '@patternfly/documentation-framework/scripts/cli/build.js';

const { series, parallel } = gulp;

const sassFiles = [
  './src/patternfly/patternfly*.scss',
  './src/patternfly/base/patternfly*.scss',
  './src/patternfly/{components,layouts,patterns,utilities}/**/*.scss',
  '!./src/patternfly/**/_all.scss',
  // No need to compile component theme sass files to empty css files
  '!./src/patternfly/components/**/themes/**/*.scss'
];
const hbsFiles = ['./src/patternfly/**/*.hbs'];
const mdFiles = ['./src/patternfly/**/*.md'];
const helperFiles = ['./scripts/helpers.mjs'];

export function clean(cb) {
  const cleanGlobs = [
    'dist',
    'src/icons/PfIcons',
    '.circleci/css-size-report/node_modules',
    '.circleci/css-size-report/package-lock.json',
    '.circleci/css-size-report/report.html',
    'src/icons/PfIcons/',
    'static/assets/fontawesome/',
    'static/assets/fonts/',
    'static/assets/pficon/',
    'test/results/',
    'test/scenario_tests/',
    '.cache',
    'public',
    'patternfly-docs/generated/**/*.js'
  ];
  cleanGlobs.forEach(glob => rimraf.sync(glob));
  cb();
}

function copySourceFiles() {
  return copySource();
}

function compileSrcSASS() {
  return compileSASS(sassFiles);
}

function watchSrcSASS(cb) {
  return watchSASS(['./src/patternfly/**/*.scss', '!./src/patternfly/assets/**'], cb);
}

function compileSrcHBS() {
  return compileHBS(hbsFiles);
}

function watchSrcHBS(cb) {
  return watchHBS(hbsFiles, cb);
}

function compileSrcMD() {
  return compileMD(mdFiles);
}

function watchSrcMD(cb) {
  return watchMD(mdFiles, cb);
}

function watchSrcHelpers(cb) {
  return watchHelpers(helperFiles, hbsFiles, cb);
}

function generateWorkspaceSnippets() {
  return generateSnippets('workspace/**/index.html');
}

export const snippets = series(compileSrcHBS, compileSrcMD, generateWorkspaceSnippets);

const themeCLIOptions = {
  parent: {
    config: './patternfly-docs/patternfly-docs.config.js',
    cssconfig: './patternfly-docs/patternfly-docs.css.js',
    source: './patternfly-docs/patternfly-docs.source.js'
  }
};

export async function buildWebpack() {
  await docsFrameworkBuild('all', themeCLIOptions);
}

async function startWebpackDevServer() {
  await start(themeCLIOptions);

  // temporary auto deletion of public dir due to docs-framework bug
  rimraf(path.join(process.cwd(), 'public'), {}, () => {})
}

const buildSrc = parallel(compileSrcSASS, series(compileSrcHBS, compileSrcMD));
const buildDocs = series(buildSrc, copyDocs);
const watchAll = parallel(watchSrcSASS, watchSrcHBS, watchSrcMD, watchCopyDocs, watchSrcHelpers, startWebpackDevServer);

// Builds `dist` folder
export const buildPatternfly = parallel(series(buildDocs, minifyCSS), pfIcons, copyFA, copySourceFiles);

export const build = series(buildPatternfly, buildWebpack); // Builds `dist` and `public` folders

export function pfIcons() {
  return definedPfIcons();
}

export function pfIconFont() {
  return definedPfIconFont();
}

export const develop = series(buildPatternfly, watchAll);
