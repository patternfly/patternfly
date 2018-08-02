## Overview

A tooltip is used to provide contextual information for another component on hover.  The tooltip itself is made up of two elements: arrow and content. One of the directional modifiers (`.pf-m-left`, `.pf-m-top`, etc.) is required on the tooltip component

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-describedby="[id value of applicable content]"` | `.pf-c-tooltip` | Gives the tooltip an accessible description by referring to the tooltip content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the popover. |


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-tooltip` | `<div>` |  Creates a tooltip. |
| `.pf-c-tooltip__arrow` | `.pf-c-tooltip` |  Creates an arrow pointing towards the element the tooltip describes. ** Required.** |
| `.pf-c-tooltip__content` | `.pf-c-tooltip` |  Creates the body of the tooltip. ** Required.** |
| `.pf-m-left` | `.pf-c-tooltip` | Puts arrow to the left of the tooltip's content. |
| `.pf-m-right` | `.pf-c-tooltip` | Puts arrow to the right of the tooltip's content. |
| `.pf-m-top` | `.pf-c-tooltip` | Puts arrow on top of the tooltip's content. |
| `.pf-m-bottom` | `.pf-c-tooltip` | Puts arrow on the bottom of the tooltip's content. |
