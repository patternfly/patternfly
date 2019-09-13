import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import emptyStateSimpleExampleRaw from '!raw!./empty-state-simple-example.hbs';
import emptyStateSmallExampleRaw from '!raw!./empty-state-small-example.hbs';
import emptyStateLargeExampleRaw from '!raw!./empty-state-large-example.hbs';
import emptyStatePrimaryExampleRaw from '!raw!./empty-state-primary-example.hbs';

import EmptyStateSimpleExample from './empty-state-simple-example.hbs';
import EmptyStateSmallExample from './empty-state-small-example.hbs';
import EmptyStateLargeExample from './empty-state-large-example.hbs';
import EmptyStatePrimaryExample from './empty-state-primary-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const emptyStateSimpleExample = EmptyStateSimpleExample();
  const emptyStateSmallExample = EmptyStateSmallExample();
  const emptyStateLargeExample = EmptyStateLargeExample();
  const emptyStatePrimaryExample = EmptyStatePrimaryExample();
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
      <Example heading="Empty state w/ primary element" handlebars={emptyStatePrimaryExampleRaw}>
        {emptyStatePrimaryExample}
      </Example>
    </Documentation>
  );
};
