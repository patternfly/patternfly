---
title: Table
section: components
---

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import tableSimpleExampleRaw from '!raw!./table-simple-example.hbs';
import tableSortableExampleRaw from '!raw!./table-sortable-example.hbs';
import tableSimpleWithCheckboxesExampleRaw from '!raw!./table-simple-with-checkboxes-example.hbs';
import tableExpandableExampleRaw from '!raw!./table-expandable-example.hbs';
import tableCompactExampleRaw from '!raw!./table-compact-example.hbs';
import tableCompactNoBorderRowsExampleRaw from '!raw!./table-compact-no-border-rows-example.hbs';
import tableCompactExpandableExampleRaw from '!raw!./table-compact-expandable-example.hbs';
import tableWidthExampleRaw from '!raw!./table-width-example.hbs';
import tableCompoundExpansionExampleRaw from '!raw!./table-compound-expansion-example.hbs';
import tableHiddenVisibleExampleRaw from '!raw!./table-hidden-visible-example.hbs';
import tableHeadersWrapExampleRaw from '!raw!./table-headers-wrap-example.hbs';

import TableSimpleExample from './table-simple-example.hbs';
import tableSimpleDoc from '../docs/table-simple.md';

import TableSortableExample from './table-sortable-example.hbs';
import tableSortableDoc from '../docs/table-sortable.md';

import TableSimpleWithCheckboxesExample from './table-simple-with-checkboxes-example.hbs';
import tableCheckboxesActionsDoc from '../docs/table-checkboxes-actions.md';

import TableExpandableExample from './table-expandable-example.hbs';
import tableExpandableDoc from '../docs/table-expandable.md';

import TableCompactExample from './table-compact-example.hbs';
import tableCompactDoc from '../docs/table-compact.md';

import TableCompactNoBorderRowsExample from './table-compact-no-border-rows-example.hbs';
import tableCompactNoBorderRowsDoc from '../docs/table-compact-no-border-rows.md';
import TableCompactExpandableExample from './table-compact-expandable-example.hbs';
import tableCompactExpandableDoc from '../docs/table-compact-expandable.md';

import TableWidthExample from './table-width-example.hbs';
import tableWidthDoc from '../docs/table-width.md';

import TableCompoundExpansionExample from './table-compound-expansion-example.hbs';
import tableCompoundExpansionDoc from '../docs/table-compound-expansion.md';

import TableHiddenVisibleExample from './table-hidden-visible-example.hbs';
import tableHiddenVisibleDoc from '../docs/table-hidden-visible.md';

import TableHeadersWrapExample from './table-headers-wrap-example.hbs';
import tableHeadersWrapDoc from '../docs/table-headers-wrap.md';

