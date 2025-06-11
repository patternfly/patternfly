module.exports = async (page, scenario) => {
  await page.evaluate(() => {
    // disable animations/transitions
    document.querySelector('html').classList.add('pf-m-no-motion');
  });
};
