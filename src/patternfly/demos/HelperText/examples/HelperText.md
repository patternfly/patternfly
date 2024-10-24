---
id: 'Helper text'
section: components
---

## Examples

### Helper text on a form

```hbs
{{#> form form--id="helper-text-form"}}
  {{#> form-group form-group--id=(concat form--id '-name')}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form-group--id '"') required="true"}}
        Name
      {{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute=(concat 'type="text" id="' form-group--id '" name="' form-group--id '" aria-describedby="' form-group--id '-helper"')}}
      {{#> form-helper-text form-helper-text--id=(concat form-group--id '-helper')}}
        {{> helper-text helper-text--value='This is helper text on a form field.'}}
      {{/form-helper-text}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--id=(concat form--id '-email')}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form-group--id '"') required="true"}}
        E-mail
      {{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--IsWarning='true' form-control--attribute=(concat 'type="text" id="' form-group--id '" name="' form-group--id '" aria-describedby="' form-group--id '-helper"')}}{{/form-control}}
      {{#> form-helper-text form-helper-text--id=(concat form-group--id '-helper')}}
        {{> helper-text helper-text--value='This is helper text for a warning.' helper-text-item--IsWarning=true}}
      {{/form-helper-text}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--id=(concat form--id '-address')}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form-group--id '"') required="true"}}
        Address
      {{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--IsError='true' form-control--attribute=(concat 'type="text" id="' form-group--id '" name="' form-group--id '" aria-invalid="true" aria-describedby="' form-group--id '-helper"')}}{{/form-control}}
      {{#> form-helper-text form-helper-text--id=(concat form-group--id '-helper')}}
        {{#> helper-text helper-text--type="ul" helper-text-item--type="li"}}
          {{> helper-text-item helper-text--value='This criteria has been met.' helper-text-item--HasIcon=true helper-text-item--IsDynamic=true helper-text-item--IsSuccess=true}}
          {{> helper-text-item helper-text--value='This criteria has not been met.' helper-text-item--HasIcon=true helper-text-item--IsDynamic=true helper-text-item--IsError=true}}
          {{> helper-text-item helper-text--value='This criteria has been met.' helper-text-item--HasIcon=true helper-text-item--IsDynamic=true helper-text-item--IsSuccess=true}}
        {{/helper-text}}
      {{/form-helper-text}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--id=(concat form--id '-comment')}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form-group--id '"')}}
        Comment
      {{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--IsSuccess='true' form-control--attribute=(concat 'value="This is a valid comment"' 'type="text" id="' form-group--id '" name="' form-group--id '" aria-describedby="' form-group--id '-helper"')}}{{/form-control}}
      {{#> form-helper-text form-helper-text--id=(concat form-group--id '-helper')}}
        {{> helper-text helper-text--value='This is dynamic helper text with an icon showing success.' helper-text-item--HasIcon=true helper-text-item--IsDynamic=true helper-text-item--IsSuccess=true}}
      {{/form-helper-text}}
    {{/form-group-control}}
  {{/form-group}}
{{/form}}
```

## Documentation

When adding helper text to a form field, place it within the form helper text element.
