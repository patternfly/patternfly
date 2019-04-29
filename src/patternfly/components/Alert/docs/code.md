## Overview

Always add a modifier class: `.pf-m-success`, `.pf-m-danger`, `.pf-m-warning`, or `.pf-m-info`. Do not use `.pf-c-alert` on its own.

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
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
