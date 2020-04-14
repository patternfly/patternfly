const { src, dest } = require('gulp');
const rename = require('gulp-rename');

function copyFA() {
  return src(require.resolve('@fortawesome/fontawesome/styles.css'))
    .pipe(rename('fontawesome.css'))
    .pipe(dest('dist/assets/icons'));
}

function copyAssets() {
  return src('src/patternfly/assets/**').pipe(dest('static/assets'));
}

function copySource(sassFiles) {
  return Promise.all([
    // Copy excluded source files
    src(['src/patternfly/**/_all.scss', 'src/patternfly/{components,layouts,patterns,utilities}/**/*.scss']).pipe(
      dest('dist')
    ),
    // Copy source files
    src('src/patternfly/sass-utilities/*').pipe(dest('dist/sass-utilities')),
    // addons
    src('src/patternfly/addons/*').pipe(dest('dist/addons')),
    // base
    src('src/patternfly/base/*').pipe(dest('dist/base')),
    // Assets
    src('static/assets/images/**/*').pipe(dest('dist/assets/images/')),
    src('src/patternfly/assets/**/*').pipe(dest('dist/assets/')),
    // Icons
    src('src/icons/definitions/*').pipe(dest('dist/icons/')),
    src('src/icons/PfIcons/*').pipe(dest('dist/icons/PfIcons/')),
    // For NPM
    src('README.md').pipe(dest('dist')),
    src('package.json').pipe(dest('dist'))
  ]);
}

function copyDocs() {
  return Promise.all([
    src('src/site/**').pipe(dest('dist/site')),
    src('src/patternfly/{components,layouts,patterns,utilities,demos}/**/*.{md,hbs,css}').pipe(dest('dist/site/docs')),
    src('RELEASE-NOTES.md').pipe(dest('dist'))
  ]);
}

module.exports = {
  copyAssets,
  copyFA,
  copySource,
  copyDocs
};
