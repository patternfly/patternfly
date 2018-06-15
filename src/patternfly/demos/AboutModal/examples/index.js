import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import AboutModalExample from './about-modal-example.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const aboutModalExample = AboutModalExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="About Modal Example" fullPageOnly="true">{aboutModalExample}</Example>
    </Documentation>
  );
};
