---
id: 'Text input group'
beta: true
section: components
cssPrefix: pf-c-text-input-group
---

## Examples
### Basic
```hbs
{{#> text-input-group text-input-group--id="basic"}}
  {{#> text-input-group-main}}
    {{#> text-input-group-text}}
      {{> text-input-group-text-input}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
{{/text-input-group}}
```

### Utilities and icon
```hbs
{{#> text-input-group text-input-group--modifier="pf-m-icon"}}
  {{#> text-input-group-main}}
    {{#> text-input-group-text}}
      {{> text-input-group-icon}}
      {{> text-input-group-text-input}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
  {{#> text-input-group-utilities}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Clear input"'}}
      <i class="fas fa-times fa-fw" aria-hidden="true"></i>
    {{/button}}
  {{/text-input-group-utilities}}
{{/text-input-group}}
```

### Filters
```hbs
{{#> text-input-group}}
  {{#> text-input-group-main}}
    {{> text-input-group--chip-group}}
    {{#> text-input-group-text}}
      {{> text-input-group-text-input}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
  {{#> text-input-group-utilities}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Clear input"'}}
      <i class="fas fa-times fa-fw" aria-hidden="true"></i>
    {{/button}}
  {{/text-input-group-utilities}}
{{/text-input-group}}
```

### Filters expanded
```hbs
{{#> text-input-group text-input-group--chip-group--IsLong="true"}}
  {{#> text-input-group-main}}
    {{> text-input-group--chip-group}}
    {{#> text-input-group-text}}
      {{> text-input-group-text-input}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
  {{#> text-input-group-utilities}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Clear input"'}}
      <i class="fas fa-times fa-fw" aria-hidden="true"></i>
    {{/button}}
  {{/text-input-group-utilities}}
{{/text-input-group}}
```
