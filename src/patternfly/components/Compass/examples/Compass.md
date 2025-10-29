---
id: 'Compass'
beta: true
section: components
cssPrefix: pf-v6-c-compass
---

import './Compass.css';

## Examples
### Basic
```hbs isBeta
{{#> compass}}
  {{#> compass-header}}
    {{#> compass-logo}}logo{{/compass-logo}}
    {{#> compass-nav}}nav{{/compass-nav}}
    {{#> compass-profile}}profile{{/compass-profile}}
  {{/compass-header}}
  {{#> compass-sidebar compass-sidebar--IsStart=true}}sidebar (start){{/compass-sidebar}}
  {{#> compass-main}}
    {{#> compass-hero}}hero{{/compass-hero}}
    {{#> compass-main-header}}main header{{/compass-main-header}}
    {{#> compass-content}}content{{/compass-content}}
  {{/compass-main}}
  {{#> compass-sidebar compass-sidebar--IsEnd=true}}sidebar (end){{/compass-sidebar}}
  {{#> compass-footer}}
    {{#> compass-message-bar}}message bar{{/compass-message-bar}}
  {{/compass-footer}}
{{/compass}}
```

## Documentation
### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-compass` | `<div>` | Initiates the compass component. **Required** |
| `.pf-v6-c-compass__header` | `<div>` | Initiates the compass header. **Required** |
| `.pf-v6-c-compass__logo` | `<div>` | Initiates the compass logo header. |
| `.pf-v6-c-compass__nav` | `<div>` | Initiates the compass logo nav. |
| `.pf-v6-c-compass__profile` | `<div>` | Initiates the compass profile. |
| `.pf-v6-c-compass__sidebar` | `<div>` | Initiates a compass sidebar. **Required** |
| `.pf-v6-c-compass__main` | `<div>` | Initiates the compass main wrapper. **Required** |
| `.pf-v6-c-compass__hero` | `<div>` | Initiates the compass logo hero. |
| `.pf-v6-c-compass__hero-body` | `<div>` | Initiates the compass hero body. |
| `.pf-v6-c-compass__main-header` | `<div>` | Initiates the compass main header. |
| `.pf-v6-c-compass__content` | `<div>` | Initiates the compass content. **Required** |
| `.pf-v6-c-compass__panel` | `<div>` | Initiates a compass panel. |
| `.pf-v6-c-compass__footer` | `<div>` | Initiates the compass footer. **Required** |
| `.pf-v6-c-compass__message-bar` | `<div>` | Initiates the compass message bar. |
| `.pf-m-start` | `.pf-v6-c-compass__sidebar` | Modifies a compass sidebar for start styles. **Required** |
| `.pf-m-end` | `.pf-v6-c-compass__sidebar` | Modifies a compass sidebar for end styles. **Required** |
| `.pf-m-no-border` | `.pf-v6-c-compass__panel` | Modifies a compass panel to remove the border. |
| `.pf-m-no-padding` | `.pf-v6-c-compass__panel` | Modifies a compass panel to remove the padding. |
| `.pf-m-full-height` | `.pf-v6-c-compass__panel` | Modifies a compass panel to have 100% height. |
| `.pf-m-pill` | `.pf-v6-c-compass__panel` | Modifies a compass panel to have a pill shaped border radius. |
| `.pf-m-scrollable` | `.pf-v6-c-compass__panel` | Modifies a compass panel to scroll its overflow. |