import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const tableSimpleExample = TableSimpleExample();
  const tableSortableExample = TableSortableExample();
  const tableExpandableExample = TableExpandableExample();
  const tableCompactExample = TableCompactExample();
  const tableCompactNoBorderRowsExample = TableCompactNoBorderRowsExample();
  const tableCompactExpandableExample = TableCompactExpandableExample();
  const tableSimpleWithCheckboxesExample = TableSimpleWithCheckboxesExample();
  const tableWidthExample = TableWidthExample();
  const tableCompoundExpansionExample = TableCompoundExpansionExample();
  const tableHiddenVisibleExample = TableHiddenVisibleExample();
  const tableHeadersWrapExample = TableHeadersWrapExample();
  const headingText = 'Table';
  const variablesRoot = 'pf-c-table';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Simple table" handlebars={tableSimpleExampleRaw} docs={tableSimpleDoc} minHeight="2em">
        {tableSimpleExample}
      </Example>
      <Example heading="Sortable table" handlebars={tableSortableExampleRaw} docs={tableSortableDoc}>
        {tableSortableExample}
      </Example>
      <Example
        heading="Table with checkboxes and actions"
        handlebars={tableSimpleWithCheckboxesExampleRaw}
        docs={tableCheckboxesActionsDoc}
      >
        {tableSimpleWithCheckboxesExample}
      </Example>
      <Example heading="Expandable table" handlebars={tableExpandableExampleRaw} docs={tableExpandableDoc}>
        {tableExpandableExample}
      </Example>
      <Example
        heading="Table with compound expansion"
        handlebars={tableCompoundExpansionExampleRaw}
        docs={tableCompoundExpansionDoc}
      >
        {tableCompoundExpansionExample}
      </Example>
      <Example heading="Compact table" handlebars={tableCompactExampleRaw} docs={tableCompactDoc}>
        {tableCompactExample}
      </Example>
      <Example
        heading="Compact table with no borders"
        handlebars={tableCompactNoBorderRowsExampleRaw}
        docs={tableCompactNoBorderRowsDoc}
      >
        {tableCompactNoBorderRowsExample}
      </Example>
      <Example
        heading="Compact expandable table"
        handlebars={tableCompactExpandableExampleRaw}
        docs={tableCompactExpandableDoc}
      >
        {tableCompactExpandableExample}
      </Example>
      <Example heading="Table with width modifiers" handlebars={tableWidthExampleRaw} docs={tableWidthDoc}>
        {tableWidthExample}
      </Example>
      <Example
        heading="Table with hidden/visible breakpoint modifiers"
        handlebars={tableHiddenVisibleExampleRaw}
        docs={tableHiddenVisibleDoc}
      >
        {tableHiddenVisibleExample}
      </Example>
      <Example
        heading="Table with headers that wrap"
        handlebars={tableHeadersWrapExampleRaw}
        docs={tableHeadersWrapDoc}
      >
        {tableHeadersWrapExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

Because the table component is not used for layout and presents tabular data only, it requires the use of `role="grid"`. Expandable table content (`.pf-c-table__expandable-content`) is placed within a singular `<td>` per expandable row, that can span multiple columns.

## Role="grid"

Applying `role="grid"` to tables enhances accessible interaction while in table layout, however the responsive, css grid based layout can cause unexpected interactions. Therefore, for css grid layout, it is recommended that `role="grid"` be removed.

## Sortable tables

Table columns may shift when expanding/collapsing. To address this, set `.pf-m-fit-content`, or assign a width `.pf-m-width-[width]` to the corresponding `<th>` defining the column or `<td>` within the column. Width values are `[10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90]` or `max`.

## Table header cells
By default, all table header cells are set to `white-space: nowrap`. If a `<th>`'s content needs to wrap, apply `.pf-m-wrap`.

## Implementation support
- One expandable toggle button, positioned in the first cell of a non-expandable row, preceding an expandable row.
- One checkbox, positioned in the first or second cell of a non-expandable row.
- One action button, positioned in the last cell of a non-expandable row.
- Tabular data.
- Compact presentation modifier (not compatible with expandable table).

## Responsive layout modifiers

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-grid-md`, `.pf-m-grid-lg`, `.pf-m-grid-xl`, `.pf-m-grid-2xl` | `.pf-c-table` | Changes tabular layout to responsive, grid based layout at suffixed breakpoint. |
| `.pf-m-grid` | `.pf-c-table` | Changes tabular layout to responsive, grid based layout. This approach requires JavaScript to set this class at some prescribed viewport width value. |

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="grid"` | `.pf-c-table` | Identifies the element that serves as the grid widget container. **Required** |
| `aria-label` | `.pf-c-table` | Provides an accessible name for the table when a descriptive `<caption>` or `<h*>` is not available. **Required in the absence of `<caption>` or `<h*>`** |
| `data-label="[td description]"` | `<td>` | This attribute replaces table header in mobile viewport. It is rendered by `::before` pseudo element. |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-table` | `<table>` | Initiates a table element. **Required** |
| `.pf-m-center` | `<th>`, `<td>` | Modifies cell to center its contents. |
| `.pf-c-table__caption` | `<caption>` | Initiates a table caption. |

**All simple table accessibility and usage requirements apply.**

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-sort=[ascending or descending]` | `.pf-c-table__sort` | Indicates if columns in a table are sorted in ascending or descending order. For each table, authors __SHOULD__ apply aria-sort to only one header at a time. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-table__sort` | `<th>` | Initiates a sort table cell. **Required for sortable table columns** |
| `.pf-m-selected` | `.pf-c-table__sort` | Modifies for sort selected state. **Required for sortable table columns** |
| `.pf-c-table__sort-indicator` | `.pf-c-table__sort > button > span` | Initiates a sort indicator. **Required for sortable table columns** |
| `.fa-arrows-alt-v` | `.pf-c-table__sort > button > span > .fas` | Initiates icon within unsorted, sortable table header. **Required for sortable table columns** |
| `.fa-long-arrow-alt-up` | `.pf-c-table__sort > button > span > .fas` | Initiates icon within ascending sorted and selected, sortable table header. **Required for sortable table columns** |
| `.fa-long-arrow-alt-down` | `.pf-c-table__sort > button > span > .fas` | Initiates icon within descending sorted and selected, sortable table header. **Required for sortable table columns** |


**All simple table accessibility and usage requirements apply**

**All sortable table accessibility and usage requirements apply**
Note: When including interactive elements in a table, the primary, descriptive cell in the corresponding row is a `<th>`, rather than a `<td>`. In this example, 'Node 1' and 'Node 2 siemur/test-space' are `<th>`s.

Note: When header cells are empty or they contain interactive elements, `<th>` should be replaced with `<td>`.


### Thead accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="[descriptive text]"` | `.pf-c-table__check input[type="checkbox"]` | Provides an accessible name for the checkbox. **Required** |

### Tbody accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-labelledby="[row_header_id]"` or `aria-label="[descriptive text]` | `.pf-c-table__check input[type="checkbox"]` | Provides an accessible name for the checkbox. **Required** |
| `id` | row header `<th>` > `*` | Provides an accessible description for the checkbox. **Required if using `aria-labelledby` for `.pf-c-table__check input[type="checkbox"]`** |


### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-table__check` | `<th>`, `<td>` | Initiates a check table cell. |
| `.pf-c-table__action` | `<th>`, `<td>` | Initiates an action table cell. |

### Table expandable notes

**All simple table accessibility and usage requirements apply.**

**All sortable table accessibility and usage requirements apply.**

**All checkbox/action button accessibility and usage requirements apply.**

Note: To apply padding to `.pf-c-table__expandable-row`, wrap the content in `.pf-c-table__expandable-row-content`. For no padding add `.pf-m-no-padding` to `.pf-c-table__expandable-row` > `<td>`

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-c-table__expandable-row` | Indicates that the expandable content is hidden. **Required** |
| `aria-expanded="true"` | `.pf-c-table__toggle` > `.pf-c-button` | Indicates that the row is visible. **Required**|
| `aria-label="[descriptive text]"` | `.pf-c-table__toggle` > `.pf-c-button` | Provides an accessible name for toggle button. **Required**|
| `aria-labelledby="[title_cell_id] [button_id]"` | `.pf-c-table__toggle` > `.pf-c-button` | Provides an accessible description for toggle button. **Required** |
| `id="[button_id]"` | `.pf-c-table__toggle` > `.pf-c-button` | Provides a reference for toggle button description. **Required** |
| `aria-controls="[id of element the button controls]"` | `.pf-c-table__toggle` > `.pf-c-button` | Identifies the expanded content controlled by the toggle button. **Required** |


### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-table__toggle-icon` | `<i>` | Initiates a table toggle icon. |
| `.pf-c-table__expandable-row` | `<tr>` | Initiates an expandable row. |
| `.pf-c-table__expandable-row-content` | `.pf-c-table__expandable-row` > `<td>` > `<div>` | Initiates an expandable row content wrapper. |
| `.pf-m-expanded` | `.pf-c-table__toggle` > `.pf-c-button`, `.pf-c-table__expandable-row` | Modifies for expanded state. |
| `.pf-m-no-padding` | `.pf-c-table__expandable-row` > `<td>` | Modifies the expandable row to have no padding. |

### Table expandable notes

**All simple table accessibility and usage requirements apply.**

**All sortable table accessibility and usage requirements apply.**

**All checkbox/action button accessibility and usage requirements apply.**


### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-compact` | `.pf-c-table` | Modifies for a compact table. |

### Table expandable notes

**All compact table accessibility and usage requirements apply.**

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-no-border-rows` | `.pf-c-table.pf-m-compact` | Modifies to remove borders between rows. **Note: Can not be used with `.pf-m-expandable`.** |

### Table expandable notes

**All compact table accessibility and usage requirements apply.**

**All expandable table accessibility and usage requirements apply.**


| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-expandable` | `.pf-c-table.pf-m-compact` | Indicates that the table has expandable rows. **Note: Can not be used with `.pf-m-no-border-rows`.** |

### Table expandable notes

**All simple table accessibility and usage requirements apply.**

**All sortable table accessibility and usage requirements apply.**

**All checkbox/action button accessibility and usage requirements apply.**


### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-width-[10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, or 90]` | `<th>`, `<td>` | Percentage based modifier for `th` and `td` widths. **Recommended for sortable title cell** |
| `.pf-m-width-max` | `<th>`, `<td>` | Percentage based modifier for `th` and `td` maximum width. |
| `.pf-m-fit-content` | `<th>`, `<td>` | Percentage based modifier for `th` and `td` minimum width with no text wrapping. |

### Table compound expansion notes

**All simple table accessibility and usage requirements apply.**

**All sortable table accessibility and usage requirements apply.**

**All checkbox/action button accessibility and usage requirements apply.**

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-c-table__expandable-row` | Indicates that the expandable content is hidden. **Required** |
| `aria-expanded="true"` | `.pf-c-table__compound-expansion-toggle` > `.pf-c-button` | Indicates that the row is visible. **Required**|
| `aria-controls="[id of element the button controls]"` | `.pf-c-table__compound-expansion-toggle` > `.pf-c-button` | Identifies the expanded content controlled by the toggle button. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-expanded` | `<tbody>`, `.pf-c-table__compound-expansion-toggle` > `.pf-c-button` | Modifies a tbody with a row and an expandable row. |
| `.pf-c-table__compound-expansion-toggle` | `<td>` | Modifies a `<td>` on active/focus. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-hidden{-on-[breakpoint]}` | `.pf-c-table tr > *` | Hides a table cell at a given breakpoint, or hides it at all breakpoints with `.pf-m-hidden`. **Note: Needs to apply to all cells in the column you want to hide.** |
| `.pf-m-visible{-on-[breakpoint]}` | `.pf-c-table tr > *` | Shows a table cell at a given breakpoint. |

### Table expandable notes

**All simple table accessibility and usage requirements apply.**

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-wrap` | `<th>`, `<td>` | Modifies content to wrap. |