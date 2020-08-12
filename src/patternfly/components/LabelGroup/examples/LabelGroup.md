---
id: 'Label group'
beta: true
section: components
cssPrefix: pf-c-label-group
---

## Examples
### Basic
```hbs
{{#> label-group label-group--id="label-group-basic"}}
  {{#> label-group-list label-group-list--attribute='aria-label="Label group list"'}}
    {{#> label-group-list-item}}
      {{#> label}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--modifier="pf-m-blue"}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label 2
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--modifier="pf-m-green"}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label 3
      {{/label}}
    {{/label-group-list-item}}
  {{/label-group-list}}
{{/label-group}}
```

### Overflow
```hbs
{{#> label-group label-group--id="label-group-overflow"}}
  {{#> label-group-list label-group-list--attribute='aria-label="Label group list"'}}
    {{#> label-group-list-item}}
      {{#> label}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--modifier="pf-m-blue"}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label 2
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--modifier="pf-m-green"}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label 3
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--IsOverflow="true"}}
        3 more
      {{/label}}
    {{/label-group-list-item}}
  {{/label-group-list}}
{{/label-group}}
```

### Overflow expanded
```hbs
{{#> label-group label-group--id="label-group-overflow-expanded"}}
  {{#> label-group-list label-group-list--attribute='aria-label="Label group list"'}}
    {{#> label-group-list-item}}
      {{#> label}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--modifier="pf-m-blue"}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label 2
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--modifier="pf-m-green"}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label 3
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--modifier="pf-m-cyan"}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label 3
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--modifier="pf-m-purple"}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label 3
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--IsOverflow="true"}}
        3 less
      {{/label}}
    {{/label-group-list-item}}
  {{/label-group-list}}
{{/label-group}}
```

### Category
```hbs
{{#> label-group label-group--id="label-group-category" label-group--modifier="pf-m-category"}}
  {{#> label-group-label label-group-label--attribute=(concat 'id="' label-group--id '-label"')}}
    Group label
  {{/label-group-label}}
  {{#> label-group-list label-group-list--attribute=(concat 'aria-labelledby="' label-group--id '-label"')}}
    {{#> label-group-list-item}}
      {{#> label}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--modifier="pf-m-blue"}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label 2
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--modifier="pf-m-green"}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label 3
      {{/label}}
    {{/label-group-list-item}}
  {{/label-group-list}}
{{/label-group}}
```

### Category removable
```hbs
{{#> label-group label-group--id="label-group-category-removable" label-group--modifier="pf-m-category"}}
  {{#> label-group-label label-group-label--attribute=(concat 'id="' label-group--id '-label"')}}
    Group label
  {{/label-group-label}}
  {{#> label-group-list label-group-list--attribute=(concat 'aria-labelledby="' label-group--id '-label"')}}
    {{#> label-group-list-item}}
      {{#> label}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--modifier="pf-m-blue"}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label 2
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--modifier="pf-m-green"}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label 3
      {{/label}}
    {{/label-group-list-item}}
  {{/label-group-list}}
  {{> label-group-close}}
{{/label-group}}
```

### Vertical
```hbs
{{#> label-group label-group--id="label-group-vertical" label-group--modifier="pf-m-vertical"}}
  {{#> label-group-list label-group-list--attribute='aria-label="Label group list"'}}
    {{#> label-group-list-item}}
      {{#> label}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--modifier="pf-m-blue"}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label 2
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--modifier="pf-m-green"}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label 3
      {{/label}}
    {{/label-group-list-item}}
  {{/label-group-list}}
{{/label-group}}
```

### Vertical overflow
```hbs
{{#> label-group label-group--id="label-group-vertical-overflow" label-group--modifier="pf-m-vertical"}}
  {{#> label-group-list label-group-list--attribute='aria-label="Label group list"'}}
    {{#> label-group-list-item}}
      {{#> label}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--modifier="pf-m-blue"}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label 2
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--modifier="pf-m-green"}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label 3
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--modifier="pf-m-overflow"}}
        3 more
      {{/label}}
    {{/label-group-list-item}}
  {{/label-group-list}}
{{/label-group}}
```

### Vertical overflow expanded
```hbs
{{#> label-group label-group--id="label-group-vertical-overflow-expanded" label-group--modifier="pf-m-vertical"}}
  {{#> label-group-list label-group-list--attribute='aria-label="Label group list"'}}
    {{#> label-group-list-item}}
      {{#> label}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--modifier="pf-m-blue"}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label 2
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--modifier="pf-m-green"}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label 3
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--modifier="pf-m-cyan"}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label 3
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--modifier="pf-m-purple"}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label 3
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--modifier="pf-m-overflow"}}
        3 less
      {{/label}}
    {{/label-group-list-item}}
  {{/label-group-list}}
{{/label-group}}
```

### Vertical category
```hbs
{{#> label-group label-group--id="label-group-vertical-category" label-group--modifier="pf-m-vertical pf-m-category"}}
  {{#> label-group-label label-group-label--attribute=(concat 'id="' label-group--id '-label"')}}
    Group label
  {{/label-group-label}}
  {{#> label-group-list label-group-list--attribute=(concat 'aria-labelledby="' label-group--id '-label"')}}
    {{#> label-group-list-item}}
      {{#> label}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--modifier="pf-m-blue"}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label 2
      {{/label}}
    {{/label-group-list-item}}
    {{#> label-group-list-item}}
      {{#> label label--modifier="pf-m-green"}}
        {{#> label-icon}}
          <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
        {{/label-icon}}
        Label 3
      {{/label}}
    {{/label-group-list-item}}
  {{/label-group-list}}
{{/label-group}}
```

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="list"` | `.pf-c-label-group__list` | Indicates that the label group list is a list element. This role is redundant since `.pf-c-label-group__list` is a `<ul>` but is required for screen readers to announce the list propertly. **Required** |
| `aria-label="[button label text]"` | `.pf-c-label-group__close > button` |  Provides an accessible name for a label group close button when an icon is used instead of text. Required when an icon is used with no supporting text. **Required** |
| `aria-labelledby="[id value of .pf-c-label-group__close > button] [id value of .pf-c-label-group__label]"` | `.pf-c-label-group__close > button` | Provides an accessible name for the button. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-label-group` | `<div>` | Initiates the label group component. **Required.** |
| `.pf-c-label-group__list` | `<ul>` | Initiates the container for a list of labels. **Required.** |
| `.pf-c-label-group__list-item` | `<li>` | Initiates the list item inside of the label group. **Required.** |
| `.pf-c-label-group__label` | `<span>` | Initiates the label to be used in the label group. |
| `.pf-c-label-group__close` | `<div>` | Initiates the container used for the button to remove the label group. |
| `.pf-c-button` | `.pf-c-label-group__close <button>` | Initiates the button used to remove the label group. |
| `.pf-m-category` | `.pf-c-label-group` | Modifies the label group to support category styling. |
