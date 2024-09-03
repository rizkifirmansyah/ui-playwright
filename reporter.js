const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'test-results/cucumber_report.json',
  output: 'test-results/report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
};

reporter.generate(options);
