import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import spinnerSimpleExampleRaw from '!raw!./spinner-simple-example.hbs';
import spinnerSizeExampleRaw from '!raw!./spinner-size-example.hbs';
import SpinnerSimpleExample from './spinner-simple-example.hbs';
import SpinnerSizeExample from './spinner-size-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const spinnerSimpleExample = SpinnerSimpleExample();
  const spinnerSizeExample = SpinnerSizeExample();
  const headingText = 'Spinner';
  const variablesRoot = 'pf-c-spinner';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Spinner" handlebars={spinnerSimpleExampleRaw}>
        {spinnerSimpleExample}
      </Example>
      <Example heading="Spinner size variations" handlebars={spinnerSizeExampleRaw}>
        {spinnerSizeExample}
      </Example>
    </Documentation>
  );
};
