import React from 'react';
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
      <Example heading="PatternFly 3 Login" fullPageOnly="true">
        {LoginUpgradeExamplePF3}
      </Example>
      <Example heading="PatternFly 4 Login" fullPageOnly="true">
        {LoginUpgradeExamplePF4}
      </Example>
    </Documentation>
  );
};
