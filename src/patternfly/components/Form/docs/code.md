## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `for` | `<label>` |  Each `<label>` must have a `for` attribute that matches its form field id. **Required** |
| `id` | `<input type="radio/checkbox/text">`, `<select>`, `<textarea>` |  Each `<form>` field must have an `id` attribute that matches its label's `for` value. **Required** |
| `required aria-required="true"` | `<input>`, `<select>`, `<textarea>` | Required fields must include these attributes. |
| `id="{helper_text_id}"` | `.pf-c-form__helper-text` | Form fields with related `.pf-c-form__helper-text` require this attribute. Usage `<p class="pf-c-form__helper-text" id="{helper_text_id}">`.  |
| `aria-describedby="{helper_text_id}"` | `<input>`, `<select>`, `<textarea>` | Form fields with related `.pf-c-form__helper-text` require this attribute. Usage `<input aria-describedby="{helper_text_id}">`.  |
| `aria-invalid="true" aria-errormessage="{helper_text_id}"` | `<input>`, `<select>`, `<textarea>` | Where form validation fails, `aria-errormessage` is used instead of `aria-describedby`. `aria-errormessage` and `aria-invalid="true"` are only present when validation fails so this needs to be handled with Javascript. For proper styling of errors `aria-invalid="true"` is required.|


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-form` | `<form>` |  Initiates a standard form. **Required** |
| `.pf-c-form__label` | `<label>` |  Initiates a form label. **Required** |
| `.pf-c-form__helper-text` | `<p>` |  Initiates a form helper text block. |
| `.pf-c-form__group` | `<div>` |  Wraps form fields `<label>` + `<field>` + `.form-helper-text`. |
| `.pf-c-form__horizontal-group` | `<div>`| Wraps `.pf-c-form-control` when using `.pf-m-horizontal` on `.pf-c-form` to provide proper spacing for longer labels. |
| `.pf-m-error` | `.pf-c-form__helper-text`| Modifies text color of helper text. |
| `.pf-m-inactive` | `.pf-c-form__helper-text`| Modifies display of helper text to none. |
| `.pf-m-border` | `.pf-c-form__section` | Modifies form element border-bottom. |
| `.pf-m-disabled` | `.pf-c-form__label` | Modifies form label to show disabled state. |
| `.pf-m-inline` | `.pf-c-form__group` | Modifies form group children to be inline (this is primarily for radio buttons and checkboxes). |
| `.pf-m-action` | `.pf-c-form__group` | Modifies form group margin-top. |