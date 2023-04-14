---
id: Alert
section: components
cssPrefix: pf-c-alert
---

## Alert examples
### Types
```hbs
{{#> alert alert--modifier="pf-m-custom" alert--attribute='aria-label="Custom alert"'}}
  {{> alert-icon alert-icon--type="bell"}}
  {{#> alert-title}}
    {{#> screen-reader}}Custom alert:{{/screen-reader}}
    Custom alert title
  {{/alert-title}}
{{/alert}}
<br>
{{#> alert alert--modifier="pf-m-info" alert--attribute='aria-label="Information alert"'}}
  {{> alert-icon alert-icon--type="info-circle"}}
  {{#> alert-title}}
    {{#> screen-reader}}Info alert:{{/screen-reader}}
    Info alert title
  {{/alert-title}}
{{/alert}}
<br>
{{#> alert alert--modifier="pf-m-success" alert--attribute='aria-label="Success alert"'}}
  {{> alert-icon alert-icon--type="check-circle"}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
    Success alert title
  {{/alert-title}}
{{/alert}}
<br>
{{#> alert alert--modifier="pf-m-warning" alert--attribute='aria-label="Warning alert"'}}
  {{> alert-icon alert-icon--type="exclamation-triangle"}}
  {{#> alert-title}}
    {{#> screen-reader}}Warning alert:{{/screen-reader}}
    Warning alert title
  {{/alert-title}}
{{/alert}}
<br>
{{#> alert alert--modifier="pf-m-danger" alert--attribute='aria-label="Danger alert"'}}
  {{> alert-icon alert-icon--type="exclamation-circle"}}
  {{#> alert-title}}
    {{#> screen-reader}}Danger alert:{{/screen-reader}}
    Danger alert title
  {{/alert-title}}
{{/alert}}
```

