import React from 'react';
import { Helmet } from 'react-helmet';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import loginUpgradeExamplePF3 from './login-upgrade-examples-pf3-login.hbs';
import loginUpgradeExamplePF4 from './login-upgrade-examples-pf4-login.hbs';

export const Docs = docs;

export default () => {
  const LoginUpgradeExamplePF3 = loginUpgradeExamplePF3();
  const LoginUpgradeExamplePF4 = loginUpgradeExamplePF4();
  const headingText = 'Login Migration';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/patternfly/3.54.1/css/patternfly.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/patternfly/3.54.1/css/patternfly-additions.css"
        />
      </Helmet>
      <Example heading="PatternFly 3 Login" handlebars={LoginUpgradeExamplePF3}>
        {LoginUpgradeExamplePF3}
      </Example>
      <Example heading="PatternFly 4 Login" handlebars={LoginUpgradeExamplePF4}>
        {LoginUpgradeExamplePF4}
      </Example>
    </Documentation>
  );
};
