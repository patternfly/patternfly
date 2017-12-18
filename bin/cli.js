#!/usr/bin/env node

const program = require('commander')
const pf = require('./pf')
const listResources = require('./tasks/list-resources')

program

program
  .command('overview')
  .description('Lists the different resource types in the design system')
  .action(function () {
    listResources()
  })

program
  .command('add:element <name>')
  .description('Adds a new element to the design system')
  .action(function (name) {
    pf.run(`resource element ${name}`)
  })

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
  .command('add:example <name>')
  .description('Adds a new example to the design system')
  .action(function (name) {
    pf.run(`resource extension ${name}`)
  })

program
  .command('add:extension <name>')
  .description('Adds a new extension to the design system')
  .action(function (name) {
    pf.run(`resource extension ${name}`)
  })

program.parse(process.argv)
