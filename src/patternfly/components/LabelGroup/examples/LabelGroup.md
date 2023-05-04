---
id: 'Label group'
section: components
cssPrefix: pf-v5-c-label-group
---

## Examples

### Basic
```hbs
{{#> label-group label-group--id="label-group-basic"}}
  {{#> label-group-main}}
    {{#> label-group-list label-group-list--attribute='aria-label="Group of labels"'}}
      {{#> label-group-list-item}}
        {{> label label-text--value="Label 1" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="blue" label-text--value="Label 2" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="green" label-text--value="Label 3" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
    {{/label-group-list}}
  {{/label-group-main}}
{{/label-group}}
```

### Overflow
```hbs
{{#> label-group label-group--id="label-group-overflow"}}
  {{#> label-group-main}}
    {{#> label-group-list label-group-list--attribute='aria-label="Group of labels"'}}
      {{#> label-group-list-item}}
        {{> label label-text--value="Label 1" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="blue" label-text--value="Label 2" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="green" label-text--value="Label 3" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="blue" label--IsOverflow=true label-text--value="3 more"}}
      {{/label-group-list-item}}
    {{/label-group-list}}
  {{/label-group-main}}
{{/label-group}}
```

### Overflow expanded
```hbs
{{#> label-group label-group--id="label-group-overflow-expanded"}}
  {{#> label-group-main}}
    {{#> label-group-list label-group-list--attribute='aria-label="Group of labels"'}}
      {{#> label-group-list-item}}
        {{> label label-text--value="Label 1" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="blue" label-text--value="Label 2" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="green" label-text--value="Label 3" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="cyan" label-text--value="Label 4" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="purple" label-text--value="Label 5" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--IsOverflow=true label-text--value="3 less"}}
      {{/label-group-list-item}}
    {{/label-group-list}}
  {{/label-group-main}}
{{/label-group}}
```

### Add label
```hbs
{{#> label-group label-group--id="label-group-add"}}
  {{#> label-group-main}}
    {{#> label-group-list label-group-list--attribute='aria-label="Group of labels"'}}
      {{#> label-group-list-item}}
        {{> label label-text--value="Label 1" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="blue" label-text--value="Label 2" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="green" label-text--value="Label 3" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--IsAdd=true label-text--value="Add label"}}
      {{/label-group-list-item}}
    {{/label-group-list}}
  {{/label-group-main}}
{{/label-group}}
```

### Category
```hbs
{{#> label-group label-group--id="label-group-category" label-group--modifier="pf-m-category"}}
  {{#> label-group-main}}
    {{#> label-group-label label-group-label--attribute=(concat 'id="' label-group--id '-label"')}}
      Group label
    {{/label-group-label}}
    {{#> label-group-list label-group-list--attribute=(concat 'aria-labelledby="' label-group--id '-label"')}}
      {{#> label-group-list-item}}
        {{> label label-text--value="Label 1" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="blue" label-text--value="Label 2" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="green" label-text--value="Label 3" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
    {{/label-group-list}}
  {{/label-group-main}}
{{/label-group}}
```

### Category removable
```hbs
{{#> label-group label-group--id="label-group-category-removable" label-group--modifier="pf-m-category"}}
  {{#> label-group-main}}
    {{#> label-group-label label-group-label--attribute=(concat 'id="' label-group--id '-label"')}}
      Group label
    {{/label-group-label}}
    {{#> label-group-list label-group-list--attribute=(concat 'aria-labelledby="' label-group--id '-label"')}}
      {{#> label-group-list-item}}
        {{> label label-text--value="Label 1" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="blue" label-text--value="Label 2" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="green" label-text--value="Label 3" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="cyan" label-text--value="Label 4" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="orange" label-text--value="Label 5" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="red" label-text--value="Label 6" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
    {{/label-group-list}}
  {{/label-group-main}}
  {{> label-group-close}}
{{/label-group}}
```

### Vertical
```hbs
{{#> label-group label-group--id="label-group-vertical" label-group--modifier="pf-m-vertical"}}
  {{#> label-group-main}}
    {{#> label-group-list label-group-list--attribute='aria-label="Group of labels"'}}
      {{#> label-group-list-item}}
        {{> label label-text--value="Label 1" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="blue" label-text--value="Label 2" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="green" label-text--value="Label 3" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
    {{/label-group-list}}
  {{/label-group-main}}
{{/label-group}}
```

