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
  chromeOptions = { args: ['--headless', '--no-sandbox'] };
} else {
  chromeOptions = { args: ['--incognito', '--window-size=768,1024'] };
}

const chromeCapabilities = selenium.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', chromeOptions);
const driver = new selenium.Builder()
  .forBrowser('chrome')
  .withCapabilities(chromeCapabilities)
  .build();

function runAxe(pagePath, res, rej) {
  return AxeBuilder(driver)
    .withTags(['wcag2a', 'wcag2aa'])
    .disableRules(['document-title', 'html-has-lang'])
    .analyze()
    .then(results => {
      if (results.violations.length > 0) {
        violatingPages.push({
          page: pagePath,
          violations: results.violations
        });
      }
      res();
    })
    .catch(error => {
      rej(error);
    });
}

function domReflowBuffer(testPage, res, rej) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ path: testPage.path, res, rej });
    }, 1000);
  });
}

const testPageA11y = testPage =>
  new Promise((resolve, reject) => {
    driver.get(`${protocol}://${host}:${port}${testPage.path}`);
    return (
      driver
        // wait for JS to build the DOM
        .wait(selenium.until.elementLocated(selenium.By.css('#___gatsby > div'), 10000))
        // allow time for the repaint/relow so styles are applied before we analyze the page
        .then(() => domReflowBuffer(testPage, resolve, reject))
        .then(({ path, res, rej }) => runAxe(path, res, rej))
        .catch(error => {
          reject(error);
        })
    );
  });

if (process.env.CI) {
  pfReporter.updateStatus('pending', 'Running A11y Audit');
}

sitemap
  .reduce((prevPromise, nextPage) => prevPromise.then(() => testPageA11y(nextPage)), Promise.resolve())
  .then(_ => {
    driver.quit().then(() => {
      const totalViolationsPromise = pfReporter.report(violatingPages);

      totalViolationsPromise
        .then(totalViolations => {
          if (errorsExceedThreshold(totalViolations.length, config.toleranceThreshold)) {
            console.log(`${logColors.red}%s${logColors.reset}`, `BUILD FAILURE: Too many accessibility violations`);
            console.log(
              `${logColors.red}%s${logColors.reset}`,
              `Found ${totalViolations.length}, which exceeds our goal of less than ${config.toleranceThreshold} \n`
            );
            process.exit(1);
          } else {
            console.log(`${logColors.green}%s${logColors.reset}`, 'ACCESSIBILITY AUDIT PASSES \n');
            console.log(
              `${logColors.green}%s${logColors.reset}`,
              `Found ${totalViolations.length}, which satisfies our goal of less than ${config.toleranceThreshold} \n`
            );
          }
        })
        .catch(error => {
          throw new Error(error);
        });
    });
  })
  .catch(error => {
    driver.quit().then(() => {
      console.log(`PF Test Runner ERROR: ${error}`);
      process.exit(1);
    });
  });
