---
id: Label
section: components
cssPrefix: pf-c-label
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

- `.pf-c-label__editable-text` onClick event should:
  - Set `.pf-m-editable-active` on `.pf-c-label`
  - Change `.pf-c-label__editable-text`from a button to an input
- Return keypress, when content is editable, should:
  - Be captured to prevent line wrapping and save updates to label text
  - Remove `.pf-m-editable-active` from `.pf-c-label`
- Esc keypress, when content is editable, should:
  - Undo any update to label text
  - Remove `.pf-m-editable-active` from `.pf-c-label`
  - Change `.pf-c-label__editable-text` back to a button

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

## Documentation

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-label` | `<span>`, `<button>` | Initiates a label. Without a color modifier, the label's default style is grey. Use a color modifier to change the label color. Use a `<button>` if the label is an overflow label used in the label group. **Required** |
| `.pf-c-label__content` | `<span>`, `<a>`, `<button>` | Creates a content wrapper. Use as an `<a>` element if the label serves as a link. Use a `<button>` if the label serves as an action. **Required** |
| `.pf-c-label__icon` | `<span>` | Initiates a label icon. |
| `.pf-c-label__text` | `<span>` | Initiates label text. **Required** |
| `.pf-c-label__editable-text` | `<button>`, `<input>` | Initiates editable label text. See the [editable](#editable) example for details about handling behavior in Javascript.|
| `.pf-c-label__actions` | `<span>` | Creates a wrapper for label actions. **Required for removable labels** |
| `.pf-m-outline` | `.pf-c-label` | Modifies label for outline styles. |
| `.pf-m-compact` | `.pf-c-label` | Modifies label for compact styles. |
| `.pf-m-overflow` | `.pf-c-label` | Modifies label for overflow styles for use in a label group. |
| `.pf-m-add` | `.pf-c-label` | Modifies label for add styles for use in a label group. |
| `.pf-m-blue` | `.pf-c-label` | Modifies the label to have blue colored styling. |
| `.pf-m-green` | `.pf-c-label` | Modifies the label to have green colored styling. |
| `.pf-m-orange` | `.pf-c-label` | Modifies the label to have orange colored styling. |
| `.pf-m-red` | `.pf-c-label` | Modifies the label to have red colored styling. |
| `.pf-m-purple` | `.pf-c-label` | Modifies the label to have purple colored styling. |
| `.pf-m-cyan` | `.pf-c-label` | Modifies the label to have cyan colored styling. |
| `.pf-m-gold` | `.pf-c-label` | Modifies the label to have gold colored styling. |
| `.pf-m-editable` | `.pf-c-label` | Modifies label for editable styles. |
| `.pf-m-editable-active` | `.pf-c-label.pf-m-editable` | Modifies editable label for active styles. |
| `--pf-c-label__text--MaxWidth` | `.pf-c-label` | Modifiex the max width of the text before text will truncate. |
