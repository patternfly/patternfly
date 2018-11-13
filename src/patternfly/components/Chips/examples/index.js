import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ChipsExampleRaw from '!raw!./chips-example.hbs';
import ChipsToolbarCollapsedExampleRaw from '!raw!./chips-toolbar-collapsed-example.hbs';
import ChipsToolbarExpandedExampleRaw from '!raw!./chips-toolbar-expanded-example.hbs';
import ChipsSelectExpandedExampleRaw from '!raw!./chips-select-expanded-example.hbs';
import ChipsSelectCollapsedExampleRaw from '!raw!./chips-select-collapsed-example.hbs';
import chipsExample from './chips-example.hbs';
import chipsToolbarCollapsedExample from './chips-toolbar-collapsed-example.hbs';
import chipsToolbarExpandedExample from './chips-toolbar-expanded-example.hbs';
import chipsSelectExpandedExample from './chips-select-expanded-example.hbs';
import chipsSelectCollapsedExample from './chips-select-collapsed-example.hbs';
import ChipsExampleDoc from '../docs/chips.md';
import docs from '../docs/code.md';
import '../chip.scss';
import '../chip-group.scss';

export const Docs = docs;

export default () => {
  const ChipsExample = chipsExample();
  const ChipsToolbarCollapsedExample = chipsToolbarCollapsedExample();
  const ChipsToolbarExpandedExample = chipsToolbarExpandedExample();
  const ChipsSelectExpandedExample = chipsSelectExpandedExample();
  const ChipsSelectCollapsedExample = chipsSelectCollapsedExample();
  const headingText = 'Chips';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Single Chips" handlebars={ChipsExampleRaw}>
        {ChipsExample}
      </Example>
      <Example heading="Chips Toolbar (Collapsed)" handlebars={ChipsToolbarCollapsedExampleRaw}>
        {ChipsToolbarCollapsedExample}
      </Example>
      <Example heading="Chips Toolbar (Expanded)" handlebars={ChipsToolbarExpandedExampleRaw}>
        {ChipsToolbarExpandedExample}
      </Example>
      <Example
        heading="Chips Multi-Select (Collapsed)"
        handlebars={ChipsSelectCollapsedExampleRaw}
        docs={ChipsExampleDoc}
      >
        {ChipsSelectCollapsedExample}
      </Example>
      <Example
        heading="Chips Multi-Select (Expanded)"
        handlebars={ChipsSelectExpandedExampleRaw}
        docs={ChipsExampleDoc}
      >
        {ChipsSelectExpandedExample}
      </Example>
    </Documentation>
  );
};
