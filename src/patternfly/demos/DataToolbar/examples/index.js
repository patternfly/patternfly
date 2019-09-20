import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import DataToolbarAttributeValueSearchFilterExampleRaw from '!raw!./data-toolbar-attribute-value-search-filter-example.hbs';
import DataToolbarAttributeValueSingleSelectFilterExampleRaw from '!raw!./data-toolbar-attribute-value-single-select-filter-example.hbs';
import DataToolbarAttributeValueCheckboxSelectFilterExampleRaw from '!raw!./data-toolbar-attribute-value-checkbox-select-filter-example.hbs';

import docs from '../docs/code.md';
import DataToolbarAttributeValueSearchFilterExample from './data-toolbar-attribute-value-search-filter-example.hbs';
import DataToolbarAttributeValueSingleSelectFilterExample from './data-toolbar-attribute-value-single-select-filter-example.hbs';
import DataToolbarAttributeValueCheckboxSelectFilterExample from './data-toolbar-attribute-value-checkbox-select-filter-example.hbs';

export const Docs = docs;

export default props => {
  const dataToolbarAttributeValueSearchFilterExample = DataToolbarAttributeValueSearchFilterExample();
  const dataToolbarAttributeValueSingleSelectFilterExample = DataToolbarAttributeValueSingleSelectFilterExample();
  const dataToolbarAttributeValueCheckboxSelectFilterExample = DataToolbarAttributeValueCheckboxSelectFilterExample();
  const headingText = 'Toolbar demo';

  return (
    <Documentation data={props} docs={Docs} heading={headingText}>
      <Example
        heading="Data toolbar attribute-value search filter"
        handlebars={DataToolbarAttributeValueSearchFilterExampleRaw}
      >
        {dataToolbarAttributeValueSearchFilterExample}
      </Example>
      <Example
        heading="Data toolbar attribute-value single select filter"
        handlebars={DataToolbarAttributeValueSingleSelectFilterExampleRaw}
        minHeight="20em"
      >
        {dataToolbarAttributeValueSingleSelectFilterExample}
      </Example>
      <Example
        heading="Data toolbar attribute-value checkbox select filter"
        minHeight="20em"
        handlebars={DataToolbarAttributeValueCheckboxSelectFilterExampleRaw}
      >
        {dataToolbarAttributeValueCheckboxSelectFilterExample}
      </Example>
    </Documentation>
  );
};
