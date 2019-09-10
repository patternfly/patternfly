---
title: Toolbar
section: components
---

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import toolbarSimpleExampleRaw from '!raw!./toolbar-simple-example.hbs';
import toolbarExpandedExampleRaw from '!raw!./toolbar-expanded-example.hbs';
import toolbarPaginationExampleRaw from '!raw!./toolbar-pagination-example.hbs';
import toolbarFilterExpandedExampleRaw from '!raw!./toolbar-filter-expanded-example.hbs';
import toolbarFilterExpandedCheckedExampleRaw from '!raw!./toolbar-filter-expanded-checked-example.hbs';
import toolbarMobileFilterExampleRaw from '!raw!./toolbar-mobile-filter-example.hbs';
import toolbarMobileFilterCheckedExampleRaw from '!raw!./toolbar-mobile-filter-checked-example.hbs';
import ToolbarSimpleExample from './toolbar-simple-example.hbs';
import ToolbarExpandedExample from './toolbar-expanded-example.hbs';
import ToolbarPaginationExample from './toolbar-pagination-example.hbs';
import ToolbarFilterExpandedExample from './toolbar-filter-expanded-example.hbs';
import ToolbarFilterExpandedCheckedExample from './toolbar-filter-expanded-checked-example.hbs';
import ToolbarMobileFilterExample from './toolbar-mobile-filter-example.hbs';
import ToolbarMobileFilterCheckedExample from './toolbar-mobile-filter-checked-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const toolbarSimpleExample = ToolbarSimpleExample();
  const toolbarExpandedExample = ToolbarExpandedExample();
  const toolbarPaginationExample = ToolbarPaginationExample();
  const toolbarFilterExpandedExample = ToolbarFilterExpandedExample();
  const toolbarFilterExpandedCheckedExample = ToolbarFilterExpandedCheckedExample();
  const toolbarMobileFilterExample = ToolbarMobileFilterExample();
  const toolbarMobileFilterCheckedExample = ToolbarMobileFilterCheckedExample();
  const headingText = 'Toolbar';
  const variablesRoot = 'pf-c-toolbar';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example fullPageOnly="true" heading="Toolbar simple" handlebars={toolbarSimpleExampleRaw}>
        {toolbarSimpleExample}
      </Example>
      <Example fullPageOnly="true" heading="Toolbar w/ pagination" handlebars={toolbarPaginationExampleRaw}>
        {toolbarPaginationExample}
      </Example>
      <Example
        fullPageOnly="true"
        heading="Toolbar w/ pagination and expanded menus for bulk selector, sort, action menu, and pagination"
        handlebars={toolbarExpandedExampleRaw}
      >
        {toolbarExpandedExample}
      </Example>
      <Example
        fullPageOnly="true"
        heading="Toolbar w/ filter menu expanded"
        handlebars={toolbarFilterExpandedExampleRaw}
      >
        {toolbarFilterExpandedExample}
      </Example>
      <Example
        fullPageOnly="true"
        heading="Toolbar w/ filter menu expanded (checked)"
        handlebars={toolbarFilterExpandedCheckedExampleRaw}
      >
        {toolbarFilterExpandedCheckedExample}
      </Example>
      <Example
        fullPageOnly="true"
        heading="Toolbar w/ filter group expanded on mobile (responsive)"
        handlebars={toolbarMobileFilterExampleRaw}
      >
        {toolbarMobileFilterExample}
      </Example>
      <Example
        fullPageOnly="true"
        heading="Toolbar w/ filter group expanded (checked) on mobile (responsive)"
        handlebars={toolbarMobileFilterCheckedExampleRaw}
      >
        {toolbarMobileFilterCheckedExample}
      </Example>
    </Documentation>
  );
};
```

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role` or `aria` | `pf-c-toolbar` |  accessibility notes. |


## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-toolbar` | `<div>` |  Initiates the toolbar component. **Required** |
| `.pf-c-toolbar__bulk-select` | `.pf-c-dropdown` |  Indicates the bulk select. |
| `.pf-c-toolbar__filter-toggle` | `.pf-c-button.pf-m-plain` |  Indicates the filter toggle button on small screens. **Required** |
| `.pf-c-toolbar__filter` | `<div>` |  Initiates the filter area. **Required** |
| `.pf-c-toolbar__sort` | `.pf-c-options-menu` |  Initiates the options menu for sorting options. |
| `.pf-c-toolbar__action-group` | `<div>` |  Initiates the action group. **Required. Note - at least one action is required.**|
| `.pf-c-toolbar__action-list` | `.pf-c-dropdown` |  Indicates the dropdown for an action list. |
| `.pf-c-pagination` | `<div>` |  Indicates the pagination component. |
| `.pf-c-toolbar__total-items` | `<div>` |  Initiates the currently displayed item count for use when there is no pagination and in mobile. **Required** |
| `.pf-c-toolbar__filter-list` | `.pf-c-chip-group` | Indicates the list of currently applied filters. **Required**|
| `.pf-m-expanded` | `.pf-c-toolbar__filter-toggle` | Modifies the mobile filter toggle for expanded state.
| `.pf-m-expanded` | `.pf-c-toolbar__filter` | Modifies filter for the expanded state on small screens.
| `.pf-m-expanded` | `.pf-c-toolbar__filter-list` | Modifies for the expanded state when filters are applied.
