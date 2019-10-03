---
title: Form
section: components
cssPrefix: pf-c-form
---

## Examples
```hbs title=Vertically-aligned-labels
{{#> form form--id="vertical-align-labels"}}
  {{#> form-group}}
    {{#> form-label form-label--attribute=(concat 'for="' form--id '-vertical-form-name"') required="true"}}
      Name
    {{/form-label}}
    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" id="' form--id '-vertical-form-name" name="' form--id '-vertical-form-name" required')}}
    {{/form-control}}
  {{/form-group}}
{{/form}}
```

```hbs title=Horizontally-aligned-labels
{{#> form form--modifier="pf-m-horizontal" form--id="horizontal-align-labels-1"}}
  {{#> form-group}}
    {{#> form-label form-label--attribute=(concat 'for="' form--id '-horizontal-form-name"') required="true"}}
      Name
    {{/form-label}}
    {{#> horizontal-form-group}}
      {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" id="' form--id '-horizontal-form-name" name="' form--id '-horizontal-form-name" required')}}
      {{/form-control}}
    {{/horizontal-form-group}}
  {{/form-group}}
{{/form}}

<br />

{{#> form form--modifier="pf-m-horizontal" form--id="horizontal-align-labels-2"}}
  {{#> form-group}}
    {{#> form-label form-label--attribute=(concat 'for="' form--id '-horizontal-form-name"')}}
      Information
    {{/form-label}}
    {{#> horizontal-form-group}}
      {{#> form-control controlType="textarea" form-control--attribute=(concat 'type="text" id="' form--id '-horizontal-form-name-2" name="' form--id '-horizontal-form-name-2" aria-label="textarea example"')}}
      {{/form-control}}
    {{/horizontal-form-group}}
  {{/form-group}}
{{/form}}

<br />

{{#> form form--modifier="pf-m-horizontal" form--id="horizontal-align-labels-top"}}
  {{#> form-group}}
    {{#> form-label form-label--modifier="pf-m-no-padding-top" form-label--attribute=(concat 'for="' form--id '-horizontal-form-name"')}}
      Label (no top padding)
    {{/form-label}}
    {{#> horizontal-form-group}}
    {{#> check}}
      {{#> check-input check-input--attribute='type="checkbox" id="alt-form-checkbox1" name="alt-form-checkbox1"'}}{{/check-input}}
      {{#> check-label check-label--attribute='for="alt-form-checkbox1"'}}Option 1{{/check-label}}
    {{/check}}
      {{#> check}}
        {{#> check-input check-input--attribute='type="checkbox" id="alt-form-checkbox2" name="alt-form-checkbox2"'}}{{/check-input}}
        {{#> check-label check-label--attribute='for="alt-form-checkbox2"'}}Option 2{{/check-label}}
      {{/check}}
    {{/horizontal-form-group}}
  {{/form-group}}
{{/form}}
```

```hbs title=Help-text
{{#> form form--id="help-text"}}
  {{#> form-group}}
    {{#> form-label form-label--attribute=(concat 'for="' form--id '-simple-form-name"') required='true'}}
      Name
    {{/form-label}}
    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id '-simple-form-name" name="' form--id '-simple-form-name" aria-describedby="' form--id '-simple-form-name-helper"')}}
    {{/form-control}}
    {{#> form-helper-text form-helper-text--attribute=(concat 'id="' form--id '-simple-form-name-helper" aria-live="polite"')}}
      This is helper text
    {{/form-helper-text}}
  {{/form-group}}
  {{#> form-group}}
    {{#> form-label form-label--attribute=(concat 'for="' form--id '-simple-form-address"') required='true'}}
      Address
    {{/form-label}}
    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id '-simple-form-address" name="' form--id '-simple-form-address" aria-invalid="true" aria-describedby="' form--id '-simple-form-address-helper"')}}
    {{/form-control}}
    {{#> form-helper-text form-helper-text--modifier="pf-m-error" form-helper-text--attribute=(concat 'id="' form--id '-simple-form-address-helper" aria-live="polite"')}}
      This is helper text for an invalid input
    {{/form-helper-text}}
  {{/form-group}}
{{/form}}
```

```hbs title=Action-group
{{#> form}}
  {{#> form-group form-group--modifier="pf-m-action"}}
    {{#> form-actions}}
      {{#> button button--modifier="pf-m-primary" button--IsSubmit="true"}}
        Submit form
      {{/button}}
      {{#> button button--modifier="pf-m-secondary" button--IsReset="true"}}
        Reset form
      {{/button}}
    {{/form-actions}}
  {{/form-group}}
{{/form}}
```

## Documentation
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `for` | `<label>` |  Each `<label>` must have a `for` attribute that matches its form field id. **Required** |
| `id` | `<input type="radio/checkbox/text">`, `<select>`, `<textarea>` |  Each `<form>` field must have an `id` attribute that matches its label's `for` value. **Required** |
| `required` | `<input>`, `<select>`, `<textarea>` | Required fields must include these attributes. |
| `id="{helper_text_id}"` | `.pf-c-form__helper-text` | Form fields with related `.pf-c-form__helper-text` require this attribute. Usage `<p class="pf-c-form__helper-text" id="{helper_text_id}">`.  |
| `aria-describedby="{helper_text_id}"` | `<input>`, `<select>`, `<textarea>` | Form fields with related `.pf-c-form__helper-text` require this attribute. Usage `<input aria-describedby="{helper_text_id}">`.  |
| `aria-invalid="true" aria-describedby="{helper_text_id}"` | `<input>`, `<select>`, `<textarea>` |  When form validation fails `aria-describedby` is used to communicate the error to the user. These attributes need to be handled with Javascript so that `aria-describedby` only references help text that explains the error, and so that `aria-invalid="true"` is only present when validation fails. For proper styling of errors `aria-invalid="true"` is required. |
| `aria-hidden="true"` | `.pf-c-form__label-required` |  Hides the required indicator from assistive technologies. |

### Usage
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
| `.pf-m-no-padding-top` | `.pf-c-form__label` | Removes top padding from the label element for labels adjacent to an element that isn't a form control. |
| `.pf-m-inline` | `.pf-c-form__group` | Modifies form group children to be inline (this is primarily for radio buttons and checkboxes). |
