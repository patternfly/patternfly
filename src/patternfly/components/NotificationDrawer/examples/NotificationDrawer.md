---
id: Notification drawer
section: components
beta: true
cssPrefix: pf-c-notification-drawer
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
      {{> dropdown dropdown-menu--modifier="pf-m-align-right" dropdown--id=(concat notification-drawer--id "-header-action") dropdown-toggle--IsPlain="true"}}
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
      {{> dropdown dropdown-menu--modifier="pf-m-align-right" dropdown--id=(concat notification-drawer--id "-header-action") dropdown-toggle--IsPlain="true"}}
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

### With tabs and tasks with hover actions
```hbs
{{#> notification-drawer notification-drawer--id="notification-drawer-hover-task-groups"}}
  {{#> notification-drawer-header}}
    {{#> notification-drawer-header-title}}
      Notifications
    {{/notification-drawer-header-title}}
    {{#> notification-drawer-header-action}}
      {{> dropdown dropdown-menu--modifier="pf-m-align-right" dropdown--id=(concat notification-drawer--id "-header-action") dropdown-toggle--IsPlain="true"}}
      {{> notification-drawer-header-action-close}}
    {{/notification-drawer-header-action}}
  {{/notification-drawer-header}}

  {{> notification-drawer-tabs}}

  {{#> notification-drawer-body}}

    {{#> tab-content tab-content--attribute='id="notification-drawer-tabs-alerts-panel"'}}
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
    {{/tab-content}}

    {{#> tab-content tab-content--IsActive="true" tab-content--attribute='id="notification-drawer-tabs-tasks-panel"'}}

      <!--  task group 1 -->
      {{#> notification-drawer-task-list-group}}
        {{#> notification-drawer-task-group notification-drawer-task-group--IsDanger="true" notification-drawer-task-group--id=(concat notification-drawer--id '-task-list-group1') notification-drawer-task-group--IsExpanded="true"}}
          <h1>
            {{#> notification-drawer-task-group-toggle}}
              {{#> notification-drawer-task-group-toggle-header}}
                {{#> notification-drawer-task-group-toggle-title}}
                  Task group with failure
                {{/notification-drawer-task-group-toggle-title}}
                {{#> notification-drawer-task-group-toggle-status}}
                  <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
                {{/notification-drawer-task-group-toggle-status}}
                {{#> notification-drawer-task-group-toggle-action}}
                    Action
                {{/notification-drawer-task-group-toggle-action}}
              {{/notification-drawer-task-group-toggle-header}}
              {{#> notification-drawer-task-group-toggle-count}}
                {{#> badge badge--modifier="pf-m-read"}}4{{/badge}}
              {{/notification-drawer-task-group-toggle-count}}
              {{> notification-drawer-task-group-toggle-icon}}
            {{/notification-drawer-task-group-toggle}}
          </h1>
          {{> notification-drawer-basic-task-list-hover-action-progress}}
        {{/notification-drawer-task-group}}
      <!-- end task group 1 -->

      <!--  task group 2 -->
        {{#> notification-drawer-task-group notification-drawer-task-list-group--id=(concat notification-drawer--id '-task-list-group1') notification-drawer-task-group--IsExpanded="true" notification-drawer-task-group--IsSuccess="true"}}
          <h1>
            {{#> notification-drawer-task-group-toggle}}
              {{#> notification-drawer-task-group-toggle-header}}
                {{#> notification-drawer-task-group-toggle-title}}
                  Task group with success
                {{/notification-drawer-task-group-toggle-title}}
                {{#> notification-drawer-task-group-toggle-status}}
                  <i class="fas fa-check-circle" aria-hidden="true"></i>
                {{/notification-drawer-task-group-toggle-status}}
              {{/notification-drawer-task-group-toggle-header}}
              {{#> notification-drawer-task-group-toggle-count}}
                {{#> badge badge--modifier="pf-m-read"}}4{{/badge}}
              {{/notification-drawer-task-group-toggle-count}}
              {{#> notification-drawer-task-group-toggle-timestamp}}
                4 days ago
              {{/notification-drawer-task-group-toggle-timestamp}}
              {{> notification-drawer-task-group-toggle-icon}}
            {{/notification-drawer-task-group-toggle}}
          </h1>
          {{> notification-drawer-basic-task-list-hover-action}}
        {{/notification-drawer-task-group}}
      <!-- end task group 2 -->

      <!--  task group 3 -->
        {{#> notification-drawer-task-group notification-drawer-task-list-group--id=(concat notification-drawer--id '-task-list-group1') notification-drawer-task-group--IsSuccess="true"}}
          <h1>
            {{#> notification-drawer-task-group-toggle}}
              {{#> notification-drawer-task-group-toggle-header}}
                {{#> notification-drawer-task-group-toggle-title}}
                  Task group that is collapsed
                {{/notification-drawer-task-group-toggle-title}}
                {{#> notification-drawer-task-group-toggle-status}}
                  <i class="fas fa-check-circle" aria-hidden="true"></i>
                {{/notification-drawer-task-group-toggle-status}}
              {{/notification-drawer-task-group-toggle-header}}
              {{#> notification-drawer-task-group-toggle-count}}
                {{#> badge badge--modifier="pf-m-read"}}4{{/badge}}
              {{/notification-drawer-task-group-toggle-count}}
              {{#> notification-drawer-task-group-toggle-timestamp}}
                4 days ago
              {{/notification-drawer-task-group-toggle-timestamp}}
              {{> notification-drawer-task-group-toggle-icon}}
            {{/notification-drawer-task-group-toggle}}
          </h1>
          {{> notification-drawer-basic-task-list-hoverable}}
        {{/notification-drawer-task-group}}
      <!-- end task group 3 -->

      {{/notification-drawer-task-list-group}}
    {{/tab-content}}

  {{/notification-drawer-body}}
{{/notification-drawer}}
```

