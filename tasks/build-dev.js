const gulp = require('gulp')
const config = require('../gulpconfig')

module.exports = function () {
  return gulp.src(config.buildDevTask.src)
    .pipe(gulp.dest(config.buildDevTask.dist))
}