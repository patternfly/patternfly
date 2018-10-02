import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import AboutModalBoxExample from './about-modal-box-example.hbs';
import '../about-modal-box.scss';

export const Docs = docs;

export default () => {
  const aboutModalBoxExample = AboutModalBoxExample();
  const headingText = 'About Modal Box';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading={headingText}>{aboutModalBoxExample}</Example>
    </Documentation>
  );
};
