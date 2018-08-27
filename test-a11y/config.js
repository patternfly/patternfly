/* eslint global-require: 0, import/no-dynamic-require: 0 */
const path = require('path');
const program = require('commander');

const defaultConfig = {
  toleranceThreshold: 14,
  host: 'localhost',
  port: '8000',
  protocol: 'http',
  logColors: {
    red: '\x1b[31m',
    green: '\x1b[32m',
    blue: '\x1b[36m',
    yellow: '\x1b[33m',
    reset: '\x1b[0m'
  }
};
let incomingConfig = {};
let config = {};

program.option('-c, --config <path>', 'specifies a user defined configuration').parse(process.argv);

if (program.config) {
  const configPath = path.resolve(process.cwd(), program.config);
  incomingConfig = require(configPath);
  config = {
    ...defaultConfig,
    ...incomingConfig
  };
} else {
  config = {
    ...defaultConfig
  };
}

module.exports = {
  ...config
};
