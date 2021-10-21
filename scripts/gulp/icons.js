const { src, dest } = require('gulp');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const generateIcons = require('../../src/icons/generateIcons.js');
const path = require('path');
const { readFileSync, writeFileSync, mkdirSync } = require('fs');

const pficonFontName = 'pficon';
let maxCodepoint = 0;

// functions to parse icon names/unicodes from sass file && write to json file
const getIconNamesUnicodes = (filePath, reg) => {
  const scssData = readFileSync(path.join(__dirname, filePath));
  const scssText = scssData.toString();
  const unicodesArr = scssText.matchAll(reg);
  return unicodesArr;
}
const buildUnicodesMap = (regexMatchesArr, isPfIcons) => [...regexMatchesArr].reduce((obj, regMatch) => {
  // Remove -var from FA icon names (fa-var-ad => fa-ad)
  const iconName = isPfIcons
    ? regMatch[1]
    : regMatch[1].replace('-var-', '-');
  const iconUnicode = regMatch[2];
  obj[iconName] = iconUnicode;
  if (isPfIcons) {
    const iconCodepoint = parseInt(iconUnicode, 16);
    if (iconCodepoint > maxCodepoint) {
      maxCodepoint = iconCodepoint;
    }
  }
  return obj;
}, {});
const writeUnicodesToJson = (path, fileName, obj) => {
  const data = JSON.stringify(obj, null, 2);
  mkdirSync(path, { recursive: true });
  writeFileSync(`${path}/${fileName}`, data);
}

function pfIcons() {
  return generateIcons();
}

function pfIconFont() {
  // parse FontAwesome icons/unicode matches
  const faUnicodeMatches = getIconNamesUnicodes(
    '../../src/patternfly/assets/fontawesome/_variables.scss',
    /\$(fa-var-[a-zA-Z0-9-]*):\s*\\([a-zA-Z0-9]*);/gm
  );
  const faUnicodesObj = buildUnicodesMap(faUnicodeMatches, false);

  // parse existing pf-icon names/unicodes
  const pficonUnicodeMatches = getIconNamesUnicodes(
    '../../src/patternfly/assets/pficon/pficon.scss',
    /@if\s\$filename\s==\s(\S*)\s\S\n\s*\$char:\s'\\([a-zA-Z0-9]*)'/g
  );
  const pficonUnicodesObj = buildUnicodesMap(pficonUnicodeMatches, true);

  // Calculate next available unicode (for any new pf-icons)
  const nextCodepoint = maxCodepoint + 1;
  const nextUnicodeHex = '0x' + nextCodepoint.toString(16).toUpperCase();

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
        // Trigger off emitted 'glyphs' event to generate pficon/unicode matches, combine w/FA & write to JSON file
        .on('glyphs', (glyphs, options) => {
          const pfUnicodesMap = glyphs.reduce((obj, glyph) => {
            obj[`pf-icon-${glyph.name}`] = glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase();
            return obj;
          }, {});
          const iconUnicodes = {
            ...pfUnicodesMap,
            ...faUnicodesObj
          };
          writeUnicodesToJson('src/patternfly/assets/icons', 'iconUnicodes.json', iconUnicodes);
        })
    )
    .pipe(dest('./src/patternfly/assets/pficon/'))
}

module.exports = {
  pfIcons,
  pfIconFont
};
