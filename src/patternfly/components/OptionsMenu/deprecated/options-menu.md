---
id: Options menu
section: components
subsection: menus
cssPrefix: pf-v5-c-options-menu
deprecated: true
---

import './options-menu.css'

## Examples
### Single option
```hbs
{{#> options-menu options-menu--id="options-menu-single-example" options-menu--HasToggleIcon="true"}}
  {{#> options-menu-toggle}}
    {{#> options-menu-toggle-text}}
      Options menu
    {{/options-menu-toggle-text}}
  {{/options-menu-toggle}}
  {{> options-menu-single}}
{{/options-menu}}

{{#> options-menu options-menu--IsExpanded="true" options-menu--id="options-menu-single-expanded-example" options-menu--HasToggleIcon="true"}}
  {{#> options-menu-toggle}}
    {{#> options-menu-toggle-text}}
      Options menu
    {{/options-menu-toggle-text}}
  {{/options-menu-toggle}}
  {{> options-menu-single}}
{{/options-menu}}
```

### Disabled
```hbs
{{#> options-menu options-menu--id="options-menu-single-disabled-example" options-menu--HasToggleIcon="true" options-menu-toggle--IsDisabled="true"}}
  {{#> options-menu-toggle}}
    {{#> options-menu-toggle-text}}
      Disabled options menu
    {{/options-menu-toggle-text}}
  {{/options-menu-toggle}}
{{/options-menu}}
```

### Multiple options
```hbs
{{#> options-menu options-menu--id="options-menu-multiple-example" options-menu--HasToggleIcon="true"}}
  {{#> options-menu-toggle}}
    {{#> options-menu-toggle-text}}
      Sort by
    {{/options-menu-toggle-text}}
  {{/options-menu-toggle}}
  {{> options-menu-multiple}}
{{/options-menu}}

{{#> options-menu options-menu--IsExpanded="true" options-menu--id="options-menu-multiple-expanded-example" options-menu--HasToggleIcon="true"}}
  {{#> options-menu-toggle}}
    {{#> options-menu-toggle-text}}
      Sort by
    {{/options-menu-toggle-text}}
  {{/options-menu-toggle}}
  {{> options-menu-multiple}}
{{/options-menu}}
```

### Plain
```hbs
{{#> options-menu options-menu--id="options-menu-plain-disabled-example" options-menu-toggle--IsDisabled="true"}}
  {{#> options-menu-toggle options-menu-toggle--modifier="pf-m-plain" options-menu-toggle--attribute='aria-label="Sort by"'}}
    <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
  {{/options-menu-toggle}}
  {{> options-menu-single}}
{{/options-menu}}

{{#> options-menu options-menu--id="options-menu-plain-example"}}
  {{#> options-menu-toggle options-menu-toggle--modifier="pf-m-plain" options-menu-toggle--attribute='aria-label="Sort by"'}}
    <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
  {{/options-menu-toggle}}
  {{> options-menu-single}}
{{/options-menu}}

{{#> options-menu options-menu--IsExpanded="true" options-menu--id="options-menu-plain-expanded-example"}}
  {{#> options-menu-toggle options-menu-toggle--modifier="pf-m-plain" options-menu-toggle--attribute='aria-label="Sort by"'}}
    <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
  {{/options-menu-toggle}}
  {{> options-menu-single}}
{{/options-menu}}
```

### Align top
```hbs
{{#> options-menu options-menu--IsExpanded="true" options-menu--modifier="pf-m-top" options-menu--id="options-menu-top-example" options-menu--HasToggleIcon="true" options-menu--modifier="pf-m-align-right"}}
  {{#> options-menu-toggle}}
    {{#> options-menu-toggle-text}}
      Options menu
    {{/options-menu-toggle-text}}
  {{/options-menu-toggle}}
  {{> options-menu-single}}
{{/options-menu}}
```

### Align right
```hbs
{{#> options-menu options-menu--IsExpanded="true" options-menu--id="options-menu-align-right-example" options-menu--HasToggleIcon="true" options-menu--modifier="pf-m-align-right"}}
  {{#> options-menu-toggle}}
    {{#> options-menu-toggle-text}}
      Options menu
    {{/options-menu-toggle-text}}
  {{/options-menu-toggle}}
  {{> options-menu-single}}
{{/options-menu}}
```

### Plain with text
```hbs
{{#> options-menu options-menu--id="options-menu-disabled-text-example" options-menu--IsPlainWithText="true" options-menu-toggle--IsDisabled="true" options-menu--HasToggleIcon="true"}}
  {{#> options-menu-toggle}}
    {{#> options-menu-toggle-text}}
      Custom text
    {{/options-menu-toggle-text}}
  {{/options-menu-toggle}}
  {{> options-menu-single}}
{{/options-menu}}

{{#> options-menu options-menu--id="options-menu-plain-text-example" options-menu--IsPlainWithText="true" options-menu--HasToggleIcon="true"}}
  {{#> options-menu-toggle}}
    {{#> options-menu-toggle-text}}
      Custom text
    {{/options-menu-toggle-text}}
  {{/options-menu-toggle}}
  {{> options-menu-single}}
{{/options-menu}}

{{#> options-menu options-menu--id="options-menu-plain-text-expanded-example" options-menu--IsPlainWithText="true" options-menu--HasToggleIcon="true" options-menu--IsExpanded="true"}}
  {{#> options-menu-toggle}}
    {{#> options-menu-toggle-text}}
      Custom text
    {{/options-menu-toggle-text}}
  {{/options-menu-toggle}}
  {{> options-menu-single}}
{{/options-menu}}
```

