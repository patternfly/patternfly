import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import AboutModalBoxExample from './about-modal-box-example.hbs';

export const Docs = docs;

export default (props) => {
  const aboutModalBoxExample = AboutModalBoxExample();
  const headingText = 'About Modal Box';
  const variablesRoot = 'pf-c-about-modal-box';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example fullPageOnly="true" heading={headingText}>
        {aboutModalBoxExample}
      </Example>
    </Documentation>
  );
};
