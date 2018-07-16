## Overview

A tooltip is used to provide contextual information for another component on hover.  The tooltip itself is made up of two elements: arrow and content.  The tooltip (and parent) can be wrapped in the overlay component for positioning based off of the parent.  For libraries that absolutely position off of the body element in the DOM, just the tooltip component can be used.  One of the directional modifiers (`.pf-m-left`, `.pf-m-top`, etc.) is required on the tooltip component (and on the overlay component's container element, if it is being used).

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
| `.pf-m-left` | `.pf-c-tooltip` and `.pf-c-overlay` | (Default) - Puts arrow to the left of the tooltip's content. |
| `.pf-m-right` | `.pf-c-tooltip` and `.pf-c-overlay` | Puts arrow to the right of the tooltip's content. |
| `.pf-m-top` | `.pf-c-tooltip` and `.pf-c-overlay` | Puts arrow on top of the tooltip's content. |
| `.pf-m-bottom` | `.pf-c-tooltip` and `.pf-c-overlay` | Puts arrow on the bottom of the tooltip's content. |
