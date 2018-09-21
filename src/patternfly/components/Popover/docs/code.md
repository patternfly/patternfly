## Overview

A popover is used to provide contextual information for another component on click.  The popover itself is made up of two main elements: arrow and content. The content element follows the pattern of the popover box component, with a close icon in the top right corner, as well as a header and body.  One of the directional modifiers (`.pf-m-left`, `.pf-m-top`, etc.) is required on the popover component

## Accessibility

| Attribute | Applies to | Outcome |
| -- | -- | -- |
| `role="dialog"` | `.pf-c-popover` | Identifies the element that serves as the popover container. **Required**|
| `aria-labelledby="[id of .pf-c-popover__header-title]"` | `.pf-c-button` | Gives the element that triggers the popover an accessible name by referring to popover's title. **Required when .pf-c-popover__header-title is present** |
| `aria-label="[title of popover]"` | `.pf-c-button` | Gives the element that triggers the popover an accessible name. **Required when .pf-c-popover__header-title is _not_ present** |
| `aria-describedby="[id of .pf-c-popover__body]"` | `.pf-c-button` | Gives the element that triggers popover an accessible description by referring to the popover's body text, describing the primary message or purpose of the dialog. Not used if there is no static text that describes the popover. |
| `aria-popover="true"` | `.pf-c-popover` | Tells assistive technologies that the windows underneath the current popover are not available for interaction. **Required**|
| `aria-label="Close"` | `.pf-c-popover__close .pf-c-button` | Provides an accessible name for the close button as it uses an icon instead of text. **Required**|


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-popover` | `<div>` |  Creates a popover. Always use it with a modifier class. |
| `.pf-c-popover__arrow` | `<div>` |  Creates an arrow pointing towards the element the popover describes. ** Required.** |
| `.pf-c-popover__content` | `<div>` |  Creates the body of the popover. ** Required.** |
| `.pf-c-popover__close` | `<div>` |  Contains and positions the close icon in the top-right corner of the popover. ** Required.** |
| `.pf-c-popover__header` | `<header>` |  The header text area of the popover. |
| `.pf-c-popover__header-title` | `<h1>`,`<h2>`,`<h3>`,`<h4>`,`<h5>`,`<h6>` |  The actual popover title. |
| `.pf-c-popover__body` | `<div>` |  The popover's body text. ** Required.** |
| `.pf-m-left` | `.pf-c-popover` | Puts arrow to the left of the popover's content. |
| `.pf-m-right` | `.pf-c-popover` | Puts arrow to the right of the popover's content. |
| `.pf-m-top` | `.pf-c-popover` | Puts arrow on top of the popover's content. |
| `.pf-m-bottom` | `.pf-c-popover` | Puts arrow on the bottom of the popover's content. |
