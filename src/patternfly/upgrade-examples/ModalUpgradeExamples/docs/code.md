## Overview

These examples highlight the differences in implementing Modals in Patternfly 4 compared with Patternfly 3.
When converting PatternFly 3 components to PatternFly 4 components, you must also take into consideration the layouts and sizings that PatternFly 3 utilized from Bootstrap 3.

## Usage

| PF3 Class | Applied To | PF4 Class | Applied To | Outcome |
| -- | -- | -- | -- | -- |
| `.modal-dialog` | `<div>` | -- | -- | Initiaties a modal dialog. |
| `.modal-content` | `<div>` | `.pf-c-modal-box` | `<div>` | Initiaties a modal box. Required. |
| `.modal-header` | `<div>`  | `.pf-c-modal-box__header` | `<header>` | Initiaties a modal box header. A modal box header is required if there is no modal box body. | 
| `.modal-title` |  `<h4>` | `.pf-c-modal-box__header-title` | `<h1>, <h2>, <h3>, <h4>, <h5>, <h6>` | Initiates a modal box header title. | 
| `.modal-body` | `<div>` | `.pf-c-modal-box__body` | `<div>` | Initiates a modal box body. A modal box body is required if there is no modal box header. |
| `.modal-footer` | `<div>` | `.pf-c-modal-box__footer` | `<footer>` | Initiates a modal box footer. |
| `.close` | `<button>` | `.pf-c-modal-box__close` | `<div>` | Initiates a modal box close button container. The close container can be nested as the first item in the modal box. Required |


| Main Differences in pf3 | Main differences in pf4|
| -- | -- |
| Modals have a modal-dialog class. |    |
