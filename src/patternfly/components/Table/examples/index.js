import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import tableSimpleExampleRaw from '!raw!./table-simple-example.hbs';
import tableSortableExampleRaw from '!raw!./table-sortable-example.hbs';
import tableSimpleWithCheckboxesExampleRaw from '!raw!./table-simple-with-checkboxes-example.hbs';
import tableExpandableExampleRaw from '!raw!./table-expandable-example.hbs';
import tableCompactExampleRaw from '!raw!./table-compact-example.hbs';
import tableCompactNoBorderRowsExampleRaw from '!raw!./table-compact-no-border-rows-example.hbs';
import tableCompactExpandableExampleRaw from '!raw!./table-compact-expandable-example.hbs';
import tableWidthExampleRaw from '!raw!./table-width-example.hbs';
import tableCompoundExpansionExampleRaw from '!raw!./table-compound-expansion-example.hbs';
import tableHiddenVisibleExampleRaw from '!raw!./table-hidden-visible-example.hbs';

import TableSimpleExample from './table-simple-example.hbs';
import tableSimpleDoc from '../docs/table-simple.md';

import TableSortableExample from './table-sortable-example.hbs';
import tableSortableDoc from '../docs/table-sortable.md';

import TableSimpleWithCheckboxesExample from './table-simple-with-checkboxes-example.hbs';
import tableCheckboxesActionsDoc from '../docs/table-checkboxes-actions.md';

import TableExpandableExample from './table-expandable-example.hbs';
import tableExpandableDoc from '../docs/table-expandable.md';

import TableCompactExample from './table-compact-example.hbs';
import tableCompactDoc from '../docs/table-compact.md';

import TableCompactNoBorderRowsExample from './table-compact-no-border-rows-example.hbs';
import tableCompactNoBorderRowsDoc from '../docs/table-compact-no-border-rows.md';
import TableCompactExpandableExample from './table-compact-expandable-example.hbs';
import tableCompactExpandableDoc from '../docs/table-compact-expandable.md';

import TableWidthExample from './table-width-example.hbs';
import tableWidthDoc from '../docs/table-width.md';

import TableCompoundExpansionExample from './table-compound-expansion-example.hbs';
import tableCompoundExpansionDoc from '../docs/table-compound-expansion.md';

import TableHiddenVisibleExample from './table-hidden-visible-example.hbs';
import tableHiddenVisibleDoc from '../docs/table-hidden-visible.md';

import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const tableSimpleExample = TableSimpleExample();
  const tableSortableExample = TableSortableExample();
  const tableExpandableExample = TableExpandableExample();
  const tableCompactExample = TableCompactExample();
  const tableCompactNoBorderRowsExample = TableCompactNoBorderRowsExample();
  const tableCompactExpandableExample = TableCompactExpandableExample();
  const tableSimpleWithCheckboxesExample = TableSimpleWithCheckboxesExample();
  const tableWidthExample = TableWidthExample();
  const tableCompoundExpansionExample = TableCompoundExpansionExample();
  const tableHiddenVisibleExample = TableHiddenVisibleExample();
  const headingText = 'Table';
  const variablesRoot = 'pf-c-table';

  return (
    <Documentation docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Simple Table" handlebars={tableSimpleExampleRaw} docs={tableSimpleDoc} minHeight="2em">
        {tableSimpleExample}
      </Example>
      <Example heading="Sortable Table" handlebars={tableSortableExampleRaw} docs={tableSortableDoc}>
        {tableSortableExample}
      </Example>
      <Example
        heading="Table with checkboxes and actions"
        handlebars={tableSimpleWithCheckboxesExampleRaw}
        docs={tableCheckboxesActionsDoc}
      >
        {tableSimpleWithCheckboxesExample}
      </Example>
      <Example heading="Expandable Table" handlebars={tableExpandableExampleRaw} docs={tableExpandableDoc}>
        {tableExpandableExample}
      </Example>
      <Example
        heading="Table with Compound Expansion"
        handlebars={tableCompoundExpansionExampleRaw}
        docs={tableCompoundExpansionDoc}
      >
        {tableCompoundExpansionExample}
      </Example>
      <Example heading="Compact Table" handlebars={tableCompactExampleRaw} docs={tableCompactDoc}>
        {tableCompactExample}
      </Example>
      <Example
        heading="Compact Table with no borders"
        handlebars={tableCompactNoBorderRowsExampleRaw}
        docs={tableCompactNoBorderRowsDoc}
      >
        {tableCompactNoBorderRowsExample}
      </Example>
      <Example
        heading="Compact Expandable Table"
        handlebars={tableCompactExpandableExampleRaw}
        docs={tableCompactExpandableDoc}
      >
        {tableCompactExpandableExample}
      </Example>
      <Example heading="Table with Width Modifiers" handlebars={tableWidthExampleRaw} docs={tableWidthDoc}>
        {tableWidthExample}
      </Example>
      <Example
        heading="Table with hidden/visible breakpoint modifiers"
        handlebars={tableHiddenVisibleExampleRaw}
        docs={tableHiddenVisibleDoc}
      >
        {tableHiddenVisibleExample}
      </Example>
    </Documentation>
  );
};
