## Overview

An alert group that includes the `.pf-m-toast` modifier becomes a Toast Alert Group with unique positioning in the top-right corner of the window. `.pf-c-alert-group` is required to create a Toast Alert Group.

Every alert within a Toast Alert group must include a close button to dismiss the alert.

### Accessibility

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-u-sr-only` | `.pf-c-alert__title <span>` | Content that is visually hidden but accessible to assistive technologies. This should state the type of notification and refer to itself as a notification rather than an alert.  ** Required**|

### Modifiers

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-m-toast`| `.pf-c-alert-group` | Applies toast notification styling to an alert group. |
