module.exports = async (page, scenario, vp) => {
  await require('./overrideCSS')(page, scenario);
};
