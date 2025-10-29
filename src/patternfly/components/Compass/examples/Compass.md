---
id: 'Compass'
beta: true
section: components
cssPrefix: pf-v6-c-compass
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
