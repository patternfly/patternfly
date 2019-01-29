import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import labelExampleRaw from '!raw!./label-example.hbs';
import LabelExample from './label-example.hbs';
import docs from '../docs/code.md';
import '../label.scss';

export const Docs = docs;

export default () => {
  const labelExample = LabelExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Label Component" handlebars={labelExampleRaw}>
        {labelExample}
      </Example>
    </Documentation>
  );
};
