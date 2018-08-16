/* eslint no-console: 0 */
const selenium = require('selenium-webdriver');
const AxeBuilder = require('axe-webdriverjs');
const sitemap = require('../sitemap');

const host = 'localhost';
const violatingPages = [];
const { pfReporter } = require('./a11yViolationsReporter');

let chromeOptions = {};

if (process.env.CI) {
  chromeOptions = { args: ['--headless'] };
} else {
  chromeOptions = { args: ['--start-maximized'] };
}

const chromeCapabilities = selenium.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', chromeOptions);
const driver = new selenium.Builder()
  .forBrowser('chrome')
  .withCapabilities(chromeCapabilities)
  .build();
// const driver = new selenium.Builder().forBrowser('chrome').build();
const testPageA11y = testPage =>
  new Promise(resolve =>
    driver.get(`http://${host}:8000${testPage.path}`).then(() => {
      AxeBuilder(driver)
        .withTags(['wcag2a', 'wcag2aa'])
        .disableRules(['document-title'])
        .analyze()
        .then(results => {
          if (results.violations.length > 0) {
            violatingPages.push({
              page: testPage.path,
              violations: results.violations
            });
          }
          resolve();
        });
    })
  );

sitemap
  .reduce((prevPromise, nextPage) => prevPromise.then(() => testPageA11y(nextPage)), Promise.resolve())
  .then(_ => {
    driver.quit().then(() => {
      const totalViolations = pfReporter.report(violatingPages);

      if (totalViolations.length > 18) {
        console.log(`failing build with ${totalViolations.length} total violations`);
        process.exit(1);
      } else {
        process.exit(0);
      }
    });
  })
  .catch(error => {
    driver.quit().then(() => {
      console.log(`PF Test Runner ERROR: ${error}`);
      process.exit(1);
    });
  });
