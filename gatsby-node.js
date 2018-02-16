const path = require('path')
const inflection = require('inflection')
const StyleLintPlugin = require('stylelint-webpack-plugin')

exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNode, createNodeField } = boundActionCreators
  const isMarkdown = (node.internal.type === 'MarkdownRemark')

  if (isMarkdown) {
    let patternflyBasePath = path.resolve(__dirname, './src/patternfly')
    let pagesBasePath = path.resolve(__dirname, './src/pages')
    let pageRelativePath = path.relative(pagesBasePath, node.fileAbsolutePath)
    let patternflyRelativePath = path.relative(patternflyBasePath, node.fileAbsolutePath)
    let greatGrandParentPath = path.resolve(node.fileAbsolutePath, '../../../')
    let greatGrandParentName = path.basename(greatGrandParentPath)
    let grandParentPath = path.resolve(node.fileAbsolutePath, '../../')
    let grandParentName = path.basename(grandParentPath)
    let fileName = path.basename(node.fileAbsolutePath, '.md')
    let isPatternfly = node.fileAbsolutePath.includes(patternflyBasePath)

    if (isPatternfly) {
      createNodeField({ node, name: 'type', value: 'component' })
      createNodeField({ node, name: 'template', value: 'documentation' })
      createNodeField({ node, name: 'name', value: `${greatGrandParentName}-${grandParentName}-${fileName}` })
      createNodeField({
        node,
        name: 'title',
        value: inflection.transform(grandParentName, ['underscore', 'titleize'])
      })
      createNodeField({ node, name: 'category', value: greatGrandParentName })
      createNodeField({ node, name: 'path', value: `/${greatGrandParentName}/${grandParentName}` })
    } else {
      createNodeField({ node, name: 'type', value: 'page' })
      createNodeField({ node, name: 'template', value: 'page' })
      createNodeField({ node, name: 'name', value: fileName })
      createNodeField({
        node,
        name: 'title',
        value: inflection.transform(fileName, ['underscore', 'titleize'])
      })
      createNodeField({
        node,
        name: 'path',
        value: path.join('/', pageRelativePath).replace('.md','')
      })
    }
  }
}

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators

  const CREATE_PAGES = graphql(`
    {
    	allMarkdownRemark(
        filter: { fields: { type: { eq: "page" } } }
      ) {
        edges {
          node {
            fields {
              type
              template
    					path
              title
              name
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach((edge) => {
      if (edge.node.fields.path) {
        createPage({
          path: edge.node.fields.path,
          component: path.resolve(`src/templates/${edge.node.fields.template}.js`),
          context: {
            path: edge.node.fields.path,
            template: edge.node.fields.template,
            type: edge.node.fields.type,
            title: edge.node.fields.title,
            name: edge.node.fields.name
          }
        })
      }
    })

    return result
  }).catch((err) => {
    console.error(err.toString())

    return Promise.reject(err)
  })

  const CREATE_DOCUMENTATION = graphql(`
    {
    	allMarkdownRemark(
        filter: { fields: { type: { eq: "component" } } }
      ) {
        edges {
          node {
            fields {
              type
              template
    					path
              category
              title
              name
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach((edge) => {
      if (edge.node.fields.path) {
        createPage({
          path: edge.node.fields.path,
          component: path.resolve(`src/templates/${edge.node.fields.template}.js`),
          context: {
            path: edge.node.fields.path,
            template: edge.node.fields.template,
            type: edge.node.fields.type,
            category: edge.node.fields.category,
            title: edge.node.fields.title,
            name: edge.node.fields.name,
          }
        })
      }
    })

    return result
  }).catch((err) => {
    console.error(err.toString())

    return Promise.reject(err)
  })

  return Promise.all([
    CREATE_PAGES,
    CREATE_DOCUMENTATION
  ])
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    resolve: {
      alias: {
        '@siteComponents': path.resolve(__dirname, './src/_site')
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
