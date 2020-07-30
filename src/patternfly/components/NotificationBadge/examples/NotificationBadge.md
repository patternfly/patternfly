---
id: Notification badge
section: components
cssPrefix: pf-c-notification-badge
---

import './NotificationBadge.css'

## Examples

### Basic

```hbs
{{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Notifications"'}}
  {{#> notification-badge notification-badge--modifier="pf-m-read"}}
    <i class="pf-icon-bell" aria-hidden="true"></i>
  {{/notification-badge}}
{{/button}}

{{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Unread notifications"'}}
  {{#> notification-badge notification-badge--modifier="pf-m-unread"}}
    <i class="pf-icon-bell" aria-hidden="true"></i>
  {{/notification-badge}}
{{/button}}

{{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Attention notifications"'}}
  {{#> notification-badge notification-badge--modifier="pf-m-attention"}}
    <i class="pf-icon-attention-bell" aria-hidden="true"></i>
  {{/notification-badge}}
{{/button}}
```

### With count

```hbs
{{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Notifications"'}}
  {{#> notification-badge notification-badge--modifier="pf-m-read" notification-badge--count="24"}}
    <i class="pf-icon-bell" aria-hidden="true"></i>
  {{/notification-badge}}
{{/button}}

{{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Unread notifications"'}}
  {{#> notification-badge notification-badge--modifier="pf-m-unread" notification-badge--count="25"}}
    <i class="pf-icon-bell" aria-hidden="true"></i>
  {{/notification-badge}}
{{/button}}

{{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Attention notifications"'}}
  {{#> notification-badge notification-badge--modifier="pf-m-attention" notification-badge--count="26"}}
    <i class="pf-icon-attention-bell" aria-hidden="true"></i>
  {{/notification-badge}}
{{/button}}
```

## Documentation

### Overview

Always add a modifier class. Never use the class `.pf-c-notification-badge` on its own.

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
