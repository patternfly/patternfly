const { src, dest } = require('gulp');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const generateIcons = require('../../src/icons/generateIcons.js');
const existingIconCodes = require('../../src/icons/existingIconCodes.json');
const fs = require('fs');
const path = require('path');

const pficonFontName = 'pficon';
const { lastCodePoint } = existingIconCodes;
const nextCodePoint = lastCodePoint + 1;
const nextUnicodeHex = '0x' + nextCodePoint.toString(16).toUpperCase();

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
        fixedCodepoints: existingIconCodes
      })
    )
    .pipe(
      iconfont({
        fontName: pficonFontName,
        formats: ['woff', 'woff2'],
        timestamp: Math.round(Date.now() / 1000)
      })
    )
    // gulp-iconfont emits a 'glyphs' event
    // we use to update existingIconCodes file
    .on('glyphs', function(glyphs, options) {
      const newIconsObj = glyphs.reduce((iconsObj, glyph) => {
        const { name, unicode } = glyph;
        const curCodePoint = unicode[0].codePointAt(0);
        const maxCodePoint = (curCodePoint > iconsObj.lastCodePoint) ? curCodePoint : iconsObj.lastCodePoint;

        iconsObj[name] = curCodePoint.toString(16).toUpperCase();
        iconsObj.lastCodePoint = maxCodePoint;
        return iconsObj;
      }, { lastCodePoint });

      fs.writeFileSync(
        path.join(__dirname, '../../src/icons/existingIconCodes.json'),
        JSON.stringify(newIconsObj)
      );
    })
    .pipe(dest('./src/patternfly/assets/pficon/'));
}

module.exports = {
  pfIcons,
  pfIconFont
};
