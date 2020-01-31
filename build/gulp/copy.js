const { src, dest } = require('gulp');
const rename = require('gulp-rename');

function copyFA() {
  return src(require.resolve('@fortawesome/fontawesome/styles.css'))
    .pipe(rename('fontawesome.css'))
    .pipe(dest('./dist/assets/icons'));
}

function copyAssets() {
  return src('./src/patternfly/assets/**').pipe(dest('./static/assets'));
}

function copySource(sassFiles) {
  return Promise.all([
    // Copy source files
    src(sassFiles).pipe(dest('dist')),
    // Copy excluded source files
    src(['./src/patternfly/_*.scss', './src/patternfly/**/_all.scss', './src/patternfly/patternfly-imports.scss']).pipe(
      dest('dist')
    ),
    src('./src/patternfly/{components,layouts,patterns,utilities}/**/*.scss').pipe(dest('dist')),
    src('./src/patternfly/sass-utilities/*').pipe(dest('./dist/sass-utilities')),
    // Assets
    src('./static/assets/images/**/*').pipe(dest('./dist/assets/images/')),
    src('./src/patternfly/assets/**/*').pipe(dest('./dist/assets/')),
    // Icons
    src('./src/icons/definitions/*').pipe(dest('./dist/icons/')),
    src('./src/icons/PfIcons/*').pipe(dest('./dist/icons/PfIcons/')),
    // For NPM
    src('./README.md').pipe(dest('dist')),
    src('./package.json').pipe(dest('dist'))
  ]);
}

module.exports = {
  copyAssets,
  copyFA,
  copySource
}