import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import tableSimpleExampleRaw from '!raw!./table-simple-example.hbs';
import tableExpandableExampleRaw from '!raw!./table-expandable-example.hbs';
import TableSimpleExample from './table-simple-example.hbs';
import TableExpandableExample from './table-expandable-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const tableSimpleExample = TableSimpleExample();
  const tableExpandableExample = TableExpandableExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Table Simple" handlebars={tableSimpleExampleRaw}>
        {tableSimpleExample}
      </Example>
      <Example heading="Table Expandable" handlebars={tableExpandableExampleRaw}>
        {tableExpandableExample}
      </Example>
    </Documentation>
  );
};
