---
id: 'Panel'
section: components
cssPrefix: pf-v6-c-panel
---

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
{{#> panel panel--modifier="pf-m-secondary"}}
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
{{#> panel panel--modifier="pf-m-raised"}}
  {{#> panel-main}}
    {{#> panel-main-body}}
      Main content
    {{/panel-main-body}}
  {{/panel-main}}
{{/panel}}
```

### Bordered
```hbs
{{#> panel panel--modifier="pf-m-bordered"}}
  {{#> panel-main}}
    {{#> panel-main-body}}
      Main content
    {{/panel-main-body}}
  {{/panel-main}}
{{/panel}}
```

### Scrollable
```hbs
{{#> panel panel--modifier="pf-m-scrollable"}}
  {{#> panel-main}}
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

### Scrollable with header and footer
```hbs
{{#> panel panel--modifier="pf-m-scrollable"}}
  {{#> panel-header}}
    Header content
  {{/panel-header}}
  {{#> panel-main}}
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
  {{#> panel-footer}}
    Footer content
  {{/panel-footer}}
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
| `.pf-v6-c-panel__menu` | `<div>` | Initiates a panel menu container, removing the padding from `.pf-v6-c-panel__main`. |
| `.pf-v6-c-panel__footer` | `<div>` | Initiates the panel footer. |
| `.pf-m-bordered` | `.pf-v6-c-panel` | Modifies the panel for bordered styles. |
| `.pf-m-raised` | `.pf-v6-c-panel` | Modifies the panel for raised styles. |
| `.pf-m-scrollable` | `.pf-v6-c-panel` | Modifies the panel for scrollable styles. |
| `.pf-m-secondary` | `.pf-v6-c-panel` | Modifies the panel for secondary styles. |
