const path = require('path')
const fs = require('fs-extra')
const baseDirectory = path.resolve(__dirname, '../dist')

function getNavigation (baseDirectory) {
  let resourceTypes = fs.readdirSync(baseDirectory).filter(resource => {
    const isDirectory = fs.statSync(path.join(baseDirectory, resource)).isDirectory()
    const isNotUtility = (resource !== 'utilities')

    return isDirectory && isNotUtility
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
        path: `/${resourceType}/${resource}`
      })
    })

    return accum
  }, [])


  return navigation
}

module.exports = getNavigation(baseDirectory)
