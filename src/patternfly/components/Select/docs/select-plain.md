The plain select variation should be used when you do not want a border applied to the select toggle.

## Accessibility

*This section to be updated once the React implementation is complete.*

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role` or `aria` | `.pf-c-select` |  accessibility notes. |
*Note:* The attribute `aria-pressed="true"` should be set programmatically to the active item.


## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select` | `<div>` |  Initiates a custom select. |
| `.pf-c-select__toggle` | `<button>` |  Initiates a custom toggle. |
| `.pf-c-select__toggle-wrapper` | `<div>` |  Initiates a custom select toggle wrapper. |
| `.pf-c-select__toggle-arrow` | `<i>` |  Initiates the caret to toggle the dropdown. |
| `.pf-c-select__menu` | `<ul>` |  Initiates the custom select dropdown menu. |
| `.pf-c-select__menu-item` | `<li>` |  Initiates the items in the custom select dropdown menu. |
| `.pf-c-select__menu-item-icon` | `<i>` |  Initiates the selected item icon. |
| `.pf-m-expanded` | `.pf-c-select` |  Indicates the select is expanded. |
| `.pf-m-plain` | `.pf-c-select__toggle` |  Modifies to display the toggle with no border. |
| `.pf-m-selected` | `.pf-c-select__menu-item` |  Indicates the menu item is selected. |
