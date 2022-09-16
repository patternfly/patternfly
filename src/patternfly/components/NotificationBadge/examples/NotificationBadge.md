---
id: Notification badge
section: components
cssPrefix: pf-c-notification-badge
---

import './NotificationBadge.css'

## Examples

### Basic

```hbs
<div class="pf-t-dark">
  {{> notification-badge notification-badge--aria-label="Notifications"}}
  {{> notification-badge notification-badge--IsUnread="true" notification-badge--aria-label="Unread notifications"}}
  {{> notification-badge notification-badge--IsAttention="true" notification-badge--aria-label="Attention notifications"}}
  <br><br>
  {{#> wrapper notification-badge--IsTask="true"}}
    {{> notification-badge notification-badge--aria-label="Tasks"}}
    {{> notification-badge notification-badge--IsUnread="true" notification-badge--aria-label="Unread tasks"}}
    {{> notification-badge notification-badge--IsAttention="true" notification-badge--aria-label="Attention tasks"}}
  {{/wrapper}}
</div>
```

### With count

```hbs
<div class="pf-t-dark">
  {{#> wrapper notification-badge--count="24"}}
    {{> notification-badge notification-badge--aria-label=(concat notification-badge--count " notifications")}}
    {{> notification-badge notification-badge--IsUnread="true" notification-badge--aria-label=(concat notification-badge--count " unread notifications")}}
    {{> notification-badge notification-badge--IsAttention="true" notification-badge--aria-label=(concat notification-badge--count " attention notifications")}}
    <br><br>
    {{#> wrapper notification-badge--IsTask="true"}}
      {{> notification-badge notification-badge--aria-label=(concat notification-badge--count " tasks")}}
      {{> notification-badge notification-badge--IsUnread="true" notification-badge--aria-label=(concat notification-badge--count " unread tasks")}}
      {{> notification-badge notification-badge--IsAttention="true" notification-badge--aria-label=(concat notification-badge--count " attention tasks")}}
    {{/wrapper}}
  {{/wrapper}}
</div>
```

### Expanded

```hbs
<div class="pf-t-dark">
  {{#> wrapper notification-badge--IsExpanded="true"}}
    {{> notification-badge notification-badge--aria-label="Notifications"}}
    {{> notification-badge notification-badge--IsUnread="true" notification-badge--aria-label="Unread notifications"}}
    {{> notification-badge notification-badge--IsAttention="true" notification-badge--aria-label="Attention notifications"}}
    <br><br>
    {{#> wrapper notification-badge--IsTask="true"}}
      {{> notification-badge notification-badge--aria-label="Tasks"}}
      {{> notification-badge notification-badge--IsUnread="true" notification-badge--aria-label="Unread tasks"}}
      {{> notification-badge notification-badge--IsAttention="true" notification-badge--aria-label="Attention tasks"}}
    {{/wrapper}}
  {{/wrapper}}
</div>
```

## Documentation

### Overview
Always add a modifier class to indicate read, unread, or attention state. Never use the class `.pf-c-notification-badge` on its own. This component is designed to be used within a dark component such as the [masthead](/components/masthead).

### Accessibility
Be sure that the component associated with this indicator handles screen reader text indicating read or unread notifications.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-notification-badge` | `<div>` |  Initiates a notification badge. **Always use it with a modifier class.** |
| `.pf-c-notification-badge__count` | `<span>` |  Initiates a notification badge count. |
| `.pf-m-read` | `.pf-c-notification-badge` |  Applies read notification badge styling. |
| `.pf-m-unread` | `.pf-c-notification-badge` |  Applies unread notification badge styling. |
| `.pf-m-attention` | `.pf-c-notification-badge` |  Applies attention notification badge styling. |
| `.pf-m-expanded` | `.pf-c-notification-badge` |  Applies expanded notification badge styling. |
