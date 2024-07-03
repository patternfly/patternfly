---
id: Form
section: components
subsection: forms
cssPrefix: pf-v6-c-form
---

## Examples
### Vertically aligned labels
```hbs
{{#> form form--id="form-vertical"}}
  {{#> form-group form-group--id=(concat form--id '-name')}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form-group--id '"') required="true"}}
        Name
      {{/form-label}}
      {{> form-group-label-help form-group-label-help--aria-label="More information for name field" form-group-label-help--aria-describedby=form-group--id}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute=(concat 'type="text" id="' form-group--id '" name="' form-group--id '"')}}{{/form-control}}
    {{/form-group-control}}
  {{/form-group}}
{{/form}}
```

### Horizontally aligned labels
```hbs
{{#> form form--modifier="pf-m-horizontal" form--id="form-horizontal"}}
  {{#> form-group form-group--id=(concat form--id '-name')}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form-group--id '"') required=true}}
        Name
      {{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute=(concat 'type="text" id="' form-group--id '" name="' form-group--id '"')}}{{/form-control}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--id=(concat form--id '-info')}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form-group--id '"')}}
        Information
      {{/form-label}}
      {{> form-group-label-help form-group-label-help--aria-label="More information for information field" form-group-label-help--aria-describedby=(concat form-group--id)}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="textarea" form-control--attribute=(concat 'type="text" id="' form-group--id '" name="' form-group--id '" aria-label="Textarea example"')}}{{/form-control}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--id=(concat form--id '-checkbox') form-group--IsCheckGroup=true}}
    {{#> form-group-label form-group-label--modifier="pf-m-no-padding-top"}}
      {{#> form-label}}
        Label (no top padding)
      {{/form-label}}
      {{> form-group-label-help form-group-label-help--aria-label="More information for label field" form-group-label-help--aria-describedby=(concat form-group--id '-legend')}}
    {{/form-group-label}}
    {{#> form-group-control form-group-control--modifier="pf-m-stack"}}
      {{#> check}}
        {{#> check-input check-input--attribute=(concat 'type="checkbox" id="' form-group--id '" name="' form-group--id '"')}}{{/check-input}}
        {{#> check-label check-label--attribute=(concat 'for="' form-group--id '"')}}Option 1{{/check-label}}
      {{/check}}
      {{#> check}}
        {{#> check-input check-input--attribute=(concat 'type="checkbox" id="' form-group--id '2" name="' form-group--id '2"')}}{{/check-input}}
        {{#> check-label check-label--attribute=(concat 'for="' form-group--id '2"')}}Option 2{{/check-label}}
      {{/check}}
    {{/form-group-control}}
  {{/form-group}}
{{/form}}
```

### Horizontal layout at a custom breakpoint
```hbs
{{#> form form--modifier="pf-m-horizontal-on-sm" form--id="form-horizontal-custom-breakpoint"}}
  {{#> form-group form-group--id=(concat form--id '-name')}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form-group--id '"') required=true}}
        Name
      {{/form-label}}
      {{> form-group-label-help form-group-label-help--aria-label="More information for name field" form-group-label-help--aria-describedby=(concat form-group--id)}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute=(concat 'type="text" id="' form-group--id '" name="' form-group--id '"')}}{{/form-control}}
    {{/form-group-control}}
  {{/form-group}}
{{/form}}
```

