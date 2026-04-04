module.exports = async (page, scenario, vp) => {
  await require('./overrideCSS')(page, scenario);
  // Wait until all network requests have completed for a moment
  await page.waitForLoadState('networkidle');

  // Detect theme flags
  const isFelt = process.argv.includes('--felt');
  const isDark = process.argv.includes('--dark');
  const isGlass = process.argv.includes('--glass');
  const isHighContrast = process.argv.includes('--high-contrast');

  // Emulate color scheme based on dark mode
  if (page.emulateMedia) {
    await page.emulateMedia({ colorScheme: isDark ? 'dark' : 'light' });
  }

  // Apply theme classes
  await require('./applyThemeClasses')(page, {
    felt: isFelt,
    dark: isDark,
    glass: isGlass,
    highContrast: isHighContrast
  });
};