### With tabs and tasks with multiple actions
```hbs
{{#> notification-drawer notification-drawer--id="notification-drawer-action-task-groups"}}
  {{#> notification-drawer-header}}
    {{#> notification-drawer-header-title}}
      Notifications
    {{/notification-drawer-header-title}}
    {{#> notification-drawer-header-action}}
      {{> dropdown dropdown-menu--modifier="pf-m-align-right" dropdown--id=(concat notification-drawer--id "-header-action") dropdown-toggle--IsPlain="true"}}
      {{> notification-drawer-header-action-close}}
    {{/notification-drawer-header-action}}
  {{/notification-drawer-header}}

  {{> notification-drawer-tabs}}

  {{#> notification-drawer-body}}

    {{#> tab-content tab-content--attribute='id="notification-drawer-tabs-alerts-panel"'}}
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
    {{/tab-content}}

    {{#> tab-content tab-content--IsActive="true" tab-content--attribute='id="notification-drawer-tabs-tasks-panel"'}}

      <!--  task group 1 -->
      {{#> notification-drawer-task-list-group }}
        {{#> notification-drawer-task-group notification-drawer-task-group--id=(concat notification-drawer--id '-task-list-group1') notification-drawer-task-group--IsExpanded="true"}}
          <h1>
            {{#> notification-drawer-task-group-toggle}}
              {{#> notification-drawer-task-group-toggle-header}}
                {{#> notification-drawer-task-group-toggle-title}}
                  Task group updating
                {{/notification-drawer-task-group-toggle-title}}
                {{#> notification-drawer-task-group-toggle-status}}
                  {{#> spinner spinner--IsSvg="true" spinner--modifier="pf-m-sm"}}Loading...{{/spinner}}
                {{/notification-drawer-task-group-toggle-status}}
                {{#> notification-drawer-task-group-toggle-action}}
                  Action
                {{/notification-drawer-task-group-toggle-action}}
              {{/notification-drawer-task-group-toggle-header}}
              {{#> notification-drawer-task-group-toggle-count}}
                {{#> badge badge--modifier="pf-m-read"}}3{{/badge}}
              {{/notification-drawer-task-group-toggle-count}}
              {{> notification-drawer-task-group-toggle-icon}}
            {{/notification-drawer-task-group-toggle}}
          </h1>
          {{> notification-drawer-basic-task-list}}
        {{/notification-drawer-task-group}}
      <!-- end task group 1 -->

      <!--  task group 2 -->
        {{#> notification-drawer-task-group notification-drawer-task-group--IsSuccess="true" notification-drawer-task-group--id=(concat notification-drawer--id '-task-list-group2') notification-drawer-task-group--IsExpanded="true"}}
          <h1>
            {{#> notification-drawer-task-group-toggle}}
              {{#> notification-drawer-task-group-toggle-header}}
                {{#> notification-drawer-task-group-toggle-title}}
                  Task group with success status
                {{/notification-drawer-task-group-toggle-title}}
                {{#> notification-drawer-task-group-toggle-status}}
                  <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
                {{/notification-drawer-task-group-toggle-status}}
              {{/notification-drawer-task-group-toggle-header}}
              {{#> notification-drawer-task-group-toggle-count}}
                {{#> badge badge--modifier="pf-m-read"}}3{{/badge}}
              {{/notification-drawer-task-group-toggle-count}}
              {{#> notification-drawer-task-group-toggle-timestamp}}
                4 days ago
              {{/notification-drawer-task-group-toggle-timestamp}}
              {{> notification-drawer-task-group-toggle-icon}}
            {{/notification-drawer-task-group-toggle}}
          </h1>
          {{> notification-drawer-basic-task-list}}
        {{/notification-drawer-task-group}}
        <!-- end task group 2 -->

      <!--  task group 2 -->
        {{#> notification-drawer-task-group notification-drawer-task-group--IsSuccess="true" notification-drawer--id=(concat notification-drawer--id '-task-list-group3')}}
          <h1>
            {{#> notification-drawer-task-group-toggle}}
              {{#> notification-drawer-task-group-toggle-header}}
                {{#> notification-drawer-task-group-toggle-title}}
                  Collapsed task group with success status
                {{/notification-drawer-task-group-toggle-title}}
                {{#> notification-drawer-task-group-toggle-status}}
                  <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
                {{/notification-drawer-task-group-toggle-status}}
              {{/notification-drawer-task-group-toggle-header}}
              {{#> notification-drawer-task-group-toggle-count}}
                {{#> badge badge--modifier="pf-m-read"}}3{{/badge}}
              {{/notification-drawer-task-group-toggle-count}}
              {{#> notification-drawer-task-group-toggle-timestamp}}
                4 days ago
              {{/notification-drawer-task-group-toggle-timestamp}}
              {{> notification-drawer-task-group-toggle-icon}}
            {{/notification-drawer-task-group-toggle}}
          </h1>
          {{> notification-drawer-basic-task-list}}
        {{/notification-drawer-task-group}}
        <!-- end task group 2 -->

      {{/notification-drawer-task-list-group}}
    {{/tab-content}}

  {{/notification-drawer-body}}
{{/notification-drawer}}
```

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="false"` | `.pf-c-notification-drawer__group-toggle` | Indicates that the group notification list is hidden. |
| `aria-expanded="true"` | `.pf-c-notification-drawer__group-toggle` | Indicates that the group notification list is visible. |
| `hidden` | `.pf-c-notification-drawer__list` | Indicates that the group notification list is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies. |
| `tabindex="0"` | `.pf-c-notification-drawer__list-item.pf-m-hoverable` | Inserts the hoverable list item into the tab order of the page so that it is focusable. |
| `aria-hidden="true"` | `.pf-c-notification-drawer__group-toggle-icon > *`, `.pf-c-notification-drawer__list-item-header-icon > *` | Hides icon for assistive technologies. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-notification-drawer` | `<div>` | Initiates the notification drawer. **Required** |
| `.pf-c-notification-drawer__header` | `<div>` | Initiates the notification drawer header. **Required** |
| `.pf-c-notification-drawer__header-title` | `<h1>` | Initiates the notification drawer header title. **Required** |
| `.pf-c-notification-drawer__header-status` | `<span>` | Initiates the notification drawer header status. |
| `.pf-c-notification-drawer__header-action` | `<div>` | Initiates the notification drawer header action. |
| `.pf-c-notification-drawer__header-action-close` | `<div>` | Initiates the notification drawer header action button. |
| `.pf-c-notification-drawer__tabs` | `<div>` | Initiates the notification drawer tabs. **Required if both an alert and task list is used** |
| `.pf-c-notification-drawer__body` | `<div>` | Initiates the notification drawer body. **Required** |
| `.pf-c-notification-drawer__list` | `<ul>` | Initiates a notification list. **Required** |
| `.pf-c-notification-drawer__task-list` | `<ul>` | Initiates a notification task list. **Required** |
| `.pf-c-notification-drawer__list-item` | `<li>` | Initiates a notification list item. **Always use with a state modifier - one of `.pf-m-info`, `.pf-m-warning`, `.pf-m-danger`, `.pf-m-success`.** **Required** |
| `.pf-c-notification-drawer__list-item-header` | `<div>` | Initiates a notification list item header. **Required** |
| `.pf-c-notification-drawer__list-item-header-icon` | `<span>` | Initiates a notification list item header icon. **Required** |
| `.pf-c-notification-drawer__list-item-header-title` | `<h2>` | Initiates a notification list item header title. **Required** |
| `.pf-c-notification-drawer__list-item-action` | `<div>` | Initiates a notification list item action. |
| `.pf-c-notification-drawer__list-item-description` | `<div>` | Initiates a notification list item description. **Required** |
| `.pf-c-notification-drawer__list-item-timestamp` | `<div>` | Initiates a notification list item timestamp. **Required** |
| `.pf-c-notification-drawer__task-list-item` | `<li>` | Initiates a notification task list item. **Always use with a state modifier - one of `.pf-m-info`, `.pf-m-warning`, `.pf-m-danger`, `.pf-m-success`.** **Required** |
| `.pf-c-notification-drawer__task-list-item-title` | `<div>` | Initiates a notification task list item title. **Required** |
| `.pf-c-notification-drawer__task-list-item-hover-action` | `<div>` | Initiates a notification task list item action on hover. |
| `.pf-c-notification-drawer__task-list-item-status` | `<div>` | Initiates a notification task list item header status. **Required** |
| `.pf-c-notification-drawer__task-list-item-action` | `<div>` | Initiates a notification task list item action. |
| `.pf-c-notification-drawer__group-list` | `<div>` | Initiates a notification group list. **Required when notifications are grouped** |
| `.pf-c-notification-drawer__group` | `<section>` | Initiates a notification group. **Required** |
| `.pf-c-notification-drawer__group-toggle` | `<button>` | Initiates a notification group toggle. **Required** |
| `.pf-c-notification-drawer__group-title` | `<div>` | Initiates a notification group toggle title. **Required** |
| `.pf-c-notification-drawer__group-count` | `<div>` | Initiates a notification group toggle count. |
| `.pf-c-notification-drawer__group-icon` | `<span>` | Initiates a notification group toggle icon. **Required** |
| `.pf-c-notification-drawer__task-group-list` | `<div>` | Initiates a notification task group list. **Required when notifications are grouped** |
| `.pf-c-notification-drawer__task-group` | `<section>` | Initiates a notification task group. **Required** |
| `.pf-c-notification-drawer__task-group-toggle` | `<button>` | Initiates a notification task group toggle. **Required** |
| `.pf-c-notification-drawer__task-group-toggle-header` | `<div>` | Initiates a notification task group toggle header. **Required** |
| `.pf-c-notification-drawer__task-group-toggle-title` | `<div>` | Initiates a notification task group toggle title. **Required** |
| `.pf-c-notification-drawer__task-group-toggle-status` | `<div>` | Initiates a notification task group toggle status. |
| `.pf-c-notification-drawer__task-group-toggle-action` | `<div>` | Initiates a notification task group toggle action. |
| `.pf-c-notification-drawer__task-group-toggle-count` | `<div>` | Initiates a notification task group toggle count. |
| `.pf-c-notification-drawer__task-group-toggle-timestamp` | `<div>` | Initiates a notification task group toggle timestamp. |
| `.pf-c-notification-drawer__task-group-toggle-icon` | `<span>` | Initiates a notification task group toggle icon. **Required** |
| `.pf-m-default` | `.pf-c-notification-drawer__list-item`,`.pf-c-notification-drawer__task-list-item`,`.pf-c-notification-drawer__task-group` | Modifies a notification list item, task list item, or task group for the default state. |
| `.pf-m-info` | `.pf-c-notification-drawer__list-item`,`.pf-c-notification-drawer__task-list-item`,`.pf-c-notification-drawer__task-group` | Modifies a notification list item, task list item, or task group for the info state. |
| `.pf-m-warning` | `.pf-c-notification-drawer__list-item`,`.pf-c-notification-drawer__task-list-item`,`.pf-c-notification-drawer__task-group` | Modifies a notification list item, task list item, or task group for the warning state. |
| `.pf-m-danger` | `.pf-c-notification-drawer__list-item`,`.pf-c-notification-drawer__task-list-item`,`.pf-c-notification-drawer__task-group` | Modifies a notification list item, task list item, or task group for the danger state. |
| `.pf-m-success` | `.pf-c-notification-drawer__list-item`,`.pf-c-notification-drawer__task-list-item`,`.pf-c-notification-drawer__task-group` | Modifies a notification list item, task list item, or task group for the success state. |
| `.pf-m-read` | `.pf-c-notification-drawer__list-item` | Modifies a notification list item for the read state. |
| `.pf-m-hoverable` | `.pf-c-notification-drawer__list-item`, `.pf-c-notification-drawer__task-list-item` | Modifies a notification list item hover states to inidicate it is clickable. |
| `.pf-m-expanded` | `.pf-c-notification-drawer__group`, `.pf-c-notification-drawer__task-group` | Modifies a notification or task group for the expanded state. |
| `.pf-m-truncate` | `.pf-c-notification-drawer__list-item-header-title`, `.pf-c-notification-drawer__task-list-item-header-title`, `.pf-c-notification-drawer__task-group-title` |  Modifies the title to display a single line and truncate any overflow text with ellipses. **Note:** you can specify the max number of lines to show by setting the `--pf-c-notification-drawer__list-item-header-title--max-lines` (the default value is `1`). |
