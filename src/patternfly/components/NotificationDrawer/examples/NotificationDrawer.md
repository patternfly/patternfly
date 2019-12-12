---
title: Notification drawer
section: experimental
cssPrefix: pf-c-notification-drawer
---

## Examples
```hbs title=Basic
{{#> notification-drawer notification-drawer--id="notification-drawer-basic"}}
  {{#> notification-drawer-header}}
    {{#> notification-drawer-header-title}}
      Notifications
    {{/notification-drawer-header-title}}
    {{#> notification-drawer-header-status}}
      3 unread
    {{/notification-drawer-header-status}}
    {{#> notification-drawer-header-action}}
      {{#> dropdown id=(concat notification-drawer--id "-header-action") dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
    {{/notification-drawer-header-action}}
  {{/notification-drawer-header}}
  {{#> notification-drawer-body}}
    {{> notification-drawer-basic-list}}
  {{/notification-drawer-body}}
{{/notification-drawer}}
```

```hbs title=Groups
{{#> notification-drawer notification-drawer--id="notification-drawer-groups"}}
  {{#> notification-drawer-header}}
    {{#> notification-drawer-header-title}}
      Notifications
    {{/notification-drawer-header-title}}
    {{#> notification-drawer-header-status}}
      3 unread
    {{/notification-drawer-header-status}}
    {{#> notification-drawer-header-action}}
      {{#> dropdown id=(concat notification-drawer--id "-header-action") dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
    {{/notification-drawer-header-action}}
  {{/notification-drawer-header}}
  {{#> notification-drawer-body}}
    {{#> notification-drawer-group notification-drawer--id=(concat notification-drawer--id '-group1')}}
      <h1>
        {{#> notification-drawer-group-toggle}}
          {{#> notification-drawer-group-toggle-title}}
            First notification group
          {{/notification-drawer-group-toggle-title}}
          {{#> notification-drawer-group-toggle-count}}
            {{#> badge badge--modifier="pf-m-unread"}}2{{/badge}}
          {{/notification-drawer-group-toggle-count}}
          {{> notification-drawer-group-toggle-icon}}
        {{/notification-drawer-group-toggle}}
      </h1>
      {{> notification-drawer-basic-list}}
    {{/notification-drawer-group}}
    {{#> notification-drawer-group notification-drawer--id=(concat notification-drawer--id '-group2') notification-drawer-group--IsExpanded="true"}}
      <h1>
        {{#> notification-drawer-group-toggle}}
          {{#> notification-drawer-group-toggle-title}}
            Second notification group
          {{/notification-drawer-group-toggle-title}}
          {{#> notification-drawer-group-toggle-count}}
            {{#> badge badge--modifier="pf-m-unread"}}2{{/badge}}
          {{/notification-drawer-group-toggle-count}}
          {{> notification-drawer-group-toggle-icon}}
        {{/notification-drawer-group-toggle}}
      </h1>
      {{> notification-drawer-basic-list}}
    {{/notification-drawer-group}}
    {{#> notification-drawer-group notification-drawer--id=(concat notification-drawer--id '-group3')}}
      <h1>
        {{#> notification-drawer-group-toggle}}
          {{#> notification-drawer-group-toggle-title}}
            Third notification group
          {{/notification-drawer-group-toggle-title}}
          {{#> notification-drawer-group-toggle-count}}
            {{#> badge badge--modifier="pf-m-unread"}}2{{/badge}}
          {{/notification-drawer-group-toggle-count}}
          {{> notification-drawer-group-toggle-icon}}
        {{/notification-drawer-group-toggle}}
      </h1>
      {{> notification-drawer-basic-list}}
    {{/notification-drawer-group}}
    {{#> notification-drawer-group notification-drawer--id=(concat notification-drawer--id '-group4')}}
      <h1>
        {{#> notification-drawer-group-toggle}}
          {{#> notification-drawer-group-toggle-title}}
            Fourth notification group
          {{/notification-drawer-group-toggle-title}}
          {{#> notification-drawer-group-toggle-count}}
            {{#> badge badge--modifier="pf-m-unread"}}2{{/badge}}
          {{/notification-drawer-group-toggle-count}}
          {{> notification-drawer-group-toggle-icon}}
        {{/notification-drawer-group-toggle}}
      </h1>
      {{> notification-drawer-basic-list}}
    {{/notification-drawer-group}}
  {{/notification-drawer-body}}
{{/notification-drawer}}
```

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="false"` | `.pf-c-notification-drawer__group-toggle` | Indicates that the group notification list is hidden. |
| `aria-expanded="true"` | `.pf-c-notification-drawer__group-toggle` | Indicates that the group notification list is visible. |
| `hidden` | `.pf-c-notification-drawer__list` | Indicates that the group notification list is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies. |
| `aria-hidden="true"` | `.pf-c-notification-drawer__group-toggle-icon > *`, `.pf-c-notification-drawer__list-item-header-icon > *` | Hides icon for assistive technologies. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-notification-drawer` | `<div>` | Initiates the notification drawer. |
| `.pf-c-notification-drawer__header` | `<div>` | Initiates the notification drawer header. |
| `.pf-c-notification-drawer__header-title` | `<h1>` | Initiates the notification drawer header title. |
| `.pf-c-notification-drawer__header-status` | `<span>` | Initiates the notification drawer header status. |
| `.pf-c-notification-drawer__header-action` | `<div>` | Initiates the notification drawer header action. |
| `.pf-c-notification-drawer__body` | `<div>` | Initiates the notification drawer body. |
| `.pf-c-notification-drawer__list` | `<ul>` | Initiates a notification list. |
| `.pf-c-notification-drawer__list-item` | `<li>` | Initiates a notification list item. |
| `.pf-c-notification-drawer__list-item-header` | `<div>` | Initiates a notification list item header. |
| `.pf-c-notification-drawer__list-item-header-icon` | `<span>` | Initiates a notification list item header icon. |
| `.pf-c-notification-drawer__list-item-header-title` | `<h2>` | Initiates a notification list item header title. |
| `.pf-c-notification-drawer__list-item-action` | `<div>` | Initiates a notification list item action. |
| `.pf-c-notification-drawer__list-item-description` | `<div>` | Initiates a notification list item description. |
| `.pf-c-notification-drawer__list-item-timestamp` | `<div>` | Initiates a notification list item timestamp. |
| `.pf-c-notification-drawer__group` | `<section>` | Initiates a notification group. |
| `.pf-c-notification-drawer__group-toggle` | `<button>` | Initiates a notification group toggle. |
| `.pf-c-notification-drawer__group-title` | `<div>` | Initiates a notification group toggle title. |
| `.pf-c-notification-drawer__group-count` | `<div>` | Initiates a notification group toggle count. |
| `.pf-c-notification-drawer__group-icon` | `<span>` | Initiates a notification group toggle icon. |