### Variations
```hbs
{{#> alert alert--modifier="pf-m-success" alert--attribute='aria-label="Success alert"'}}
  {{> alert-icon alert-icon--type="check-circle"}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
    Success alert title
  {{/alert-title}}
  {{#> alert-action}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close success alert: Success alert title"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/alert-action}}
   {{#> alert-description}}
    Success alert description. This should tell the user more information about the alert.
  {{/alert-description}}
  {{#> alert-action-group}}
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      View details
    {{/button}}
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      Ignore
    {{/button}}
  {{/alert-action-group}}
{{/alert}}
<br>
{{#> alert alert--modifier="pf-m-success" alert--attribute='aria-label="Success alert"'}}
  {{> alert-icon alert-icon--type="check-circle"}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
      Success alert title
  {{/alert-title}}
  {{#> alert-action}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close success alert: Success alert title"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/alert-action}}
  {{#> alert-description}}
    Success alert description. This should tell the user more information about the alert. <a href="#">This is a link.</a>
  {{/alert-description}}
{{/alert}}
<br>
{{#> alert alert--modifier="pf-m-success" alert--attribute='aria-label="Success alert"'}}
  {{> alert-icon alert-icon--type="check-circle"}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
    Success alert title
  {{/alert-title}}
  {{#> alert-action}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close success alert: Success alert title"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/alert-action}}
  {{#> alert-action-group}}
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      View details
    {{/button}}
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      Ignore
    {{/button}}
  {{/alert-action-group}}
{{/alert}}
<br>
{{#> alert alert--modifier="pf-m-success" alert--attribute='aria-label="Success alert"'}}
  {{> alert-icon alert-icon--type="check-circle"}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
    Success alert title
  {{/alert-title}}
  {{#> alert-action}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close success alert: Success alert title"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/alert-action}}
{{/alert}}
<br>
{{#> alert alert--modifier="pf-m-success" alert--attribute='aria-label="Success alert"'}}
  {{> alert-icon alert-icon--type="check-circle"}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
      Success alert title
  {{/alert-title}}
{{/alert}}
<br>
{{#> alert alert--modifier="pf-m-success" alert--attribute='aria-label="Success alert with title truncation"'}}
  {{> alert-icon alert-icon--type="check-circle"}}
  {{#> alert-title alert-title--modifier="pf-m-truncate"}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque cursus enim fringilla tincidunt. Proin lobortis aliquam dictum. Nam vel ullamcorper nulla, nec blandit dolor. Vivamus pellentesque neque justo, nec accumsan nulla rhoncus id. Suspendisse mollis, tortor quis faucibus volutpat, sem leo fringilla turpis, ac lacinia augue metus in nulla. Cras vestibulum lacinia orci. Pellentesque sodales consequat interdum. Sed porttitor tincidunt metus nec iaculis. Pellentesque non commodo justo. Morbi feugiat rhoncus neque, vitae facilisis diam aliquam nec. Sed dapibus vitae quam at tristique. Nunc vel commodo mi. Mauris et rhoncus leo.
  {{/alert-title}}
  {{#> alert-description}}
    This example uses ".pf-m-truncate" to limit the title to a single line and truncate any overflow text with ellipses.
  {{/alert-description}}
{{/alert}}
<br>
{{#> alert alert--modifier="pf-m-success" alert--attribute='aria-label="Success alert with title truncation at 2 lines"'}}
  {{> alert-icon alert-icon--type="check-circle"}}
  {{#> alert-title alert-title--modifier="pf-m-truncate" alert-title--attribute='style="--pf-c-alert__title--max-lines: 2"'}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque cursus enim fringilla tincidunt. Proin lobortis aliquam dictum. Nam vel ullamcorper nulla, nec blandit dolor. Vivamus pellentesque neque justo, nec accumsan nulla rhoncus id. Suspendisse mollis, tortor quis faucibus volutpat, sem leo fringilla turpis, ac lacinia augue metus in nulla. Cras vestibulum lacinia orci. Pellentesque sodales consequat interdum. Sed porttitor tincidunt metus nec iaculis. Pellentesque non commodo justo. Morbi feugiat rhoncus neque, vitae facilisis diam aliquam nec. Sed dapibus vitae quam at tristique. Nunc vel commodo mi. Mauris et rhoncus leo.
  {{/alert-title}}
  {{#> alert-description}}
    This example uses ".pf-m-truncate" and sets "--pf-c-alert__title--max-lines: 2" to limit title to two lines and truncate any overflow text with ellipses.
  {{/alert-description}}
{{/alert}}
```

### Inline types
```hbs
{{#> alert alert--modifier="pf-m-custom pf-m-inline" alert--attribute='aria-label="Inline custom alert"'}}
  {{> alert-icon alert-icon--type="bell"}}
  {{#> alert-title}}
    {{#> screen-reader}}Custom inline alert:{{/screen-reader}}
    Custom inline alert title
  {{/alert-title}}
{{/alert}}
<br>
{{#> alert alert--modifier="pf-m-info pf-m-inline" alert--attribute='aria-label="Inline information alert"'}}
  {{> alert-icon alert-icon--type="info-circle"}}
  {{#> alert-title}}
    {{#> screen-reader}}Info alert:{{/screen-reader}}
    Info inline alert title
  {{/alert-title}}
{{/alert}}
<br>
{{#> alert alert--modifier="pf-m-success pf-m-inline" alert--attribute='aria-label="Inline success alert"'}}
  {{> alert-icon alert-icon--type="check-circle"}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
    Success inline alert title
  {{/alert-title}}
{{/alert}}
<br>
{{#> alert alert--modifier="pf-m-warning pf-m-inline" alert--attribute='aria-label="Inline warning alert"'}}
  {{> alert-icon alert-icon--type="exclamation-triangle"}}
  {{#> alert-title}}
    {{#> screen-reader}}Warning alert:{{/screen-reader}}
    Warning inline alert title
  {{/alert-title}}
{{/alert}}
<br>
{{#> alert alert--modifier="pf-m-danger pf-m-inline" alert--attribute='aria-label="Inline danger alert"'}}
  {{> alert-icon alert-icon--type="exclamation-circle"}}
  {{#> alert-title}}
    {{#> screen-reader}}Danger alert:{{/screen-reader}}
    Danger inline alert title
  {{/alert-title}}
{{/alert}}
```

