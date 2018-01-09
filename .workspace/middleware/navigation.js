const path = require('path')
const fs = require('fs-extra')

const componentDirectory = path.resolve(__dirname, '../../src/components')
const patternDirectory = path.resolve(__dirname, '../../src/patterns')
const bootstrapComponentDirectory = path.resolve(__dirname, '../../bs-content/components')
const bootstrapContentDirectory = path.resolve(__dirname, '../../bs-content/content')

function getNavigation (settings) {
  let componentNavigation = fs.readdirSync(settings.baseDir).reduce((accum, component) => {
    let componentName = path.basename(component, '.html')
    accum.push({
      type: settings.type,
      name: componentName,
      path: `${settings.baseUrl}/${componentName}`
    })
    return accum
  }, [])
  return componentNavigation
}

module.exports = function (req, res, next) {
  fs.ensureDirSync(componentDirectory)
  fs.ensureDirSync(patternDirectory)
  fs.ensureDirSync(bootstrapComponentDirectory)
  fs.ensureDirSync(bootstrapContentDirectory)
  req.navigation = {
    components: getNavigation({
      baseUrl: '/components',
      type: 'component',
      baseDir: componentDirectory
    }),
    patterns: getNavigation({
      baseUrl: '/patterns',
      type: 'pattern',
      baseDir: patternDirectory
    }),
    bootstrapComponents: getNavigation({
      baseUrl: '/bootstrap/components',
      type: 'bootstrap-component',
      baseDir: bootstrapComponentDirectory
    }),
    bootstrapContent: getNavigation({
      baseUrl: '/bootstrap/content',
      type: 'bootstrap-content',
      baseDir: bootstrapContentDirectory
    })
  }

  next()
}
