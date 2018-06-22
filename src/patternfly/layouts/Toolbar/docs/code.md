## Overview

The toolbar layout assumes that all direct children of `.pf-l-toolbar` appear on a single line, until container width forces them to wrap. Toolbar groups and group items are set to wrap by default, which can be changed by applying `.pf-m-nowrap` to the parent element. Toolbar groups can be nested.

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
| `.pf-m-nowrap` | `.pf-l-toolbar`, `.pf-l-toolbar__section`, `.pf-l-toolbar__group` |  Sets toolbar groups, group items and section groups to nowrap. |
| `.pf-m-grow`, `.pf-m-grow-right-on-{sm, md, lg, xl}` | `.pf-l-toolbar__group` | Sets toolbar group to occupy available space. If an item within a group should be aligned right, apply `.pf-m-grow` to parent. As as result, applying `.pf-m-grow` to an item will align adjecent items to right. |
| `.pf-m-align-right`, `.pf-m-align-right-on-{sm, md, lg, xl}` | `.pf-l-toolbar__group`, `.pf-l-toolbar__item` | Sets toolbar group or toolbar item to align right. If an item within a group should be aligned right, apply `.pf-m-grow` to parent. As as result, applying `.pf-m-align-right` to an item will align adjecent items to right. |
| `.pf-m-border-top` | `.pf-l-toolbar__section` |  Adds border-top and padding to toolbar section. |
| `.pf-m-border-bottom` | `.pf-l-toolbar__section` |  Adds border-bottom and padding to toolbar section. |
| `.pf-m-align-items-start` | `.pf-l-toolbar`, `.pf-l-section`, `.pf-l-toolbar__group` |  Sets toolbar items to vertically align to flex-start. |
| `.pf-m-align-items-baseline` | `.pf-l-toolbar`, `.pf-l-section`, `.pf-l-toolbar__group` |  Sets toolbar items to vertically align to baseline. |
| `.pf-m-align-items-center` | `.pf-l-toolbar`, `.pf-l-section`, `.pf-l-toolbar__group` |  Sets toolbar items to vertically align to center. |
| `.pf-m-align-items-end` | `.pf-l-toolbar`, `.pf-l-section`, `.pf-l-toolbar__group` |  Sets toolbar items to vertically align to flex-end. |
