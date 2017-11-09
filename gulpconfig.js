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
    dist: DIST_DIR,
    autoImports: [
      '@import "bootstrap/scss/functions";',
      '@import "bootstrap/scss/variables";',
      '@import "bootstrap/scss/mixins";'
    ],
    sassOptions: {
      includePaths: [
        path.resolve(__dirname, 'node_modules/')
      ]
    }
  },
  buildPatternflySassTask: {
    src: path.resolve(__dirname, 'src/components/**/*.scss'),
    dist: DIST_DIR,
    autoImports: [
      '@import "bootstrap/scss/functions";',
      '@import "bootstrap/scss/variables";',
      '@import "bootstrap/scss/mixins";'
    ],
    filename: 'patternfly.css',
    sassOptions: {
      includePaths: [
        path.resolve(__dirname, 'node_modules/')
      ]
    }
  },
  buildComponentTemplateTask: {
    src: path.resolve(__dirname, 'src/components/**/*.html'),
    dist: DIST_DIR
  },
  startDevServerTask: {
    rootDir: [
      WORKSPACE_DIR,
      DIST_DIR
    ],
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
    tasksToExecute: ['build-component-sass', 'build-patternfly-sass']
  }
}
