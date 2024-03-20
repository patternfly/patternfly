---
id: Label
section: components
cssPrefix: ['pf-v5-c-label','pf-v5-c-label-group']
---

import './Label.css'

## Examples

### Filled
```hbs
{{> label-template-variants
    label-template-variants--title="Grey"
    label-template-variants--id="default"}}

<br><br>

{{> label-template-variants
    label-template-variants--title="Blue"
    label-template-variants--id="blue"
    label--color="blue"}}

<br><br>

{{> label-template-variants
    label-template-variants--title="Green"
    label-template-variants--id="green"
    label--color="green"}}

<br><br>

{{> label-template-variants
    label-template-variants--title="Orange"
    label-template-variants--id="orange"
    label--color="orange"}}

<br><br>

{{> label-template-variants
    label-template-variants--title="Red"
    label-template-variants--id="red"
    label--color="red"}}

<br><br>

{{> label-template-variants
    label-template-variants--title="Purple"
    label-template-variants--id="purple"
    label--color="purple"}}

<br><br>

{{> label-template-variants
    label-template-variants--title="Cyan"
    label-template-variants--id="cyan"
    label--color="cyan"}}

<br><br>
{{> label-template-variants
    label-template-variants--title="Gold"
    label-template-variants--id="gold"
    label--color="gold"}}
```

### Outline

```hbs
{{> label-template-variants
    label-template-variants--title="Grey"
    label-template-variants--id="grey-outline"
    label--IsOutlined=true}}

<br><br>

{{> label-template-variants
    label-template-variants--title="Blue"
    label-template-variants--id="blue-outline"
    label--color="blue"
    label--IsOutlined=true}}

<br><br>

{{> label-template-variants
    label-template-variants--title="Green"
    label-template-variants--id="green-outline"
    label--color="green"
    label--IsOutlined=true}}

<br><br>

{{> label-template-variants
    label-template-variants--title="Orange"
    label-template-variants--id="orange-outline"
    label--IsOutlined=true
    label--color="orange"}}

<br><br>

{{> label-template-variants
    label-template-variants--title="Red"
    label-template-variants--id="red-outline"
    label--color="red"
    label--IsOutlined=true}}

<br><br>

{{> label-template-variants
    label-template-variants--title="Purple"
    label-template-variants--id="purple-outline"
    label--color="purple"
    label--IsOutlined=true}}

<br><br>

{{> label-template-variants
    label-template-variants--title="Cyan"
    label-template-variants--id="cyan-outline"
    label--color="cyan"
    label--IsOutlined=true}}

<br><br>

{{> label-template-variants
    label-template-variants--title="Gold"
    label-template-variants--id="gold-outline"
    label--color="gold"
    label--IsOutlined=true}}
```

### Compact

```hbs
{{> label-template-variants
    label-template-variants--title="Compact"
    label-template-variants--id="compact"
    label--IsCompact=true}}
```

### Overflow

This style of label is used to indicate overflow within a label group.

```hbs
{{> label
    label--id="overflow"
    label--IsOverflow=true
    label-text--value="Overflow"}}
```

### Editable


**Note: Editable label behavior must be handled with JavaScript.**

- `.pf-v5-c-label__editable-text` onClick event should:
  - Set `.pf-m-editable-active` on `.pf-v5-c-label`
  - Change `.pf-v5-c-label__editable-text`from a button to an input
- Return keypress, when content is editable, should:
  - Be captured to prevent line wrapping and save updates to label text
  - Remove `.pf-m-editable-active` from `.pf-v5-c-label`
- Esc keypress, when content is editable, should:
  - Undo any update to label text
  - Remove `.pf-m-editable-active` from `.pf-v5-c-label`
  - Change `.pf-v5-c-label__editable-text` back to a button

```hbs isBeta
{{> label
    label--id="editable-label"
    label--color="blue"
    label--IsEditable=true
    label--isRemovable=true
    label-text--value="Editable label"
    label-editable-content--value="Editable label"}}

{{> label
    label--id="editable-label-active"
    label--color="blue"
    label--IsEditable=true
    label--IsEditableActive=true
    label-text--value="Editable active"
    label-editable-content--value="Editable active"}}

{{> label
    label--id="compact-editable-label"
    label--color="blue"
    label--IsEditable=true
    label--isRemovable=true
    label--IsCompact=true
    label-text--value="Compact editable label"
    label-editable-content--value="Compact editable label"}}

{{> label
    label--id="compact-editable-label-active"
    label--color="blue"
    label--IsEditable=true
    label--IsEditableActive=true
    label--IsCompact=true
    label-text--value="Compact editable active"
    label-editable-content--value="Compact editable active"}}
```

