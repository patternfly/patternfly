import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import alertUpgradeExamplespf3alertRaw from '!raw!./alert-upgrade-example-pf3-alert.hbs';
import alertUpgradeExamplespf3notificationRaw from '!raw!./alert-upgrade-example-pf3-notification.hbs';
import alertUpgradeExamplespf4Raw from '!raw!./alert-upgrade-example-pf4.hbs';
import Alertupgradeexamplespf3alert from './alert-upgrade-example-pf3-alert.hbs';
import Alertupgradeexamplespf3notification from './alert-upgrade-example-pf3-notification.hbs';
import Alertupgradeexamplespf4 from './alert-upgrade-example-pf4.hbs';
import alertUpgradeExamplesComplexExampleDoc from '../docs/alert-upgrade-examples-complex.md';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const alertUpgradeExamplespf3alert = Alertupgradeexamplespf3alert();
  const alertUpgradeExamplespf3notification = Alertupgradeexamplespf3notification();
  const alertUpgradeExamplespf4 = Alertupgradeexamplespf4();
  const headingText = 'Alert Upgrade Examples';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Patternfly3 Alert" handlebars={alertUpgradeExamplespf3alertRaw} minHeight="20em">
        {alertUpgradeExamplespf3alert}
      </Example>
      <Example
        heading="Patternfly3 Toast Notification"
        handlebars={alertUpgradeExamplespf3notificationRaw}
        minHeight="20em"
      >
        {alertUpgradeExamplespf3notification}
      </Example>
      <Example
        heading="Patternfly4 Combines Alert and Notification"
        handlebars={alertUpgradeExamplespf4Raw}
        docs={alertUpgradeExamplesComplexExampleDoc}
      >
        {alertUpgradeExamplespf4}
      </Example>
    </Documentation>
  );
};
