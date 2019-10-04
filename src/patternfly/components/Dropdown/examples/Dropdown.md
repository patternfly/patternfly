---
title: Dropdown
section: components
cssPrefix: pf-c-dropdown
---

import './Dropdown.css'

## Examples
```hbs title=Expanded
{{#> dropdown dropdown--IsActionMenu="true" dropdown--IsExpanded="true" dropdown--HasToggleIcon="true"}}
  {{#> dropdown-toggle-text}}
    Expanded dropdown
  {{/dropdown-toggle-text}}
{{/dropdown}}
```

```hbs title=Collapsed
{{#> dropdown dropdown--IsActionMenu="true" dropdown--HasToggleIcon="true"}}
  {{#> dropdown-toggle-text}}
    Collapsed dropdown
  {{/dropdown-toggle-text}}
{{/dropdown}}
```

```hbs title=Disabled
{{#> dropdown dropdown--IsActionMenu="true" dropdown--HasToggleIcon="true" dropdown-toggle--IsDisabled="true"}}
  {{#> dropdown-toggle-text}}
    Disabled dropdown
  {{/dropdown-toggle-text}}
{{/dropdown}}
```

```hbs title=Kebab
{{#> dropdown dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions" dropdown-toggle--IsDisabled="true"}}{{/dropdown}}
{{#> dropdown dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
{{#> dropdown dropdown--IsActionMenu="true" dropdown--IsExpanded="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
```

```hbs title=Kebab-align-right
{{#> dropdown dropdown--IsActionMenu="true" dropdown--IsExpanded="true" dropdown-menu--modifier="pf-m-align-right" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}
{{/dropdown}}
```

```hbs title=Align-right
{{#> dropdown dropdown--IsActionMenu="true" dropdown--IsExpanded="true" dropdown--HasToggleIcon="true" dropdown-menu--modifier="pf-m-align-right"}}
  {{#> dropdown-toggle-text}}
    Right
  {{/dropdown-toggle-text}}
{{/dropdown}}
```

```hbs title=Align-top
{{#> dropdown dropdown--IsActionMenu="true" dropdown--modifier="pf-m-top" dropdown--HasToggleIcon="true"}}
  {{#> dropdown-toggle-text}}
    Top
  {{/dropdown-toggle-text}}
{{/dropdown}}
{{#> dropdown dropdown--IsActionMenu="true" dropdown--IsExpanded="true" dropdown--modifier="pf-m-top" dropdown--HasToggleIcon="true"}}
  {{#> dropdown-toggle-text}}
    Top
  {{/dropdown-toggle-text}}
{{/dropdown}}
```

```hbs title=Split-button
{{#> dropdown dropdown--IsSplitButton="true" dropdown-toggle--IsDisabled="true" dropdown-toggle--type="div" dropdown-toggle--modifier="pf-m-split-button" dropdown-menu--toggle-id="split-button-dropdown-disabled-example-button"}}
  {{> dropdown-toggle-check dropdown-toggle-check--id="split-button-dropdown-disabled-example-check" aria-label="Select all"}}
  {{> dropdown-toggle-button dropdown--IsToggleButton="true" dropdown-toggle-button--id="split-button-dropdown-disabled-example-button" aria-label="Select"}}
{{/dropdown}}

{{#> dropdown dropdown--IsSplitButton="true" dropdown-toggle--type="div" dropdown-toggle--modifier="pf-m-split-button" dropdown-menu--toggle-id="split-button-dropdown-example-button"}}
  {{> dropdown-toggle-check dropdown-toggle-check--id="split-button-dropdown-example-check" aria-label="Select all"}}
  {{> dropdown-toggle-button dropdown--IsToggleButton="true" dropdown-toggle-button--id="split-button-dropdown-example-button" aria-label="Select"}}
{{/dropdown}}

{{#> dropdown dropdown--IsExpanded="true" dropdown--IsSplitButton="true" dropdown-toggle--type="div" dropdown-toggle--modifier="pf-m-split-button" dropdown-menu--toggle-id="split-button-dropdown-expanded-example-button"}}
  {{> dropdown-toggle-check dropdown-toggle-check--id="split-button-dropdown-expanded-example-check" aria-label="Select all"}}
  {{> dropdown-toggle-button dropdown--IsToggleButton="true" dropdown-toggle-button--id="split-button-dropdown-expanded-example-button"  aria-label="Select"}}
{{/dropdown}}

{{#> dropdown dropdown--IsSplitButton="true" dropdown--IsSplitButtonText="10 selected" dropdown--CheckboxIsChecked="true" dropdown--IsBulkSelect="true" dropdown-toggle--type="div" dropdown-toggle--modifier="pf-m-split-button" dropdown-menu--toggle-id="split-button-dropdown-with-text-example-button"}}
  {{> dropdown-toggle-check dropdown-toggle-check--id="split-button-dropdown-with-text-example-check" aria-label="Unselect all"}}
  {{> dropdown-toggle-button dropdown--IsToggleButton="true" dropdown-toggle-button--id="split-button-dropdown-with-text-example-button"  aria-label="Select"}}
{{/dropdown}}
```