### Add label

This style of label is used to add new labels to a label group.

```hbs isBeta
{{> label label--IsAdd=true label-text--value="Add Label"}}
```

### Basic label group
Use a label group to display multiple labels at once.

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

### Label group with overflow
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

### Label group with overflow expanded
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

### Editable label group with add button
The contents of a label group can be modified by removing labels or adding new ones using the Add button. 

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

### Label group with category label
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

### Label group with removable categories
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

### Vertical label group
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

### Vertical label group with overflow
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

### Vertical label group with overflow expanded
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

### Vertical label group with category
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

### Vertical label group with removable category
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

### Label group with compact labels
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

### Label group with compact labels and overflow
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

### Vertical label group with compact labels
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

### Label usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-label` | `<span>`, `<button>` | Initiates a label. Without a color modifier, the label's default style is grey. Use a color modifier to change the label color. Use a `<button>` if the label is an overflow label used in the label group. **Required** |
| `.pf-v5-c-label__content` | `<span>`, `<a>`, `<button>` | Creates a content wrapper. Use as an `<a>` element if the label serves as a link. Use a `<button>` if the label serves as an action. **Required** |
| `.pf-v5-c-label__icon` | `<span>` | Initiates a label icon. |
| `.pf-v5-c-label__text` | `<span>` | Initiates label text. **Required** |
| `.pf-v5-c-label__editable-text` | `<button>`, `<input>` | Initiates editable label text. See the [editable](#editable) example for details about handling behavior in Javascript.|
| `.pf-v5-c-label__actions` | `<span>` | Creates a wrapper for label actions. **Required for removable labels** |
| `.pf-m-outline` | `.pf-v5-c-label` | Modifies label for outline styles. |
| `.pf-m-compact` | `.pf-v5-c-label` | Modifies label for compact styles. |
| `.pf-m-overflow` | `.pf-v5-c-label` | Modifies label for overflow styles for use in a label group. |
| `.pf-m-add` | `.pf-v5-c-label` | Modifies label for add styles for use in a label group. |
| `.pf-m-blue` | `.pf-v5-c-label` | Modifies the label to have blue colored styling. |
| `.pf-m-green` | `.pf-v5-c-label` | Modifies the label to have green colored styling. |
| `.pf-m-orange` | `.pf-v5-c-label` | Modifies the label to have orange colored styling. |
| `.pf-m-red` | `.pf-v5-c-label` | Modifies the label to have red colored styling. |
| `.pf-m-purple` | `.pf-v5-c-label` | Modifies the label to have purple colored styling. |
| `.pf-m-cyan` | `.pf-v5-c-label` | Modifies the label to have cyan colored styling. |
| `.pf-m-gold` | `.pf-v5-c-label` | Modifies the label to have gold colored styling. |
| `.pf-m-editable` | `.pf-v5-c-label` | Modifies label for editable styles. |
| `.pf-m-editable-active` | `.pf-v5-c-label.pf-m-editable` | Modifies editable label for active styles. |
| `.pf-m-disabled` | `.pf-v5-c-label` | Modifies label for disabled styles. |
| `--pf-v5-c-label__text--MaxWidth` | `.pf-v5-c-label` | Modifiex the max width of the text before text will truncate. |

### Label group accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="list"` | `.pf-v5-c-label-group__list` | Indicates that the label group list is a list element. This role is redundant since `.pf-v5-c-label-group__list` is a `<ul>` but is required for screen readers to announce the list properly. **Required** |
| `aria-label="[button label text]"` | `.pf-v5-c-label-group__close > button` |  Provides an accessible name for a label group close button when an icon is used instead of text. Required when an icon is used with no supporting text. **Required** |
| `aria-labelledby="[id value of .pf-v5-c-label-group__close > button] [id value of .pf-v5-c-label-group__label]"` | `.pf-v5-c-label-group__close > button` | Provides an accessible name for the button. **Required** |
| `aria-label="[label text]"` | `.pf-v5-c-label-group__textarea` | Provides an accessible name for the textarea. **Required** |
| `row="1"` | `.pf-v5-c-label-group__textarea` | Indicates that the label group textarea is one row. **Required** |
| `tabindex="0"` | `.pf-v5-c-label-group__textarea` | Inserts the label group textarea into the tab order of the page so that it is focusable. **Required** |

### Label group usage
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
