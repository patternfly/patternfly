---
id: 'Panel'
section: components
cssPrefix: pf-v6-c-panel
---

import './Panel.css'

## Examples
### Basic
```hbs
{{#> panel}}
  {{#> panel-main}}
    {{#> panel-main-body}}
      Main content
    {{/panel-main-body}}
  {{/panel-main}}
{{/panel}}
```

### Secondary
```hbs
{{#> panel panel--IsSecondary=true}}
  {{#> panel-main}}
    {{#> panel-main-body}}
      Main content with secondary styling
    {{/panel-main-body}}
  {{/panel-main}}
{{/panel}}
```

### Header
```hbs
{{#> panel}}
  {{#> panel-header}}
    Header content
  {{/panel-header}}
  {{#> panel-main}}
    {{#> panel-main-body}}
      Main content
    {{/panel-main-body}}
  {{/panel-main}}
{{/panel}}
```

### Footer
```hbs
{{#> panel}}
  {{#> panel-main}}
    {{#> panel-main-body}}
      Main content
    {{/panel-main-body}}
  {{/panel-main}}
  {{#> panel-footer}}
    Footer content
  {{/panel-footer}}
{{/panel}}
```

### Header and footer
```hbs
{{#> panel}}
  {{#> panel-header}}
    Header content
  {{/panel-header}}
  {{#> panel-main}}
    {{#> panel-main-body}}
      Main content
    {{/panel-main-body}}
  {{/panel-main}}
  {{#> panel-footer}}
    Footer content
  {{/panel-footer}}
{{/panel}}
```

### No body
```hbs
{{#> panel}}
  {{#> panel-main}}
    Main content
  {{/panel-main}}
{{/panel}}
```

### Raised
```hbs
{{#> panel panel--IsRaised=true}}
  {{#> panel-main}}
    {{#> panel-main-body}}
      Main content
    {{/panel-main-body}}
  {{/panel-main}}
{{/panel}}
```

### Bordered
```hbs
{{#> panel panel--IsBordered=true}}
  {{#> panel-main}}
    {{#> panel-main-body}}
      Main content
    {{/panel-main-body}}
  {{/panel-main}}
{{/panel}}
```

### Scrollable
```hbs
{{#> panel panel--IsScrollable=true}}
  {{#> panel-main panel-main--attribute="tabindex=0"}}
    {{#> panel-main-body}}
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content
    {{/panel-main-body}}
  {{/panel-main}}
{{/panel}}
```

### Scrollable with auto height
```hbs
{{#> panel panel--IsScrollable=true panel--IsScrollableAutoHeight=true}}
  {{#> panel-main panel-main--attribute="tabindex=0"}}
    {{#> panel-main-body}}
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content
    {{/panel-main-body}}
  {{/panel-main}}
{{/panel}}
```

### Scrollable with header and footer
```hbs
{{#> panel panel--IsScrollable=true}}
  {{#> panel-header}}
    Header content
  {{/panel-header}}
  {{#> panel-main panel-main--attribute="tabindex=0"}}
    {{#> panel-main-body}}
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content<br><br>
      Main content
    {{/panel-main-body}}
  {{/panel-main}}
  {{#> panel-footer}}
    Footer content
  {{/panel-footer}}
{{/panel}}
```

### Pill
```hbs
{{#> panel panel--IsPill=true}}
  {{#> panel-main}}
    {{#> panel-main-body}}
      Main content
    {{/panel-main-body}}
  {{/panel-main}}
{{/panel}}
```

## Documentation
### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-panel` | `<div>` | Initiates the panel. **Required** |
| `.pf-v6-c-panel__header` | `<div>` | Initiates the panel header. |
| `.pf-v6-c-panel__main` | `<div>` | Initiates the panel main content. |
| `.pf-v6-c-panel__main-body` | `<div>` | Initiates a panel content body container. |
| `.pf-v6-c-panel__menu` | `<div>` | Initiates a panel menu container. |
| `.pf-v6-c-panel__footer` | `<div>` | Initiates the panel footer. |
| `.pf-m-bordered` | `.pf-v6-c-panel` | Adds a border to the panel. |
| `.pf-m-no-border` | `.pf-v6-c-panel` | Removes the border from a variant that has a default border. |
| `.pf-m-raised` | `.pf-v6-c-panel` | Applies elevated styles for use when the panel appears on top of other elements. |
| `.pf-m-scrollable` | `.pf-v6-c-panel` | Modifies the panel so the main content is scrollable. |
| `.pf-m-scrollable-auto-height` | `.pf-v6-c-panel` | Modifies the panel to have an auto height when scrollable. |
| `.pf-m-secondary` | `.pf-v6-c-panel` | Modifies the panel for secondary styles. |
| `.pf-m-pill` | `.pf-v6-c-panel` | Modifies the panel for pill border radius. |
| `.pf-m-full-height` | `.pf-v6-c-panel` | Makes the panel fill the available height. |
| `.pf-m-glass` | `.pf-v6-c-panel` | Applies glass styling to the panel in glass theme. |
