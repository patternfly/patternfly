module.exports = async (page, scenario, vp) => {
  await require('./overrideCSS')(page, scenario);
  // Wait until all network requests have completed for a moment
  await page.waitForLoadState('networkidle');

  if (process.argv.includes('--dark')) {
    // Emulate dark mode
    if (page.emulateMedia) {
      await page.emulateMedia({ colorScheme: 'dark' });
    }
    await require('./addDarkThemeClass')(page, scenario);
  } else {
    // Emulate light mode
    if (page.emulateMedia) {
      await page.emulateMedia({ colorScheme: 'light' });
    }
  }
};
