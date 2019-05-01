import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import CheckExampleRaw from '!raw!./check-example.hbs';
import CheckExample from './check-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const checkExample = CheckExample();
  const headingText = 'Check';
  const variablesRoot = 'pf-c-check';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Check example" handlebars={CheckExampleRaw}>
        {checkExample}
      </Example>
    </Documentation>
  );
};
