const { src, dest, series, watch } = require('gulp');
const rename = require('gulp-rename');
const replace = require('gulp-string-replace');
const sass = require('node-sass');
const through2 = require('through2');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const iconfont = require('gulp-iconfont');
const gulpStylelint = require('gulp-stylelint');
const iconfontCss = require('gulp-iconfont-css');
const fs = require('fs-extra');
const generateIcons = require('./src/icons/generateIcons.js');

const pficonFontName = 'pficon';

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
        timestamp: Math.round(Date.now() / 1000)
      })
    )
    .pipe(dest('./src/patternfly/assets/pficon/'));
}

function copyFA() {
  return src('./node_modules/@fortawesome/fontawesome/styles.css')
    .pipe(rename('fontawesome.css'))
    .pipe(dest('./dist/assets/icons'));
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

function build() {
  return src([
    './src/patternfly/patternfly*.scss',
    './src/patternfly/{components,layouts,patterns,utilities}/**/*.scss'
  ])
    .pipe(
      through2.obj((chunk, _, cb2) => {
        const css = sass.renderSync({
          file: chunk.history[0] // Pass filename for import resolution
          // outputStyle: 'compressed',
        });
        // eslint-disable-next-line
        console.log('Compiled', css.stats.entry, `(${css.stats.includedFiles.length} files included)`);
        chunk.contents = Buffer.from(css.css);

        chunk.history.push(chunk.history[0].replace(/.scss$/, '.css'));
        cb2(null, chunk);
      })
    )
    .pipe(dest('./dist'));
}

function watchCSS() {
  series(build, lintCSS, pfIcons, copyFA, copySource)();
  // TODO: track files and only rebuild what's changed. Requires tracking `css.stats.includedFiles`.
  watch(
    ['./src/patternfly/patternfly*.scss', './src/patternfly/{components,layouts,patterns,utilities}/**/*.scss'],
    {},
    build
  );
}

function copySource() {
  return Promise.all([
    src('./README.md').pipe(dest('./dist')),
    src('./package.json').pipe(dest('./dist')),
    src('./tmp/**/*.scss').pipe(dest('./dist')),
    src('./static/assets/images/**/*').pipe(dest('./dist/assets/images/')),
    src('./src/patternfly/assets/**/*').pipe(dest('./dist/assets/')),
    src('./build/npm-scripts/ie-conversion-utils.js').pipe(dest('./dist/scripts')),
    // Icons
    src('./src/icons/definitions/*').pipe(dest('./dist/icons/')),
    src('./src/icons/PfIcons/*').pipe(dest('./dist/icons/PfIcons/'))
  ]);
}

function clean(cb) {
  ['./dist', './src/icons/PfIcons'].forEach(dir => fs.removeSync(dir));
  cb();
}

function pfIcons(cb) {
  // eslint-disable-next-line global-require
  generateIcons.then(res => cb());
  // .then(cb);
}

function buildIE(cb) {
  // eslint-disable-next-line global-require
  require('./build/npm-scripts/ie-convert-all.js');
  cb();
}

//
module.exports = {
  build: series(clean, build, buildIE, minifyCSS, lintCSS, pfIcons, copyFA, copySource),
  buildCSS: build,
  watchCSS,
  clean,
  copy: copySource,
  pfIconFont,
  pfIcons
};
