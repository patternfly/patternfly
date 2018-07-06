import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import SimpleFormDemoExample from './simple-form-demo-example.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const simpleFormDemoExample = SimpleFormDemoExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Simple Form Demo - check back when all form elements are complete">
        {simpleFormDemoExample}
      </Example>
    </Documentation>
  );
};
