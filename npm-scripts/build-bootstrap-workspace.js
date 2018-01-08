const fs = require('fs-extra')
const path = require('path')
const axios = require('axios')
const parse5 = require('parse5')
const { JSDOM } = require('jsdom')

const components = [
  'alerts',
  'badge',
  'breadcrumb',
  'button-group',
  'buttons',
  'card',
  'carousel',
  'collapse',
  'dropdowns',
  'forms',
  'input-group',
  'jumbotron',
  'list-group',
  'modal',
  'navbar',
  'navs',
  'pagination',
  'popovers',
  'progress',
  'scrollspy',
  'tooltips'
]
const baseUrl = 'https://getbootstrap.com/docs/4.0/'
const baseBuildDir = path.resolve(__dirname, '../bs-content')
components.forEach((component) => {
  axios.get(`${baseUrl}/components/${component}`)
    .then((res) => {
      const dom = new JSDOM(res.data)
      const document = dom.window.document
      const examples = Array.from(document.querySelectorAll('.bd-example'))

      const content = examples.reduce((accum, example) => {
        accum = accum.concat(`
          <template>
            ${example.innerHTML}
          </template>
        `)
        return accum
      }, '')
      fs.outputFile(`${baseBuildDir}/components/${component}.html`, content)
    })
    .catch((err) => {
      console.log(err)
    })
})
