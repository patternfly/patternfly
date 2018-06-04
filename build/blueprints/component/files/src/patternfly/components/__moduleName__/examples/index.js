import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import {{moduleName}}Example1 from './{{nameDasherized}}-example1.hbs';
import {{moduleName}}Example2 from './{{nameDasherized}}-example2.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const {{name}}Example1 = {{moduleName}}Example1();
  const {{name}}Example2 = {{moduleName}}Example2();

  return (
    <Documentation docs={Docs}>
      <Example heading="{{moduleName}} Example 1">{ {{name}}Example1 }</Example>
      <Example heading="{{moduleName}} Example 2">{ {{name}}Example2 }</Example>
    </Documentation>
  );
};
