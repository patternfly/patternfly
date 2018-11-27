import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import emptyStateSimpleExampleRaw from '!raw!./empty-state-simple-example.hbs';
import EmptystateSimpleExample from './empty-state-simple-example.hbs';
import docs from '../docs/code.md';
import '../empty-state.scss';

export const Docs = docs;

export default () => {
  const emptyStateSimpleExample = EmptystateSimpleExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Empty State" handlebars={emptyStateSimpleExampleRaw}>
        {emptyStateSimpleExample}
      </Example>
    </Documentation>
  );
};
