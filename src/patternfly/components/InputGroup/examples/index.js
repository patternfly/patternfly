import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import InputgroupExampleRaw from '!raw!./input-group-example.hbs';
import InputgroupExample from './input-group-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const inputGroupExample = InputgroupExample();
  const headingText = 'Input Group';
  const variablesRoot = 'pf-c-input-group';

  return (
    <Documentation docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Inputgroup Example" handlebars={InputgroupExampleRaw}>
        {inputGroupExample}
      </Example>
    </Documentation>
  );
};
