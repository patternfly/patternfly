## Overview

 Chip Groups require modifiers depending on their use in toolbars or selects. In Toolbars the Filter component can have more than one category which means there will be multiple Chip Groups displayed. The group's label element indicates the category's label name and its heading level should be based on the context in which this component exists on the page. When groups of chips overflow they will wrap to the next line. This overflow is indicated by a chip with the modifier `.pf-m-overflow' that acts as a button to show/hide the overflown chips by expanding the height of the container they belong to. Selects have one chip group without a transparent color and they also wrap to the next line when overflown.

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `role="list"` | `.pf-c-chip__group` | Indicates that the chip group is a chip group. |

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-chip__group` | `<div>` | Initiates the container used to group chips. |
| `.pf-c-chip__label` | `<h4>` | Initiates the label for a group of chips. |
| `.pf-m-toolbar` | `.pf-c-chip__group` | Modifies `.pf-c-chip__group` to be used in a toolbar. |
| `.pf-m-select` | `.pf-c-chip__group` | Modifies `.pf-c-chip__group` to be used in a select. |