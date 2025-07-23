module.exports = async (page, scenario, vp) => {
  await require('./overrideCSS')(page, scenario);

  if (process.argv.includes('--dark')) {
    // Emulate dark mode
    if (page.emulateMediaFeatures) {
      await page.emulateMediaFeatures([
        { name: 'prefers-color-scheme', value: 'dark' }
      ]);
    }
    await require('./addDarkThemeClass')(page, scenario);
  } else {
    // Emulate light mode
    if (page.emulateMediaFeatures) {
      await page.emulateMediaFeatures([
        { name: 'prefers-color-scheme', value: 'light' }
      ]);
    }
  }
};
