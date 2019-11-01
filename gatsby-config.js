const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'PatternFly 4 - HTML',
    siteUrl: 'https://pf4.patternfly.org/'
  },
  pathPrefix: '/patternfly-next',
  plugins: [
    // Use our patternfly.org theme
    {
      resolve: `gatsby-theme-patternfly-org`,
      options: {
        context: 'core', // For global items that need sideNav
        sideNav: {
          core: [
            { section: 'overview' },
            { section: 'components' },
            { section: 'layouts' },
            { section: 'utilities' },
            { section: 'demos' },
            { section: 'experimental' },
          ]
        },
        topNavItems: [
          {
            text: 'Accessibility',
            path: '/accessibility-guide'
          },
          {
            text: 'Contribute',
            path: '/contribution'
          },
          {
            text: 'Guidelines',
            path: '/guidelines'
          },
          {
            text: 'Modifiers',
            path: '/modifiers'
          },
          {
            text: 'Upgrade guide',
            path: '/upgrade-guide'
          },
          {
            text: 'Icons',
            path: '/icons'
          }
        ]
      }
    },
    // Source component documentation
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'core', // This goes in URLs and determines sideNav items
        path: `${path.resolve(__dirname)}/src/patternfly`
      }
    },
    // Source static pages
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages-core', // Don't add /documentation/core to url, but use Core sideNav items
        path: `${path.resolve(__dirname)}/src/site/pages`
      }
    },
    // Source release notes
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'core', // This goes in URLs and determines sideNav items
        path: `${path.resolve(__dirname)}/RELEASE-NOTES.md`
      }
    },
    // Pipe MDX files through this plugin that spits out React components
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md']
      }
    },
    // Compile source SASS files
    'gatsby-plugin-sass'
  ]
};
