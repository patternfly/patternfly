
module.exports = async (page, scenario, isDarkMode) => {
  await page.evaluateOnNewDocument(() => {
    const DARK_MODE_STORAGE_KEY = "dark-mode";
    localStorage.setItem(DARK_MODE_STORAGE_KEY, isDarkMode);
  });
};
