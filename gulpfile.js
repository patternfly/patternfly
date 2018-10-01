const gulp = require('gulp');
const rename = require('gulp-rename');
const replace = require('gulp-string-replace');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');

const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');

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
    .pipe(replace('@import "../../patternfly-utilities";', ''))
    .pipe(gulp.dest('./tmp'))
);

gulp.task('build-library', ['build-tmp'], () =>
  gulp
    .src('./tmp/patternfly*.scss')
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

gulp.task('copy-source', ['build-tmp'], () => {
  gulp.src('./README.md').pipe(gulp.dest('./dist'));
  gulp.src('./package.json').pipe(gulp.dest('./dist'));
  gulp.src('./tmp/**/*.scss').pipe(gulp.dest('./dist'));
  gulp.src('./static/assets/images/**/*.*').pipe(gulp.dest('./dist/assets/images/'));
  gulp.src('./src/patternfly/assets/**/*.*').pipe(gulp.dest('./dist/assets/'));
});
