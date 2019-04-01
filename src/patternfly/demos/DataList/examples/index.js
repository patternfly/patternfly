import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import dataListSimpleDemoRaw from '!raw!./data-list-simple-demo.hbs';
import dataListActionableDemoRaw from '!raw!./data-list-actionable-demo.hbs';
import dataListExpandableDemoRaw from '!raw!./data-list-expandable-demo.hbs';
import dataListSimpleWithoutPaginationDemoRaw from '!raw!./data-list-simple-without-pagination-demo.hbs';
import DataListSimpleDemo from './data-list-simple-demo.hbs';
import DataListActionableDemo from './data-list-actionable-demo.hbs';
import DataListExpandableDemo from './data-list-expandable-demo.hbs';
import DataListSimpleWithoutPaginationDemo from './data-list-simple-without-pagination-demo.hbs';

import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const dataListSimpleDemo = DataListSimpleDemo();
  const dataListActionableDemo = DataListActionableDemo();
  const dataListExpandableDemo = DataListExpandableDemo();
  const dataListSimpleWithoutPaginationDemo = DataListSimpleWithoutPaginationDemo();

  return (
    <Documentation docs={Docs}>
      <Example heading="Data List Simple Demo" fullPageOnly="true" handlebars={dataListSimpleDemoRaw}>
        {dataListSimpleDemo}
      </Example>
      <Example heading="Data List Actionable Demo" fullPageOnly="true" handlebars={dataListActionableDemoRaw}>
        {dataListActionableDemo}
      </Example>
      <Example heading="Data List Expandable Demo" fullPageOnly="true" handlebars={dataListExpandableDemoRaw}>
        {dataListExpandableDemo}
      </Example>
      <Example
        heading="Data List Simple without Pagination Demo"
        fullPageOnly="true"
        handlebars={dataListSimpleWithoutPaginationDemoRaw}
      >
        {dataListSimpleWithoutPaginationDemo}
      </Example>
    </Documentation>
  );
};
