const gulp = require('gulp')
const concat = require('gulp-concat')
const inject = require('gulp-inject-string')
const replace = require('gulp-replace')
const sass = require('gulp-sass')
const sassdoc = require('sassdoc')
const path = require('path')
const bs = require('browser-sync').create()

const config = {
  buildStyles: {
    src: [
      './src/**/*.scss'
    ],
    dist: './dist',
    filename: 'components.css'
  },
  copyFiles: {
    src: './src/**/*.{css,json,js,html,htm,scss}',
    dist: './dist'
  },
  watch: {
    sassFiles: './src/**/*.scss',
    staticFiles: './src/**/*.{css,html,htm,json,js}'
  },
  workspace: {
    publicDirectory: path.resolve(__dirname, 'dist'),
    sassDocDirectory: path.resolve(__dirname, 'sassdoc'),
    port: 3000
  }
}



gulp.task('build', ['build-styles', 'build-docs', 'copy-files'])

gulp.task('build-styles', function () {
  return gulp.src(config.buildStyles.src)
    .pipe(inject.prepend(`@import 'bootstrap/scss/_mixins';`))
    .pipe(inject.prepend(`@import 'bootstrap/scss/_variables';`))
    .pipe(inject.prepend(`@import 'bootstrap/scss/_functions';`))
    .pipe(sass({
      includePaths: [
        path.resolve(__dirname, './node_modules')
      ]
    }).on('error', sass.logError))
    .pipe(gulp.dest(config.buildStyles.dist))
    .pipe(concat(config.buildStyles.filename))
    .pipe(gulp.dest(config.buildStyles.dist))
})

gulp.task('copy-files', function () {
  return gulp.src(config.copyFiles.src)
    .pipe(gulp.dest(config.copyFiles.dist))
})

gulp.task('build-docs', function () {
  return gulp.src(config.buildStyles.src)
    .pipe(sassdoc({
      theme: 'patternfly'
    }))
})

gulp.task('watch', ['watch:components', 'watch:static-files'])

gulp.task('watch:components', function () {
  gulp.watch(config.watch.sassFiles, ['build-styles', 'build-docs'])
})

gulp.task('watch:static-files', function () {
  gulp.watch(config.watch.staticFiles, ['copy-files'])
})
