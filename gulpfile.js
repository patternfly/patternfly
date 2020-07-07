const { removeSync } = require('fs-extra');
const { series, parallel, src, dest } = require('gulp');
const browserSync = require('browser-sync').create();
const { copyFA, copySource, copyAssets, copySite, copyDocs } = require('./scripts/gulp/copy');
const { compileSASS, minifyCSS, watchSASS } = require('./scripts/gulp/sass');
const { pfIconFont, pfIcons } = require('./scripts/gulp/icons');
const { compileHBS, compileMD, watchHBS, watchMD, compileDocs } = require('./scripts/gulp/html');
const { lintCSSComments, lintCSSFunctions } = require('./scripts/gulp/lint');
const { generateSnippets } = require('./scripts/gulp/snippets');

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
    './dist',
    './src/icons/PfIcons',
    '.circleci/css-size-report/node_modules',
    '.circleci/css-size-report/package-lock.json',
    '.circleci/css-size-report/report.html',
    'src/icons/PfIcons/',
    'static/assets/fontawesome/',
    'static/assets/fonts/',
    'static/assets/pficon/',
    'test/results/',
    'test/scenario_tests/'
  ];
  cleanDirs.forEach(dir => removeSync(dir));
  cb();
}

function copySourceFiles() {
  return copySource(sassFiles);
}

function compileSrcSASS() {
  return compileSASS(sassFiles);
}

function watchSrcSASS() {
  return watchSASS(sassFiles);
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

function buildDocs() {
  return compileDocs(mdFiles);
}

function copyWorkspaceAssets() {
  return src('dist/assets/**/*').pipe(dest('assets'));
}

function generateWorkspaceSnippets() {
  return generateSnippets('workspace/**/index.html');
}

function startWorkspaceServer() {
  browserSync.init({
    server: {
      baseDir: './',
      directory: true
    },
    files: ['workspace/**/*.html', 'dist/**/*.css', 'scripts/gulp/ws-lite.css'],
    startPath: 'workspace'
  });
}

const buildWorkspace = parallel(compileSrcSASS, series(compileSrcHBS, compileSrcMD), copyWorkspaceAssets);

module.exports = {
  build: series(clean, parallel(series(compileSrcSASS, minifyCSS), pfIcons, copyFA, copySite, copySourceFiles)),
  buildDocs: series(compileSrcHBS, buildDocs, copyDocs),
  buildWorkspace,
  develop: series(buildWorkspace, parallel(watchSrcSASS, watchSrcHBS, watchSrcMD, startWorkspaceServer)),
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
  copySite,
  copyDocs,
  lintCSSFunctions,
  lintCSSComments,
  lintCSS: parallel(lintCSSFunctions, lintCSSComments),
  snippets: series(compileSrcHBS, compileSrcMD, generateWorkspaceSnippets)
};
