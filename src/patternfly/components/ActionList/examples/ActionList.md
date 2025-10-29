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
      {{#> button button--IsPrimary=true}}
        Next
      {{/button}}
    {{/action-list-item}}
    {{#> action-list-item}}
      {{#> button button--IsSecondary=true}}
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
      {{#> button button--IsPrimary=true}}
        Next
      {{/button}}
    {{/action-list-item}}
    {{#> action-list-item}}
      {{#> button button--IsSecondary=true}}
        Back
      {{/button}}
    {{/action-list-item}}
    {{#> action-list-item}}
      {{> button button--IsPlain=true button--aria-label="Toggle" button--IsIcon=true button--icon="ellipsis-v"}}
    {{/action-list-item}}
  {{/action-list-group}}
{{/action-list}}
```

### Action list with icons
```hbs
{{#> action-list action-list--modifier="pf-m-icons"}}
  {{#> action-list-item}}
    {{> button button--IsPlain=true button--aria-label="Close" button--IsIcon=true button--icon="times"}}
  {{/action-list-item}}
  {{#> action-list-item}}
    {{> button button--IsPlain=true button--aria-label="Toggle" button--IsIcon=true button--icon="check"}}
  {{/action-list-item}}
{{/action-list}}
<br>
With group icons wrapper
{{#> action-list}}
  {{#> action-list-group action-list-group--modifier="pf-m-icons"}}
    {{#> action-list-item}}
      {{> button button--IsPlain=true button--aria-label="Close" button--icon="times"}}
    {{/action-list-item}}
    {{#> action-list-item}}
      {{> button button--IsPlain=true button--aria-label="Toggle" button--IsIcon=true button--icon="check"}}
    {{/action-list-item}}
  {{/action-list-group}}
  {{#> action-list-group action-list-group--modifier="pf-m-icons"}}
    {{#> action-list-item}}
      {{> button button--IsPlain=true button--aria-label="Close" button--IsIcon=true button--icon="times"}}
    {{/action-list-item}}
    {{#> action-list-item}}
      {{> button button--IsPlain=true button--aria-label="Toggle" button--IsIcon=true button--icon="check"}}
    {{/action-list-item}}
  {{/action-list-group}}
{{/action-list}}
```

### Action list multiple groups
```hbs
{{#> action-list}}
  {{#> action-list-group}}
    {{#> action-list-item}}
      {{#> button button--IsPrimary=true}}
        Next
      {{/button}}
    {{/action-list-item}}
    {{#> action-list-item}}
      {{#> button button--IsSecondary=true}}
        Back
      {{/button}}
    {{/action-list-item}}
  {{/action-list-group}}
  {{#> action-list-group}}
    {{#> action-list-item}}
      {{#> button button--IsPrimary=true}}
        Submit
      {{/button}}
    {{/action-list-item}}
    {{#> action-list-item}}
      {{#> button button--IsLink=true}}
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
      {{#> button button--IsPrimary=true}}
        Save
      {{/button}}
    {{/action-list-item}}
    {{#> action-list-item}}
      {{#> button button--IsLink=true}}
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
      {{#> button button--IsPrimary=true}}
        Next
      {{/button}}
    {{/action-list-item}}
    {{#> action-list-item}}
      {{#> button button--IsSecondary=true}}
        Back
      {{/button}}
    {{/action-list-item}}
    {{#> action-list-item}}
      {{#> button button--IsLink=true}}
        Cancel
      {{/button}}
    {{/action-list-item}}
  {{/action-list-group}}
{{/action-list}}
```


### Vertical action list
```hbs isBeta
Multiple groups
{{#> action-list action-list--IsVertical="true"}}
  {{#> action-list-group}}
    {{#> action-list-item}}
      {{#> button button--IsPrimary=true}}
        Next
      {{/button}}
    {{/action-list-item}}
    {{#> action-list-item}}
      {{#> button button--IsSecondary=true}}
        Back
      {{/button}}
    {{/action-list-item}}
  {{/action-list-group}}
  {{#> action-list-group}}
    {{#> action-list-item}}
      {{#> button button--IsPrimary=true}}
        Submit
      {{/button}}
    {{/action-list-item}}
    {{#> action-list-item}}
      {{#> button button--IsLink=true}}
        Cancel
      {{/button}}
    {{/action-list-item}}
  {{/action-list-group}}
{{/action-list}}
<br/ >
Icons, in two groups
{{#> action-list action-list--IsVertical="true"}}
  {{#> action-list-group action-list-group--modifier="pf-m-icons"}}
    {{#> action-list-item}}
      {{> button button--IsPlain=true button--aria-label="Close" button--icon="times"}}
    {{/action-list-item}}
    {{#> action-list-item}}
      {{> button button--IsPlain=true button--aria-label="Toggle" button--IsIcon=true button--icon="check"}}
    {{/action-list-item}}
  {{/action-list-group}}
  {{#> action-list-group action-list-group--modifier="pf-m-icons"}}
    {{#> action-list-item}}
      {{> button button--IsPlain=true button--aria-label="Close" button--IsIcon=true button--icon="times"}}
    {{/action-list-item}}
    {{#> action-list-item}}
      {{> button button--IsPlain=true button--aria-label="Toggle" button--IsIcon=true button--icon="check"}}
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
| `.pf-m-vertical` | `.pf-v6-c-action-list` | Modifies the action list to display vertically. |
