---
title: Drawer
section: demos
wrapperTag: div
---

## Demos

```hbs title=Default isFullscreen
{{> drawer-demo-default id="drawer-default"}}
```

```hbs title=Default-expanded isFullscreen
{{> drawer-demo-default id="drawer-default-expanded" drawer-panel--IsOpen="true"}}
```

```hbs title=Unread isFullscreen
{{> drawer-demo-default id="drawer-unread" notification-badge--modifier="pf-m-unread"}}
```

```hbs title=Unread-expanded isFullscreen
{{> drawer-demo-default id="drawer-unread-expanded" drawer-panel--IsOpen="true" notification-badge--modifier="pf-m-unread"}}
```

```hbs title=Attention isFullscreen
{{> drawer-demo-default id="drawer-attention" notification-badge--modifier="pf-m-attention"}}
```

```hbs title=Attention-expanded isFullscreen
{{> drawer-demo-default id="drawer-attention-expanded" drawer-panel--IsOpen="true" notification-badge--modifier="pf-m-attention pf-m-unread"}}
```

## Documentation

This demo implements the drawer in context of the page component.
