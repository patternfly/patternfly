import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import floatSimpleExampleRaw from '!raw!./float-simple-example.hbs';
import FloatSimpleExample from './float-simple-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const floatSimpleExample = FloatSimpleExample();
  const headingText = 'Float';

  return (
    <Documentation docs={Docs} heading={headingText} className="is-utility-page">
      <Example heading="Float Simple" handlebars={floatSimpleExampleRaw}>
        {floatSimpleExample}
      </Example>
    </Documentation>
  );
};
