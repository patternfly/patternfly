const gulp = require('gulp')

const buildComponentSassTask = require('./tasks/build-component-sass')
const buildComponentTemplateTask = require('./tasks/build-component-template')
const buildComponentTreeTask = require('./tasks/build-component-tree')
const buildPatternflySassTask = require('./tasks/build-patternfly-sass')
const startDevServerTask = require('./tasks/start-dev-server')
const startPublicServerTask = require('./tasks/start-public-server')
const watchComponentSassTask = require('./tasks/watch-component-sass')

gulp.task('start-dev-server', ['build', 'watch'], startDevServerTask)
gulp.task('start-public-server', ['build', 'watch'], startPublicServerTask)

gulp.task('build', ['build-component'])
gulp.task('build-component', [
  'build-component-sass',
  'build-component-template',
  'build-component-tree'
])
gulp.task('build-component-sass', buildComponentSassTask)
gulp.task('build-component-template', buildComponentTemplateTask)
gulp.task('build-component-tree', buildComponentTreeTask)
gulp.task('build-patternfly-sass', buildPatternflySassTask)

gulp.task('watch', ['watch-component-sass'])
gulp.task('watch-component-sass', watchComponentSassTask)
