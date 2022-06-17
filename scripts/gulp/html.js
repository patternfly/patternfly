const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');
const { src, watch } = require('gulp');
const through2 = require('through2');
const unified = require('unified');
const toMDAST = require('remark-parse');
const stringifyMDAST = require('remark-stringify');
const Handlebars = require('handlebars');
const visit = require('unist-util-visit');
const prettyhtml = require('@starptech/prettyhtml');

const hbsFileMap = {};
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
      const partialName = path.basename(chunk.history[0], '.hbs');
      hbsFileMap[partialName] = chunk.history[0];
      hbsInstance.registerPartial(
        partialName, // Partial name
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
function separateFrontmatter(mdStr) {
  const frontmatterStart = mdStr.indexOf('---');
  const frontmatterEnd = mdStr.indexOf('---', frontmatterStart + 3) + 3;

  if (frontmatterStart !== -1 && frontmatterEnd !== -1) {
    return {
      frontmatter: mdStr.substring(frontmatterStart, frontmatterEnd),
      contents: `\n${mdStr.substr(frontmatterEnd)}`
    };
  }

  return {
    frontmatter: '',
    contents: mdStr
  };
}

function compileMD0(srcFiles) {
  return srcFiles.pipe(
    through2.obj((chunk, _, cb2) => {
      const { frontmatter, contents } = separateFrontmatter(chunk.contents.toString());
      const htmlMD = unified()
        .use(toMDAST)
        .use(() => ast =>
          visit(ast, 'code', node => {
            if (node.lang === 'hbs') {
              try {
                let html = hbsInstance.compile(node.value)({});
                html = prettyhtml(html)
                  .contents.replace(/class /g, '')
                  .replace(/ class>/g, '>');
                node.lang = 'html';
                node.value = html;
              } catch (error) {
                console.error(`\x1b[31m${chunk.history[0]}: ${error} for PatternFly example ${node.value}\x1b[0m`);
              }
            }
          })
        )
        .use(stringifyMDAST)
        .processSync(contents);

      const relativePath = path.relative(path.join(process.cwd(), 'src/patternfly'), chunk.history[0]);
      fs.outputFileSync(path.join(process.cwd(), `dist/docs/${relativePath}`), frontmatter + htmlMD);

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

// Helper which allows a booleans value to be inversed, similar to how notting a variable with ! works in regular JS
hbsInstance.registerHelper('inverse', bool => bool ? null : 'true');

module.exports = {
  hbsInstance,
  hbsFileMap,
  compileHBS,
  compileMD,
  watchHBS,
  watchMD
};
