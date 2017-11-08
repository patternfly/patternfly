const browserSync = require('browser-sync')
const gulp = require('gulp')
const config = require('../gulpconfig')

module.exports = function () {
  browserSync.init({
    server: config.serveDevTask.rootDir
  })
}