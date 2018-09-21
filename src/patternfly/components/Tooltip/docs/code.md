## Overview

A tooltip is used to provide contextual information for another component on hover.  The tooltip itself is made up of two elements: arrow and content. One of the directional modifiers (`.pf-m-left`, `.pf-m-top`, etc.) is required on the tooltip component.

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `role="tooltip"` | `.pf-c-tooltip` | Adds a tooltip role to the tooltip component. **Required**|
| `aria-describedby="[id of .pf-c-tooltip__content]"` | `*` | Gives the element that triggers the tooltip an accessible description by referring to the `id` of the `.pf-c-tooltip__content` element in the tooltip, describing the primary message or purpose of the element. Not used if there is no static text that describes the element. |


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-tooltip` | `<div>` |  Creates a tooltip. Always use with a modifier class. **Required**|
| `.pf-c-tooltip__arrow` | `<div>` |  Creates an arrow pointing towards the element the tooltip describes. **Required** |
| `.pf-c-tooltip__content` | `<div>` |  Creates the body of the tooltip. **Required** |
| `.pf-m-left` | `.pf-c-tooltip` | Positions the tooltip to the left of the element. |
| `.pf-m-right` | `.pf-c-tooltip` | Positions the tooltip to the right of the element. |
| `.pf-m-top` | `.pf-c-tooltip` | Positions the tooltip to the top of the element. |
| `.pf-m-bottom` | `.pf-c-tooltip` | Positions the tooltip to the bottom of the element. |
