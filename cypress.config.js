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
      resultsDir: 'C:/ProgramData/Jenkins/.jenkins/workspace/Cypress-test/allure-results' // Указан путь для Allure-отчётов
    },
  },
});
