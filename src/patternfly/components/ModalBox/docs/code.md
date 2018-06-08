## Overview

A modal box is a generic rectangular container that can be used to build modals.  A modal box can have three optional sections: header, body, and footer. 

## Accessibility

| Attribute | Applies to | Outcome |
| -- | -- | -- |
| `role="dialog"` | `.pf-c-modal-box` | Identifies the element that serves as the modal container. **Required**|
| `aria-labeledby="TitleID"` | `.pf-c-modal-box` | Gives the modal an accessible name by referring to the element that provides the dialog title. **Required** |
| `aria-describedby="ContentID"` | `.pf-c-modal-box` | Gives the modal an accessible description by referring to the modal content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the modal. |
| `aria-modal="true"` | `.pf-c-modal-box` | Tells assistive technologies that the windows underneath the current modal are not available for interaction. **Required**|

## Usage

| Class                | Applied     | Outcome                                                                                                                                                                              |
| -------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `.pf-c-modal-box`          | `<div>`     | Creates a box containing content                                                                                                                                                     |
| `.pf-c-modal-box__header`          | `<div>`     | Creates the header of a box.                                                                                                                                                     |
| `.pf-c-modal-box__body`          | `<div>`     | Creates the body of a box.  ** Required.**                                                                                                                                                   |
| `.pf-c-modal-box__footer`          | `<div>`     | Creates the footer of a box.                                                                                                                                                     |
| `.pf-m-lg`          | `.pf-c-modal-box`     | Creates a wide version of the modal.                                                                                                                                                     |
