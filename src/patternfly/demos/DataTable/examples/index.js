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

export default (props) => {
  const dataTableSimpleDemo = DataTableSimpleDemo();
  const dataTableSortableDemo = DataTableSortableDemo();
  const dataTableExpandableDemo = DataTableExpandableDemo();
  const dataTableCompactDemo = DataTableCompactDemo();
  const dataTableCompoundExpansionDemo = DataTableCompoundExpansionDemo();

  const headingText = 'Data table demo';

  return (
    <Documentation data={props} docs={Docs} heading={headingText}>
      <Example heading="Data table - simple demo" fullPageOnly="true" handlebars={DataTableSimpleDemoRaw}>
        {dataTableSimpleDemo}
      </Example>
      <Example heading="Data table - sortable demo" fullPageOnly="true" handlebars={DataTableSortableDemoRaw}>
        {dataTableSortableDemo}
      </Example>
      <Example heading="Data table - expandable demo" fullPageOnly="true" handlebars={DataTableExpandableDemoRaw}>
        {dataTableExpandableDemo}
      </Example>
      <Example heading="Data table - compact demo" fullPageOnly="true" handlebars={DataTableCompactDemoRaw}>
        {dataTableCompactDemo}
      </Example>
      <Example
        heading="Data table - compound expansion demo"
        fullPageOnly="true"
        handlebars={DataTableCompoundExpansionDemoRaw}
      >
        {dataTableCompoundExpansionDemo}
      </Example>
    </Documentation>
  );
};
