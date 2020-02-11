const path = require('path');
const fs = require('fs');
const { src } = require('gulp');
const through2 = require('through2');

const validCSSFunctions = [
  // https://www.w3schools.com/cssref/css_functions.asp
  'attr',
  'calc',
  'cubic-bezier',
  'hsl',
  'hsla',
  'linear-gradient',
  'radial-gradient',
  'repeating-linear-gradient',
  'rgb',
  'rgba',
  'var',
  // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function
  'matrix',
  'matrix3d',
  'perspective',
  'rotate',
  'rotate3d',
  'rotateX',
  'rotateY',
  'rotateZ',
  'scale',
  'scaleX',
  'scaleY',
  'scaleZ',
  'skew',
  'skewX',
  'skewY',
  'translate',
  'translate3d',
  'translateX',
  'translateY',
  'translateZ',
  // https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path
  'inset',
  'circle',
  'ellipse',
  'polygon',
  'path',
  'rect',
  // Custom
  'blur',
  'counter',
  'repeat',
  'minmax',
  'url'
];
const functionRegex = /:\s+(\w[\w\d]+)\(.*\)/gi;

function lintCSSFunctions() {
  let failed = false;

  return src('./dist/**/*.css')
    .pipe(
      through2.obj((chunk, _, cb2) => {
        const css = chunk.contents.toString();

        let result;
        // eslint-disable-next-line no-cond-assign
        while ((result = functionRegex.exec(css))) {
          if (!validCSSFunctions.includes(result[1])) {
            console.error(`Error: Invalid css function ${result[1]} in ${chunk.history[0]}`);
            failed = true;
          }
        }

        cb2();
      })
    )
    .on('end', () => {
      if (failed) {
        throw new Error('Invalid CSS functions present in dist');
      }
    });
}

function lintCSSComments() {
  let failed = false;

  return src('./dist/**/*.css')
    .pipe(
      through2.obj((chunk, _, cb2) => {
        const loggedPath = path.relative(process.cwd(), chunk.history[0]);
        const css = chunk.contents.toString();

        if (css.includes('/*') && !/\/*[!#]/.test(css)) {
          console.error(`Error: block comment in ${loggedPath}`);
          failed = true;
        }

        cb2();
      })
    )
    .on('end', () => {
      if (failed) {
        throw new Error('Block comments present in dist');
      }
    });
}

function lintCSSSize(cb) {
  const patternflyPath = path.resolve(process.cwd(), './dist/patternfly.css');
  const patternflyMinPath = path.resolve(process.cwd(), './dist/patternfly.min.css');

  const patternflySize = fs.statSync(patternflyPath).size;
  const patternflyMinSize = fs.statSync(patternflyMinPath).size;
  const errors = [];
  // At time of writing is 609013
  console.log(`patternfly.css is ${patternflySize / 1000}KB`);
  if (patternflySize > 650000) {
    errors.push(`patternfly.css is ${patternflySize / 1000}KB > 650KB`);
  }
  // At time of writing is 532807
  console.log(`patternfly.min.css is ${patternflyMinSize / 1000}KB`);
  if (patternflyMinSize > 600000) {
    errors.push(`patternfly.min.css is ${patternflyMinSize / 1000}KB > 600KB`);
  }
  if (errors.length > 0) {
    cb(errors.join('\n'));
  }
  cb();
}

module.exports = {
  lintCSSComments,
  lintCSSFunctions,
  lintCSSSize
};
