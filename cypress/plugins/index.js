const webpack = require('@cypress/webpack-dev-server');

module.exports = (on, config) => {
  // This is the key: we're telling Cypress to use the Webpack config from the root directory
  on('dev-server:start', (options) => {
    return webpack({ 
      ...options, 
      webpackConfig: require('../../webpack.config') // Path to webpack.config.js in the root
    });
  });

  return config;  // Return the config object if it was modified
};
