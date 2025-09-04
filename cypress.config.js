const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173', // ou le port de votre serveur de dev
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    supportFile: false, // À mettre à true si vous utilisez supportFile
  },
  viewportWidth: 1280,
  viewportHeight: 720,
});