---
title: Alert
section: components
cssPrefix: pf-c-alert
---

```hbs title=Alert-types
{{#> alert alert--attribute='aria-label="Default alert"'}}
  {{#> alert-icon alert-icon--type="bell"}}
  {{/alert-icon}}
  {{#> alert-title}}
    {{#> screen-reader}}Default alert:{{/screen-reader}}
    Default alert title
  {{/alert-title}}
{{/alert}}
<br />
{{#> alert alert--modifier="pf-m-info" alert--attribute='aria-label="Information alert"'}}
  {{#> alert-icon alert-icon--type="info-circle"}}
  {{/alert-icon}}
  {{#> alert-title}}
    {{#> screen-reader}}Info alert:{{/screen-reader}}
    Info alert title
  {{/alert-title}}
{{/alert}}
<br />
{{#> alert alert--modifier="pf-m-success" alert--attribute='aria-label="Success alert"'}}
  {{#> alert-icon alert-icon--type="check-circle"}}
  {{/alert-icon}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
    Success alert title
  {{/alert-title}}
{{/alert}}
<br />
{{#> alert alert--modifier="pf-m-warning" alert--attribute='aria-label="Warning alert"'}}
  {{#> alert-icon alert-icon--type="exclamation-triangle"}}
  {{/alert-icon}}
  {{#> alert-title}}
    {{#> screen-reader}}Warning alert:{{/screen-reader}}
    Warning alert title
  {{/alert-title}}
{{/alert}}
<br />
{{#> alert alert--modifier="pf-m-danger" alert--attribute='aria-label="Danger alert"'}}
  {{#> alert-icon alert-icon--type="exclamation-circle"}}
  {{/alert-icon}}
  {{#> alert-title}}
    {{#> screen-reader}}Danger alert:{{/screen-reader}}
    Danger alert title
  {{/alert-title}}
{{/alert}}
```

```hbs title=Alert-variations
{{#> alert alert--modifier="pf-m-success" alert--attribute='aria-label="Success alert"'}}
  {{#> alert-icon alert-icon--type="check-circle"}}
  {{/alert-icon}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
    Success alert title
  {{/alert-title}}
  {{#> alert-description}}
    Success alert description. <a href="#">This is a link.</a>
  {{/alert-description}}
  {{#> alert-action}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close success alert: Success alert title"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/alert-action}}
{{/alert}}
<br />
{{#> alert alert--modifier="pf-m-success" alert--attribute='aria-label="Success alert"'}}
  {{#> alert-icon alert-icon--type="check-circle"}}
  {{/alert-icon}}
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
<br />
{{#> alert alert--modifier="pf-m-success" alert--attribute='aria-label="Success alert"'}}
  {{#> alert-icon alert-icon--type="check-circle"}}
  {{/alert-icon}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
      Success alert title
  {{/alert-title}}
  {{#> alert-action}}
    {{#> button button--modifier="pf-m-link"}}
      Action button
    {{/button}}
  {{/alert-action}}
{{/alert}}
<br />
{{#> alert alert--modifier="pf-m-success" alert--attribute='aria-label="Success alert"'}}
  {{#> alert-icon alert-icon--type="check-circle"}}
  {{/alert-icon}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
      Success alert title
  {{/alert-title}}
{{/alert}}
```

```hbs title=Inline-alert-types
{{#> alert alert--attribute='aria-label="Default alert"'}}
  {{#> alert-icon alert-icon--type="bell"}}
  {{/alert-icon}}
  {{#> alert-title}}
    {{#> screen-reader}}Default alert:{{/screen-reader}}
    Default alert title
  {{/alert-title}}
{{/alert}}
<br />
{{#> alert alert--modifier="pf-m-info" alert--attribute='aria-label="Information alert"'}}
  {{#> alert-icon alert-icon--type="info-circle"}}
  {{/alert-icon}}
  {{#> alert-title}}
    {{#> screen-reader}}Info alert:{{/screen-reader}}
    Info alert title
  {{/alert-title}}
{{/alert}}
<br />
{{#> alert alert--modifier="pf-m-success" alert--attribute='aria-label="Success alert"'}}
  {{#> alert-icon alert-icon--type="check-circle"}}
  {{/alert-icon}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
    Success alert title
  {{/alert-title}}
{{/alert}}
<br />
{{#> alert alert--modifier="pf-m-warning" alert--attribute='aria-label="Warning alert"'}}
  {{#> alert-icon alert-icon--type="exclamation-triangle"}}
  {{/alert-icon}}
  {{#> alert-title}}
    {{#> screen-reader}}Warning alert:{{/screen-reader}}
    Warning alert title
  {{/alert-title}}
{{/alert}}
<br />
{{#> alert alert--modifier="pf-m-danger" alert--attribute='aria-label="Danger alert"'}}
  {{#> alert-icon alert-icon--type="exclamation-circle"}}
  {{/alert-icon}}
  {{#> alert-title}}
    {{#> screen-reader}}Danger alert:{{/screen-reader}}
    Danger alert title
  {{/alert-title}}
{{/alert}}
```

