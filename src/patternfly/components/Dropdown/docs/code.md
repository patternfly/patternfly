## Overview

The dropdown menu can contain either links or buttons, depending on the expected behavior when clicking the menu item. If you are using the menu item to navigate to another page, then menu item is a link. Otherwise, use a button for the menu item.

## Accessibility

| Attribute | Applied | Outcome |
| -- | -- | -- |
| `aria-expanded="false"` | `.pf-c-dropdown__toggle` |  Indicates that the menu is hidden |
| `aria-expanded="true"` | `.pf-c-dropdown__toggle` |  Indicates that the menu is visible |
| `aria-label="Actions"` | `.pf-c-dropdown__toggle` | Provides an accessible name for the dropdown when an icon is used instead of text. **Required when icon is used with no supporting text** |
| `aria-hidden="true"` | `.pf-c-dropdown__toggle-icon` | Hides the icon from assistive technologies |
| `hidden` | `.pf-c-dropdown__menu` | Indicates that the menu is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies |
| `aria-expanded="true"` | `.pf-c-dropdown__menu` | Indicates that the menu is visible |
| `role="separator"` | `.pf-c-dropdown__separator` | Indicates that the separator is a separator |
| `disabled` | `button.pf-c-dropdown__menu-item` | When the menu item uses a button element, indicates that it is unavailable and removes it from keyboard focus |
| `aria-disabled="true"` | `a.pf-c-dropdown__menu-item` | When the menu item uses a link element, indicates that it is unavailable |
| `tabindex="-1"` | `a.pf-c-dropdown__menu-item` | When the menu item uses a link element, removes it from keyboard focus |
| `aria-pressed="true"` | `button.pf-c-dropdown__menu-item` | **Select only** The attribute `aria-pressed="true"` should be set programmatically to the active item. Value should be false when not selected.|

## Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-c-dropdown` | `<div>` | Defines the parent wrapper of the dropdown. |
| `.pf-c-dropdown__toggle` | `<button>` | Defines the dropdown toggle |
| `.pf-c-dropdown__toggle-icon` | `<i>` | Defines the dropdown toggle icon |
| `.pf-c-dropdown__menu` | `<div>` | Defines the parent wrapper of the menu items |
| `.pf-c-dropdown__menu-item` | `<a>` | Defines a menu item that navigates to another page |
| `.pf-c-dropdown__menu-item` | `<button>` | Defines a menu item that performs an action on the current page |
| `.pf-c-dropdown__separator` | `<div>` | Defines a separator within the menu |
| `.pf-m-expanded` | `.pf-c-dropdown` | Modifies for the expanded state |
| `.pf-m-plain` | `.pf-c-dropdown` | Modifies to display the toggle with no border or background |
| `.pf-m-top` | `.pf-c-dropdown` | Modifies to display the menu above the toggle |
| `.pf-m-align-right` | `.pf-c-dropdown__menu` | Modifies to display the menu aligned to the right edge of the toggle |
| `.pf-m-hover` | `.pf-c-dropdown__menu-item`, `.pf-c-dropdown__toggle` | Forces display of the hover state of the element. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:hover` pseudo-class. |
| `.pf-m-focus` | `.pf-c-dropdown__menu-item` | Forces display of the focus state of the element. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:focus` pseudo-class. |
| `.pf-m-active` | `.pf-c-dropdown__toggle` | Forces display of the active state of the element. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:active` pseudo-class. |
| `.pf-m-disabled` | `a.pf-c-dropdown__menu-item` | Modifies to display the menu item as disabled. This applies to `a.pf-c-dropdown__menu-item` and should not be used in lieu of the `:disabled` attribute on `button.pf-c-dropdown__menu-item`|
