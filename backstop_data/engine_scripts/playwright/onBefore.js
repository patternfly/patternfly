module.exports = async (page, scenario, vp, isReference, Engine, config) => {
  const scenariosCount = config.scenarios.length;
  process.stdout.write('SCENARIO > ' + scenario.sIndex + ' of ' + scenariosCount + ' - ' + scenario.label + ' (' + vp.label + ')\n');
};
