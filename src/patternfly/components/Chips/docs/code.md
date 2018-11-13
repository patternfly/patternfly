## Overview

A Chip is used to display items that have been filtered or selected from a larger group. They comprise of a text element and a required button component that is used to remove the chip from selection. When the text overflows its truncated using ellipses. A chip can belong to a "chip-group" layout. 

chip-groups require modifiers depending on their use in toolbars or selects. For Toolbars use `.pf-m-toolbar`. If the Filter component on a toolbar has more than one category, multiple chip-groups should display on the toolbar. The chip-group's label element (not required) indicates the category's label name and its heading level should be based on the context in which this component exists on the page. When groups of chips overflow they will wrap to the next line. This overflow is indicated by a chip with the modifier `.pf-m-overflow` that acts as a button to show/hide the overflown chips by expanding the height of the container they belong to. For selects use `.pf-m-select`. Selects take on the same properties as the toolbar except that they are apart of just one group and have a transparent background color.


## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-label="[button label text]"` | `.pf-c-button` |  Provides an accessible name for the button when an icon is used instead of text. Required when an icon is used with no supporting text. |
| `aria-labelledby="[id value of .pf-c-button]"` | `.pf-c-button` | Gives the button an accessible name by referring to the element that provides the position of the button within a list. Required when the button is being removed. |
| `aria-hidden="true"` | `<i>` |  Hides the icon from assistive technologies. |

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-chip-group` | `<div>` | Initiates the container used to group chips. |
| `.pf-c-chip-group__label` | `<h4>` | Initiates the label for a group of chips. |
| `.pf-c-chip` | `<div>` | Initiates the body of a chip. |
| `.pf-c-chip__text` | `<span>` | Initiates the text inside the chip. |
| `.pf-c-button` | `<button>` | Initiates the button used to remove the chip. |
| `.pf-m-overflow` | `.pf-c-chip` | Applies styling of the overflow chip. |
| `.pf-m-hover` | `.pf-c-chip` | Forces display of the hover state of the chip. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:hover` pseudo class. |
| `.pf-m-toolbar` | `.pf-c-chip-group` | Modifies `.pf-c-chip-group` to be used in a toolbar. |
| `.pf-m-select` | `.pf-c-chip-group` | Modifies `.pf-c-chip-group` to be used in a select. |
| `.pf-m-active` | `.pf-c-button` | Forces display of the active state of the button. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:active` pseudo class. |
| `.pf-m-focus` | `.pf-c-button` | Forces display of the focus state of the button. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:focus` pseudo class. |