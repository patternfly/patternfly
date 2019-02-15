import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ContextSelectorExampleRaw from '!raw!./context-selector-example.hbs';
import ContextSelectorExample from './context-selector-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const contextselectorexample = ContextSelectorExample();
  const headingText = 'Context Selector';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Context Selector Example" handlebars={ContextSelectorExampleRaw} minHeight="20em">
        {contextselectorexample}
      </Example>
    </Documentation>
  );
};
