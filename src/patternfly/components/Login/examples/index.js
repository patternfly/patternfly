import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import loginSimpleExampleRaw from '!raw!./login-simple-example.hbs';
import LoginSimpleExample from './login-simple-example.hbs';
import docs from '../docs/code.md';
import '../login.scss';

export const Docs = docs;

export default () => {
  const loginSimpleExample = LoginSimpleExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Login" fullPageOnly="true" handlebars={loginSimpleExampleRaw}>
        {loginSimpleExample}
      </Example>
    </Documentation>
  );
};
