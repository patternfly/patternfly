const gulp = require('gulp')
const concat = require('gulp-concat')
const gap = require('gulp-append-prepend')
const sass = require('gulp-sass')
const config = require('../gulpconfig')

module.exports = function () {
  return gulp.src(config.buildComponentSassTask.src)
    .pipe(gap.prependText(config.buildComponentSassTask.autoImports))
    .pipe(
      sass(config.buildComponentSassTask.sassOptions).on('error', sass.logError)
    )
    .pipe(gulp.dest(config.buildComponentSassTask.dist))
    .pipe(concat(config.buildComponentSassTask.libraryFilename))
    .pipe(gulp.dest(config.buildComponentSassTask.libraryDist))
}
