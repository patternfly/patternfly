---
id: Notification drawer
section: components
cssPrefix: pf-v6-c-notification-drawer
---

## Examples
### Basic
```hbs
{{#> notification-drawer notification-drawer--id="notification-drawer-basic"}}
  {{#> notification-drawer-header}}
    {{#> notification-drawer-header-title}}
      Notifications
    {{/notification-drawer-header-title}}
    {{#> notification-drawer-header-status}}
      3 unread
    {{/notification-drawer-header-status}}
    {{#> notification-drawer-header-action}}
      {{> menu-toggle
          menu-toggle--IsPlain=true
          menu-toggle--HasKebab=true
          menu-toggle--id=(dasherize log-viewer--id 'menu-toggle')
        }}
      {{> notification-drawer-header-action-close}}
    {{/notification-drawer-header-action}}
  {{/notification-drawer-header}}
  {{#> notification-drawer-body}}
    {{> notification-drawer-basic-list}}
  {{/notification-drawer-body}}
{{/notification-drawer}}
```

### Groups
```hbs
{{#> notification-drawer notification-drawer--id="notification-drawer-groups"}}
  {{#> notification-drawer-header}}
    {{#> notification-drawer-header-title}}
      Notifications
    {{/notification-drawer-header-title}}
    {{#> notification-drawer-header-status}}
      9 unread
    {{/notification-drawer-header-status}}
    {{#> notification-drawer-header-action}}
      {{> menu-toggle
          menu-toggle--IsPlain=true
          menu-toggle--HasKebab=true
          menu-toggle--id=(dasherize log-viewer--id 'menu-toggle')
        }}
      {{> notification-drawer-header-action-close}}
    {{/notification-drawer-header-action}}
  {{/notification-drawer-header}}
  {{#> notification-drawer-body}}
    {{#> notification-drawer-group-list}}
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
              {{#> badge badge--modifier="pf-m-unread"}}3{{/badge}}
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
    {{/notification-drawer-group-list}}
  {{/notification-drawer-body}}
{{/notification-drawer}}
```

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="false"` | `.pf-v6-c-notification-drawer__group-toggle` | Indicates that the group notification list is hidden. |
| `aria-expanded="true"` | `.pf-v6-c-notification-drawer__group-toggle` | Indicates that the group notification list is visible. |
| `hidden` | `.pf-v6-c-notification-drawer__list` | Indicates that the group notification list is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies. |
| `tabindex="0"` | `.pf-v6-c-notification-drawer__list-item.pf-m-hoverable` | Inserts the hoverable list item into the tab order of the page so that it is focusable. |
| `aria-hidden="true"` | `.pf-v6-c-notification-drawer__group-toggle-icon > *`, `.pf-v6-c-notification-drawer__list-item-header-icon > *` | Hides icon for assistive technologies. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-notification-drawer` | `<div>` | Initiates the notification drawer. **Required** |
| `.pf-v6-c-notification-drawer__header` | `<div>` | Initiates the notification drawer header. **Required** |
| `.pf-v6-c-notification-drawer__header-title` | `<h1>` | Initiates the notification drawer header title. **Required** |
| `.pf-v6-c-notification-drawer__header-status` | `<span>` | Initiates the notification drawer header status. |
| `.pf-v6-c-notification-drawer__header-action` | `<div>` | Initiates the notification drawer header action. |
| `.pf-v6-c-notification-drawer__header-action-close` | `<div>` | Initiates the notification drawer header action button. |
| `.pf-v6-c-notification-drawer__body` | `<div>` | Initiates the notification drawer body. **Required** |
| `.pf-v6-c-notification-drawer__list` | `<ul>` | Initiates a notification list. **Required** |
| `.pf-v6-c-notification-drawer__list-item` | `<li>` | Initiates a notification list item. Always use with a state modifier class. **Required** |
| `.pf-v6-c-notification-drawer__list-item-header` | `<div>` | Initiates a notification list item header. **Required** |
| `.pf-v6-c-notification-drawer__list-item-header-icon` | `<span>` | Initiates a notification list item header icon. **Required** |
| `.pf-v6-c-notification-drawer__list-item-header-title` | `<h2>` | Initiates a notification list item header title. **Required** |
| `.pf-v6-c-notification-drawer__list-item-action` | `<div>` | Initiates a notification list item action. |
| `.pf-v6-c-notification-drawer__list-item-description` | `<div>` | Initiates a notification list item description. **Required** |
| `.pf-v6-c-notification-drawer__list-item-timestamp` | `<div>` | Initiates a notification list item timestamp. **Required** |
| `.pf-v6-c-notification-drawer__group-list` | `<div>` | Initiates a notification group list. **Required when notifications are grouped** |
| `.pf-v6-c-notification-drawer__group` | `<section>` | Initiates a notification group. **Required** |
| `.pf-v6-c-notification-drawer__group-toggle` | `<button>` | Initiates a notification group toggle. **Required** |
| `.pf-v6-c-notification-drawer__group-title` | `<div>` | Initiates a notification group toggle title. **Required** |
| `.pf-v6-c-notification-drawer__group-count` | `<div>` | Initiates a notification group toggle count. |
| `.pf-v6-c-notification-drawer__group-icon` | `<span>` | Initiates a notification group toggle icon. **Required** |
| `.pf-m-custom` | `.pf-v6-c-notification-drawer__list-item` | Modifies a notification list item for the custom state. |
| `.pf-m-info` | `.pf-v6-c-notification-drawer__list-item` | Modifies a notification list item for the info state. |
| `.pf-m-warning` | `.pf-v6-c-notification-drawer__list-item` | Modifies a notification list item for the warning state. |
| `.pf-m-danger` | `.pf-v6-c-notification-drawer__list-item` | Modifies a notification list item for the danger state. |
| `.pf-m-success` | `.pf-v6-c-notification-drawer__list-item` | Modifies a notification list item for the success state. |
| `.pf-m-read` | `.pf-v6-c-notification-drawer__list-item` | Modifies a notification list item for the read state. |
| `.pf-m-hoverable` | `.pf-v6-c-notification-drawer__list-item` | Modifies a notification list item hover states to inidicate it is clickable. |
| `.pf-m-expanded` | `.pf-v6-c-notification-drawer__group` | Modifies a notification group for the expanded state. |
| `.pf-m-truncate` | `.pf-v6-c-notification-drawer__list-item-header-title` |  Modifies the title to display a single line and truncate any overflow text with ellipses. **Note:** you can specify the max number of lines to show by setting the `--pf-v6-c-notification-drawer__list-item-header-title--max-lines` (the default value is `1`). |
