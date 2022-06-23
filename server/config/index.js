'use strict';

const { pluginConfigSchema } = require('./schema');

module.exports = {
  default() {
    return {
      accessToken: null,
      init: {},
    };
  },
  async validator(config) {
    await pluginConfigSchema.validate(config);
  },
};