### Form sections
```hbs
{{#> form form--id="form-section-example"}}
  {{#> form-section form-section--id=(concat form--id '-section-1') form-section--HasNoTitle="true"}}
    {{#> form-group}}
      {{#> form-group-label}}
        {{#> form-label form-label--attribute=(concat 'for="' form-section--id '-input"')}}
          Form section 1 inputs
        {{/form-label}}
      {{/form-group-label}}
      {{#> form-group-control}}
        {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute=(concat 'type="text" id="' form-section--id '-input" name="' form-section--id '-input"')}}{{/form-control}}
      {{/form-group-control}}
    {{/form-group}}
    {{#> form-group}}
      {{#> form-group-label}}
        {{#> form-label form-label--attribute=(concat 'for="' form-section--id '-input-2"')}}
          Form section 1 inputs
        {{/form-label}}
      {{/form-group-label}}
      {{#> form-group-control}}
        {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute=(concat 'type="text" id="' form-section--id '-input-2" name="' form-section--id '-input-2"')}}{{/form-control}}
      {{/form-group-control}}
    {{/form-group}}
  {{/form-section}}
  {{#> form-section form-section--id=(concat form--id '-section-2')}}
    {{#> form-section-title}}
      Section 2 title (optional)
    {{/form-section-title}}
    {{#> form-group}}
      {{#> form-group-label}}
        {{#> form-label form-label--attribute=(concat 'for="' form-section--id '-input"')}}
          Form section 2 inputs
        {{/form-label}}
      {{/form-group-label}}
      {{#> form-group-control}}
        {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute=(concat 'type="text" id="' form-section--id '-input" name="' form-section--id '-input"')}}{{/form-control}}
      {{/form-group-control}}
    {{/form-group}}
    {{#> form-group}}
      {{#> form-group-label}}
        {{#> form-label form-label--attribute=(concat 'for="' form-section--id '-input-2"')}}
          Form section 2 inputs
        {{/form-label}}
      {{/form-group-label}}
      {{#> form-group-control}}
        {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute=(concat 'type="text" id="' form-section--id '-input-2" name="' form-section--id '-input-2"')}}{{/form-control}}
      {{/form-group-control}}
    {{/form-group}}
  {{/form-section}}
{{/form}}
```

### Help text
```hbs
{{#> form form--id="form-help-text"}}
  {{#> form-group form-group--id=(concat form--id '-name')}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form-group--id '"') required="true"}}
        Name
      {{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute=(concat 'type="text" id="' form-group--id '" name="' form-group--id '" aria-describedby="' form-group--id '-helper"')}}
      {{/form-control}}
      {{> form-helper-text helper-text--value='This is helper text.'}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--id=(concat form--id '-email')}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form-group--id '"') required=true}}
        E-mail
      {{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control form-control--IsWarning='true' controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form-group--id '" name="' form-group--id '" aria-describedby="' form-group--id '-helper"')}}
      {{/form-control}}
      {{> form-helper-text helper-text--value='This is helper text for a warning input.' helper-text-item--IsWarning=true}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--id=(concat '-address')}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form-group--id '"') required="true"}}
        Address
      {{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--IsError='true' form-control--attribute=(concat 'type="text" id="' form-group--id '" name="' form-group--id '" aria-invalid="true" aria-describedby="' form-group--id '-helper"')}}
      {{/form-control}}
      {{> form-helper-text helper-text--value='This is helper text for an invalid input.' helper-text-item--IsError=true}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--id=(concat form--id '-comment')}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form-group--id '"')}}
        Comment
      {{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--IsSuccess='true' form-control--attribute=(concat 'value="This is a valid comment"' 'type="text" id="' form-group--id '" name="' form-group--id '" aria-describedby="' form-group--id '-helper"')}}
      {{/form-control}}
      {{> form-helper-text helper-text--value='This is helper text for success input.' helper-text-item--IsSuccess=true}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--id=(concat form--id '-info')}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form-group--id '"')}}
        Information
      {{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="textarea" form-control--modifier='pf-m-resize-both' form-control--IsError='true' form-control--attribute=(concat 'id="' form-group--id '" name="' form-group--id '" aria-invalid="true" aria-describedby="' form-group--id '-helper"')}}
      {{/form-control}}
      {{> form-helper-text helper-text--value='This is helper text with an icon.' helper-text-item--IsError=true helper-text-item--HasIcon=true}}
    {{/form-group-control}}
  {{/form-group}}
{{/form}}
```

