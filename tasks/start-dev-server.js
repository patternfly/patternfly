const browserSync = require('browser-sync')
const gulp = require('gulp')
const config = require('../gulpconfig')

module.exports = function () {
  browserSync.init({
    open: false,
    server: config.startDevServerTask.rootDir
  })
  gulp.watch(config.startDevServerTask.watchForChange).on('change', browserSync.reload)
}