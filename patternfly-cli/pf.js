#!/usr/bin/env node
const arguments = require('minimist')(process.argv)
const inflection = require('inflection')
const path = require('path')
const program = require('commander')
const scaffold = require('scaffold-helper')

const PROJECT_DIR = path.resolve(__dirname, '../')
const BLUEPRINTS_DIR = path.resolve(__dirname, '../blueprints')

let blueprintArgs = Object.keys(arguments).reduce((accum, fieldName) => {
  if (fieldName !== '_') {
    accum[fieldName] = arguments[fieldName]
  }
  return accum
}, {})

program
  .version('1.0.0')

program
  .command('generate <type> <name>')
  .alias('g')
  .description('Generates a blueprint and passes arguments')
  .action(function(type, name, options){
    let blueprintDir = path.join(`${BLUEPRINTS_DIR}/${type}`)
    let sourceType = type
    let source = path.join(`${BLUEPRINTS_DIR}/${type}/files`)
    let destination = PROJECT_DIR
    let prefix = `pf-${type.charAt(0)}-`

    name = name.replace(/^pf-(c|p)-/g,'')

    let bemEntity = inflection.transform(name, ['underscore','titleize', 'dasherize']).toLowerCase()

    let blueprintData = {
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
      moduleName: inflection.titleize(name).replace(/-/g,''),
      args: blueprintArgs
    }

    scaffold({
      source,
      destination,
      onlyFiles: false,
      exclude: []
    }, blueprintData)

    console.log(`Created ${type}: ${name}`)
  })

program
  .command('*')
  .action(function(env){
    console.log(`Unknown command`)
  })

program.parse(arguments._)