### Vertical overflow
```hbs
{{#> label-group label-group--id="label-group-vertical-overflow" label-group--modifier="pf-m-vertical"}}
  {{#> label-group-main}}
    {{#> label-group-list label-group-list--attribute='aria-label="Group of labels"'}}
      {{#> label-group-list-item}}
        {{> label label-text--value="Label 1" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="blue" label-text--value="Label 2" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="green" label-text--value="Label 3" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--IsOverflow=true label-text--value="3 more"}}
      {{/label-group-list-item}}
    {{/label-group-list}}
  {{/label-group-main}}
{{/label-group}}
```

### Vertical overflow expanded
```hbs
{{#> label-group label-group--id="label-group-vertical-overflow-expanded" label-group--modifier="pf-m-vertical"}}
  {{#> label-group-main}}
    {{#> label-group-list label-group-list--attribute='aria-label="Group of labels"'}}
      {{#> label-group-list-item}}
        {{> label label-text--value="Label 1" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="blue" label-text--value="Label 2" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="green" label-text--value="Label 3" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="cyan" label-text--value="Label 4" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="purple" label-text--value="Label 5" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--IsOverflow=true label-text--value="3 less"}}
      {{/label-group-list-item}}
    {{/label-group-list}}
  {{/label-group-main}}
{{/label-group}}
```

### Vertical category
```hbs
{{#> label-group label-group--id="label-group-vertical-category" label-group--modifier="pf-m-vertical pf-m-category"}}
  {{#> label-group-main}}
    {{#> label-group-label label-group-label--attribute=(concat 'id="' label-group--id '-label"')}}
      Group label
    {{/label-group-label}}
    {{#> label-group-list label-group-list--attribute=(concat 'aria-labelledby="' label-group--id '-label"')}}
      {{#> label-group-list-item}}
        {{> label label-text--value="Label 1" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="blue" label-text--value="Label 2" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="green" label-text--value="Label 3" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
    {{/label-group-list}}
  {{/label-group-main}}
{{/label-group}}
```

### Vertical category removable
```hbs
{{#> label-group label-group--id="label-group-vertical-category-removable" label-group--modifier="pf-m-vertical pf-m-category"}}
  {{#> label-group-main}}
    {{#> label-group-label label-group-label--attribute=(concat 'id="' label-group--id '-label"')}}
      Group label
    {{/label-group-label}}
    {{#> label-group-list label-group-list--attribute=(concat 'aria-labelledby="' label-group--id '-label"')}}
      {{#> label-group-list-item}}
        {{> label label-text--value="Label 1"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="blue" label-text--value="Label 2"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--color="green" label-text--value="Label 3"}}
      {{/label-group-list-item}}
    {{/label-group-list}}
  {{/label-group-main}}
  {{> label-group-close}}
{{/label-group}}
```

