## Overview

Only if needed write a short description with implementation notes. Design and interaction notes are already written on the design specs, don't repeat information.

For example for buttons: Always add a modifier class to add color to the button. Never use the class `.btn` on its own.

## Accessibility

| Attribute | Applies to | Outcome |
| -- | -- | -- |
| `role="dialog"` | `.pf-c-about-modal-box` | Identifies the element that serves as the modal container. **Required**|
| `aria-labeledby="[id value of element describing modal]"` | `.pf-c-about-modal-box` | Gives the modal an accessible name by referring to the element that provides the dialog title. **Required when adquate titling element is present** |
| `aria-label="[title of modal]"` | `.pf-c-about-modal-box` | Gives the modal an accessible name. **Required when adequate titling element is _not_ present** |
| `aria-describedby="[id value of applicable content]"` | `.pf-c-about-modal-box` | Gives the modal an accessible description by referring to the modal content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the modal. |
| `aria-modal="true"` | `.pf-c-modal-box` | Tells assistive technologies that the windows underneath the current modal are not available for interaction. **Required**|
| `aria-label="Close Dialog"` | `.pf-c-modal-box__close .pf-c-button` | Provides an accessible name for the close button as it uses an icon instead of text. **Required**|


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-about-modal-box` |         `<div>`, `<article>` |           Initiates a modal box. **Required** |
| `.pf-c-about-modal-box__brand` |         `<div>` |           Initiates a modal box brand cell. **Required** |
| `.pf-c-about-modal-box__close` |         `<div>` |           Initiates a modal box close cell. **Required** |
| `.pf-c-about-modal-box__header` |         `<header>` |           Initiates a modal box header cell. **Required** |
| `.pf-c-about-modal-box__hero` |         `<div>` |           Initiates a modal box hero cell. **Required** |
| `.pf-c-about-modal-box__logo` |         `<div>` |           Initiates a modal box logo cell. **Required** |
| `.pf-c-about-modal-box__logo-image` |         `<div>` |           Initiates a modal box logo image wrapper. **Required** |
| `.pf-c-about-modal-box__content` |         `<div>` |           Initiates a modal box content cell. **Required** |
