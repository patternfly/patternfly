const path = require('path');
const fs = require('fs-extra');
const { src, watch, dest } = require('gulp');
const sass = require('sass');
const stylelint = require('stylelint');
const sassGraph = require('sass-graph');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const through2 = require('through2');

function compileSASS0(srcFiles) {
  return srcFiles.pipe(
    through2.obj((chunk, _, cb2) => {
      let cssString;
      let scss = chunk.contents.toString();
      const relativePath = path.relative(path.join(chunk._cwd, '/src/patternfly'), chunk.history[0]);
      const loggedPath = path.relative(process.cwd(), chunk.history[0]);
      const numDirectories = relativePath.split(path.sep).length - 1;
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
        console.error(`Problem in ${loggedPath}: ${error}`);
      }

      // Not kosher, but prevents path problems with watchSASS
      const outPath = path.join(chunk._cwd, 'dist', relativePath.replace(/\.scss$/, '.css'));
      fs.ensureFileSync(outPath);
      if (cssString) fs.writeFileSync(outPath, cssString);
      cb2(null, chunk);
    })
  );
}

function compileSASS(sassFiles) {
  return compileSASS0(src(sassFiles));
}

// Helper
function getDocCSSFiles() {
  const res = [];
  const fileContents = fs.readFileSync('./patternfly-docs.css.js', 'utf8');
  const regex = /import ['"](.*\/dist\/.*)['"];?/g;

  let result;
  // eslint-disable-next-line no-cond-assign
  while ((result = regex.exec(fileContents))) {
    // Map CSS require to its SASS source file
    const srcFile = result[1]
      .replace('./dist/', path.join(process.cwd(), '/src/patternfly/'))
      .replace(/.css$/, '.scss');
    res.push(srcFile);
  }

  return res;
}

function watchSASS(sassFiles) {
  const docCSSFiles = getDocCSSFiles();
  const graph = sassGraph.parseDir('./src/patternfly').index;
  const watcher = watch(sassFiles, { delay: 0 });

  function visit(graphNode, acc) {
    if (!graphNode) {
      return acc;
    }
    graphNode.importedBy.forEach(file => {
      acc.push(file);
      visit(graph[file], acc);
    });

    return acc;
  }

  function compileDocSASS(sassFile) {
    // Now find files this file is imported by
    const fullPath = path.join(process.cwd(), sassFile);
    const graphNode = graph[fullPath];
    const dependents = visit(graphNode, []);
    const toCompile = [fullPath, ...docCSSFiles.filter(file => dependents.includes(file))];
    compileSASS0(src(toCompile));
    console.log('Compiled', toCompile.map(file => path.relative(process.cwd(), file)).join(' '));
  }

  watcher.on('change', compileDocSASS);
  watcher.on('add', compileDocSASS);
}

const postcssOptions = {
  preset: ['default', { mergeLonghand: false }]
};

function minifyCSS() {
  return src('./dist/patternfly.css')
    .pipe(rename('patternfly.min.css'))
    .pipe(sourcemaps.init())
    .pipe(postcss([cssnano(postcssOptions)]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist'));
}

module.exports = {
  compileSASS,
  minifyCSS,
  watchSASS
};
