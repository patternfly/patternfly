---
id: Action list
section: components
cssPrefix: pf-v6-c-action-list
---

## Examples
### Action list single group
```hbs
{{#> action-list}}
  {{#> action-list-group}}
    {{#> action-list-item}}
      {{#> button button--modifier="pf-m-primary"}}
        Next
      {{/button}}
    {{/action-list-item}}
    {{#> action-list-item}}
      {{#> button button--modifier="pf-m-secondary"}}
        Back
      {{/button}}
    {{/action-list-item}}
  {{/action-list-group}}
{{/action-list}}
<br/>
With kebab
{{#> action-list}}
  {{#> action-list-group}}
    {{#> action-list-item}}
      {{#> button button--modifier="pf-m-primary"}}
        Next
      {{/button}}
    {{/action-list-item}}
    {{#> action-list-item}}
      {{#> button button--modifier="pf-m-secondary"}}
        Back
      {{/button}}
    {{/action-list-item}}
    {{#> action-list-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Kebab"'}}
        <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
      {{/button}}
    {{/action-list-item}}
  {{/action-list-group}}
{{/action-list}}
```

### Action list with icons
```hbs
{{#> action-list action-list--modifier="pf-m-icons"}}
  {{#> action-list-item}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
       <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/action-list-item}}
  {{#> action-list-item}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Kebab"'}}
      <i class="fas fa-check" aria-hidden="true"></i>
    {{/button}}
  {{/action-list-item}}
{{/action-list}}
<br>
With group icons wrapper
{{#> action-list}}
  {{#> action-list-group action-list-group--modifier="pf-m-icons"}}
    {{#> action-list-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
        <i class="fas fa-times" aria-hidden="true"></i>
      {{/button}}
    {{/action-list-item}}
    {{#> action-list-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Kebab"'}}
        <i class="fas fa-check" aria-hidden="true"></i>
      {{/button}}
    {{/action-list-item}}
  {{/action-list-group}}
  {{#> action-list-group action-list-group--modifier="pf-m-icons"}}
    {{#> action-list-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
        <i class="fas fa-times" aria-hidden="true"></i>
      {{/button}}
    {{/action-list-item}}
    {{#> action-list-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Kebab"'}}
        <i class="fas fa-check" aria-hidden="true"></i>
      {{/button}}
    {{/action-list-item}}
  {{/action-list-group}}
{{/action-list}}
```

### Action list multiple groups
```hbs
{{#> action-list}}
  {{#> action-list-group}}
    {{#> action-list-item}}
      {{#> button button--modifier="pf-m-primary"}}
        Next
      {{/button}}
    {{/action-list-item}}
    {{#> action-list-item}}
      {{#> button button--modifier="pf-m-secondary"}}
        Back
      {{/button}}
    {{/action-list-item}}
  {{/action-list-group}}
  {{#> action-list-group}}
    {{#> action-list-item}}
      {{#> button button--modifier="pf-m-primary"}}
        Submit
      {{/button}}
    {{/action-list-item}}
    {{#> action-list-item}}
      {{#> button button--modifier="pf-m-link"}}
        Cancel
      {{/button}}
    {{/action-list-item}}
  {{/action-list-group}}
{{/action-list}}
```

### Action list with cancel button
```hbs
In modals, forms, data lists
{{#> action-list}}
  {{#> action-list-group}}
    {{#> action-list-item}}
      {{#> button button--modifier="pf-m-primary"}}
        Save
      {{/button}}
    {{/action-list-item}}
    {{#> action-list-item}}
      {{#> button button--modifier="pf-m-link"}}
        Cancel
      {{/button}}
    {{/action-list-item}}
  {{/action-list-group}}
{{/action-list}}
<br/>
In wizards
{{#> action-list}}
  {{#> action-list-group}}
    {{#> action-list-item}}
      {{#> button button--modifier="pf-m-primary"}}
        Next
      {{/button}}
    {{/action-list-item}}
    {{#> action-list-item}}
      {{#> button button--modifier="pf-m-secondary"}}
        Back
      {{/button}}
    {{/action-list-item}}
    {{#> action-list-item}}
      {{#> button button--modifier="pf-m-link"}}
        Cancel
      {{/button}}
    {{/action-list-item}}
  {{/action-list-group}}
{{/action-list}}
```

### Overview

### Usage
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-action-list` | `<div>` | Initiates the action list container. |
| `.pf-v6-c-action-list__item` | `<div>` | Initiates the action list item container. |
| `.pf-v6-c-action-list__group` | `<div>` | Initiates the action list group container. |
| `.pf-m-icons` | `.pf-v6-c-action-list`, `.pf-v6-c-action-list__group` | Modifies the action list and/or group to support icon buttons. If applied to `.pf-v6-c-action-list`, all nested groups will inherit this modification. |
