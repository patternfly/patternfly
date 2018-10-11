## Overview

Only if needed write a short description with implementation notes. Design and interaction notes are already written on the design specs, don't repeat information.

For example for buttons: Always add a modifier class to add color to the button. Never use the class `.btn` on its own.

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-label="[landmark description]"` | `.pf-c-sequence` | Describes <sequence> landmark |
| `aria-hidden="true"` | `.pf-c-sequence__control-icon` | Hides the icon from assistive technologies |
| `aria-label="actions"` | `.pf-c-sequence__control-icon` | Provides an accessible name for the dropdown when an icon is used instead of text. Required when an icon is used with no supporting text |

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-sequence` | `<nav>` |  Initiates a primary sequence element |
| `.pf-c-sequence__list` | `<ul>` | Initiates a default sequence list |
| `.pf-c-sequence__item` | `<li>` | Initiates a default sequence list item |
| `.pf-c-sequence__link` | `<a>` | Initiates a default sequence list link |
| `.pf-c-sequence__number` | `<span>` | Initiates a sequence number element |
| `.pf-c-sequence__content` | `<span>` | Initiates a sequence content element |
| `.pf-c-sequence__content-title` | `<span>` | Initiates a sequence content title |
| `.pf-c-sequence__content-status` | `<p>` | Initiates a sequence content status |
| `.pf-m-hover` | `.pf-c-sequence__link` | Modifies to display the link as hovered |
| `.pf-m-active` | `.pf-c-sequence__link` | Modifies to display the link as active |
| `.pf-m-focus` | `.pf-c-sequence__link` | Modifies to display the link as focused |
| `.pf-m-current` | `.pf-c-sequence__link` | Modifies for the current state |