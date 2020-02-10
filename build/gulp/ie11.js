const path = require('path');
const fs = require('fs');
const glob = require('glob');
const presetEnv = require('postcss-preset-env');
const postcss = require('postcss');
const cssvariables = require('postcss-css-variables');
/**
 * Build an array of global variables
 * @param stylesheetPath: string  an absolute path to a stylesheet
 * @example /Users/path/to/patternfly-base.css
 */
function getGlobalVarDefinitions(stylesheetPath) {
  const fullPfStylesheet = fs.readFileSync(stylesheetPath, 'utf8').match(/[^\r\n]+/g);
  const startToken = '--pf-global--';
  return fullPfStylesheet
    .filter(el => el.trim().startsWith(startToken))
    .map(el => el.substring(el.indexOf(startToken), el.lastIndexOf(';') + 1));
}

/**
 * Build an array of local variables
 * @param stylesheet: string  a well-formed CSS stylesheet as a string
 * @example `:root {--mycolor: #ff0;} html {color: var(--mycolor);}`
 */
function getLocalVarDefinitions(stylesheet) {
  const singleStylesheet = stylesheet.match(/[^\r\n]+/g);
  const startToken = '--pf-';
  return singleStylesheet
    .filter(el => el.trim().startsWith(startToken))
    .map(el => el.substring(el.indexOf(startToken), el.lastIndexOf(';') + 1))
    .filter(el => !el.startsWith('--pf-global--'));
}

/**
 * Transforms variables to static values
 * @param stylesheet: string  a well-formed CSS stylesheet as a string
 * @example `:root {--mycolor: #ff0;} html {color: var(--mycolor);}`
 */
function transformVars(stylesheet) {
  return postcss([
    presetEnv({
      stage: 0,
      features: {
        'custom-properties': false
      }
    }),
    cssvariables()
  ])
    .process(stylesheet, {
      from: undefined,
      to: undefined
    })
    .then(result => result.css)
    .catch(error => {
      throw new Error(error);
    });
}

/**
 * Transforms modern grid definitions into legacy IE11 grid definitions
 * @param stylesheet: string  a well-formed static CSS stylesheet as a string
 * @example `html {color: #ff0;}`
 */
function transformGrid(staticStylesheet) {
  return postcss([
    presetEnv({
      stage: 0,
      autoprefixer: { grid: 'autoplace' }
    })
  ])
    .process(staticStylesheet, {
      from: undefined,
      to: undefined
    })
    .then(oldSchoolStylesheetFormat => oldSchoolStylesheetFormat.css)
    .catch(error => {
      throw new Error(error);
    });
}

/**
 * Transforms a string of CSS into an older string of CSS
 * @param stylesheet: string  a well-formed CSS stylesheet as a string
 * @example `:root {--mycolor: #ff0;} html {color: var(--mycolor);}`
 * @param globalsStylesheetPath: string  a path to patternfly-base.css
 * @example /Users/path/to/patternfly-base.css
 * @param excludeBase: boolean  the ability to exclude the patternfly-base.css from the stylesheet
 * @example true
 */
function transform(stylesheet, globalsStylesheetPath, excludeBase) {
  const localVars = getLocalVarDefinitions(stylesheet).join('\n');
  const basePf = excludeBase ? '' : fs.readFileSync(globalsStylesheetPath, 'utf8');
  const globalVars = getGlobalVarDefinitions(globalsStylesheetPath).join('\n');
  const newStylesheet = `:root {\n${globalVars}\n ${localVars} } \n${basePf} \n\n${stylesheet}`;
  return transformVars(newStylesheet)
    .then(staticStylesheet => transformGrid(staticStylesheet))
    .catch(error => {
      throw new Error(error);
    });
}

/**
 * Constructs an array of stylesheets to be processed, in an optimal order for post-processing
 * @param basePfCssGlob: a fileGlob pattern that selects patternfly stylesheet we want to include
 * @example { 'myEndpoint': '/Path/to/patternfly-next/dist/{components,layouts,utilities}/**.css' }
 * @param excludes: an array of stylesheets to exclude, use the Uppercase directory name
 * @example ['Table', 'Stack', 'BoxShadow']
 * @param appStylesheets: an array of paths to stylesheets to append, comes last in the cascade
 */
function getStylesheetPaths(basePfCssGlob, excludes = [], appStylesheets = []) {
  return new Promise((resolve, reject) => {
    glob(basePfCssGlob, (error, files) => {
      if (error) {
        reject(error);
      }
      const allFiles = files.concat(appStylesheets);
      const selectedStylesheets = excludes.reduce(
        (acc, curExclude) => acc.filter(el => !el.includes(curExclude)),
        allFiles
      );
      resolve(selectedStylesheets);
    });
  });
}

function buildIE11() {
  const pfStylesheetsGlob = path.resolve(__dirname, '../../dist/{components,layouts,utilities}/**/*.css');
  const patternflyBasePath = path.resolve(__dirname, '../../dist/patternfly-base.css');
  const outPath = path.resolve(__dirname, '../../dist/patternfly-ie11.css');
  return getStylesheetPaths(pfStylesheetsGlob)
    .then(files => {
      if (files.length === 0) {
        throw new Error(`getStylesheetPaths didn't receive any stylesheets to parse`);
      }
      return files;
    })
    .then(files =>
      files.reduce((acc, file) => {
        acc += `${fs.readFileSync(file, 'utf8')}\n`;
        return acc;
      }, '')
    )
    .then(concatCss => transform(concatCss, patternflyBasePath))
    .then(ie11ReadyStylesheet => {
      fs.writeFileSync(outPath, ie11ReadyStylesheet);
      return ie11ReadyStylesheet;
    })
    .then(transformedCss => {
      let includesUndefined = false;
      const split = transformedCss.split('\n');
      for (let i = 0; i < split.length; i++) {
        if (split[i].indexOf('undefined') >= 0) {
          const context = split.slice(i - 2, i + 2).join('\n');
          // eslint-disable-next-line
          console.error(`\x1b[31m%s\x1b[0m`, `Problem in ${outPath}:${i + 1}:\n${context}`);
          includesUndefined = true;
        }
      }
      if (includesUndefined) {
        throw new Error(
          `Stylesheet ${outPath} contains undefined. This is usually due to a CSS variable being referenced before it is defined. Try rearranging the order of your CSS variables.`
        );
      }
    });
}

module.exports = {
  buildIE11
};
