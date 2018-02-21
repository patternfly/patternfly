const path = require('path')
const inflection = require('inflection')
const StyleLintPlugin = require('stylelint-webpack-plugin')
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage, createNodeField } = boundActionCreators
  const CATEGORY_REGEX = /^\/(components|patterns)\/$/
  const CATEGORY_CHILD_REGEX = /^\/(components|patterns)\/([A-Za-z0-9_-]+)/
  return new Promise((resolve, reject) => {
    page.context.type = 'page'
    page.context.category = 'page'
    page.context.slug = ''
    page.context.name = ''
    page.context.title = ''

    if (page.path.match(CATEGORY_REGEX)) {
      // page.layout = 'category'
      page.context.type = 'category'
      page.context.category = page.path.match(CATEGORY_REGEX)[1]
    } else if (page.path.match(CATEGORY_CHILD_REGEX)) {
      let pageCategory = page.path.match(CATEGORY_CHILD_REGEX)[1]
      let pageSlug = page.path.match(CATEGORY_CHILD_REGEX)[2]
      let pageName = pageSlug.replace('-', ' ')
      let pageTitle = inflection.titleize(pageName)
      // page.layout = 'single'
      page.context.type = inflection.singularize(pageCategory)
      page.context.category = pageCategory
      page.context.slug = pageSlug
      page.context.name = pageName
      page.context.title = pageTitle
    }

    createPage(page)

    resolve()
  })
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    resolve: {
      alias: {
        '@siteComponents': path.resolve(__dirname, './src/_site'),
        '@patterns': path.resolve(__dirname, './src/patternfly/patterns'),
        '@components': path.resolve(__dirname, './src/patternfly/components'),
      }
    },
    plugins: [
      new StyleLintPlugin({
        configFile: './.stylelintrc',
        fix: false,
        failOnError: false
      })
    ]
  })
  return config
}
