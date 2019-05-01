import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import StackRaw from '!raw!./stack-example.hbs';
import StackHasGutterRaw from '!raw!./stack-has-gutter-example.hbs';
import Stack from './stack-example.hbs';
import StackHasGutter from './stack-has-gutter-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const stack = Stack();
  const stackHasGutter = StackHasGutter();
  const headingText = 'Stack';
  const variablesRoot = 'pf-l-stack';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot} className="is-layout-page">
      <Example heading="Stack Example" handlebars={StackRaw} minHeight="30em" className="is-height-flex-column-grow">
        {stack}
      </Example>
      <Example
        heading="Stack Example with Gutter"
        handlebars={StackHasGutterRaw}
        minHeight="30em"
        className="is-height-flex-column-grow"
      >
        {stackHasGutter}
      </Example>
    </Documentation>
  );
};
