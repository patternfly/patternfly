import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import {{moduleName}}Simple from './{{nameDasherized}}-simple.hbs';
import {{moduleName}}Complex from './{{nameDasherized}}-complex.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const example1 = {{moduleName}}Simple();
  const example2 = {{moduleName}}Complex();

  return (
    <Documentation docs={Docs}>
      <Example heading="{{moduleName}} Example 1">{example1}</Example>
      <Example heading="{{moduleName}} Example 2">{example2}</Example>
    </Documentation>
  );
};
