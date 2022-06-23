'use strict';

const _ = require('lodash');

const { pluginId } = require('../utils');

module.exports = ({ strapi }) => ({
  get() {
    return strapi.config.get(`plugin.${pluginId}`);
  },
});
