import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import labelExampleRaw from '!raw!./label-example.hbs';
import labelTableExampleRaw from '!raw!./label-table-example.hbs';
import LabelExample from './label-example.hbs';
import LabelTableExample from './label-table-example.hbs';
import labelComplexExampleDoc from '../docs/label-complex.md';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const labelExample = LabelExample();
  const labelTableExample = LabelTableExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Label Component" handlebars={labelExampleRaw}>
        {labelExample}
      </Example>
      <Example
        heading="Label in Default Table/Compact Table"
        handlebars={labelTableExampleRaw}
        docs={labelComplexExampleDoc}
      >
        {labelTableExample}
      </Example>
    </Documentation>
  );
};
