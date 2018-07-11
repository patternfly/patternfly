import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import InputgroupExampleRaw from '!raw!./input-group-example.hbs';
import InputgroupExample from './input-group-example.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const inputGroupExample = InputgroupExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Inputgroup Example" handlebars={InputgroupExampleRaw}>{inputGroupExample}</Example>
    </Documentation>
  );
};
