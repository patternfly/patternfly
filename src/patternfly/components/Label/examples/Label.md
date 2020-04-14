---
title: Label
section: components
cssPrefix: pf-c-label
---

import './Label.css'

## Examples
```hbs title=Filled
{{#> label label--id="default-grey"}}
  {{#> label-text}}
    Grey
  {{/label-text}}
{{/label}}

{{#> label label--id="default-grey-icon"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Grey icon
  {{/label-text}}
{{/label}}

{{#> label label--id="default-grey-close" label--isRemovable="true"}}
  {{#> label-text}}
    Grey removable
  {{/label-text}}
{{/label}}

{{#> label label--id="default-grey-icon-close" label--isRemovable="true"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Grey icon removable
  {{/label-text}}
{{/label}}

{{#> label label--id="default-grey-link" label-content--IsLink="true"}}
  {{#> label-text}}
    Grey link
  {{/label-text}}
{{/label}}

{{#> label label--id="default-grey-link-close" label-content--IsLink="true" label--isRemovable="true"}}
  {{#> label-text}}
    Grey link removable
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="default-blue" label--modifier="pf-m-blue"}}
  {{#> label-text}}
    Blue
  {{/label-text}}
{{/label}}

{{#> label label--id="default-blue-icon" label--modifier="pf-m-blue"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Blue icon
  {{/label-text}}
{{/label}}

{{#> label label--id="default-blue-close" label--isRemovable="true" label--modifier="pf-m-blue"}}
  {{#> label-text}}
    Blue removable
  {{/label-text}}
{{/label}}

{{#> label label--id="default-blue-icon-close" label--isRemovable="true" label--modifier="pf-m-blue"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Blue icon removable
  {{/label-text}}
{{/label}}

{{#> label label--id="default-blue-link" label-content--IsLink="true" label--modifier="pf-m-blue"}}
  {{#> label-text}}
    Blue link
  {{/label-text}}
{{/label}}

{{#> label label--id="default-blue-link-close" label-content--IsLink="true" label--isRemovable="true" label--modifier="pf-m-blue"}}
  {{#> label-text}}
    Blue link removable
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="default-green" label--modifier="pf-m-green"}}
  {{#> label-text}}
    Green
  {{/label-text}}
{{/label}}

{{#> label label--id="default-green-icon" label--modifier="pf-m-green"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Green icon
  {{/label-text}}
{{/label}}

{{#> label label--id="default-green-close" label--isRemovable="true" label--modifier="pf-m-green"}}
  {{#> label-text}}
    Green removable
  {{/label-text}}
{{/label}}

{{#> label label--id="default-green-icon-close" label--isRemovable="true" label--modifier="pf-m-green"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Green icon removable
  {{/label-text}}
{{/label}}

{{#> label label--id="default-green-link" label-content--IsLink="true" label--modifier="pf-m-green"}}
  {{#> label-text}}
    Green link
  {{/label-text}}
{{/label}}

{{#> label label--id="default-green-link-close" label-content--IsLink="true" label--isRemovable="true" label--modifier="pf-m-green"}}
  {{#> label-text}}
    Green link removable
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="default-orange" label--modifier="pf-m-orange"}}
  {{#> label-text}}
    Orange
  {{/label-text}}
{{/label}}

{{#> label label--id="default-orange-icon" label--modifier="pf-m-orange"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Orange icon
  {{/label-text}}
{{/label}}

{{#> label label--id="default-orange-close" label--isRemovable="true" label--modifier="pf-m-orange"}}
  {{#> label-text}}
    Orange removable
  {{/label-text}}
{{/label}}

{{#> label label--id="default-orange-icon-close" label--isRemovable="true" label--modifier="pf-m-orange"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Orange icon removable
  {{/label-text}}
{{/label}}

{{#> label label--id="default-orange-link" label-content--IsLink="true" label--modifier="pf-m-orange"}}
  {{#> label-text}}
    Orange link
  {{/label-text}}
{{/label}}

{{#> label label--id="default-orange-link-close" label-content--IsLink="true" label--isRemovable="true" label--modifier="pf-m-orange"}}
  {{#> label-text}}
    Orange link removable
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="default-red" label--modifier="pf-m-red"}}
  {{#> label-text}}
    Red
  {{/label-text}}
{{/label}}

{{#> label label--id="default-red-icon" label--modifier="pf-m-red"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Red icon
  {{/label-text}}
{{/label}}

{{#> label label--id="default-red-close" label--isRemovable="true" label--modifier="pf-m-red"}}
  {{#> label-text}}
    Red removable
  {{/label-text}}
{{/label}}

{{#> label label--id="default-red-icon-close" label--isRemovable="true" label--modifier="pf-m-red"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Red icon removable
  {{/label-text}}
{{/label}}

{{#> label label--id="default-red-link" label-content--IsLink="true" label--modifier="pf-m-red"}}
  {{#> label-text}}
    Red link
  {{/label-text}}
{{/label}}

{{#> label label--id="default-red-link-close" label-content--IsLink="true" label--isRemovable="true" label--modifier="pf-m-red"}}
  {{#> label-text}}
    Red link removable
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="default-purple" label--modifier="pf-m-purple"}}
  {{#> label-text}}
    Purple
  {{/label-text}}
{{/label}}

{{#> label label--id="default-purple-icon" label--modifier="pf-m-purple"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Purple icon
  {{/label-text}}
{{/label}}

{{#> label label--id="default-purple-close" label--isRemovable="true" label--modifier="pf-m-purple"}}
  {{#> label-text}}
    Purple removable
  {{/label-text}}
{{/label}}

{{#> label label--id="default-purple-icon-close" label--isRemovable="true" label--modifier="pf-m-purple"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Purple icon removable
  {{/label-text}}
{{/label}}

{{#> label label--id="default-purple-link" label-content--IsLink="true" label--modifier="pf-m-purple"}}
  {{#> label-text}}
    Purple link
  {{/label-text}}
{{/label}}

{{#> label label--id="default-purple-link-close" label-content--IsLink="true" label--isRemovable="true" label--modifier="pf-m-purple"}}
  {{#> label-text}}
    Purple link removable
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="default-cyan" label--modifier="pf-m-cyan"}}
  {{#> label-text}}
    Cyan
  {{/label-text}}
{{/label}}

{{#> label label--id="default-cyan-icon" label--modifier="pf-m-cyan"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Cyan icon
  {{/label-text}}
{{/label}}

{{#> label label--id="default-cyan-close" label--isRemovable="true" label--modifier="pf-m-cyan"}}
  {{#> label-text}}
    Cyan removable
  {{/label-text}}
{{/label}}

{{#> label label--id="default-cyan-icon-close" label--isRemovable="true" label--modifier="pf-m-cyan"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Cyan icon removable
  {{/label-text}}
{{/label}}

{{#> label label--id="default-cyan-link" label-content--IsLink="true" label--modifier="pf-m-cyan"}}
  {{#> label-text}}
    Cyan link
  {{/label-text}}
{{/label}}

{{#> label label--id="default-cyan-link-close" label-content--IsLink="true" label--isRemovable="true" label--modifier="pf-m-cyan"}}
  {{#> label-text}}
    Cyan link removable
  {{/label-text}}
{{/label}}
```


