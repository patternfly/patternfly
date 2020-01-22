const fs = require('fs');
const { join } = require('path');

exports.config = {
  runner: 'local',
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // directory is where your package.json resides, so `wdio` will be called from there.
  specs: ['./src/**/*.spec.js'],
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  maxInstances: 10,
  capabilities: [
    {
      // maxInstances can get overwritten per capability. So if you have an in-house Selenium
      // grid with only 5 firefox instances available you can make sure that not more than
      // 5 instances get started at a time.
      maxInstances: 5,
      browserName: 'chrome'
    },
    {
      maxInstances: 5,
      browserName: 'firefox'
    }
  ],
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'info',
  // Set specific log levels per logger
  // loggers:
  // - webdriver, webdriverio
  // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
  // - @wdio/mocha-framework, @wdio/jasmine-framework
  // - @wdio/local-runner, @wdio/lambda-runner
  // - @wdio/sumologic-reporter
  // - @wdio/cli, @wdio/config, @wdio/sync, @wdio/utils
  // logLevels: {
  //     webdriver: 'info',
  //     '@wdio/applitools-service': 'info'
  // },
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  baseUrl: 'http://localhost:9000',
  // Default timeout for all waitFor* commands.
  waitforTimeout: 10000,
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 90000,
  // Default request retries count
  connectionRetryCount: 3,
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: [
    'selenium-standalone',
    [
      'image-comparison',
      {
        // https://github.com/wswebcreation/wdio-image-comparison-service/blob/master/docs/OPTIONS.md#plugin-options
        autoSaveBaseline: true,
        baselineFolder: join(process.cwd(), 'snapshots/'),
        formatImageName: '{tag}-{logName}-{width}x{height}',
        screenshotPath: join(process.cwd(), '.tmp/'),
        savePerInstance: true,
        blockOutStatusBar: true,
        blockOutToolBar: true,
        hideScrollBars: true,
        ignoreAntialiasing: true,
        ignoreColors: true
      }
    ]
  ],
  seleniumLogs: 'logs',
  seleniumInstallArgs: {
    drivers: {
      chrome: { version: '77.0.3865.40' },
      firefox: { version: '0.25.0' }
    }
  },
  seleniumArgs: {
    drivers: {
      chrome: { version: '77.0.3865.40' },
      firefox: { version: '0.25.0' }
    }
  },
  // see also: https://webdriver.io/docs/frameworks.html
  framework: 'mocha',
  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false
      }
    ]
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  beforeTest(test) {
    // eslint-disable-next-line no-undef
    browser.setWindowSize(1004, 748);
  },
  afterTest(test) {
    // Save screenshot diff to last part of Test body
    if (test.error !== undefined) {
      // Move to somewhere hosted under localhost
      const toPath = join(process.cwd(), 'public/diff.png');
      fs.copyFileSync(test.ctx.screenshotPath.replace('actual', 'diff'), toPath);
      // eslint-disable-next-line no-undef
      browser.url('/diff.png');
      // eslint-disable-next-line no-undef
      browser.takeScreenshot();
    }
  }
};
