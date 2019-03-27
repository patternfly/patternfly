import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import DataTableSimpleDemoRaw from '!raw!./data-table-simple-demo.hbs';
import DataTableSortableDemoRaw from '!raw!./data-table-sortable-demo.hbs';
import DataTableExpandableDemoRaw from '!raw!./data-table-expandable-demo.hbs';
import DataTableCompactDemoRaw from '!raw!./data-table-compact-demo.hbs';
import DataTableCompoundExpansionDemoRaw from '!raw!./data-table-compound-expansion-demo.hbs';
import DataTableSimpleDemo from './data-table-simple-demo.hbs';
import DataTableSortableDemo from './data-table-sortable-demo.hbs';
import DataTableExpandableDemo from './data-table-expandable-demo.hbs';
import DataTableCompactDemo from './data-table-compact-demo.hbs';
import DataTableCompoundExpansionDemo from './data-table-compound-expansion-demo.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const dataTableSimpleDemo = DataTableSimpleDemo();
  const dataTableSortableDemo = DataTableSortableDemo();
  const dataTableExpandableDemo = DataTableExpandableDemo();
  const dataTableCompactDemo = DataTableCompactDemo();
  const dataTableCompoundExpansionDemo = DataTableCompoundExpansionDemo();

  const headingText = 'Data Table Demo';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Data Table - Simple Demo" fullPageOnly="true" handlebars={DataTableSimpleDemoRaw}>
        {dataTableSimpleDemo}
      </Example>
      <Example heading="Data Table - Sortable Demo" fullPageOnly="true" handlebars={DataTableSortableDemoRaw}>
        {dataTableSortableDemo}
      </Example>
      <Example heading="Data Table - Expandable Demo" fullPageOnly="true" handlebars={DataTableExpandableDemoRaw}>
        {dataTableExpandableDemo}
      </Example>
      <Example heading="Data Table - Compact Demo" fullPageOnly="true" handlebars={DataTableCompactDemoRaw}>
        {dataTableCompactDemo}
      </Example>
      <Example
        heading="Data Table - Compound Expansion Demo"
        fullPageOnly="true"
        handlebars={DataTableCompoundExpansionDemoRaw}
      >
        {dataTableCompoundExpansionDemo}
      </Example>
    </Documentation>
  );
};
