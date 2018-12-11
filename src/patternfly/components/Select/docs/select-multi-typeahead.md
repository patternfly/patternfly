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
| `.pf-m-expanded` | `.pf-c-select` |  Indicates the select is expanded. |
| `.pf-c-select__toggle` | `<div>` |  Initiates a custom toggle. |
| `.pf-m-typeahead` | `.pf-c-select__toggle` |  Indicates the select has a typeahead. |
| `.pf-c-select-toggle__wrapper` | `<div>` |  Initiates a custom select toggle wrapper so that chips and input field can wrap together. |
| `.pf-c-pf-c-chip` | `<div>` |  Initiates a chip. (See chip component for more details) |
| `.pf-c-select-toggle__typeahead` | `<input class="pf-c-form-control">` |  Initiates the input field for typeahead. |
| `.pf-c-select-toggle__clear` | `<button class="pf-m-plain">` |  Initiates a clear button in the toggle. |
| `.pf-c-select-toggle__arrow` | `<i>` |  Initiates the caret to toggle the dropdown. |
| `.pf-c-select__menu` | `<ul>` |  Initiates the custom select dropdown menu. |
| `.pf-c-select__menu-item` | `<li>` |  Initiates the items in the custom select dropdown menu. |