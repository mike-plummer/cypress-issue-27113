const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
    e2e: {
      env: {
        allure: true,
        allureReuseAfterSpec: true,
      },
      fixturesFolder: false,
      setupNodeEvents(on, config) {
          allureWriter(on, config);
          return config;
      }
    }
});