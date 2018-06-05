import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import LeftAlign from './leftAlign.hbs';
import CenterAlign from './centerAlign.hbs';
import RightAlign from './rightAlign.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const leftAlign = LeftAlign();
  const centerAlign = CenterAlign();
  const rightAlign = RightAlign();

  return (
    <Documentation docs={Docs}>
      <Example heading="Left Alignment Example">{leftAlign}</Example>
      <Example heading="Center Alignment Example">{centerAlign}</Example>
      <Example heading="Right Alignment Example">{rightAlign}</Example>
    </Documentation>
  );
};
