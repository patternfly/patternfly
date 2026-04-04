// Apply theme classes to html tag based on theme options
module.exports = async (page, options) => {
  const { felt, dark, glass, highContrast } = options;

  await page.evaluate((opts) => {
    const root = document.querySelector('html');

    // Apply theme classes based on options
    if (opts.felt) {
      root.classList.add('pf-v6-theme-redhat');
    }

    if (opts.dark) {
      root.classList.add('pf-v6-theme-dark');
    }

    if (opts.glass) {
      root.classList.add('pf-v6-theme-glass');
    }

    if (opts.highContrast) {
      root.classList.add('pf-v6-theme-high-contrast');
    }
  }, options);
};
