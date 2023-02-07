import { resolve } from 'path';

import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default (plop) => {
  plop.setGenerator('svgs', {
    prompts: [],
    actions: data => [
      ...data.icons.map(icon => ({
        type: 'add',
        force: true,
        data: { ...icon },
        path: resolve(__dirname, `${icon.group}/${icon.id}.svg`),
        templateFile: resolve(__dirname, 'templates/svgFile.hbs')
      }))
    ]
  });
};
