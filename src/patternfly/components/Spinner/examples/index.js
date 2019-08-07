import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import spinnerSimpleExampleRaw from '!raw!./spinner-simple-example.hbs';
import spinnerComplexExampleRaw from '!raw!./spinner-complex-example.hbs';
import SpinnerSimpleExample from './spinner-simple-example.hbs';
import SpinnerComplexExample from './spinner-complex-example.hbs';
import spinnerComplexExampleDoc from '../docs/spinner-complex.md';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const spinnerSimpleExample = SpinnerSimpleExample();
  const spinnerComplexExample = SpinnerComplexExample();
  const headingText = 'Spinner';
  const variablesRoot = 'pf-c-spinner';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Spinner simple" handlebars={spinnerSimpleExampleRaw} minHeight="20em">
        {spinnerSimpleExample}
      </Example>
      <Example heading="Spinner complex" handlebars={spinnerComplexExampleRaw} docs={spinnerComplexExampleDoc}>
        {spinnerComplexExample}
      </Example>
    </Documentation>
  );
};
