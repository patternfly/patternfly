const { removeSync } = require('fs-extra');
const { series, parallel } = require('gulp');
const { copyFA, copySource, copyAssets, copyDocs } = require('./scripts/gulp/copy');
const { compileSASS, minifyCSS, watchSASS } = require('./scripts/gulp/sass');
const { pfIconFont, pfIcons } = require('./scripts/gulp/icons');
const { compileHBS, compileMD, watchHBS, watchMD } = require('./scripts/gulp/html');
const { lintCSSComments, lintCSSFunctions } = require('./scripts/gulp/lint');
const { generateSnippets } = require('./scripts/gulp/snippets');
const { start } = require('theme-patternfly-org/scripts/cli/start');
const { build } = require('theme-patternfly-org/scripts/cli/build');

const sassFiles = [
  './src/patternfly/patternfly*.scss',
  './src/patternfly/base/patternfly*.scss',
  './src/patternfly/{components,layouts,patterns,utilities}/**/*.scss',
  '!./src/patternfly/**/_all.scss'
];
const hbsFiles = ['./src/patternfly/**/*.hbs'];
const mdFiles = ['./src/patternfly/**/*.md'];

function clean(cb) {
  const cleanDirs = [
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
    'public'
  ];
  cleanDirs.forEach(dir => removeSync(dir));
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

const themeCLIOptions = {
  parent: {
    config: './patternfly-docs.config.js',
    cssconfig: './patternfly-docs.css.js',
    source: './patternfly-docs.source.js'
  }
};

function buildWebpack() {
  build(['all'], themeCLIOptions);
}

function startWebpackDevServer() {
  start(themeCLIOptions);
}

const buildSrc = parallel(compileSrcSASS, series(compileSrcHBS, compileSrcMD));
const buildDocs = series(buildSrc, copyDocs);
const watchAll = parallel(watchSrcSASS, watchSrcHBS, watchSrcMD, startWebpackDevServer);

// Builds `dist` folder
const buildPatternfly = parallel(series(buildDocs, minifyCSS), pfIcons, copyFA, copySourceFiles);

module.exports = {
  // Builds `dist` and `public` folders
  build: series(buildPatternfly, buildWebpack),
  buildPatternfly,
  develop: series(buildDocs, watchAll),
  compileSASS: compileSrcSASS,
  minifyCSS,
  watchSASS: watchSrcSASS,
  watchHBS: watchSrcHBS,
  watchMD: watchSrcMD,
  clean,
  pfIconFont,
  pfIcons,
  copyFA,
  copySource: copySourceFiles,
  copyAssets,
  copyDocs,
  lintCSSFunctions,
  lintCSSComments,
  lintCSS: parallel(lintCSSFunctions, lintCSSComments),
  snippets: series(compileSrcHBS, compileSrcMD, generateWorkspaceSnippets)
};
