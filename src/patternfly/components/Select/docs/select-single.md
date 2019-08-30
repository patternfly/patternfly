The single select should be used when the user is selecting an option from a list of items. Although the presentation is similar to the basic dropdown, the underlying HTML and ARIA tag structure is specific to a select list. The selection will replace the default text in the toggle. The selection is highlighted with the list is opened. If the selection is cleared elsewhere (i.e. from the filter bar), the default text is restored.

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-selected="true"` | `.pf-c-select__menu-item` | Should be set programmatically to indicate the active item. |
| `disabled` | `.pf-c-select__toggle` | Disables the dropdown toggle and removes it from keyboard focus. |

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select` | `<div>` |  Initiates the select component. |
| `.pf-c-select__toggle` | `<button>` |  Initiates the select toggle. |
| `.pf-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper. |
| `.pf-c-select__toggle-arrow` | `<i>` |  Initiates the caret to toggle the dropdown. |
| `.pf-c-select__menu` | `<ul>` |  Initiates the select dropdown menu. |
| `.pf-c-select__menu-item` | `<li>` |  Initiates the items in the select dropdown menu. |
| `.pf-c-select__menu-item-icon` | `<i>` |  Initiates the selected item icon. |
| `.pf-m-expanded` | `.pf-c-select` |  Indicates the select is expanded. |
| `.pf-m-selected` | `.pf-c-select__menu-item` |  Indicates the menu item is selected. |
| `.pf-m-disabled` | `div.pf-c-select__toggle` | Modifies to display the select toggle as disabled. This applies to `div.pf-c-select__toggle` and should not be used in lieu of the `disabled` attribute on `button.pf-c-select__toggle`. When this is used, `disabled` should also be added to any form elements in `div.pf-c-select__toggle`|