### With groups
```hbs
{{#> options-menu options-menu--id="options-menu-groups" options-menu--IsExpanded="true" options-menu--HasToggleIcon="true"}}
  {{#> options-menu-toggle}}
    {{#> options-menu-toggle-text}}
      Options menu
    {{/options-menu-toggle-text}}
  {{/options-menu-toggle}}
  {{> options-menu-groups}}
{{/options-menu}}
```

### With groups and dividers between groups
```hbs
{{#> options-menu options-menu--id="options-menu-groups-and-dividers-between-groups" options-menu--IsExpanded="true" options-menu--HasToggleIcon="true" options-menu--HasGroupDividers="true"}}
  {{#> options-menu-toggle}}
    {{#> options-menu-toggle-text}}
      Options menu
    {{/options-menu-toggle-text}}
  {{/options-menu-toggle}}
  {{> options-menu-groups}}
{{/options-menu}}
```

### With groups and dividers between items
```hbs
{{#> options-menu options-menu--id="options-menu-groups-and-dividers-between-items" options-menu--IsExpanded="true" options-menu--HasToggleIcon="true" options-menu--HasDividersItems="true"}}
  {{#> options-menu-toggle}}
    {{#> options-menu-toggle-text}}
      Options menu
    {{/options-menu-toggle-text}}
  {{/options-menu-toggle}}
  {{> options-menu-groups}}
{{/options-menu}}
```

## Documentation
### Accessibility
*This section to be updated once the React implementation is complete.*

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role` or `aria` | `pf-v5-c-options-menu` |  accessibility notes. |
| `disabled` | `.pf-v5-c-options-menu__toggle`, `.pf-v5-c-options-menu__toggle-button` | Disables the options menu toggle and toggle button and removes it from keyboard focus. |
*Note:* The attribute `aria-selected="true"` should be set programmatically to the selected item(s).

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-options-menu` | `<div>` |  Initiates a custom options menu. |
| `.pf-v5-c-options-menu__toggle` | `<button>` |  Initiates a custom toggle. |
| `.pf-v5-c-options-menu__toggle-text` | `<span>` | Initiates a wrapper for toggle text.
| `.pf-v5-c-options-menu__toggle-icon` | `<i>` | Initiates the up/down arrow beside toggle text. |
| `.pf-v5-c-options-menu__toggle-button` | `<button>` | Initiates a custom toggle button for use when `.pf-v5-c-options-menu__toggle` is a `<div>` or non-interactive element. |
| `.pf-v5-c-options-menu__menu` | `<ul>` |  Initiates the custom options-menu menu. |
| `.pf-v5-c-options-menu__menu-item` | `<li>` |  Initiates the items in the custom options-menu menu. |
| `.pf-v5-c-options-menu__menu-item-icon` | `<i>` |  Initiates the icon to indicate selected menu items. |
| `.pf-v5-c-options-menu__group` | `<section>` | Defines a group of items in an options menu. **Required when there is more than one group in an options menu**. |
| `.pf-v5-c-options-menu__group-title` | `<h1>` | Defines the title for a group of items in an options menu. |
| `.pf-m-top` | `.pf-v5-c-options-menu` | Modifies to display the menu above the toggle. |
| `.pf-m-align-right` | `.pf-v5-c-options-menu__menu` | Modifies to display the menu aligned to the right edge of the toggle |
| `.pf-m-expanded` | `.pf-v5-c-options-menu` |  Modifies for the expanded state. |
| `.pf-m-static` | `.pf-v5-c-options-menu__menu` | Modifies the menu to be statically positioned to support custom positioning. |
| `.pf-m-plain` | `.pf-v5-c-options-menu__toggle` |  Modifies to display the toggle with no border. **Note:** Can be combined with `.pf-m-text` to create a normal text toggle with no border. |
| `.pf-m-disabled` | `.pf-v5-c-options-menu__toggle` | Modifies to display the options menu toggle as disabled. This applies to `pf-v5-c-options-menu__toggle` and should not be used in lieu of the `disabled` attribute on `pf-v5-c-options-menu__toggle`. When this is used, `disabled` should also be added to any form elements in `.pf-v5-c-options-menu__toggle` |
| `.pf-m-text` | `.pf-v5-c-options-menu__toggle` |  For use when the `.pf-v5-c-options-menu__toggle` is a `<div>` or some non-interactive elment, and you're using a custom `.pf-v5-c-options-menu__toggle-button` to toggle the options menu. |
| `.pf-m-active` | `.pf-v5-c-options-menu__toggle` | Forces display of the active state of the toggle. |
| `.pf-m-selected` | `.pf-v5-c-options-menu__menu-item` | Modifies the menu item for the selected state. |