### Label with additional info
```hbs
{{#> form form--id="form-additional-info"}}
  {{#> form-group form-group--id=(concat form--id '-name')}}
    {{#> form-group-label form-group-label-info="true"}}
      {{#> form-group-label-main}}
        {{#> form-label form-label--attribute=(concat 'for="' form-group--id '"') required=true}}
          Name
        {{/form-label}}
        {{> form-group-label-help form-group-label-help--aria-label="More information for name field" form-group-label-help--aria-describedby=(concat form--id form-group--id)}}
      {{/form-group-label-main}}
      {{#> form-group-label-info}}
        info
      {{/form-group-label-info}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute=(concat 'type="text" id="' form-group--id '" name="' form-group--id '"')}}{{/form-control}}
    {{/form-group-control}}
  {{/form-group}}
{{/form}}
```

### Label with additional info (horizontal form)
```hbs
{{#> form form--modifier="pf-m-horizontal" form--id="form-additional-info-horizontal"}}
  {{#> form-group form-group--id=(concat form--id '-name')}}
    {{#> form-group-label form-group-label-info="true"}}
      {{#> form-group-label-main}}
        {{#> form-label form-label--attribute=(concat 'for="' form-group--id '"') required=true}}
          Name
        {{/form-label}}
        {{> form-group-label-help form-group-label-help--aria-label="More information for name field" form-group-label-help--aria-describedby=(concat form--id form-group--id)}}
      {{/form-group-label-main}}
      {{#> form-group-label-info}}
        info
      {{/form-group-label-info}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute=(concat 'type="text" id="' form-group--id '" name="' form-group--id '"')}}{{/form-control}}
    {{/form-group-control}}
  {{/form-group}}
{{/form}}
```

### Action group
```hbs
{{#> form}}
  {{#> form-group form-group--modifier="pf-m-action"}}
    {{#> form-actions}}
      {{#> button button--IsPrimary=true button--IsSubmit=true}}
        Submit form
      {{/button}}
      {{#> button button--IsLink=true button--IsReset=true}}
        Reset form
      {{/button}}
    {{/form-actions}}
  {{/form-group}}
{{/form}}
```

### Field group (non-expandable)
```hbs
{{#> form form--id="form-field-group"}}
  {{#> form-field-group form-field-group--id=(concat form--id '-field-group')}}
    {{#> form-field-group-header}}
      {{#> form-field-group-header-main}}
        {{#> form-field-group-title}}
          {{#> form-field-group-title-text}}Field group Title{{/form-field-group-title-text}}
        {{/form-field-group-title}}
        {{#> form-field-group-header-description}}
          Field group description text
        {{/form-field-group-header-description}}
      {{/form-field-group-header-main}}
      {{#> form-field-group-header-actions}}
        {{#> button button--IsSecondary=true}}
          Action
        {{/button}}
      {{/form-field-group-header-actions}}
    {{/form-field-group-header}}
    {{#> form-field-group-body}}
      {{#> form-group form-group--id=(concat form-field-group--id "-label1")}}
        {{#> form-group-label}}
          {{#> form-label form-label--attribute=(concat 'for="' form-group--id '"') required="true"}}Label 1{{/form-label}}
          {{> form-group-label-help form-group-label-help--aria-label="More information for label 1 field" form-group-label-help--aria-describedby=(concat form-group--id)}}
        {{/form-group-label}}
        {{#> form-group-control}}
          {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute=(concat 'type="text" id="' form-group--id '" name="' form-group--id '"')}}{{/form-control}}
        {{/form-group-control}}
      {{/form-group}}
      {{#> form-group form-group--id=(concat form-field-group--id "-label2")}}
        {{#> form-group-label}}
          {{#> form-label form-label--attribute=(concat 'for="' form-group--id '"') required="true"}}Label 2{{/form-label}}
          {{> form-group-label-help form-group-label-help--aria-label="More information for label 2 field" form-group-label-help--aria-describedby=(concat form-group--id)}}
        {{/form-group-label}}
        {{#> form-group-control}}
          {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute=(concat 'type="text" id="' form-group--id '" name="' form-group--id '"')}}{{/form-control}}
        {{/form-group-control}}
      {{/form-group}}
    {{/form-field-group-body}}
  {{/form-field-group}}
{{/form}}
```

