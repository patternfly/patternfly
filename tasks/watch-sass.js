const browserSync = require('browser-sync')
const gulp = require('gulp')
const config = require('../gulpconfig')

module.exports = function () {
  gulp.watch(config.watchSassTask.src, config.watchSassTask.tasksToExecute)
}