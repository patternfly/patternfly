---
id: 'Hint'
section: components
cssPrefix: pf-v6-c-hint
---

## Examples

### Hint with title

```hbs
{{#> hint hint--id='hint-with-title-example'}}
  {{#> hint-actions}}
    {{> menu-toggle
      menu-toggle--IsPlain=true
      menu-toggle--HasKebab=true
      menu-toggle--id=(dasherize hint--id 'hint')
      menu-toggle--aria-label='Hint menu toggle'
    }}
  {{/hint-actions}}
  {{#> hint-title}}
    Do more with Find it Fix it capabilities
  {{/hint-title}}
  {{#> hint-body}}
    Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.
  {{/hint-body}}
{{/hint}}

<br>

{{#> hint hint--id='hint-with-title-and-actions-example'}}
  {{#> hint-actions}}
    {{> menu-toggle
      menu-toggle--IsPlain=true
      menu-toggle--HasKebab=true
      menu-toggle--id=(dasherize hint--id 'hint')
      menu-toggle--aria-label='Hint menu toggle'
    }}
 {{/hint-actions}}
  {{#> hint-title}}
    Do more with Find it Fix it capabilities
  {{/hint-title}}
  {{#> hint-body}}
    Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.
  {{/hint-body}}
  {{#> hint-footer}}
    {{#> button button--IsLink=true button--IsInline=true}}
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
    {{> menu-toggle
      menu-toggle--IsPlain=true
      menu-toggle--HasKebab=true
      menu-toggle--id=(dasherize hint--id 'hint')
      menu-toggle--aria-label='Hint menu toggle'
    }}
 {{/hint-actions}}
  {{#> hint-body}}
    Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.
  {{/hint-body}}
  {{#> hint-footer}}
    {{#> button button--IsLink=true button--IsInline=true}}
      Try it for 90 days
    {{/button}}
  {{/hint-footer}}
{{/hint}}
```

### Actions with no offset

```hbs
{{#> hint hint--id='hint-actions-with-no-offset'}}
  {{#> hint-actions hint-actions--modifier='pf-m-no-offset'}}
    {{#> button button--IsPrimary=true}}Action{{/button}}
 {{/hint-actions}}
  {{#> hint-title}}
    Do more with Find it Fix it capabilities
  {{/hint-title}}
  {{#> hint-body}}
    Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.
  {{/hint-body}}
{{/hint}}
```

## Documentation

### Usage

| Class                    | Applied to               | Outcome                                                                                                                |
| ------------------------ | ------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `.pf-v6-c-hint`          | `<div>`                  | Initiates the hint component. **Required**                                                                             |
| `.pf-v6-c-hint__title`   | `<div>`                  | Initiates the hint title element.                                                                                      |
| `.pf-v6-c-hint__body`    | `<div>`                  | Initiates the hint body element.                                                                                       |
| `.pf-v6-c-hint__footer`  | `<div>`                  | Initiates the hint footer element.                                                                                     |
| `.pf-v6-c-hint__actions` | `<div>`                  | Initiates the hint actions element.                                                                                    |
| `.pf-m-no-offset`        | `.pf-v6-c-hint__actions` | Removes the negative vertical margins on the actions element intended to align the action content with the hint title. |
