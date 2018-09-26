import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import alertUpgradeExamplespf3alertRaw from '!raw!./alert-upgrade-example-pf3-alert.hbs';
import alertUpgradeExamplespf3notificationRaw from '!raw!./alert-upgrade-example-pf3-notification.hbs';
import alertUpgradeExamplespf4alertRaw from '!raw!./alert-upgrade-example-pf4-alert.hbs';
import alertUpgradeExamplespf4notificationRaw from '!raw!./alert-upgrade-example-pf4-notification.hbs';
import Alertupgradeexamplespf3alert from './alert-upgrade-example-pf3-alert.hbs';
import Alertupgradeexamplespf3notification from './alert-upgrade-example-pf3-notification.hbs';
import Alertupgradeexamplespf4alert from './alert-upgrade-example-pf4-alert.hbs';
import Alertupgradeexamplespf4notification from './alert-upgrade-example-pf4-notification.hbs';
import alertUpgradeExamplesComplexExampleDoc from '../docs/alert-upgrade-examples-complex.md';
import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const alertUpgradeExamplespf3alert = Alertupgradeexamplespf3alert();
  const alertUpgradeExamplespf3notification = Alertupgradeexamplespf3notification();
  const alertUpgradeExamplespf4alert = Alertupgradeexamplespf4alert();
  const alertUpgradeExamplespf4notification = Alertupgradeexamplespf4notification();
  const headingText = 'Alert Upgrade Examples';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Patternfly3 Alert" handlebars={alertUpgradeExamplespf3alertRaw}>
        {alertUpgradeExamplespf3alert}
      </Example>
      <Example
        heading="Patternfly4 Alert"
        handlebars={alertUpgradeExamplespf4alertRaw}
        docs={alertUpgradeExamplesComplexExampleDoc}
      >
        {alertUpgradeExamplespf4alert}
      </Example>
      <Example
        heading="Patternfly3 Toast Notification"
        handlebars={alertUpgradeExamplespf3notificationRaw}
        minHeight="20em"
      >
        {alertUpgradeExamplespf3notification}
      </Example>
      <Example
        heading="Patternfly4 Notification"
        handlebars={alertUpgradeExamplespf4notificationRaw}
        docs={alertUpgradeExamplesComplexExampleDoc}
      >
        {alertUpgradeExamplespf4notification}
      </Example>
    </Documentation>
  );
};
