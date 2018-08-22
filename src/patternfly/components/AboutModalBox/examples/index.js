import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import AboutModalBoxExample from './about-modal-box-example.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const aboutModalBoxExample = AboutModalBoxExample();
  const headingText = 'About modal box';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading={headingText}>{aboutModalBoxExample}</Example>
    </Documentation>
  );
};
