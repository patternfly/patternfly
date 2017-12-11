const browserSync = require("browser-sync")
const ejs = require('ejs')
const express = require('express')
const path = require('path')

module.exports = class {
  constructor (options) {
    this.options = options
    this.app = express()
    this.app.set('view engine', 'ejs')
    this.bs = browserSync.create()
  }

  registerRoute () {
    this.app.get('/:resource/:name/:index', (req, res) => {
      let page = `${this.options.publicDirectory}/${req.params.resource}/${req.params.name}/${req.params.index}.html`
      let workspaceView = path.resolve(__dirname, 'views/index.ejs')

      ejs.renderFile(
        workspaceView,
        {
          page,
          resourceType: req.params.resource,
          resourceName: req.params.name
        },
        {},
        function (err, output) {
          res.set('Content-Type', 'text/html')
          res.send(output)
        }
      )
    })
  }

  startWebServer () {


    this.app.listen(this.options.port, () => {
      this.bs.init({
        proxy: `http://localhost:${this.options.port}`,
        open: false,
        serveStatic: [
          {
            route: '/assets',
            dir: path.resolve(__dirname, 'assets')
          },
          {
            route: '/dist',
            dir: this.options.publicDirectory
          },
          {
            route: '/docs',
            dir: this.options.sassDocDirectory
          }
        ]
      })
    })
  }

  start () {
    this.registerRoute()
    this.startWebServer()
  }

}
