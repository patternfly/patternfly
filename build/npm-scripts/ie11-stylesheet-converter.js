const fs = require('fs');
const path = require('path');
const { getStylesheetPaths, transform } = require('./ie-conversion-utils');

const pfStylesheetsGlob = path.resolve(__dirname, '../../dist/{components,utilities,layouts}/**/*.css');
const localBasePfStylesheet = path.resolve(__dirname, '../../dist/patternfly-base.css');

function writeFileToDisk(file, stylesheetPath) {
  const fileName = path.basename(stylesheetPath);
  const ie11ReadyFilePath = `${path.dirname(stylesheetPath) + path.sep}ie11-${fileName}`;
  fs.writeFileSync(ie11ReadyFilePath, file);
}

function processStylesheet(stylesheetPath) {
  const stylesheet = fs.readFileSync(stylesheetPath, 'utf8');
  return transform(stylesheet, localBasePfStylesheet, true).then(ie11ReadyStylesheet =>
    writeFileToDisk(ie11ReadyStylesheet, stylesheetPath)
  );
}

getStylesheetPaths(pfStylesheetsGlob).then(files => {
  files.reduce(
    (prevPromise, nextStylesheet) => prevPromise.then(() => processStylesheet(nextStylesheet)),
    Promise.resolve()
  );
});
