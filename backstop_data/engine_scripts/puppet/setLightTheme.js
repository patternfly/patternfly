// add dark theme class to html tag
module.exports = async (page, scenario) => {
  await page.evaluate(() => {
    window.localStorage.setItem('theme-preference', 'light');
  });
};
