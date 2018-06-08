const gulp = require('gulp');
const insert = require('gulp-insert');
const rename = require('gulp-rename');
const replace = require('gulp-string-replace');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');

gulp.task('build', [
  'build-modules',
  'build-library',
  'copy-fa',
  'copy-source'
]);

gulp.task('copy-fa', () =>
  gulp
    .src('./node_modules/@fortawesome/fontawesome/styles.css')
    .pipe(rename('fontawesome.css'))
    .pipe(gulp.dest('./dist/assets/icons'))
);

gulp.task('build-tmp', () =>
  gulp
    .src('./src/patternfly/**/*.scss')
    .pipe(sassGlob())
    .pipe(replace('@import "../../patternfly-utilities";', ''))
    .pipe(gulp.dest('./tmp'))
);

gulp.task('build-tmp-full', () =>
  gulp
    .src('./src/patternfly/**/patternfly.scss')
    .pipe(insert.append('@import "./components/**/*.scss";\n'))
    .pipe(insert.append('@import "./layouts/**/*.scss";\n'))
    .pipe(sassGlob())
    .pipe(replace('@import "../../patternfly-utilities";', ''))
    .pipe(rename('patternfly-full.scss'))
    .pipe(gulp.dest('./tmp'))
);

gulp.task('build-library', ['build-tmp'], () =>
  gulp
    .src('./tmp/patternfly*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
);

gulp.task('build-modules', () =>
  gulp
    .src('./src/patternfly/{components,layouts,patterns}/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
);

gulp.task('copy-source', ['build-tmp-full', 'build-tmp'], () => {
  gulp.src('./README.md').pipe(gulp.dest('./dist'));
  gulp.src('./package.json').pipe(gulp.dest('./dist'));
  gulp.src('./tmp/**/*.scss').pipe(gulp.dest('./dist'));
  gulp.src('./static/**/*.*').pipe(gulp.dest('./dist'));
});
