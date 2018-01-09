const fs = require('fs-extra')
const path = require('path')
const axios = require('axios')
const parse5 = require('parse5')
const { JSDOM } = require('jsdom')

const componentPages = [
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
const contentPages = [
  'reboot',
  'typography',
  'code',
  'images',
  'tables',
  'figures'
]
const baseUrl = 'https://getbootstrap.com/docs/4.0/'
const baseBuildDir = path.resolve(__dirname, '../bs-content')


componentPages.forEach((component) => {
  axios.get(`${baseUrl}/components/${component}`)
    .then((res) => {
      const dom = new JSDOM(res.data)
      const document = dom.window.document
      const examples = Array.from(document.querySelectorAll('.bd-example'))

      const examplesContent = examples.reduce((accum, example) => {
        accum = accum.concat(`
          <template>
            ${example.innerHTML}
          </template>
        `)
        return accum
      }, '')
      fs.outputFile(`${baseBuildDir}/components/${component}.html`, examplesContent)
    })
    .catch((err) => {
      console.log(err)
    })
})

contentPages.forEach((contentPage) => {
  axios.get(`${baseUrl}/content/${contentPage}`)
    .then((res) => {
      const dom = new JSDOM(res.data)
      const document = dom.window.document
      const examples = Array.from(document.querySelectorAll('.bd-example'))

      const examplesContent = examples.reduce((accum, example) => {
        accum = accum.concat(`
          <template>
            ${example.innerHTML}
          </template>
        `)
        return accum
      }, '')
      fs.outputFile(`${baseBuildDir}/content/${contentPage}.html`, examplesContent)
    })
    .catch((err) => {
      console.log(err)
    })
})
