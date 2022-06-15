---
id: Dropdown
section: components
cssPrefix: pf-c-dropdown
---

import './Dropdown.css'

## Examples

### Expanded
```hbs
{{> dropdown dropdown--id="dropdown-expanded" dropdown--IsExpanded="true" dropdown-toggle--text="Expanded dropdown"}}
```

### Collapsed
```hbs
{{> dropdown dropdown--id="dropdown-collapsed" dropdown-toggle--text="Collapsed dropdown"}}
```

### Disabled
```hbs
{{> dropdown dropdown--id="dropdown-disabled" dropdown-toggle--IsDisabled="true" dropdown-toggle--text="Disabled dropdown"}}
```

### Aria disabled items
```hbs
{{> dropdown dropdown--id="dropdown-aria-disabled-items" dropdown--IsExpanded="true" dropdown-toggle--text="Expanded dropdown" dropdown--IsAriaDisabled="true"}}
```

### Kebab
```hbs
{{> dropdown dropdown--id="dropdown-kebab-disabled" dropdown-toggle--IsPlain="true" dropdown-toggle--IsDisabled="true"}}
{{> dropdown dropdown--id="dropdown-kebab" dropdown-toggle--IsPlain="true"}}
{{> dropdown dropdown--id="dropdown-kebab-expanded" dropdown--IsExpanded="true" dropdown-toggle--IsPlain="true"}}
```
### Kebab align right
```hbs
{{> dropdown dropdown--id="dropdown-kebab-align-right" dropdown--IsExpanded="true" dropdown-menu--modifier="pf-m-align-right" dropdown-toggle--IsPlain="true"}}
```

### Align right
```hbs
{{> dropdown dropdown--id="dropdown-align-right" dropdown--IsExpanded="true" dropdown-menu--modifier="pf-m-align-right" dropdown-toggle--text="Right"}}
```

### Align on different breakpoint
```hbs
{{> dropdown id="dropdown-align-on-different-breakpoint" dropdown--IsActionMenu="true" dropdown--IsExpanded="true" dropdown-menu--modifier="pf-m-align-right-on-lg pf-m-align-left-on-2xl" dropdown-toggle--text="Dropdown"}}
```

### Align top
```hbs
{{> dropdown dropdown--id="dropdown-align-top" dropdown--modifier="pf-m-top" dropdown-toggle--text="Top"}}
{{> dropdown dropdown--id="dropdown-align-top-expanded" dropdown--modifier="pf-m-top" dropdown--IsExpanded="true" dropdown-toggle--text="Top"}}
```

### Plain with text
```hbs
{{> dropdown dropdown--id="plain-with-text-example-disabled" dropdown-toggle--IsPlainText="true" dropdown-toggle--IsDisabled="true" dropdown-toggle--text="Custom text"}}
&nbsp;
{{> dropdown dropdown--id="plain-with-text-example" dropdown-toggle--IsPlainText="true" dropdown-toggle--text="Custom text"}}
&nbsp;
{{> dropdown dropdown--id="plain-with-text-example-expanded" dropdown-toggle--IsPlainText="true" dropdown-toggle--text="Custom text (expanded)" dropdown--IsExpanded="true"}}
```

### Badge toggle
```hbs
{{> dropdown dropdown--id="dropdown-badge-toggle" dropdown--template--Badge="true" dropdown--IsExpanded="true"}}
```

### Menu item icons
```hbs
{{> dropdown dropdown--id="dropdown-menu-item-icons" dropdown--IsExpanded="true" dropdown-toggle--text="Expanded dropdown" dropdown-menu--HasIcons="true"}}
```

### Split button (checkbox)
```hbs
{{> dropdown dropdown--id="dropdown-split-button-disabled" dropdown--template--SplitButton="true" dropdown-toggle--HasCheckBox="true" dropdown-toggle--IsDisabled="true"}}
{{> dropdown dropdown--id="dropdown-split-button" dropdown--template--SplitButton="true"dropdown-toggle--HasCheckBox="true"}}
{{> dropdown dropdown--id="dropdown-split-button-expanded" dropdown--template--SplitButton="true" dropdown--IsExpanded="true" dropdown-toggle--HasCheckBox="true"}}
```

