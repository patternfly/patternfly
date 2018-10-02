import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import loginBoxExampleRaw from '!raw!./login-box-example.hbs';
import LoginboxExample from './login-box-example.hbs';
import docs from '../docs/code.md';
import '../login-box.scss';

export const Docs = docs;

export default () => {
  const loginBoxExample = LoginboxExample();
  const headingText = 'Login Box';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Login box" handlebars={loginBoxExampleRaw}>
        {loginBoxExample}
      </Example>
    </Documentation>
  );
};
