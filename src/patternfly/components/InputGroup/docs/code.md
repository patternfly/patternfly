## Overview
Use the input group to extend form controls by adding text, buttons, dropdowns, etc.

## Accessibility
When using the `pf-c-input-group` always ensure labels are used outside the input group with the `.pf-u-sr-only` class applied. You can also make use of the `aria-describedby`, `aria-label`, or `aria-labelledby` attributues. For more information on accessibility and forms see the <a href="/components/form/examples/">form component</a>.

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-describedby` | `pf-c-form-control` |  When using `.pf-c-input-group__text` or `.pf-c-input-group__action` make use of this on the input field. |


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-input-group` | `<div>` |  Iniaties the input group. **Required** |
| `.pf-c-input-group__text` | `<span>` |  Iniaties the input group text. This can be used to show text, radio, or check boxes. |
| `.pf-c-input-group__action` | `<button>, <label>` |  Iniaties the input group action. This can be used to show action icons such as dismiss, info, or calendar. |
| `.pf-m-align-right` | `.pf-c-input-group__action` |  Aligns the action icon to the right of the input |
| `.pf-m-align-left` | `.pf-c-input-group__action` |  Aligns the action icon to the left of the input |