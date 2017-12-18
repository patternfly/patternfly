const Generator = require('yeoman-generator')
const inflection = require('inflection')
const path = require('path')
const rename = require('gulp-rename')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
    this.resourceType
  }
  writing() {
    let resourceType = inflection.pluralize(this.args[0])
    let resourceFilename = inflection.transform(
      this.args[1],
      ['tableize','dasherize','singularize']
    ).toLowerCase()
    let resourceTitle = inflection.transform(
      this.args[1],
      ['titleize']
    )
    let resourceClassName = inflection.transform(
      this.args[1],
      ['classify']
    )
    let templateDirectory = path.resolve(__dirname, '../../templates/resource')
    let resourceDirTemplate = path.join(templateDirectory, `./__name__`)
    let resourceDestination = path.join(`./src/${resourceType}/${resourceFilename}`)
    this.registerTransformStream(rename((resourcePath) => {
      resourcePath.basename = resourcePath.basename.replace(/(__name__)/g, resourceFilename)
      resourcePath.dirname = resourcePath.dirname.replace(/(__name__)/g, resourceFilename)
    }))
    this.fs.copyTpl(
      this.templatePath(resourceDirTemplate),
      this.destinationPath(resourceDestination),
      {
        design: {
          usage: {
            mainHeading: resourceTitle
          }
        },
        frameworks: {
          angular: {
            selector: resourceFilename,
            templateUrl: `${resourceFilename}.component.html`,
            styleUrls: `${resourceFilename}.component.css`,
            className: `${resourceFilename}Component`
          },
          react: {
            bemEntity: resourceFilename,
            className: resourceClassName
          },
          vue: {
            bemEntity: resourceFilename,
            name: resourceFilename
          }
        },
        html: {
          bemEntity: resourceFilename
        },
        npm: {
          packageName: resourceFilename
        },
        sass: {
          resourceType,
          bemEntity: resourceFilename,
          gitUserName: process.env.GIT_USER_NAME || '',
          gitUserEmail: process.env.GIT_USER_EMAIL || ''
        },
        test: {
          description: resourceTitle
        }
      }
    )
  }
  create() {

  }
}
