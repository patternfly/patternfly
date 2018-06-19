import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import VerticalNavBasicExample from './vertical-nav-basic-example.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const verticalNavBasicExample = VerticalNavBasicExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="VerticalNav Basic Example">
        {verticalNavBasicExample}
      </Example>
    </Documentation>
  );
};
