---
title: Drawer
section: experimental
cssPrefix: pf-c-drawer
---

## Examples

```hbs title=Closed-panel-on-right-(default)
{{#> drawer}}
  {{#> drawer-content}}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
  {{/drawer-content}}
  {{#> drawer-panel}}
    drawer-panel
  {{/drawer-panel}}
{{/drawer}}
```

```hbs title=Expanded-panel-on-right
{{#> drawer drawer-panel--IsOpen="true"}}
  {{#> drawer-content}}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
  {{/drawer-content}}
  {{#> drawer-panel}}
    drawer-panel
  {{/drawer-panel}}
{{/drawer}}
```

```hbs title=Panel-on-left
{{#> drawer drawer--modifier="pf-m-panel-left"}}
  {{#> drawer-content}}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
  {{/drawer-content}}
  {{#> drawer-panel}}
    drawer-panel
  {{/drawer-panel}}
{{/drawer}}
```

```hbs title=Expanded-panel-on-left
{{#> drawer drawer-panel--IsOpen="true" drawer--modifier="pf-m-panel-left"}}
  {{#> drawer-content}}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
  {{/drawer-content}}
  {{#> drawer-panel}}
    drawer-panel
  {{/drawer-panel}}
{{/drawer}}
```

```hbs title=Expanded-inline-panel-on-right
{{#> drawer drawer-panel--IsOpen="true" drawer--modifier="pf-m-inline"}}
  {{#> drawer-content}}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
  {{/drawer-content}}
  {{#> drawer-panel}}
    drawer-panel
  {{/drawer-panel}}
{{/drawer}}
```

```hbs title=Expanded-inline-panel-on-left
{{#> drawer drawer-panel--IsOpen="true" drawer--modifier="pf-m-inline pf-m-panel-left"}}
  {{#> drawer-content}}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
  {{/drawer-content}}
  {{#> drawer-panel}}
    drawer-panel
  {{/drawer-panel}}
{{/drawer}}
```

```hbs title=Modified-content-padding
{{#> drawer drawer-panel--IsOpen="true"}}
  {{#> drawer-content drawer-content-body--modifier="pf-m-padding"}}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
  {{/drawer-content}}
  {{#> drawer-panel}}
    drawer-panel
  {{/drawer-panel}}
{{/drawer}}
```

```hbs title=Modified-panel-padding
{{#> drawer drawer-panel--IsOpen="true"}}
  {{#> drawer-content}}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
  {{/drawer-content}}
  {{#> drawer-panel drawer-panel-body--modifier="pf-m-no-padding"}}
    drawer-panel
  {{/drawer-panel}}
{{/drawer}}
```

```hbs title=Modified-panel-width
{{#> drawer drawer-panel--IsOpen="true"}}
  {{#> drawer-content}}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
  {{/drawer-content}}
  {{#> drawer-panel drawer-panel--modifier="pf-m-width-33"}}
    drawer-panel
  {{/drawer-panel}}
{{/drawer}}
```

```hbs title=Modified-panel-border
{{#> drawer drawer-panel--IsOpen="true" drawer--modifier="pf-m-divider"}}
  {{#> drawer-content}}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
  {{/drawer-content}}
  {{#> drawer-panel}}
    drawer-panel
  {{/drawer-panel}}
{{/drawer}}
```

## Documentation

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-hidden="true"` | `.pf-c-drawer__panel` | Hides the drawer panel from assistive technologies. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-drawer` | `<div>` | Initiates the drawer container. **Required** |
| `.pf-c-drawer__content` | `<div>` | Initiates the drawer content container. **Required** |
| `.pf-c-drawer__content-body` | `<div>` | Initiates the drawer content body container. **Required** |
| `.pf-c-drawer__panel` | `<aside>` | Initiates the drawer panel container. **Required** |
| `.pf-c-drawer__panel-body` | `<div>` | Initiates the drawer panel body container. **Required** |
| `.pf-m-expanded` | `.pf-c-drawer` | Modifies the drawer panel for the expanded state. |
| `.pf-m-inline` | `.pf-c-drawer` | Modifies the drawer so the content element and panel element are displayed side by side. |
| `.pf-m-divider` | `.pf-c-drawer` | Modifies the drawer panel border treatment to disable box-shadow and enable solid border/divider. |
| `.pf-m-padding` | `.pf-c-drawer__content-body` | Modifies the drawer content to add padding. |
| `.pf-m-no-padding` | `.pf-c-drawer__panel-body` | Modifies the drawer panel to remove padding. |
| `.pf-m-width-{25, 33, 50, 66, 75}{-on-[breakpoint]}` | `.pf-c-drawer__panel` | Modifies the drawer panel width. |
