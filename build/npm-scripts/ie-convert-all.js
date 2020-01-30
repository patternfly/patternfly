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
