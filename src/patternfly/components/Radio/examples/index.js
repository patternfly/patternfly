import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import RadioExampleRaw from '!raw!./radio-example.hbs';
import RadioExample from './radio-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const radioExample = RadioExample();
  const headingText = 'Radio';
  const variablesRoot = 'pf-c-radio';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Radio example" handlebars={RadioExampleRaw}>
        {radioExample}
      </Example>
    </Documentation>
  );
};
