---
id: Notification drawer
section: components
---

## Demos

### Collapsed
```hbs isFullscreen
{{> notification-drawer-template notification-drawer-template--id="drawer-collapsed-example"}}
```

### Expanded read
```hbs isFullscreen
{{> notification-drawer-template
      notification-drawer-template--id="drawer-expanded-read-example"
      notification-drawer-basic-list--AllRead="true"
      notification-badge--modifier="pf-m-read"
      drawer-panel--IsOpen="true"
}}
```

### Expanded unread
```hbs isFullscreen
{{> notification-drawer-template
      notification-drawer-template--id="drawer-expanded-unread-example"
      notification-badge--modifier="pf-m-unread"
      drawer-panel--IsOpen="true"
}}
```

### Expanded attention
```hbs isFullscreen
{{> notification-drawer-template
      notification-drawer-template--id="drawer-expanded-attention-example"
      notification-drawer-basic-list--IsAttention="true"
      notification-badge--modifier="pf-m-attention"
      masthead-template-content-icon-group--notification-badge--IsAttention="true"
      drawer-panel--IsOpen="true"
}}
```

### Expanded with groups
```hbs isFullscreen
{{> notification-drawer-template
      notification-drawer-template--id="drawer-expanded-with-groups-example"
      notification-drawer-template--IsGroup="true"
      notification-badge--modifier="pf-m-unread"
      drawer-panel--IsOpen="true"
}}
```

## Documentation

This demo implements the notification drawer in context of the page component.
