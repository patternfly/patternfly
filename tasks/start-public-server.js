const browserSync = require('browser-sync')
const gulp = require('gulp')
const config = require('../gulpconfig')

module.exports = function () {
  browserSync.init({
    open: false,
    server: config.startPublicServerTask.rootDir,
    files: config.startPublicServerTask.filesToWatch,
    tunnel: true
  })
}
