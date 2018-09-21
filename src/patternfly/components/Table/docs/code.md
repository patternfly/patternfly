## Overview

Because the table component is not used for layout and presents tabular data only, it requires the use of `role="grid"`. Expandable table content (`.pf-c-table__expandable-content`) is placed within a singular `<td>` per expandable row, that can span multiple columns.

## Sortable Tables

Table columns may shift when expanding/collapsing. To address this, set `.pf-m-fit-content`, or assign a width `.pf-m-width-[width]` to the corresponding `<th>`defining the column or `<td>` within the column. Width values are `[10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90]` or `max`.

## Table Header Cells
By default, all table header cells are set to `white-space: nowrap`. If a `<th>`'s content needs to wrap, apply `.pf-m-wrap`.

## Implementation Support
- One expandable toggle button, positioned in the first cell of an non-expandable row, preceding an expandable row.
- One checkbox positioned in the first or second cell of a non-expandable row, preceding an expandable row.
- One action button, positioned at the end of any row of a non-expandable row.
- Basic table layout.
- Compact table layout

Role="grid":
Applying `role="grid"` to tables enhances keyboard navigation for desktop viewports, however in mobile viewports, this can cause an unexpected interaction. Therefore, for mobile devices, it is recommended that `role="grid"` be removed.


## Responsive layout modifiers

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-m-grid-md`, `.pf-m-grid-lg`  | `.pf-c-table`   | Changes tabular layout to responsive, grid based layout as suffixed breakpoint. |
| `.pf-m-grid`  | `.pf-c-table`   | Changes tabular layout to responsive, grid based layout. This approach requires JavaScript to set this class at some prescribed viewport width value. |

## Extra modifiers

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-m-wrap`  | `<th>`, `<td>` | Modifies content to wrap. |
