---
id: 'Hint'
section: components
cssPrefix: pf-v6-c-hint
---

## Examples
### Hint with title
```hbs
{{#> hint hint-menu-toggle--id='hint-with-title-example'}}
  {{#> hint-actions}}
    {{> hint-menu-toggle}}
  {{/hint-actions}}
  {{#> hint-title}}
    Do more with Find it Fix it capabilities
  {{/hint-title}}
  {{#> hint-body}}
    Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.
  {{/hint-body}}
{{/hint}}

<br>

{{#> hint hint-menu-toggle--id='hint-with-title-and-actions-example'}}
  {{#> hint-actions}}
    {{> hint-menu-toggle}}
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

{{#> hint hint--id="hint-with-no-title-example"}}
  {{#> hint-actions}}
    {{> hint-menu-toggle}}
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
| `.pf-v6-c-hint` | `<div>` | Initiates the hint component. **Required** |
| `.pf-v6-c-hint__title` | `<div>` | Initiates the hint title element. |
| `.pf-v6-c-hint__body` | `<div>` | Initiates the hint body element. |
| `.pf-v6-c-hint__footer` | `<div>` | Initiates the hint footer element. |
| `.pf-v6-c-hint__actions` | `<div>` | Initiates the hint actions element. |
