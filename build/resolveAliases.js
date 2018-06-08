const path = require('path');

module.exports = {
  '@siteComponents': path.resolve(__dirname, '../src/site/_site'),
  '@patterns': path.resolve(__dirname, '../src/patternfly/patterns'),
  '@components': path.resolve(__dirname, '../src/patternfly/components'),
  '@layouts': path.resolve(__dirname, '../src/patternfly/layouts'),
  '@demos': path.resolve(__dirname, '../src/demos'),
  '@project': path.resolve(__dirname, '../src')
};
