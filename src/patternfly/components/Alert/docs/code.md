## Overview

Always add a modifier class. Do not use `.pf-c-alert` on its own.

## Accessibility

| Attribute      | Applied To    | Outcome                                 |
| -------------- | ------------- | --------------------------------------- |
| `role="alert"` | `.pf-c-alert` | Brings immediate attention to the user. |

## Usage

| Class            | Applied To    | Outcome                                                         |
| ---------------- | ------------- | --------------------------------------------------------------- |
| `.pf-c-alert`    | `<div>`       | Applies default alert styling. Always use with a modifier class |
| `.pf-m-success` | `.pf-c-alert` | Applies success styling                                         |
| `.pf-m-danger`   | `.pf-c-alert` | Applies danger styling                                          |
| `.pf-m-warning` | `.pf-c-alert` | Applies warning styling                                         |
| `.pf-m-info`    | `.pf-c-alert` | Applies info styling                                            |
