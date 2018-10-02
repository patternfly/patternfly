import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import BackdropExampleRaw from '!raw!./backdrop-example.hbs';
import BackdropExample from './backdrop-example.hbs';
import docs from '../docs/code.md';
import '../backdrop.scss';

export const Docs = docs;

export default () => {
  const backdropExample = BackdropExample();
  const headingText = 'Backdrop';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Backdrop Example" fullPageOnly="true" handlebars={BackdropExampleRaw}>
        {backdropExample}
      </Example>
    </Documentation>
  );
};