In addition to the JavaScript management of [editable labels](/components/label#editable), dynamic label groups also need:
* `.pf-v5-c-label-group.pf-m-editable` onClick event should (excluding labels within) set focus on `.pf-v5-c-label-group__textarea`

### Editable labels, dynamic label group
``` hbs isBeta
{{#> label-group label-group--id="editable-labels-editable-group-example" label-group--IsEditable=true}}
  {{#> label-group-main}}
    {{#> label-group-list label-group-list--attribute='aria-label="Group of labels"'}}
      {{#> label-group-list-item}}
        {{> label
            label--id=(concat label-group--id '-editable-label-editable-1')
            label--color="blue"
            label--IsEditable=true
            label--isRemovable=true
            label-text--value="Editable label 1"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label
            label--id=(concat label-group--id '-editable-label-editable-2')
            label--color="blue"
            label--isRemovable=true
            label--IsEditable=true
            label-text--value="Editable label 2"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label
            label--id=(concat label-group--id '-editable-label-editable-3')
            label--color="blue"
            label--isRemovable=true
            label--IsEditable=true
            label-text--value="Editable label 3"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item label-group-list-item--modifier="pf-m-textarea"}}
        {{> label-group-textarea}}
      {{/label-group-list-item}}
    {{/label-group-list}}
  {{/label-group-main}}
{{/label-group}}
```

### Editable labels, label active, dynamic label group
``` hbs isBeta
{{#> label-group label-group--id="editable-labels-label-active-editable-group-example" label-group--IsEditable=true}}
  {{#> label-group-main}}
    {{#> label-group-list label-group-list--attribute='aria-label="Group of labels"'}}
      {{#> label-group-list-item}}
        {{> label label--id=(concat label-group--id '-editable-label-editable-1') label-text--value="Editable label 1" label--color="blue" label--IsEditable=true label--isRemovable=true}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--id=(concat label-group--id '-editable-label-editable-2') label-text--value="Editable label 2" label--color="blue" label--IsEditable=true label--isRemovable=true}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--id=(concat label-group--id '-editable-label-editable-3') label-text--value="Editable label 3, active" label-editable-content--value="Editable label 3, active" label--color="blue" label--IsEditable=true label--IsEditableActive=true label--isRemovable=true}}
      {{/label-group-list-item}}
      {{#> label-group-list-item label-group-list-item--modifier="pf-m-textarea"}}
        {{> label-group-textarea}}
      {{/label-group-list-item}}
    {{/label-group-list}}
  {{/label-group-main}}
{{/label-group}}
```

### Static labels, dynamic label group
``` hbs
{{#> label-group label-group--id="static-labels-dynamic-label-group-example" label-group--IsEditable=true}}
  {{#> label-group-main}}
    {{#> label-group-list label-group-list--attribute='aria-label="Group of labels"'}}
      {{#> label-group-list-item}}
        {{> label label--id=(concat label-group--id '-editable-label-static-1') label-text--value="Static label 1" label--color="green" label--isRemovable=true}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--id=(concat label-group--id '-editable-label-static-2') label-text--value="Static label 2" label--color="green" label--isRemovable=true}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--id=(concat label-group--id '-editable-label-static-3') label-text--value="Static label 3" label--color="green" label--isRemovable=true}}
      {{/label-group-list-item}}
      {{#> label-group-list-item label-group-list-item--modifier="pf-m-textarea"}}
        {{> label-group-textarea}}
      {{/label-group-list-item}}
    {{/label-group-list}}
  {{/label-group-main}}
{{/label-group}}
```

### Mixed labels (static / editable), dynamic label group
``` hbs isBeta
{{#> label-group label-group--id="mixed-labels-dynamic-label-group-example" label-group--IsEditable=true}}
  {{#> label-group-main}}
    {{#> label-group-list label-group-list--attribute='aria-label="Group of labels"'}}
      {{#> label-group-list-item}}
        {{> label label--id=(concat label-group--id '-editable-label-static-1') label-text--value="Static label 1" label--color="green" label--isRemovable=true}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--id=(concat label-group--id '-editable-label-static-2') label-text--value="Static label 2" label--color="green" label--isRemovable=true}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--id=(concat label-group--id '-editable-label-dynamic-1') label-text--value="Dynamic, editable label 1" label--color="blue" label--IsEditable=true label--isRemovable=true}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--id=(concat label-group--id '-editable-label-dynamic-2') label-text--value="Dynamic, editable label 2" label--color="blue" label--IsEditable=true label--isRemovable=true}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--id=(concat label-group--id '-editable-label-dynamic-3') label-text--value="Dynamic, editable label 3" label--color="blue" label--IsEditable=true label--isRemovable=true}}
      {{/label-group-list-item}}
      {{#> label-group-list-item label-group-list-item--modifier="pf-m-textarea"}}
        {{> label-group-textarea}}
      {{/label-group-list-item}}
    {{/label-group-list}}
  {{/label-group-main}}
{{/label-group}}
```

### Compact labels
```hbs
{{#> label-group label-group--id="label-group-compact"}}
  {{#> label-group-main}}
    {{#> label-group-list label-group-list--attribute='aria-label="Group of labels"'}}
      {{#> label-group-list-item}}
        {{> label
            label--IsCompact=true
            label-text--value="Label 1"
            label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label
            label--color="blue"
            label--IsCompact=true
            label-text--value="Label 2"
            label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label
            label--color="green"
            label--IsCompact=true
            label-text--value="Label 3"
            label-icon--value="info-circle"}}
      {{/label-group-list-item}}
    {{/label-group-list}}
  {{/label-group-main}}
{{/label-group}}
```

### Compact labels, overflow
```hbs
{{#> label-group label-group--id="label-group-compact-overflow"}}
  {{#> label-group-main}}
    {{#> label-group-list label-group-list--attribute='aria-label="Group of labels"'}}
      {{#> label-group-list-item}}
        {{> label label--IsCompact=true label-text--value="Label 1" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label
            label--color="blue"
            label--IsCompact=true
            label-text--value="Label 2"
            label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label
            label--color="green"
            label--IsCompact=true
            label-text--value="Label 3"
            label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label label--IsOverflow=true label--IsCompact=true label-text--value="3 more"}}
      {{/label-group-list-item}}
    {{/label-group-list}}
  {{/label-group-main}}
{{/label-group}}
```

### Compact labels, vertical
```hbs
{{#> label-group label-group--id="label-group-compact-vertical" label-group--modifier="pf-m-vertical"}}
  {{#> label-group-main}}
    {{#> label-group-list label-group-list--attribute='aria-label="Group of labels"'}}
      {{#> label-group-list-item}}
        {{> label label--IsCompact=true label-text--value="Label 1" label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label
            label--color="blue"
            label--IsCompact=true
            label-text--value="Label 2"
            label-icon--value="info-circle"}}
      {{/label-group-list-item}}
      {{#> label-group-list-item}}
        {{> label
            label--color="green"
            label--IsCompact=true
            label-text--value="Label 3"
            label-icon--value="info-circle"}}
      {{/label-group-list-item}}
    {{/label-group-list}}
  {{/label-group-main}}
{{/label-group}}
```

## Documentation

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="list"` | `.pf-v5-c-label-group__list` | Indicates that the label group list is a list element. This role is redundant since `.pf-v5-c-label-group__list` is a `<ul>` but is required for screen readers to announce the list propertly. **Required** |
| `aria-label="[button label text]"` | `.pf-v5-c-label-group__close > button` |  Provides an accessible name for a label group close button when an icon is used instead of text. Required when an icon is used with no supporting text. **Required** |
| `aria-labelledby="[id value of .pf-v5-c-label-group__close > button] [id value of .pf-v5-c-label-group__label]"` | `.pf-v5-c-label-group__close > button` | Provides an accessible name for the button. **Required** |
| `aria-label="[label text]"` | `.pf-v5-c-label-group__textarea` | Provides an accessible name for the textarea. **Required** |
| `row="1"` | `.pf-v5-c-label-group__textarea` | Indicates that the label group textarea is one row. **Required** |
| `tabindex="0"` | `.pf-v5-c-label-group__textarea` | Inserts the label group textarea into the tab order of the page so that it is focusable. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-label-group` | `<div>` | Initiates the label group component. **Required.** |
| `.pf-v5-c-label-group__list` | `<ul>` | Initiates the container for a list of labels. **Required.** |
| `.pf-v5-c-label-group__list-item` | `<li>` | Initiates the list item inside of the label group. **Required.** |
| `.pf-v5-c-label-group__main` | `<div>` | Initiates the main element in the label group. **Required when label and list are present** |
| `.pf-v5-c-label-group__textarea` | `<textarea>` | Initiates the textarea element in the label group. **Required when label group is editable** |
| `.pf-v5-c-label-group__label` | `<span>` | Initiates the label to be used in the label group. |
| `.pf-v5-c-label-group__close` | `<div>` | Initiates the container used for the button to remove the label group. |
| `.pf-v5-c-button` | `.pf-v5-c-label-group__close <button>` | Initiates the button used to remove the label group. |
| `.pf-m-editable` | `.pf-v5-c-label-group` | Modifies the label group to support editable styling. |
| `.pf-m-category` | `.pf-v5-c-label-group` | Modifies the label group to support category styling. |
| `.pf-m-textarea` | `.pf-v5-c-label-group__list-item` | Modifies the label group list item to support textarea. |
