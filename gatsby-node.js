const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const resolveAliases = require('./build/resolveAliases');
const glob = require('glob');

// Add map PR-related environment variables to gatsby nodes
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const num = process.env.CIRCLE_PR_NUMBER || process.env.PR_NUMBER;
  const url = process.env.CIRCLE_PULL_REQUEST;
  // Docs https://www.gatsbyjs.org/docs/actions/#createNode
  actions.createNode({
    name: 'PR_INFO',
    num: num || '',
    url: url || '',
    id: createNodeId('PR_INFO'),
    parent: null,
    children: [],
    internal: {
      contentDigest: createContentDigest({ a: 'PR_INFO' }),
      type: 'EnvVars'
    }
  });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    createNodeField({
      node,
      name: 'slug',
      value: `/${node.frontmatter.section}/${path.basename(node.fileAbsolutePath, '.md')}`
    });
    createNodeField({
      node,
      name: 'navSection',
      value: node.frontmatter.section
    });
    createNodeField({
      node,
      name: 'title',
      value: node.frontmatter.title
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMdx {
        nodes {
          id
          fields {
            slug
            navSection
            title
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    return result.data.allMdx.nodes.forEach(node => {
      const { slug, navSection, title } = node.fields;

      createPage({
        path: node.fields.slug,
        component: path.resolve(__dirname, `./src/site/templates/mdxTemplate.js`),
        context: {
          id: node.id,
          slug,
          navSection,
          title
        }
      });
    });
  });
};

let partialsToLocationsMap = null;

const continueWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.hbs$/,
          query: {
            extensions: '.hbs',
            partialResolver(partial, callback) {
              if (partialsToLocationsMap[partial]) {
                callback(null, partialsToLocationsMap[partial]);
              } else {
                console.log(`Could not find partial: ${partial}`);
                callback(new Error(`Could not find partial: ${partial}`), '');
              }
            },
            helperDirs: path.resolve(__dirname, './build/helpers')
          },
          loader: 'handlebars-loader'
        }
      ]
    },
    resolve: {
      alias: resolveAliases
    },
    resolveLoader: {
      alias: { raw: 'raw-loader' }
    },
    plugins: [
      new StyleLintPlugin({
        configFile: './.stylelintrc',
        fix: false,
        failOnError: false,
        emitErrors: true,
        files: 'src/**/*.scss',
        defaultSeverity: 'error'
      }),
      new WebpackNotifierPlugin({
        title: 'PatternFly 4',
        skipFirstNotification: true
      })
    ]
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }) =>
  new Promise((resolve, reject) => {
    if (partialsToLocationsMap === null) {
      partialsToLocationsMap = {};
      glob(path.resolve(__dirname, './src/patternfly/**/*.hbs'), { ignore: '**/examples/**' }, (err, files) => {
        files.forEach(file => {
          const fileNameArr = file.split('/');
          const fileName = fileNameArr[fileNameArr.length - 1].slice(0, -4);
          partialsToLocationsMap[fileName] = file;
        });
        continueWebpackConfig({ stage, actions });
        resolve();
      });
    } else {
      continueWebpackConfig({ stage, actions });
      resolve();
    }
  });
