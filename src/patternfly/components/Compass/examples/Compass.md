---
id: 'Compass'
beta: true
section: components
cssPrefix: pf-v5-c-compass
---

## Examples
### Basic
```hbs isFullscreen isBeta
{{#> compass}}
  {{#> compass-header}}
    {{#> compass-logo}}logo{{/compass-logo}}
    {{#> compass-nav}}
      {{#> compass-section compass-section--HasNoPadding=true}}tabs{{/compass-section}}
      {{#> compass-section compass-section--HasNoPadding=true}}subtabs{{/compass-section}}
    {{/compass-nav}}
    {{#> compass-profile}}profile{{/compass-profile}}
  {{/compass-header}}
  {{#> compass-panel compass--panel--IsStart=true}}
    {{#> compass-section compass-section--HasNoPadding=true}}panel start{{/compass-section}}
  {{/compass-panel}}
  {{#> compass-main}}
    {{#> compass-hero}}
      {{#> compass-hero-body}}hero{{/compass-hero-body}}
    {{/compass-hero}}
    {{#> compass-main-header}}
      {{#> compass-section}}section{{/compass-section}}
    {{/compass-main-header}}
    {{#> compass-content}}
      {{#> compass-section}}section{{/compass-section}}
    {{/compass-content}}
  {{/compass-main}}
  {{#> compass-panel compass--panel--IsEnd=true}}
    {{#> compass-section compass-section--HasNoPadding=true}}panel start{{/compass-section}}
  {{/compass-panel}}
  {{#> compass-footer}}
    {{#> compass-section compass-section--HasNoPadding=true compass-section--HasNoBorder=true}}footer{{/compass-section}}
  {{/compass-footer}}
{{/compass}}
```

## Documentation
