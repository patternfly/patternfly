const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');
const { src, watch } = require('gulp');
const through2 = require('through2');
const unified = require('unified');
const toMDAST = require('remark-parse');
const Handlebars = require('handlebars');
const { extractExamples } = require('gatsby-theme-patternfly-org/helpers/extractExamples');

const hbsInstance = Handlebars.create();
hbsInstance.registerHelper('concat', (...params) => {
  // Ignore the object appended by handlebars.
  if (typeof params[params.length - 1] === 'object') {
    params.pop();
  }
  return params.join('');
});

function compileHBS0(srcFiles) {
  return srcFiles.pipe(
    through2.obj((chunk, _, cb2) => {
      hbsInstance.registerPartial(
        path.basename(chunk.history[0], '.hbs'), // Partial name
        chunk.contents.toString() // Partial template
      );
      
      cb2(null, chunk);
    })
  );
}

function compileHBS(hbsFiles) {
  return compileHBS0(src(hbsFiles));
}

// Helper
function getCSSPaths() {
  const res = [];
  const fileContents = fs.readFileSync('./gatsby-browser.js', 'utf8');
  const regex = /import ['"](.*)['"];?/g;
  let result;
  // eslint-disable-next-line no-cond-assign
  while ((result = regex.exec(fileContents))) {
    const srcFile = require.resolve(result[1], { paths: [ path.resolve(__dirname, '../..') ] });
    // Create symlink so our server can serve the symlink instead of the entire root dir
    res.push(path.relative(process.cwd(), srcFile));
  }

  return res;
}

function compileMD0(srcFiles) {
  const cssPaths = getCSSPaths();
  return srcFiles.pipe(
    through2.obj((chunk, _, cb2) => {
      const mdAST = unified().use(toMDAST).parse(chunk.contents.toString());
      const examples = extractExamples(mdAST, hbsInstance, chunk.history[0]);
      const split = chunk.history[0].split('/');
      const lastPath = split
        .slice(split.length - 4, split.length - 1)
        .join('/')
        .replace(/\/examples/, '')
        .replace(/.mdx?$/, '')
        .toLowerCase();

      Object.entries(examples).forEach(([example, html]) => {
        const htmlPath = path.join(process.cwd(), `/workspace/${lastPath}/${example}.html`);
        fs.ensureFileSync(htmlPath);
        fs.writeFileSync(htmlPath, `<!doctype html>
<html>
  <head>
    ${cssPaths.map(path => `<link rel="stylesheet" href="../../../${path}">`).join('\n    ')}
  </head>
  <body>
    ${html.replace(/\n/g, '    \n')}
  </body>
</html>`);
      });
      cb2(null, chunk);
    })
  );
}

function compileMD(mdFiles) {
  return compileMD0(src(mdFiles));
}

// Helper
function onMDChange(file) {
  compileMD0(src(file));
}

// Helper
function onHBSChange(file) {
  hbsInstance.registerPartial(
    path.basename(file, '.hbs'), // Partial name
    fs.readFileSync(file, 'utf8') // Partial template
  );

  const mdGlob = path.join(path.dirname(file), '/**/*.md');
  glob.sync(mdGlob).forEach(mdFile => onMDChange(mdFile));
}

function watchHBS(hbsFiles) {
  const watcher = watch(hbsFiles, { delay: 0 });

  watcher.on('change', onHBSChange);
  watcher.on('add', onHBSChange);
}

function watchMD(mdFiles) {
  const watcher = watch(mdFiles, { delay: 0 });

  watcher.on('change', onMDChange);
  watcher.on('add', onMDChange);
}

module.exports = {
  compileHBS,
  compileMD,
  watchHBS,
  watchMD
}
