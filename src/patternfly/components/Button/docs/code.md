## Overview

Always add a modifier class to add color to the button.

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `disabled="disabled"` | `.pf-c-button` | Indicates the disabled state of the `button` to assistive technologies. |
| `aria-pressed="true or false"` | `.pf-c-button` | Indicates that the button is a toggle. When set to "true", `pf-m-active` should also be set so that the button displays in an active state. |
| `aria-label="[button label text]"` | `.pf-m-action` | Provides an accessible name for the button when an icon is used instead of text. |


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-button` | `<button>` |  Initiates a button. Always use it with a modifier class. |
| `.pf-m-primary` | `.pf-c-button` | Modifies for primary styles. |
| `.pf-m-secondary` | `.pf-c-button` | Modifies for secondary styles. |
| `.pf-m-tertiary` | `.pf-c-button` | Modifies for tertiary styles. |
| `.pf-m-danger` | `.pf-c-button` | Modifies for danger styles. |
| `.pf-m-link` | `.pf-c-button` | Modifies for link styles. This button has no background or border and is styled as a link. This button would commonly appear in a form and may include an icon. |
| `.pf-m-action` | `.pf-c-button` | Modifies for icon styles. This button is used for action icons such as close, expand, kebab, etc. |
| `.pf-m-block` | `.pf-c-button` | Creates a block level button. |
| `.pf-m-hover` | `.pf-c-button` | Forces display of the hover state of the button. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:hover` pseudo-class.  |
| `.pf-m-active` | `.pf-c-button` | Forces display of the active state of the button. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:active` pseudo-class.  |
| `.pf-m-focus` | `.pf-c-button` | Forces display of the focus state of the button. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:focus` pseudo-class.  |
