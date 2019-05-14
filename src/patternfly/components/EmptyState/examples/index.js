import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import emptyStateSimpleExampleRaw from '!raw!./empty-state-simple-example.hbs';
import emptyStateSmallExampleRaw from '!raw!./empty-state-small-example.hbs';
import emptyStateLargeExampleRaw from '!raw!./empty-state-large-example.hbs';
import EmptystateSimpleExample from './empty-state-simple-example.hbs';
import EmptystateSmallExample from './empty-state-small-example.hbs';
import EmptystateLargeExample from './empty-state-large-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const emptyStateSimpleExample = EmptystateSimpleExample();
  const emptyStateSmallExample = EmptystateSmallExample();
  const emptyStateLargeExample = EmptystateLargeExample();
  const headingText = 'Empty state';
  const variablesRoot = 'pf-c-empty-state';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Empty state" handlebars={emptyStateSimpleExampleRaw}>
        {emptyStateSimpleExample}
      </Example>
      <Example heading="Empty state small" handlebars={emptyStateSmallExampleRaw}>
        {emptyStateSmallExample}
      </Example>
      <Example heading="Empty state large" handlebars={emptyStateLargeExampleRaw}>
        {emptyStateLargeExample}
      </Example>
    </Documentation>
  );
};
