---
id: Tile
section: components
cssPrefix: pf-v5-c-tile
---

import './Tile.css'

## Examples
### Basic tiles
```hbs
{{#> tile}}
  {{#> tile-header}}
    {{#> tile-title}}
      Default
    {{/tile-title}}
  {{/tile-header}}
{{/tile}}

{{#> tile tile--modifier="pf-m-selected"}}
  {{#> tile-header}}
    {{#> tile-title}}
      Selected
    {{/tile-title}}
  {{/tile-header}}
{{/tile}}

{{#> tile tile--IsDisabled="true"}}
  {{#> tile-header}}
    {{#> tile-title}}
      Disabled
    {{/tile-title}}
  {{/tile-header}}
{{/tile}}

<br/>
<br/>

{{#> tile}}
  {{#> tile-header}}
    {{#> tile-title}}
      Default
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    Subtext goes here
  {{/tile-body}}
{{/tile}}

{{#> tile tile--modifier="pf-m-selected"}}
  {{#> tile-header}}
    {{#> tile-title}}
      Selected
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    Subtext goes here
  {{/tile-body}}
{{/tile}}

{{#> tile tile--IsDisabled="true"}}
  {{#> tile-header}}
    {{#> tile-title}}
      Disabled
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    Subtext goes here
  {{/tile-body}}
{{/tile}}

<br/>
<br/>

{{#> tile}}
  {{#> tile-header}}
    {{#> tile-icon}}
      <i class="fas fa-plus" aria-hidden="true"></i>
    {{/tile-icon}}
    {{#> tile-title}}
      Default
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    Subtext goes here
  {{/tile-body}}
{{/tile}}

{{#> tile tile--modifier="pf-m-selected"}}
  {{#> tile-header}}
    {{#> tile-icon}}
      <i class="fas fa-plus" aria-hidden="true"></i>
    {{/tile-icon}}
    {{#> tile-title}}
      Selected
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    Subtext goes here
  {{/tile-body}}
{{/tile}}

{{#> tile tile--IsDisabled="true"}}
  {{#> tile-header}}
    {{#> tile-icon}}
      <i class="fas fa-plus" aria-hidden="true"></i>
    {{/tile-icon}}
    {{#> tile-title}}
      Disabled
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    Subtext goes here
  {{/tile-body}}
{{/tile}}
```

### Stacked tiles
```hbs
{{#> tile}}
  {{#> tile-header tile-header--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      <i class="fas fa-bell" aria-hidden="true"></i>
    {{/tile-icon}}
    {{#> tile-title}}
      Default
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    Subtext goes here
  {{/tile-body}}
{{/tile}}

{{#> tile tile--modifier="pf-m-selected"}}
  {{#> tile-header tile-header--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      <i class="fas fa-bell" aria-hidden="true"></i>
    {{/tile-icon}}
    {{#> tile-title}}
      Selected
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    Subtext goes here
  {{/tile-body}}
{{/tile}}

{{#> tile tile--IsDisabled="true"}}
  {{#> tile-header tile-header--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      <i class="fas fa-bell" aria-hidden="true"></i>
    {{/tile-icon}}
    {{#> tile-title}}
      Disabled
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    Subtext goes here
  {{/tile-body}}
{{/tile}}

<br/>
<br/>

{{#> tile tile--id="stacked-pf-logo-default"}}
  {{#> tile-header tile-header--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      {{> tile-img-pf}}
    {{/tile-icon}}
    {{#> tile-title}}
      Default
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    Subtext goes here
  {{/tile-body}}
{{/tile}}

{{#> tile tile--modifier="pf-m-selected" tile--id="stacked-pf-logo-selected"}}
  {{#> tile-header tile-header--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      {{> tile-img-pf}}
    {{/tile-icon}}
    {{#> tile-title}}
      Selected
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    Subtext goes here
  {{/tile-body}}
{{/tile}}

{{#> tile tile--IsDisabled="true" tile--id="stacked-pf-logo-disabled"}}
  {{#> tile-header tile-header--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      {{> tile-img-pf}}
    {{/tile-icon}}
    {{#> tile-title}}
      Disabled
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    Subtext goes here
  {{/tile-body}}
{{/tile}}

<br/>
<br/>

{{#> tile}}
  {{#> tile-header tile-header--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      {{> tile-img-insights}}
    {{/tile-icon}}
    {{#> tile-title}}
      Default
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    Subtext goes here
  {{/tile-body}}
{{/tile}}

{{#> tile}}
  {{#> tile-header tile-header--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      {{> tile-img-openshift}}
    {{/tile-icon}}
    {{#> tile-title}}
      Default
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    Subtext goes here
  {{/tile-body}}
{{/tile}}

```

