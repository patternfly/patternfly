// add glass theme class to html tag
const glassThemeClass = 'pf-v6-theme-glass';

module.exports = async (page, scenario) => {
  await page.evaluate(() => {
    const root = document.querySelector('html');
    root.classList.add('pf-v6-theme-glass');
  });
};
