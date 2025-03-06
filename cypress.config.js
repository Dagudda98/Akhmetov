const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      console.log('Setting up Allure plugin');
      allureWriter(on, config);
      return config;
    },
    reporter: 'cypress-allure-plugin',
    reporterOptions: {
      resultsDir: 'D:\Allure\allure-results' // Указан путь для Allure-отчётов
    },
  },
});
