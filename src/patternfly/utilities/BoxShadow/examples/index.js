import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import boxShadowSimpleExampleRaw from '!raw!./box-shadow-simple-example.hbs';
import BoxshadowSimpleExample from './box-shadow-simple-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const boxShadowSimpleExample = BoxshadowSimpleExample();
  const headingText = 'Box Shadow';

  return (
    <Documentation data={props} docs={Docs} heading={headingText}>
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
