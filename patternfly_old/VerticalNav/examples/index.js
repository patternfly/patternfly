import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import VerticalNavBasicExampleRaw from '!raw!./vertical-nav-basic-example.hbs';
import VerticalNavBasicExample from './vertical-nav-basic-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const verticalNavBasicExample = VerticalNavBasicExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="VerticalNav Basic Example" handlebars={VerticalNavBasicExampleRaw}>
        {verticalNavBasicExample}
      </Example>
    </Documentation>
  );
};
