import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import DataListSimpleExampleRaw from '!raw!./data-list-simple-example.hbs';
import DataListCheckActionExampleRaw from '!raw!./data-list-check-action-example.hbs';
import DataListExpandableExampleRaw from '!raw!./data-list-expandable-example.hbs';
import DataListWidthExampleRaw from '!raw!./data-list-width-example.hbs';

import DataListSimpleExample from './data-list-simple-example.hbs';
import DataListCheckActionExample from './data-list-check-action-example.hbs';
import DataListExpandableExample from './data-list-expandable-example.hbs';
import DataListWidthExample from './data-list-width-example.hbs';

import DataListSimpleExampleDoc from '../docs/data-list-simple.md';
import DataListCheckActionExampleDoc from '../docs/data-list-check-action.md';
import DataListExpandableExampleDoc from '../docs/data-list-expandable.md';
import DataListWidthExampleDoc from '../docs/data-list-width.md';

import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const dataListSimpleExample = DataListSimpleExample();
  const dataListCheckActionExample = DataListCheckActionExample();
  const dataListExpandableExample = DataListExpandableExample();
  const dataListWidthExample = DataListWidthExample();
  const headingText = 'Data List';
  const variablesRoot = 'pf-c-data-list';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Data List Simple" handlebars={DataListSimpleExampleRaw} docs={DataListSimpleExampleDoc}>
        {dataListSimpleExample}
      </Example>
      <Example
        heading="Data List Checkboxes, Actions and Additional Cells"
        handlebars={DataListCheckActionExampleRaw}
        docs={DataListCheckActionExampleDoc}
      >
        {dataListCheckActionExample}
      </Example>
      <Example
        heading="Data List Expandable"
        handlebars={DataListExpandableExampleRaw}
        docs={DataListExpandableExampleDoc}
      >
        {dataListExpandableExample}
      </Example>
      <Example heading="Data List Width Modifiers" handlebars={DataListWidthExampleRaw} docs={DataListWidthExampleDoc}>
        {dataListWidthExample}
      </Example>
    </Documentation>
  );
};
