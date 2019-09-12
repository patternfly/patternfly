The single select typeahead should be used when the user is selecting one option from a list of items with the option to narrow the list by typing from the keyboard. Selected items are removed from the list. The user can clear the selection and restore the placeholder text.

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-selected="true"` | `.pf-c-select__menu-item` | Should be set programmatically to indicate the active item. |

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select` | `<div>` |  Initiates the select component. |
| `.pf-c-select__toggle` | `<div>` |  Initiates the select toggle. |
| `.pf-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper. |
| `.pf-c-select__toggle-typeahead` | `input.pf-c-form-control` |  Initiates the input field for typeahead. |
| `.pf-c-select__toggle-clear` | `button.pf-m-plain` |  Initiates a clear button in the toggle. |
| `.pf-c-select__toggle-button` | `<button>` | Initiates a toggle button. |
| `.pf-c-select__toggle-arrow` | `<i>` |  Initiates the caret icon. |
| `.pf-c-select__menu` | `<ul>` |  Initiates the select dropdown menu. |
| `.pf-c-select__menu-item` | `<li>` |  Initiates the items in the select dropdown menu. |
| `.pf-m-expanded` | `.pf-c-select` |  Indicates the select is expanded. |
| `.pf-m-typeahead` | `.pf-c-select__toggle` |  Indicates the select has a typeahead. |
