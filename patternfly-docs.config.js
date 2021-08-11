// This module is shared between NodeJS and babelled ES5
module.exports = {
  hasGdprBanner: false,
  hasFooter: false,
  hasVersionSwitcher: false,
  sideNavItems: [
    { section: 'developer-resources' },
    { section: 'components' },
    { section: 'layouts' },
    { section: 'utilities' },
    { section: 'demos' },
    { section: 'extensions' }
  ],
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
  ],
  port: 8001
};
