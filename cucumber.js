module.exports = {
  default: {
    require: ['cypress/e2e/step_definitions/**/*.js'],
    paths: ['cypress/e2e/features/**/*.feature'],
    format: ['progress-bar', 'html:cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' },
    publishQuiet: true
  }
}; 