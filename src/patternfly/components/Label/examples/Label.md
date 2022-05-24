---
id: Label
section: components
cssPrefix: pf-c-label
---

import './Label.css'

## Examples

### Filled

```hbs
{{#> label label--id="default-grey"}}
  {{#> label-text}}
    Grey
  {{/label-text}}
{{/label}}

{{#> label label--id="default-grey-icon"}}
  {{#> label-icon}}
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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

{{#> label label--id="default-grey-icon-close-truncate" label--isRemovable="true" label--IsTruncated="true"}}
  {{#> label-icon}}
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Grey label with icon that truncates
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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

{{#> label label--id="default-blue-icon-close-truncate" label--isRemovable="true" label--modifier="pf-m-blue" label--IsTruncated="true"}}
  {{#> label-icon}}
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Blue label with icon that truncates
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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

{{#> label label--id="default-green-icon-close-truncate" label--isRemovable="true" label--modifier="pf-m-green" label--IsTruncated="true"}}
  {{#> label-icon}}
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Green label with icon that truncates
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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

{{#> label label--id="default-orange-icon-close-truncate" label--isRemovable="true" label--modifier="pf-m-orange" label--IsTruncated="true"}}
  {{#> label-icon}}
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Orange label with icon that truncates
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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

{{#> label label--id="default-red-icon-close-truncate" label--isRemovable="true" label--modifier="pf-m-red" label--IsTruncated="true"}}
  {{#> label-icon}}
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Red label with icon that truncates
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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

{{#> label label--id="default-purple-icon-close-truncate" label--isRemovable="true" label--modifier="pf-m-purple" label--IsTruncated="true"}}
  {{#> label-icon}}
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Purple label with icon that truncates
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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

{{#> label label--id="default-cyan-icon-close-truncate" label--isRemovable="true" label--modifier="pf-m-cyan" label--IsTruncated="true"}}
  {{#> label-icon}}
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Cyan label with icon that truncates
  {{/label-text}}
{{/label}}

<br><br>

{{#> wrapper-label wrapper-label--code="gold" wrapper-label--title="Gold"}}
  {{#> label label--id=(concat wrapper-label--code '-default') label--modifier=(concat 'pf-m-' wrapper-label--code)}}
    {{wrapper-label--title}}
  {{/label}}

  {{#> label label--id=(concat wrapper-label--code '-icon') label--modifier=(concat 'pf-m-' wrapper-label--code)}}
    {{#> label-icon}}
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    {{/label-icon}}
    {{wrapper-label--title}} icon
  {{/label}}

  {{#> label label--id=(concat wrapper-label--code '-removable') label--isRemovable="true" label--modifier=(concat 'pf-m-' wrapper-label--code)}}
      {{wrapper-label--title}} removable
  {{/label}}

  {{#> label label--id=(concat wrapper-label--code '-icon-removable') label--isRemovable="true" label--modifier=(concat 'pf-m-' wrapper-label--code)}}
    {{#> label-icon}}
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    {{/label-icon}}
    {{wrapper-label--title}} icon removable
  {{/label}}

  {{#> label label--id=(concat wrapper-label--code '-link') label-content--IsLink="true" label--modifier=(concat 'pf-m-' wrapper-label--code)}}
    {{wrapper-label--title}} link
  {{/label}}

  {{#> label label--id=(concat wrapper-label--code '-link-removable') label-content--IsLink="true" label--isRemovable="true" label--modifier=(concat 'pf-m-' wrapper-label--code)}}
    {{wrapper-label--title}} link removable
  {{/label}}

  {{#> label label--id=(concat wrapper-label--code '-truncate') label--isRemovable="true" label--modifier=(concat 'pf-m-' wrapper-label--code)}}
    {{#> label-icon}}
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    {{/label-icon}}
    {{#> label-text}}
      {{wrapper-label--title}} label with icon that truncates
    {{/label-text}}
  {{/label}}
{{/wrapper-label}}
```

### Outline

