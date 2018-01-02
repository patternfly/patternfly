const gulp = require('gulp')
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

const resourceTypes = ['components', 'layouts', 'patterns']
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
  }
}

resourceTypes.forEach(resourceType => {
  config[resourceType] = {
    src: `./src/${resourceType}/**/*.scss`,
    dist: `./dist/${resourceType}`,
    filename: `${resourceType}.css`
  }
})

gulp.task('lint-styles', function lintCssTask() {
  return gulp
    .src('src/**/*.scss')
    .pipe(
      stylelint({
        fix: true,
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

gulp.task('build', function (callback) {
  runSequence(
    resourceTypes.map(resourceType => `build:${resourceType}`),
    'build-patternfly',
    callback
  )
})

gulp.task('build-docs', function (callback) {
  return gulp.src('src/**/*.scss')
    .pipe(sassdoc(config.docs))
})

gulp.task('build-patternfly', ['lint-styles'], function (callback) {
  return gulp.src(
    resourceTypes.map(resourceType => `./dist/${resourceType}/${resourceType}.css`)
  )
  .pipe(concat('patternfly.css'))
  .pipe(gulp.dest('./dist'))
})

gulp.task('clean', function () {
  return del(['dist'])
})

gulp.task('serve', ['build', 'build-docs'], function () {
  workspace.startServer()
  resourceTypes.forEach((resourceType) => {
    gulp.watch(config[resourceType].src, [`build:${resourceType}`])
  })
  gulp.watch('./src/**/*.html').on('change', workspace.reload)
  gulp.watch('./.theme/**/*', ['build-docs']).on('change', workspace.reload)
})


/**
 * Resource specific tasks
 */
resourceTypes.forEach((resourceType) => {
  gulp.task(`build:${resourceType}`, ['lint-styles'], function (callback) {
   runSequence(
     `build:${resourceType}:modules`,
     `build:${resourceType}:library`,
     callback
   )
  })

  gulp.task(`build:${resourceType}:modules`, function () {
   return gulp.src(config[resourceType].src)
     .pipe(changed(config[resourceType].dist))
     .pipe(inject.prepend(`@import 'utilities/_all';`))
     .pipe(sass(config.sass).on(`error`, sass.logError))
     .pipe(gulp.dest(config[resourceType].dist))
     .pipe(workspace.stream())
  })

  gulp.task(`build:${resourceType}:library`, function () {
   return gulp.src(config[resourceType].src)
     .pipe(inject.prepend(`@import 'utilities/_all';`))
     .pipe(sass(config.sass).on(`error`, sass.logError))
     .pipe(concat(config[resourceType].filename))
     .pipe(gulp.dest(config[resourceType].dist))
     .pipe(workspace.stream())
  })
})
