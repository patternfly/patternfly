The Single Select Typeahead should be used when the user is selecting one option from a list of items with the option to narrow the list by typing from the keyboard. Selected items are removed from the list. The user can clear the selection and restore the placeholder text.

## Accessibility

*This section to be updated once the React implementation is complete.*

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `role` or `aria` | `pf-c-select` |  accessibility notes. |
*Note:* The attribute `aria-pressed="true"` should be set programmatically to the active item.


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-select` | `<div>` |  Initiates a custom select. |
| `.pf-c-select__toggle` | `<div>` |  Initiates a custom toggle. |
| `.pf-c-select__toggle-wrapper` | `<div>` |  Initiates a custom select toggle wrapper. |
| `.pf-c-select__toggle-typeahead` | `input.pf-c-form-control` |  Initiates the input field for typeahead. |
| `.pf-c-select__toggle-clear` | `button.pf-m-plain` |  Initiates a clear button in the toggle. |
| `.pf-c-select__toggle-button` | `<button>` | Initiates a toggle button. |
| `.pf-c-select__toggle-arrow` | `<i>` |  Initiates the caret icon. |
| `.pf-c-select__menu` | `<ul>` |  Initiates the custom select dropdown menu. |
| `.pf-c-select__menu-item` | `<li>` |  Initiates the items in the custom select dropdown menu. |
| `.pf-m-expanded` | `.pf-c-select` |  Indicates the select is expanded. |
| `.pf-m-typeahead` | `.pf-c-select__toggle` |  Indicates the select has a typeahead. |