```hbs title=Outline
{{#> label label--id="outline-grey" label--modifier="pf-m-outline"}}
  {{#> label-text}}
    Grey
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-grey-icon" label--modifier="pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Grey icon
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-grey-close" label--isRemovable="true" label--modifier="pf-m-outline"}}
  {{#> label-text}}
    Grey removable
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-grey-icon-close" label--isRemovable="true" label--modifier="pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Grey icon removable
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-grey-link" label-content--IsLink="true" label--modifier="pf-m-outline"}}
  {{#> label-text}}
    Grey link
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-grey-link-close" label-content--IsLink="true" label--modifier="pf-m-outline" label--isRemovable="true"}}
  {{#> label-text}}
    Grey link removable
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="outline-blue" label--modifier="pf-m-blue pf-m-outline"}}
  {{#> label-text}}
    Blue
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-blue-icon" label--modifier="pf-m-blue pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Blue icon
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-blue-close" label--isRemovable="true" label--modifier="pf-m-blue pf-m-outline"}}
  {{#> label-text}}
    Blue removable
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-blue-icon-close" label--isRemovable="true" label--modifier="pf-m-blue pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Blue icon removable
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-blue-link" label-content--IsLink="true" label--modifier="pf-m-outline pf-m-blue"}}
  {{#> label-text}}
    Blue link
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-blue-link-close" label-content--IsLink="true" label--modifier="pf-m-outline pf-m-blue" label--isRemovable="true"}}
  {{#> label-text}}
    Blue link removable
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="outline-green" label--modifier="pf-m-green pf-m-outline"}}
  {{#> label-text}}
    Green
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-green-icon" label--modifier="pf-m-green pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Green icon
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-green-close" label--isRemovable="true" label--modifier="pf-m-green pf-m-outline"}}
  {{#> label-text}}
    Green removable
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-green-icon-close" label--isRemovable="true" label--modifier="pf-m-green pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Green icon removable
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-green-link" label-content--IsLink="true" label--modifier="pf-m-outline pf-m-green"}}
  {{#> label-text}}
    Green link
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-green-link-close" label-content--IsLink="true" label--modifier="pf-m-outline pf-m-green" label--isRemovable="true"}}
  {{#> label-text}}
    Green link removable
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="outline-orange" label--modifier="pf-m-orange pf-m-outline"}}
  {{#> label-text}}
    Orange
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-orange-icon" label--modifier="pf-m-orange pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Orange icon
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-orange-close" label--isRemovable="true" label--modifier="pf-m-orange pf-m-outline"}}
  {{#> label-text}}
    Orange removable
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-orange-icon-close" label--isRemovable="true" label--modifier="pf-m-orange pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Orange icon removable
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-orange-link" label-content--IsLink="true" label--modifier="pf-m-outline pf-m-orange"}}
  {{#> label-text}}
    Orange link
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-orange-link-close" label-content--IsLink="true" label--modifier="pf-m-outline pf-m-orange" label--isRemovable="true"}}
  {{#> label-text}}
    Orange link removable
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="outline-red" label--modifier="pf-m-red pf-m-outline"}}
  {{#> label-text}}
    Red
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-red-icon" label--modifier="pf-m-red pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Red icon
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-red-close" label--isRemovable="true" label--modifier="pf-m-red pf-m-outline"}}
  {{#> label-text}}
    Red removable
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-red-icon-close" label--isRemovable="true" label--modifier="pf-m-red pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Red icon removable
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-red-link" label-content--IsLink="true" label--modifier="pf-m-outline pf-m-red"}}
  {{#> label-text}}
    Red link
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-red-link-close" label-content--IsLink="true" label--modifier="pf-m-outline pf-m-red" label--isRemovable="true"}}
  {{#> label-text}}
    Red link removable
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="outline-purple" label--modifier="pf-m-purple pf-m-outline"}}
  {{#> label-text}}
    Purple
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-purple-icon" label--modifier="pf-m-purple pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Purple icon
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-purple-close" label--isRemovable="true" label--modifier="pf-m-purple pf-m-outline"}}
  {{#> label-text}}
    Purple removable
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-purple-icon-close" label--isRemovable="true" label--modifier="pf-m-purple pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Purple icon removable
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-purple-link" label-content--IsLink="true" label--modifier="pf-m-outline pf-m-purple"}}
  {{#> label-text}}
    Purple link
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-purple-link-close" label-content--IsLink="true" label--modifier="pf-m-outline pf-m-purple" label--isRemovable="true"}}
  {{#> label-text}}
    Purple link removable
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="outline-cyan" label--modifier="pf-m-cyan pf-m-outline"}}
  {{#> label-text}}
    Cyan
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-cyan-icon" label--modifier="pf-m-cyan pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Cyan icon
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-cyan-close" label--isRemovable="true" label--modifier="pf-m-cyan pf-m-outline"}}
  {{#> label-text}}
    Cyan removable
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-cyan-icon-close" label--isRemovable="true" label--modifier="pf-m-cyan pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Cyan icon removable
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-cyan-link" label-content--IsLink="true" label--modifier="pf-m-outline pf-m-cyan"}}
  {{#> label-text}}
    Cyan link
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-cyan-link-close" label-content--IsLink="true" label--modifier="pf-m-outline pf-m-cyan" label--isRemovable="true"}}
  {{#> label-text}}
    Cyan link removable
  {{/label-text}}
{{/label}}
```

## Documentation

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-label` | `<span>` | Iniates a label. Without a color modifier, the label's default style is grey. Use a color modifier to change the label color. **Required** |
| `.pf-c-label__content` | `<span>`, `<a>` | Iniates a label content. Use as an `<a>` if the label serves as a link. **Required** |
| `.pf-c-label__icon` | `<span>` | Iniates a label icon. Without a color modifier, the label's default style is grey. Use a color modifier to change the label color.  |
| `.pf-c-label__text` | `<span>` | Iniates a label. Without a color modifier, the label's default style is grey. Use a color modifier to change the label color. **Required** |
| `.pf-m-outline` | `.pf-c-label` | Modifies label for outline styles. |
| `.pf-m-blue` | `.pf-c-label` | Modifies the label to have blue colored styling. |
| `.pf-m-green` | `.pf-c-label` | Modifies the label to have green colored styling. |
| `.pf-m-orange` | `.pf-c-label` | Modifies the label to have orange colored styling. |
| `.pf-m-red` | `.pf-c-label` | Modifies the label to have red colored styling. |
| `.pf-m-purple` | `.pf-c-label` | Modifies the label to have purple colored styling. |
| `.pf-m-cyan` | `.pf-c-label` | Modifies the label to have cyan colored styling. |
