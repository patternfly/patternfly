const browserSync = require('browser-sync')
const gulp = require('gulp')
const sass = require('gulp-sass')
const config = require('../gulpconfig')

module.exports = function () {
  return gulp.src(config.buildSassTask.src)
    .pipe(
      sass().on('error', sass.logError)
    )
    .pipe(gulp.dest(config.buildSassTask.dist))
    .pipe(browserSync.stream())
}