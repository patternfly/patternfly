const fs = require('fs');
const { join } = require('path');
const browserstack = require('browserstack-local');

exports.config = {
  ...(process.env.CI && {
    user: process.env.WDIO_USER,
    key: process.env.WDIO_KEY,
    // Code to start browserstack local before start of test
    onPrepare: function (config, capabilities) {
      console.log('Connecting local');
      return new Promise(function(resolve, reject){
        exports.bs_local = new browserstack.Local();
        exports.bs_local.start({'key': exports.config.key }, function(error) {
          if (error) return reject(error);
          console.log('Connected. Now testing...');
          resolve();
        });
      });
    },
    // Code to stop browserstack local after end of test
    onComplete: function (capabilties, specs) {
      exports.bs_local.stop(function() {});
    },
  }),
  runner: 'local',
  specs: ['./src/**/*.spec.js'],
  specFileRetries: 5,
  capabilities: [
    {
      maxInstances: 10,
      browserName: 'firefox',
      ...(process.env.CI && { 'browserstack.local': true })
    }
  ],
  // logLevel: 'warn',
  logLevels: {
    webdriver: 'warn',
  },
  baseUrl: 'http://localhost:9000',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
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
        ignoreColors: true,
        returnAllCompareData: true,
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
  before(capabilities, specs) {
    // eslint-disable-next-line no-undef
    browser.setWindowSize(1040, 784);
  },
  afterTest(test) {
    // Save screenshot diff to last part of Test body
    if (test.error !== undefined && test.ctx && test.ctx.screenshotPath) {
      const fromImg = test.ctx.screenshotPath.replace('actual', 'diff');
      if (fs.existsSync(fromImg)) {
        // Move to somewhere hosted under localhost
        const toPath = join(process.cwd(), 'public/diff.png');
        fs.copyFileSync(fromImg, toPath);
        // eslint-disable-next-line no-undef
        browser.url('/diff.png');
        // eslint-disable-next-line no-undef
        browser.takeScreenshot();
      }
    }
  }
};
