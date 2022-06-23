const _ = require('lodash');
const Rollbar = require('rollbar');

const { SERVICE_NAMES, getPluginService } = require('../utils');

module.exports = ({ strapi }) => {
  let isReady = false;
  let client = null;

  return {
    init() {
      if (client !== null) {
        return this;
      }
      const settings = getPluginService(strapi, SERVICE_NAMES.settings).get();
      if (settings.accessToken) {
        const defaultSettings = {
          captureUncaught: true,
          captureUnhandledRejections: true,
          scrubHeaders: ['Authentication'],
          environment: strapi.config.get('environment'),
          version: strapi.config.info.strapi,
        };
        const accessToken = {
          accessToken: settings.accessToken,
        };
        client = new Rollbar(
          _.merge(defaultSettings, settings.init, accessToken)
        );
        isReady = true;
      } else {
        strapi.log.warn(
          '[rollbar] disabled due to missing `accessToken` in configuration.'
        );
      }
    },

    getClient() {
      if (!isReady) {
        strapi.log.warn('Rollbar has not been initialized yet');
        return;
      }
      return client;
    },

    reportError(error, request) {
      if (!isReady) {
        strapi.log.warn(
          'Rollbar has not been initialized yet, can not report error'
        );
        return;
      }

      client.error(error, request);
    },
  };
};
