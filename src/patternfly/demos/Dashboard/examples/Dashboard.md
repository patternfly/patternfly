---
id: 'Dashboard'
section: patterns
cssPrefix: pf-d-dashboard
---

## Examples
### Basic
```hbs isFullscreen
{{> page-template page-template--id="dashboard-demo"}}

{{#*inline "page-template-section"}}
  {{#> page-main-section page-main-section--IsLimitWidth=true}}
    {{> dashboard--card-grid}}
  {{/page-main-section}}
{{/inline}}
```
