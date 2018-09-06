import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import loginPageSimpleExampleRaw from '!raw!./login-page-simple-example.hbs';
import LoginpageSimpleExample from './login-page-simple-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const loginPageSimpleExample = LoginpageSimpleExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Loginpage Simple" fullPageOnly="true" handlebars={loginPageSimpleExampleRaw} minHeight="20em">
        {loginPageSimpleExample}
      </Example>
    </Documentation>
  );
};
