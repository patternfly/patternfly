import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import Example1 from './example1.hbs';
import Example2 from './example2.hbs';
import Example3 from './example3.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const example1 = Example1();
  const example2 = Example2();
  const example3 = Example3();

  return (
    <Documentation docs={Docs}>
      <Example heading="Box">{example1}</Example>
      <Example heading="Box with no footer">{example2}</Example>
      <Example heading="Box with no header or footer">{example3}</Example>
    </Documentation>
  );
};
