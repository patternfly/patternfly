## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `for` | `<label>` |  Each `<label>` must have a `for` attribute that matches its form field id. **Required** |
| `id` | `<input type="radio/checkbox/text">`, `<select>`, `<textarea>` |  Each `<form>` field must have an `id` attribute that matches its label's `for` value. **Required** |
| `required` | `<input>`, `<select>`, `<textarea>` | Required fields must include these attributes. |
| `id="{helper_text_id}"` | `.pf-c-form__helper-text` | Form fields with related `.pf-c-form__helper-text` require this attribute. Usage `<p class="pf-c-form__helper-text" id="{helper_text_id}">`.  |
| `aria-describedby="{helper_text_id}"` | `<input>`, `<select>`, `<textarea>` | Form fields with related `.pf-c-form__helper-text` require this attribute. Usage `<input aria-describedby="{helper_text_id}">`.  |
| `aria-invalid="true" aria-describedby="{helper_text_id}"` | `<input>`, `<select>`, `<textarea>` |  When form validation fails `aria-describedby` is used to communicate the error to the user. These attributes need to be handled with Javascript so that `aria-describedby` only references help text that explains the error, and so that `aria-invalid="true"` is only present when validation fails. For proper styling of errors `aria-invalid="true"` is required. |
| `aria-hidden="true"` | `.pf-c-form__label-required` |  Hides the required indicator from assistive technologies. |


## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-form` | `<form>` |  Initiates a standard form. **Required** |
| `.pf-c-form__label` | `<label>` |  Initiates a form label. **Required** |
| `.pf-c-form__label-text` | `<span>` |  Initiates a form label text. **Required** |
| `.pf-c-form__label-required` | `<span>` |  Initiates a form label required indicator. |
| `.pf-c-form__helper-text` | `<span>` |  Initiates a form helper text block. |
| `.pf-c-form__group` | `<div>` |  Wraps form fields `<label>` + `<field>` + `.form-helper-text`. |
| `.pf-c-form__horizontal-group` | `<div>`| Wraps `.pf-c-form-control` when using `.pf-m-horizontal` on `.pf-c-form` to provide proper spacing for longer labels. |
| `.pf-c-form__actions` | `<div>` | Iniates a row of actions. |
| `.pf-m-action` | `.pf-c-form__group` | Modifies form group margin-top. |
| `.pf-m-error` | `.pf-c-form__helper-text`| Modifies text color of helper text. |
| `.pf-m-inactive` | `.pf-c-form__helper-text`| Modifies display of helper text to none. |
| `.pf-m-border` | `.pf-c-form__section` | Modifies form element border-bottom. |
| `.pf-m-disabled` | `.pf-c-form__label` | Modifies form label to show disabled state. |
| `.pf-m-align-top` | `.pf-c-form__label` | Modifies form label to align to the top of its parent. |
| `.pf-m-inline` | `.pf-c-form__group` | Modifies form group children to be inline (this is primarily for radio buttons and checkboxes). |
