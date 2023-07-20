// This module is shared between NodeJS and babelled ES5
module.exports = {
  hasGdprBanner: false,
  hasFooter: false,
  hasVersionSwitcher: false,
  hasDarkThemeSwitcher: true,
  sideNavItems: [
    { section: 'get-started' },
    { section: 'developer-resources' },
    { section: 'components' },
    { section: 'layouts' },
    { section: 'utility-classes' },
    { section: 'patterns' },
    { section: 'extensions' }
  ],
  topNavItems: [
    {
      text: 'Contribute',
      path: '/contribution'
    },
    {
      text: 'Guidelines',
      path: '/guidelines'
    },
    {
      text: 'Icons',
      path: '/icons'
    },
    {
      text: 'Custom icons',
      path: '/adding-custom-icons'
    }
  ],
  port: 8001
};
