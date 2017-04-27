/* eslint-env node */

'use strict';

module.exports = function (environment) {
  const ENV = {
    DS: {
      host: 'http://localhost:3333',
    },
    modulePrefix: 'heisenberg-helper',
    environment,
    rootURL: '/',
    locationType: 'auto',

    'ember-simple-auth': {
      authorizer: 'authorizer:token',
      authenticationRoute: 'login',
    },

    resizeServiceDefaults: {
      widthSensitive: true,
      heightSensitive: true,
      debounceTimeout: 200,
      injectionFactories: ['component']
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.DS.host = 'https://heisenberg-api.herokuapp.com';
  }

  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: `${ENV.DS.host}/token-auth`,
    tokenPropertyName: 'token',
    refreshAccessTokens: false,
    refreshLeeway: 200000
  };

  return ENV;
};
