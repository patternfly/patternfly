import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import loginBoxExampleRaw from '!raw!./login-box-example.hbs';
import LoginboxExample from './login-box-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const loginBoxExample = LoginboxExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Loginbox" handlebars={loginBoxExampleRaw}>
        {loginBoxExample}
      </Example>
    </Documentation>
  );
};
