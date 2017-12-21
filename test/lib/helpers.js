const fs = require('fs')
const path = require('path')
const globby = require('globby')
const reportTypes = (process.env.NODE_ENV === 'test') ? ['CI'] : ['browser']

module.exports = {
  filterScenarios (config) {
    const cliArguments = process.argv.filter((current, index) => {
      return index > 1
    })

    // if arguments are passed only run the given scenarios
    if (cliArguments.length) {
      let scenarios = []

      cliArguments.forEach((currentScenario) => {
        let scenarioPath = path.join(__dirname, '../config/scenarios', `${currentScenario}.js`)
        let scenarioConfigs = require(scenarioPath)
        scenarioConfigs = scenarioConfigs.filter((scenarioConfig) => {
          return !scenarioConfig.disabled
        })
        scenarios.push(...scenarioConfigs)
      })

      config.scenarios = scenarios
    }
  },
  getConfig () {
    const scenarioSource = path.resolve(__dirname, '../../src/**/scenario.js')

    return globby([scenarioSource])
      .then((scenarioPaths) => {
        const scenarios = scenarioPaths.reduce((accum, scenarioPath) => {
          let resourceScenarios = require(scenarioPath)
          resourceScenarios.forEach((resourceScenario) => {
            if (!resourceScenario.disabled) {
              accum.push(resourceScenario)
            }
          })

          return accum
        }, [])

        return {
          "id": "backstop_default",
          "viewports": [
            {
              "label": "large-device",
              "width": 1280,
              "height": 720
            }
          ],
          scenarios,
          "onBeforeScript": "onBefore.js",
          "onReadyScript": "onReady.js",
          "paths": {
            "bitmaps_reference": "test/scenario_references",
            "bitmaps_test": "test/scenario_tests",
            "engine_scripts": "test/scenario_scripts",
            "scripts": "test/scenario_scripts",
            "html_report": "test/results",
            "ci_report": "test/results"
          },
          "report": reportTypes,
          "engine": "chrome",
          "engineFlags": [],
          "engineOptions": {},
          "asyncCaptureLimit": 1,
          "asyncCompareLimit": 1,
          "debug": false,
          "debugWindow": false,
          "resembleOutputOptions": {
            "errorColor": {
              "red": 204,
              "green": 0,
              "blue": 0
            },
            "errorType": "movement",
            "transparency": 0.15
          },
          "misMatchThreshold": 7.0,
          "requireSameDimensions": false
        }
      }).catch((err) => {
        return err
      })
  }
}
