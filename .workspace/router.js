const path = require('path')
const fs = require('fs-extra')
const ejs = require('ejs')
const express = require('express')
const router = express()

const workspaceView = path.resolve(__dirname, 'public/index.ejs')
const resourceTypes = ['components', 'patterns']

router.use('/docs', express.static(path.resolve(__dirname, '../docs')))
router.use('/dist', express.static(path.resolve(__dirname, '../dist')))
router.use('/regressions', express.static(path.resolve(__dirname, '../test/results')))

router.get(`/bootstrap/:name`, function (req, res) {
  let page = path.resolve(
    __dirname,
    `../bs-content/components/${req.params.name}.html`
  )
  let resourceName = req.params.name
  ejs.renderFile(
    workspaceView,
    {
      page,
      resourceType: 'Bootstrap Component',
      resourceName,
      styles: false,
      documentation: `https://getbootstrap.com/docs/4.0/components/${resourceName}`,
      workspace: {
        navigation: req.navigation
      }
    },
    {},
    function (err, output) {
      if (err) { console.log(err) }
      res.set('Content-Type', 'text/html')
      res.send(output)
    }
  )
})

router.get(`/components/:name`, function (req, res) {
  let resourceName = req.params.name
  let page = path.resolve(
    __dirname,
    `../src/components/${resourceName}/${resourceName}.html`
  )

  ejs.renderFile(
    workspaceView,
    {
      page,
      resourceName,
      styles: `/dist/components/${resourceName}/${resourceName}.css`,
      documentation: `/docs/#${resourceName}`,
      workspace: {
        navigation: req.navigation
      }
    },
    {},
    function (err, output) {
      if (err) { console.log(err) }
      res.set('Content-Type', 'text/html')
      res.send(output)
    }
  )
})

router.get(`/`, function (req, res) {
  ejs.renderFile(
    workspaceView,
    {
      page: false,
      resourceName: false,
      styles: false,
      documentation: false,
      workspace: {
        navigation: req.navigation
      }
    },
    {},
    function (err, output) {
      if (err) { console.log(err) }
      res.set('Content-Type', 'text/html')
      res.send(output)
    }
  )
})



module.exports = router
