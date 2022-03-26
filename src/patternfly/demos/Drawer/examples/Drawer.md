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

## Documentation
This demo implements the drawer in context of the page component.
