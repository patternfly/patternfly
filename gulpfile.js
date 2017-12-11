const gulp = require('gulp')
const concat = require('gulp-concat')
const inject = require('gulp-inject-string')
const sass = require('gulp-sass')
const path = require('path')
const DesignSystemWorkspace = require('pf-workspace')

const config = {
  buildComponents: {
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
    port: 3000
  }
}
const workspace = new DesignSystemWorkspace(config.workspace)

gulp.task('serve', ['build', 'watch'], function () {
  workspace.start()
})

gulp.task('build', ['build-components', 'copy-files'])

gulp.task('build-components', function () {
  return gulp.src(config.buildComponents.src)
    .pipe(inject.prepend(`@import 'bootstrap/scss/_mixins';`))
    .pipe(inject.prepend(`@import 'bootstrap/scss/_variables';`))
    .pipe(inject.prepend(`@import 'bootstrap/scss/_functions';`))
    .pipe(sass({
      includePaths: [
        path.resolve(__dirname, './node_modules')
      ]
    }).on('error', sass.logError))
    .pipe(gulp.dest(config.buildComponents.dist))
    .pipe(concat(config.buildComponents.filename))
    .pipe(gulp.dest(config.buildComponents.dist))
    .pipe(workspace.bs.reload({ stream: true }))
})

gulp.task('copy-files', function () {
  return gulp.src(config.copyFiles.src)
    .pipe(gulp.dest(config.copyFiles.dist))
})

gulp.task('watch', ['watch:components', 'watch:static-files'])

gulp.task('watch:components', function () {
  gulp.watch(config.watch.sassFiles, ['build-components'])
})

gulp.task('watch:static-files', function () {
  gulp.watch(config.watch.staticFiles, ['copy-files'])
})
