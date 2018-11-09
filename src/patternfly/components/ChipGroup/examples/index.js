import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ChipGroupToolbarExampleRaw from '!raw!./chip-group-toolbar-example.hbs';
import ChipGroupSelectExampleRaw from '!raw!./chip-group-select-example.hbs';
import chipGroupToolbarExample from './chip-group-toolbar-example.hbs';
import chipGroupSelectExample from './chip-group-select-example.hbs';
import ChipGroupExampleDoc from '../docs/chip-group.md';
import docs from '../docs/code.md';
import '../chip-group.scss';

export const Docs = docs;

export default () => {
  const ChipGroupToolbarExample = chipGroupToolbarExample();
  const ChipGroupSelectExample = chipGroupSelectExample();
  const headingText = 'Chip Group';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Grouped Chips in Toolbar" handlebars={ChipGroupToolbarExampleRaw}>
        {ChipGroupToolbarExample}
      </Example>
      <Example
        heading="Grouped Chips in Multi-Select"
        handlebars={ChipGroupSelectExampleRaw}
        docs={ChipGroupExampleDoc}
      >
        {ChipGroupSelectExample}
      </Example>
    </Documentation>
  );
};
