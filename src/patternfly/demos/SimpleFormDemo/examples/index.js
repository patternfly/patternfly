import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import SimpleFormDemoExample from './simple-form-demo-example.hbs';

export const Docs = docs;

export default () => {
  const simpleFormDemoExample = SimpleFormDemoExample();
  const headingText = 'Simple Form Demo';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Simple Form Demo - check back when all form elements are complete">
        {simpleFormDemoExample}
      </Example>
    </Documentation>
  );
};
