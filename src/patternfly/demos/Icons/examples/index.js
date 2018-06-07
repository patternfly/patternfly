import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import IconsExample1 from './icons-example1.hbs';
import IconsExample2 from './icons-example2.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const iconsExample1 = IconsExample1();
  const iconsExample2 = IconsExample2();

  return (
    <Documentation docs={Docs}>
      <Example heading="Action Icon Examples">{iconsExample1}</Example>
      <Example heading="Status Icon Examples">{iconsExample2}</Example>
    </Documentation>
  );
};
