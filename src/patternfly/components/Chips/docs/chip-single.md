## Overview

A Chip is used to display items that have been filtered or selected from a larger group. They comprise of a text element and a button component that is used to remove the chip from selection. When the text overflows it is truncated using ellipses. A chip can be grouped by using the "chip-group" layout. 


## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-label="[button label text]"` | `.pf-c-button` |  Provides an accessible name for the button when an icon is used instead of text. Required when an icon is used with no supporting text. |
| `aria-labelledby="[id value of .pf-c-button]"` | `.pf-c-button` | Gives the button an accessible name by referring to the element that provides the position of the button within a list. Required when the button is being removed. |
| `aria-hidden="true"` | `<i>` |  Hides the icon from assistive technologies. |

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-chip` | `<div>` | Initiates the body of a chip. |
| `.pf-c-chip__text` | `<span>` | Initiates the text inside of the chip. **Required.** |
| `.pf-c-button` | `<button>` | Initiates the button used to remove the chip. **Required.** |
| `.pf-m-overflow` | `.pf-c-chip` | Applies styling of the overflow chip. |