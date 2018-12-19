import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import paginationExampleRaw from '!raw!./pagination-example.hbs';
import PaginationExample from './pagination-example.hbs';
import paginationExampleDoc from '../docs/pagination-example.md';
import docs from '../docs/code.md';
import '../pagination.scss';

export const Docs = docs;

export default () => {
  const paginationExample = PaginationExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Pagination Example" handlebars={paginationExampleRaw} docs={paginationExampleDoc}>
        {paginationExample}
      </Example>
    </Documentation>
  );
};
