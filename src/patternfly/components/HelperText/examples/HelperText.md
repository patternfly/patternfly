---
id: 'Helper text'
beta: true
section: components
cssPrefix: pf-c-helper-text
---

## Examples
### Basic
```hbs
{{#> helper-text}}
  {{#> helper-text-item}}
    {{#> helper-text-item-text}}This is default helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}

{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-indeterminate"}}
    {{#> helper-text-item-text}}This is indeterminate helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}

{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-warning"}}
    {{#> helper-text-item-text}}This is warning helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}

{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-success"}}
    {{#> helper-text-item-text}}This is success helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}

{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-invalid"}}
    {{#> helper-text-item-text}}This is invalid helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}
```

### Icon
```hbs
{{#> helper-text}}
  {{#> helper-text-item}}
    {{> helper-text-item-icon helper-text-item-icon--type="info"}}
    {{#> helper-text-item-text}}This is default helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}

{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-indeterminate"}}
    {{> helper-text-item-icon helper-text-item-icon--type="question"}}
    {{#> helper-text-item-text}}This is indeterminate helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}

{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-warning"}}
    {{> helper-text-item-icon helper-text-item-icon--type="exclamation-triangle"}}
    {{#> helper-text-item-text}}This is warning helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}

{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-success"}}
    {{> helper-text-item-icon helper-text-item-icon--type="check-circle"}}
    {{#> helper-text-item-text}}This is success helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}

{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-invalid"}}
    {{> helper-text-item-icon helper-text-item-icon--type="exclamation-circle"}}
    {{#> helper-text-item-text}}This is invalid helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}
```

### Dynamic
```hbs
{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic"}}
    {{> helper-text-item-icon helper-text-item-icon--type="minus"}}
    {{#> helper-text-item-text}}This is default helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}

{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-indeterminate"}}
    {{> helper-text-item-icon helper-text-item-icon--type="minus"}}
    {{#> helper-text-item-text}}This is indeterminate helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}

{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-warning"}}
    {{> helper-text-item-icon helper-text-item-icon--type="exclamation-triangle"}}
    {{#> helper-text-item-text}}This is warning helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}

{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-success"}}
    {{> helper-text-item-icon helper-text-item-icon--type="check"}}
    {{#> helper-text-item-text}}This is success helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}

{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-invalid"}}
    {{> helper-text-item-icon helper-text-item-icon--type="times"}}
    {{#> helper-text-item-text}}This is invalid helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}
```

### Dynamic list
```hbs
{{#> helper-text helper-text--type="ul" helper-text-item--type="li"}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-indeterminate"}}
    {{> helper-text-item-icon helper-text-item-icon--type="minus"}}
    {{#> helper-text-item-text}}Must be at least 14 characters{{/helper-text-item-text}}
  {{/helper-text-item}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-indeterminate"}}
    {{> helper-text-item-icon helper-text-item-icon--type="minus"}}
    {{#> helper-text-item-text}}Cannot contain any variation of the word "redhat"{{/helper-text-item-text}}
  {{/helper-text-item}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-indeterminate"}}
    {{> helper-text-item-icon helper-text-item-icon--type="minus"}}
    {{#> helper-text-item-text}}Must include at least 3 of the following: lowercase letter, uppercase letters, numbers, symbols{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}
<br>
{{#> helper-text helper-text--type="ul" helper-text-item--type="li"}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-success"}}
    {{> helper-text-item-icon helper-text-item-icon--type="check"}}
    {{#> helper-text-item-text}}Must be at least 14 characters{{/helper-text-item-text}}
  {{/helper-text-item}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-invalid"}}
    {{> helper-text-item-icon helper-text-item-icon--type="times"}}
    {{#> helper-text-item-text}}Cannot contain any variation of the word "redhat"{{/helper-text-item-text}}
  {{/helper-text-item}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-success"}}
    {{> helper-text-item-icon helper-text-item-icon--type="check"}}
    {{#> helper-text-item-text}}Must include at least 3 of the following: lowercase letter, uppercase letters, numbers, symbols{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}
```

## Documentation
