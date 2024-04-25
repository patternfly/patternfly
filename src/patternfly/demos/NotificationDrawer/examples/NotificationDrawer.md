---
id: Notification drawer
section: components
---

## Demos

### Collapsed
```hbs isFullscreen
{{> notification-drawer-template
      notification-drawer--id="drawer-collapsed-example"
      notification-drawer--IsRead="true"
      notification-badge--aria-label="Notifications"
}}
```

### Expanded read
```hbs isFullscreen
{{> notification-drawer-template
      notification-drawer--id="drawer-expanded-read-example"
      notification-drawer--IsExpanded="true"
      notification-drawer--IsRead="true"
      notification-badge--aria-label="Notifications"
}}
```

### Expanded unread
```hbs isFullscreen
{{> notification-drawer-template
      notification-drawer--id="drawer-expanded-unread-example"
      notification-drawer--IsExpanded="true"
      notification-drawer--IsUnread="true"
      notification-badge--aria-label="Unread notifications"
}}
```

### Expanded attention
```hbs isFullscreen
{{> notification-drawer-template
      notification-drawer--id="drawer-expanded-attention-example"
      notification-drawer--IsExpanded="true"
      notification-drawer--IsAttention="true"
      notification-badge--aria-label="Attention notifications"
}}
```

### Expanded with groups
```hbs isFullscreen
{{> notification-drawer-template
      notification-drawer--id="drawer-expanded-with-groups-example"
      notification-drawer-template--IsGroup="true"
      notification-drawer--IsExpanded="true"
      notification-drawer--IsUnread="true"
      notification-badge--aria-label="Unread notifications"
}}
```

## Documentation

This demo implements the notification drawer in context of the page component.
