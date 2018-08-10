## Overview

A modal box is a generic rectangular container that can be used to build modals. A modal box can have three sections: header, body, and footer. Header or body is required. If no `pf-c-modal-box__header-title` is used, `aria-label="[title of modal]"` must be provided for `.pf-c-modal-box`.

## Accessibility

| Attribute | Applies to | Outcome |
| -- | -- | -- |
| `role="dialog"` | `.pf-c-modal-box` | Identifies the element that serves as the modal container. **Required**|
| `aria-labeledby="[id value of .pf-c-modal-box__header-title]"` | `.pf-c-modal-box` | Gives the modal an accessible name by referring to the element that provides the dialog title. **Required when .pf-c-modal-box__header-title is present** |
| `aria-label="[title of modal]"` | `.pf-c-modal-box` | Gives the modal an accessible name. **Required when .pf-c-modal-box__header-title is _not_ present** |
| `aria-describedby="[id value of applicable content]"` | `.pf-c-modal-box` | Gives the modal an accessible description by referring to the modal content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the modal. |
| `aria-modal="true"` | `.pf-c-modal-box` | Tells assistive technologies that the windows underneath the current modal are not available for interaction. **Required**|
| `aria-label="Close"` | `.pf-c-modal-box__close .pf-c-button` | Provides an accessible name for the close button as it uses an icon instead of text. **Required**|

## Usage

| Class                | Applied     | Outcome                                                                                                                                                                              |
| -------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `.pf-c-modal-box` |               `<div>` |           Initiates a modal box. **Required** |
| `.pf-c-modal-box__header` |       `<header>` |           Initiates a modal box header. A modal box header is **required** if there is no modal box body. |
| `.pf-c-modal-box__header-title` | `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` |           Initiates a modal box header title. |
| `.pf-c-modal-box__body` |         `<div>` |           Initiates a modal box body. A modal box body is **required** if there is no modal box header. |
| `.pf-c-modal-box__footer` |       `<footer>` |           Initiates a modal box footer. |
| `.pf-c-modal-box__close` |        `<button>` |        Initiates a modal box close button container. The close container can be nested as the first item in the header or body. **Required** |
| `.pf-m-lg` |                      `.pf-c-modal-box` | Modifies for a modal box width. |