```hbs title=With-groups
{{#> dropdown dropdown--IsExpanded="true" dropdown--HasToggleIcon="true" dropdown--IsGroupsMenu="true"}}
  {{#> dropdown-toggle-text}}
    Groups
  {{/dropdown-toggle-text}}
{{/dropdown}}
```

```hbs title=Panel
{{#> dropdown dropdown--IsExpanded="true" dropdown--HasToggleIcon="true"}}
  {{#> dropdown-toggle-text}}
    Expanded dropdown
  {{/dropdown-toggle-text}}
{{/dropdown}}
```

The dropdown panel is provided for flexibility in allowing various content within a dropdown.

```hbs title=Primary-toggle
{{#> dropdown dropdown-toggle--modifier="pf-m-primary" dropdown--IsActionMenu="true" dropdown--HasToggleIcon="true"}}
  {{#> dropdown-toggle-text}}
    Collapsed dropdown
  {{/dropdown-toggle-text}}
{{/dropdown}}
&nbsp;
{{#> dropdown dropdown-toggle--modifier="pf-m-primary" dropdown--IsActionMenu="true" dropdown--IsExpanded="true" dropdown--HasToggleIcon="true"}}
  {{#> dropdown-toggle-text}}
    Expanded dropdown
  {{/dropdown-toggle-text}}
{{/dropdown}}
```

## Documentation
### Overiew
The dropdown menu can contain either links or buttons, depending on the expected behavior when clicking the menu item. If you are using the menu item to navigate to another page, then menu item is a link. Otherwise, use a button for the menu item.

### Accessibility
| Attribute | Applied | Outcome |
| -- | -- | -- |
| `aria-expanded="false"` | `.pf-c-dropdown__toggle`, `.pf-c-dropdown__toggle-check`, `.pf-c-dropdown__toggle-button` |  Indicates that the menu is hidden. |
| `aria-expanded="true"` | `.pf-c-dropdown__toggle`, `.pf-c-dropdown__toggle-check`, `.pf-c-dropdown__toggle-button` |  Indicates that the menu is visible. |
| `aria-label="Actions"` | `.pf-c-dropdown__toggle`, `.pf-c-dropdown__toggle-check`, `.pf-c-dropdown__toggle-button` | Provides an accessible name for the dropdown when an icon is used instead of text. **Required when icon is used with no supporting text**. |
| `aria-hidden="true"` | `.pf-c-dropdown__toggle-icon`, `<i>`, `.pf-c-dropdown__toggle-check .pf-c-dropdown__toggle-text` | Hides the icon from assistive technologies. |
| `hidden` | `.pf-c-dropdown__menu` | Indicates that the menu is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies. |
| `aria-labelledby="{toggle button id}"` | `.pf-c-dropdown__menu` | Gives the menu an accessible name by referring to the element that toggles the menu. |
| `aria-labelledby="{checkbox id} {toggle text id}"` | `.pf-m-split-button .pf-c-dropdown__toggle-check > input[type="checkbox"]` | Gives the checkbox an accessible name by referring to the element by which it is described. |
| `role="separator"` | `.pf-c-dropdown__separator` | Indicates that the separator is a separator. |
| `disabled` | `.pf-c-dropdown__toggle`, `.pf-c-dropdown__toggle-button`, `.pf-c-dropdown__toggle-check > input[type="checkbox"]` | Disables the dropdown toggle and removes it from keyboard focus. |
| `disabled` | `button.pf-c-dropdown__menu-item` | When the menu item uses a button element, indicates that it is unavailable and removes it from keyboard focus. |
| `aria-disabled="true"` | `a.pf-c-dropdown__menu-item` | When the menu item uses a link element, indicates that it is unavailable. |
| `tabindex="-1"` | `a.pf-c-dropdown__menu-item` | When the menu item uses a link element, removes it from keyboard focus. |

