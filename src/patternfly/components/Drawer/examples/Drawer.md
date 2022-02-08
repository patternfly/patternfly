---
id: Drawer
section: components
cssPrefix: pf-c-drawer
---

import './Drawer.css'

## Examples

### Closed panel on right (default)
```hbs
{{#> drawer drawer--id="closed-panel-right-example"}}
  {{#> drawer-main}}
    {{#> drawer-content}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
    {{/drawer-content}}
    {{> drawer-example-panel}}
  {{/drawer-main}}
{{/drawer}}
```

### Expanded panel on right
```hbs
{{#> drawer drawer--id="expanded-panel-right-example" drawer-panel--IsOpen="true"}}
  {{#> drawer-main}}
    {{#> drawer-content}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
    {{/drawer-content}}
    {{> drawer-example-panel}}
  {{/drawer-main}}
{{/drawer}}
```

### Closed panel on left
```hbs
{{#> drawer drawer--id="closed-panel-left-example"  drawer--IsPanelLeft="true"}}
  {{#> drawer-main}}
    {{#> drawer-content}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
    {{/drawer-content}}
    {{> drawer-example-panel}}
  {{/drawer-main}}
{{/drawer}}
```

### Expanded panel on left
```hbs
{{#> drawer drawer--id="expanded-panel-left-example" drawer-panel--IsOpen="true" drawer--IsPanelLeft="true"}}
  {{#> drawer-main}}
    {{#> drawer-content}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
    {{/drawer-content}}
    {{> drawer-example-panel}}
  {{/drawer-main}}
{{/drawer}}
```

### Closed panel on bottom
```hbs
{{#> drawer drawer--id="closed-panel-bottom-example" drawer--IsPanelBottom="true"}}
  {{#> drawer-main}}
    {{#> drawer-content}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
      <br><br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
    {{/drawer-content}}
    {{> drawer-example-panel}}
  {{/drawer-main}}
{{/drawer}}
```

### Expanded panel on bottom
```hbs
{{#> drawer drawer--id="expanded-panel-bottom-example" drawer-panel--IsOpen="true" drawer--IsPanelBottom="true"}}
  {{#> drawer-main}}
    {{#> drawer-content}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
      <br><br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.{{/drawer-content}}
    {{> drawer-example-panel}}
  {{/drawer-main}}
{{/drawer}}
```

### Expanded inline panel
```hbs
{{#> drawer drawer--id="expanded-inline-panel-example" drawer-panel--IsOpen="true" drawer--IsInline="true"}}
  {{#> drawer-main}}
    {{#> drawer-content}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
    {{/drawer-content}}
    {{> drawer-example-panel}}
  {{/drawer-main}}
{{/drawer}}
```

### Expanded inline panel on left
```hbs
{{#> drawer drawer--id="expanded-inline-panel-left-example" drawer-panel--IsOpen="true" drawer--IsInline="true" drawer--IsPanelLeft="true"}}
  {{#> drawer-main}}
    {{#> drawer-content}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
    {{/drawer-content}}
    {{> drawer-example-panel}}
  {{/drawer-main}}
{{/drawer}}
```

### Static
```hbs
{{#> drawer drawer--id="static-example" drawer-panel--IsOpen="true" drawer--IsStatic="true"}}
  {{#> drawer-main}}
    {{#> drawer-content}}
      Static drawers don't have interactive elements. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
    {{/drawer-content}}
    {{> drawer-example-panel}}
  {{/drawer-main}}
{{/drawer}}
```

### Stacked content body elements
```hbs
{{#> drawer drawer--id="stacked-content-body-elements-example" drawer-panel--IsOpen="true"}}
  {{#> drawer-main}}
    {{#> drawer-content drawer-content--NoBody="true"}}
      {{#> drawer-body}}
        content-body
      {{/drawer-body}}
      {{#> drawer-body drawer-body--modifier="pf-m-padding"}}
        content-body with padding
      {{/drawer-body}}
      {{#> drawer-body}}
        content-body
      {{/drawer-body}}
    {{/drawer-content}}

    {{#> drawer-panel}}
      {{#> drawer-body}}
        {{#> drawer-head}}
          {{#> drawer-actions}}
            {{> drawer-close}}
          {{/drawer-actions}}
          {{#> drawer-header}}
            drawer-panel
          {{/drawer-header}}
        {{/drawer-head}}
      {{/drawer-body}}
      {{#> drawer-body drawer-body--modifier="pf-m-no-padding"}}
        drawer-panel with no padding
      {{/drawer-body}}
      {{#> drawer-body}}
        drawer-panel
      {{/drawer-body}}
    {{/drawer-panel}}
  {{/drawer-main}}
{{/drawer}}
```

