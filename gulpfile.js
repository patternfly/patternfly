const { removeSync } = require('fs-extra');
const { series, parallel } = require('gulp');
const { copyFA, copySource, copyAssets } = require('./build/gulp/copy');
const { compileSASS, minifyCSS, watchSASS } = require('./build/gulp/sass');
const { pfIconFont, pfIcons } = require('./build/gulp/icons');
const { compileHBS, compileMD, watchHBS, watchMD } = require('./build/gulp/html');
const { buildIE11 } = require('./build/gulp/ie11');
const { lintCSSComments, lintCSSFunctions, lintCSSSize } = require('./build/gulp/lint');

const sassFiles = [
  './src/patternfly/patternfly*.scss',
  './src/patternfly/{components,layouts,patterns,utilities}/**/*.scss',
  '!./src/patternfly/**/_all.scss',
  '!./src/patternfly/patternfly-imports.scss'
];

function clean(cb) {
  ['./dist', './src/icons/PfIcons'].forEach(dir => removeSync(dir));
  cb();
}

function copySourceFiles() {
  return copySource(sassFiles);
}

function compileSrcSASS() {
  return compileSASS(sassFiles);
}

module.exports = {
  build: series(clean, compileSrcSASS, minifyCSS, pfIcons, copyFA, copySourceFiles),
  develop: parallel(watchSASS, series(watchHBS, watchMD)),
  buildHTML: series(compileHBS, compileMD),
  compileSASS: compileSrcSASS,
  minifyCSS,
  buildIE11,
  watchSASS,
  clean,
  pfIconFont,
  pfIcons,
  copyFA,
  copySource: copySourceFiles,
  copyAssets,
  lintCSSFunctions,
  lintCSSComments,
  lintCSSSize,
  lintCSS: parallel(lintCSSFunctions, lintCSSComments, lintCSSSize)
};