### Stacked tiles large
```hbs
{{#> tile tile--modifier="pf-m-display-lg"}}
  {{#> tile-header tile-header--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      <i class="fas fa-bell" aria-hidden="true"></i>
    {{/tile-icon}}
    {{#> tile-title}}
      Default
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    Subtext goes here
  {{/tile-body}}
{{/tile}}

{{#> tile tile--modifier="pf-m-selected pf-m-display-lg"}}
  {{#> tile-header tile-header--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      <i class="fas fa-bell" aria-hidden="true"></i>
    {{/tile-icon}}
    {{#> tile-title}}
      Selected
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    Subtext goes here
  {{/tile-body}}
{{/tile}}

{{#> tile tile--modifier="pf-m-display-lg" tile--IsDisabled="true"}}
  {{#> tile-header tile-header--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      <i class="fas fa-bell" aria-hidden="true"></i>
    {{/tile-icon}}
    {{#> tile-title}}
      Disabled
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    Subtext goes here
  {{/tile-body}}
{{/tile}}

<br/>
<br/>

{{#> tile tile--modifier="pf-m-display-lg" tile--id="stacked-large-pf-logo-default"}}
  {{#> tile-header tile-header--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      {{> tile-img-pf}}
    {{/tile-icon}}
    {{#> tile-title}}
      Default
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    Subtext goes here
  {{/tile-body}}
{{/tile}}

{{#> tile tile--modifier="pf-m-display-lg pf-m-selected" tile--id="stacked-large-pf-logo-selected"}}
  {{#> tile-header tile-header--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      {{> tile-img-pf}}
    {{/tile-icon}}
    {{#> tile-title}}
      Selected
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    Subtext goes here
  {{/tile-body}}
{{/tile}}

{{#> tile tile--modifier="pf-m-display-lg" tile--IsDisabled="true" tile--id="stacked-large-pf-logo-disabled"}}
  {{#> tile-header tile-header--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      {{> tile-img-pf}}
    {{/tile-icon}}
    {{#> tile-title}}
      Disabled
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    Subtext goes here
  {{/tile-body}}
{{/tile}}

<br/>
<br/>

{{#> tile tile--modifier="pf-m-display-lg"}}
  {{#> tile-header tile-header--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      {{> tile-img-insights}}
    {{/tile-icon}}
    {{#> tile-title}}
      Default
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    Subtext goes here
  {{/tile-body}}
{{/tile}}

{{#> tile tile--modifier="pf-m-display-lg"}}
  {{#> tile-header tile-header--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      {{> tile-img-openshift}}
    {{/tile-icon}}
    {{#> tile-title}}
      Default
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    Subtext goes here
  {{/tile-body}}
{{/tile}}

```

### Extra content
```hbs
{{#> tile}}
  {{#> tile-header tile-header--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      <i class="fas fa-bell" aria-hidden="true"></i>
    {{/tile-icon}}
    {{#> tile-title}}
      Default
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    This is really really long subtext that goes on for so long that it has to wrap to the next line. This is really really long subtext that goes on for so long that it has to wrap to the next line.
  {{/tile-body}}
{{/tile}}

{{#> tile}}
  {{#> tile-header tile-header--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      <i class="fas fa-bell" aria-hidden="true"></i>
    {{/tile-icon}}
    {{#> tile-title}}
      Default
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    This is really really long subtext that goes on for so long that it has to wrap to the next line.
  {{/tile-body}}
{{/tile}}

{{#> tile}}
  {{#> tile-header tile-header--modifier="pf-m-stacked"}}
    {{#> tile-icon}}
      <i class="fas fa-bell" aria-hidden="true"></i>
    {{/tile-icon}}
    {{#> tile-title}}
      Default
    {{/tile-title}}
  {{/tile-header}}
  {{#> tile-body}}
    Subtext goes here
  {{/tile-body}}
{{/tile}}
```

## Documentation
### Overview

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `tabindex="0"` | `.pf-v5-c-tile` | Inserts the tile into the tab order of the page so that it is focusable. **Required** |
| `tabindex="-1"` | `.pf-v5-c-tile` | Removes the tile from keyboard focus when it is disabled. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-tile` | `<div>` | Initiates a tile. **Required**  |
| `.pf-v5-c-tile__header` | `<div>` | Initiates the tile header. |
| `.pf-v5-c-tile__title` | `<div>` | Initiates the tile title. |
| `.pf-v5-c-tile__icon` | `<div>` | Initiates the tile icon or image. |
| `.pf-v5-c-tile__body` | `<div>` | Initiates the tile body. |
| `.pf-m-selected` | `.pf-v5-c-tile` | Modifies the tile for the selected state. |
| `.pf-m-disabled` | `.pf-v5-c-tile` | Modifies the tile for the disabled state. |
| `.pf-m-stacked` | `.pf-v5-c-tile__header` | Modifies the tile header to be stacked vertically. |
| `.pf-m-display-lg` | `.pf-v5-c-tile` | Modifies the tile to have large display styling. |