### Modified content padding
```hbs
{{#> drawer drawer--id="modified-content-example" drawer-panel--IsOpen="true"}}
  {{#> drawer-main}}
    {{#> drawer-content drawer-body--modifier="pf-m-padding"}}
      <b>Drawer content padding.</b>&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
    {{/drawer-content}}
    {{> drawer-example-panel}}
  {{/drawer-main}}
{{/drawer}}
```

### Modified panel padding
```hbs
{{#> drawer drawer--id="modified-panel-padding-example" drawer-panel--IsOpen="true"}}
  {{#> drawer-main}}
    {{#> drawer-content}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
    {{/drawer-content}}
    {{> drawer-example-panel}}
  {{/drawer-main}}
{{/drawer}}
```

### Modified panel width
```hbs
{{#> drawer drawer--id="modified-panel-width-example" drawer-panel--IsOpen="true"}}
  {{#> drawer-main}}
    {{#> drawer-content}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
    {{/drawer-content}}
    {{> drawer-example-panel drawer-panel--modifier="pf-m-width-75 pf-m-width-33-on-lg pf-m-width-25-on-2xl"}}
  {{/drawer-main}}
{{/drawer}}
```

### Additional section above main
```hbs
{{#> drawer drawer--id="additional-section-above-main" drawer-panel--IsOpen="true"}}
  {{#> drawer-section}}
    drawer-section
  {{/drawer-section}}
  {{#> drawer-main}}
    {{#> drawer-content}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
    {{/drawer-content}}
    {{> drawer-example-panel}}
  {{/drawer-main}}
{{/drawer}}
```

### Resizable panel
```hbs
{{#> drawer drawer--id="resizable-panel-example" drawer-panel--IsOpen="true" drawer-panel--IsResizable="true"}}
  {{#> drawer-main}}
    {{#> drawer-content}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
    {{/drawer-content}}
    {{> drawer-example-panel}}
  {{/drawer-main}}
{{/drawer}}
```

### Resizable left panel
```hbs
{{#> drawer drawer--id="resizable-left-panel-example" drawer--IsPanelLeft="true" drawer-panel--IsOpen="true" drawer-panel--IsResizable="true"}}
  {{#> drawer-main}}
    {{#> drawer-content}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
    {{/drawer-content}}
    {{> drawer-example-panel}}
  {{/drawer-main}}
{{/drawer}}
```

### Resizable bottom panel
```hbs
{{#> drawer drawer--id="resizable-bottom-panel-example" drawer-panel--IsOpen="true" drawer--IsPanelBottom="true" drawer-panel--IsResizable="true"}}
  {{#> drawer-main}}
    {{#> drawer-content}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
      <br><br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.{{/drawer-content}}
    {{> drawer-example-panel}}
  {{/drawer-main}}
{{/drawer}}
```

### Resizable inline panel
```hbs
{{#> drawer drawer--id="expanded-inline-panel-example" drawer-panel--IsOpen="true" drawer--IsInline="true" drawer-panel--IsResizable="true"}}
  {{#> drawer-main}}
    {{#> drawer-content}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
    {{/drawer-content}}
    {{> drawer-example-panel}}
  {{/drawer-main}}
{{/drawer}}
```

### Panel with light-200 background
```hbs
{{#> drawer drawer--id="panel-with-light-200-background" drawer-panel--IsOpen="true"}}
 {{#> drawer-main}}
    {{#> drawer-content}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
    {{/drawer-content}}
    {{> drawer-example-panel drawer-panel--modifier="pf-m-light-200"}}
  {{/drawer-main}}
{{/drawer}}
```

