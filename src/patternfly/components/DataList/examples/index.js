import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import DataListSimpleExampleRaw from '!raw!./data-list-simple-example.hbs';
import DataListSimpleH2ExampleRaw from '!raw!./data-list-simple-h2-example.hbs';
import DataListCheckActionExampleRaw from '!raw!./data-list-check-action-example.hbs';
import DataListExpandableExampleRaw from '!raw!./data-list-expandable-example.hbs';
import DataListWidthExampleRaw from '!raw!./data-list-width-example.hbs';

import DataListSimpleExample from './data-list-simple-example.hbs';
import DataListSimpleH2Example from './data-list-simple-h2-example.hbs';
import DataListCheckActionExample from './data-list-check-action-example.hbs';
import DataListExpandableExample from './data-list-expandable-example.hbs';
import DataListWidthExample from './data-list-width-example.hbs';

import DataListSimpleExampleDoc from '../docs/data-list-simple.md';
import DataListSimpleH2ExampleDoc from '../docs/data-list-simple-h2.md';
import DataListCheckActionExampleDoc from '../docs/data-list-check-action.md';
import DataListExpandableExampleDoc from '../docs/data-list-expandable.md';
import DataListWidthExampleDoc from '../docs/data-list-width.md';

import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const dataListSimpleExample = DataListSimpleExample();
  const dataListSimpleH2Example = DataListSimpleH2Example();
  const dataListCheckActionExample = DataListCheckActionExample();
  const dataListExpandableExample = DataListExpandableExample();
  const dataListWidthExample = DataListWidthExample();
  const headingText = 'Data list';
  const variablesRoot = 'pf-c-data-list';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Data list simple" handlebars={DataListSimpleExampleRaw} docs={DataListSimpleExampleDoc}>
        {dataListSimpleExample}
      </Example>
      <Example
        heading="Data list simple h2: screen reader accessible"
        handlebars={DataListSimpleH2ExampleRaw}
        docs={DataListSimpleH2ExampleDoc}
      >
        {dataListSimpleH2Example}
      </Example>
      <Example
        heading="Data list checkboxes, actions and additional cells"
        handlebars={DataListCheckActionExampleRaw}
        docs={DataListCheckActionExampleDoc}
      >
        {dataListCheckActionExample}
      </Example>
      <Example
        heading="Data list expandable"
        handlebars={DataListExpandableExampleRaw}
        docs={DataListExpandableExampleDoc}
      >
        {dataListExpandableExample}
      </Example>
      <Example heading="Data list width modifiers" handlebars={DataListWidthExampleRaw} docs={DataListWidthExampleDoc}>
        {dataListWidthExample}
      </Example>
    </Documentation>
  );
};