```hbs
{{#> label label--id="outline-grey" label--modifier="pf-m-outline"}}
  {{#> label-text}}
    Grey
  {{/label-text}}
{{/label}}

{{#> label label--id="outline-grey-icon" label--modifier="pf-m-outline"}}
  {{#> label-icon}}
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
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

<br><br>

{{#> wrapper-label wrapper-label--code="gold" wrapper-label--title="Gold" wrapper-label--modifier="pf-m-outline" wrapper-label--id="outline"}}
  {{#> label label--id=(concat wrapper-label--code '-' wrapper-label--id '-default') label--modifier=(concat 'pf-m-' wrapper-label--code ' ' wrapper-label--modifier)}}
    {{wrapper-label--title}}
  {{/label}}

  {{#> label label--id=(concat wrapper-label--code '-' wrapper-label--id '-icon') label--modifier=(concat 'pf-m-' wrapper-label--code ' ' wrapper-label--modifier)}}
    {{#> label-icon}}
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    {{/label-icon}}
    {{wrapper-label--title}} icon
  {{/label}}

  {{#> label label--id=(concat wrapper-label--code '-' wrapper-label--id '-removable') label--isRemovable="true" label--modifier=(concat 'pf-m-' wrapper-label--code ' ' wrapper-label--modifier)}}
      {{wrapper-label--title}} removable
  {{/label}}

  {{#> label label--id=(concat wrapper-label--code '-' wrapper-label--id '-icon-removable') label--isRemovable="true" label--modifier=(concat 'pf-m-' wrapper-label--code ' ' wrapper-label--modifier)}}
    {{#> label-icon}}
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    {{/label-icon}}
    {{wrapper-label--title}} icon removable
  {{/label}}

  {{#> label label--id=(concat wrapper-label--code '-' wrapper-label--id '-link') label-content--IsLink="true" label--modifier=(concat 'pf-m-' wrapper-label--code ' ' wrapper-label--modifier)}}
    {{wrapper-label--title}} link
  {{/label}}

  {{#> label label--id=(concat wrapper-label--code '-' wrapper-label--id '-link-removable') label-content--IsLink="true" label--isRemovable="true" label--modifier=(concat 'pf-m-' wrapper-label--code ' ' wrapper-label--modifier)}}
    {{wrapper-label--title}} link removable
  {{/label}}
{{/wrapper-label}}
```

### Compact

```hbs
{{#> label label--id="default-compact" label--modifier="pf-m-compact"}}
  {{#> label-text}}
    Compact
  {{/label-text}}
{{/label}}

{{#> label label--id="compact-icon" label--modifier="pf-m-compact"}}
  {{#> label-icon}}
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Compact icon
  {{/label-text}}
{{/label}}

{{#> label label--id="compact-close" label--modifier="pf-m-compact" label--isRemovable="true"}}
  {{#> label-text}}
    Compact removable
  {{/label-text}}
{{/label}}

{{#> label label--id="compact-icon-close" label--modifier="pf-m-compact" label--isRemovable="true"}}
  {{#> label-icon}}
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Compact icon removable
  {{/label-text}}
{{/label}}

{{#> label label--id="compact-link" label--modifier="pf-m-compact" label-content--IsLink="true"}}
  {{#> label-text}}
    Compact link
  {{/label-text}}
{{/label}}

{{#> label label--id="compact-link-close" label--modifier="pf-m-compact" label-content--IsLink="true" label--isRemovable="true"}}
  {{#> label-text}}
    Compact link removable
  {{/label-text}}
{{/label}}

{{#> label label--id="compact-icon-close-truncate" label--modifier="pf-m-compact" label--isRemovable="true" label--IsTruncated="true"}}
  {{#> label-icon}}
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
  {{/label-icon}}
  {{#> label-text}}
    Compact label with icon that truncates
  {{/label-text}}
{{/label}}

```

### Overflow

This style of label is used to indicate overflow within a label group.

```hbs
{{#> label label--id="overflow" label--IsOverflow="true"}}
  {{#> label-text}}
    Overflow
  {{/label-text}}
{{/label}}
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
{{#> label label--id="editable-label" label--IsEditable="true" label--isRemovable="true" label--modifier="pf-m-blue"}}Editable label{{/label}}

{{#> label label--id="editable-label-active" label--IsEditable="true" label--IsEditableActive="true" label--modifier="pf-m-blue"}}Editable active{{/label}}

{{#> label label--id="compact-editable-label" label--modifier="pf-m-compact pf-m-blue" label--IsEditable="true" label--isRemovable="true" }}Compact editable label{{/label}}

{{#> label label--id="compact-editable-label-active" label--modifier="pf-m-compact pf-m-blue" label--IsEditable="true" label--IsEditableActive="true"}}Compact editable active{{/label}}
```

### Add label

This style of label is used to add new labels to a label group.

```hbs isBeta
{{#> label label--IsAdd="true"}}
  Add Label
{{/label}}
```

## Documentation

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-label` | `<span>`, `<button>` | Initiates a label. Without a color modifier, the label's default style is grey. Use a color modifier to change the label color. Use a `<button>` if the label is an overflow label used in the label group. **Required** |
| `.pf-c-label__content` | `<span>`, `<a>`, `<button>` | Iniates a label content. Use as an `<a>` element if the label serves as a link. Use a `<button>` if the label serves as an action. **Required** |
| `.pf-c-label__icon` | `<span>` | Initiates a label icon. |
| `.pf-c-label__text` | `<span>` | Initiates label text. |
| `.pf-c-label__editable-text` | `<button>`, `<input>` | Initiates editable label text. See the [editable](#editable) example for details about handling behavior in Javascript.|
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
| `.pf-m-auto-width` | `.pf-c-label` | Modifies label to have max-width to auto. |
| `.pf-m-editable` | `.pf-c-label` | Modifies label for editable styles. |
| `.pf-m-editable-active` | `.pf-c-label.pf-m-editable` | Modifies editable label for active styles. |
