---
title: Tile
section: components
beta: true
cssPrefix: pf-c-tile
---

import './Tile.css'

## Examples
```hbs title=Basic-tiles
{{#> tile}}
  {{#> tile-title}}
    Default
  {{/tile-title}}
{{/tile}}

{{#> tile tile--modifier="pf-m-selected"}}
  {{#> tile-title}}
    Selected
  {{/tile-title}}
{{/tile}}

{{#> tile tile--attribute="disabled"}}
  {{#> tile-title}}
    Disabled
  {{/tile-title}}
{{/tile}}

<br/>
<br/>

{{#> tile}}
  {{#> tile-title}}
    Default
  {{/tile-title}}
  {{#> tile-subtext}}
    Subtext goes here
  {{/tile-subtext}}
{{/tile}}

{{#> tile tile--modifier="pf-m-selected"}}
  {{#> tile-title}}
    Selected
  {{/tile-title}}
  {{#> tile-subtext}}
    Subtext goes here
  {{/tile-subtext}}
{{/tile}}

{{#> tile tile--attribute="disabled"}}
  {{#> tile-title}}
    Disabled
  {{/tile-title}}
  {{#> tile-subtext}}
    Subtext goes here
  {{/tile-subtext}}
{{/tile}}

<br/>
<br/>

{{#> tile}}
  {{#> tile-title}}
    {{#> tile-icon}}
      <i class="fas fa-plus" aria-hidden="true"></i>
    {{/tile-icon}}
    Default
  {{/tile-title}}
  {{#> tile-subtext}}
    Subtext goes here
  {{/tile-subtext}}
{{/tile}}

{{#> tile tile--modifier="pf-m-selected"}}
  {{#> tile-title}}
    {{#> tile-icon}}
      <i class="fas fa-plus" aria-hidden="true"></i>
    {{/tile-icon}}
    Selected
  {{/tile-title}}
  {{#> tile-subtext}}
    Subtext goes here
  {{/tile-subtext}}
{{/tile}}

{{#> tile tile--attribute="disabled"}}
  {{#> tile-title}}
    {{#> tile-icon}}
      <i class="fas fa-plus" aria-hidden="true"></i>
    {{/tile-icon}}
    Disabled
  {{/tile-title}}
  {{#> tile-subtext}}
    Subtext goes here
  {{/tile-subtext}}
{{/tile}}
```

```hbs title=Stacked-tiles
{{#> tile}}
  {{#> tile-title tile-title--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      <i class="fas fa-bell" aria-hidden="true"></i>
    {{/tile-icon}}
    Default
  {{/tile-title}}
  {{#> tile-subtext}}
    Subtext goes here
  {{/tile-subtext}}
{{/tile}}

{{#> tile tile--modifier="pf-m-selected"}}
  {{#> tile-title tile-title--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      <i class="fas fa-bell" aria-hidden="true"></i>
    {{/tile-icon}}
    Selected
  {{/tile-title}}
  {{#> tile-subtext}}
    Subtext goes here
  {{/tile-subtext}}
{{/tile}}

{{#> tile tile--attribute="disabled"}}
  {{#> tile-title tile-title--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      <i class="fas fa-bell" aria-hidden="true"></i>
    {{/tile-icon}}
    Disabled
  {{/tile-title}}
  {{#> tile-subtext}}
    Subtext goes here
  {{/tile-subtext}}
{{/tile}}

<br/>
<br/>

{{#> tile}}
  {{#> tile-title tile-title--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo">
    {{/tile-icon}}
    Default
  {{/tile-title}}
  {{#> tile-subtext}}
    Subtext goes here
  {{/tile-subtext}}
{{/tile}}

{{#> tile tile--modifier="pf-m-selected"}}
  {{#> tile-title tile-title--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo">
    {{/tile-icon}}
    Selected
  {{/tile-title}}
  {{#> tile-subtext}}
    Subtext goes here
  {{/tile-subtext}}
{{/tile}}

{{#> tile tile--attribute="disabled"}}
  {{#> tile-title tile-title--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo">
    {{/tile-icon}}
    Disabled
  {{/tile-title}}
  {{#> tile-subtext}}
    Subtext goes here
  {{/tile-subtext}}
{{/tile}}
```

