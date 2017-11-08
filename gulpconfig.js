const path = require('path')

const DIST_DIR = path.resolve(__dirname, 'dist')

module.exports = {
  buildDevTask: {
    src: path.resolve(__dirname, 'src/index.html'),
    dist: DIST_DIR
  },
  buildSassTask: {
    src: path.resolve(__dirname, 'src/components/**/*.scss'),
    dist: DIST_DIR
  },
  serveDevTask: {
    rootDir: DIST_DIR
  },
  watchSassTask: {
    src: path.resolve(__dirname, 'src/components/**/*.scss'),
    tasksToExecute: ['build-sass']
  }
}