const assert = require('assert');
const fsPages = require('../../../../.cache/fullscreenPages.json');

const component = __dirname
  .split('/')
  .pop()
  .toLowerCase();

describe(`core-layouts-${component}`, () => {
  fsPages
    .filter(url => url.includes(`/documentation/core/layouts/${component}`))
    .sort()
    .forEach(url => {
      it(`${url.split('/').pop()} snapshot`, function() {
        browser.url(`http://localhost:9000${url}`);
        const { path, fileName } = browser.saveElement($('#___gatsby'), url);
        this.test.ctx.screenshotPath = `${path}/${fileName}`; // For error report
        assert(browser.checkElement($('#___gatsby'), url) === 0);
      });
    });
});
