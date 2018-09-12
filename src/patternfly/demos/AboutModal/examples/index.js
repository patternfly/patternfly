import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import AboutModalExample from './about-modal-example.hbs';

export const Docs = docs;

export default () => {
  const aboutModalExample = AboutModalExample();
  const headingText = 'About Modal Demo';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="About Modal Example" fullPageOnly="true">
        {aboutModalExample}
      </Example>
    </Documentation>
  );
};
