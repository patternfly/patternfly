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

### Expanded resiable viewport drawer
```hbs isFullscreen isBeta
{{> page-template page-template--id="drawer-expanded-resiable-viewport-example"}}

{{#> drawer drawer--id="drawer-expanded-resiable-viewport-example-drawer" drawer--IsViewport="true" drawer-panel--IsOpen="true" drawer-panel--IsResizable=true}}
  {{#> drawer-main}}
    {{#> drawer-panel}}
      {{#> drawer-body}}
        drawer panel
      {{/drawer-body}}
    {{/drawer-panel}}
  {{/drawer-main}}
{{/drawer}}
```

## Documentation
This demo implements the drawer in context of the page component.
