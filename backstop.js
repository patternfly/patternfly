const config = require('./backstop.config');
const scenarios = [];
const viewports = [];

config.relativeUrls.map(relativeUrl => {
  const url = (relativeUrl.url || relativeUrl);
  const fullUrl = `${config.baseUrl}${url}`;
  return scenarios.push({
    label: url,
    url: fullUrl,
    delay: (relativeUrl.delay || 100), // a small timeout allows wiggle room for the page to fully render. increase as needed if you're getting rendering related false positives.
    readySelector: '.ws-full-page-utils',
    removeSelectors: ['.ws-full-page-utils'],
    misMatchThreshold: 0.1
  })
});

Object.keys(config.viewports).map(viewport => (
  viewports.push({
    name: viewport,
    width: config.viewports[viewport].width,
    height: config.viewports[viewport].height
  })
));

module.exports = {
  id: 'pf-core',
  viewports,
  scenarios,
  onReadyScript: 'puppet/onReady.js',
  onBeforeScript: 'puppet/onBefore.js',
  report: ['browser'],
  engine: 'puppeteer',
  engineOptions: {
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  },
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report'
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
  archiveReport: false,
  scenarioLogsInReports: false
};
