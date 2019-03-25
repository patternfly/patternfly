## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `role` or `aria` | `pf-c-toolbar` |  accessibility notes. |


## Usage

| Class | Applied To | Outcome |
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
