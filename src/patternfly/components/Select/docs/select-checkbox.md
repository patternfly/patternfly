The checkbox select can select multiple items using checkboxes. The number of items selected is reflected in a badge in the dropdown toggle. The user may clear items by unchecking or using the clear button. Optionally, items may be grouped.

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
| `.pf-c-select-toggle__badge` | `<div>` |  Initiates a container for a badge to indicate the number of items checked. * note: This should contain an unread badge * |
| `.pf-c-select-toggler__clear` | `<button class="pf-m-plain">` |  Initiates a clear button in the toggle. |
| `.pf-c-select-toggle__arrow` | `<i>` |  Initiates the caret to toggle the dropdown. |
| `.pf-c-select__menu` | `<div>` |  Initiates the custom select dropdown menu. |
| `.pf-c-select__menu-item` | `<div class="pf-c-check">` |  Initiates the items in the custom select dropdown menu. |
| `.pf-c-form` | `<form>` |  Initiates a form for the items in a checkbox select. |
| `.pf-c-form__fieldset` | `<fieldset>` |  Initiates a fieldset for the items in a checkbox select. |
| `.pf-c-select__menu-group` | `<div>` |  Initiates a group within a custom select menu. |
| `.pf-c-select__menu-group-title` | `<div>` |  Initiates a title for a group with a custom select menu. |
