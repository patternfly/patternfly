const gulp = require('gulp')

const buildDevTask = require('./tasks/build-dev')
const buildSassTask = require('./tasks/build-sass')
const startDevServerTask = require('./tasks/start-dev-server')
const watchDevTask = require('./tasks/watch-dev')
const watchSassTask = require('./tasks/watch-sass')

gulp.task('start-dev-server', ['build', 'watch'], startDevServerTask)

gulp.task('build', ['build-dev', 'build-sass'])
gulp.task('build-dev', buildDevTask)
gulp.task('build-sass', buildSassTask)

gulp.task('watch', ['watch-dev','watch-sass'])
gulp.task('watch-dev', watchDevTask)
gulp.task('watch-sass', watchSassTask)