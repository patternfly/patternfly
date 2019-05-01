import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import simpleFormDemoExampleRaw from '!raw!./simple-form-demo-example.hbs';
import horizontalFormDemoExampleRaw from '!raw!./horizontal-form-demo-example.hbs';

import SimpleFormDemoExample from './simple-form-demo-example.hbs';
import HorizontalFormDemoExample from './horizontal-form-demo-example.hbs';

import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const simpleFormDemoExample = SimpleFormDemoExample();
  const horizontalFormDemoExample = HorizontalFormDemoExample();

  return (
    <Documentation data={props} docs={Docs}>
      <Example heading="Simple Form Demo" handlebars={simpleFormDemoExampleRaw}>
        {simpleFormDemoExample}
      </Example>
      <Example heading="Horizontal Form Demo" handlebars={horizontalFormDemoExampleRaw}>
        {horizontalFormDemoExample}
      </Example>
    </Documentation>
  );
};
