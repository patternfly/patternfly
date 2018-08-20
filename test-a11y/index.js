/* eslint no-console: 0 */
const selenium = require('selenium-webdriver');
const AxeBuilder = require('axe-webdriverjs');

const sitemap = require('../sitemap');
const { pfReporter } = require('./a11yViolationsReporter');
const { errorsExceedThreshold } = require('./utils');
const config = require('./config');

const { protocol } = config;
const { host } = config;
const { port } = config;
const { logColors } = config;
const violatingPages = [];
let chromeOptions = {};

if (process.env.CI) {
  chromeOptions = { args: ['--headless'] };
} else {
  chromeOptions = { args: ['--start-maximized', '--incognito'] };
}

const chromeCapabilities = selenium.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', chromeOptions);
const driver = new selenium.Builder()
  .forBrowser('chrome')
  .withCapabilities(chromeCapabilities)
  .build();

const testPageA11y = testPage =>
  new Promise(resolve =>
    driver.get(`${protocol}://${host}:${port}${testPage.path}`).then(() => {
      AxeBuilder(driver)
        .withTags(['wcag2a', 'wcag2aa'])
        .disableRules(['color-contrast'])
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

if (process.env.CI) {
  pfReporter.updateStatus('pending', 'Running A11y Audit');
}

sitemap
  .reduce((prevPromise, nextPage) => prevPromise.then(() => testPageA11y(nextPage)), Promise.resolve())
  .then(_ => {
    driver.quit().then(() => {
      const totalViolationsPromise = pfReporter.report(violatingPages);

      totalViolationsPromise.then(totalViolations => {
        if (errorsExceedThreshold(totalViolations.length, config.toleranceThreshold)) {
          console.log(`${logColors.red}%s${logColors.reset}`, `BUILD FAILURE: Too many accessibility violations`);
          console.log(
            `${logColors.red}%s${logColors.reset}`,
            `Found ${totalViolations.length}, which exceeds our goal of less than ${config.toleranceThreshold} \n`
          );
          process.exit(1);
        } else {
          console.log(`${logColors.green}%s${logColors.reset}`, 'ACCESSIBILITY AUDIT PASSES \n');
        }
      });
    });
  })
  .catch(error => {
    driver.quit().then(() => {
      console.log(`PF Test Runner ERROR: ${error}`);
      process.exit(1);
    });
  });
