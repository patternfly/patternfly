---
id: Label
section: components
cssPrefix: pf-c-label
---

import './Label.css'

## Examples

### Filled
```hbs
{{> __label-variants __label-variants--id="default" __label-variants--title="Grey"}}

<br><br>
{{> __label-variants __label-variants--id="blue" __label-variants--title="Blue" label--color="blue"}}

<br><br>
{{> __label-variants __label-variants--id="green" __label-variants--title="Green" label--color="green"}}

<br><br>
{{> __label-variants __label-variants--id="orange" __label-variants--title="Orange" label--color="orange"}}

<br><br>
{{> __label-variants __label-variants--id="red" __label-variants--title="Red" label--color="red"}}

<br><br>
{{> __label-variants __label-variants--id="purple" __label-variants--title="Purple" label--color="purple"}}

<br><br>
{{> __label-variants __label-variants--id="cyan" __label-variants--title="Cyan" label--color="cyan"}}

<br><br>
{{> __label-variants __label-variants--id="gold" __label-variants--title="Gold" label--color="gold"}}
```

### Outline

```hbs
{{> __label-variants __label-variants--id="grey-outline" __label-variants--title="Grey" label--IsOutlined=true}}
<br><br>

{{> __label-variants __label-variants--id="blue-outline" __label-variants--title="Blue" label--color="blue" label--IsOutlined=true}}

<br><br>
{{> __label-variants __label-variants--id="green-outline" __label-variants--title="Green" label--color="green" label--IsOutlined=true}}

<br><br>
{{> __label-variants __label-variants--id="orange-outline" __label-variants--title="Orange" label--color="orange" label--IsOutlined=true}}

<br><br>
{{> __label-variants __label-variants--id="red-outline" __label-variants--title="Red" label--color="red" label--IsOutlined=true}}

<br><br>
{{> __label-variants __label-variants--id="purple-outline" __label-variants--title="Purple" label--color="purple" label--IsOutlined=true}}

<br><br>
{{> __label-variants __label-variants--id="cyan-outline" __label-variants--title="Cyan" label--color="cyan" label--IsOutlined=true}}

<br><br>
{{> __label-variants __label-variants--id="gold-outline" __label-variants--title="Gold" label--color="gold" label--IsOutlined=true}}
```

### Compact

```hbs
{{> __label-variants __label-variants--id="compact" __label-variants--title="Compact" label--IsCompact=true}}
```

### Overflow

This style of label is used to indicate overflow within a label group.

```hbs
{{> label label--id="overflow" label-text--text="Overflow" label--IsOverflow=true}}
```

### Editable


**Note: Editable label behavior must be handled with JavaScript.**

- `.pf-c-label__editable-text` onClick event should:
  - Set `.pf-m-editable-active` on `.pf-c-label`
  - Change `.pf-c-label__editable-text`from a button to an input
- Return keypress, when content is editable, should:
  - Be captured to prevent line wrapping and save updates to label text
  - Remove `.pf-m-editable-active` from `.pf-c-label`
  - Change `.pf-c-label__editable-text` back from an input to a button and set the `currvalue` of the button to the contents of the input
- Esc keypress, when content is editable, should:
  - Undo any update to label text
  - Remove `.pf-m-editable-active` from `.pf-c-label`
  - Change `.pf-c-label__editable-text` back to a button

```hbs isBeta
{{> label label--id="editable-label" label-text--text="Editable label" label-editable-content--value="Editable label" label--color="blue" label--IsEditable=true label--isRemovable=true}}

{{> label label--id="editable-label-active" label-text--text="Editable active" label-editable-content--value="Editable active" label--color="blue" label--IsEditable=true label--IsEditableActive=true}}

{{> label label--id="compact-editable-label" label-text--text="Compact editable label" label-editable-content--value="Compact editable label" label--color="blue" label--IsEditable=true label--isRemovable=true label--IsCompact=true}}

{{> label label--id="compact-editable-label-active" label-text--text="Compact editable active" label-editable-content--value="Compact editable active" label--color="blue" label--IsEditable=true label--IsEditableActive=true label--IsCompact=true}}
```

### Add label

This style of label is used to add new labels to a label group.

```hbs isBeta
{{#> label label--IsAdd=true}}
  {{#> label-text}}
    Add Label
  {{/label-text}}
{{/label}}
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
