## Overview

Always add a modifier class to add color to the button.

## Accessibility

| Attribute | Applied | Outcome |
| -- | -- | -- |
| `disabled="disabled"` | `.pf-c-button` | Indicates the disabled state of the element to assistive technologies |
| `aria-pressed="true or false"` | `.pf-c-button` | If you are using a button as a toggle, you can still force the same active appearance with `pf-is-active` (and include the `aria-pressed=""`) should you need to replicate the state programmatically. |

## Usage

| Class | Applied | Outcomete |
| -- | -- | -- |
| `.pf-c-button` | `<button>` |  Initiates a button. Always use it with a modifier class. |
| `.pf-is-primary` | `.pf-c-button` | Modifies for primary styles |
| `.pf-is-secondary` | `.pf-c-button` | Modifies for secondary styles |
| `.pf-is-secondary-alt` | `.pf-c-button` | Modifies for alternate secondary styles |
| `.pf-is-tertiary` | `.pf-c-button` | Modifies for tertiary styles |
| `.pf-is-danger` | `.pf-c-button` | Modifies for danger styles |
| `.pf-is-block` | `.pf-c-button` | Creates a block level button |
| `.pf-is-hover` | `.pf-c-button` | Forces display of the hover state of the button. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:hover` pseudo-class.  |
| `.pf-is-active` | `.pf-c-button` | Forces display of the active state of the button. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:active` pseudo-class.  |
| `.pf-is-focus` | `.pf-c-button` | Forces display of the focus state of the button. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:focus` pseudo-class.  |