```hbs title="Inline-alert-variations"
{{#> alert alert--modifier="pf-m-success" alert--attribute='aria-label="Success alert"'}}
  {{#> alert-icon alert-icon--type="check-circle"}}
  {{/alert-icon}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
    Success alert title
  {{/alert-title}}
  {{#> alert-description}}
    Success alert description. <a href="#">This is a link.</a>
  {{/alert-description}}
  {{#> alert-action}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close success alert: Success alert title"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/alert-action}}
{{/alert}}
<br />
{{#> alert alert--modifier="pf-m-success" alert--attribute='aria-label="Success alert"'}}
  {{#> alert-icon alert-icon--type="check-circle"}}
  {{/alert-icon}}
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
<br />
{{#> alert alert--modifier="pf-m-success" alert--attribute='aria-label="Success alert"'}}
  {{#> alert-icon alert-icon--type="check-circle"}}
  {{/alert-icon}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
      Success alert title
  {{/alert-title}}
  {{#> alert-action}}
    {{#> button button--modifier="pf-m-link"}}
      Action button
    {{/button}}
  {{/alert-action}}
{{/alert}}
<br />
{{#> alert alert--modifier="pf-m-success" alert--attribute='aria-label="Success alert"'}}
  {{#> alert-icon alert-icon--type="check-circle"}}
  {{/alert-icon}}
  {{#> alert-title}}
    {{#> screen-reader}}Success alert:{{/screen-reader}}
      Success alert title
  {{/alert-title}}
{{/alert}}
```
# Documentation
## Overview

Add a modifier class to the default alert to change the color: `.pf-m-success`, `.pf-m-danger`, `.pf-m-warning`, or `.pf-m-info`.

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="Default alert"` | `.pf-c-alert` |  Indicates the default alert. |
| `aria-label="Success alert"` | `.pf-c-alert` |  Indicates the success alert. |
| `aria-label="Danger alert"` | `.pf-c-alert` |  Indicates the danger alert. |
| `aria-label="Warning alert"` | `.pf-c-alert` |  Indicates the warning alert. |
| `aria-label="Information alert"` | `.pf-c-alert` |  Indicates the information alert. |
| `aria-label="Close success alert: Success alert title"` | `.pf-c-button.pf-m-plain` | Indicates the close button. Please provide descriptive text to ensure assistive technologies clearly state which alert is being closed.|
| `aria-hidden="true"` | `.pf-c-alert__icon <i>` |  Hides icon for assistive technologies. ** Required **|

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-screen-reader` | `.pf-c-alert__title <span>` | Content that is visually hidden but accessible to assistive technologies. This should state the type of alert.  ** Required**|

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-alert` | `<div>` |  Applies default alert styling. Always use with a modifier class. ** Required**|
| `.pf-c-alert__icon` | `<div>` |  	Defines the alert icon. ** Required **|
| `.pf-c-alert__title` | `<h1>, <h2>, <h3>, <h4>, <h5>, <h6>` |  Defines the alert title. ** Required **|
| `.pf-c-alert__description` | `<div>` |  Defines the alert description area. |
| `.pf-c-alert__action` | `<div>` |  Defines the action button wrapper. Should contain `.pf-c-button.pf-m-plain` for close action or `.pf-c-button.pf-m-link` for link text. It should only include one action. |
| `.pf-m-success` | `.pf-c-alert` |  Applies success styling. |
| `.pf-m-danger` | `.pf-c-alert` |  Applies danger styling. |
| `.pf-m-warning` | `.pf-c-alert` |  Applies warning styling. |
| `.pf-m-info` | `.pf-c-alert` |  Applies info styling. |
| `.pf-m-inline` | `.pf-c-alert` |  Applies inline styling. |
