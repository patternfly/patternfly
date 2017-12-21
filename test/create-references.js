const backstop = require('backstopjs')
const helpers = require('./lib/helpers')

helpers.getConfig()
.then((config) => {
  backstop('reference', { config })
    .then(() => { console.log('references created') })
    .catch((err) => {
      console.log(err)
      return err
    })
})
.catch((err) => { console.log(err) })
