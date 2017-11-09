const path = require('path')

const DIST_DIR = path.resolve(__dirname, 'dist')
const WORKSPACE_DIR = path.resolve(__dirname, './.pf/workspace')

module.exports = {
  buildComponentsSassTask: {
    src: path.resolve(__dirname, 'src/components/**/*.scss'),
    dist: DIST_DIR
  },
  buildComponentsTemplateTask: {
    src: path.resolve(__dirname, 'src/components/**/*.html'),
    dist: DIST_DIR
  },
  startDevServerTask: {
    rootDir: WORKSPACE_DIR,
    filesToWatch: [
      `${WORKSPACE_DIR}/**/*.html`,
      `${DIST_DIR}/**/*.html`,
      `${DIST_DIR}/**/*.css`
    ]
  },
  startPublicServerTask: {
    rootDir: WORKSPACE_DIR,
    filesToWatch: [
      `${WORKSPACE_DIR}/**/*.html`,
      `${DIST_DIR}/**/*.html`,
      `${DIST_DIR}/**/*.css`
    ]
  },
  watchComponentsSassTask: {
    src: path.resolve(__dirname, 'src/components/**/*.scss'),
    tasksToExecute: ['build-components-sass']
  }
}
