const { src, dest } = require('gulp');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const generateIcons = require('../../src/icons/generateIcons.js');
const path = require('path');
const { readFileSync } = require('fs');

const pficonFontName = 'pficon';

// Parse pficon.scss & build map of existing icons/unicodes
const pfscss = readFileSync(path.join(__dirname, '../../src/patternfly/assets/pficon/pficon.scss'));
const sassText = pfscss.toString();
const pficonUnicodesArr = sassText.matchAll(/@if\s\$filename\s==\s(\S*)\s\S\n\s*\$char:\s'\\([a-zA-Z0-9]*)'/g);
let maxCodepoint = 0;
const pficonUnicodesObj = [...pficonUnicodesArr].reduce((obj, regMatch) => {
  const iconName = regMatch[1];
  const iconUnicode = regMatch[2];
  const iconCodepoint = parseInt(iconUnicode, 16);
  obj[iconName] = iconUnicode;
  if (iconCodepoint > maxCodepoint) {
    maxCodepoint = iconCodepoint;
  }
  return obj;
}, {});

// Calculate next available unicode (for any new icons)
const nextCodepoint = maxCodepoint + 1;
const nextUnicodeHex = '0x' + nextCodepoint.toString(16).toUpperCase();

function pfIcons() {
  return generateIcons();
}

function pfIconFont() {
  return src('./src/icons/PfIcons/*.svg')
    .pipe(
      iconfontCss({
        fontName: pficonFontName,
        // template pulled & updated from https://github.com/backflip/gulp-iconfont-css/blob/master/templates/_icons.scss
        path: path.join(__dirname, 'icons_template.scss'),
        targetPath: 'pficon.scss',
        fontPath: './',
        cssClass: 'pf-icon',
        // Assign next available unicode (for new icons)
        firstGlyph: nextUnicodeHex,
        // Reference saved unicodes (for existing icons)
        fixedCodepoints: pficonUnicodesObj
      })
    )
    .pipe(
      iconfont({
        fontName: pficonFontName,
        formats: ['woff', 'woff2'],
        timestamp: Math.round(Date.now() / 1000)
      })
    )
    .pipe(dest('./src/patternfly/assets/pficon/'));
}

module.exports = {
  pfIcons,
  pfIconFont
};
