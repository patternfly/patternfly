const puppeteer = require('puppeteer');

console.log('');
console.log('To make changes to the chrome version puppeteer uses, reference \x1B[1mhttps://pptr.dev/browsers-api\x1B[22m');
console.log('For a list of the current "Chromium for Testing" versions, reference \x1B[1mhttps://googlechromelabs.github.io/chrome-for-testing/\x1B[22m');
console.log('');
console.log('Some common commands:');
console.log('- \x1B[1mnpx @puppeteer/browsers list\x1B[22m # lists all installed browsers');
console.log('- \x1B[1mnpx @puppeteer/browsers clear\x1B[22m # removes all installed browsers');
console.log('- \x1B[1mnpx @puppeteer/browsers install chrome@stable\x1B[22m # install specific chromium version');
console.log(' - Available options are: \x1B[1mstable\x1B[22m, \x1B[1mbeta\x1B[22m, \x1B[1mdev\x1B[22m, \x1B[1mcanary\x1B[22m, and a specific version \(eg, \x1B[1m139.0.7258.154\x1B[22m\)');

// Spits out version of chromium puppeteer is currently using
(async () => {
  const browser = await puppeteer.launch();
  const version = await browser.version();
  console.log('');
  console.log(`Puppeteer is using: ${version}`);
  console.log('');
  await browser.close();
})();
