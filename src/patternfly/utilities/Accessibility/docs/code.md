## Overview

Breakpoint is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. **Example .pf-u-sr-only-on-lg**

<!-- ## Overview

Only if needed write a short description with implementation notes. Design and interaction notes are already written on the design specs, don't repeat information.

For example for buttons: Always add a modifier class to add color to the button. Never use the class `.btn` on its own.
 -->
<!-- ## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `role` or `aria` | `pf-u-accessibility` |  accessibility notes. | -->


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-u-sr-only{-on-[breakpoint]}` | `*` |  Visually hides element, but leaves accessible to assistive technologies |
| `.pf-u-visible{-on-[breakpoint]}` | `*` |  Unsets `.pf-u-sr-only` |
