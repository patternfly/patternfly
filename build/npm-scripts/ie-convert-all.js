const path = require('path');
const fs = require('fs');
const { getStylesheetPaths, transform } = require('./ie-conversion-utils');

const pfStylesheetsGlob = path.resolve(__dirname, '../../dist/{components,layouts,utilities}/**/*.css');
const patternflyBasePath = path.resolve(__dirname, '../../dist/patternfly-base.css');
const outPath = path.resolve(__dirname, '../../dist/patternfly-ie11.css');

module.exports = () =>
  getStylesheetPaths(pfStylesheetsGlob)
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
      transformedCss.split('\n').forEach((line, index) => {
        if (line.indexOf('undefined') >= 0) {
          // eslint-disable-next-line
        console.error(`\x1b[31m%s\x1b[0m`, `Problem in ${outPath}:${index + 1}\n`);
          throw new Error(`Stylesheet ${outPath} contains undefined at line ${index + 1}`);
        }
      });
      return transformedCss.replace(/\.\.\/\.\.\/assets/gm, './assets');
    })
    .catch(error => {
      throw new Error(error);
    });
