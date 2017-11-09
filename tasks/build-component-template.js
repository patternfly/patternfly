const gulp = require('gulp')
const config = require('../gulpconfig')

module.exports = function () {
  return gulp.src(config.buildComponentTemplateTask.src)
    .pipe(gulp.dest(config.buildComponentTemplateTask.dist))
}
