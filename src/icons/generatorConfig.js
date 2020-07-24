const { resolve } = require('path');

module.exports = plop => {
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
