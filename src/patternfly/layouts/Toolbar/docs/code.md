## Overview

The toolbar layout assumes that all direct children of `.pf-l-toolbar` appear on a single line, until container width forces them to wrap. Toolbar groups can be nested.

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-label="[section label text]"` | `.pf-l-toolbar__section` | Provides an accessible name for toolbar section. |


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-l-toolbar` | `<div>`, `<section>`, `<header>`, `<footer>` |  Initializes a toolbar layout. **Required.** |
| `.pf-l-toolbar__section` | `<section>` |  Initiates a toolbar section. Use this when vertically stacking toolbar sections. |
| `.pf-l-toolbar__group` | `<div>` |  Initiates a toolbar group. **Required.** |
| `.pf-l-toolbar__item` | `<div>` |  Initiates a toolbar item. **Required.** |
| `.pf-m-align-right` | `.pf-l-toolbar__group` | Sets toolbar group to align right. |
