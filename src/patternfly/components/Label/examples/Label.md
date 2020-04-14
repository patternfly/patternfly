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
    Grey icon and removable
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="default-grey-compact" label--modifier="pf-m-compact"}}
  {{#> label-text}}
    Grey compact
  {{/label-text}}
{{/label}}

{{#> label label--id="default-grey-compact-icon" label--modifier="pf-m-compact"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Grey compact icon
  {{/label-text}}
{{/label}}

{{#> label label--id="default-grey-compact-removable" label--modifier="pf-m-compact" label--isRemovable="true"}}
  {{#> label-text}}
    Grey compact removable
  {{/label-text}}
{{/label}}

{{#> label label--id="default-grey-compact-icon-removable" label--modifier="pf-m-compact" label--isRemovable="true"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Grey compact icon removable
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="default-grey-link" label-content--type="a" label-content--attribute='href="#"'}}
  {{#> label-text}}
    Grey link
  {{/label-text}}
{{/label}}

{{#> label label--id="default-grey-link-icon" label-content--type="a" label-content--attribute='href="#"'}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Grey link icon
  {{/label-text}}
{{/label}}

{{#> label label--id="default-grey-link-close" label-content--type="a" label-content--attribute='href="#"'  label--isRemovable="true"}}
  {{#> label-text}}
    Grey link removable
  {{/label-text}}
{{/label}}

{{#> label label--id="default-grey-link-icon-close" label-content--type="a" label-content--attribute='href="#"' label--isRemovable="true"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Grey link icon and removable
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="default-grey-button" label-content--type="button"}}
  {{#> label-text}}
    Grey button
  {{/label-text}}
{{/label}}

{{#> label label--id="default-grey-button-icon" label-content--type="button"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Grey button icon
  {{/label-text}}
{{/label}}

{{#> label label--id="default-grey-button-removable" label-content--type="button" label--isRemovable="true"}}
  {{#> label-text}}
    Grey button removable
  {{/label-text}}
{{/label}}

{{#> label label--id="default-grey-button-icon-removable" label-content--type="button" label--isRemovable="true"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Grey button icon and removable
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="default-blue" label--modifier="pf-m-blue"}}
  {{#> label-text}}
    Blue label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-blue-icon" label--modifier="pf-m-blue"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Blue label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-blue-close" label--isRemovable="true" label--modifier="pf-m-blue"}}
  {{#> label-text}}
    Blue label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-blue-icon-close" label--isRemovable="true" label--modifier="pf-m-blue"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Blue label
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="default-green" label--modifier="pf-m-green"}}
  {{#> label-text}}
    Green label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-green-icon" label--modifier="pf-m-green"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Green label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-green-close" label--isRemovable="true" label--modifier="pf-m-green"}}
  {{#> label-text}}
    Green label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-green-icon-close" label--isRemovable="true" label--modifier="pf-m-green"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Green label
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="default-orange" label--modifier="pf-m-orange"}}
  {{#> label-text}}
    Orange label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-orange-icon" label--modifier="pf-m-orange"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Orange label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-orange-close" label--isRemovable="true" label--modifier="pf-m-orange"}}
  {{#> label-text}}
    Orange label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-orange-icon-close" label--isRemovable="true" label--modifier="pf-m-orange"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Orange label
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="default-red" label--modifier="pf-m-red"}}
  {{#> label-text}}
    Red label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-red-icon" label--modifier="pf-m-red"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Red label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-red-close" label--isRemovable="true" label--modifier="pf-m-red"}}
  {{#> label-text}}
    Red label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-red-icon-close" label--isRemovable="true" label--modifier="pf-m-red"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Red label
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="default-purple" label--modifier="pf-m-purple"}}
  {{#> label-text}}
    Purple label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-purple-icon" label--modifier="pf-m-purple"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Purple label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-purple-close" label--isRemovable="true" label--modifier="pf-m-purple"}}
  {{#> label-text}}
    Purple label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-purple-icon-close" label--isRemovable="true" label--modifier="pf-m-purple"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Purple label
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="default-cyan" label--modifier="pf-m-cyan"}}
  {{#> label-text}}
    Cyan label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-cyan-icon" label--modifier="pf-m-cyan"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Cyan label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-cyan-close" label--isRemovable="true" label--modifier="pf-m-cyan"}}
  {{#> label-text}}
    Cyan label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-cyan-icon-close" label--isRemovable="true" label--modifier="pf-m-cyan"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Cyan label
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
    Grey icon and removable
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="outline-grey-compact" label--modifier="pf-m-outline pf-m-compact"}}
  {{#> label-text}}
    Grey compact
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-grey-compact-icon" label--modifier="pf-m-outline pf-m-compact"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Grey compact icon
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-grey-compact-removable" label--modifier="pf-m-outline pf-m-compact" label--isRemovable="true"}}
  {{#> label-text}}
    Grey compact removable
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-grey-compact-icon-removable" label--modifier="pf-m-outline pf-m-compact" label--isRemovable="true"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Grey compact icon removable
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="outline-grey-link" label-content--type="a" label-content--attribute='href="#"' label--modifier="pf-m-outline"}}
  {{#> label-text}}
    Grey link
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-grey-link-icon" label-content--type="a" label-content--attribute='href="#"' label--modifier="pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Grey link icon
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-grey-link-close" label-content--type="a" label-content--attribute='href="#"'  label--isRemovable="true" label--modifier="pf-m-outline"}}
  {{#> label-text}}
    Grey link removable
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-grey-link-icon-close" label-content--type="a" label-content--attribute='href="#"' label--isRemovable="true" label--modifier="pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Grey link icon and removable
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="outline-grey-button" label-content--type="button" label--modifier="pf-m-outline"}}
  {{#> label-text}}
    Grey button
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-grey-button-icon" label-content--type="button" label--modifier="pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Grey button icon
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-grey-button-removable" label-content--type="button" label--isRemovable="true" label--modifier="pf-m-outline"}}
  {{#> label-text}}
    Grey button removable
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-grey-button-icon-removable" label-content--type="button" label--isRemovable="true" label--modifier="pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Grey button icon and removable
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="outline-blue" label--modifier="pf-m-blue pf-m-outline"}}
  {{#> label-text}}
    Blue label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-blue-icon" label--modifier="pf-m-blue pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Blue label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-blue-close" label--isRemovable="true" label--modifier="pf-m-blue pf-m-outline"}}
  {{#> label-text}}
    Blue label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-blue-icon-close" label--isRemovable="true" label--modifier="pf-m-blue pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Blue label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-blue" label--modifier="pf-m-blue pf-m-outline pf-m-clickable" label--attribute='tabindex="0"'}}
  {{#> label-text}}
    Blue clickable label
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="outline-green" label--modifier="pf-m-green pf-m-outline"}}
  {{#> label-text}}
    Green label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-green-icon" label--modifier="pf-m-green pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Green label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-green-close" label--isRemovable="true" label--modifier="pf-m-green pf-m-outline"}}
  {{#> label-text}}
    Green label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-green-icon-close" label--isRemovable="true" label--modifier="pf-m-green pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Green label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-green" label--modifier="pf-m-green pf-m-outline pf-m-clickable" label--attribute='tabindex="0"'}}
  {{#> label-text}}
    Green clickable label
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="outline-orange" label--modifier="pf-m-orange pf-m-outline"}}
  {{#> label-text}}
    Orange label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-orange-icon" label--modifier="pf-m-orange pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Orange label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-orange-close" label--isRemovable="true" label--modifier="pf-m-orange pf-m-outline"}}
  {{#> label-text}}
    Orange label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-orange-icon-close" label--isRemovable="true" label--modifier="pf-m-orange pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Orange label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-orange" label--modifier="pf-m-orange pf-m-outline pf-m-clickable" label--attribute='tabindex="0"'}}
  {{#> label-text}}
    Orange clickable label
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="outline-red" label--modifier="pf-m-red pf-m-outline"}}
  {{#> label-text}}
    Red label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-red-icon" label--modifier="pf-m-red pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Red label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-red-close" label--isRemovable="true" label--modifier="pf-m-red pf-m-outline"}}
  {{#> label-text}}
    Red label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-red-icon-close" label--isRemovable="true" label--modifier="pf-m-red pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Red label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-red" label--modifier="pf-m-red pf-m-outline pf-m-clickable" label--attribute='tabindex="0"'}}
  {{#> label-text}}
    Red clickable label
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="outline-purple" label--modifier="pf-m-purple pf-m-outline"}}
  {{#> label-text}}
    Purple label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-purple-icon" label--modifier="pf-m-purple pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Purple label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-purple-close" label--isRemovable="true" label--modifier="pf-m-purple pf-m-outline"}}
  {{#> label-text}}
    Purple label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-purple-icon-close" label--isRemovable="true" label--modifier="pf-m-purple pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Purple label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-purple" label--modifier="pf-m-purple pf-m-outline pf-m-clickable" label--attribute='tabindex="0"'}}
  {{#> label-text}}
    Purple clickable label
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="outline-cyan" label--modifier="pf-m-cyan pf-m-outline"}}
  {{#> label-text}}
    Cyan label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-cyan-icon" label--modifier="pf-m-cyan pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Cyan label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-cyan-close" label--isRemovable="true" label--modifier="pf-m-cyan pf-m-outline"}}
  {{#> label-text}}
    Cyan label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-cyan-icon-close" label--isRemovable="true" label--modifier="pf-m-cyan pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Cyan label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-cyan" label--modifier="pf-m-cyan pf-m-outline pf-m-clickable" label--attribute='tabindex="0"'}}
  {{#> label-text}}
    Cyan clickable label
  {{/label-text}}
{{/label}}
```

## Documentation
### Overview
Labels can be used in a variety of components and can adjust in font size to match that of the component it lives in. For example, labels can be used in tables. Specifically, the compact table has a modifier that adjusts its font size, so when using a label in this table, it's important to also add its respective `.pf-c-compact` modifier.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-label` | `<span>` | Iniates a label. Without a color modifier, the label's default style is grey. Use a color modifier to change the label color. **Required** |
| `.pf-c-label__content` | `<span>`, `<a>`, `<button>` | Iniates a label content. Use an `<a>` or `<button>` instead of a `<span>` for interactive label content. **Required** |
| `.pf-c-label__icon` | `<span>` | Iniates a label icon. Without a color modifier, the label's default style is grey. Use a color modifier to change the label color.  |
| `.pf-c-label__text` | `<span>` | Iniates a label. Without a color modifier, the label's default style is grey. Use a color modifier to change the label color. **Required** |
| `.pf-m-compact` | `.pf-c-label` | Modifies label for compact styles. |
| `.pf-m-outline` | `.pf-c-label` | Modifies label for outline styles. |
| `.pf-m-blue` | `.pf-c-label` | Modifies the label to have blue colored styling. |
| `.pf-m-green` | `.pf-c-label` | Modifies the label to have green colored styling. |
| `.pf-m-orange` | `.pf-c-label` | Modifies the label to have orange colored styling. |
| `.pf-m-red` | `.pf-c-label` | Modifies the label to have red colored styling. |
| `.pf-m-purple` | `.pf-c-label` | Modifies the label to have purple colored styling. |
| `.pf-m-cyan` | `.pf-c-label` | Modifies the label to have cyan colored styling. |
