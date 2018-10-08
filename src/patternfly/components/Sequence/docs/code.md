## Overview

Only if needed write a short description with implementation notes. Design and interaction notes are already written on the design specs, don't repeat information.

For example for buttons: Always add a modifier class to add color to the button. Never use the class `.btn` on its own.

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `role` or `aria` | `pf-c-sequence` |  accessibility notes. |


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-sequence` | `<div>` |  Initiates a primary sequence element |
| `.pf-c-sequence__list` | `<ul>` | Initiates a default sequence list |
| `.pf-c-sequence__item` | `<li>` | Initiates a default sequence list item |
| `.pf-c-sequence__link` | `<a>` | Initiates a default sequence list link |
| `.pf-c-sequence__number` | `<div>` | Initiates a sequence number element |
| `.pf-c-sequence__content` | `<div>` | Initiates a sequence content element |
| `.pf-c-sequence__content-title` | `<h1>, <h2>, <h3>, <h4>, <h5>, <h6>` | Initiates a sequence content title |
| `.pf-c-sequence__content-status` | `<p>` | Initiates a sequence content status |
| `.pf-m-hover` | `.pf-c-sequence__link` | Modifies to display the link as hovered |
| `.pf-m-focus` | `.pf-c-sequence__link` | Modifies to display the link as focussed |
| `.pf-m-current` | `.pf-c-sequence__link` | Modifies for the current state |