module.exports = async (page, scenario, vp) => {
  await require('./overrideCSS')(page, scenario);

  if (process.argv.includes('--dark')) {
    // add dark theme class to html tag if --dark flag passed
    await require('./addDarkThemeClass')(page, scenario);
  } else {
    await require('./setLightTheme')(page, scenario);
  }
};
