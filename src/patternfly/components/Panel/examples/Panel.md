---
id: 'Panel'
beta: true
section: components
cssPrefix: pf-c-panel
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
| `.pf-c-panel` | `<div>` | Initiates the panel. **Required** |
| `.pf-c-panel__header` | `<div>` | Initiates the panel header. |
| `.pf-c-panel__main` | `<div>` | Initiates the panel main content. |
| `.pf-c-panel__main-body` | `<div>` | Initiates a panel content body container. |
| `.pf-c-panel__footer` | `<div>` | Initiates the panel footer. |
| `.pf-m-bordered` | `.pf-c-panel` | Modifies the panel for bordered styles. |
| `.pf-m-raised` | `.pf-c-panel` | Modifies the panel for raised styles. |
| `.pf-m-scrollable` | `.pf-c-panel` | Modifies the panel for scrollable styles. |
