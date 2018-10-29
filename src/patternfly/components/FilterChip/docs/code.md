## Overview

Filter chips are used to display items that have been filtered or selected from a larger group. Filter chips are made of a text element and a button component that is used to remove the filter chip from selection. When the text overflows it will be truncated using ellipses. When more than one chip has been filtered it belongs to a group. Groups are dependant on the number of categories that exist. If there is only one category the chips will be grouped together. If there are more than one the chips will be split into their respective categories. The group's label element will be used to indicate the category's name. When groups of filter chips overflow they will wrap to the next line. This is indicated by a button that displays the number of filter chips that have overflown, which will be used to hide/unhide them by expanding the height of the container they belong to.

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-label="[button label text]"` | `.pf-c-button` |  Provides an accessible name for the button when an icon is used instead of text. Required when an icon is used with no supporting text. |
| `aria-hidden="true"` | `<i>` |  Hides the icon from assistive technologies. |
| `role="group of filter chips"` | `.pf-c-filter-chip__group` | Indicates that the filter chip group is a filter chip group. |

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-filter-chip` | `<div>` | Initiates the body of a filter chip. |
| `.pf-c-filter-chip__text` | `<p>` | Initiates the text inside the filter chip. |
| `.pf-c-button` | `<button>` | Initiates the button used to remove the filter chip. |
| `.pf-c-filter-chip__group` | `<div>` | Initiates the container used to group filter chips. |
| `.pf-c-filter-chip__label` | `<p>` | Initiates the label for a group of filter chips. |
| `.pf-m-overflow` | `.pf-c-filter-chip` | Applies styling of the overflow filter chip. |
| `.pf-m-hover` | `.pf-c-filter-chip` | Forces display of the hover state of the filter chip. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:hover` pseudo class. |
| `.pf-m-active` | `.pf-c-button` | Forces display of the active state of the button. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:active` pseudo class. |
| `.pf-m-focus` | `.pf-c-button` | Forces display of the focus state of the button. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:focus` pseudo class. |