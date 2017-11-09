const browserSync = require('browser-sync')
const gulp = require('gulp')
const sass = require('gulp-sass')
const config = require('../gulpconfig')

module.exports = function () {
  return gulp.src(config.buildComponentSassTask.src)
    .pipe(
      sass().on('error', sass.logError)
    )
    .pipe(gulp.dest(config.buildComponentSassTask.dist))
    .pipe(browserSync.stream())
}
