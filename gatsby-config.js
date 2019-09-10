const path = require('path');
const globImporter = require('node-sass-glob-importer');

module.exports = {
  siteMetadata: {
    title: 'PatternFly 4'
  },
  pathPrefix: '/patternfly-next',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        importer: globImporter(),
        postCssPlugins: [],
        precision: 5
      }
    },
    // Create static pages
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${path.resolve(__dirname)}/src/site/pages`
      }
    },
    // Source dynamic per-component MDX files
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${path.resolve(__dirname)}/src/patternfly`
      }
    },
    // Pipe MDX files through this plugin that spits out React components
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.mdx`, `.md`],
        remarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'prism-language-'
            }
          }
        ]
      }
    }
  ]
};
