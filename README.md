# Strapi Plugin Rollbar

A plugin for [Strapi](https://github.com/strapi/strapi) to track Strapi errors with Rollbar.


## Requirements

The installation requirements are the same as Strapi itself and can be found in the documentation on the [Quick Start](https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html) page in the Prerequisites info card.

### Supported Strapi versions

- v4.x.x

**NOTE**: While this plugin may work with the older Strapi versions, they are not supported, it is always recommended to use the latest version of Strapi.

## Configuration

| property       | type (default)   | description                                                                                                                                                                              |
| -------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accessToken`          | string (`null`)  | Your Rollbar POST Server Access Token ([see Rollbar docs](https://docs.rollbar.com/docs/rollbarjs-configuration-reference)).                                                                           |
| `init`         | object (`{}`)    | A config object that is merge in with the default `new Rollbar()` settings. See all available options [on Rollbar's docs](https://docs.rollbar.com/docs/rollbarjs-configuration-reference) |

**Example**

`./config/plugins.js`

```js
module.exports = ({ env }) => ({
  // ...
  rollbar: {
    enabled: true,
    config: {
      accessToken: env('ROLLBAR_ACCESS_TOKEN'),
    },
  },
  // ...
});
```

## Notes

Based on the official Strapi Sentry Plugin