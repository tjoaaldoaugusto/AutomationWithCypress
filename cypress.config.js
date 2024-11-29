const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vn4xr4',
  e2e: {
    pageLoadTimeout: 100000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
