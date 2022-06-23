const yup = require('yup');

const pluginConfigSchema = yup.object().shape({
  accessToken: yup.string().nullable().default(null),
  init: yup.object({}).default({}),
});

module.exports = {
  pluginConfigSchema,
};
