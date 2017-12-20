const gulp = require('gulp')
const changed = require('gulp-changed')
const concat = require('gulp-concat')
const del = require('del')
const inject = require('gulp-inject-string')
const replace = require('gulp-replace')
const sass = require('gulp-sass')
const path = require('path')
const runSequence = require('run-sequence')
const workspace = require('./.workspace')

const config = {
  componentStyles: {
    src: './src/components/**/*.scss',
    dist: './dist/components',
    filename: 'components.css'
  },
  layoutStyles: {
    src: './src/layouts/**/*.scss',
    dist: './dist/layouts',
    filename: 'layouts.css'
  },
  patternStyles: {
    src: './src/patterns/**/*.scss',
    dist: './dist/patterns',
    filename: 'patterns.css'
  },
  libraryStyles: {
    src: [
      './dist/components/components.css',
      './dist/layouts/layouts.css',
      './dist/patterns/patterns.css'
    ],
    dist: './dist',
    filename: 'patternfly.css'
  },
  html: {
    src: './src/**/*.{html,htm}',
    dist: './dist'
  },
  docs: {
    src: './src/**/*.scss',
    outputPath: 'docs',
    generate: {
      title: 'PatternFly Development Documenation',
      server: false,
      rootPath: 'docs',
      overviewPath: 'README.md',
      sideNav: true
    }
  },
  sass: {
    outputStyle: 'compressed',
    includePaths: [
      path.resolve(__dirname, './src'),
      path.resolve(__dirname, './node_modules')
    ]
  }
}

gulp.task('build', function (callback) {
  runSequence(
    'clean',
    ['build:component-styles', 'build:layout-styles', 'build:pattern-styles', 'build:html'],
    ['concat:component-styles', 'concat:layout-styles', 'concat:pattern-styles'],
    'concat:library-styles',
    callback
  )
})

gulp.task('build:component-styles', function () {
  return gulp.src(config.componentStyles.src)
    .pipe(changed(config.componentStyles.dist))
    .pipe(inject.prepend(`@import 'utilities/_all';`))
    .pipe(inject.prepend(`@import 'bootstrap/scss/_mixins';`))
    .pipe(inject.prepend(`@import 'bootstrap/scss/_variables';`))
    .pipe(inject.prepend(`@import 'bootstrap/scss/_functions';`))
    .pipe(sass(config.sass).on('error', sass.logError))
    .pipe(gulp.dest(config.componentStyles.dist))
})

gulp.task('build:layout-styles', function () {
  return gulp.src(config.layoutStyles.src)
    .pipe(changed(config.layoutStyles.dist))
    .pipe(inject.prepend(`@import 'utilities/_all';`))
    .pipe(inject.prepend(`@import 'bootstrap/scss/_mixins';`))
    .pipe(inject.prepend(`@import 'bootstrap/scss/_variables';`))
    .pipe(inject.prepend(`@import 'bootstrap/scss/_functions';`))
    .pipe(sass(config.sass).on('error', sass.logError))
    .pipe(gulp.dest(config.layoutStyles.dist))
})

gulp.task('build:pattern-styles', function () {
  return gulp.src(config.patternStyles.src)
    .pipe(changed(config.patternStyles.dist))
    .pipe(inject.prepend(`@import 'utilities/_all';`))
    .pipe(inject.prepend(`@import 'bootstrap/scss/_mixins';`))
    .pipe(inject.prepend(`@import 'bootstrap/scss/_variables';`))
    .pipe(inject.prepend(`@import 'bootstrap/scss/_functions';`))
    .pipe(sass(config.sass).on('error', sass.logError))
    .pipe(gulp.dest(config.patternStyles.dist))
})

gulp.task('build:html', function () {
  return gulp.src(config.html.src)
    .pipe(changed(config.html.dist))
    .pipe(gulp.dest(config.html.dist))
})

gulp.task('concat:library-styles', function () {
  return gulp.src(config.libraryStyles.src)
    .pipe(concat(config.libraryStyles.filename))
    .pipe(gulp.dest(config.libraryStyles.dist))
})

gulp.task('concat:component-styles', function () {
  return gulp.src(`${config.componentStyles.dist}/**/*.css`)
    .pipe(concat(config.componentStyles.filename))
    .pipe(gulp.dest(config.componentStyles.dist))
})

gulp.task('concat:layout-styles', function () {
  return gulp.src(`${config.layoutStyles.dist}/**/*.css`)
    .pipe(concat(config.layoutStyles.filename))
    .pipe(gulp.dest(config.layoutStyles.dist))
})

gulp.task('concat:pattern-styles', function () {
  return gulp.src(`${config.patternStyles.dist}/**/*.css`)
    .pipe(concat(config.patternStyles.filename))
    .pipe(gulp.dest(config.patternStyles.dist))
})

gulp.task('clean', function () {
  return del(['dist/**/*'])
})

gulp.task('dev', ['build'], function () {
  workspace.startServer()
})
