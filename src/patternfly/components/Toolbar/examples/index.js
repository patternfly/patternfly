import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import toolbarSimpleExampleRaw from '!raw!./toolbar-simple-example.hbs';
import toolbarExpandedExampleRaw from '!raw!./toolbar-expanded-example.hbs';
import toolbarPaginationExampleRaw from '!raw!./toolbar-pagination-example.hbs';
import ToolbarSimpleExample from './toolbar-simple-example.hbs';
import ToolbarExpandedExample from './toolbar-expanded-example.hbs';
import ToolbarPaginationExample from './toolbar-pagination-example.hbs';
import docs from '../docs/code.md';
import '../toolbar.scss';

export const Docs = docs;

export default () => {
  const toolbarSimpleExample = ToolbarSimpleExample();
  const toolbarExpandedExample = ToolbarExpandedExample();
  const toolbarPaginationExample = ToolbarPaginationExample();

  return (
    <Documentation docs={Docs}>
      <Example fullPageOnly="true" heading="Toolbar Simple" handlebars={toolbarSimpleExampleRaw}>
        {toolbarSimpleExample}
      </Example>
      <Example fullPageOnly="true" heading="Toolbar Expanded" handlebars={toolbarExpandedExampleRaw}>
        {toolbarExpandedExample}
      </Example>
      <Example fullPageOnly="true" heading="Toolbar Pagination" handlebars={toolbarPaginationExampleRaw}>
        {toolbarPaginationExample}
      </Example>
    </Documentation>
  );
};
