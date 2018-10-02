import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import listSimpleExampleRaw from '!raw!./list-simple-example.hbs';
import listInlineExampleRaw from '!raw!./list-inline-example.hbs';
import listGridExampleRaw from '!raw!./list-grid-example.hbs';
import ListSimpleExample from './list-simple-example.hbs';
import ListInlineExample from './list-inline-example.hbs';
import ListGridExample from './list-grid-example.hbs';
import docs from '../docs/code.md';
import '../list.scss';

export const Docs = docs;

export default () => {
  const listSimpleExample = ListSimpleExample();
  const listInlineExample = ListInlineExample();
  const listGridExample = ListGridExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="List" handlebars={listSimpleExampleRaw}>
        {listSimpleExample}
      </Example>
      <Example heading="List Inline" handlebars={listInlineExampleRaw}>
        {listInlineExample}
      </Example>
      <Example heading="List Grid" handlebars={listGridExampleRaw}>
        {listGridExample}
      </Example>
    </Documentation>
  );
};
