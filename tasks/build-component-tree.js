const gulp = require('gulp')
const beautify = require('gulp-beautify')
const directoryMap = require("gulp-directory-map")
const transform = require('gulp-transform')
const config = require('../gulpconfig')

module.exports = function () {
  return gulp.src(config.buildComponentTreeTask.src)
    .pipe(directoryMap({
      filename: config.buildComponentTreeTask.treeName
    }))
    .pipe(transform('utf8', function (content, file) {
      let fileTree = JSON.parse(content)
      let componentTree = {}
      Object.keys(fileTree).forEach((componentName) => {
        let component = fileTree.componentName
        componentTree[componentName] = true
      })
      return JSON.stringify(componentTree)
    }))
    .pipe(beautify({indent_size: 2}))
    .pipe(gulp.dest(config.buildComponentTreeTask.dist))
}
