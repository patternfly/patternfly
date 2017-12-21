const backstop = require('backstopjs')
const helpers = require('./lib/helpers')

helpers.getConfig()
  .then((config) => {
    backstop('test', { config })
      .then(() => { console.log('tests completed') })
      .catch((err) => { return err })
  })
  .catch((err) => { console.log(err) })
