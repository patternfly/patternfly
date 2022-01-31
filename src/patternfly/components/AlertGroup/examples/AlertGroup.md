---
id: Alert group
section: components
cssPrefix: pf-c-alert-group
---

## Examples
### Static alert group
```hbs
{{#> alert-group}}
  {{#> alert-item}}
    {{#> alert alert--modifier="pf-m-inline pf-m-success" alert--attribute='aria-label="Success alert"'}}
      {{#> alert-icon alert-icon--type="check-circle"}}
      {{/alert-icon}}
      {{#> alert-title}}
        {{#> screen-reader}}Success alert:{{/screen-reader}}
        Success alert title
      {{/alert-title}}
    {{/alert}}
  {{/alert-item}}

  {{#> alert-item}}
    {{#> alert alert--modifier="pf-m-inline pf-m-danger" alert--attribute='aria-label="Danger alert"'}}
      {{#> alert-icon alert-icon--type="exclamation-circle"}}
      {{/alert-icon}}
      {{#> alert-title}}
        {{#> screen-reader}}Danger alert:{{/screen-reader}}
        Danger alert title
      {{/alert-title}}
    {{/alert}}
  {{/alert-item}}

  {{#> alert-item}}
    {{#> alert alert--modifier="pf-m-inline pf-m-info" alert--attribute='aria-label="Information alert"'}}
      {{#> alert-icon alert-icon--type="info-circle"}}
      {{/alert-icon}}
      {{#> alert-title}}
        {{#> screen-reader}}Info alert:{{/screen-reader}}
        Info alert title
      {{/alert-title}}
      {{#> alert-description}}
        Info alert description. <a href="#">This is a link.</a>
      {{/alert-description}}
    {{/alert}}
  {{/alert-item}}
{{/alert-group}}
```

### Overview
`.pf-c-alert-group` is optional when only one alert is needed. It becomes required when more than one alert is used in a list.
### Usage
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-alert-group` | `<ul>` | Creates an alert group component. **Required** |
| `.pf-c-alert-group__item` | `<li>` | Creates an alert group item. **Required** |

### Toast alert group
```hbs isFullscreen
{{#> alert-group alert-group--modifier="pf-m-toast"}}
  {{#> alert-item}}
    {{#> alert alert--modifier="pf-m-success" alert--attribute='aria-label="Success toast alert"'}}
      {{#> alert-icon alert-icon--type="check-circle"}}
      {{/alert-icon}}
      {{#> alert-title alert-title--attribute='id="alert_one_title"'}}
        {{#> screen-reader}}Success alert:{{/screen-reader}}
        Success toast alert title
      {{/alert-title}}
      {{#> alert-action}}
        {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close success alert: Success alert title"'}}
          <i class="fas fa-times" aria-hidden="true"></i>
        {{/button}}
      {{/alert-action}}
    {{/alert}}
  {{/alert-item}}

  {{#> alert-item}}
    {{#> alert alert--modifier="pf-m-danger" alert--attribute='aria-label="Danger toast alert"'}}
      {{#> alert-icon alert-icon--type="exclamation-circle"}}
      {{/alert-icon}}
      {{#> alert-title alert-title--attribute='id="alert_two_title"'}}
        {{#> screen-reader}}Danger alert:{{/screen-reader}}
        Danger toast alert title
      {{/alert-title}}
      {{#> alert-action}}
        {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close success alert: Success alert title"'}}
          <i class="fas fa-times" aria-hidden="true"></i>
        {{/button}}
      {{/alert-action}}
    {{/alert}}
  {{/alert-item}}

  {{#> alert-item}}
    {{#> alert alert--modifier="pf-m-info" alert--attribute='aria-label="Information toast alert"'}}
      {{#> alert-icon alert-icon--type="info-circle"}}
      {{/alert-icon}}
      {{#> alert-title alert-title--attribute='id="alert_three_title"'}}
        {{#> screen-reader}}Info alert:{{/screen-reader}}
        Info toast alert title
      {{/alert-title}}
      {{#> alert-description}}
        Info toast alert description. From the settings tab, click <a href="#">View logs</a>&nbsp;to review the details.
      {{/alert-description}}
      {{#> alert-action}}
        {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close success alert: Success alert title"'}}
          <i class="fas fa-times" aria-hidden="true"></i>
        {{/button}}
      {{/alert-action}}
    {{/alert}}
  {{/alert-item}}

  {{#> alert-item}}
    {{> alert-group-overflow-button alert-group-overflow-button--text="View 3 more notifications"}}
  {{/alert-item}}
{{/alert-group}}
```
### Overview
An alert group that includes the `.pf-m-toast` modifier becomes a toast alert group with unique positioning in the top-right corner of the window. `.pf-c-alert-group` is required to create a toast alert group.

Every toast alert must include a close button to dismiss the alert.

When toast alerts include a link or action, these elements are not announced as interactive elements by screen readers. Whenever you include a link or button, incorporate it into the message so that it’s clear to the user how to access the same contents or action without clicking the link or button directly in the toast. For example, if your toast alert displays a message “The build is complete. Go to the Builds page to download,” the screen reader user is given instructions on how to find their build for download.

For sighted users, interactive elements can be included in this message in one of the following ways:

- Using a link to the Builds page: “The build is complete. Go to the [Builds]() page to download” using `<a href="url">Builds</a>`
- Using a button to download: “The build is complete. Go to the Builds page to [download]()" using `<button class="pf-c-button pf-m-link pf-m-inline type="button">download</button>`

### Modifiers
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-toast`| `.pf-c-alert-group` | Applies toast alert styling to an alert group. |
| `.pf-c-alert-group__overflow-button` | `<button>` | Applies overflow button styling to an alert group overflow button. |
## Documentation
### Overview
Alert groups are used to contain and align consecutive alerts. Groups can either be embedded alongside a page's content or in the top-right corner as a toast group using the `.pf-m-toast` modifier.
