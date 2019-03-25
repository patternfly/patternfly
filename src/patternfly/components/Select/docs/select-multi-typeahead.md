The Dropdown Multi Select should be used when the user is selecting multiple items from a list. The user can narrow the list by typing from the keyboard. The List updates while typing. Selected items create a new chip and are removed from the list. The user may clear selections individually or all at once to restore the placeholder.

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
| `.pf-c-select__toggle-wrapper` | `<div>` |  Initiates a custom select toggle wrapper so that chips and input field can wrap together. |
| `.pf-c-chip` | `<div>` |  Initiates a chip. (See [chip component](/components/Check/examples/) for more details) |
| `.pf-c-select__toggle-typeahead` | `input.pf-c-form-control` |  Initiates the input field for typeahead. |
| `.pf-c-select__toggle-clear` | `button.pf-m-plain` |  Initiates a clear button in the toggle. |
| `.pf-c-select__toggle-button` | `<button>` | Initiates a toggle button. |
| `.pf-c-select__toggle-arrow` | `<i>` |  Initiates the caret icon. |
| `.pf-c-select__menu` | `<ul>` |  Initiates the custom select dropdown menu. |
| `.pf-c-select__menu-item` | `<li>` |  Initiates the items in the custom select dropdown menu. |
| `.pf-m-expanded` | `.pf-c-select` |  Indicates the select is expanded. |
| `.pf-m-typeahead` | `.pf-c-select__toggle` |  Indicates the select has a typeahead. |
