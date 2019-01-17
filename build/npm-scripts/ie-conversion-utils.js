const fs = require('fs');
const glob = require('glob');
const presetEnv = require('postcss-preset-env');
const postcss = require('postcss');
const cssvariables = require('postcss-css-variables');

// [utils] build an array of global variables
function getGlobalVarDefinitions(stylesheetPath) {
  const fullPfStylesheet = fs.readFileSync(stylesheetPath, 'utf8').match(/[^\r\n]+/g);
  const startToken = '--pf-global--';
  return fullPfStylesheet
    .filter(el => el.trim().startsWith(startToken))
    .map(el => el.substring(el.indexOf(startToken), el.lastIndexOf(';') + 1));
}

// [utils] build an array of local variables
function getLocalVarDefinitions(stylesheet) {
  const singleStylesheet = stylesheet.match(/[^\r\n]+/g);
  const startToken = '--pf-';
  return singleStylesheet
    .filter(el => el.trim().startsWith(startToken))
    .map(el => el.substring(el.indexOf(startToken), el.lastIndexOf(';') + 1));
}

// [utils] transforms variables to static values
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

// [utils] transforms modern grid definitions into legacy IE11 grid definitions
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

function getGlobalVars(stylesheetPath) {
  return getGlobalVarDefinitions(stylesheetPath).join('\n');
}

// [utils] transforms a string of css into an ie11 ready format
function transform(stylesheet, basePfStylesheetPath) {
  const localVars = getLocalVarDefinitions(stylesheet).join('\n');
  const basePf = fs.readFileSync(basePfStylesheetPath, 'utf8');
  const globalVars = getGlobalVars(basePfStylesheetPath);
  const newStylesheet = `:root {\n${globalVars}\n ${localVars} } \n${basePf} \n\n${stylesheet}`;
  return transformVars(newStylesheet)
    .then(staticStylesheet => transformGrid(staticStylesheet))
    .catch(error => {
      throw new Error(error);
    });
}

// globPattern is a fileGlob that points to patternfly stylesheet we want to include
// for example: path.resolve(__dirname, '../node_modules/@patternfly/patternfly-next/{components,utilities,layouts}/**/*.css');
// excludes is an array of stylesheets to exclude, use the Uppercase directory name
// for example: ['Table', 'Stack', 'BoxShadow']
// appStylesheets is an array of abs paths to stylesheets to be appended to the end of the array
// returns a promise which resolves to an array of stylesheet paths
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

module.exports = {
  getGlobalVarDefinitions,
  getLocalVarDefinitions,
  getStylesheetPaths,
  getGlobalVars,
  transform,
  transformGrid,
  transformVars
};
