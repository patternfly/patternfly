const path = require('path')

const PROJECT_ROOT = path.resolve(__dirname)

const plugins = [
  'gatsby-plugin-react-helmet',
  `gatsby-plugin-styled-jsx`,
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  'gatsby-transformer-json',
  'gatsby-transformer-yaml',
  {
    resolve: `gatsby-plugin-postcss-sass`,
    options: {
      postCssPlugins: [],
      precision: 5
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${PROJECT_ROOT}/src/pages`,
      name: 'pages',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${PROJECT_ROOT}/src/patternfly`,
      name: 'patternfly',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${PROJECT_ROOT}/src/_site`,
      name: 'site-components',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${PROJECT_ROOT}/src/img`,
      name: 'images',
    },
  },
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        `gatsby-remark-autolink-headers`,
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: 'prism-language-'
          }
        },
      ],
    },
  },
  {
    resolve: 'gatsby-remark-embed-snippet',
    options: {
      directory: `${__dirname}/src/patternfly`,
    },
  }
]

module.exports = {
  siteMetadata: {
    title: 'PF Next',
  },
  plugins
}
