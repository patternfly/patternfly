import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import simpleFormDemoExampleRaw from '!raw!./simple-form-demo-example.hbs';
import inlineFormDemoExampleRaw from '!raw!./inline-form-demo-example.hbs';
import alternativeFormDemoExampleRaw from '!raw!./alternative-form-demo-example.hbs';

import SimpleFormDemoExample from './simple-form-demo-example.hbs';
import InlineFormDemoExample from './inline-form-demo-example.hbs';
import AlternativeFormDemoExample from './alternative-form-demo-example.hbs';

import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const simpleFormDemoExample = SimpleFormDemoExample();
  const inlineFormDemoExample = InlineFormDemoExample();
  const alternativeFormDemoExample = AlternativeFormDemoExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Simple Form Demo" handlebars={simpleFormDemoExampleRaw}>
        {simpleFormDemoExample}
      </Example>
      <Example heading="Inline Form Demo" handlebars={inlineFormDemoExampleRaw}>
        {inlineFormDemoExample}
      </Example>
      <Example heading="Alternative Form Demo" handlebars={alternativeFormDemoExampleRaw}>
        {alternativeFormDemoExample}
      </Example>
    </Documentation>
  );
};
