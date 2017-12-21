const backstop = require('backstopjs')
const helpers = require('./lib/helpers')

helpers.getConfig()
.then((config) => {
  backstop('approve', { config })
    .then(() => { console.log('conflicts approved') })
    .catch((err) => {
      console.log(err)
      return err
    })
})
.catch((err) => { console.log(err) })
