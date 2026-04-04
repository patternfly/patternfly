module.exports = async (page, scenario, vp, isReference, Engine, config) => {
  const scenariosCount = config.scenarios.length;
  process.stdout.write('SCENARIO > ' + scenario.sIndex + ' of ' + scenariosCount + ' - ' + scenario.label + ' (' + vp.label + ')\n');

  // Detect theme flags
  const isFelt = process.argv.includes('--felt');
  const isDark = process.argv.includes('--dark');
  const isGlass = process.argv.includes('--glass');
  const isHighContrast = process.argv.includes('--high-contrast');

  // Set localStorage theme preferences before page loads
  await page.addInitScript((options) => {
    // Set contrast preference
    if (options.highContrast) {
      localStorage.setItem('contrast-preference', 'contrast-high');
    } else if (options.glass) {
      localStorage.setItem('contrast-preference', 'contrast-glass');
    } else {
      localStorage.setItem('contrast-preference', 'contrast-default');
    }

    // Set theme preference (color mode)
    if (options.dark) {
      localStorage.setItem('theme-preference', 'dark');
    } else {
      localStorage.setItem('theme-preference', 'light');
    }

    // Set theme variant preference
    if (options.felt) {
      localStorage.setItem('theme-variant-preference', 'theme-redhat');
    } else {
      localStorage.setItem('theme-variant-preference', 'theme-default');
    }
  }, { felt: isFelt, dark: isDark, glass: isGlass, highContrast: isHighContrast });
};
