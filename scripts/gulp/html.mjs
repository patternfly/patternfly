import path from 'path';
import fs from 'fs-extra';
import { glob } from 'glob';
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

const registeredHelpers = {};

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
  return compileHBS0(src(hbsFiles, { encoding: false }));
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
  return compileMD0(src(mdFiles, { encoding: false }));
}

// Helper
function onMDChange(file) {
  compileMD0(src(file, { encoding: false }));
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

/** synchronizes the registeredHelpers object and hbsInstance in sync with the helper file(s).
 * Returns the names of the helpers it has changed.
*/
async function registerHelpers(file) {
  const relativeFilePath = path.relative(path.join(process.cwd(), 'scripts/gulp'), file);

  // the query param is needed due to Node module caching
  const modulePath = `${relativeFilePath}?v=${Date.now()}`;
  const helpers = await import(modulePath);

  const changedHelpers = [];

  // purge any deleted helpers
  Object.keys(registeredHelpers).forEach((registeredHelperName) => {
    const helperRemoved = !helpers[registeredHelperName];
    if (helperRemoved) {
      hbsInstance.unregisterHelper(registeredHelperName);
      delete registeredHelpers[registeredHelperName];
      changedHelpers.push(registeredHelperName);
    }
  });

  // register new helpers / re-register changed helpers
  Object.keys(helpers || {}).forEach((helperName) => {
    const currentFunctionality = registeredHelpers[helperName];
    const newFunctionality = helpers[helperName];
    const functionalityIsChanged = currentFunctionality?.toString() !== newFunctionality.toString();

    if (functionalityIsChanged) {
      registeredHelpers[helperName] = newFunctionality;
      changedHelpers.push(helperName);
      hbsInstance.registerHelper(helperName, newFunctionality);
    }
  });

  return changedHelpers;
}

/** finds hbs templates that are impacted by helpers changes and reprocesses them */
async function refreshHelperImpactedHbsFiles(hbsFiles, changedHelperNames) {
  hbsFiles.forEach((hbsFile) => {
    const includesChangedHelper = changedHelperNames.some((helperName) =>
      fs.readFileSync(hbsFile, 'utf8').includes(helperName)
    );

    if (includesChangedHelper) {
      onHBSChange(hbsFile);
    }
  });
}

async function onHelperChange(file, hbsGlobPaths) {
  const changedHelpers = await registerHelpers(file);

  const hbsFiles = []
  hbsGlobPaths.forEach((hbsPath) => {
    hbsFiles.push(...glob.sync(path.join(process.cwd(), hbsPath)))
  })

  await refreshHelperImpactedHbsFiles(hbsFiles, changedHelpers);
}

export function watchHelpers(helperFiles, hbsFiles, cb) {
  const watcher = watch(helperFiles, { delay: 0 });

  watcher.on('change', (file) => onHelperChange(file, hbsFiles));
  watcher.on('add', (file) => onHelperChange(file, hbsFiles));
  cb();
}

registerHelpers('scripts/helpers.mjs');
