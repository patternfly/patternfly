import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import loginSimpleExampleRaw from '!raw!./login-simple-example.hbs';
import loginInvalidExampleRaw from '!raw!./login-invalid-example.hbs';
import LoginSimpleExample from './login-simple-example.hbs';
import LoginInvalidExample from './login-invalid-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const loginSimpleExample = LoginSimpleExample();
  const loginInvalidExample = LoginInvalidExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Login Simple" fullPageOnly="true" handlebars={loginSimpleExampleRaw}>
        {loginSimpleExample}
      </Example>
      <Example heading="Login Invalid" fullPageOnly="true" handlebars={loginInvalidExampleRaw}>
        {loginInvalidExample}
      </Example>
    </Documentation>
  );
};
