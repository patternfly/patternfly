## Overview

A chip-group used in a multi-select do not require a modifier as its parent will handle its styles. When it overflows outside of the group, the chips will wrap to the next line. This overflow is indicated by a chip with the modifier `.pf-m-overflow` that acts as a button to show/hide the overflown chips by expanding the height of the container they belong to. 


## Accessibility

<mark>**All single chip accessibility and usage requirements apply.**</mark>

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-chip-group` | `<div>` | Initiates the container used to group chips. **Required.** |
| `.pf-c-button` | `<button>` | Initiates the button used to expand overflown chips. |