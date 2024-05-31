module.exports = async (page, scenario, vp) => {
  await require('./overrideCSS')(page, scenario);

  // add dark theme class to html tag if --dark flag passed
  if (process.argv.includes('--dark')) {
    await require('./addDarkThemeClass')(page, scenario);
  }
};
