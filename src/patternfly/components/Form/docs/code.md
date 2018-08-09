## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `for` | `<label>` |  Each `<label>` must have a `for` attribute that matches its form field id. **Required** |
| `id` | `<input type="radio/checkbox/text">`, `<select>`, `<textarea>` |  Each `<form>` field must have an `id` attribute that matches its label's `for` value. **Required** |
| `required aria-required="true"` | `<input>`, `<select>`, `<textarea>` | Required fields must include these attributes. |
| `id="{helper_text_id}"` | `.pf-c-form__helper-text` | Form fields with related `.pf-c-form__helper-text` require this attribute. Usage `<p class="pf-c-form__helper-text" id="{helper_text_id}" ...>`.  |
| `aria-describedby="{helper_text_id}"` | `<input>`, `<select>`, `<textarea>` | Form fields with related `.pf-c-form__helper-text` require this attribute. Usage `<input aria-describedby="{helper_text_id}" ...>`.  |
| `aria-invalid="true" aria-errormessage="{helper_text_id}"` | `<input>`, `<select>`, `<textarea>` | Where form validation fails, `aria-errormessage` is used instead of `aria-describedby`. |


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-form` | `<form>` |  Initiates a standard form. **Required** |
| `.pf-c-form__label` | `<label>` |  Initiates a form label. **Required** |
| `.pf-c-form__fieldset` | `<fieldset>` |  Initiates a form fieldset. All related fields must be nested within a fieldset. |
| `.pf-c-form__legend` | `<legend>` |  Initiates a form legend. All `<fieldsets>` must have a `<legend>`. **Required** with `<fieldset>`. |
| `.pf-c-form__helper-text` | `<p>` |  Initiates a form helper text block. |
| `.pf-c-form__section` | `<section>`, `<div>` |  Initiates a form section. For larger forms, section grouping may be necessary. This class wraps chunks of code and separates them with padding. |
| `.pf-c-form__group` | `<div>` |  Wraps form fields `<label>` + `<field>` + `.helper-text` __(not checkboxes or radios)__. Form groups should have no more than one of each element type. Form groups can be nested and, for more complex fieldsets, it may be necessary to do so. |
| `.pf-m-error` | `.pf-c-form__helper-text`, `.pf-c-form__input` | Modifies form element border and background-image. |
| `.pf-m-right` | `.pf-c-form__group > *` | Modifies form element margin-left. |
| `.pf-m-border` | `.pf-c-form__section` | Modifies form element border-bottom. |
| `.pf-visually-hidden` | `<label>`, `<legend>` |  Visually hides a label or legend. Most common use case: A section title defines an adjacent radio or checkbox group (fielset), the fieldset legend becomes redundent, but is still necessary for assitive technology. |
