const path = require('path');
const fs = require('fs');
const { getStylesheetPaths, transform } = require('./ie-conversion-utils');

const pfStylesheetsGlob = path.resolve(__dirname, '../../dist/{components,layouts,utilities}/**/*.css');
const patternflyBasePath = path.resolve(__dirname, '../../dist/patternfly-base.css');
const outPath = path.resolve(__dirname, '../../dist/patternfly-ie11.css');

getStylesheetPaths(pfStylesheetsGlob, [], [])
  .then(files =>
    files.reduce((acc, file) => {
      acc += `${fs.readFileSync(file, 'utf8')}\n`;
      return acc;
    }, '')
  )
  .then(concatCss => transform(concatCss, patternflyBasePath))
  .then(transformedCss => {
    if (transformedCss.indexOf('undefined') >= 0) {
      throw new Error('Stylesheet contains undefined');
    }
    return transformedCss.replace(/\.\.\/\.\.\/assets/gm, './assets');
  })
  .then(ie11ReadyStylesheet => fs.writeFileSync(outPath, ie11ReadyStylesheet))
  .catch(error => {
    throw new Error(error);
  });