```hbs title=Stacked-tiles-large
{{#> tile}}
  {{#> tile-title tile-title--modifier="pf-m-stacked"}}
    {{#> tile-icon tile-icon--modifier="pf-m-large"}}
      <i class="fas fa-bell" aria-hidden="true"></i>
    {{/tile-icon}}
    Default
  {{/tile-title}}
  {{#> tile-subtext}}
    Subtext goes here
  {{/tile-subtext}}
{{/tile}}

{{#> tile tile--modifier="pf-m-selected"}}
  {{#> tile-title tile-title--modifier="pf-m-stacked"}}
    {{#> tile-icon tile-icon--modifier="pf-m-large"}}
      <i class="fas fa-bell" aria-hidden="true"></i>
    {{/tile-icon}}
    Selected
  {{/tile-title}}
  {{#> tile-subtext}}
    Subtext goes here
  {{/tile-subtext}}
{{/tile}}

{{#> tile tile--attribute="disabled"}}
  {{#> tile-title tile-title--modifier="pf-m-stacked"}}
    {{#> tile-icon tile-icon--modifier="pf-m-large"}}
      <i class="fas fa-bell" aria-hidden="true"></i>
    {{/tile-icon}}
    Disabled
  {{/tile-title}}
  {{#> tile-subtext}}
    Subtext goes here
  {{/tile-subtext}}
{{/tile}}

<br/>
<br/>

{{#> tile}}
  {{#> tile-title tile-title--modifier="pf-m-stacked"}}
    {{#> tile-icon tile-icon--modifier="pf-m-large"}}
      <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo">
    {{/tile-icon}}
    Default
  {{/tile-title}}
  {{#> tile-subtext}}
    Subtext goes here
  {{/tile-subtext}}
{{/tile}}

{{#> tile tile--modifier="pf-m-selected"}}
  {{#> tile-title tile-title--modifier="pf-m-stacked"}}
    {{#> tile-icon tile-icon--modifier="pf-m-large"}}
      <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo">
    {{/tile-icon}}
    Selected
  {{/tile-title}}
  {{#> tile-subtext}}
    Subtext goes here
  {{/tile-subtext}}
{{/tile}}

{{#> tile tile--attribute="disabled"}}
  {{#> tile-title tile-title--modifier="pf-m-stacked"}}
    {{#> tile-icon tile-icon--modifier="pf-m-large"}}
      <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo">
    {{/tile-icon}}
    Disabled
  {{/tile-title}}
  {{#> tile-subtext}}
    Subtext goes here
  {{/tile-subtext}}
{{/tile}}
```

```hbs title=Extra-content
{{#> tile}}
  {{#> tile-title tile-title--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      <i class="fas fa-bell" aria-hidden="true"></i>
    {{/tile-icon}}
    Default
  {{/tile-title}}
  {{#> tile-subtext}}
    This is really really long subtext that goes on for so long that it has to wrap to the next line. This is really really long subtext that goes on for so long that it has to wrap to the next line.
  {{/tile-subtext}}
{{/tile}}

{{#> tile}}
  {{#> tile-title tile-title--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      <i class="fas fa-bell" aria-hidden="true"></i>
    {{/tile-icon}}
    Default
  {{/tile-title}}
  {{#> tile-subtext}}
    This is really really long subtext that goes on for so long that it has to wrap to the next line.
  {{/tile-subtext}}
{{/tile}}

{{#> tile}}
  {{#> tile-title tile-title--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      <i class="fas fa-bell" aria-hidden="true"></i>
    {{/tile-icon}}
    Default
  {{/tile-title}}
  {{#> tile-subtext}}
    Subtext goes here
  {{/tile-subtext}}
{{/tile}}
```

## Documentation
### Overview

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `tabindex="0"` | `.pf-c-tile` | Inserts the tile into the tab order of the page so that it is focusable. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-tile` | `<div>` | Initiates a tile. **Required**  |
| `.pf-c-tile__title` | `<div>` | Initiates the tile title. |
| `.pf-c-tile__icon` | `<div>` | Initiates the tile icon or image. |
| `.pf-c-tile__subtext` | `<div>` | Initiates the tile subtext. |
| `.pf-m-selected` | `.pf-c-tile` | Modifies the tile for the selected state. |
| `.pf-m-stacked` | `.pf-c-tile__title` | Modifies the tile title to be stacked vertically. |
| `.pf-m-large` | `.pf-c-tile__icon` | Modifies the icon to be large. |
