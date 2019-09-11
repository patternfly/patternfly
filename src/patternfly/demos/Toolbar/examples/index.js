import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ToolbarAttributeValueSearchFilterExampleRaw from '!raw!./toolbar-attribute-value-search-filter-example.hbs';
import ToolbarAttributeValueSingleSelectFilterExampleRaw from '!raw!./toolbar-attribute-value-single-select-filter-example.hbs';
import ToolbarAttributeValueCheckboxSelectFilterExampleRaw from '!raw!./toolbar-attribute-value-checkbox-select-filter-example.hbs';

import docs from '../docs/code.md';
import ToolbarAttributeValueSearchFilterExample from './toolbar-attribute-value-search-filter-example.hbs';
import ToolbarAttributeValueSingleSelectFilterExample from './toolbar-attribute-value-single-select-filter-example.hbs';
import ToolbarAttributeValueCheckboxSelectFilterExample from './toolbar-attribute-value-checkbox-select-filter-example.hbs';

export const Docs = docs;

export default props => {
  const toolbarAttributeValueSearchFilterExample = ToolbarAttributeValueSearchFilterExample();
  const toolbarAttributeValueSingleSelectFilterExample = ToolbarAttributeValueSingleSelectFilterExample();
  const toolbarAttributeValueCheckboxSelectFilterExample = ToolbarAttributeValueCheckboxSelectFilterExample();
  const headingText = 'Toolbar demo';

  return (
    <Documentation data={props} docs={Docs} heading={headingText}>
      <Example heading="Toolbar attribute-value search filter" handlebars={ToolbarAttributeValueSearchFilterExampleRaw}>
        {toolbarAttributeValueSearchFilterExample}
      </Example>
      <Example
        heading="Toolbar attribute-value single select filter"
        handlebars={ToolbarAttributeValueSingleSelectFilterExampleRaw}
      >
        {toolbarAttributeValueSingleSelectFilterExample}
      </Example>
      <Example
        heading="Toolbar attribute-value checkbox select filter"
        handlebars={ToolbarAttributeValueCheckboxSelectFilterExampleRaw}
      >
        {toolbarAttributeValueCheckboxSelectFilterExample}
      </Example>
    </Documentation>
  );
};
