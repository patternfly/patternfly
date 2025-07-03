module.exports = async (page, scenario) => {
  // disable animations/transitions
  await page.evaluate(() => {
    document.documentElement.classList.add('pf-v6-m-no-motion');
  });
};
