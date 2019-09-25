import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import TableSimpleDemoRaw from '!raw!./table-simple-demo.hbs';
import TableSortableDemoRaw from '!raw!./table-sortable-demo.hbs';
import TableExpandableDemoRaw from '!raw!./table-expandable-demo.hbs';
import TableCompactDemoRaw from '!raw!./table-compact-demo.hbs';
import TableCompoundExpansionDemoRaw from '!raw!./table-compound-expansion-demo.hbs';
import TableLoadingDemoRaw from '!raw!./table-loading-demo.hbs';
import TableEmptyStateDemoRaw from '!raw!./table-empty-state-demo.hbs';
import TableSimpleCompactPaginationDemoRaw from '!raw!./table-simple-compact-pagination-demo.hbs';

import TableSimpleDemo from './table-simple-demo.hbs';
import TableSortableDemo from './table-sortable-demo.hbs';
import TableExpandableDemo from './table-expandable-demo.hbs';
import TableCompactDemo from './table-compact-demo.hbs';
import TableCompoundExpansionDemo from './table-compound-expansion-demo.hbs';
import TableLoadingDemo from './table-loading-demo.hbs';
import TableEmptyStateDemo from './table-empty-state-demo.hbs';
import TableSimpleCompactPaginationDemo from './table-simple-compact-pagination-demo.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const tableSimpleDemo = TableSimpleDemo();
  const tableSortableDemo = TableSortableDemo();
  const tableExpandableDemo = TableExpandableDemo();
  const tableCompactDemo = TableCompactDemo();
  const tableCompoundExpansionDemo = TableCompoundExpansionDemo();
  const tableLoadingDemo = TableLoadingDemo();
  const tableEmptyStateDemo = TableEmptyStateDemo();
  const tableSimpleCompactPaginationDemo = TableSimpleCompactPaginationDemo();

  const headingText = 'Table demo';

  return (
    <Documentation data={props} docs={Docs} heading={headingText}>
      <Example heading="Table - simple demo" fullPageOnly="true" handlebars={TableSimpleDemoRaw}>
        {tableSimpleDemo}
      </Example>
      <Example heading="Table - sortable demo" fullPageOnly="true" handlebars={TableSortableDemoRaw}>
        {tableSortableDemo}
      </Example>
      <Example heading="Table - expandable demo" fullPageOnly="true" handlebars={TableExpandableDemoRaw}>
        {tableExpandableDemo}
      </Example>
      <Example heading="Table - compact demo" fullPageOnly="true" handlebars={TableCompactDemoRaw}>
        {tableCompactDemo}
      </Example>
      <Example heading="Table - compound expansion demo" fullPageOnly="true" handlebars={TableCompoundExpansionDemoRaw}>
        {tableCompoundExpansionDemo}
      </Example>
      <Example heading="Table - loading state demo" fullPageOnly="true" handlebars={TableLoadingDemoRaw}>
        {tableLoadingDemo}
      </Example>
      <Example heading="Table - empty state demo" fullPageOnly="true" handlebars={TableEmptyStateDemoRaw}>
        {tableEmptyStateDemo}
      </Example>
      <Example
        heading="Table - simple with compact pagination demo"
        fullPageOnly="true"
        handlebars={TableSimpleCompactPaginationDemoRaw}
      >
        {tableSimpleCompactPaginationDemo}
      </Example>
    </Documentation>
  );
};
