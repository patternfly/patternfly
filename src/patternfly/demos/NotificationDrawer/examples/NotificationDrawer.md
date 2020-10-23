---
id: Notification drawer
section: components
---

## Demos

### Collapsed
```hbs isFullscreen
{{> notification-drawer-demo id="drawer-collapsed"}}
```

### Expanded read
```hbs isFullscreen
{{> notification-drawer-demo id="drawer-expanded-read" drawer-panel--IsOpen="true" notification-drawer-basic-list--AllRead="true"}}
```

### Expanded unread
```hbs isFullscreen
{{> notification-drawer-demo id="drawer-expanded-unread" page-template-header-tools-notification-badge--badge--modifier="pf-m-unread" drawer-panel--IsOpen="true"}}
```

### Expanded attention
```hbs isFullscreen
{{> notification-drawer-demo id="drawer-expanded-attention" page-template-header-tools-notification-badge--badge--modifier="pf-m-attention" page-header-tools--IsAttention="true" drawer-panel--IsOpen="true"}}
```

### Expanded with groups
```hbs isFullscreen
{{> notification-drawer-demo id="drawer-expanded-with-groups" page-template-header-tools-notification-badge--badge--modifier="pf-m-unread" drawer-demo--IsGroup="true" drawer-panel--IsOpen="true"}}
```

## Documentation

This demo implements the notification drawer in context of the page component.
