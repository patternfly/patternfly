import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import selectSingleExampleRaw from '!raw!./select-single-example.hbs';
import selectSingleExpandedExampleRaw from '!raw!./select-single-expanded-example.hbs';
import selectComplexExampleRaw from '!raw!./select-complex-example.hbs';
import SelectSingleExample from './select-single-example.hbs';
import SelectSingleExpandedExample from './select-single-expanded-example.hbs';
import SelectComplexExample from './select-complex-example.hbs';
import selectComplexExampleDoc from '../docs/select-complex.md';
import docs from '../docs/code.md';
import '../select.scss';

export const Docs = docs;

export default () => {
  const selectSingleExample = SelectSingleExample();
  const selectSingleExpandedExample = SelectSingleExpandedExample();
  const selectComplexExample = SelectComplexExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Select Single" handlebars={selectSingleExampleRaw} minHeight="20em">
        {selectSingleExample}
      </Example>
      <Example heading="Select Single - Expanded" handlebars={selectSingleExpandedExampleRaw} minHeight="20em">
        {selectSingleExpandedExample}
      </Example>
      <Example heading="Select Complex" handlebars={selectComplexExampleRaw} docs={selectComplexExampleDoc}>
        {selectComplexExample}
      </Example>
    </Documentation>
  );
};
