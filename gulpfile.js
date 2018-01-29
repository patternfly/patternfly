const gulp = require('gulp')
const bulkSass = require('gulp-sass-bulk-import')
const changed = require('gulp-changed')
const concat = require('gulp-concat')
const del = require('del')
const inject = require('gulp-inject-string')
const replace = require('gulp-replace')
const sass = require('gulp-sass')
const sassdoc = require('sassdoc')
const stylelint = require('gulp-stylelint')
const path = require('path')
const runSequence = require('run-sequence')
const workspace = require('./.workspace')

const config = {
  docs: {
    dest: 'docs',
    theme: 'patternfly',
    styles: [
      '/dist/components/components.css',
      '/dist/layouts/layouts.css',
      '/dist/patterns/patterns.css'
    ]
  },
  sass: {
    outputStyle: 'compressed',
    includePaths: [
      path.resolve(__dirname, './src'),
      path.resolve(__dirname, './node_modules')
    ]
  },
  patternfly: {
    src: './src/**/*.scss',
    main: './src/patternfly.scss',
    dest: './dist'
  }
}

gulp.task('lint-styles', function lintCssTask() {
  return gulp
    .src(config.patternfly.src)
    .pipe(
      stylelint({
        fix: true,
        failAfterError: false,
        reporters: [
          {formatter: 'string', console: true}
        ]
      })
    )
    .pipe(gulp.dest('src'))
})


/**
 * Global tasks
 */
gulp.task('fresh-build', function (callback) {
  runSequence('clean', 'build', callback)
})

gulp.task('build', ['build-patternfly', 'build-bootstrap', 'build-docs'])

gulp.task('build-docs', function () {
  return gulp.src(config.patternfly.src)
    .pipe(sassdoc(config.docs).on(`error`, sass.logError))
})

gulp.task('build-patternfly', ['lint-styles'], function () {
  return gulp.src(config.patternfly.main)
    .pipe(bulkSass())
    .pipe(sass(config.sass).on(`error`, sass.logError))
    .pipe(gulp.dest(config.patternfly.dest))
    .pipe(workspace.stream())
})

gulp.task(`build-bootstrap`, function () {
  return gulp.src('./node_modules/bootstrap/scss/bootstrap.scss')
    .pipe(inject.prepend(`@import '../../../src/utilities/_all';`))
    .pipe(sass(config.sass).on(`error`, sass.logError))
    .pipe(gulp.dest('./dist'))
    .pipe(workspace.stream())
})

gulp.task('clean', function () {
  return del(['dist'])
})

gulp.task('serve', ['build-patternfly', 'build-bootstrap', 'build-docs'], function () {
  workspace.startServer()

  gulp.watch(config.patternfly.src, ['build'])
  gulp.watch('./src/**/*.html').on('change', workspace.reload)
})
