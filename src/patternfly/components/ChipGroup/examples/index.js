import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ChipGroupToolbarCollapsedExampleRaw from '!raw!./chip-group-toolbar-collapsed-example.hbs';
import ChipGroupToolbarExpandedExampleRaw from '!raw!./chip-group-toolbar-expanded-example.hbs';
import ChipGroupSelectExpandedExampleRaw from '!raw!./chip-group-select-expanded-example.hbs';
import ChipGroupSelectCollapsedExampleRaw from '!raw!./chip-group-select-collapsed-example.hbs';

import chipGroupToolbarCollapsedExample from './chip-group-toolbar-collapsed-example.hbs';
import chipGroupToolbarExpandedExample from './chip-group-toolbar-expanded-example.hbs';
import chipGroupToolbarDoc from '../docs/chip-group-toolbar.md';

import chipGroupSelectExpandedExample from './chip-group-select-expanded-example.hbs';
import chipGroupSelectCollapsedExample from './chip-group-select-collapsed-example.hbs';
import chipGroupMultiSelectDoc from '../docs/chip-group-multi-select.md';

import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const ChipGroupToolbarCollapsedExample = chipGroupToolbarCollapsedExample();
  const ChipGroupToolbarExpandedExample = chipGroupToolbarExpandedExample();
  const ChipGroupSelectExpandedExample = chipGroupSelectExpandedExample();
  const ChipGroupSelectCollapsedExample = chipGroupSelectCollapsedExample();
  const headingText = 'Chip Group';

  return (
    <Documentation heading={headingText}>
      <Example
        heading="Chip Group Toolbar (Collapsed)"
        handlebars={ChipGroupToolbarCollapsedExampleRaw}
        className="is-light-preview"
      >
        {ChipGroupToolbarCollapsedExample}
      </Example>
      <Example
        heading="Chip Group Toolbar (Expanded)"
        handlebars={ChipGroupToolbarExpandedExampleRaw}
        className="is-light-preview"
        docs={chipGroupToolbarDoc}
      >
        {ChipGroupToolbarExpandedExample}
      </Example>
      <Example
        heading="Chip Group Multi-Select (Collapsed)"
        handlebars={ChipGroupSelectCollapsedExampleRaw}
        className="is-light-preview"
      >
        {ChipGroupSelectCollapsedExample}
      </Example>
      <Example
        heading="Chip Group Multi-Select (Expanded)"
        handlebars={ChipGroupSelectExpandedExampleRaw}
        className="is-light-preview"
        docs={chipGroupMultiSelectDoc}
      >
        {ChipGroupSelectExpandedExample}
      </Example>
    </Documentation>
  );
};
