import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import boxShadowSimpleExampleRaw from '!raw!./box-shadow-simple-example.hbs';
import BoxshadowSimpleExample from './box-shadow-simple-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const boxShadowSimpleExample = BoxshadowSimpleExample();

  return (
    <Documentation docs={Docs}>
      <Example
        className="box-shadow"
        heading="Boxshadow Utility"
        handlebars={boxShadowSimpleExampleRaw}
        minHeight="20em"
      >
        {boxShadowSimpleExample}
      </Example>
    </Documentation>
  );
};
