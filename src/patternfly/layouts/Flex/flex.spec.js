const { expect } = require('chai');
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
        browser.url(url);
        const { folders, misMatchPercentage } = browser.checkElement($('#___gatsby'), url);
        this.test.ctx.screenshotPath = folders.actual; // For error report
        expect(misMatchPercentage).to.be.below(2);
      });
    });
});
