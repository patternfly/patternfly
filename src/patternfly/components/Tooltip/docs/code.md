## Overview

A tooltip is used to provide contextual information for another component on hover.  The tooltip itself is made up of two elements: arrow and content. One of the directional modifiers (`.pf-m-left`, `.pf-m-top`, etc.) is required on the tooltip component

## TODO: Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `role` or `aria` | `pf-c-tooltip` |  accessibility notes. |


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
