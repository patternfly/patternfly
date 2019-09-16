import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import dataToolbarItemsExampleRaw from '!raw!./data-toolbar-items-example.hbs';
import dataToolbarGroupTypesExampleRaw from '!raw!./data-toolbar-group-types-example.hbs';
import dataToolbarToggleGroupExampleRaw from '!raw!./data-toolbar-toggle-group-example.hbs';
import dataToolbarSelectedFiltersExampleRaw from '!raw!./data-toolbar-selected-filters-example.hbs';
import dataToolbarSpacersExampleRaw from '!raw!./data-toolbar-spacers-example.hbs';
import dataToolbarGroupSpacersExampleRaw from '!raw!./data-toolbar-group-spacers-example.hbs';
import dataToolbarStackedExampleRaw from '!raw!./data-toolbar-stacked-example.hbs';
import dataToolbarExpandedExampleRaw from '!raw!./data-toolbar-expanded-example.hbs';
import dataToolbarExpandedElementsExampleRaw from '!raw!./data-toolbar-expanded-elements-example.hbs';

import DataToolbarItemsExample from './data-toolbar-items-example.hbs';
import DataToolbarGroupTypesExample from './data-toolbar-group-types-example.hbs';
import DataToolbarToggleGroupExample from './data-toolbar-toggle-group-example.hbs';
import DataToolbarSelectedFiltersExample from './data-toolbar-selected-filters-example.hbs';
import DataToolbarSpacersExample from './data-toolbar-spacers-example.hbs';
import DataToolbarGroupSpacersExample from './data-toolbar-group-spacers-example.hbs';
import DataToolbarStackedExample from './data-toolbar-stacked-example.hbs';
import DataToolbarExpandedExample from './data-toolbar-expanded-example.hbs';
import DataToolbarExpandedElementsExample from './data-toolbar-expanded-elements-example.hbs';

import dataToolbarIntroExampleDoc from '../docs/data-toolbar-intro.md';
import dataToolbarGroupTypesExampleDoc from '../docs/data-toolbar-group-types.md';
import dataToolbarChildTypesExampleDoc from '../docs/data-toolbar-child-types.md';
import dataToolbarSpacersIntroExampleDoc from '../docs/data-toolbar-spacers-intro.md';
import dataToolbarSpacersExampleDoc from '../docs/data-toolbar-spacers.md';
import dataToolbarToggleGroupIntroExampleDoc from '../docs/data-toolbar-toggle-group-intro.md';
import dataToolbarToggleGroupExampleDoc from '../docs/data-toolbar-toggle-group.md';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const dataToolbarItemsExample = DataToolbarItemsExample();
  const dataToolbarGroupTypesExample = DataToolbarGroupTypesExample();
  const dataToolbarToggleGroupExample = DataToolbarToggleGroupExample();
  const dataToolbarSelectedFiltersExample = DataToolbarSelectedFiltersExample();
  const dataToolbarSpacersExample = DataToolbarSpacersExample();
  const dataToolbarGroupSpacersExample = DataToolbarGroupSpacersExample();
  const dataToolbarStackedExample = DataToolbarStackedExample();
  const dataToolbarExpandedExample = DataToolbarExpandedExample();
  const dataToolbarExpandedElementsExample = DataToolbarExpandedElementsExample();

  const headingText = 'Data toolbar';
  const variablesRoot = 'pf-c-data-toolbar';

  return (
    <Documentation
      data={props}
      docs={Docs}
      heading={headingText}
      variablesRoot={variablesRoot}
      className="toolbar-documentation"
    >
      <Example
        intro={dataToolbarIntroExampleDoc}
        className="is-layout-page"
        heading="Data toolbar items"
        handlebars={dataToolbarItemsExampleRaw}
        docs={dataToolbarChildTypesExampleDoc}
      >
        {dataToolbarItemsExample}
      </Example>
      <Example
        intro={dataToolbarSpacersIntroExampleDoc}
        className="is-layout-page"
        heading="Adjusting item spacers"
        handlebars={dataToolbarSpacersExampleRaw}
      >
        {dataToolbarSpacersExample}
      </Example>
      <Example
        className="is-layout-page"
        heading="Adjusting group spacers"
        handlebars={dataToolbarGroupSpacersExampleRaw}
        docs={dataToolbarSpacersExampleDoc}
      >
        {dataToolbarGroupSpacersExample}
      </Example>
      <Example
        heading="Data toolbar group types"
        handlebars={dataToolbarGroupTypesExampleRaw}
        minHeight=""
        docs={dataToolbarGroupTypesExampleDoc}
      >
        {dataToolbarGroupTypesExample}
      </Example>
      <Example
        heading="Data toolbar toggle group (responsive)"
        handlebars={dataToolbarToggleGroupExampleRaw}
        intro={dataToolbarToggleGroupIntroExampleDoc}
        docs={dataToolbarToggleGroupExampleDoc}
      >
        {dataToolbarToggleGroupExample}
      </Example>
      <Example
        heading="Data toolbar selected filters"
        handlebars={dataToolbarSelectedFiltersExampleRaw}
        minHeight="27rem"
      >
        {dataToolbarSelectedFiltersExample}
      </Example>
      <Example heading="Data toolbar stacked" handlebars={dataToolbarStackedExampleRaw}>
        {dataToolbarStackedExample}
      </Example>
      <Example heading="Data toolbar expanded wrapper" handlebars={dataToolbarExpandedExampleRaw} minHeight="27rem">
        {dataToolbarExpandedExample}
      </Example>
      <Example
        heading="Data toolbar expanded elements"
        handlebars={dataToolbarExpandedElementsExampleRaw}
        minHeight="27rem"
      >
        {dataToolbarExpandedElementsExample}
      </Example>
    </Documentation>
  );
};