### Accessibility
| Class | Applied to | Outcome |
| -- | -- | -- |
| `role="separator"` | `.pf-c-drawer__splitter` | Indicates that the splitter is a separator. **Required** |
| `tabindex="0"` | `.pf-c-drawer__splitter` | Inserts the splitter into the tab order of the page so that it is focusable. **Required** |
| `aria-orientation="horizontal"` | `.pf-c-drawer__splitter` | Indicates that the splitter is oriented horizontally. |
| `aria-orientation="vertical"` | `.pf-c-drawer__splitter.pf-m-vertical` | Indicates that the splitter is oriented vertically. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-drawer__splitter` | `<div>` | Initiates the splitter. |
| `.pf-c-drawer__splitter-handle` | `<div>` | Initiates the splitter handle element. |
| `.pf-m-vertical` |  `.pf-c-drawer__splitter` | Modifies the splitter to be vertical. |

## Documentation

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="true"` | `action that opens drawer` | Indicates that the expandable content is visible. **Required** |
| `aria-expanded="false"` | `action that opens drawer` | Indicates that the expandable content is hidden. **Required** |
| `hidden` | `.pf-c-drawer__panel` | Hides the drawer panel from assistive technologies. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-drawer` | `<div>` | Initiates the drawer container. **Required** |
| `.pf-c-drawer__section` | `<div>` | Initiates a drawer section area. This element can be used above or below `.pf-c-drawer__main` for titles, toolbars, footers, etc. |
| `.pf-c-drawer__main` | `<div>` | Initiates the drawer main area. **Required** |
| `.pf-c-drawer__content` | `<div>` | Initiates the drawer content container. **Required** |
| `.pf-c-drawer__panel` | `<aside>` | Initiates the drawer panel container. **Required** |
| `.pf-c-drawer__panel-main` | `<div>` | Initiates the drawer panel main container for resizable drawers only. |
| `.pf-c-drawer__body` | `<div>` | Initiates a drawer body container and is the child of `.pf-c-drawer__content`, `.pf-c-drawer__panel` and `.pf-c-drawer__panel-main`. **Required** |
| `.pf-c-drawer__head` | `<div>` | Initiates a drawer head container. This container positions `.pf-c-drawer__actions`, if present. |
| `.pf-c-drawer__actions` | `<div>` | Identifies the drawer close button. |
| `.pf-c-drawer__close` | `<div>` | Identifies the drawer close button. |
| `.pf-m-panel-left` | `.pf-c-drawer` | Modifies the drawer panel to expand from the left. |
| `.pf-m-panel-bottom` | `.pf-c-drawer` | Modifies the drawer panel to expand from the bottom. **Note:** percentage based panel sizes require the drawer component's parent element have an implicit or explicit height. |
| `.pf-m-expanded` | `.pf-c-drawer` | Modifies the drawer panel for the expanded state. |
| `.pf-m-static{-on-[lg, xl, 2xl]}` | `.pf-c-drawer` | Modifies the drawer panel state to always show both content and panel at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-inline{-on-[lg, xl, 2xl]}` | `.pf-c-drawer` | Modifies the drawer so the content element and panel element are displayed side by side. `.pf-m-inline` used without a [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes) will default to the `md` breakpoint. |
| `.pf-m-no-border` | `.pf-c-drawer__panel` | Modifies the drawer panel border treatment to disable all border treatment. |
| `.pf-m-padding` | `.pf-c-drawer__body` | Modifies the element to add padding. |
| `.pf-m-no-padding` | `.pf-c-drawer__body` | Modifies the element to remove padding. |
| `.pf-m-no-background` | `.pf-c-drawer__section`, `.pf-c-drawer__content`, `.pf-c-drawer__panel` | Modifies the drawer body/panel background color to transparent. |
| `.pf-m-light-200` | `.pf-c-drawer__section`, `.pf-c-drawer__content`, `.pf-c-drawer__panel` | Modifies the drawer body/panel background color to light grey. |
| `.pf-m-width-{25, 33, 50, 66, 75, 100}{-on-[breakpoint]}` | `.pf-c-drawer__panel` | Modifies the drawer panel width at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-resizable` | `.pf-c-drawer__panel` | Modifies the drawer panel to be resizable. Intended for use with the `.pf-c-drawer__splitter` element. |
| `--pf-c-drawer__panel--md--FlexBasis--min` | `.pf-c-drawer__panel` | Defines the drawer panel minimum size. |
| `--pf-c-drawer__panel--md--FlexBasis` | `.pf-c-drawer__panel` | Defines the drawer panel size. |
| `--pf-c-drawer__panel--md--FlexBasis--max` | `.pf-c-drawer__panel` | Defines the drawer panel maximum size. |
