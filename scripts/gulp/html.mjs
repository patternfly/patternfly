import path from 'path';
import fs from 'fs-extra';
import glob from 'glob';
import gulp from 'gulp';
import through2 from 'through2';
import { unified } from 'unified';
import toMDAST from 'remark-parse';
import stringifyMDAST from 'remark-stringify';
import Handlebars from 'handlebars';
import visit from 'unist-util-visit';
import prettyhtml from '@starptech/prettyhtml';

const { src, watch } = gulp;
export const hbsFileMap = {};
export const hbsInstance = Handlebars.create();
hbsInstance.registerHelper('concat', (...params) => {
  // Ignore the object appended by handlebars.
  if (typeof params[params.length - 1] === 'object') {
    params.pop();
  }
  return params.join('');
});

hbsInstance.registerHelper('removeWhiteSpaceForPrettier', () => {
  return 'removeWhiteSpaceForPrettier';
})

hbsInstance.registerHelper('ifEquals', (arg1, arg2, options) => {
  return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
});

// Using ifEquals else if with helpers
// {{#ifEquals toolbar-toggle--IsExpanded "false"}}
//   false
// {{else ifEquals toolbar-toggle--IsExpanded "true"}}
//   true
// {{else}}
//   something else
// {{/ifEquals}}

hbsInstance.registerHelper('ternary', (testValue, trueValue, fallback) => {
  return testValue ? trueValue : fallback;
});

// Using ternary
// if custom value for select--width: {{#> select select--width='160px'}}Filter by name{{/select}}
// else custom value for select--width: {{#> select)}}Filter by name{{/select}}
// {{#> select select--id=(concat toolbar--id '-select-name') select--width=(ternary toolbar-items-search-filter--width toolbar-items-search-filter--width '175px') select-toggle--icon="fas fa-filter"}}
// {{> toolbar-item-search-filter toolbar-items-search-filter--width="300px"}}

function compileHBS0(srcFiles) {
  return srcFiles.pipe(
    through2.obj((chunk, _, cb2) => {
      const file = chunk.history[0];
      const partialName = path.basename(file, '.hbs');
      hbsFileMap[partialName] = file;
      registerHBSPartial(file);
      cb2(null, chunk);
    })
  );
}

export function compileHBS(hbsFiles) {
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
                  .replace(/ class>/g, '>')
                  .replace(/[\n\t\s\r]+removeWhiteSpaceForPrettier[\n\t\s\r]+/g, '');
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

export function compileMD(mdFiles) {
  return compileMD0(src(mdFiles));
}

// Helper
function onMDChange(file) {
  compileMD0(src(file));
}

// Helper
function registerHBSPartial(file) {
  const partialName = path.basename(file, '.hbs'); // partial name
  const partialNameFull = path.dirname(file.replace(/^.*src\/patternfly\//g, '')) + '/' + partialName; // partial name with path
  const partialContents = fs.readFileSync(file, 'utf8'); // partial contents

  hbsInstance.registerPartial(
    partialName,
    partialContents
  );
  hbsInstance.registerPartial(
    partialNameFull,
    partialContents
  );
}

// Helper
function onHBSChange(file) {
  registerHBSPartial(file)
  const mdGlob = path.join(path.dirname(file), '/**/*.md');
  glob.sync(mdGlob).forEach(mdFile => onMDChange(mdFile));
}

export function watchHBS(hbsFiles, cb) {
  const watcher = watch(hbsFiles, { delay: 0 });

  watcher.on('change', onHBSChange);
  watcher.on('add', onHBSChange);
  cb();
}

export function watchMD(mdFiles, cb) {
  const watcher = watch(mdFiles, { delay: 0 });

  watcher.on('change', onMDChange);
  watcher.on('add', onMDChange);
  cb();
}

// Helper which allows a booleans value to be inversed, similar to how notting a variable with ! works in regular JS
hbsInstance.registerHelper('inverse', bool => bool ? null : 'true');

