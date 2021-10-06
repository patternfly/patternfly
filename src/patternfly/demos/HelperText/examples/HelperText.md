---
id: 'Helper text'
beta: true
section: components
---

## Examples
### Helper text on a form
```hbs
{{#> form form--id="helper-text-form"}}
  {{#> form-group form-group--id="-name"}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}
        Name
      {{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '" name="' form--id form-group--id '" aria-describedby="' form--id form-group--id '-helper"')}}
      {{/form-control}}
      {{#> form-helper-text form-helper-text--type="div" form-helper-text--attribute=(concat 'id="' form--id form-group--id '-helper" aria-live="polite"')}}
        {{#> helper-text}}
          {{#> helper-text-item}}
            {{#> helper-text-item-text}}This is helper text on a form field.{{/helper-text-item-text}}
          {{/helper-text-item}}
        {{/helper-text}}
      {{/form-helper-text}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--id="-email"}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}
        E-mail
      {{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control form-control--modifier="pf-m-warning" controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '" name="' form--id form-group--id '" aria-describedby="' form--id form-group--id '-helper"')}}
      {{/form-control}}
      {{#> form-helper-text form-helper-text--type="div" form-helper-text--attribute=(concat 'id="' form--id form-group--id '-helper" aria-live="polite"')}}
          {{#> helper-text helper-text-item--modifier="pf-m-warning"}}
            {{#> helper-text-item helper-text-item--modifier="pf-m-warning"}}
              {{#> helper-text-item-text}}This is helper text for a warning.{{/helper-text-item-text}}
            {{/helper-text-item}}
          {{/helper-text}}
      {{/form-helper-text}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--id="-address"}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}
        Address
      {{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '" name="' form--id form-group--id '" aria-invalid="true" aria-describedby="' form--id form-group--id '-helper"')}}
      {{/form-control}}
      {{#> form-helper-text form-helper-text--type="div"form-helper-text--attribute=(concat 'id="' form--id form-group--id '-helper" aria-live="polite"')}}
          {{#> helper-text helper-text--type="ul" helper-text-item--type="li"}}
            {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-success"}}
              {{> helper-text-item-icon helper-text-item-icon--type="check-circle"}}
              {{#> helper-text-item-text}}This criteria has been met.{{/helper-text-item-text}}
            {{/helper-text-item}}
            {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-error"}}
              {{> helper-text-item-icon helper-text-item-icon--type="exclamation-circle"}}
              {{#> helper-text-item-text}}This criteria has not been met.{{/helper-text-item-text}}
            {{/helper-text-item}}
            {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-success"}}
              {{> helper-text-item-icon helper-text-item-icon--type="check-circle"}}
              {{#> helper-text-item-text}}This criteria has been met.{{/helper-text-item-text}}
            {{/helper-text-item}}
          {{/helper-text}}
      {{/form-helper-text}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--id="-comment"}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}
        Comment
      {{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--modifier="pf-m-success" form-control--attribute=(concat 'value="This is a valid comment"' 'type="text" id="' form--id form-group--id '" name="' form--id form-group--id '" aria-describedby="' form--id form-group--id '-helper"')}}
      {{/form-control}}
      {{#> form-helper-text form-helper-text--type="div" form-helper-text--attribute=(concat 'id="' form--id form-group--id '-helper" aria-live="polite"')}}
          {{#> helper-text}}
            {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-success"}}
              {{> helper-text-item-icon helper-text-item-icon--type="check-circle"}}
              {{#> helper-text-item-text}}This is dynamic helper text with an icon showing success.{{/helper-text-item-text}}
            {{/helper-text-item}}
          {{/helper-text}}
      {{/form-helper-text}}
    {{/form-group-control}}
  {{/form-group}}
{{/form}}
```
## Documentation
When adding helper text to a form field, place it within the form helper text element.
