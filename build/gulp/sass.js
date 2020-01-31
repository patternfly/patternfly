const path = require('path');
const fs = require('fs-extra');
const { src, watch, dest } = require('gulp');
const sass = require('node-sass');
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
      const loggedPath = path.relative(__dirname, chunk.history[0]);
      const numDirectories = relativePath.includes('/') ? relativePath.match(/\//g).length : 0;
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
      fs.writeFileSync(outPath, cssString);
      cb2(null, chunk);
    })
  );
}

function compileSASS(sassFiles) {
  return compileSASS0(src(sassFiles));
}

function watchSASS() {
  // Initial build
  module.exports.build();

  const fileContents = fs.readFileSync('./gatsby-browser.js', 'utf8');
  const regex = /import ['"](.*\/dist\/.*)['"];/g;
  const gatsbyCSSFiles = [];
  const graph = sassGraph.parseDir('./src/patternfly').index;

  let result;
  // eslint-disable-next-line no-cond-assign
  while ((result = regex.exec(fileContents))) {
    // Map CSS require to its SASS source file
    const srcFile = result[1].replace('./dist/', path.join(__dirname, '/src/patternfly/')).replace(/.css$/, '.scss');
    gatsbyCSSFiles.push(srcFile);
  }

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

  function compileGatsbySASS(sassFile) {
    // Now find files this file is imported by
    const fullPath = path.join(__dirname, sassFile);
    const graphNode = graph[fullPath];
    const dependents = visit(graphNode, [fullPath]);
    const toCompile = gatsbyCSSFiles.filter(file => dependents.includes(file));
    compileSASS0(src(toCompile));
    console.log('Compiled', toCompile.map(file => path.relative(__dirname, file)).join(' '));
  }

  watcher.on('change', compileGatsbySASS);
  watcher.on('add', compileGatsbySASS);
}

function minifyCSS() {
  return src('./dist/patternfly.css')
    .pipe(rename('patternfly.min.css'))
    .pipe(sourcemaps.init())
    .pipe(postcss([cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist'));
}

module.exports = {
  compileSASS,
  minifyCSS,
  watchSASS
}