### Inline variations
```hbs
{{#> alert alert--modifier="pf-m-success pf-m-inline" alert--attribute='aria-label="Success alert"'}}
  {{> alert-icon alert-icon--type="check-circle"}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
    Success alert title
  {{/alert-title}}
  {{#> alert-action}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close success alert: Success alert title"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/alert-action}}
  {{#> alert-description}}
    Success alert description. This should tell the user more information about the alert.
  {{/alert-description}}
  {{#> alert-action-group}}
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      View details
    {{/button}}
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      Ignore
    {{/button}}
  {{/alert-action-group}}
{{/alert}}
<br>
{{#> alert alert--modifier="pf-m-success pf-m-inline" alert--attribute='aria-label="Success alert"'}}
  {{> alert-icon alert-icon--type="check-circle"}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
      Success alert title
  {{/alert-title}}
  {{#> alert-action}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close success alert: Success alert title"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/alert-action}}
  {{#> alert-description}}
    Success alert description. This should tell the user more information about the alert. <a href="#">This is a link.</a>
  {{/alert-description}}
{{/alert}}
<br>
{{#> alert alert--modifier="pf-m-success pf-m-inline" alert--attribute='aria-label="Success alert"'}}
  {{> alert-icon alert-icon--type="check-circle"}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
    Success alert title
  {{/alert-title}}
  {{#> alert-action}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close success alert: Success alert title"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/alert-action}}
  {{#> alert-action-group}}
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      View details
    {{/button}}
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      Ignore
    {{/button}}
  {{/alert-action-group}}
{{/alert}}
<br>
{{#> alert alert--modifier="pf-m-success pf-m-inline" alert--attribute='aria-label="Success alert"'}}
  {{> alert-icon alert-icon--type="check-circle"}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
      Success alert title
  {{/alert-title}}
{{/alert}}
```

### Custom icon
```hbs
{{#> alert alert--modifier="pf-m-success" alert--attribute='aria-label="Success alert"'}}
  {{> alert-icon alert-icon--type="cog"}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
      Success alert title
  {{/alert-title}}
{{/alert}}
<br>
{{#> alert alert--modifier="pf-m-success pf-m-inline" alert--attribute='aria-label="Success alert"'}}
  {{> alert-icon alert-icon--type="cog"}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
      Success alert title
  {{/alert-title}}
{{/alert}}
```

### Inline plain
```hbs
{{#> alert alert--modifier="pf-m-success pf-m-plain pf-m-inline" alert--attribute='aria-label="Success alert"'}}
  {{> alert-icon alert-icon--type="check-circle"}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
    Success alert title
  {{/alert-title}}
{{/alert}}
```

