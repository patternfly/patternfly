---
title: Tile
section: components
beta: true
cssPrefix: pf-c-tile
---

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
    {{#> title-icon}}
      <i class="fas fa-plus" aria-hidden="true"></i>
    {{/title-icon}}
    Default
  {{/tile-title}}
  {{#> tile-subtext}}
    Subtext goes here
  {{/tile-subtext}}
{{/tile}}

{{#> tile tile--modifier="pf-m-selected"}}
  {{#> tile-title}}
    {{#> title-icon}}
      <i class="fas fa-plus" aria-hidden="true"></i>
    {{/title-icon}}
    Selected
  {{/tile-title}}
  {{#> tile-subtext}}
    Subtext goes here
  {{/tile-subtext}}
{{/tile}}

{{#> tile tile--attribute="disabled"}}
  {{#> tile-title}}
    {{#> title-icon}}
      <i class="fas fa-plus" aria-hidden="true"></i>
    {{/title-icon}}
    Disabled
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