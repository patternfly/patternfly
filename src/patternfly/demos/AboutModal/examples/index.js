import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import AboutModalExample from './about-modal-example.hbs';

export const Docs = docs;

export default (props) => {
  const aboutModalExample = AboutModalExample();
  const headingText = 'About modal demo';

  return (
    <Documentation data={props} docs={Docs} heading={headingText}>
      <Example heading="About modal example" fullPageOnly="true">
        {aboutModalExample}
      </Example>
    </Documentation>
  );
};
