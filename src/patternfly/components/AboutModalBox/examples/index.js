import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import AboutModalBoxExample from './about-modal-box-example.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const aboutModalBoxExample = AboutModalBoxExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="About modal box">{aboutModalBoxExample}</Example>
    </Documentation>
  );
};
