import path from 'path';
import gulp from 'gulp';
import through2 from 'through2';
const { src } = gulp;

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
  'url',
  'min',
  'max',
  'clamp',
  'invert'
];
const functionRegex = /:\s+(\w[\w\d]+)\(.*\)/gi;

export function lintCSSFunctions() {
  let failed = false;

  return src('dist/**/*.css')
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

export function lintCSSComments() {
  let failed = false;

  return src(['dist/**/*.css', '!dist/site/**', '!dist/docs/**'])
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

