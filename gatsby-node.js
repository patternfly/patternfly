const path = require('path')
const inflection = require('inflection')
const StyleLintPlugin = require('stylelint-webpack-plugin')

exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  const PAGES_BASE_DIR = path.resolve(__dirname, './src/pages')
  const PATTERNS_BASE_DIR = path.resolve(__dirname, './src/patternfly/patterns')
  const COMPONENTS_BASE_DIR = path.resolve(__dirname, './src/patternfly/components')
  const isMarkdown = (node.internal.type === 'MarkdownRemark')

  if (isMarkdown) {
    const isPage = (node.fileAbsolutePath.includes(PAGES_BASE_DIR))
    const isPattern = (node.fileAbsolutePath.includes(PATTERNS_BASE_DIR))
    const isComponent = (node.fileAbsolutePath.includes(COMPONENTS_BASE_DIR))

    if (isPage) {
      let relativePath = path.relative(PAGES_BASE_DIR, node.fileAbsolutePath)
      let pagePath = `/${relativePath}`.replace(/\.md$/, '')
      createNodeField({ node, name: 'path', value: pagePath })
      createNodeField({ node, name: 'type', value: 'page' })
      createNodeField({ node, name: 'contentType', value: 'page' })
    } else if (isComponent) {
      let componentName = path.basename(path.dirname(node.fileAbsolutePath))
      let componentSlug = inflection.dasherize(componentName)
      let pagePath = `/components/${componentName}/docs`
      createNodeField({ node, name: 'path', value: pagePath })
      createNodeField({ node, name: 'type', value: 'documentation' })
      createNodeField({ node, name: 'contentType', value: 'component' })
    } else if (isPattern) {
      let patternName = path.basename(path.dirname(node.fileAbsolutePath))
      let patternSlug = inflection.dasherize(patternName)
      let pagePath = `/patterns/${patternName}/docs`
      createNodeField({ node, name: 'path', value: pagePath })
      createNodeField({ node, name: 'type', value: 'documentation' })
      createNodeField({ node, name: 'contentType', value: 'pattern' })
    }
  }
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              type
              path
              contentType
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.path,
        component: path.resolve(__dirname, `./src/templates/${node.fields.type}.js`),
        context: {
          path: node.fields.path,
          type: node.fields.type,
          contentType: node.fields.contentType
        }
      })
    })
  })
}

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage, createNodeField } = boundActionCreators
  const CATEGORY_PAGE_REGEX = /^\/(components|patterns)\/$/
  const CATEGORY_CHILD_PAGE_REGEX = /^\/(components|patterns)\/([A-Za-z0-9_-]+)/
  const DEMO_PAGE_REGEX = /^\/(demos)\/([A-Za-z0-9_-]+)/
  return new Promise((resolve, reject) => {
    let isCategoryPage = page.path.match(CATEGORY_PAGE_REGEX)
    let isCategoryChildPage = page.path.match(CATEGORY_CHILD_PAGE_REGEX)
    let isDemoPage = page.path.match(DEMO_PAGE_REGEX)
    page.context.type = 'page'
    page.context.category = 'page'
    page.context.slug = ''
    page.context.name = ''
    page.context.title = ''

    if (isCategoryPage) {
      page.context.type = 'category'
      page.context.category = page.path.match(CATEGORY_PAGE_REGEX)[1]
    } else if (isCategoryChildPage) {
      let pageCategory = page.path.match(CATEGORY_CHILD_PAGE_REGEX)[1]
      let pageSlug = page.path.match(CATEGORY_CHILD_PAGE_REGEX)[2]
      let pageName = pageSlug.replace('-', ' ')
      let pageTitle = inflection.titleize(pageName)
      page.context.type = inflection.singularize(pageCategory)
      page.context.category = pageCategory
      page.context.slug = pageSlug
      page.context.name = pageName
      page.context.title = pageTitle
    } else if (isDemoPage) {
      let pageCategory = page.path.match(DEMO_PAGE_REGEX)[1]
      let pageSlug = page.path.match(DEMO_PAGE_REGEX)[2]
      let pageName = pageSlug.replace('-', ' ')
      let pageTitle = inflection.titleize(pageName)
      page.context.type = inflection.singularize(pageCategory)
      page.context.category = pageCategory
      page.context.slug = pageSlug
      page.context.name = pageName
      page.context.title = pageTitle

      page.layout = 'demo'
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
        '@project': path.resolve(__dirname, './src')
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
