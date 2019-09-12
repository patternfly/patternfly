const { src, dest, series } = require('gulp');
const rename = require('gulp-rename');
const replace = require('gulp-string-replace');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const iconfont = require('gulp-iconfont');
const gulpStylelint = require('gulp-stylelint');
const iconfontCss = require('gulp-iconfont-css');
const fs = require('fs-extra');
const header = require('gulp-header');
const experimentalFeatures = require('./experimental-features');

const pficonRunTimestamp = Math.round(Date.now() / 1000);
const pficonFontName = 'pficon';
const conf = {
  dirs: {
    build: ['./dist', './tmp', './src/icons/PfIcons']
  },
  files: {
    tmpSrc: [
      './dist/patternfly-variables.scss',
      './dist/patternfly-themes.scss',
      './dist/patternfly-shield-noninheritable.scss',
      './dist/patternfly-shield-inheritable.scss',
      './dist/patternfly-pf-icons.scss',
      './dist/patternfly-icons.scss',
      './dist/patternfly-globals.scss',
      './dist/patternfly-fonts.scss',
      './dist/patternfly-fa-icons.scss',
      './dist/patternfly-common.scss'
    ]
  }
};

function pfIconFont() {
  return src(['./src/icons/PfIcons/*.svg'])
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
        timestamp: pficonRunTimestamp
      })
    )
    .pipe(dest('./src/patternfly/assets/pficon/'));
}

function copyFA() {
  return src('./node_modules/@fortawesome/fontawesome/styles.css')
    .pipe(rename('fontawesome.css'))
    .pipe(dest('./dist/assets/icons'));
}

function tmp() {
  const experiments = [];
  experimentalFeatures.forEach(item => {
    experiments.push(`**/${item.path}/*.scss`);
  });
  return src(['./src/patternfly/**/*.scss', '!./src/patternfly/**/examples/*.scss'])
    .pipe(
      sassGlob({
        ignorePaths: ['**/examples/*.scss', ...experiments]
      })
    )
    .pipe(dest('./tmp'));
}

function library() {
  return src(['./tmp/patternfly*.scss', '!./tmp/patternfly-imports.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./dist'));
}

function lintCSS() {
  const options = { logs: false };
  return src('./dist/patternfly.css')
    .pipe(replace('stylelint-enable', '', options))
    .pipe(replace('stylelint-disable', '', options))
    .pipe(
      gulpStylelint({
        failAfterError: true,
        configFile: './.cssstylelint',
        defaultSeverity: 'error',
        reporters: [{ formatter: 'string', console: true }]
      })
    );
}

function minifyCSS() {
  return src('./dist/patternfly.css')
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(rename('patternfly.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./dist'));
}

function modules() {
  return src([
    './src/patternfly/{components,layouts,patterns,utilities}/**/*.scss',
    '!./src/patternfly/{components,layouts,patterns,utilities}/**/examples/*.scss'
  ])
    .pipe(header('@import "../../patternfly-imports";'))
    .pipe(sass().on('error', sass.logError))
    .pipe(replace('./assets/images', '../../assets/images'))
    .pipe(dest('./dist'));
}

function copySource() {
  return Promise.all([
    src('./README.md').pipe(dest('./dist')),
    src('./package.json').pipe(dest('./dist')),
    src('./tmp/**/*.scss').pipe(dest('./dist')),
    src('./static/assets/images/**/*.*').pipe(dest('./dist/assets/images/')),
    src('./src/patternfly/assets/**/*.*').pipe(dest('./dist/assets/')),
    src('./build/npm-scripts/ie-conversion-utils.js').pipe(dest('./dist/scripts')),
    // Icons
    src('./src/icons/definitions/**/*.*').pipe(dest('./dist/icons/')),
    src('./src/icons/PfIcons/**/*.*').pipe(dest('./dist/icons/PfIcons/'))
  ]);
}

function preClean(cb) {
  conf.dirs.build.forEach(dir => fs.removeSync(dir));
  cb();
}

function postClean(cb) {
  conf.files.tmpSrc.forEach(dir => fs.removeSync(dir));
  cb();
}

function pfIcons(cb) {
  // eslint-disable-next-line global-require
  require('./src/icons/generateIcons.js');
  cb();
}

function ie(cb) {
  // eslint-disable-next-line global-require
  require('./build/npm-scripts/ie-convert-all.js');
  cb();
}

module.exports = {
  build: series(preClean, pfIcons, modules, tmp, copyFA, copySource, library, minifyCSS, lintCSS, postClean),
  preClean,
  postClean,
  pfIconFont,
  pfIcons,
  ie
};
