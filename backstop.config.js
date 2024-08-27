const { fullscreenRoutes } = require('@patternfly/documentation-framework/routes.js');

// List of URLs to test
const relativeUrls = Object.keys(fullscreenRoutes);

// Viewports to test against
const viewports = {
  mobile: {
    width: 360,
    height: 480
  },
  tablet: {
    width: 1024,
    height: 768
  },
  desktop: {
    width: 1280,
    height: 1024
  }
};

// Base URL for the test relative URLs - defaults to the PF core default dev server
const baseUrl = 'http://localhost:5000';

module.exports = {
  baseUrl,
  relativeUrls,
  viewports
};
