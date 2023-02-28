import gulp from 'gulp';
import rename from 'gulp-rename';

const { src, watch, dest } = gulp;

export function copyFA() {
  return src('node_modules/@fortawesome/fontawesome/styles.css')
    .pipe(rename('fontawesome.css'))
    .pipe(dest('dist/assets/icons'));
}

export function copyAssets() {
  return src('src/patternfly/assets/**').pipe(dest('static/assets'));
}

export function copySource() {
  return Promise.all([
    // Copy excluded source files
    src(['src/patternfly/**/_all.scss', 'src/patternfly/{components,layouts,patterns,utilities,themes}/**/*.scss', './src/patternfly/components/**/themes/**/*.scss']).pipe(
      dest('dist')
    ),
    // Copy source files
    src('src/patternfly/*.scss').pipe(dest('dist')),
    src('src/patternfly/sass-utilities/**').pipe(dest('dist/sass-utilities')),
    // base
    src('src/patternfly/base/**').pipe(dest('dist/base')),
    // Assets
    src('static/assets/images/**/*').pipe(dest('dist/assets/images/')),
    src('src/patternfly/assets/**/*').pipe(dest('dist/assets/')),
    // Icons
    src('src/icons/definitions/*').pipe(dest('dist/icons/')),
    src('src/icons/PfIcons/*').pipe(dest('dist/icons/PfIcons/')),
    // For NPM
    src('*.md').pipe(dest('dist')),
    src('package.json').pipe(dest('dist'))
  ]);
}

const docFiles = ['src/site/**', 'src/patternfly/**/examples/*.css'];

export function copyDocs() {
  return src(docFiles).pipe(dest('dist/docs'));
}

export function watchCopyDocs() {
  const watcher = watch(docFiles, { delay: 0 });
  watcher.on('change', copyDocs);
  watcher.on('add', copyDocs);
}