### Usage
| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-c-dropdown` | `<div>` | Defines the parent wrapper of the dropdown. |
| `.pf-c-dropdown__toggle` | `<button>` | Defines the dropdown toggle. |
| `.pf-c-dropdown__toggle-icon` | `<i>` | Defines the dropdown toggle icon. |
| `.pf-c-dropdown__toggle-text` | `<span>` | Defines the dropdown toggle text. **Required when text is present, adds truncation**. |
| `.pf-c-dropdown__toggle-check` | `<label>` | Defines a checkbox in the toggle area of a split button dropdown. |
| `.pf-c-dropdown__toggle-button` | `<button>` | Defines a button in the toggle area of a split button dropdown. |
| `.pf-c-dropdown__menu` | `<ul>`, `<div>` | Defines the parent wrapper of the menu items. |
| `.pf-c-dropdown__menu-item` | `<a>` | Defines a menu item that navigates to another page. |
| `.pf-c-dropdown__menu-item` | `<button>` | Defines a menu item that performs an action on the current page. |
| `.pf-c-dropdown__separator` | `<div>` | Defines a separator within the menu. |
| `.pf-c-dropdown__group` | `<section>` | Defines a group of items in a dropdown. **Required when there is more than one group in a dropdown**. |
| `.pf-c-dropdown__group-title` | `<h1>` | Defines the title for a group of items in the dropdown menu. |
| `.pf-m-expanded` | `.pf-c-dropdown` | Modifies for the expanded state. |
| `.pf-m-top` | `.pf-c-dropdown` | Modifies to display the menu above the toggle. |
| `.pf-m-align-right` | `.pf-c-dropdown__menu` | Modifies to display the menu aligned to the right edge of the toggle. |
| `.pf-m-split-button` | `.pf-c-dropdown__toggle` | Modifies the dropdown toggle area to allow for interactive elements. |
| `.pf-m-hover` | `.pf-c-dropdown__menu-item`, `.pf-c-dropdown__toggle` | Forces display of the hover state of the element. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:hover` pseudo-class. |
| `.pf-m-focus` | `.pf-c-dropdown__menu-item`, `.pf-c-dropdown__toggle` | Forces display of the focus state of the element. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:focus` pseudo-class. |
| `.pf-m-plain` | `.pf-c-dropdown__toggle` | Modifies to display the toggle with no border. |
| `.pf-m-primary` | `.pf-c-dropdown__toggle` | Modifies to display the toggle with primary styles. |
| `.pf-m-active` | `.pf-c-dropdown__toggle` | Forces display of the active state of the element. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:active` pseudo-class. |
| `.pf-m-disabled` | `a.pf-c-dropdown__menu-item` | Modifies to display the menu item as disabled. This applies to `a.pf-c-dropdown__menu-item` and should not be used in lieu of the `disabled` attribute on `button.pf-c-dropdown__menu-item`. |
| `.pf-m-disabled` | `div.pf-c-dropdown__toggle` | Modifies to display the dropdown toggle as disabled. This applies to `div.pf-c-dropdown__toggle` and should not be used in lieu of the `disabled` attribute on `button.pf-c-dropdown__toggle`. When this is used, `disabled` should also be added to any form elements in `div.pf-c-dropdown__toggle`. |

The dropdown panel is provided for flexibility in allowing various content within a dropdown.
