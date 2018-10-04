import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import labelSmallExampleRaw from '!raw!./label-small-example.hbs';
import labelLargeExampleRaw from '!raw!./label-large-example.hbs';
import LabelSmallExample from './label-small-example.hbs';
import LabelLargeExample from './label-large-example.hbs';
import labelComplexExampleDoc from '../docs/label-complex.md';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const labelSmallExample = LabelSmallExample();
  const labelLargeExample = LabelLargeExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Label Small" handlebars={labelSmallExampleRaw}>
        {labelSmallExample}
      </Example>
      <Example heading="Label Large" handlebars={labelLargeExampleRaw} docs={labelComplexExampleDoc}>
        {labelLargeExample}
      </Example>
    </Documentation>
  );
};
