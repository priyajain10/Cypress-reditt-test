const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml',
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
    },
  },
  video: false,
  viewportWidth: 375,
  viewportHeight: 812,
  userAgent:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Kes smoke tests',
  e2e: {
    retries: {
      openMode: 1,
    },
    setupNodeEvents(on: any, config: any) {
      require('cypress-mochawesome-reporter/plugin')(on, config);
    },
  },
});
