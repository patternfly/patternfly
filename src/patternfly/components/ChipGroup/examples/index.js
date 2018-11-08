import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ChipGroupExampleRaw from '!raw!./chip-group-example.hbs';
import chipGroupExample from './chip-group-example.hbs';
import ChipGroupExampleDoc from '../docs/chip-group.md';
import docs from '../docs/code.md';
import '../chip-group.scss';

export const Docs = docs;

export default () => {
  const ChipGroupExample = chipGroupExample();
  const headingText = 'Chip Group';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Grouped Chips" handlebars={ChipGroupExampleRaw} docs={ChipGroupExampleDoc}>
        {ChipGroupExample}
      </Example>
    </Documentation>
  );
};
