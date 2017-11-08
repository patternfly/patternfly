const gulp = require('gulp')
const sass = require('gulp-sass')
const config = require('../gulpconfig')

module.exports = function () {
  return gulp.src(config.components.sass.src)
    .pipe(
      sass().on('error', sass.logError)
    )
    .pipe(gulp.dest(config.components.sass.dist));
}