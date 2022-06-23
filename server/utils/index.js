const { SERVICE_NAMES } = require('./constants');
const { getPluginService } = require('./helpers');
const { pluginId } = require('./pluginId');

module.exports = {
  SERVICE_NAMES,
  getPluginService,
  pluginId,
};
