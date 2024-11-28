const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vn4xr4',
  e2e: {
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
