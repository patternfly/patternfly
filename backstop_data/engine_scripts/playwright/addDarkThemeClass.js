// add dark theme class to html tag
const darkThemeClass = 'pf-v6-theme-dark';

module.exports = async (page, scenario) => {
  await page.evaluate(() => {
    const root = document.querySelector('html');
    root.classList.add('pf-v6-theme-dark');
  });
};
