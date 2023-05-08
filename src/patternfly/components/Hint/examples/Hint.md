---
id: 'Hint'
section: components
cssPrefix: pf-v5-c-hint
---

## Examples
### Hint with title
```hbs
{{#> hint}}
  {{#> hint-actions}}
    {{> dropdown dropdown--id="hint-with-title-dropdown-kebab" dropdown-toggle--IsPlain="true"}}
  {{/hint-actions}}
  {{#> hint-title}}
    Do more with Find it Fix it capabilities
  {{/hint-title}}
  {{#> hint-body}}
    Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.
  {{/hint-body}}
{{/hint}}

<br>

{{#> hint}}
  {{#> hint-actions}}
    {{> dropdown dropdown--id="hint-with-title-with-footer-dropdown-kebab" dropdown-toggle--IsPlain="true"}}
  {{/hint-actions}}
  {{#> hint-title}}
    Do more with Find it Fix it capabilities
  {{/hint-title}}
  {{#> hint-body}}
    Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.
  {{/hint-body}}
  {{#> hint-footer}}
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      Try it for 90 days
    {{/button}}
  {{/hint-footer}}
{{/hint}}
```

### Default with no title
```hbs
{{#> hint}}
  {{#> hint-body}}
    Welcome to the new documentation experience. <a href="#">Learn more about the improved features</a>.
  {{/hint-body}}
{{/hint}}

<br>

{{#> hint}}
  {{#> hint-actions}}
    {{> dropdown dropdown--id="hint-with-no-title-dropdown-kebab" dropdown-toggle--IsPlain="true"}}
  {{/hint-actions}}
  {{#> hint-body}}
    Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.
  {{/hint-body}}
  {{#> hint-footer}}
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      Try it for 90 days
    {{/button}}
  {{/hint-footer}}
{{/hint}}
```

## Documentation


### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-hint` | `<div>` | Initiates the hint component. **Required** |
| `.pf-v5-c-hint__title` | `<div>` | Initiates the hint title element. |
| `.pf-v5-c-hint__body` | `<div>` | Initiates the hint body element. |
| `.pf-v5-c-hint__footer` | `<div>` | Initiates the hint footer element. |
| `.pf-v5-c-hint__actions` | `<div>` | Initiates the hint actions element. |
