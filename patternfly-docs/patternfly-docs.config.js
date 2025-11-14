// This module is shared between NodeJS and babelled ES5
module.exports = {
  hasGdprBanner: false,
  hasFooter: false,
  hasVersionSwitcher: false,
  hasThemeSwitcher: true,
  hasHighContrastSwitcher: true,
  hasRTLSwitcher: true,
  sideNavItems: [
    { section: 'components' },
    { section: 'patterns' },
    { section: 'foundations-and-styles' },
    { section: 'AI' }
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
      path: '/custom-icons'
    }
  ],
  port: 8001
};
