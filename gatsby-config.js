const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'PatternFly 4 - HTML'
  },
  pathPrefix: '/patternfly-next',
  plugins: [
    // Use our patternfly.org theme
    {
      resolve: `gatsby-theme-patternfly-org`,
      options: {
        sideNavItems: [
          { section: 'components' },
          { section: 'layouts' },
          { section: 'utilities' },
          { section: 'demos' },
          { section: 'experimental' },
          { text: 'Release notes', link: '/documentation/core/release-notes' },
          { text: 'Global CSS Variables', link: '/documentation/global-css-variables' }
        ],
        topNavItems: [
          {
            text: 'Accessibility',
            link: '/accessibility-guide'
          },
          {
            text: 'Contribute',
            link: '/contribution'
          },
          {
            text: 'Guidelines',
            link: '/guidelines'
          },
          {
            text: 'Modifiers',
            link: '/modifiers'
          },
          {
            text: 'Upgrade guide',
            link: '/upgrade-guide'
          },
          {
            text: 'Icons',
            link: '/icons'
          }
        ]
      }
    },
    // Source component documentation
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'core', // This goes in URLs
        path: `${path.resolve(__dirname)}/src/patternfly`
      }
    },
    // Source release notes
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'core', // This goes in URLs
        path: `${path.resolve(__dirname)}/RELEASE-NOTES.md`
      }
    },
    // Create static pages
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${path.resolve(__dirname)}/src/site/pages`
      }
    }
  ]
};
