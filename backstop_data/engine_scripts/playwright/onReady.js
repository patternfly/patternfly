module.exports = async (page, scenario, vp) => {
  await require('./overrideCSS')(page, scenario);
  // Wait until all network requests have completed for a moment
  await page.waitForLoadState('networkidle');

  // Emulate color scheme based on dark mode
  const isDark = process.argv.includes('--dark');
  if (page.emulateMedia) {
    await page.emulateMedia({ colorScheme: isDark ? 'dark' : 'light' });
  }
};
