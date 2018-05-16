import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import Example1 from './example1.hbs';
import Example2 from './example2.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const example1 = Example1();
  const example2 = Example2();

  return (
    <Documentation docs={Docs}>
      <Example heading="List Example 1">{example1}</Example>
      <Example heading="List Example 2">{example2}</Example>
    </Documentation>
  );
};
