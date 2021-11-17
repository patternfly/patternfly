---
id: 'Button'
beta: true
section: components
cssPrefix: pf-d-button
---

## Examples
### Progress button - initial
```hbs
{{#> form form--id="progress-button-initial"}}
  {{#> form-group form-group--id="-login"}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}
        Red Hat login or email
      {{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" id="' form--id form-group--id '" readonly name="' form--id form-group--id '" value="allie@acme.com" required')}}{{/form-control}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--id="-password"}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}
        Password
      {{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="password" id="' form--id form-group--id '" name="' form--id form-group--id '" required')}}{{/form-control}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--modifier="pf-m-action"}}
    {{#> form-actions}}
      {{#> button button--modifier="pf-m-primary" button--IsSubmit="true"}}
        Link account and log in
      {{/button}}
    {{/form-actions}}
  {{/form-group}}
{{/form}}
```

### Progress button - loading
```hbs
{{#> form form--id="progress-button-loading"}}
  {{#> form-group form-group--id="-login"}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}
        Red Hat login or email
      {{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" id="' form--id form-group--id '" readonly name="' form--id form-group--id '" value="allie@acme.com" required')}}{{/form-control}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--id="-password"}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}
        Password
      {{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="password" id="' form--id form-group--id '" name="' form--id form-group--id '" required')}}{{/form-control}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--modifier="pf-m-action"}}
    {{#> form-actions}}
      {{#> button button--modifier="pf-m-primary" button--IsProgress="true" button--IsInProgress="true" button--IsSubmit="true"}}
        Linking account
      {{/button}}
    {{/form-actions}}
  {{/form-group}}
{{/form}}
```

### Progress button - complete
```hbs
{{#> form form--id="progress-button-complete"}}
  {{#> form-group form-group--id="-login"}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}
        Red Hat login or email
      {{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" id="' form--id form-group--id '" readonly name="' form--id form-group--id '" value="allie@acme.com" required')}}{{/form-control}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--id="-password"}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}
        Password
      {{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="password" id="' form--id form-group--id '" name="' form--id form-group--id '" required')}}{{/form-control}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--modifier="pf-m-action"}}
    {{#> form-actions}}
      {{#> button button--modifier="pf-m-primary pf-m-start" button--IsSubmit="true"}}
        {{#> button-icon button-icon--modifier="pf-m-start"}}
          <i class="fas fa-check-circle" aria-hidden="true"></i>
        {{/button-icon}}
        Logged in
      {{/button}}
    {{/form-actions}}
  {{/form-group}}
{{/form}}
``````
