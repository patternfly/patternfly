const browserSync = require('browser-sync')
const gulp = require('gulp')
const gap = require('gulp-append-prepend')
const concat = require('gulp-concat')
const sass = require('gulp-sass')
const config = require('../gulpconfig')

module.exports = function () {
  return gulp.src(config.buildPatternflySassTask.src)
    .pipe(gap.prependText(config.buildPatternflySassTask.autoImports))
    .pipe(
      sass(config.buildPatternflySassTask.sassOptions).on('error', sass.logError)
    )
    .pipe(concat(config.buildPatternflySassTask.filename))
    .pipe(gulp.dest(config.buildPatternflySassTask.dist))
    .pipe(browserSync.stream())
}
