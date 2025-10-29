import gulp from 'gulp';
import rename from 'gulp-rename';

const { src, watch, dest } = gulp;

export function copyFA() {
  return src('node_modules/@fortawesome/fontawesome/styles.css', { encoding: false })
    .pipe(rename('fontawesome.css'))
    .pipe(dest('dist/assets/icons'));
}

export function copyAssets() {
  return src('src/patternfly/assets/**', { encoding: false }).pipe(dest('static/assets'));
}

export function copySource() {
  return Promise.all([
    // Copy excluded source files
    src(['src/patternfly/**/_all.scss', 'src/patternfly/{components,layouts,patterns,utilities,themes}/**/*.scss', './src/patternfly/components/**/themes/**/*.scss'], { encoding: false }).pipe(
      dest('dist')
    ),
    // Copy source files
    src('src/patternfly/*.scss', { encoding: false }).pipe(dest('dist')),
    src('src/patternfly/sass-utilities/**', { encoding: false }).pipe(dest('dist/sass-utilities')),
    // base
    src('src/patternfly/base/**', { encoding: false }).pipe(dest('dist/base')),
    // Assets
    src('static/assets/images/**/*', { encoding: false }).pipe(dest('dist/assets/images/')),
    src('src/patternfly/assets/**/*', { encoding: false }).pipe(dest('dist/assets/')),
    // Icons
    src('src/icons/definitions/*', { encoding: false }).pipe(dest('dist/icons/')),
    src('src/icons/PfIcons/*', { encoding: false }).pipe(dest('dist/icons/PfIcons/')),
    // For NPM
    src('*.md', { encoding: false }).pipe(dest('dist')),
    src('package.json', { encoding: false }).pipe(dest('dist'))
  ]);
}

// const docFiles = ['patternfly-docs/site/**', 'src/patternfly/**/examples/*.css', 'src/patternfly/**/deprecated/*.css'];
const docFiles = ['src/patternfly/**/examples/*.css', 'src/patternfly/**/deprecated/*.css'];

export function copyDocs() {
  return src(docFiles, { encoding: false }).pipe(dest('dist/docs'));
}

export function watchCopyDocs(cb) {
  const watcher = watch(docFiles, { delay: 0 });
  watcher.on('change', copyDocs);
  watcher.on('add', copyDocs);
  cb();
}
