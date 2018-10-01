const path = require('path');
const nodePlop = require('node-plop');

const plop = nodePlop(path.resolve(__dirname, './generatorConfig.js'));
const pascalCase = plop.getHelper('pascalCase');
const pfIcons = require('./definitions/pf-icons.json');

plop
  .getGenerator('svgs')
  .runActions({ icons: [...Object.keys(pfIcons).map(getPfIcon)] })
  .catch(console.log); // eslint-disable-line

function getPfIcon(iconName) {
  const currentIcon = pfIcons[iconName];
  currentIcon.xOffset = 0;
  currentIcon.yOffset = 80;
  currentIcon.group = 'PfIcons';
  currentIcon.transform = `rotate(180 0 ${currentIcon.height / 2}) scale(-1 1)`;
  return generateIcon(currentIcon, `${iconName}`);
}

function generateIcon(iconDef, iconName) {
  return {
    id: `${iconName}-icon`,
    name: pascalCase(`${iconName}-icon`),
    group: iconDef.group,
    width: iconDef.width,
    height: iconDef.height,
    yOffset: iconDef.yOffset,
    xOffset: iconDef.xOffset,
    svgPath: iconDef.svgPathData,
    transform: iconDef.transform
  };
}
