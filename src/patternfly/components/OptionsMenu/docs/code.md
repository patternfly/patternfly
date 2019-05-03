## Accessibility

*This section to be updated once the React implementation is complete.*

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role` or `aria` | `pf-c-options-menu` |  accessibility notes. |
*Note:* The attribute `aria-selected="true"` should be set programmatically to the selected item(s).


## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-options-menu` | `<div>` |  Initiates a custom options menu. |
| `.pf-c-options-menu__toggle` | `<button>` |  Initiates a custom toggle. |
| `.pf-c-options-menu__toggle-text` | `<span>` | Initiates a wrapper for toggle text.
| `.pf-c-options-menu__toggle-icon` | `<i>` | Initiates the up/down arrow beside toggle text. |
| `.pf-c-options-menu__toggle-button` | `<button>` | Initiates a custom toggle button for use when `.pf-c-options-menu__toggle` is a `<div>` or non-interactive element. |
| `.pf-c-options-menu__menu` | `<ul>` |  Initiates the custom options-menu dropdown menu. |
| `.pf-c-options-menu__menu-item` | `<li>` |  Initiates the items in the custom options-menu dropdown menu. |
| `.pf-c-options-menu__menu-item-icon` | `<i>` |  Initiates the icon to indicate selected menu items. |
| `.pf-c-options-menu__separator` | `<li>` | Initiates a separator in the menu list. |
| `.pf-m-top` | `.pf-c-options-menu` | Modifies to display the menu above the toggle. |
| `.pf-m-align-right` | `.pf-c-options-menu__menu` | Modifies to display the menu aligned to the right edge of the toggle |
| `.pf-m-expanded` | `.pf-c-options-menu` |  Modifies for the expanded state. |
| `.pf-m-hover` | `.pf-c-options-menu__toggle` | Modifies for the hover state. |
| `.pf-m-active` | `.pf-c-options-menu__toggle` | Modifies for the active state. |
| `.pf-m-focus` | `.pf-c-options-menu__toggle` | Modifies for the focus state. |
| `.pf-m-plain` | `.pf-c-options-menu__toggle` |  Modifies to display the toggle with no border. |
| `.pf-m-text` | `.pf-c-options-menu__toggle` |  For use when the `.pf-c-options-menu__toggle` is a `<div>` or some non-interactive elment, and you're using a custom `.pf-c-options-menu__toggle-button` to toggle the options menu. |
