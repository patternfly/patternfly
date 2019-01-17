## Overview

Always add a modifier class. Do not use `.pf-c-alert` on its own.

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `role="alert"` | `.pf-c-alert__body` |  Communicates contents of the alert message to the user. This should only be used on dynamically created alerts, such as toast notifications or inline notifications that aren't present during page load (for example, an alert at the top of a form when there are errors in the form). |
| `aria-label="Success Notification"` | `.pf-c-alert` |  Indicates the Success Notification. |
| `aria-label="Danger Notification"` | `.pf-c-alert` |  Indicates the Danger Notification. |
| `aria-label="Warning Notification"` | `.pf-c-alert` |  Indicates the Warning Notification. |
| `aria-label="Information Notification"` | `.pf-c-alert` |  Indicates the Information Notification. |
| `aria-hidden="true"` | `.pf-c-alert__icon` |  Hides icon for assistive technologies. ** Required **|

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-screen-reader` | `.pf-c-alert__title <span>` | Content that is visually hidden but accessible to assistive technologies. This should state the type of alert/notification.  ** Required**|

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-alert` | `<div>` |  Applies default alert styling. Always use with a modifier class. ** Required**|
| `.pf-c-alert__icon` | `<div>` |  	Defines the alert icon. ** Required **|
| `.pf-c-alert__body` | `<div>` |  Defines the alert body.  ** Required **|
| `.pf-c-alert__title` | `<h1>, <h2>, <h3>, <h4>, <h5>, <h6>` |  Defines the alert title. |
| `.pf-c-alert__action` | `<div>` |  Define the action button wrapper. |
| `.pf-m-success` | `.pf-c-alert` |  Applies success styling. |
| `.pf-m-danger` | `.pf-c-alert` |  Applies danger styling. |
| `.pf-m-warning` | `.pf-c-alert` |  Applies warning styling. |
| `.pf-m-info` | `.pf-c-alert` |  Applies info styling. |