### Split button (checkbox with toggle text)
```hbs
{{> dropdown dropdown--id="dropdown-split-button-text" dropdown--template--SplitButton="true" dropdown-toggle-check--CheckboxIsChecked="true" dropdown-menu--IsBulkSelect="true" dropdown-toggle--split-button--text="10 selected"}}
```

### Split button (action)
```hbs
{{> dropdown dropdown--template--SplitButton="true" dropdown--id="dropdown-split-button-action" dropdown--IsActionButton="true" dropdown-toggle--HasActionButton="true"}}
{{> dropdown dropdown--template--SplitButton="true" dropdown--id="dropdown-split-button-action-expanded" dropdown--IsActionButton="true" dropdown--IsExpanded="true" dropdown-toggle--HasActionButton="true"}}
{{> dropdown dropdown--template--SplitButton="true" dropdown--id="dropdown-split-button-action-icon" dropdown--IsActionButton="true" dropdown-toggle--HasIconButton="true"}}
{{> dropdown dropdown--template--SplitButton="true" dropdown--id="dropdown-split-button-action-icon-expanded" dropdown--IsActionButton="true" dropdown--IsExpanded="true" dropdown-menu--HasIcons="true" dropdown-toggle--HasIconButton="true"}}
```

### Split button, primary (action)
```hbs
{{> dropdown dropdown-toggle--modifier="pf-m-primary" dropdown--template--SplitButton="true" dropdown--id="dropdown-split-button-action-primary" dropdown--IsActionButton="true" dropdown-toggle--HasActionButton="true"}}
{{> dropdown dropdown-toggle--modifier="pf-m-primary" dropdown--template--SplitButton="true" dropdown--id="dropdown-split-button-action-primary-expanded" dropdown--IsActionButton="true" dropdown--IsExpanded="true" dropdown-toggle--HasActionButton="true"}}
{{> dropdown dropdown-toggle--modifier="pf-m-primary" dropdown--template--SplitButton="true" dropdown--id="dropdown-split-button-action-primary-icon" dropdown--IsActionButton="true" dropdown-toggle--HasIconButton="true"}}
{{> dropdown dropdown-toggle--modifier="pf-m-primary" dropdown--template--SplitButton="true" dropdown--id="dropdown-split-button-action-primary-icon-expanded" dropdown--IsActionButton="true" dropdown--IsExpanded="true" dropdown-menu--HasIcons="true" dropdown-toggle--HasIconButton="true"}}
```

### Split button, secondary (action)
```hbs
{{> dropdown dropdown-toggle--modifier="pf-m-secondary" dropdown--template--SplitButton="true" dropdown--id="dropdown-split-button-action-secondary" dropdown--IsActionButton="true" dropdown-toggle--HasActionButton="true"}}
{{> dropdown dropdown-toggle--modifier="pf-m-secondary" dropdown--template--SplitButton="true" dropdown--id="dropdown-split-button-action-secondary-expanded" dropdown--IsActionButton="true" dropdown--IsExpanded="true" dropdown-toggle--HasActionButton="true"}}
{{> dropdown dropdown-toggle--modifier="pf-m-secondary" dropdown--template--SplitButton="true" dropdown--id="dropdown-split-button-action-secondary-icon" dropdown--IsActionButton="true" dropdown-toggle--HasIconButton="true"}}
{{> dropdown dropdown-toggle--modifier="pf-m-secondary" dropdown--template--SplitButton="true" dropdown--id="dropdown-split-button-action-secondary-icon-expanded" dropdown--IsActionButton="true" dropdown--IsExpanded="true" dropdown-menu--HasIcons="true" dropdown-toggle--HasIconButton="true"}}
```

