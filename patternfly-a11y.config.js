const { fullscreenRoutes } = require('@patternfly/documentation-framework/routes');

async function waitFor(page) {
  await page.waitForSelector('#root > *');
}

const urls = Object.keys(fullscreenRoutes)
  .map(key => {
    if (fullscreenRoutes[key].isFullscreenOnly) {
      return key;
    } else {
      const path = fullscreenRoutes[key].path
      if (path.match(/\/demos\/.*\/html-demos$/g)) {
        return path.replace(/\/html-demos$/, '');
      } else {
        return path.replace(/\/html$/, '')
      }
    }
  })
  .reduce((result, item) => (result.includes(item) ? result : [...result, item]), []);

module.exports = {
  prefix: 'http://localhost:5000',
  waitFor,
  crawl: false,
  urls: [
    {
      url: '/',
      label: 'home fullscreen nav expanded',
      viewportDimensions: { width: 1920, height: 1080 },
      afterNav: async page => {
        await page.click('button#nav-toggle');
      }
    },
    {
      url: '/',
      label: 'home fullscreen nav collapsed',
      viewportDimensions: { width: 1920, height: 1080 }
    },
    {
      url: '/',
      label: 'home mobile nav collapsed',
      viewportDimensions: { width: 400, height: 900 }
    },
    {
      url: '/',
      label: 'home mobile nav expanded',
      viewportDimensions: { width: 400, height: 900 },
      afterNav: async page => {
        await page.click('button#nav-toggle');
      }
    },
    {
      url: '/components/table',
      label: 'html table content on mobile screen',
      viewportDimensions: { width: 400, height: 900 }
    },
    ...urls
  ],
  ignoreRules: [
    'color-contrast',
    'landmark-no-duplicate-main',
    'landmark-main-is-top-level',
    'scrollable-region-focusable'
  ].join(','),
  ignoreIncomplete: true,
  skip: '(mailto)|(/(developer-resources)/.+)'
};
