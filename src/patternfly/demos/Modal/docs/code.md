## Overview

This demo implements a basic modal, including the backdrop. Both the normal and large variations of the modal are shown.

## Accessibility

| Attribute | Applies to | Outcome |
| -- | -- | -- |
| `role="dialog"` | `pf-c-modal-box` | Identifies the element that serves as the modal container. **Required**|
| `aria-labeledby="TitleID"` | `pf-c-modal-box` | Gives the modal an accessible name by referring to the element that provides the dialog title. **Required** |
| `aria-describedby="ContentID"` | `pf-c-modal-box` | Gives the modal an accessible description by referring to the modal content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the modal. |
| `aria-modal="true"` | `pf-c-modal-box` | Tells assistive technologies that the windows underneath the current modal are not available for interaction. **Required**|

## Usage

| Class | Applies to | Outcome |
| -- | -- | -- |
| `pf-d-modal` | `<div>` |  Initiates a modal |
