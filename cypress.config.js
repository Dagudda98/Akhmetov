const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // тут пока ничего не нужно
      return config;
    },
    video: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos"
  },
});