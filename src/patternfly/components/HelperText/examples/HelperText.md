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
    {{> helper-text-item-icon helper-text-item-icon--type="circle"}}
    {{#> helper-text-item-text}}Must be at least 14 characters{{/helper-text-item-text}}
  {{/helper-text-item}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-success"}}
    {{> helper-text-item-icon helper-text-item-icon--type="check"}}
    {{#> helper-text-item-text}}Must be at least 14 characters{{/helper-text-item-text}}
  {{/helper-text-item}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-invalid"}}
    {{> helper-text-item-icon helper-text-item-icon--type="times"}}
    {{#> helper-text-item-text}}Must be at least 14 characters{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}
```

## Documentation
