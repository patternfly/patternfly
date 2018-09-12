import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import loginSimpleExampleRaw from '!raw!./login-example.hbs';
import LoginSimpleExample from './login-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const loginSimpleExample = LoginSimpleExample();
  const headingText = 'Login';

  return (
    <Documentation docs={Docs} heading={headingText} className="is-layout-page">
      <Example heading="Login Simple" fullPageOnly="true" handlebars={loginSimpleExampleRaw} minHeight="20em">
        {loginSimpleExample}
      </Example>
    </Documentation>
  );
};
