#!/usr/bin/env node
/* eslint-disable no-console */
const args = require('minimist')(process.argv);
const inflection = require('inflection');
const path = require('path');
const program = require('commander');
const scaffold = require('scaffold-helper');

const PROJECT_DIR = path.resolve(__dirname, '../../');
const BLUEPRINTS_DIR = path.resolve(__dirname, '../blueprints');

const blueprintArgs = Object.keys(args).reduce((accum, fieldName) => {
  if (fieldName !== '_') {
    accum[fieldName] = args[fieldName];
  }
  return accum;
}, {});

program.version('1.0.0');

program
  .command('generate <type> <name>')
  .alias('g')
  .description('Generates a blueprint and passes arguments')
  .action((type, name, options) => {
    const blueprintDir = path.join(`${BLUEPRINTS_DIR}/${type}`);
    const sourceType = type;
    const source = path.join(`${BLUEPRINTS_DIR}/${type}/files`);
    const destination = PROJECT_DIR;
    const prefix = `pf-${type.charAt(0)}-`;

    name = name.replace(/^pf-(c|p)-/g, '');

    const bemEntity = inflection
      .transform(name, ['underscore', 'titleize', 'dasherize'])
      .toLowerCase();
    const moduleName = inflection.titleize(name).replace(/-/g, '');

    const blueprintData = {
      blueprintDir,
      source,
      destination,
      name,
      sourceType,
      namePluralized: inflection.pluralize(name),
      nameSingularized: inflection.singularize(name),
      nameUnderscored: inflection.underscore(name),
      nameDasherized: inflection.dasherize(name),
      nameHumanized: inflection.humanize(name),
      nameTitleized: inflection.titleize(name),
      nameClassified: inflection.classify(name),
      nameCamelized: inflection.camelize(name, true),
      namePascalized: inflection.camelize(name),
      nameTableized: inflection.tableize(name),
      nameCapitalized: inflection.capitalize(name),
      bemName: `${prefix}${bemEntity}`,
      moduleName,
      partialBlock: '{{> @partial-block}}',
      moduleHbOpen: `{{#> ${moduleName}}}`,
      moduleHbClose: `{{/${moduleName}}}`,
      args: blueprintArgs
    };

    scaffold(
      {
        source,
        destination,
        onlyFiles: false,
        exclude: []
      },
      blueprintData
    );

    console.log(`Created ${type}: ${name}`);
  });

program.command('*').action(env => {
  console.log(`Unknown command`);
});

program.parse(args._);
