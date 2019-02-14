import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import RadioExampleRaw from '!raw!./radio-example.hbs';
import RadioExample from './radio-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const radioExample = RadioExample();
  const headingText = 'Radio';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Radio Example" handlebars={RadioExampleRaw}>
        {radioExample}
      </Example>
    </Documentation>
  );
};
