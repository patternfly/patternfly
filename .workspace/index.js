const path = require('path')
const bs = require("browser-sync").create()
const ejs = require('ejs')
const express = require('express')
const app = express()
const navigation = require('./navigation')

const resourceTypes = ['components', 'elements', 'layouts', 'patterns']

console.log(navigation)

resourceTypes.forEach((resourceType) => {
  app.get(`/${resourceType}/:name`, function (req, res) {
    let page = path.resolve(
      __dirname,
      `../src/${resourceType}/${req.params.name}/${req.params.name}.html`
    )
    let workspaceView = path.resolve(__dirname, 'public/index.ejs')
    ejs.renderFile(
      workspaceView,
      {
        page,
        resourceType,
        resourceName: req.params.name,
        workspace: {
          navigation
        }
      },
      {},
      function (err, output) {
        res.set('Content-Type', 'text/html')
        res.send(output)
      }
    )
  })
})

bs.init({
  server: {
    baseDir: [
      path.resolve(__dirname, 'public'),
      path.resolve(__dirname, '../dist')
    ]
  },
  middleware: [app],
  files: [
    path.resolve(__dirname, 'public/**/*'),
    path.resolve(__dirname, '../dist/**/*'),
    path.resolve(__dirname, '../src/**/*.{html,htm,ejs}')
  ],
  port: 4200,
  open: false,
  notify: true
})
