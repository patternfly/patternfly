---
title: Options Menu
section: components
cssPrefix: pf-c-options-menu
---

import './OptionsMenu.css'

## Examples
```hbs title=Single-option
{{#> options-menu id="options-menu-single-example" options-menu--HasToggleIcon="true"}}
  {{#> options-menu-toggle}}
    <span class="pf-c-options-menu__toggle-text">
      Options menu
    </span>
  {{/options-menu-toggle}}
  {{> options-menu-single}}
{{/options-menu}}

{{#> options-menu options-menu--IsExpanded="true" id="options-menu-single-expanded-example" options-menu--HasToggleIcon="true"}}
  {{#> options-menu-toggle}}
    <span class="pf-c-options-menu__toggle-text">
      Options menu
    </span>
  {{/options-menu-toggle}}
  {{> options-menu-single}}
{{/options-menu}}
```

```hbs title=Disabled
{{#> options-menu id="options-menu-single-disabled-example" options-menu--HasToggleIcon="true" options-menu-toggle--IsDisabled="true"}}
  {{#> options-menu-toggle}}
    <span class="pf-c-options-menu__toggle-text">
      Disabled options menu
    </span>
  {{/options-menu-toggle}}
{{/options-menu}}
```

```hbs title=Multiple-options
{{#> options-menu id="options-menu-multiple-example" options-menu--HasToggleIcon="true"}}
  {{#> options-menu-toggle}}
    <span class="pf-c-options-menu__toggle-text">
      Sort by
    </span>
  {{/options-menu-toggle}}
  {{> options-menu-multiple}}
{{/options-menu}}

{{#> options-menu options-menu--IsExpanded="true" id="options-menu-multiple-expanded-example" options-menu--HasToggleIcon="true"}}
  {{#> options-menu-toggle}}
    <span class="pf-c-options-menu__toggle-text">
      Sort by
    </span>
  {{/options-menu-toggle}}
  {{> options-menu-multiple}}
{{/options-menu}}
```
     
```hbs title=Plain
{{#> options-menu id="options-menu-plain-disabled-example" options-menu-toggle--IsDisabled="true"}}
  {{#> options-menu-toggle options-menu-toggle--modifier="pf-m-plain" options-menu-toggle--attribute='aria-label="Sort by"'}}
    <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
  {{/options-menu-toggle}}
  {{> options-menu-single}}
{{/options-menu}}

{{#> options-menu id="options-menu-plain-example"}}
  {{#> options-menu-toggle options-menu-toggle--modifier="pf-m-plain" options-menu-toggle--attribute='aria-label="Sort by"'}}
    <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
  {{/options-menu-toggle}}
  {{> options-menu-single}}
{{/options-menu}}

{{#> options-menu options-menu--IsExpanded="true" id="options-menu-plain-expanded-example"}}
  {{#> options-menu-toggle options-menu-toggle--modifier="pf-m-plain" options-menu-toggle--attribute='aria-label="Sort by"'}}
    <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
  {{/options-menu-toggle}}
  {{> options-menu-single}}
{{/options-menu}}
```

```hbs title=Align-top
{{#> options-menu options-menu--IsExpanded="true" options-menu--modifier="pf-m-top" id="options-menu-top-example" options-menu--HasToggleIcon="true" options-menu--modifier="pf-m-align-right"}}
  {{#> options-menu-toggle}}
    <span class="pf-c-options-menu__toggle-text">
      Options menu
    </span>
  {{/options-menu-toggle}}
  {{> options-menu-single}}
{{/options-menu}}
```

```hbs title=Align-right
{{#> options-menu options-menu--IsExpanded="true" id="options-menu-align-right-example" options-menu--HasToggleIcon="true" options-menu--modifier="pf-m-align-right"}}
  {{#> options-menu-toggle}}
    <span class="pf-c-options-menu__toggle-text">
      Options menu
    </span>
  {{/options-menu-toggle}}
  {{> options-menu-single}}
{{/options-menu}}
```

