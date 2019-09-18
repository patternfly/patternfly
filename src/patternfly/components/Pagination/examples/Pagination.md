---
title: Pagination
section: components
cssPrefix: pf-c-pagination
---

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import paginationTopExampleRaw from '!!raw-loader!./pagination-top-example.hbs';
import paginationTopExpandedExampleRaw from '!!raw-loader!./pagination-top-expanded-example.hbs';
import paginationBottomExampleRaw from '!!raw-loader!./pagination-bottom-example.hbs';
import paginationTopDisabledExampleRaw from '!!raw-loader!./pagination-top-disabled-example.hbs';
import PaginationTopExample from './pagination-top-example.hbs';
import PaginationTopExpandedExample from './pagination-top-expanded-example.hbs';
import PaginationBottomExample from './pagination-bottom-example.hbs';
import PaginationTopDisabledExample from './pagination-top-disabled-example.hbs';
import paginationTopExampleDoc from '../docs/pagination-top-example.md';
import paginationBottomExampleDoc from '../docs/pagination-bottom-example.md';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const paginationTopExample = PaginationTopExample();
  const paginationTopExpandedExample = PaginationTopExpandedExample();
  const paginationBottomExample = PaginationBottomExample();
  const paginationTopDisabledExample = PaginationTopDisabledExample();
  const headingText = 'Pagination';

  return (
    <Documentation data={props} docs={docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example
        heading="Pagination top"
        handlebars={paginationTopExampleRaw}
        fullPageOnly="true"
        docs={paginationTopExampleDoc}
      >
        {paginationTopExample}
      </Example>
      <Example heading="Pagination top expanded" handlebars={paginationTopExpandedExampleRaw} fullPageOnly="true">
        {paginationTopExpandedExample}
      </Example>
      <Example
        heading="Pagination bottom"
        handlebars={paginationBottomExampleRaw}
        fullPageOnly="true"
        docs={paginationBottomExampleDoc}
      >
        {paginationBottomExample}
      </Example>
      <Example heading="Pagination top disabled" handlebars={paginationTopDisabledExampleRaw} fullPageOnly="true">
        {paginationTopDisabledExample}
      </Example>
    </Documentation>
  );
};
```

The top pagination displays an [options menu](/components/OptionsMenu/examples/) to select the number of items to show per page on a desktop screen, and on narrower viewports, the options menu is replaced with an element showing the currently visible items along with the total number of pages.

The examples are shown in a full page preview to demonstrate the responsive behavior at different breakpoints.


Unlike the top pagination, the bottom pagination does not change in a responsive view and the options menu persists on all viewports.

Note: `<button>` or `<a>` elements can be used in `.pf-c-pagination__nav-page-select`.

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label`  | `.pf-c-pagination__nav` |  Provides an accessible name for pagination navigation element. **Required** |

## Pagination nav input

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `type="number"` | `.pf-c-pagination` > `.pf-c-form-control` | Defines a field as a number. **Required** |
| `value` | `.pf-c-pagination__nav-page-select` > `.pf-c-form-control` | Provides initial integer value. **Required** |
| `min` | `.pf-c-pagination__nav-page-select` > `.pf-c-form-control` | Provides minimum integer value. **Required** |
| `max` | `.pf-c-pagination__nav-page-select` > `.pf-c-form-control` | Provides max integer value. **Required** |

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-pagination` | `<div>` |  Initiates pagination. |
| `.pf-c-pagination__current` | `<div>` |  Initiates element to display currently displayed items for use in responsive view. Only needed for default pagination, not `.pf-m-footer`. |
| `.pf-c-pagination__total-items` | `<div>` | Initiates element to replace the options menu on mobile. |
| `.pf-c-pagination__nav` | `<nav>` |  Initiates pagination nav. |
| `.pf-c-pagination__nav-page-select` | `<div>` |  Initiates pagination nav page select. |
| `.pf-c-pagination__menu-text` | `<span>` | Indicates text in menu dropdown. |
| `.pf-m-footer` | `.pf-c-pagination` | Modifies for bottom/footer pagination component styles. |
