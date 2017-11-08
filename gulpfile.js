const gulp = require('gulp')

const buildDevTask = require('./tasks/build-dev')
const buildSassTask = require('./tasks/build-sass')
const serveDevTask = require('./tasks/serve-dev')

gulp.task('build-dev', ['build-sass'], buildDevTask)
gulp.task('build-sass', buildSassTask)
gulp.task('serve-dev', ['build-dev'], serveDevTask)