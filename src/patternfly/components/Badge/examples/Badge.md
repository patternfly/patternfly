---
id: Badge
section: components
cssPrefix: pf-v5-c-badge
---

## Examples
### Read
```hbs
{{#> badge badge--modifier="pf-m-read"}}
  7
{{/badge}}
{{#> badge badge--modifier="pf-m-read"}}
  24
{{/badge}}
{{#> badge badge--modifier="pf-m-read"}}
  240
{{/badge}}
{{#> badge badge--modifier="pf-m-read"}}
  999+
{{/badge}}
```

### Unread
```hbs
{{#> badge badge--modifier="pf-m-unread"}}
  7
  {{#> screen-reader}}unread messages{{/screen-reader}}
{{/badge}}
{{#> badge badge--modifier="pf-m-unread"}}
  24
  {{#> screen-reader}}unread messages{{/screen-reader}}
{{/badge}}
{{#> badge badge--modifier="pf-m-unread"}}
  240
  {{#> screen-reader}}unread messages{{/screen-reader}}
{{/badge}}
{{#> badge badge--modifier="pf-m-unread"}}
  999+
  {{#> screen-reader}}unread messages{{/screen-reader}}
{{/badge}}
```

## Documentation
### Overview
Always add a modifier class. Never use the class `.pf-v5-c-badge` on its own.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-badge` | `<span>` | Initiates a badge. **Always use with a modifier class.** |
| `.pf-m-read` | `.pf-v5-c-badge` | Applies read badge styling. |
| `.pf-m-unread` | `.pf-v5-c-badge` | Applies unread badge styling. |
