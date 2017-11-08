const gulp = require('gulp')

const buildDevTask = require('./tasks/build-dev')
const buildSassTask = require('./tasks/build-sass')
const serveDevTask = require('./tasks/serve-dev')
const watchSassTask = require('./tasks/watch-sass')

gulp.task('build-dev', buildDevTask)
gulp.task('build-sass', buildSassTask)
gulp.task('serve-dev', ['build-dev', 'build-sass', 'watch-sass'], serveDevTask)
gulp.task('watch-sass', watchSassTask)