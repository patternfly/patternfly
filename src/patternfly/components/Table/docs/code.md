## Overview

The table component is used to present tabular data. Simple tables have no interactive elements. Tables containing checkboxes, button, editable cells, etc require the application of `role="grid"` to `<table>`. Expandable table content (`.pf-c-table__expandable-content`) is placed within `<td>`s, within expandable rows.
This is done to maintain alignment and spacing provided by the table's structure. `<td>`s within expandable rows can span multiple columns.

Expandable tables - table columns may shift when expanding/collapsing. To address this, set `.pf-m-fit-content`, or assign a width `.pf-m-width-[width]` to the corresponding `<th>` defining the column. Width values are `[10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90]`.

By default, all table header cells are set to `white-space: nowrap`. If a `<th>`'s content needs to wrap, apply `.pf-m-wrap`.

**This component implementation supports:**
- One expandable button, positioned in the first cell of an expandable row.
- One checkbox positioned in the first cell of a non-expandable row or the second cell of an expandable row.
- One action button, positioned at the end of any row.
- Basic table layout.
- Compact table layout


Role="grid":
Applying `role="grid"` to tables enhances keyboard navigation. We recommend applying `role="grid"` to all tables, however, in mobile viewports, this can cause unexpected interaction. Therefore, for mobile accessible devices, it is recommended that `role="grid"` be removed.

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `display="grid"` | `.pf-c-table` | Identifies the element that serves as the grid widget container. **Required if table contains interactive elements** |
| `display="treegrid"` | `.pf-c-table` | Identifies the element that serves as the grid widget whose rows can be expanded and collapsed. **Required if table contains expandable/collapsible rows** |
| `aria-label` | `.pf-c-table` | Provides an accessible name for the table when a descriptive `<caption>` or `<h*>` is not available. **Required in the abscence of `<caption>` or `<h*>`** |
| `aria-hidden=[true/false]` | `.pf-c-table__expandable-row` | Indicates whether the element is exposed to an accessibility API. **Required for expandable rows** |
| `aria-expanded=[true/false]` | `<tr>` | Indicates whether the next sibling row is currently expanded or collapsed. **Required** |
| `aria-sort=[ascending or descending]` | `.pf-c-table__sort` | Indicates if items in a table or grid are sorted in ascending or descending order. For each table or grid, authors __SHOULD__ apply aria-sort to only one header at a time. **Required**|
| `data-label="[td description]"` | `<td>` | This attribute replaces table header in mobile viewport. It is rendered by `::before` pseudo element. |
| `role="button"` | `.pf-c-table__sort > span` | Indicates that a `<th>` is clickable; implies sort. |
| `aria-level={int}` | `<tr>` | Defines the hierarchical level of an element within a structure. **Required for treegrid** |
| `aria-posinset={int}` | `<tr>` | Defines an element's number or position in the current set of listitems or treeitems. **Required if all elements in the set are not present in the DOM** |
| `aria-setsize={int}` | `<tr>` | Defines the number of items in the current set of listitems or treeitems. **Required if all elements in the set are not present in the DOM** |


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-table`                           | `<table>`                                           | Initiates a table element. |
| `.pf-c-table__caption`                  | `<caption>`                                         | Initiates a table caption. |
| `.pf-c-table__expandable-row`           | `<tr>`                                              | Initiates an expandable table row element. |
| `.pf-c-table__expandable-row-content`   | `<td>:first-child`                                  | Initiates an expandable table row content container. |
| `.pf-c-table__toggle`                   | `<td>`                                              | Initiates a toggle table cell. |
| `.pf-c-table__check`                    | `<td>`                                              | Initiates a check table cell. |
| `.pf-c-table__action`                   | `<td>`                                              | Initiates an action table cell. |
| `.pf-c-table__sort`                     | `<td>`                                              | Initiates a sort table cell. |
| `.pf-c-table__sort-indicator`           | `<span>`                                            | Initiates a sort indicator. |
| `.pf-c-table__icon-inline`              | `<span>`                                            | Initiates an icon with text container. |
| `.pf-m-ascending`                       | `.pf-c-table__sort`                                 | Modifies for sort ascending state. |
| `.pf-m-descending`                      | `.pf-c-table__sort`                                 | Modifies for sort descending state. |
| `.pf-m-expanded `                       | `.pf-c-table__expandable-row`, `.pf-m-toggle`       | Modifies for expanded state. |
| `.pf-m-compact`                         | `.pf-c-table`                                       | Modifies for table cell padding. |
| `.pf-m-shrink`                          | `<td>`                                              | Modifies for table cell width and padding. |
| `.pf-m-fit-content`                     | `<td>`                                              | Modifies for table cell width. |
| `.pf-m-blank`                           | `<td>`                                              | Modifies for blank table cell. |
| `.pf-m-wrap`                            | `<td>`                                              | Modifies `<th>` text wrapping. |
| `.pf-m-width-[10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90]` | `<td>`                   | Modifies for table cell width. |
