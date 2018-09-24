## Overview

When converting PatternFly 3 components to PatternFly 4 components, you must also take into consideration the layouts and sizings that PatternFly 3 utilized from Bootstrap 3.

## Usage

| PF3 Class | Applied To | PF4 Class | Applied To | Outcome |
| -- | -- | -- | -- | -- |
| `alert` | `<div>` | `pf-c-alert` | `<div>` | Applies default alert styling. Always use with a modifier class. Required |
| `alert-success` | `<div>` | `pf-m-success` | `.pf-c-alert` | Applies success styling.|
| `alert-danger` | `<div>` | `pf-m-danger` | `.pf-c-alert` | Applies danger styling. |
| `alert-warning` | `<div>` | `pf-m-warning` | `.pf-c-alert` | Applies warning styling. |
| `alert-info` | `<div>` | `pf-m-info` | `.pf-c-alert` | Applies info styling.|
| `<div class="pficon pficon-ok">` |  | `<div class="pf-c-alert__icon"> <i class="fas fa-check-circle">` |
| `<div class="pficon pficon-warning-triangle-o">` |  | `<div class="pf-c-alert__icon"> <i class="fas fa-exclamation-circle">` |
| `<div class="pficon pficon-error-circle-o">` |  | `<div class="pf-c-alert__icon"> <i class="fas fa-exclamation-triangle">` |
| `<div class="pficon pficon-info">` |  | `<div class="pf-c-alert__icon"> <i class="fas fa-info-circle">` |
| `<a class="alert-link">`|  | `--` |
| `<div class="toast-pf">`|  | `--` |
| `<div class="alert-dismissable">`|  | `--` |
| `--`|  | `<div class="pf-c-alert__body">` |
| `--`|  | `<div class="pf-c-alert__title">` |

| PF3 Class | Applied To | PF4 Class | Applied To | Outcome |
| -- | -- | -- | -- | -- |
| `badge` | `<span>` | `pf-c-badge` | `<span>` | `Initiates a badge. Always use with a modifier class.` |
| `--` | `--` | `pf-m-read` | `pf-c-badge` | `Applies read badge styling.` |
| `--` | `--` | `pf-m-unread` | `pf-c-badge` | `Applies unread badge styling.` |