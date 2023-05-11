import path from 'path';
import nodePlop from 'node-plop';

import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const plop = await nodePlop(path.resolve(__dirname, './generatorConfig.mjs'));
const pascalCase = plop.getHelper('pascalCase');
import { pfIcons } from './definitions/pficons.mjs';

export default () =>
  new Promise((resolve, reject) => {
    plop
      .getGenerator('svgs')
      .runActions({ icons: [...Object.keys(pfIcons).map(getPfIcon)] })
      .catch(reject)
      .then(resolve);
  });

function getPfIcon(iconName) {
  const currentIcon = pfIcons[iconName];
  currentIcon.xOffset = 0;
  currentIcon.yOffset = 0;
  currentIcon.group = 'PfIcons';
  return generateIcon(currentIcon, `${iconName}`);
}

function generateIcon(iconDef, iconName) {
  return {
    id: `${iconName}`,
    name: pascalCase(`${iconName}`),
    group: iconDef.group,
    width: iconDef.width,
    height: iconDef.height,
    yOffset: iconDef.yOffset,
    xOffset: iconDef.xOffset,
    svgPath: iconDef.svgPathData,
    transform: iconDef.transform
  };
}
