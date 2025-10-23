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
    {{#> compass-nav}}nav{{/compass-nav}}
    {{#> compass-profile}}profile{{/compass-profile}}
  {{/compass-header}}
  {{#> compass-panel compass--panel--IsStart=true}}panel start{{/compass-panel}}
  {{#> compass-main}}
    {{#> compass-hero}}hero{{/compass-hero}}
    {{#> compass-main-header}}main header{{/compass-main-header}}
    {{#> compass-content}}
      {{#> compass-section}}
        section
      {{/compass-section}}
    {{/compass-content}}
  {{/compass-main}}
  {{#> compass-panel compass--panel--IsEnd=true}}panel start{{/compass-panel}}
  {{#> compass-footer}}footer{{/compass-footer}}
{{/compass}}
```

## Documentation
