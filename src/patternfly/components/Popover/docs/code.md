## Overview

A popover is used to provide contextual information for another component on click.  The popover itself is made up of two main elements: arrow and content. The content element follows the pattern of the popover box component, with a close icon in the top right corner, as well as a header and body.  One of the directional modifiers (`.pf-m-left`, `.pf-m-top`, etc.) is required on the popover component

## Accessibility

| Attribute | Applies to | Outcome |
| -- | -- | -- |
| `role="dialog"` | `.pf-c-popover` | Identifies the element that serves as the popover container. **Required**|
| `aria-labelledby="[id value of .pf-c-title]"` | `.pf-c-popover` | Gives the popover an accessible name by referring to the element that provides the dialog title. **Required when .pf-c-title is present** |
| `aria-label="[title of popover]"` | `.pf-c-popover` | Gives the popover an accessible name. **Required when .pf-c-title is _not_ present** |
| `aria-describedby="[id value of applicable content]"` | `.pf-c-popover` | Gives the popover an accessible description by referring to the popover content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the popover. |
| `aria-modal="true"` | `.pf-c-popover` | Tells assistive technologies that the windows underneath the current popover are not available for interaction. **Required**|
| `aria-label="Close"` | `.pf-c-button` | Provides an accessible name for the close button as it uses an icon instead of text. **Required**|
| `aria-hidden="true"` | Parent element containing the page contents when the popover is open. | Hides main contents of the page from screen readers. The element with `.pf-c-popover` must not be a descendent of the element with `aria-hidden="true"`For more info see <a href="/accessibility-guide#trapping-focus">trapping focus</a>. **Required** |


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-popover` | `<div>` |  Creates a popover. Always use it with a modifier class that positions the popover relative to the element that triggered it. **Required** |
| `.pf-c-popover__arrow` | `<div>` |  Creates an arrow pointing towards the element the popover describes. **Required** |
| `.pf-c-popover__content` | `<div>` |  Creates the content area of the popover. **Required** |
| `.pf-c-button` | `<button>` |  Positions the close icon in the top-right corner of the popover. **Required** |
| `.pf-c-title` | `<h1>`,`<h2>`,`<h3>`,`<h4>`,`<h5>`,`<h6>` |  Initiates a title. Always use it with a modifier class. See <a href="/components/Title/examples/">Title component</a> for more info.|
| `.pf-c-popover__body` | `<div>` |  The popover's body text. **Required** |
| `.pf-c-popover__footer` | `<footer>` | Initiates a popover footer. |
| `.pf-m-left` | `.pf-c-popover` | Positions the popover to the left of the element. |
| `.pf-m-right` | `.pf-c-popover` | Positions the popover to the right of the element. |
| `.pf-m-top` | `.pf-c-popover` | Positions the popover to the top of the element. |
| `.pf-m-bottom` | `.pf-c-popover` | Positions the popover to the bottom of the element. |
