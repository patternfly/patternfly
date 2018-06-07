## Overview

Font Awesome 5 icons are recommended for use in PatternFly-Next. By default, a hand-picked set of the solid icons are included.

Always add the appropriate prefix and icon name to each icon. Never use the class `.fas` or an icon name (i.e. `fa-balance-scale`) on its own.

## Accessibility

By default, Font Awesome provides accessibility information: https://fontawesome.com/how-to-use/accessibility#webfont-accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-hidden` | `<i>` | Applied to decorative icons. |
| `<span class="sr-only">` | After the `<i>` | Provides accessibility to assistive technologies. |
| `title=""` | `<i>` | Provides a tooltip for sighted mouse users. |


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-d-icon` | `<span>` or `<div>` | Initiates an icon block. |
| `.pf-c-icon` | `<i>` | Initiates a PatternFly icon style. |
| `.fas` | `<i>` |  Prefixes a Font Awesome icon with the solid weight. |
| `.fa-balance-scale` | `<i>` |  Add the icon name to the element. |
| `.pf-c-icon .pf-m-success` | `<i class="fas fa-check-circle">` | <i class="fas fa-check-circle pf-c-icon pf-m-success"></i> Everything is OK/Ready/Finished
| `.pf-c-icon .pf-m-warning` | `<i class="fas fa-exclamation-triangle">` | <i class="fas fa-exclamation-triangle pf-c-icon pf-m-warning"></i> Alters icon to yellow to signal a warning.
| `.pf-c-icon .pf-m-error` | `<i class="fas fa-times-circle">` | <i class="fas fa-times-circle pf-c-icon pf-m-error"></i> Indicates that there is a major or critical error present.
