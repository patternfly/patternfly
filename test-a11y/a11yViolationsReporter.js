/* eslint no-console: 0 */
const fs = require('fs');
const path = require('path');

const logColors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  blue: '\x1b[36m',
  yellow: '\x1b[33m',
  reset: '\x1b[0m'
};

const violationsReporter = (flaggedPages, reportType) => {
  switch (reportType) {
    case 'json':
      console.log(JSON.stringify(flaggedPages, null, 2));
      break;
    case 'writefile': {
      const location = path.resolve(__dirname, 'pf_a11y_violations.json');
      fs.writeFileSync(location, JSON.stringify(flaggedPages, null, 2));
      console.log(`${logColors.yellow}%s${logColors.reset}`, `Raw audit data available at: ${location}\n`);
      break;
    }
    default: {
      if (flaggedPages.length > 0) {
        flaggedPages.forEach(page => {
          console.log(
            `${logColors.yellow}%s${logColors.reset}`,
            `${page.violations.length} errors found in: ${page.page}`
          );

          const inlineMsg = `\n${page.violations
            .map(
              (v, idx) =>
                `${idx + 1}) ${v.help} -- (${v.helpUrl.replace('?application=webdriverjs', '')}) -- impact: ${v.impact}`
            )
            .join('\n')}
          `;
          console.log(inlineMsg);
          console.log('-------html violation instances-------');
          const nodesSummary = `\n${page.violations.map(v => v.nodes.map(el => el.html)).join('\n')}`;
          console.log(nodesSummary, '\n');
        });
      } else {
        console.log(`${logColors.green}%s${logColors.reset}`, 'No A11y violations found \n');
      }
    }
  }
};

module.exports = {
  pfReporter: {
    report: errors => {
      violationsReporter(errors, 'default');
      console.log(
        `${logColors.blue}%s${logColors.reset}`,
        '\n-------------------PF Accessibility Test-------------------'
      );
      console.log(
        errors.length ? logColors.red : logColors.green,
        `Patternfly Reporter Found ${errors.length} Pages with Accessibility Errors`
      );
      console.log(
        `${logColors.blue}%s${logColors.reset}`,
        '-----------------------------------------------------------\n'
      );
      violationsReporter(errors, 'writefile');
    }
  }
};
