## Overview

The filter chips are used 

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-label="[button label text]"` | `.pf-c-button` |  Provides an accessible name for the button when an icon is used instead of text. Required when icon is used when no supporting text. |
| `aria-hidden="true"` | `<i>` |  Hides the icon from assistive technologies. |

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-filter-chip` | `<div>` | Initiates the body of a filter chip. |
| `.pf-c-filter-chip__text` | `<p>` | Initiates the text inside the filter chip. |
| `.pf-c-button` | `<button>` | Initiates the button used to remove the filter chip. |
| `.pf-c-filter-chip__group` | `<div>` | Initiates the container used to group filter chips. |
| `.pf-c-filter-chip__label` | `<p>` | Initiates the label for a group of filter chips. |
| `.pf-m-hover` | `.pf-c-filter-chip` | Forces display of the hover state of the filter chip. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:hover` pseudo class. |
| `.pf-m-active` | `.pf-c-button` | Forces display of the active state of the button. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:active` pseudo class. |
| `.pf-m-focus` | `.pf-c-button` | Forces display of the focus state of the button. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:focus` pseudo class. |