const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');
const { src, watch } = require('gulp');
const through2 = require('through2');
const unified = require('unified');
const toMDAST = require('remark-parse');
const stringifyMDAST = require('remark-stringify');
const remark2rehype = require('remark-rehype');
const stringify = require('rehype-stringify');
const raw = require('rehype-raw');
const graymatter = require('gray-matter');
const Handlebars = require('handlebars');
const { extractExamples } = require('gatsby-theme-patternfly-org/helpers/extractExamples');
const { codeTransformer, getWrapperDiv } = require('./codeTransformer');
const visit = require('unist-util-visit');
const { render } = require('html-formatter');

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
function getCSSPaths() {
  const res = [];
  const fileContents = fs.readFileSync('./gatsby-browser.js', 'utf8');
  const regex = /import ['"](.*)['"];?/g;
  let result;

  // Include styles from gatsby-browser.js
  // eslint-disable-next-line no-cond-assign
  while ((result = regex.exec(fileContents))) {
    const srcFile = require.resolve(result[1], { paths: [path.resolve(__dirname, '../..')] });
    res.push(srcFile);
  }

  // Include all workspace styles
  glob.sync('src/patternfly/**/*.css').forEach(file => res.push(file));

  // Include ws-lite.css
  res.push(path.join(__dirname, 'ws-lite.css'));
  return res.map(file => path.relative(process.cwd(), file)).filter(file => !file.includes('assets'));
}

// Helper
function getHTMLWithStyles(cssPaths, html, bodyClassNames) {
  return `<!doctype html>
<html>
  <head>
    ${cssPaths.map(cssPath => `<link rel="stylesheet" href="../../../${cssPath}">`).join('\n    ')}
  </head>
  <body class="${bodyClassNames ? `${bodyClassNames}` : ''}">
    ${html.replace(/\s*\n/g, '\n    ')}
  </body>
</html>`;
}

// Helper
function getExampleDir(fullPath) {
  const split = fullPath.split(path.sep);
  const lastPath = split
    .slice(split.length - 4, split.length - 1)
    .join('/')
    .replace(/\/examples/, '')
    .replace(/.mdx?$/, '')
    .toLowerCase();

  return path.join(process.cwd(), `workspace/${lastPath}`);
}

function compileMD0(srcFiles) {
  const cssPaths = getCSSPaths();

  return srcFiles.pipe(
    through2.obj((chunk, _, cb2) => {
      const { data, content } = graymatter(chunk.contents.toString());
      const mdAST = unified()
        .use(toMDAST)
        .parse(content);
      const examples = extractExamples(mdAST, hbsInstance, chunk.history[0]);
      const section = data.section[0].toLowerCase();
      const title = path.basename(chunk.history[0], '.md').toLowerCase();
      examples.index = {
        code: unified()
          .use(toMDAST)
          .use(codeTransformer, { examples, section, title })
          .use(remark2rehype, { allowDangerousHTML: true })
          .use(raw)
          .use(stringify)
          .processSync(content).contents
      };

      const exampleDir = getExampleDir(chunk.history[0]);
      // Write new examples
      Object.entries(examples).forEach(([exampleName, example]) => {
        let html;
        const htmlPath = path.join(exampleDir, `${exampleName}.html`);
        if (exampleName !== 'index') {
          // .ws-core-l-flex .pf-l-flex .pf-l-flex
          const exampleDiv = getWrapperDiv(section, title, exampleName, example.code, 'ws-lite-full-example');
          html = getHTMLWithStyles(cssPaths, exampleDiv, 'ws-lite-full-page-example');
        } else {
          html = getHTMLWithStyles(cssPaths, example.code, 'ws-lite-index-example');
        }
        fs.outputFileSync(htmlPath, html);
      });
      // Delete old examples
      const newExamples = Object.keys(examples).map(exampleName => `${exampleName}.html`);
      fs.readdirSync(exampleDir)
        .filter(file => !newExamples.includes(file))
        .forEach(file => fs.removeSync(path.join(exampleDir, file)));

      cb2(null, chunk);
    })
  );
}

function compileMD(mdFiles) {
  return compileMD0(src(mdFiles));
}

function compileDocs0(srcFiles) {
  return srcFiles.pipe(
    through2.obj((chunk, _, cb2) => {
      const { data, content } = graymatter(chunk.contents.toString());
      const htmlMD = unified()
        .use(toMDAST)
        .use(() => ast =>
          visit(ast, 'code', node => {
            if (node.lang === 'hbs') {
              try {
                let html = hbsInstance.compile(node.value)({});
                html = render(` ${html} `).replace(/\t/g, '  ');
                node.lang = 'html';
                node.value = html;
              } catch (error) {
                console.error(`\x1b[31m${chunk.history[0]}: ${error} for PatternFly example ${node.value}\x1b[0m`);
              }
            }
          })
        )
        .use(stringifyMDAST)
        .processSync(content);

      const frontmatterYaml = `---\n${Object.entries(data)
        .map(([key, val]) => `${key}: ${val}`)
        .join('\n')}\n---\n`;

      const relativePath = path.relative(path.join(process.cwd(), 'src/patternfly'), chunk.history[0]);
      fs.outputFileSync(path.join(process.cwd(), `dist/docs/${relativePath}`), frontmatterYaml + htmlMD);

      cb2(null, chunk);
    })
  );
}

function compileDocs(mdFiles) {
  return compileDocs0(src(mdFiles));
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
  // Delete all component examples
  watcher.on('unlink', file => fs.removeSync(getExampleDir(file)));
}

module.exports = {
  hbsInstance,
  hbsFileMap,
  compileHBS,
  compileMD,
  watchHBS,
  watchMD,
  compileDocs
};
