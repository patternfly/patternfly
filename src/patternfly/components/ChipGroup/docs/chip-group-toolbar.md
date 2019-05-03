## Overview 

A chip-group used in a toolbar require the modifier `.pf-m-toolbar` which styles the group's background-color and border-radius. Multiple chip-groups can exist in the toolbar depending on the size of the group that is being filtered from and its parent container should handle the spacing between the chip groups. Categories can be labelled by using  `.pf-c-chip-group__label` and its heading level should be based on the context in which this component exists on the page. When groups of chips overflow they will wrap to the next line. This overflow is indicated by a chip with the modifier `.pf-m-overflow` that acts as a button to show/hide the overflown chips by expanding the height of the container they belong to.

The chip group requires the [chip component](../../Chip/examples).

## Accessibility

**All single chip accessibility and usage requirements apply.**

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-chip-group` | `<ul>` | Initiates the container used to group chips. **Required.** |
| `.pf-c-chip-group__label` | `<li> <span>` | Initiates the label for a group of chips. |
| `.pf-c-button` | `<button>` | Initiates the button used to show overflown chips. |
| `.pf-m-toolbar` | `.pf-c-chip-group` | Modifies `.pf-c-chip-group` to be used in a toolbar. **Required** |