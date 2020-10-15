---
id: Action list
section: components
cssPrefix: pf-c-action-list
beta: true
---

## Examples
### Action list single group
```hbs
{{#> action-list}}
  {{#> action-list-group}}
    {{#> button button--modifier="pf-m-primary"}}
      Next
    {{/button}}
    {{#> button button--modifier="pf-m-secondary"}}
      Back
    {{/button}}
  {{/action-list-group}}
{{/action-list}}
<br/>
With kebab
{{#> action-list}}
  {{#> action-list-group}}
    {{#> button button--modifier="pf-m-primary"}}
      Next
    {{/button}}
    {{#> button button--modifier="pf-m-secondary"}}
      Back
    {{/button}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Kebab"'}}
      <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
    {{/button}}
  {{/action-list-group}}
{{/action-list}}
```

### Action list with icons
```hbs
{{#> action-list action-list--modifier="pf-m-icons"}}
  {{#> action-list-group}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
       <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Kebab"'}}
      <i class="fas fa-check" aria-hidden="true"></i>
    {{/button}}
  {{/action-list-group}}
{{/action-list}}
```

### Action list multiple groups
```hbs
{{#> action-list}}
  {{#> action-list-group}}
    {{#> button button--modifier="pf-m-primary"}}
      Next
    {{/button}}
    {{#> button button--modifier="pf-m-secondary"}}
      Back
    {{/button}}
  {{/action-list-group}}
  {{#> action-list-group}}
    {{#> button button--modifier="pf-m-primary"}}
      Submit
    {{/button}}
    {{#> button button--modifier="pf-m-secondary"}}
      Cancel
    {{/button}}
  {{/action-list-group}}
{{/action-list}}
```

### Action list with cancel button
```hbs
In modals, forms, data lists
{{#> action-list}}
  {{#> action-list-group}}
    {{#> button button--modifier="pf-m-primary"}}
      Next
    {{/button}}
    {{#> button button--modifier="pf-m-secondary"}}
      Back
    {{/button}}
    {{#> button button--modifier="pf-m-inline"}}
      Cancel
    {{/button}}
  {{/action-list-group}}
{{/action-list}}
<br/>
In wizards
{{#> action-list}}
  {{#> action-list-group}}
    {{#> button button--modifier="pf-m-primary"}}
      Next
    {{/button}}
    {{#> button button--modifier="pf-m-secondary"}}
      Back
    {{/button}}
  {{/action-list-group}}
  {{#> action-list-group}}
    {{#> button button--modifier="pf-m-inline"}}
      Cancel
    {{/button}}
  {{/action-list-group}}
{{/action-list}}
```

### Action list vertical single group
```hbs
{{#> action-list action-list--modifier="pf-m-vertical"}}
  {{#> action-list-group}}
    {{#> button button--modifier="pf-m-primary"}}
      Next
    {{/button}}
    {{#> button button--modifier="pf-m-secondary"}}
      Back
    {{/button}}
  {{/action-list-group}}
{{/action-list}}
```

### Action list vertical multiple groups
```hbs
{{#> action-list action-list--modifier="pf-m-vertical"}}
  {{#> action-list-group action-list-group--modifier="pf-m-vertical"}}
    {{#> button button--modifier="pf-m-primary"}}
      Next
    {{/button}}
    {{#> button button--modifier="pf-m-secondary"}}
      Back
    {{/button}}
  {{/action-list-group}}
  {{#> action-list-group action-list-group--modifier="pf-m-vertical"}}
    {{#> button button--modifier="pf-m-primary"}}
      Submit
    {{/button}}
    {{#> button button--modifier="pf-m-inline"}}
      Cancel
    {{/button}}
  {{/action-list-group}}
{{/action-list}}
```

### Action list vertical in wizard
```hbs
2 stacked 1 below
{{#> action-list action-list--modifier="pf-m-vertical"}}
  {{#> action-list-group}}
    {{#> button button--modifier="pf-m-primary"}}
      Next
    {{/button}}
    {{#> button button--modifier="pf-m-secondary"}}
      Back
    {{/button}}
  {{/action-list-group}}
  {{#> action-list-group action-list-group--modifier="pf-m-vertical"}}
    {{#> button button--modifier="pf-m-inline"}}
      Cancel
    {{/button}}
  {{/action-list-group}}
{{/action-list}}
<br/>
<br/>
3 stacked
{{#> action-list action-list--modifier="pf-m-vertical"}}
  {{#> action-list-group action-list-group--modifier="pf-m-vertical"}}
    {{#> button button--modifier="pf-m-primary"}}
      Next
    {{/button}}
    {{#> button button--modifier="pf-m-secondary"}}
      Back
    {{/button}}
  {{/action-list-group}}
  {{#> action-list-group}}
    {{#> button button--modifier="pf-m-inline"}}
      Cancel
    {{/button}}
  {{/action-list-group}}
{{/action-list}}
```

### Overview

### Usage
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-action-list` | `<div>` | Initiates the action list container. |
| `.pf-c-action-list__group` | `<div>` | Initiates the action list group container. |
| `.pf-m-vertical` | `.pf-c-action-list`, `.pf-c-action-list__group` | Modifies the action list and action list group to be vertical. |
| `.pf-m-icons` | `.pf-c-action-list` | Modifies the action list to support button icons. |
