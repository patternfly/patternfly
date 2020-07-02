const { src, dest } = require('gulp');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const generateIcons = require('../../src/icons/generateIcons.js');

const pficonFontName = 'pficon';

function pfIcons() {
  return generateIcons();
}

function pfIconFont() {
  return src('./src/icons/PfIcons/*.svg')
    .pipe(
      iconfontCss({
        fontName: pficonFontName,
        path: 'scss',
        targetPath: 'pficon.scss',
        fontPath: './',
        cssClass: 'pf-icon'
      })
    )
    .pipe(
      iconfont({
        fontName: pficonFontName,
        formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
        timestamp: Math.round(Date.now() / 1000)
      })
    )
    .pipe(dest('./src/patternfly/assets/pficon/'));
}

module.exports = {
  pfIcons,
  pfIconFont
};
