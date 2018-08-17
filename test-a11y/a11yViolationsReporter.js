/* eslint no-console: 0 */
const fs = require('fs');
const path = require('path');

const violatingPages = [];
const violations = [];
const logColors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  blue: '\x1b[36m',
  yellow: '\x1b[33m',
  reset: '\x1b[0m'
};

const logOutput = testPages => {
  if (testPages.length > 0) {
    testPages.forEach(page => {
      if (page.violations.length === 0) {
        return;
      }
      violatingPages.push(page);
      page.violations.forEach(v => {
        violations.push(v);
      });
      console.log(
        `${logColors.yellow}%s${logColors.reset}`,
        `${page.violations.length} error${page.violations.length === 1 ? '' : 's'} found in: ${page.page}`
      );
      const inlineMsg = `\n${page.violations
        .map(
          (v, idx) =>
            `${idx + 1}) ${v.help} -- ${v.helpUrl.replace('?application=webdriverjs', '')} -- impact: ${v.impact}`
        )
        .join('\n')}
      `;
      console.log(inlineMsg);
      console.log('-------html violation instances-------');
      const nodesSummary = `\n${page.violations.map(v => v.nodes.map(el => el.html).join('\n')).join('\n')}`;
      console.log(nodesSummary, '\n');
    });
  } else {
    console.log(`${logColors.green}%s${logColors.reset}`, 'No A11y violations found \n');
  }
};

const violationsReporter = (testPages, reportType) => {
  switch (reportType) {
    case 'json':
      console.log(JSON.stringify(testPages, null, 2));
      break;
    case 'writefile': {
      const location = path.resolve(__dirname, 'pf_a11y_violations.json');
      fs.writeFileSync(location, JSON.stringify(testPages, null, 2));
      console.log(`${logColors.yellow}%s${logColors.reset}`, `Raw audit data available at: ${location}\n`);
      break;
    }
    default: {
      logOutput(testPages);
    }
  }
};

module.exports = {
  pfReporter: {
    report: errors => {
      violationsReporter(errors, 'default');
      console.log(
        `${logColors.blue}%s${logColors.reset}`,
        '\n--------------PF Component Accessibility Audit--------------'
      );
      console.log(
        violatingPages.length ? logColors.red : logColors.green,
        `Found ${violatingPages.length} Page${violatingPages.length === 1 ? '' : 's'} with Accessibility Errors
        \n ${violations.length} violation${violations.length === 1 ? '' : 's'} in total`
      );
      console.log(
        `${logColors.blue}%s${logColors.reset}`,
        '------------------------------------------------------------\n'
      );
      if (!process.env.CI) {
        violationsReporter(errors, 'writefile');
      }
      return violations;
    }
  }
};
