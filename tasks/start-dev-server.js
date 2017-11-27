const browserSync = require('browser-sync')
const gulp = require('gulp')
const config = require('../gulpconfig')
const PfWorkspace = require('../.pf/workspace/server')

module.exports = function () {
  const workspace = new PfWorkspace(config.startDevServerTask.workspace)
  workspace.start()
  // browserSync.init({
  //   open: false,
  //   server: config.startDevServerTask.rootDir,
  //   files: config.startDevServerTask.filesToWatch
  // })
}
