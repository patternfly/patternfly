const config = require('./backstop.config');
const scenarios = [];
const viewports = [];

// check for --dark flag to trigger separate reference & test images, html report
const isDarkTheme = process.argv.includes('--dark');
const themeSuffix = isDarkTheme ? '_dark' : '';

config.relativeUrls.map((relativeUrl) => {
  const url = relativeUrl.url || relativeUrl;
  const fullUrl = `${config.baseUrl}${url}`;
  return scenarios.push({
    label: url,
    url: fullUrl,
    delay: relativeUrl.delay || 100, // a small timeout allows wiggle room for the page to fully render. increase as needed if you're getting rendering related false positives.
    readySelector: '.page-loaded',
    removeSelectors: ['.ws-full-page-utils'],
    misMatchThreshold: 0.001
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
  scenarios,
  onReadyScript: 'puppet/onReady.js',
  onBeforeScript: 'puppet/onBefore.js',
  report: ['browser'],
  engine: 'puppeteer',
  engineOptions: {
    // executablePath: '/Users/cmichael/Desktop/browsers/chrome-124/Chromium.app/Contents/MacOS/Chromium', // tells puppeteer to use a specific browser instead of the default that comes with puppeteer
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  },
  paths: {
    bitmaps_reference: `backstop_data/bitmaps_reference${themeSuffix}`,
    bitmaps_test: `backstop_data/bitmaps_test${themeSuffix}`,
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: `backstop_data/html_report${themeSuffix}`,
    ci_report: 'backstop_data/ci_report'
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
  archiveReport: false,
  scenarioLogsInReports: false
};