### Expandable and nested field groups
```hbs
{{#> form form--id="form-expandable-field-groups"}}

  {{#> form-field-group form-field-group--id=(concat form--id '-field-group-1') form-field-group--IsExpandable="true"}}
    {{#> form-field-group-header}}
      {{#> form-field-group-header-main}}
        {{#> form-field-group-title}}
          {{#> form-field-group-title-text form-field-group-title-text--attribute=(concat 'id="' form-field-group--id '-title"')}}Field group 1{{/form-field-group-title-text}}
        {{/form-field-group-title}}
        {{#> form-field-group-header-description}}
          Field group 1 description text
        {{/form-field-group-header-description}}
      {{/form-field-group-header-main}}
      {{#> form-field-group-header-actions}}
        {{#> button button--IsSecondary=true}}
          Action
        {{/button}}
      {{/form-field-group-header-actions}}
    {{/form-field-group-header}}
  {{/form-field-group}}
  {{#> form-field-group form-field-group--id=(concat form--id '-field-group-2') form-field-group--IsExpandable="true" form-field-group--IsExpanded="true"}}
    {{#> form-field-group-header}}
      {{#> form-field-group-header-main}}
        {{#> form-field-group-title}}
          {{#> form-field-group-title-text form-field-group-title-text--attribute=(concat 'id="' form-field-group--id '-title"')}}Field group 2{{/form-field-group-title-text}}
        {{/form-field-group-title}}
        {{#> form-field-group-header-description}}
          Field group 2 description text
        {{/form-field-group-header-description}}
      {{/form-field-group-header-main}}
    {{/form-field-group-header}}
    {{#> form-field-group-body}}
      {{#> form-group form-group--id=(concat form-field-group--id "-label1")}}
        {{#> form-group-label}}
          {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Label 1{{/form-label}}
          {{> form-group-label-help form-group-label-help--aria-label="More information for label 1 field" form-group-label-help--aria-describedby=(concat form--id form-group--id)}}
        {{/form-group-label}}
        {{#> form-group-control}}
          {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute=(concat 'type="text" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
        {{/form-group-control}}
      {{/form-group}}
      {{#> form-group form-group--id=(concat form-field-group--id "-label2")}}
        {{#> form-group-label}}
          {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Label 2{{/form-label}}
          {{> form-group-label-help form-group-label-help--aria-label="More information for label 2 field" form-group-label-help--aria-describedby=(concat form--id form-group--id)}}
        {{/form-group-label}}
        {{#> form-group-control}}
          {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute=(concat 'type="text" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
        {{/form-group-control}}
      {{/form-group}}
      {{#> form-field-group form-field-group--id=(concat form--id '-field-group-3') form-field-group--IsExpandable=reset}}
        {{#> form-field-group-header}}
          {{#> form-field-group-header-main}}
            {{#> form-field-group-title}}
              {{#> form-field-group-title-text}}Nested field group 3{{/form-field-group-title-text}}
            {{/form-field-group-title}}
          {{/form-field-group-header-main}}
        {{/form-field-group-header}}
        {{#> form-field-group-body}}
          {{#> form-group form-group--id=(concat form-field-group--id "-label1")}}
            {{#> form-group-label}}
              {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Label 1{{/form-label}}
              {{> form-group-label-help form-group-label-help--aria-label="More information for label 1 field" form-group-label-help--aria-describedby=(concat form--id form-group--id)}}
            {{/form-group-label}}
            {{#> form-group-control}}
              {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute=(concat 'type="text" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
            {{/form-group-control}}
          {{/form-group}}
          {{#> form-group form-group--id=(concat form-field-group--id "-label2")}}
            {{#> form-group-label}}
              {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Label 2{{/form-label}}
              {{> form-group-label-help form-group-label-help--aria-label="More information for label 2 field" form-group-label-help--aria-describedby=(concat form--id form-group--id)}}
            {{/form-group-label}}
            {{#> form-group-control}}
              {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute=(concat 'type="text" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
            {{/form-group-control}}
          {{/form-group}}
        {{/form-field-group-body}}
      {{/form-field-group}}
    {{/form-field-group-body}}
  {{/form-field-group}}
{{/form}}
```