```hbs title=Plain-with-text
{{#> options-menu id="options-menu-disabled-text-example" options-menu--IsText="true" options-menu-toggle--IsDisabled="true"}}
  {{#> options-menu-toggle options-menu-toggle--type="div" options-menu-toggle--modifier="pf-m-plain"}}
    <span class="pf-c-options-menu__toggle-text">
      Custom text
    </span>
    {{> options-menu-toggle-button aria-label="Options menu"}}
  {{/options-menu-toggle}}
  {{> options-menu-single}}
{{/options-menu}}

{{#> options-menu id="options-menu-plain-text-example" options-menu--IsText="true"}}
  {{#> options-menu-toggle options-menu-toggle--type="div" options-menu-toggle--modifier="pf-m-plain"}}
    <span class="pf-c-options-menu__toggle-text">
      Custom text
    </span>
    {{> options-menu-toggle-button aria-label="Options menu"}}
  {{/options-menu-toggle}}
  {{> options-menu-single}}
{{/options-menu}}

{{#> options-menu options-menu--IsExpanded="true" id="options-menu-plain-text-expanded-example" options-menu--IsText="true"}}
  {{#> options-menu-toggle options-menu-toggle--type="div" options-menu-toggle--modifier="pf-m-plain"}}
    <span class="pf-c-options-menu__toggle-text">
      Custom text
    </span>
    {{> options-menu-toggle-button aria-label="Options menu"}}
  {{/options-menu-toggle}}
  {{> options-menu-single}}
{{/options-menu}}
```

## Documentation
### Accessibility
*This section to be updated once the React implementation is complete.*

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role` or `aria` | `pf-c-options-menu` |  accessibility notes. |
| `disabled` | `.pf-c-options-menu__toggle`, `.pf-c-options-menu__toggle-button` | Disables the options menu toggle and toggle button and removes it from keyboard focus. |
*Note:* The attribute `aria-selected="true"` should be set programmatically to the selected item(s).

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-options-menu` | `<div>` |  Initiates a custom options menu. |
| `.pf-c-options-menu__toggle` | `<button>` |  Initiates a custom toggle. |
| `.pf-c-options-menu__toggle-text` | `<span>` | Initiates a wrapper for toggle text.
| `.pf-c-options-menu__toggle-icon` | `<i>` | Initiates the up/down arrow beside toggle text. |
| `.pf-c-options-menu__toggle-button` | `<button>` | Initiates a custom toggle button for use when `.pf-c-options-menu__toggle` is a `<div>` or non-interactive element. |
| `.pf-c-options-menu__menu` | `<ul>` |  Initiates the custom options-menu dropdown menu. |
| `.pf-c-options-menu__menu-item` | `<li>` |  Initiates the items in the custom options-menu dropdown menu. |
| `.pf-c-options-menu__menu-item-icon` | `<i>` |  Initiates the icon to indicate selected menu items. |
| `.pf-c-options-menu__separator` | `<li>` | Initiates a separator in the menu list. |
| `.pf-m-top` | `.pf-c-options-menu` | Modifies to display the menu above the toggle. |
| `.pf-m-align-right` | `.pf-c-options-menu__menu` | Modifies to display the menu aligned to the right edge of the toggle |
| `.pf-m-expanded` | `.pf-c-options-menu` |  Modifies for the expanded state. |
| `.pf-m-hover` | `.pf-c-options-menu__toggle` | Modifies for the hover state. |
| `.pf-m-active` | `.pf-c-options-menu__toggle` | Modifies for the active state. |
| `.pf-m-focus` | `.pf-c-options-menu__toggle` | Modifies for the focus state. |
| `.pf-m-plain` | `.pf-c-options-menu__toggle` |  Modifies to display the toggle with no border. |
| `.pf-m-disabled` | `.pf-c-options-menu__toggle` | Modifies to display the options menu toggle as disabled. This applies to `pf-c-options-menu__toggle` and should not be used in lieu of the `disabled` attribute on `pf-c-options-menu__toggle`. When this is used, `disabled` should also be added to any form elements in `.pf-c-options-menu__toggle` |
| `.pf-m-text` | `.pf-c-options-menu__toggle` |  For use when the `.pf-c-options-menu__toggle` is a `<div>` or some non-interactive elment, and you're using a custom `.pf-c-options-menu__toggle-button` to toggle the options menu. |
