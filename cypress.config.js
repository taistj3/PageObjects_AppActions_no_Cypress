
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "u79sxt",
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {
      on('after:run', (results) => {
        const {merge} = require('mochawesome-merge');
        const generator = require('mochawesome-report-generator');

        return merge({
          files: ['./cypress/results/*.json']
        }).then((report) => {
          return generator.create(report, {
            reportDir: 'cypress/results/final-report',
            reportFilename: 'index.html'
          });
        });
      });
      },
      reporter: 'mochawesome',
      reporterOptions: {
        reportDir: 'cypress/results',
        overwrite: false,
        html: false,
        json: true
      }
    }
  });
