const gulp = require('gulp');
const rename = require('gulp-rename');
const replace = require('gulp-string-replace');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');

const iconfont = require('gulp-iconfont');

const pficonRunTimestamp = Math.round(Date.now() / 1000);
const iconfontCss = require('gulp-iconfont-css');

const pficonFontName = 'pficon';

gulp.task('build-pficonfont', () => {
  gulp
    .src(['./src/icons/PfIcons/*.svg'])
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
    .pipe(gulp.dest('./src/patternfly/assets/pficon/'));
});

gulp.task('build', ['build-modules', 'build-library', 'copy-fa', 'copy-source', 'minify-css']);

gulp.task('copy-fa', () =>
  gulp
    .src('./node_modules/@fortawesome/fontawesome/styles.css')
    .pipe(rename('fontawesome.css'))
    .pipe(gulp.dest('./dist/assets/icons'))
);

gulp.task('build-tmp', () =>
  gulp
    .src(['./src/patternfly/**/*.scss', '!./src/patternfly/**/examples/*.scss'])
    .pipe(
      sassGlob({
        ignorePaths: ['**/examples/*.scss']
      })
    )
    .pipe(gulp.dest('./tmp'))
);

gulp.task('build-library', ['build-tmp'], () =>
  gulp
    .src(['./tmp/patternfly*.scss', '!./tmp/patternfly-imports.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
);

gulp.task('minify-css', ['build-library'], () => {
  gulp
    .src('./dist/patternfly.css')
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(rename('patternfly.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-modules', () =>
  gulp
    .src([
      './src/patternfly/{components,layouts,patterns,utilities}/**/*.scss',
      '!./src/patternfly/{components,layouts,patterns,utilities}/**/examples/*.scss'
    ])
    .pipe(sass().on('error', sass.logError))
    .pipe(replace('./assets/images', '../../assets/images'))
    .pipe(gulp.dest('./dist'))
);

gulp.task('copy-source', ['copy-icons', 'build-tmp'], () => {
  gulp.src('./README.md').pipe(gulp.dest('./dist'));
  gulp.src('./package.json').pipe(gulp.dest('./dist'));
  gulp.src('./tmp/**/*.scss').pipe(gulp.dest('./dist'));
  gulp.src('./static/assets/images/**/*.*').pipe(gulp.dest('./dist/assets/images/'));
  gulp.src('./src/patternfly/assets/**/*.*').pipe(gulp.dest('./dist/assets/'));
  gulp.src('./build/npm-scripts/ie-conversion-utils.js').pipe(gulp.dest('./dist/scripts'));
});

gulp.task('copy-icons', () => {
  gulp.src('./src/icons/definitions/**/*.*').pipe(gulp.dest('./dist/icons/'));
  gulp.src('./src/icons/PfIcons/**/*.*').pipe(gulp.dest('./dist/icons/PfIcons/'));
});
