const gulp = require('gulp')

const buildDevTask = require('./tasks/build-dev')
const buildComponentsSassTask = require('./tasks/build-components-sass')
const buildComponentsTemplateTask = require('./tasks/build-components-template')
const startDevServerTask = require('./tasks/start-dev-server')
const watchDevTask = require('./tasks/watch-dev')
const watchSassTask = require('./tasks/watch-sass')

gulp.task('start-dev-server', ['build', 'watch'], startDevServerTask)

gulp.task('build', ['build-dev', 'build-components'])
gulp.task('build-dev', buildDevTask)
gulp.task('build-components', ['build-components-sass','build-components-template'])
gulp.task('build-components-sass', buildComponentsSassTask)
gulp.task('build-components-template', buildComponentsTemplateTask)

gulp.task('watch', ['watch-dev','watch-sass'])
gulp.task('watch-dev', watchDevTask)
gulp.task('watch-sass', watchSassTask)