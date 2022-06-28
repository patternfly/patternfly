// This module is shared between NodeJS and babelled ES5
/* eslint-disable global-require */
const isClient = Boolean(process.env.NODE_ENV);

module.exports = {
  '/': {
    SyncComponent: isClient && require('../src/site/pages/index').default
  },
  '/404': {
    SyncComponent: isClient && require('@breakaway/documentation-framework/pages/404').default,
    title: '404 Error'
  }
};

/* eslint-enable global-require */
