const gulp = require('gulp');
const insert = require('gulp-insert');
const replace = require('gulp-string-replace');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');

gulp.task('build', ['build-modules', 'build-library', 'copy-source']);

gulp.task('build-tmp', () =>
  gulp
    .src('./src/patternfly/**/*.scss')
    .pipe(insert.append('@import "./components/**/*.scss";\n'))
    .pipe(insert.append('@import "./layouts/**/*.scss";\n'))
    .pipe(sassGlob())
    .pipe(replace('@import "../../patternfly-utilities";', ''))
    .pipe(gulp.dest('./tmp'))
);

gulp.task('build-library', ['build-tmp'], () =>
  gulp
    .src('./tmp/patternfly.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
);

gulp.task('build-modules', () =>
  gulp
    .src('./src/patternfly/{components,layouts,patterns}/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
);

gulp.task('copy-source', ['build-tmp'], () => {
  gulp.src('./tmp/**/*.scss').pipe(gulp.dest('./dist'));
  gulp.src('./static/**/*.*').pipe(gulp.dest('./dist'));
});
