const path = require('path')
const fs = require('fs-extra')
const ejs = require('ejs')
const express = require('express')
const router = express()

const workspaceView = path.resolve(__dirname, 'public/index.ejs')
const resourceTypes = ['components', 'elements', 'layouts', 'patterns']

router.use('/docs', express.static(path.resolve(__dirname, '../docs')))
router.use('/dist', express.static(path.resolve(__dirname, '../dist')))

resourceTypes.forEach((resourceType) => {

  router.get(`/${resourceType}/:name`, function (req, res) {
    let page = path.resolve(
      __dirname,
      `../src/${resourceType}/${req.params.name}/${req.params.name}.html`
    )

    ejs.renderFile(
      workspaceView,
      {
        page,
        resourceType,
        resourceName: req.params.name,
        workspace: {
          navigation: req.navigation
        }
      },
      {},
      function (err, output) {
        res.set('Content-Type', 'text/html')
        res.send(output)
      }
    )
  })


  router.get(`/${resourceType}`, function (req, res) {
    ejs.renderFile(
      workspaceView,
      {
        resourceName: false,
        page: false,
        resourceType,
        workspace: {
          navigation: req.navigation
        }
      },
      {},
      function (err, output) {
        if (err) {
          console.log(err)
        }
        res.set('Content-Type', 'text/html')
        res.send(output)
      }
    )
  })
})

router.get(`/`, function (req, res) {
  ejs.renderFile(
    workspaceView,
    {
      page: false,
      resourceType: false,
      resourceName: false,
      workspace: {
        navigation: req.navigation
      }
    },
    {},
    function (err, output) {
      res.set('Content-Type', 'text/html')
      res.send(output)
    }
  )
})

module.exports = router
