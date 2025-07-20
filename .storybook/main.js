const config = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs"
  ],
  "framework": {
    "name": "storybook-react-rsbuild",
    "options": {}
  },
  "rsbuildFinal": async (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.output = config.output || {};
      config.output.assetPrefix = '/rsbuild-storybook/';
    }
    return config;
  }
};
export default config;