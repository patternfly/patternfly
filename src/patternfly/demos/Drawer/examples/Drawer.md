---
id: Drawer
section: demos
wrapperTag: div
---

## Demos

### Collapsed

```hbs isFullscreen
{{> drawer-demo-default id="drawer-default" notification-badge--modifier="pf-m-read"}}
```

### Expanded

```hbs isFullscreen
{{> drawer-demo-default id="drawer-default-expanded" notification-badge--modifier="pf-m-read" drawer-panel--IsOpen="true"}}
```

### Unread

```hbs isFullscreen
{{> drawer-demo-default id="drawer-unread" notification-badge--modifier="pf-m-unread"}}
```

### Unread expanded

```hbs isFullscreen
{{> drawer-demo-default id="drawer-unread-expanded" notification-badge--modifier="pf-m-unread" drawer-panel--IsOpen="true"}}
```

### Attention

```hbs isFullscreen
{{> drawer-demo-default id="drawer-attention" notification-badge--modifier="pf-m-attention" page-header-tools--IsAttention="true"}}
```

### Attention expanded

```hbs isFullscreen
{{> drawer-demo-default id="drawer-attention-expanded" notification-badge--modifier="pf-m-attention pf-m-unread" drawer-panel--IsOpen="true" page-header-tools--IsAttention="true"}}
```

## Documentation

This demo implements the drawer in context of the page component.