## Documentation
To avoid the form label's required indicator or help tooltip icon from wrapping separately from the form label text, all whitespace characters between the last word of the label text, the required indicator (`.pf-v6-c-form__label-required`), and help tooltip icon (`.pf-v6-c-form__label-help`) must be removed, and `&nbsp;` characters added in between to maintain spacing. Also the help tooltip icon's `.pf-v6-c-form__label-required` element must be a `<span>` instead of a `<button>` due to layout limitations of the `<button>` element imposed by user agent styles.

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `for` | `<label>` |  Each `<label>` must have a `for` attribute that matches its form field id. **Required** |
| `id` | `<input type="radio/checkbox/text">`, `<select>`, `<textarea>` |  Each `<form>` field must have an `id` attribute that matches its label's `for` value. **Required** |
| `required` | `<input>`, `<select>`, `<textarea>` | Required fields must include these attributes. |
| `aria-describedby="{helper_text_id}"` | `<input>`, `<select>`, `<textarea>` | Form fields with related `.pf-v6-c-helper-text` require this attribute. Usage `<input aria-describedby="{helper_text_id}">`.  |
| `aria-invalid="true" aria-describedby="{helper_text_id}"` | `<input>`, `<select>`, `<textarea>` |  When form validation fails `aria-describedby` is used to communicate the error to the user. These attributes need to be handled with Javascript so that `aria-describedby` only references help text that explains the error, and so that `aria-invalid="true"` is only present when validation fails. For proper styling of errors `aria-invalid="true"` is required. |
| `aria-hidden="true"` | `.pf-v6-c-form__label-required` |  Hides the required indicator from assistive technologies. |
| `role="group"` | `.pf-v6-c-form__group`, `.pf-v6-c-form__section`, `.pf-v6-c-form__field-group` | Provides group role for form groups, form sections, and form field groups. **Required for checkbox groups, form groups, form sections, and form field groups.** |
| `role="radiogroup"` | `.pf-v6-c-form__group` | Provides group role for radio input groups. **Required for radio input groups** |
| `role="button"` | `.pf-v6-c-form__group-label-help` | Provides button role for group label help spans. **Required for group label help.** |
| `id` | `.pf-v6-c-form__group-label` | Generates an `id` for use in the `aria-labelledby` attribute in a checkbox or radio form group. |
| `id` | `.pf-v6-c-form__field-group-title-text` | Generates an `id` for use in the `aria-labelledby` attribute in an expandable field group's toggle button. |
| `id` | `.pf-v6-c-form__field-group-toggle-button > button` | Generates an `id` for use in the `aria-labelledby` attribute in an expandable field group's toggle button. |
| `aria-labelledby="{label id}"` | `.pf-v6-c-form__group`, `.pf-v6-c-form__section`, `.pf-v6-c-form__field-group` | Provides an accessible label for form groups, form sections, and form field groups. **Required for form groups, form sections, and form field groups that contain labels.** |
| `aria-label` | `.pf-v6-c-form__field-group-toggle-button > button` | Provides an accessible label for the field group toggle button. |
| `aria-labelledby="{title id} {toggle button id}"` | `.pf-v6-c-form__field-group-toggle-button > button` | Provides an accessible label for the field group toggle button. |
| `aria-expanded="true/false"` | `.pf-v6-c-form__field-group-toggle-button > button` | Indicates whether the field group body is visible or hidden. |
| `id="{form_label_id}"` | `.pf-v6-c-form__label` |  Generates an `id` for use in the `aria-describedby` attribute in a `.pf-v6-c-form__group-label-help`. |
| `aria-label="{descriptive text}" aria-describedby="{form_label_id}"` | `.pf-v6-c-form__group-label-help` |  Provides an accessible label on a button that provides additional information for a form element. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-form` | `<form>` |  Initiates a standard form. **Required** |
| `.pf-v6-c-form__section` | `<div>, <section>` |  Initiates a form section. |
| `.pf-v6-c-form__section-title` | `<h1>`,`<h2>`,`<h3>`,`<h4>`,`<h5>`,`<h6>`, `<div>` |  Initiates a form section title. |
| `.pf-v6-c-form__group` | `<div>` |  Initiates a form group. |
| `.pf-v6-c-form__group-label` | `<div>` |  Initiates a form group label. |
| `.pf-v6-c-form__label` | `<label>`, `<span>` |  Initiates a form label. **Required** |
| `.pf-v6-c-form__label-text` | `<span>` |  Initiates a form label text. **Required** |
| `.pf-v6-c-form__label-required` | `<span>` |  Initiates a form label required indicator. |
| `.pf-v6-c-form__group-label-main` | `<div>` |  Initiates a form group label main container. |
| `.pf-v6-c-form__group-label-info` | `<div>` |  Initiates a form group info label. |
| `.pf-v6-c-form__group-label-help` | `<span>` | Initiates field level help. |
| `.pf-v6-c-form__group-control` | `<div>` |  Initiates a form group control section. |
| `.pf-v6-c-form__actions` | `<div>` | Iniates a row of actions. |
| `.pf-v6-c-form__helper-text` | `<p>`, `<div>` |  Initiates a form helper text block. |
| `.pf-v6-c-form__alert` | `<div>` | Initiates the form alert container for inline alerts. |
| `.pf-v6-c-form__field-group` | `<div>` | Initiates a form field group. |
| `.pf-v6-c-form__field-group-toggle` | `<div>` | Initiates the form field group toggle. |
| `.pf-v6-c-form__field-group-toggle-button` | `<div>` | Initiates the form field group toggle button. |
| `.pf-v6-c-form__field-group-toggle-icon` | `<span>` | Initiates the form field group toggle icon. |
| `.pf-v6-c-form__field-group-header` | `<div>` | Initiates the form field group header. |
| `.pf-v6-c-form__field-group-header-main` | `<div>` | Initiates the form field group main section. |
| `.pf-v6-c-form__field-group-header-title` | `<div>` | Initiates the form field group title. |
| `.pf-v6-c-form__field-group-header-title-text` | `<div>` | Initiates the form field group title text. |
| `.pf-v6-c-form__field-group-header-description` | `<div>` | Initiates the form field group description. |
| `.pf-v6-c-form__field-group-header-actions` | `<div>` | Initiates the form field group actions container. |
| `.pf-v6-c-form__field-group-body` | `<div>` | Initiates the form field group body. |
| `.pf-m-horizontal{-on-[xs, sm, md, lg, xl, 2xl]}` | `.pf-v6-c-form` | Modifies the form for a horizontal layout at an optional breakpoint. The default breakpoint is `-md`. |
| `.pf-m-limit-width` | `.pf-v6-c-form` | Limits the overall max-width of the form. Configurable by defining `--pf-v6-c-form--m-limit-width--MaxWidth`. |
| `.pf-m-info` | `.pf-v6-c-form__group-label` | Modifies the form group label to contain form group label info. |
| `.pf-m-action` | `.pf-v6-c-form__group` | Modifies form group margin-top. |
| `.pf-m-disabled` | `.pf-v6-c-form__label` | Modifies form label to show disabled state. |
| `.pf-m-no-padding-top` | `.pf-v6-c-form__group-label` | Removes top padding from the label element for labels adjacent to an element that isn't a form control. |
| `.pf-m-inline` | `.pf-v6-c-form__group-control` | Modifies form group children to be inline (this is primarily for radio buttons and checkboxes). |
| `.pf-m-stack` | `.pf-v6-c-form__group-control` | Modifies form group children to be stacked with space between children. |
| `.pf-m-expanded` | `.pf-v6-c-form__field-group` | Modifies an expandable field group for the expanded state. |
| `--pf-v6-c-form--m-limit-width--MaxWidth` | `.pf-v6-c-form.pf-m-limit-width` | Sets a custom `max-width` for a width limited form. |
