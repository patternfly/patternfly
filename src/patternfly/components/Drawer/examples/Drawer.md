---
title: Drawer
section: experimental
cssPrefix: pf-c-drawer
---

## Examples
```hbs title=Closed
{{#> drawer}}
  {{#> drawer-content}}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
  {{/drawer-content}}
  {{#> drawer-panel}}
    drawer-panel
  {{/drawer-panel}}
{{/drawer}}
```

```hbs title=Expanded
{{#> drawer drawer--modifier="pf-m-expanded"}}
  {{#> drawer-content}}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
  {{/drawer-content}}
  {{#> drawer-panel}}
    drawer-panel
  {{/drawer-panel}}
{{/drawer}}
```

```hbs title=Expanded-inline
{{#> drawer drawer--modifier="pf-m-expanded pf-m-inline"}}
  {{#> drawer-content}}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
  {{/drawer-content}}
  {{#> drawer-panel}}
    drawer-panel
  {{/drawer-panel}}
{{/drawer}}
```

## Documentation
### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-drawer` | `<div>` | Creates the drawer container. |
| `.pf-c-drawer__content` | `<div>` | Creates the drawer content container. |
| `.pf-c-drawer__panel` | `<aside>` | Creates the drawer panel container. |
| `.pf-c-drawer__panel-body` | `<div>` | Creates the drawer panel body container. |
| `.pf-m-expanded` | `.pf-c-drawer` | Modifies the drawer panel for the expanded state. |
| `.pf-m-inline` | `.pf-c-drawer` | Modifies the drawer so the content element and panel element are displayed side by side. **This variation is not supported at this time for use in the page component when the drawer is used with the main content area.** |
| `.pf-m-no-padding` | `.pf-c-drawer__panel-body` | Modifies the panel body to remove the padding. |
