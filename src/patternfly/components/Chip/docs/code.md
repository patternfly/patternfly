## Overview

Chips are used to display items that have been filtered or selected from a larger group. They comprise of a text element and a required button component that is used to remove the chip from selection. When the text overflows its truncated using ellipses. When more than one chip has been filtered/selected it belongs to a group (see ChipGroup).

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-label="[button label text]"` | `.pf-c-button` |  Provides an accessible name for the button when an icon is used instead of text. Required when an icon is used with no supporting text. |
| `aria-labelledby="[id value of .pf-c-button]"` | `.pf-c-button` | Gives the button an accessible name by referring to the element that provides the position of the button within a list. Required when the button is being removed. |
| `aria-hidden="true"` | `<i>` |  Hides the icon from assistive technologies. |

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-chip` | `<li>` | Initiates the body of a chip. |
| `.pf-c-chip__text` | `<p>` | Initiates the text inside the chip. |
| `.pf-c-button` | `<button>` | Initiates the button used to remove the chip. |
| `.pf-m-overflow` | `.pf-c-chip` | Applies styling of the overflow chip. |
| `.pf-m-hover` | `.pf-c-chip` | Forces display of the hover state of the chip. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:hover` pseudo class. |
| `.pf-m-active` | `.pf-c-button` | Forces display of the active state of the button. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:active` pseudo class. |
| `.pf-m-focus` | `.pf-c-button` | Forces display of the focus state of the button. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:focus` pseudo class. |