## Overview

Only if needed write a short description with implementation notes. Design and interaction notes are already written on the design specs, don't repeat information.

For example for buttons: Always add a modifier class to add color to the button. Never use the class `.btn` on its own.

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `for` | `<label id="{for}">` |  Each `<label>` must have a `for` attribute that matches its form element id. |
| `id` | `all form inputs, radios, checkboxes, selects, textareas...` |  Each `<form>` element must have an `id` attribute that matches its label's `for` value.  |
| `role` or `aria` | `pf-d-simple-form-demo` |  accessibility notes. |
| `role` or `aria` | `pf-d-simple-form-demo` |  accessibility notes. |
| `role` or `aria` | `pf-d-simple-form-demo` |  accessibility notes. |


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-form` | `<form>` |  Initiates a standard form. |
| `.pf-c-form__label` | `<label>` |  Initiates a form label. |
| `.pf-c-form__fieldset` | `<fieldset>` |  Initiates a form fieldset. All related fields must be nested within a fieldset. |
| `.pf-c-form__legend` | `<legend>` |  Initiates a form legend. All `<fieldsets>` must have a `<legend>`. |
| `.pf-c-form__check` | `<div>` |  Initiates a form check. Form checks always wrap a `<input type="checkbox">` or `<input type="radio">`. |
| `.pf-c-form__checkbox` | `<input type="checkbox">` |  Initiates a form checkbox. |
| `.pf-c-form__radio` | `<input type="radio">` |  Initiates a form radio. |
| `.pf-c-form__group` | `<div>` |  Initiates a form group. Form groups always wrap a `<label>` + `<field>` + `.helper-text`. |
| `.pf-c-form__control` | `<div>` |  Initiates a form   |
| `.pf-c-form__helper-text` | `<p>` |  Initiates a form   |
| `.pf-m-required` | `.pf-c-form__label`, `.pf-c-form__input[type="text"]` |  Initiates a  |
| `.pf-m-disabled` | `.pf-c-form__label`, `.pf-c-form__label`, `.pf-c-form__input`, `.pf-c-form__checkbox`, `.pf-c-form__radio`, `.pf-c-form__select`, `.pf-c-form__textarea`, `.pf-c-form__datalist`  |  Initiates a  |
| `.pf-m-error` | `.pf-c-form__input[type="text"]`, `.pf-c-form__helper-text` |  Initiates a  |
