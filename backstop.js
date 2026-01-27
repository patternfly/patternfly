const config = require('./backstop.config');
const scenarios = [];
const viewports = [];

// check for --dark flag to trigger separate reference & test images, html report
const isDarkTheme = process.argv.includes('--dark');
const themeSuffix = isDarkTheme ? '_dark' : '';

config.relativeUrls.map((relativeUrl) => {
  const url = relativeUrl.url || relativeUrl;
  const fullUrl = `${config.baseUrl}${url}`;
  const delay = relativeUrl.delay;
  return scenarios.push({
    label: url,
    url: fullUrl,
    // override defaults when needed
    ...(delay !== undefined ? { delay } : {})
  });
});

Object.keys(config.viewports).map((viewport) =>
  viewports.push({
    name: viewport,
    width: config.viewports[viewport].width,
    height: config.viewports[viewport].height
  })
);

module.exports = {
  id: 'pf-core',
  viewports,
  scenarioDefaults: {
    delay: 100, // a small timeout allows wiggle room for the page to fully render. increase as needed if you're getting rendering related false positives.
    readySelector: '.page-loaded',
    removeSelectors: ['.ws-full-page-utils'],
    misMatchThreshold: 0.001
  },
  scenarios,
  onReadyScript: 'playwright/onReady.js',
  onBeforeScript: 'playwright/onBefore.js',
  report: ['browser'],
  engine: 'playwright',
  engineOptions: {
    browser: 'chromium',
    headless: 'new',
    gotoParameters: { waitUntil: 'networkidle' },
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--force-device-scale-factor=1',
      '--font-render-hinting=none',
      '--disable-font-subpixel-positioning',
      '--disable-gpu'
    ]
  },
  paths: {
    bitmaps_reference: `backstop_data/bitmaps_reference${themeSuffix}`,
    bitmaps_test: `backstop_data/bitmaps_test${themeSuffix}`,
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: `backstop_data/html_report${themeSuffix}`,
    ci_report: 'backstop_data/ci_report'
  },
  asyncCaptureLimit: 15,
  asyncCompareLimit: 50,
  resembleOutputOptions: {
    errorType: 'movementDifferenceIntensity',
    ignoreAntialiasing: true,
    largeImageThreshold: 0
  },
  debug: false,
  debugWindow: false,
  archiveReport: false,
  scenarioLogsInReports: false
};
