const gulp = require('gulp')

const buildComponentsSassTask = require('./tasks/build-components-sass')
const buildComponentsTemplateTask = require('./tasks/build-components-template')
const startDevServerTask = require('./tasks/start-dev-server')
const startPublicServerTask = require('./tasks/start-public-server')
const watchComponentsSassTask = require('./tasks/watch-components-sass')

gulp.task('start-dev-server', ['build', 'watch'], startDevServerTask)
gulp.task('start-public-server', ['build', 'watch'], startPublicServerTask)

gulp.task('build', ['build-components'])
gulp.task('build-components', ['build-components-sass','build-components-template'])
gulp.task('build-components-sass', buildComponentsSassTask)
gulp.task('build-components-template', buildComponentsTemplateTask)

gulp.task('watch', ['watch-components-sass'])
gulp.task('watch-components-sass', watchComponentsSassTask)
