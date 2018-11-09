import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ChipGroupToolbarCollapsedExampleRaw from '!raw!./chip-group-toolbar-collapsed-example.hbs';
import ChipGroupToolbarExpandedExampleRaw from '!raw!./chip-group-toolbar-expanded-example.hbs';
import ChipGroupSelectExpandedExampleRaw from '!raw!./chip-group-select-expanded-example.hbs';
import ChipGroupSelectCollapsedExampleRaw from '!raw!./chip-group-select-collapsed-example.hbs';
import chipGroupToolbarCollapsedExample from './chip-group-toolbar-collapsed-example.hbs';
import chipGroupToolbarExpandedExample from './chip-group-toolbar-expanded-example.hbs';
import chipGroupSelectExpandedExample from './chip-group-select-expanded-example.hbs';
import chipGroupSelectCollapsedExample from './chip-group-select-collapsed-example.hbs';
import ChipGroupExampleDoc from '../docs/chip-group.md';
import docs from '../docs/code.md';
import '../chip-group.scss';

export const Docs = docs;

export default () => {
  const ChipGroupToolbarCollapsedExample = chipGroupToolbarCollapsedExample();
  const ChipGroupToolbarExpandedExample = chipGroupToolbarExpandedExample();
  const ChipGroupSelectExpandedExample = chipGroupSelectExpandedExample();
  const ChipGroupSelectCollapsedExample = chipGroupSelectCollapsedExample();
  const headingText = 'Chip Group';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Grouped Chips Toolbar (Collapsed)" handlebars={ChipGroupToolbarCollapsedExampleRaw}>
        {ChipGroupToolbarCollapsedExample}
      </Example>
      <Example heading="Grouped Chips Toolbar (Expanded)" handlebars={ChipGroupToolbarExpandedExampleRaw}>
        {ChipGroupToolbarExpandedExample}
      </Example>
      <Example
        heading="Grouped Chips Multi-Select (Collapsed)"
        handlebars={ChipGroupSelectCollapsedExampleRaw}
        docs={ChipGroupExampleDoc}
      >
        {ChipGroupSelectCollapsedExample}
      </Example>
      <Example
        heading="Grouped Chips Multi-Select (Expanded)"
        handlebars={ChipGroupSelectExpandedExampleRaw}
        docs={ChipGroupExampleDoc}
      >
        {ChipGroupSelectExpandedExample}
      </Example>
    </Documentation>
  );
};
