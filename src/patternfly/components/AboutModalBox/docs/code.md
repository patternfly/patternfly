## Overview

One-off layout for about modal.

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `role="dialog"` | `pf-c-about-modal-box` | Identifies the element that serves as the dialog container. |
| `aria-labelledby="aboutModalTitle"` | `pf-c-about-modal-box` | Gives the dialog an accessible name by referring to the element that provides the dialog title. |
| `aria-modal="true"` | `pf-c-about-modal-box` | Tells assistive technologies that the windows underneath the current dialog are not available for interaction (inert). |
| `alt="[alt text]"` | `<img>` | The required alt attribute specifies alternate text for an image, if the image cannot be displayed.
| `id="aboutModalTitle"` | `<h1>` | Identifies the element (or elements) that labels the current element. |

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-about-modal-box` | `<div>` |  Initiates an about modal box. **Required** |
| `.pf-c-about-modal-box__hero` | `<div>` |  Initiates a hero cell. **Required** |
| `.pf-c-about-modal-box__brand` | `<div>` |  Initiates a brand cell. **Required** |
| `.pf-c-about-modal-box__brand-image` | `<img>` |  Initiates a brand image. **Required** |
| `.pf-c-about-modal-box__closer` | `<div>` |  Initiates a modal box close cell. **Required** |
| `.pf-c-about-modal-box__strapline` | `<div>` |  Initiates a strapline cell. **Required** |
| `.pf-c-about-modal-box__header` | `<div>` |  Initiates a header cell. **Required** |
| `.pf-c-about-modal-box__strapline` | `<div>` |  Initiates a strapline cell. **Required** |
| `.pf-c-about-modal-box__logo` | `<div>` |  Initiates a logo cell. **Required** |
| `.pf-c-about-modal-box__logo-image` | `<div>` |  Initiates a logo image. **Required** |
| `.pf-c-about-modal-box__content` | `<div>` |  Initiates a content image. **Required** |
