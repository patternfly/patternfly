import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import Example1 from './example-basic.hbs';
import Example2 from './example-fullbleed.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const example1 = Example1();
  const example2 = Example2();

  return (
    <Documentation docs={Docs}>
      <Example heading="Box">{example1}</Example>
      <Example heading="Box - Full bleed">{example2}</Example>
    </Documentation>

  );
};
