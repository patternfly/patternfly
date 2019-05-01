import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import listUnorderedExampleRaw from '!raw!./list-unordered-example.hbs';
import listOrderedExampleRaw from '!raw!./list-ordered-example.hbs';
import listInlineExampleRaw from '!raw!./list-inline-example.hbs';
import ListUnorderedExample from './list-unordered-example.hbs';
import ListOrderedExample from './list-ordered-example.hbs';
import ListInlineExample from './list-inline-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const listUnorderedExample = ListUnorderedExample();
  const listOrderedExample = ListOrderedExample();
  const listInlineExample = ListInlineExample();
  const headingText = 'List';
  const variablesRoot = 'pf-c-list';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Unordered list" handlebars={listUnorderedExampleRaw}>
        {listUnorderedExample}
      </Example>
      <Example heading="Ordered list" handlebars={listOrderedExampleRaw}>
        {listOrderedExample}
      </Example>
      <Example heading="List inline" handlebars={listInlineExampleRaw}>
        {listInlineExample}
      </Example>
    </Documentation>
  );
};
