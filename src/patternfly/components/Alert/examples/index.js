import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import AlertSuccessRaw from '!raw!./alert-success-example.hbs';
import AlertWarningRaw from '!raw!./alert-warning-example.hbs';
import AlertDangerRaw from '!raw!./alert-danger-example.hbs';
import AlertInfoRaw from '!raw!./alert-info-example.hbs';
import AlertSuccess from './alert-success-example.hbs';
import AlertWarning from './alert-warning-example.hbs';
import AlertDanger from './alert-danger-example.hbs';
import AlertInfo from './alert-info-example.hbs';
import docs from '../docs/code.md';
import '../alert.scss';

export const Docs = docs;

export default () => {
  const alertSuccess = AlertSuccess();
  const alertWarning = AlertWarning();
  const alertDanger = AlertDanger();
  const alertInfo = AlertInfo();
  const headingText = 'Alert';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Success Alert" handlebars={AlertSuccessRaw}>
        {alertSuccess}
      </Example>
      <Example heading="Danger Alert" handlebars={AlertDangerRaw}>
        {alertDanger}
      </Example>
      <Example heading="Warning Alert" handlebars={AlertWarningRaw}>
        {alertWarning}
      </Example>
      <Example heading="Info Alert" handlebars={AlertInfoRaw}>
        {alertInfo}
      </Example>
    </Documentation>
  );
};
