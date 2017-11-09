const path = require('path')

const DIST_DIR = path.resolve(__dirname, 'dist')
const WORKSPACE_DIR = path.resolve(__dirname, './.pf/workspace')

module.exports = {
  buildComponentTreeTask: {
    src: path.resolve(__dirname, 'src/components/**/*'),
    dist: DIST_DIR,
    treeName: 'components.json'
  },
  buildComponentSassTask: {
    src: path.resolve(__dirname, 'src/components/**/*.scss'),
    dist: DIST_DIR
  },
  buildComponentTemplateTask: {
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
  watchComponentSassTask: {
    src: path.resolve(__dirname, 'src/components/**/*.scss'),
    tasksToExecute: ['build-component-sass']
  }
}
