## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `for` | `<label id="{for}">` |  Each `<label>` must have a `for` attribute that matches its form field id. **Required** |
| `id` | `all form inputs, radios, checkboxes, selects, textareas...` |  Each `<form>` field must have an `id` attribute that matches its labels `for` value. **Required** |
| `data-required="true"` | `<label>` |  Labels associated with required fields must include this attribute. |
| `required aria-required="true"` | `<input>` | Required fields must include these attributes. |
| `id="{helper_text_id}"` | `.pf-c-form__helper-text` | Form fields with related `.pf-c-form__helper-text` require this attribute. Usage `<p class="pf-c-form__helper-text" id="{helper_text_id}" ...>`.  |
| `aria-describedby="{helper_text_id}"` | `<input>` | Form fields with related `.pf-c-form__helper-text` require this attribute. Usage `<input aria-describedby="{helper_text_id}" ...>`.  |
| `aria-invalid="true" aria-errormessage="{helper_text_id}"` | `<input>` | Where form validation fails, `aria-errormessage` is used instead of `aria-describedby`. |


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-form` | `<form>` |  Initiates a standard form. **Required** |
| `.pf-c-form__label` | `<label>` |  Initiates a form label. **Required** |
| `.pf-c-form__input` | `<input>` |  Initiates a form input. **Required** |
| `.pf-c-form__checkbox` | `<input type="checkbox">` |  Initiates a form checkbox. **Required** |
| `.pf-c-form__radio` | `<input type="radio">` |  Initiates a form radio. **Required** |
| `.pf-c-form__select` | `<select>` |  Initiates a form radio. **Required** |
| `.pf-c-form__textarea` | `<textarea>` |  Initiates a form textarea. **Required** |
| `.pf-c-form__datalist` | `<input list="...">` |  Initiates a form datalist input. **Required** |
| `.pf-c-form__datalist-list` | `<datalist>` |  Initiates a form datalist. **Required** |
| `.pf-c-form__fieldset` | `<fieldset>` |  Initiates a form fieldset. All related fields must be nested within a fieldset. |
| `.pf-c-form__legend` | `<legend>` |  Initiates a form legend. All `<fieldsets>` must have a `<legend>`. **Required** with `<fieldset>`. |
| `.pf-c-form__helper-text` | `<p>` |  Initiates a form helper text block. |
| `.pf-c-form__section` | `<section>`, `<div>` |  Initiates a form section. For larger forms, section grouping may be necessary. This class wraps chunks of code and separates them with padding. |
| `.pf-c-form__group` | `<div>` |  Wraps form fields `<label>` + `<field>` + `.helper-text` __(not checkboxes or radios)__. Form groups should have no more than one of each element type. Form groups can be nested and, for more complex fieldsets, it may be necessary to do so. |
| `.pf-c-form__check` | `<div>` |  Wraps form checkboxes and radios.  **Required** |
| `.pf-c-form__control` | `<div>` |  Wraps form fields and handles generic layout of additional elements within. |
| `.pf-m-required` | `.pf-c-form__label`, `.pf-c-form__input` | Modifies form element border and background-image. |
| `.pf-m-disabled` | `.pf-c-form__label`, `.pf-c-form__label`, `.pf-c-form__input`, `.pf-c-form__checkbox`, `.pf-c-form__radio`, `.pf-c-form__select`, `.pf-c-form__textarea`, `.pf-c-form__datalist`  | Modifies form element color, background-color and box-shadow. |
| `.pf-m-error` | `.pf-c-form__helper-text`, `.pf-c-form__input` | Modifies form element border and background-image. |
| `.pf-m-right` | `.pf-c-form__group > *` | Modifies form element margin-left. |
| `.pf-m-border` | `.pf-c-form__section` | Modifies form element border-bottom. |
| `.pf-visually-hidden` | `<label>`, `<legend>` |  Visually hides a label or legend. Most common use case: A section title defines an adjacent radio or checkbox group (fielset), the fieldset legend becomes redundent, but is still necessary for assitive technology. |
| `.pf-subsection-title` | `.pf-c-title` | Initiates a form subsection [title](https://pf-next.com/components/Title/examples/). |