### With groups
```hbs
{{> dropdown dropdown--template--Groups="true" dropdown--id="dropdown-groups" dropdown--IsExpanded="true" dropdown-toggle--text="Groups"}}
```

### With groups and dividers between groups
```hbs
{{> dropdown dropdown--template--Groups="true" dropdown--id="dropdown-groups-and-dividers-between-groups" dropdown--IsExpanded="true" dropdown--HasGroupDividers="true" dropdown-menu--HasIcons="true" dropdown-toggle--text="Groups"}}
```

### With groups and dividers between items
```hbs
{{> dropdown dropdown--id="dropdown-groups-and-dividers-between-items" dropdown--template--Groups="true" dropdown--IsExpanded="true" dropdown--HasItemDividers="true" dropdown-toggle--text="Groups"}}
```

### Panel
```hbs
{{#> dropdown dropdown--id="dropdown-panel" dropdown--IsExpanded="true"}}
  {{> dropdown-toggle dropdown-toggle--text="Expanded dropdown"}}
  {{#> dropdown-menu dropdown-menu--type="div"}}
    [Panel contents here]
  {{/dropdown-menu}}
{{/dropdown}}
```

The dropdown panel is provided for flexibility in allowing various content within a dropdown.

### Primary toggle
```hbs
{{> dropdown dropdown--id="dropdown-primary-toggle" dropdown-toggle--modifier="pf-m-primary" dropdown-toggle--text="Collapsed dropdown"}}
{{> dropdown dropdown--id="dropdown-primary-toggle-expanded" dropdown--IsExpanded="true" dropdown-toggle--modifier="pf-m-primary" dropdown-toggle--text="Expanded dropdown"}}
{{> dropdown dropdown--id="dropdown-primary-toggle-disabled" dropdown-toggle--modifier="pf-m-primary" dropdown-toggle--text="Disabled" dropdown-toggle--IsDisabled="true"}}
```

### Secondary toggle
```hbs
{{> dropdown dropdown--id="dropdown-secondary-toggle" dropdown-toggle--modifier="pf-m-secondary" dropdown-toggle--text="Collapsed dropdown"}}
{{> dropdown dropdown--id="dropdown-secondary-toggle-expanded" dropdown--IsExpanded="true" dropdown-toggle--modifier="pf-m-secondary" dropdown-toggle--text="Expanded dropdown"}}
{{> dropdown dropdown--id="dropdown-secondary-toggle-disabled" dropdown-toggle--modifier="pf-m-secondary" dropdown-toggle--text="Disabled" dropdown-toggle--IsDisabled="true"}}
```

### Dropdown with image and text
```hbs
{{> dropdown dropdown--id="dropdown-with-image-and-text-example" dropdown--template--MenuToggleImageText="true" dropdown--IsExpanded="true"}}
```

### Dropdown with description
```hbs
{{> dropdown dropdown--id="dropdown-with-description" dropdown--template--DescriptionMenu="true" dropdown--IsExpanded="true" dropdown-toggle--text="Expanded dropdown"}}
```

## Documentation

### Overview

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
| `disabled` | `.pf-c-dropdown__toggle`, `.pf-c-dropdown__toggle-button`, `.pf-c-dropdown__toggle-check > input[type="checkbox"]` | Disables the dropdown toggle and removes it from keyboard focus. |
| `disabled` | `button.pf-c-dropdown__menu-item` | When the menu item uses a button element, indicates that it is unavailable and removes it from keyboard focus. |
| `aria-disabled="true"` | `a.pf-c-dropdown__menu-item` | When the menu item uses a link element, indicates that it is unavailable. |
| `tabindex="-1"` | `a.pf-c-dropdown__menu-item` | When the menu item uses a link element, removes it from keyboard focus. |

### Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-c-dropdown` | `<div>` | Defines the parent wrapper of the dropdown. |
| `.pf-c-dropdown__toggle` | `<button>` | Defines the dropdown toggle. |
| `.pf-c-dropdown__toggle-icon` | `<span>` | Defines the dropdown toggle icon. |
| `.pf-c-dropdown__toggle-text` | `<span>` | Defines the dropdown toggle text. **Required when text is present, adds truncation**. |
| `.pf-c-dropdown__toggle-check` | `<label>` | Defines a checkbox in the toggle area of a split button dropdown. |
| `.pf-c-dropdown__toggle-button` | `<button>` | Defines the toggle button for a split button dropdown. |
| `.pf-c-dropdown__menu` | `<ul>`, `<div>` | Defines the parent wrapper of the menu items. |
| `.pf-c-dropdown__menu-item` | `<a>` | Defines a menu item that navigates to another page. |
| `.pf-c-dropdown__menu-item-icon` | `<span>` | Defines the wrapper for the menu item icon. |
| `.pf-c-dropdown__menu-item-description` | `<div>` | Defines the wrapper for the menu item description. |
| `.pf-c-dropdown__menu-item-main` | `<div>` | Defines the wrapper for the menu item main element. Use when the description element is present. |
| `.pf-c-dropdown__toggle-image` | `<span>` | Defines the wrapper for the dropdown toggle button image. |
| `.pf-c-dropdown__menu-item` | `<button>` | Defines a menu item that performs an action on the current page. |
| `.pf-c-dropdown__group` | `<section>` | Defines a group of items in a dropdown. **Required when there is more than one group in a dropdown**. |
| `.pf-c-dropdown__group-title` | `<h1>` | Defines the title for a group of items in the dropdown menu. |
| `.pf-m-expanded` | `.pf-c-dropdown` | Modifies for the expanded state. |
| `.pf-m-top` | `.pf-c-dropdown` | Modifies to display the menu above the toggle. |
| `.pf-m-align-left{-on-[breakpoint]}` | `.pf-c-dropdown__menu` | Modifies to display the menu aligned to the left edge of the toggle at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-align-right{-on-[breakpoint]}` | `.pf-c-dropdown__menu` | Modifies to display the menu aligned to the right edge of the toggle at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-split-button` | `.pf-c-dropdown__toggle` | Modifies the dropdown toggle area to allow for interactive elements. |
| `.pf-m-action` | `.pf-c-dropdown__toggle.pf-m-split-button` | Modifies the dropdown toggle for when an action is placed beside a toggle button in a split button dropdown. |
| `.pf-m-text` | `.pf-c-dropdown__menu-item` | Modifies a menu item to be non-interactive text. |
| `.pf-m-plain` | `.pf-c-dropdown__toggle` | Modifies to display the toggle with no border. |
| `.pf-m-text` | `.pf-c-dropdown__toggle` | Modifies the dropdown toggle for the text variation. |
| `.pf-m-primary` | `.pf-c-dropdown__toggle` | Modifies to display the toggle with primary styles. |
| `.pf-m-secondary` | `.pf-c-dropdown__toggle` | Modifies to display the toggle with secondary styles. |
| `.pf-m-full-height` | `.pf-c-dropdown` | Modifies a dropdown to full height of parent. See masthead for use. |
| `.pf-m-disabled` | `a.pf-c-dropdown__menu-item` | Modifies to display the menu item as disabled. This applies to `a.pf-c-dropdown__menu-item` and should not be used in lieu of the `disabled` attribute on `button.pf-c-dropdown__menu-item`. |
| `.pf-m-disabled` | `div.pf-c-dropdown__toggle` | Modifies to display the dropdown toggle as disabled. This applies to `div.pf-c-dropdown__toggle` and should not be used in lieu of the `disabled` attribute on `button.pf-c-dropdown__toggle`. When this is used, `disabled` should also be added to any form elements in `div.pf-c-dropdown__toggle`. |
| `.pf-m-icon` | `.pf-c-dropdown__menu-item` | Modifies an item to support adding an icon. |
| `.pf-m-active` | `.pf-c-dropdown__toggle` | Modifies the dropdown menu toggle for the active state. |
| `.pf-m-description` | `.pf-c-dropdown__menu-item` | Modifies an item to support adding a description. |
