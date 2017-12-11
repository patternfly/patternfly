const path = require('path')
const fs = require('fs-extra')

module.exports = {
  getNavigation (baseDirectory) {
    let resourceTypes = fs.readdirSync(baseDirectory).filter(resource => {
      return fs.statSync(path.join(baseDirectory, resource)).isDirectory()
    })
    let navigation = resourceTypes.reduce((accum, resourceType) => {
      let resourcesTypePath = path.join(baseDirectory, resourceType)
      let resources = fs.readdirSync(resourcesTypePath)

      accum.push({
        type: 'type',
        name: resourceType,
        path: `/${resourceType}`
      })
      resources.forEach((resource) => {
        accum.push({
          type: 'resource',
          name: resource,
          path: `/${resourceType}/${resource}/${resource}`
        })
      })

      return accum
    }, [])


    return navigation
  }
}
