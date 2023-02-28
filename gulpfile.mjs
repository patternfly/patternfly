import fs from'fs';
import gulp from'gulp';
import rimraf from'rimraf';
import { copyFA, copySource, copyAssets, copyDocs, watchCopyDocs } from'./scripts/gulp/copy.mjs';
import { compileSASS, minifyCSS, watchSASS } from'./scripts/gulp/sass.mjs';
import { pfIconFont as definedPfIconFont, pfIcons as definedPfIcons } from'./scripts/gulp/icons.mjs';
import { compileHBS, compileMD, watchHBS, watchMD } from'./scripts/gulp/html.mjs';
import { lintCSSComments, lintCSSFunctions } from'./scripts/gulp/lint.mjs';
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

function watchSrcSASS() {
  return watchSASS(['./src/patternfly/**/*.scss', '!./src/patternfly/assets/**']);
}

function compileSrcHBS() {
  return compileHBS(hbsFiles);
}

function watchSrcHBS() {
  return watchHBS(hbsFiles);
}

function compileSrcMD() {
  return compileMD(mdFiles);
}

function watchSrcMD() {
  return watchMD(mdFiles);
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

function startWebpackDevServer() {
  start(themeCLIOptions);
}

const buildSrc = parallel(compileSrcSASS, series(compileSrcHBS, compileSrcMD));
const buildDocs = series(buildSrc, copyDocs);
const watchAll = parallel(watchSrcSASS, watchSrcHBS, watchSrcMD, watchCopyDocs, startWebpackDevServer);

// Builds `dist` folder
export const buildPatternfly = parallel(series(buildDocs, minifyCSS), pfIcons, copyFA, copySourceFiles);

export const build = series(buildPatternfly, buildWebpack); // Builds `dist` and `public` folders

export function pfIcons() {
  return definedPfIcons();
}

export function pfIconFont() {
  return definedPfIconFont();
}

export const develop = series(buildPatternfly, buildWebpack, watchAll);

export const lintCSS = parallel(lintCSSFunctions, lintCSSComments);


