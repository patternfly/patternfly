import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import paginationTopExampleRaw from '!raw!./pagination-top-example.hbs';
import paginationTopExpandedExampleRaw from '!raw!./pagination-top-expanded-example.hbs';
import paginationBottomExampleRaw from '!raw!./pagination-bottom-example.hbs';
import PaginationTopExample from './pagination-top-example.hbs';
import PaginationTopExpandedExample from './pagination-top-expanded-example.hbs';
import PaginationBottomExample from './pagination-bottom-example.hbs';
import paginationExampleDoc from '../docs/pagination-example.md';
import docs from '../docs/code.md';
import '../pagination.scss';

export const Docs = docs;

export default () => {
  const paginationTopExample = PaginationTopExample();
  const paginationTopExpandedExample = PaginationTopExpandedExample();
  const paginationBottomExample = PaginationBottomExample();

  return (
    <Documentation docs={paginationExampleDoc}>
      <Example heading="Pagination Top" handlebars={paginationTopExampleRaw} fullPageOnly="true">
        {paginationTopExample}
      </Example>
      <Example heading="Pagination Top Expanded" handlebars={paginationTopExpandedExampleRaw} fullPageOnly="true">
        {paginationTopExpandedExample}
      </Example>
      <Example heading="Pagination Bottom" handlebars={paginationBottomExampleRaw} fullPageOnly="true">
        {paginationBottomExample}
      </Example>
    </Documentation>
  );
};
