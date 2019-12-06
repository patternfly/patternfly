const path = require('path');
const { src, dest, series, watch } = require('gulp');
const rename = require('gulp-rename');
const sass = require('node-sass');
const through2 = require('through2');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const fs = require('fs-extra');
const generateIcons = require('./src/icons/generateIcons.js');
const convertForIE = require('./build/npm-scripts/ie-convert-all.js');
const stylelint = require('stylelint');
const sassGraph = require('sass-graph');

const pficonFontName = 'pficon';
const config = {
  sourceFiles: [
    './src/patternfly/patternfly*.scss',
    './src/patternfly/{components,layouts,patterns,utilities}/**/*.scss',
    '!./src/patternfly/**/_all.scss',
    '!./src/patternfly/patternfly-imports.scss'
  ]
};

function pfIconFont() {
  return src('./src/icons/PfIcons/*.svg')
    .pipe(
      iconfontCss({
        fontName: pficonFontName,
        path: 'scss',
        targetPath: 'pficon.scss',
        fontPath: './',
        cssClass: 'pf-icon'
      })
    )
    .pipe(
      iconfont({
        fontName: pficonFontName,
        formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
        timestamp: Math.round(Date.now() / 1000)
      })
    )
    .pipe(dest('./src/patternfly/assets/pficon/'));
}

function copyFA() {
  return src(require.resolve('@fortawesome/fontawesome/styles.css'))
    .pipe(rename('fontawesome.css'))
    .pipe(dest('./dist/assets/icons'));
}

function copyAssets() {
  return src('./src/patternfly/assets/**').pipe(dest('./static/assets'));
}

function minifyCSS() {
  return src('./dist/patternfly.css')
    .pipe(rename('patternfly.min.css'))
    .pipe(sourcemaps.init())
    .pipe(postcss([cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist'));
}

function compileSASS0(srcFiles) {
  return srcFiles
    .pipe(
      through2.obj((chunk, _, cb2) => {
        let cssString
        let scss = chunk.contents.toString();
        const relativePath = path.relative(
          path.join(chunk._cwd, '/src/patternfly'),
          chunk.history[0]
        );
        const numDirectories = relativePath.includes('/')
          ? relativePath.match(/\//g).length
          : 0;
        // This hack is to not include sass-utilities/placeholders.scss CSS more than once
        // in our production patternfly.css BUT still be able to compile individual SCSS files.
        // As soon as node-sass is updated to a libsass version that supports @use rule, we should
        // `@use "../../sass-utilities/all";`
        if (numDirectories > 0) {
          scss = `@import "${'../'.repeat(numDirectories)}sass-utilities/all";\n${scss}`;
        }

        try {
          const css = sass.renderSync({
            // Pass filename for import resolution. Contents are not compiled.
            file: chunk.history[0],
            // Contents to compile
            data: scss
          });
          cssString = css.css.toString();
          // TODO: Cleaner way to to do relative image assets in component CSS
          if (numDirectories > 0) {
            cssString = cssString.replace(/.\/assets\/images/g, `${'../'.repeat(numDirectories)}assets/images`);
          }

          stylelint
            .lint({
              files: chunk.history[0],
              formatter: 'string'
            })
            .then(data => {
              if (data.errored) {
                console.error(data.output);
              }
            });
        } catch (error) {
          console.error(`Problem in ${path.relative(__dirname, chunk.history[0])}: ${error}`);
        }

        // Not kosher, but prevents path problems with watch/compile
        const outPath = path.join(
          chunk._cwd,
          'dist',
          relativePath.replace(/\.scss$/, '.css')
        );
        fs.ensureFileSync(outPath);
        fs.writeFileSync(outPath, cssString);
        cb2(null, chunk);
      })
    )
}

function compileSASS() {
  return compileSASS0(src(config.sourceFiles));
}

function watchSASS() {
  // Initial build
  // module.exports.build();

  const fileContents = fs.readFileSync('./gatsby-browser.js', 'utf8');
  const regex = /import ['"](.*\/dist\/.*)['"];/g;
  const gatsbyCSSFiles = [];
  const graph = sassGraph.parseDir('./src/patternfly').index;

  let result;
  while(result = regex.exec(fileContents)) {
    // Map CSS require to its SASS source file
    const srcFile = result[1]
      .replace('./dist/', path.join(__dirname, '/src/patternfly/'))
      .replace(/.css$/, '.scss');
    gatsbyCSSFiles.push(srcFile.replace(__dirname, '.'));
  }

  // TODO: track files and only rebuild what's changed. Requires tracking `css.stats.includedFiles`.
  const watcher = watch(config.sourceFiles, { delay: 0 });

  function visit(graphNode, acc) {
    if (!graphNode) {
      return acc;
    }
    graphNode.importedBy
      .forEach(file => {
        acc.push(file);
        visit(graph[file], acc);
      });
    
    return acc;
  }

  function compileGatsbySASS(file) {
    // Now find files this file is imported by
    const fullPath = './' + file;
    const graphNode = graph[fullPath];
    const dependents = visit(graphNode, [fullPath]);
    const toCompile = gatsbyCSSFiles.filter(file => dependents.includes(file));
    toCompile.push(fullPath);

    console.log('Compiling', toCompile.join(' '));
    compileSASS0(src(toCompile))
  }

  watcher.on('change', compileGatsbySASS);
  watcher.on('add', compileGatsbySASS);
}

function copySource() {
  return Promise.all([
    // Copy source files
    src(config.sourceFiles).pipe(dest('dist')),
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

function clean(cb) {
  ['./dist', './src/icons/PfIcons'].forEach(dir => fs.removeSync(dir));
  cb();
}

function pfIcons() {
  return generateIcons();
}

function buildIE() {
  return convertForIE();
}

module.exports = {
  build: series(clean, compileSASS, minifyCSS, pfIcons, copyFA, copySource),
  compileSASS,
  minifyCSS,
  buildIE,
  watchSASS,
  clean,
  pfIconFont,
  pfIcons,
  copyFA,
  copySource,
  copyAssets
};
