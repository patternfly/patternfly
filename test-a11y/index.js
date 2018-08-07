/* eslint no-console: 0 */
const selenium = require('selenium-webdriver');
const AxeBuilder = require('axe-webdriverjs');
const sitemap = require('../sitemap');

const host = 'localhost';
const globalViolations = [];
const { pfReporter } = require('./a11yViolationsReporter');

const driver = new selenium.Builder().forBrowser('chrome').build();
const testPageA11y = testPage =>
  new Promise(resolve =>
    driver.get(`http://${host}:8000${testPage.path}`).then(() => {
      AxeBuilder(driver)
        // run against specified rulesets
        // .withRules(['color-contrast', 'link-name'])
        // .withTags(['wcag2a', 'wcag2aa', 'section508'])
        // analyze <main> element's content
        // .include('main')
        // don't analyze .banner element content
        // .exclude('.banner')
        .analyze()
        .then(results => {
          globalViolations.push({
            page: testPage.path,
            violations: results.violations
          });
          resolve();
        });
    })
  );

sitemap
  .reduce((prevPromise, nextPage) => prevPromise.then(() => testPageA11y(nextPage)), Promise.resolve())
  .then(_ => {
    driver.quit().then(() => {
      pfReporter.report(globalViolations);
    });
  })
  .catch(error => {
    driver.quit().then(() => {
      if (globalViolations.length > 0) {
        pfReporter.report(globalViolations);
        // process.exit(1);
      } else {
        console.log(error);
      }
    });
  });
