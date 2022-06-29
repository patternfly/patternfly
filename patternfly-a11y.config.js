const { fullscreenRoutes } = require('@breakaway/documentation-framework/routes');

async function waitFor(page) {
  await page.waitForSelector('#root > *');
}

module.exports = {
  prefix: 'http://localhost:5000',
  waitFor,
  crawl: false,
  urls: Object.keys(fullscreenRoutes),
  ignoreRules: ['color-contrast', 'page-has-heading-one', 'scrollable-region-focusable', 'bypass', 'nested-interactive', 'aria-allowed-attr'].join(','),
  ignoreIncomplete: true
};
