import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import filterChipSimpleExampleRaw from '!raw!./filter-chip-simple-example.hbs';
import filterChipComplexExampleRaw from '!raw!./filter-chip-complex-example.hbs';
import FilterchipSimpleExample from './filter-chip-simple-example.hbs';
import FilterchipComplexExample from './filter-chip-complex-example.hbs';
import filterChipComplexExampleDoc from '../docs/filter-chip-complex.md';
import docs from '../docs/code.md';
import '../filter-chip.scss';

export const Docs = docs;

export default () => {
  const filterChipSimpleExample = FilterchipSimpleExample();
  const filterChipComplexExample = FilterchipComplexExample();
  const headingText = 'Filter Chip';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Individual Filter Chips" handlebars={filterChipSimpleExampleRaw} minHeight="20em">
        {filterChipSimpleExample}
      </Example>
      <Example
        heading="Grouped Filter Chips"
        handlebars={filterChipComplexExampleRaw}
        docs={filterChipComplexExampleDoc}
      >
        {filterChipComplexExample}
      </Example>
    </Documentation>
  );
};
