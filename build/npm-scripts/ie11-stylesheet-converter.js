const {
  getStylesheetPaths,
  getGlobalVars,
  getLocalVarDefinitions,
  transformGrid,
  transformVars
} = require('./ie-conversion-utils');
const fs = require('fs');
const path = require('path');

const pfStylesheetsGlob = path.resolve(__dirname, '../../dist/{components,utilities,layouts}/**/*.css');
const localBasePfStylesheet = path.resolve(__dirname, '../../dist/patternfly-base.css');

function writeFileToDisk(file, stylesheetPath) {
  const fileName = path.basename(stylesheetPath);
  const ie11ReadyFilePath = `${path.dirname(stylesheetPath) + path.sep}ie11-${fileName}`;

  fs.writeFileSync(ie11ReadyFilePath, file);
}

// [utils] transforms the pf library stylesheets one by one
function transformLib(stylesheet) {
  const globalVars = getGlobalVars(localBasePfStylesheet);

  const localVars = getLocalVarDefinitions(stylesheet).join('\n');
  const newStylesheet = `:root {\n${globalVars}\n ${localVars} } \n\n${stylesheet}`;

  return transformVars(newStylesheet)
    .then(staticStylesheet => transformGrid(staticStylesheet))
    .catch(error => {
      throw new Error(error);
    });
}

function processStylesheet(stylesheetPath) {
  const stylesheet = fs.readFileSync(stylesheetPath, 'utf8');
  return transformLib(stylesheet).then(ie11ReadyStylesheet => writeFileToDisk(ie11ReadyStylesheet, stylesheetPath));
}

getStylesheetPaths(pfStylesheetsGlob).then(files => {
  files.reduce(
    (prevPromise, nextStylesheet) => prevPromise.then(() => processStylesheet(nextStylesheet)),
    Promise.resolve()
  );
});
