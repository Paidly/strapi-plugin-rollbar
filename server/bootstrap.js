'use strict';

const initRollbar = require('./middlewares/rollbar');

module.exports = ({ strapi }) => {
  initRollbar({ strapi });
};
