const gulp = require('gulp')
const config = require('../gulpconfig')

module.exports = function () {
  return gulp.src(config.buildComponentsTemplateTask.src)
    .pipe(gulp.dest(config.buildComponentsTemplateTask.dist))
}