import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import BackdropExample from './backdrop-example.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const backdropExample = BackdropExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Backdrop Example" fullPageOnly="true">
        {backdropExample}
      </Example>
    </Documentation>
  );
};
