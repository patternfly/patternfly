function modifier () {
  return {
    name: 'modifier',
    parse (value, item, filename) {
      return value
    }
  }
}

function template () {
  return {
    name: 'template',
    multiple: false,
    parse (value, item, filename) {
      return value
    }
  }
}
module.exports = [
  modifier,
  template
]
