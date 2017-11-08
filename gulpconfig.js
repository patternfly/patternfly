const path = require('path')

const DIST_DIR = path.resolve(__dirname, 'dist')

module.exports = {
  buildDevTask: {
    src: path.resolve(__dirname, 'src/index.html'),
    dist: DIST_DIR
  },
  buildComponentsSassTask: {
    src: path.resolve(__dirname, 'src/components/**/*.scss'),
    dist: DIST_DIR
  },
  buildComponentsTemplateTask: {
    src: path.resolve(__dirname, 'src/components/**/*.html'),
    dist: DIST_DIR
  },
  startDevServerTask: {
    rootDir: DIST_DIR,
    watchForChange: [
      path.resolve(DIST_DIR, 'index.html')
    ]
  },
  watchDevTask: {
    src: path.resolve(__dirname, 'src/index.html'),
    tasksToExecute: ['build-dev']
  },
  watchComponentSassTask: {
    src: path.resolve(__dirname, 'src/components/**/*.scss'),
    tasksToExecute: ['build-components-sass']
  }
}