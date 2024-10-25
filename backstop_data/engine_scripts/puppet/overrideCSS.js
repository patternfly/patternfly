// disable animations/transitions
const CSS_OVERRIDE =
  '*, *::before, *::after {animation-delay:-1ms !important;animation-duration:1ms !important;animation-iteration-count:1 !important;transition-duration:0s !important;transition-delay:0s !important;}';

module.exports = async (page, scenario) => {
  await page.evaluate(`window._styleData = '${CSS_OVERRIDE}'`);
  await page.evaluate(() => {
    const style = document.createElement('style');
    const styleNode = document.createTextNode(window._styleData);
    style.appendChild(styleNode);
    document.head.appendChild(style);
  });
};
