const { SERVICE_NAMES, getPluginService } = require('../utils');

module.exports = ({ strapi }) => {
  const rollbarService = getPluginService(strapi, SERVICE_NAMES.rollbar);

  rollbarService.init();
  const rollbar = rollbarService.getClient();

  if (!rollbar) {
    return;
  }

  strapi.server.use(async (ctx, next) => {
    try {
      await next();
    } catch (error) {
      rollbarService.sendError(error, ctx);
      throw error;
    }
  });
};
