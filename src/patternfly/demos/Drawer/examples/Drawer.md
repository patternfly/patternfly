---
id: Drawer
section: components
wrapperTag: div
---

## Demos

### Collapsed
```hbs isFullscreen
{{> page-template page-template--id="drawer-collapsed-example" page-template--IsDrawer="true"}}
```

### Expanded
```hbs isFullscreen
{{> page-template
      page-template--id="drawer-expanded-example"
      page-template--IsDrawer="true"
      page-template--drawer-panel--IsOpen="true"
}}

{{#*inline "page-template-drawer-panel"}}
  {{#> drawer-panel}}
    {{#> drawer-body}}
      drawer panel
    {{/drawer-body}}
  {{/drawer-panel}}
{{/inline}}
```

### Expanded full height in page
```hbs isFullscreen
{{> page-template page-template--id="drawer-expanded-full-height-in-page-example"}}

{{#*inline "page-template-main-content"}}
  {{#> drawer drawer--id=(concat page-template--id '-drawer') drawer-panel--IsOpen=true drawer--IsFullHeight=true}}
    {{#> drawer-main}}
      {{#> drawer-content}}
        {{> page-template-section}}
      {{/drawer-content}}
      {{#> drawer-panel}}
        {{#> drawer-body}}
          drawer panel
        {{/drawer-body}}
      {{/drawer-panel}}
    {{/drawer-main}}
  {{/drawer}}
{{/inline}}
```

### Expanded full height in page without content
```hbs isFullscreen
{{> page-template page-template--id="drawer-expanded-full-height-in-page-without-content-example"}}

{{#*inline "page-template-main-content"}}
  {{> page-template-section}}
  {{#> drawer drawer--id=(concat page-template--id '-drawer') drawer-panel--IsOpen=true drawer--IsFullHeight=true}}
    {{#> drawer-main}}
      {{#> drawer-panel}}
        {{#> drawer-body}}
          drawer panel
        {{/drawer-body}}
      {{/drawer-panel}}
    {{/drawer-main}}
  {{/drawer}}
{{/inline}}
```

### Expanded full height page drawer
```hbs isFullscreen
{{> page-template
      page-template--id="drawer-expanded-full-height-page-drawer-example"
      page-template--IsDrawer="true"
      page-template--HasNoDrawerContent="true"
      page-template--drawer-panel--IsOpen="true"
      drawer--IsFullHeight="true"
}}

{{#*inline "page-template-drawer-panel"}}
  {{#> drawer-panel}}
    {{#> drawer-body}}
      drawer panel
    {{/drawer-body}}
  {{/drawer-panel}}
{{/inline}}
```

### Expanded bottom
```hbs isFullscreen
{{> page-template
      page-template--id="drawer-expanded-bottom-example"
      page-template--IsDrawer="true"
      page-template--drawer-panel--IsOpen="true"
      drawer--modifier="pf-m-panel-bottom"
}}

{{#*inline "page-template-drawer-panel"}}
  {{#> drawer-panel}}
    {{#> drawer-body}}
      drawer panel
    {{/drawer-body}}
  {{/drawer-panel}}
{{/inline}}
```

### Collapsed drawer with jump links
```hbs isFullscreen
{{> drawer-jump-links drawer-jump-links--id="drawer-jump-links"}}
```

### Expanded drawer with jump links
```hbs isFullscreen
{{> drawer-jump-links drawer-jump-links--id="drawer-expanded-jump-links" drawer-panel--IsOpen="true"}}
```

## Documentation
This demo implements the drawer in context of the page component.
