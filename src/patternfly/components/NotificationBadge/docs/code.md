## Overview

Always add a modifier class. Never use the class `.pf-c-notification-badge` on its own.

## Accessibility

Be sure that the component associated with this indicator handles screenreader text indicating read or unread notifications.


## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-notification-badge` | `<div>` |  Initiates a notification badge. **Always use it with a modifier class.** |
| `.pf-m-read` | `.pf-c-notification-badge` |  Applies read notification badge styling. |
| `.pf-m-unread` | `.pf-c-notification-badge` |  Applies unread notification badge styling. |

