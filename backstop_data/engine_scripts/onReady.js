module.exports = async (page) => {
  // disable animations/transitions so they don't interfere with screenshot tool
  await page.addStyleTag({content: "*, *::before, *::after {animation-delay:-1ms !important;animation-duration:1ms !important;animation-iteration-count:1 !important;transition-duration:0s !important;transition-delay:0s !important;}"});
};
