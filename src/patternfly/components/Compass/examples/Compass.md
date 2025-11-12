---
id: 'Compass'
beta: true
section: PatternFly-AI
subsection: Generative UIs
cssPrefix: pf-v6-c-compass
---

import './Compass.css';

## Examples
### Basic
```hbs isBeta
{{#> compass}}
  {{#> compass-header}}
    {{#> compass-logo}}logo{{/compass-logo}}
    {{#> compass-nav}}
      {{#> compass-panel}}
        {{#> compass-nav-content}}
          {{#> compass-nav-home}}home{{/compass-nav-home}}
          {{#> compass-nav-main}}main{{/compass-nav-main}}
          {{#> compass-nav-search}}search{{/compass-nav-search}}
        {{/compass-nav-content}}
      {{/compass-panel}}
    {{/compass-nav}}
    {{#> compass-profile}}profile{{/compass-profile}}
  {{/compass-header}}
  {{#> compass-sidebar compass-sidebar--IsStart=true}}sidebar (start){{/compass-sidebar}}
  {{#> compass-main}}
    {{#> compass-hero}}
      {{#> hero}}hero{{/hero}}
    {{/compass-hero}}
    {{#> compass-main-header}}
      {{#> compass-panel}}
        {{#> compass-main-header-content}}
          main header
        {{/compass-main-header-content}}
      {{/compass-panel}}
    {{/compass-main-header}}
    {{#> compass-content}}content{{/compass-content}}
    {{#> compass-main-footer}}
      {{#> compass-message-bar}}message bar{{/compass-message-bar}}
    {{/compass-main-footer}}
  {{/compass-main}}
  {{#> compass-sidebar compass-sidebar--IsEnd=true}}sidebar (end){{/compass-sidebar}}
  {{#> compass-footer}}
    footer
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
| `.pf-v6-c-compass__nav` | `<div>` | Initiates the compass nav. |
| `.pf-v6-c-compass__profile` | `<div>` | Initiates the compass profile. |
| `.pf-v6-c-compass__sidebar` | `<div>` | Initiates a compass sidebar. **Required** |
| `.pf-v6-c-compass__main` | `<div>` | Initiates the compass main wrapper. **Required** |
| `.pf-v6-c-compass__main-header` | `<div>` | Initiates the compass main header. |
| `.pf-v6-c-compass__main-header-content` | `<div>` | Initiates the compass main header content. This should be passed into a `.pf-v6-c-compass__panel` component. |
| `.pf-v6-c-compass__main-header-title` | `<div>` | Initiates a title within the compass main header content. |
| `.pf-v6-c-compass__main-header-toolbar` | `<div>` | Initiates a toolbar of actions within the compass main header content. |
| `.pf-v6-c-compass__content` | `<div>` | Initiates the compass content. **Required** |
| `.pf-v6-c-compass__main-footer` | `<div>` | Initiates the compass main footer. **Required** |
| `.pf-v6-c-compass__panel` | `<div>` | Initiates a compass panel. |
| `.pf-v6-c-compass__nav` | `<div>` | Initiates a compass container for site navigation. |
| `.pf-v6-c-compass__nav-content` | `<div>` | Initiates a compass container for navigation content. |
| `.pf-v6-c-compass__nav-home` | `<div>` | Initiates a container for compass home button. |
| `.pf-v6-c-compass__nav-main` | `<div>` | Initiates a container for compass navigation main content. |
| `.pf-v6-c-compass__nav-search` | `<div>` | Initiates a container for compass search button. |
| `.pf-v6-c-compass__hero` | `<div>` | Initiates a compass hero. |
| `.pf-v6-c-compass__footer` | `<div>` | Initiates the compass footer. |
| `.pf-v6-c-compass__message-bar` | `<div>` | Initiates the compass message bar. |
| `.pf-m-no-glass` | `.pf-v6-c-compass`, `.pf-v6-c-compass__panel` | Modifies all elements or individual panels to remove the glass styles. |
| `.pf-m-start` | `.pf-v6-c-compass__sidebar` | Modifies a compass sidebar for start styles. **Required** |
| `.pf-m-end` | `.pf-v6-c-compass__sidebar` | Modifies a compass sidebar for end styles. **Required** |
| `.pf-m-no-border` | `.pf-v6-c-compass__panel` | Modifies a compass panel to remove the border. |
| `.pf-m-no-padding` | `.pf-v6-c-compass__panel` | Modifies a compass panel to remove the padding. |
| `.pf-m-full-height` | `.pf-v6-c-compass__panel` | Modifies a compass panel to be full height. |
| `.pf-m-pill` | `.pf-v6-c-compass__panel` | Modifies a compass panel to have a pill shaped border radius. |
| `.pf-m-scrollable` | `.pf-v6-c-compass__panel` | Modifies a compass panel to scroll its overflow. |
| `.pf-m-expanded` | `.pf-v6-c-compass__header`, `.pf-v6-c-compass__sidebar`, `.pf-v6-c-compass__main-footer`, `.pf-v6-c-compass__footer` | Modifies a compass section for expanded styles. |
