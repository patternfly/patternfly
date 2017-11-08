const path = require('path')

module.exports = {
  buildDevTask: {
    src: path.resolve(__dirname, 'src/index.html'),
    dist: path.resolve(__dirname, 'dist')
  },
  buildSassTask: {
    src: path.resolve(__dirname, 'src/components/**/*.scss'),
    dist: path.resolve(__dirname, 'dist')
  },
  serveDevTask: {
    rootDir: path.resolve(__dirname, 'dist')
  }
}