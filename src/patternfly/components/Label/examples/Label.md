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
    grey label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-grey-icon"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    grey label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-grey-close" label--IsClosable="true"}}
  {{#> label-text}}
    grey label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-grey-icon-close" label--IsClosable="true"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    grey label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-grey" label--modifier="pf-m-hoverable" label--attribute='tabindex="0"'}}
  {{#> label-text}}
    grey hoverable label
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="default-blue" label--modifier="pf-m-blue"}}
  {{#> label-text}}
    blue label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-blue-icon" label--modifier="pf-m-blue"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    blue label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-blue-close" label--IsClosable="true" label--modifier="pf-m-blue"}}
  {{#> label-text}}
    blue label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-blue-icon-close" label--IsClosable="true" label--modifier="pf-m-blue"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    blue label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-blue" label--modifier="pf-m-blue pf-m-hoverable" label--attribute='tabindex="0"'}}
  {{#> label-text}}
    blue hoverable label
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="default-green" label--modifier="pf-m-green"}}
  {{#> label-text}}
    green label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-green-icon" label--modifier="pf-m-green"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    green label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-green-close" label--IsClosable="true" label--modifier="pf-m-green"}}
  {{#> label-text}}
    green label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-green-icon-close" label--IsClosable="true" label--modifier="pf-m-green"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    green label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-green" label--modifier="pf-m-green pf-m-hoverable" label--attribute='tabindex="0"'}}
  {{#> label-text}}
    green hoverable label
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="default-orange" label--modifier="pf-m-orange"}}
  {{#> label-text}}
    orange label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-orange-icon" label--modifier="pf-m-orange"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    orange label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-orange-close" label--IsClosable="true" label--modifier="pf-m-orange"}}
  {{#> label-text}}
    orange label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-orange-icon-close" label--IsClosable="true" label--modifier="pf-m-orange"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    orange label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-orange" label--modifier="pf-m-orange pf-m-hoverable" label--attribute='tabindex="0"'}}
  {{#> label-text}}
    orange hoverable label
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="default-red" label--modifier="pf-m-red"}}
  {{#> label-text}}
    red label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-red-icon" label--modifier="pf-m-red"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    red label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-red-close" label--IsClosable="true" label--modifier="pf-m-red"}}
  {{#> label-text}}
    red label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-red-icon-close" label--IsClosable="true" label--modifier="pf-m-red"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    red label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-red" label--modifier="pf-m-red pf-m-hoverable" label--attribute='tabindex="0"'}}
  {{#> label-text}}
    red hoverable label
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="default-purple" label--modifier="pf-m-purple"}}
  {{#> label-text}}
    purple label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-purple-icon" label--modifier="pf-m-purple"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    purple label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-purple-close" label--IsClosable="true" label--modifier="pf-m-purple"}}
  {{#> label-text}}
    purple label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-purple-icon-close" label--IsClosable="true" label--modifier="pf-m-purple"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    purple label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-purple" label--modifier="pf-m-purple pf-m-hoverable" label--attribute='tabindex="0"'}}
  {{#> label-text}}
    purple hoverable label
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="default-cyan" label--modifier="pf-m-cyan"}}
  {{#> label-text}}
    cyan label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-cyan-icon" label--modifier="pf-m-cyan"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    cyan label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-cyan-close" label--IsClosable="true" label--modifier="pf-m-cyan"}}
  {{#> label-text}}
    cyan label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-cyan-icon-close" label--IsClosable="true" label--modifier="pf-m-cyan"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    cyan label
  {{/label-text}}
{{/label}}

{{#> label label--id="default-cyan-hoverable" label--modifier="pf-m-cyan pf-m-hoverable" label--attribute='tabindex="0"'}}
  {{#> label-text}}
    cyan hoverable label
  {{/label-text}}
{{/label}}
```


```hbs title=Outline
{{#> label label--id="outline-grey" label--modifier="pf-m-outline"}}
  {{#> label-text}}
    grey label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-grey-icon" label--modifier="pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    grey label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-grey-close" label--IsClosable="true" label--modifier="pf-m-outline"}}
  {{#> label-text}}
    grey label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-grey-icon-close" label--IsClosable="true" label--modifier="pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    grey label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-grey" label--modifier="pf-m-outline pf-m-hoverable" label--attribute='tabindex="0"'}}
  {{#> label-text}}
    grey hoverable label
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="outline-blue" label--modifier="pf-m-blue pf-m-outline"}}
  {{#> label-text}}
    blue label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-blue-icon" label--modifier="pf-m-blue pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    blue label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-blue-close" label--IsClosable="true" label--modifier="pf-m-blue pf-m-outline"}}
  {{#> label-text}}
    blue label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-blue-icon-close" label--IsClosable="true" label--modifier="pf-m-blue pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    blue label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-blue" label--modifier="pf-m-blue pf-m-outline pf-m-hoverable" label--attribute='tabindex="0"'}}
  {{#> label-text}}
    blue hoverable label
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="outline-green" label--modifier="pf-m-green pf-m-outline"}}
  {{#> label-text}}
    green label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-green-icon" label--modifier="pf-m-green pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    green label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-green-close" label--IsClosable="true" label--modifier="pf-m-green pf-m-outline"}}
  {{#> label-text}}
    green label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-green-icon-close" label--IsClosable="true" label--modifier="pf-m-green pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    green label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-green" label--modifier="pf-m-green pf-m-outline pf-m-hoverable" label--attribute='tabindex="0"'}}
  {{#> label-text}}
    green hoverable label
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="outline-orange" label--modifier="pf-m-orange pf-m-outline"}}
  {{#> label-text}}
    orange label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-orange-icon" label--modifier="pf-m-orange pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    orange label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-orange-close" label--IsClosable="true" label--modifier="pf-m-orange pf-m-outline"}}
  {{#> label-text}}
    orange label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-orange-icon-close" label--IsClosable="true" label--modifier="pf-m-orange pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    orange label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-orange" label--modifier="pf-m-orange pf-m-outline pf-m-hoverable" label--attribute='tabindex="0"'}}
  {{#> label-text}}
    orange hoverable label
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="outline-red" label--modifier="pf-m-red pf-m-outline"}}
  {{#> label-text}}
    red label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-red-icon" label--modifier="pf-m-red pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    red label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-red-close" label--IsClosable="true" label--modifier="pf-m-red pf-m-outline"}}
  {{#> label-text}}
    red label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-red-icon-close" label--IsClosable="true" label--modifier="pf-m-red pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    red label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-red" label--modifier="pf-m-red pf-m-outline pf-m-hoverable" label--attribute='tabindex="0"'}}
  {{#> label-text}}
    red hoverable label
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="outline-purple" label--modifier="pf-m-purple pf-m-outline"}}
  {{#> label-text}}
    purple label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-purple-icon" label--modifier="pf-m-purple pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    purple label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-purple-close" label--IsClosable="true" label--modifier="pf-m-purple pf-m-outline"}}
  {{#> label-text}}
    purple label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-purple-icon-close" label--IsClosable="true" label--modifier="pf-m-purple pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    purple label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-purple" label--modifier="pf-m-purple pf-m-outline pf-m-hoverable" label--attribute='tabindex="0"'}}
  {{#> label-text}}
    purple hoverable label
  {{/label-text}}
{{/label}}

<br><br>

{{#> label label--id="outline-cyan" label--modifier="pf-m-cyan pf-m-outline"}}
  {{#> label-text}}
    cyan label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-cyan-icon" label--modifier="pf-m-cyan pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    cyan label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-cyan-close" label--IsClosable="true" label--modifier="pf-m-cyan pf-m-outline"}}
  {{#> label-text}}
    cyan label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-cyan-icon-close" label--IsClosable="true" label--modifier="pf-m-cyan pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    cyan label
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-cyan" label--modifier="pf-m-cyan pf-m-outline pf-m-hoverable" label--attribute='tabindex="0"'}}
  {{#> label-text}}
    cyan hoverable label
  {{/label-text}}
{{/label}}
```

## Documentation
### Overview
Labels can be used in a variety of components and can adjust in font size to match that of the component it lives in. For example, labels can be used in tables. Specifically, the compact table has a modifier that adjusts its font size, so when using a label in this table, it's important to also add its respective `.pf-c-compact` modifier.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-label` | `<span>` | Iniates a label. Without a color modifier, the label's default style is grey. Use a color modifier to change the label color.  |
| `.pf-m-compact` | `.pf-c-label` | Modifies label for compact styles. |
| `.pf-m-outline` | `.pf-c-label` | Modifies label for outline styles. |
| `.pf-m-hoverable` | `.pf-c-label` | Modifies label for a hoverable styles. |
| `.pf-m-blue` | `.pf-c-label` | Modifies label for a blue styles. |
| `.pf-m-green` | `.pf-c-label` | Modifies label for a green styles. |
| `.pf-m-orange` | `.pf-c-label` | Modifies label for a orange styles. |
| `.pf-m-red` | `.pf-c-label` | Modifies label for a red styles. |
| `.pf-m-purple` | `.pf-c-label` | Modifies label for a purple styles. |
| `.pf-m-cyan` | `.pf-c-label` | Modifies label for a cyan styles. |
