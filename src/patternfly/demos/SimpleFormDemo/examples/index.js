import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import SimpleFormDemoExample1 from './simple-form-demo-example1.hbs';
import SimpleFormDemoExample2 from './simple-form-demo-example2.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const simpleFormDemoExample1 = SimpleFormDemoExample1();
  const simpleFormDemoExample2 = SimpleFormDemoExample2();

  return (
    <Documentation docs={Docs}>
      <Example heading="Simple Form Demo Example 1">
        {simpleFormDemoExample1}
      </Example>
      <Example heading="Simple Form Demo Example 2">
        {simpleFormDemoExample2}
      </Example>
    </Documentation>
  );
};
