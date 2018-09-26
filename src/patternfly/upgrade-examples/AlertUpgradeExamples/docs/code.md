## Overview

When converting PatternFly 3 components to PatternFly 4 components, you must also take into consideration the layouts and sizings that PatternFly 3 utilized from Bootstrap 3.

## Usage

| PF3 Class | Applied To | PF4 Class | Applied To | Outcome |
| -- | -- | -- | -- | -- |
| `.alert` | `<div>` | `.pf-c-alert` | `<div>` | Applies default alert styling. Always use with a modifier class. Required. |
| `.alert-success` | `<div>` | `.pf-m-success` | `.pf-c-alert` | Applies success styling.|
| `.alert-danger` | `<div>` | `.pf-m-danger` | `.pf-c-alert` | Applies danger styling. |
| `.alert-warning` | `<div>` | `.pf-m-warning` | `.pf-c-alert` | Applies warning styling. |
| `.alert-info` | `<div>` | `.pf-m-info` | `.pf-c-alert` | Applies info styling.|
| `.pficon` | `<div>` | `.pf-c-alert__icon` | `<div>`| Defines the alert icon. Required. |
| `--` | `--` | `.pf-c-alert__title` | `<div>` | Defines the alert title. Required. |
| `--` | `--` | `.pf-c-alert__body` | `<div>` | Defines the alert body. Required. |
| `--` | `--` | `.pf-c-alert__action` | `<div>` | Defines the alert action. Required. |