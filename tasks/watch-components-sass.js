const browserSync = require('browser-sync')
const gulp = require('gulp')
const config = require('../gulpconfig')

module.exports = function () {
  gulp.watch(config.watchComponentsSassTask.src, [config.watchComponentsSassTask.tasksToExecute])
}