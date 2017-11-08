const path = require('path')

module.exports = {
  components: {
    sass: {
      src: path.resolve(__dirname, 'src/components/**/*.scss'),
      dist: path.resolve(__dirname, 'dist')
    }
  }
}