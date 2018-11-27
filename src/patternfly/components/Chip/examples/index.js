import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ChipExampleRaw from '!raw!./chip-example.hbs';
import ChipToolbarCollapsedExampleRaw from '!raw!./chip-toolbar-collapsed-example.hbs';
import ChipToolbarExpandedExampleRaw from '!raw!./chip-toolbar-expanded-example.hbs';
import ChipSelectExpandedExampleRaw from '!raw!./chip-select-expanded-example.hbs';
import ChipSelectCollapsedExampleRaw from '!raw!./chip-select-collapsed-example.hbs';

import chipExample from './chip-example.hbs';
import chipSingleDoc from '../docs/chip-single.md';

import chipToolbarCollapsedExample from './chip-toolbar-collapsed-example.hbs';
import chipToolbarExpandedExample from './chip-toolbar-expanded-example.hbs';
import chipToolbarDoc from '../docs/chip-toolbar.md';

import chipSelectExpandedExample from './chip-select-expanded-example.hbs';
import chipSelectCollapsedExample from './chip-select-collapsed-example.hbs';
import chipMultiSelectDoc from '../docs/chip-multi-select.md';

import ChipExampleDoc from '../docs/chip.md';
import docs from '../docs/code.md';
import '../chip.scss';
import '../chip-group.scss';

export const Docs = docs;

export default () => {
  const ChipExample = chipExample();
  const ChipToolbarCollapsedExample = chipToolbarCollapsedExample();
  const ChipToolbarExpandedExample = chipToolbarExpandedExample();
  const ChipSelectExpandedExample = chipSelectExpandedExample();
  const ChipSelectCollapsedExample = chipSelectCollapsedExample();
  const headingText = 'Chip';

  return (
    <Documentation heading={headingText}>
      <Example heading="Single Chip" handlebars={ChipExampleRaw} className="is-light-preview" docs={chipSingleDoc}>
        {ChipExample}
      </Example>
      <Example
        heading="Chip Toolbar (Collapsed)"
        handlebars={ChipToolbarCollapsedExampleRaw}
        className="is-light-preview"
      >
        {ChipToolbarCollapsedExample}
      </Example>
      <Example
        heading="Chip Toolbar (Expanded)"
        handlebars={ChipToolbarExpandedExampleRaw}
        className="is-light-preview"
        docs={chipToolbarDoc}
      >
        {ChipToolbarExpandedExample}
      </Example>
      <Example
        heading="Chip Multi-Select (Collapsed)"
        handlebars={ChipSelectCollapsedExampleRaw}
        className="is-light-preview"
        docs={ChipExampleDoc}
      >
        {ChipSelectCollapsedExample}
      </Example>
      <Example
        heading="Chip Multi-Select (Expanded)"
        handlebars={ChipSelectExpandedExampleRaw}
        className="is-light-preview"
        docs={chipMultiSelectDoc}
      >
        {ChipSelectExpandedExample}
      </Example>
    </Documentation>
  );
};
