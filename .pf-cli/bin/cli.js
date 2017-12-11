#!/usr/bin/env node

const program = require('commander')
const package = require('../package.json')
const pf = require('../')

program
  .version(package.version)

program
  .command('add:component <name>')
  .description('Adds a new component to the design system')
  .action(function (name) {
    pf.run(`resource component ${name}`)
  })

program
  .command('add:layout <name>')
  .description('Adds a new layout to the design system')
  .action(function (name) {
    pf.run(`resource layout ${name}`)
  })

program
  .command('add:pattern <name>')
  .description('Adds a new pattern to the design system')
  .action(function (name) {
    pf.run(`resource pattern ${name}`)
  })

program
  .command('add:extension <name>')
  .description('Adds a new extension to the design system')
  .action(function (name) {
    pf.run(`resource extension ${name}`)
  })

program
  .command('add:concept <name>')
  .description('Adds a new concept to the design system')
  .action(function (name) {
    pf.run(`resource concept ${name}`)
  })


program.parse(process.argv)
