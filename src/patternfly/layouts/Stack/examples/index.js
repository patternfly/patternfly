import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import StackRaw from '!raw!./stack-example.hbs';
import StackHasGutterRaw from '!raw!./stack-has-gutter-example.hbs';
import Stack from './stack-example.hbs';
import StackHasGutter from './stack-has-gutter-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const stack = Stack();
  const stackHasGutter = StackHasGutter();
  const headingText = 'Stack';

  return (
    <Documentation docs={Docs} heading={headingText} className="is-layout-page">
      <Example heading="Stack Example" handlebars={StackRaw}>
        {stack}
      </Example>
      <Example heading="Stack Example with Gutter" handlebars={StackHasGutterRaw}>
        {stackHasGutter}
      </Example>
    </Documentation>
  );
};
