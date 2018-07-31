import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import tableSimpleExampleRaw from '!raw!./table-simple-example.hbs';
import tableSimpleWithCheckboxesExampleRaw from '!raw!./table-simple-with-checkboxes-example.hbs';
import tableExpandableExampleRaw from '!raw!./table-expandable-example.hbs';
import tableCompactExampleRaw from '!raw!./table-compact-example.hbs';
import tableWidthExampleRaw from '!raw!./table-width-example.hbs';

import TableSimpleExample from './table-simple-example.hbs';
import TableSimpleWithCheckboxesExample from './table-simple-with-checkboxes-example.hbs';
import TableExpandableExample from './table-expandable-example.hbs';
import TableCompactExample from './table-compact-example.hbs';
import TableWidthExample from './table-width-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const tableSimpleExample = TableSimpleExample();
  const tableExpandableExample = TableExpandableExample();
  const tableCompactExample = TableCompactExample();
  const tableSimpleWithCheckboxesExample = TableSimpleWithCheckboxesExample();
  const tableWidthExample = TableWidthExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Simple Table" handlebars={tableSimpleExampleRaw}>
        {tableSimpleExample}
      </Example>
      <Example heading="Simple Table with checkboxes" handlebars={tableSimpleWithCheckboxesExampleRaw}>
        {tableSimpleWithCheckboxesExample}
      </Example>
      <Example heading="Expandable Table" handlebars={tableExpandableExampleRaw}>
        {tableExpandableExample}
      </Example>
      <Example heading="Compact Table" handlebars={tableCompactExampleRaw}>
        {tableCompactExample}
      </Example>
      <Example heading="Table with <th> Width Modifiers" handlebars={tableWidthExampleRaw}>
        {tableWidthExample}
      </Example>
    </Documentation>
  );
};
