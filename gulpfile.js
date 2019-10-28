const path = require('path');
const { src, dest, series, watch } = require('gulp');
const rename = require('gulp-rename');
const sass = require('node-sass');
const through2 = require('through2');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const fs = require('fs-extra');
const generateIcons = require('./src/icons/generateIcons.js');
const convertForIE = require('./build/npm-scripts/ie-convert-all.js');
const stylelint = require('stylelint');

const pficonFontName = 'pficon';
const config = {
  sourceFiles: [
    './src/patternfly/patternfly*.scss',
    './src/patternfly/{components,layouts,patterns,utilities}/**/*.scss',
    '!./src/patternfly/**/_all.scss'
  ]
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
        timestamp: Math.round(Date.now() / 1000)
      })
    )
    .pipe(dest('./src/patternfly/assets/pficon/'));
}

function copyFA() {
  return src(require.resolve('@fortawesome/fontawesome/styles.css'))
    .pipe(rename('fontawesome.css'))
    .pipe(dest('./dist/assets/icons'));
}

function minifyCSS() {
  return src('./dist/patternfly.css')
    .pipe(rename('patternfly.min.css'))
    .pipe(sourcemaps.init())
    .pipe(postcss([cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./dist'));
}

function compileSASS() {
  return src(config.sourceFiles)
    .pipe(
      through2.obj((chunk, _, cb2) => {
        const scss = chunk.contents.toString();
        try {
          const css = sass.renderSync({
            // Pass filename for import resolution. Contents are not compiled.
            file: chunk.history[0],
            // This hack is to not include sass-utilities/placeholders.scss CSS more than once
            // in our production patternfly.css BUT still be able to compile individual SCSS files.
            // As soon as node-sass is updated to a libsass version that supports @use rule, we should
            // change `// @import "../../sass-utilities/all";` to `@use "../../sass-utilities/all";`
            data: scss.replace('// @import "../../sass-utilities/all";', '@import "../../sass-utilities/all";')
          });
          chunk.contents = Buffer.from(css.css);

          stylelint
            .lint({
              files: chunk.history[0],
              formatter: 'string'
            })
            .then(data => {
              if (data.errored) {
                console.error(data.output);
              }
            });
        } catch (error) {
          console.error(`Problem in ${path.relative(__dirname, chunk.history[0])}: ${error}`);
        }

        chunk.history.push(chunk.history[0].replace(/.scss$/, '.css'));
        cb2(null, chunk);
      })
    )
    .pipe(dest('./dist'));
}

function watchSASS() {
  module.exports.build();
  // TODO: track files and only rebuild what's changed. Requires tracking `css.stats.includedFiles`.
  watch(
    ['./src/patternfly/patternfly*.scss', './src/patternfly/{components,layouts,patterns,utilities}/**/*.scss'],
    {},
    compileSASS
  );
}

function copySource() {
  return Promise.all([
    // Copy source files
    src(config.sourceFiles).pipe(dest('./dist')),
    src('./src/patternfly/_*.scss').pipe(dest('./dist')),
    src('./src/patternfly/sass-utilities/*').pipe(dest('./dist/sass-utilities')),
    src('./src/patternfly/components/_all.scss').pipe(dest('./dist/components')),
    src('./src/patternfly/layouts/_all.scss').pipe(dest('./dist/layouts')),
    // Assets
    src('./static/assets/images/**/*').pipe(dest('./dist/assets/images/')),
    src('./src/patternfly/assets/**/*').pipe(dest('./dist/assets/')),
    // Icons
    src('./src/icons/definitions/*').pipe(dest('./dist/icons/')),
    src('./src/icons/PfIcons/*').pipe(dest('./dist/icons/PfIcons/')),
    // For NPM
    src('./README.md').pipe(dest('./dist')),
    src('./package.json').pipe(dest('./dist'))
  ]);
}

function clean(cb) {
  ['./dist', './src/icons/PfIcons'].forEach(dir => fs.removeSync(dir));
  cb();
}

function pfIcons() {
  return generateIcons();
}

function buildIE() {
  return convertForIE();
}

module.exports = {
  build: series(clean, compileSASS, minifyCSS, pfIcons, copyFA, copySource),
  compileSASS,
  minifyCSS,
  buildIE,
  watchSASS,
  clean,
  pfIconFont,
  pfIcons,
  copyFA,
  copySource
};
