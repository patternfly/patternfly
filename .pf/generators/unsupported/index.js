const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  function () {
    this.log('you have entered an unsupported framework')
  }
}
