const globalConfig = require('../config');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  staticDirs: ['../static'],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...globalConfig.alias
    };
    return config;
  },
}