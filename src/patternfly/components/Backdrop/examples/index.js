import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import BackdropExampleRaw from '!raw!./backdrop-example.hbs';
import BackdropExample from './backdrop-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const backdropExample = BackdropExample();
  const headingText = 'Backdrop';
  const variablesRoot = 'pf-c-backdrop';

  return (
    <Documentation docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Backdrop Example" fullPageOnly="true" handlebars={BackdropExampleRaw}>
        {backdropExample}
      </Example>
    </Documentation>
  );
};
