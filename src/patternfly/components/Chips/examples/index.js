import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ChipSimpleExampleRaw from '!raw!./chip-simple-example.hbs';
import ChipComplexExampleRaw from '!raw!./chip-complex-example.hbs';
import chipSimpleExample from './chip-simple-example.hbs';
import chipComplexExample from './chip-complex-example.hbs';
import ChipComplexExampleDoc from '../docs/chip-complex.md';
import docs from '../docs/code.md';
import '../chip.scss';

export const Docs = docs;

export default () => {
  const ChipSimpleExample = chipSimpleExample();
  const ChipComplexExample = chipComplexExample();
  const headingText = 'Chips';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Individual Chips" handlebars={ChipSimpleExampleRaw}>
        {ChipSimpleExample}
      </Example>
      <Example heading="Grouped Chips" handlebars={ChipComplexExampleRaw} docs={ChipComplexExampleDoc}>
        {ChipComplexExample}
      </Example>
    </Documentation>
  );
};