### Expandable
```hbs
{{#> alert alert--id="alert-expandable-example-1" alert--IsExpandable="true" alert--modifier="pf-m-success" alert--attribute='aria-label="Success alert"'}}
  {{> alert-toggle}}
  {{> alert-icon alert-icon--type="check-circle"}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
    Success alert title
  {{/alert-title}}
  {{#> alert-action}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close success alert: Success alert title"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/alert-action}}
  {{#> alert-description}}
    Success alert description. This should tell the user more information about the alert.
  {{/alert-description}}
  {{#> alert-action-group}}
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      View details
    {{/button}}
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      Ignore
    {{/button}}
  {{/alert-action-group}}
{{/alert}}
<br>
{{#> alert alert--id="alert-expandable-example-2" alert--IsExpandable="true" alert--IsExpanded="true" alert--modifier="pf-m-success" alert--attribute='aria-label="Success alert"'}}
  {{> alert-toggle}}
  {{> alert-icon alert-icon--type="check-circle"}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
    Success alert title (expanded)
  {{/alert-title}}
  {{#> alert-action}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close success alert: Success alert title"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/alert-action}}
  {{#> alert-description}}
    Success alert description. This should tell the user more information about the alert.
  {{/alert-description}}
  {{#> alert-action-group}}
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      View details
    {{/button}}
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      Ignore
    {{/button}}
  {{/alert-action-group}}
{{/alert}}
<br>
{{#> alert alert--id="alert-expandable-example-3" alert--IsExpandable="true" alert--modifier="pf-m-success pf-m-inline" alert--attribute='aria-label="Success alert"'}}
  {{> alert-toggle}}
  {{> alert-icon alert-icon--type="check-circle"}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
    Success alert title
  {{/alert-title}}
  {{#> alert-action}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close success alert: Success alert title"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/alert-action}}
  {{#> alert-description}}
    Success alert description. This should tell the user more information about the alert.
  {{/alert-description}}
  {{#> alert-action-group}}
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      View details
    {{/button}}
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      Ignore
    {{/button}}
  {{/alert-action-group}}
{{/alert}}
<br>
{{#> alert alert--id="alert-expandable-example-4" alert--IsExpandable="true" alert--IsExpanded="true" alert--modifier="pf-m-success pf-m-inline" alert--attribute='aria-label="Success alert"'}}
  {{> alert-toggle}}
  {{> alert-icon alert-icon--type="check-circle"}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
    Success alert title (expanded)
  {{/alert-title}}
  {{#> alert-action}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close success alert: Success alert title"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/alert-action}}
  {{#> alert-description}}
    Success alert description. This should tell the user more information about the alert.
  {{/alert-description}}
  {{#> alert-action-group}}
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      View details
    {{/button}}
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      Ignore
    {{/button}}
  {{/alert-action-group}}
{{/alert}}
```

## Alert group examples
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

## Documentation

### Alert groups
Alert groups are used to contain and align consecutive alerts. Groups can either be embedded alongside a page's content or in the top-right corner as a toast group using the `.pf-m-toast` modifier.

### Alert group modifiers
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-toast`| `.pf-c-alert-group` | Applies toast alert styling to an alert group. |
| `.pf-c-alert-group__overflow-button` | `<button>` | Applies overflow button styling to an alert group overflow button. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-alert` | `<div>` | Initiates the alert component. Always use with a status modifier class. **Required** |
| `.pf-c-alert__toggle` | `<div>` | Defines the expandable alert toggle icon. **Required for expandable alerts** |
| `.pf-c-alert__toggle-icon` | `<span>` | Defines the expandable alert toggle icon. **Required for expandable alerts** |
| `.pf-c-alert__icon` | `<div>` | Defines the alert icon. **Required** |
| `.pf-c-alert__title` | `<p>, <h1-h6>` | Defines the alert title. **Required** |
| `.pf-c-alert__description` | `<div>` | Defines the alert description area. |
| `.pf-c-alert__action` | `<div>` | Defines the action button wrapper. Should contain `.pf-c-button.pf-m-plain` for close action or `.pf-c-button.pf-m-link` for link text. It should only include one action. |
| `.pf-c-alert__action-group` | `<div>` | Defines the action button group. Should contain `.pf-c-button.pf-m-link.pf-m-inline` for inline link text. **Note:** only inline link buttons are supported in the alert action group. |
| `.pf-m-custom` | `.pf-c-alert` | Applies custom status styling. |
| `.pf-m-success` | `.pf-c-alert` | Applies success status styling. |
| `.pf-m-danger` | `.pf-c-alert` | Applies danger status styling. |
| `.pf-m-warning` | `.pf-c-alert` | Applies warning status styling. |
| `.pf-m-info` | `.pf-c-alert` | Applies info status styling. |
| `.pf-m-inline` | `.pf-c-alert` | Applies inline styling. |
| `.pf-m-plain` | `.pf-c-alert.pf-m-inline` | Applies plain styling to an inline alert. |
| `.pf-m-expandable` | `.pf-c-alert` | Applies expandable styles to the alert. |
| `.pf-m-expanded` | `.pf-c-alert.pf-m-expandable` | Applies expanded styles to an expandable alert. |
| `.pf-m-truncate` | `.pf-c-alert__title` | Modifies the title to display a single line and truncate any overflow text with ellipses. **Note:** you can specify the max number of lines to show by setting the `--pf-c-alert__title--max-lines` (the default value is `1`). |
