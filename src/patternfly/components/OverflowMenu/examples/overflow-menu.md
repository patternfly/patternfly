---
id: Overflow menu
section: components
cssPrefix: pf-v6-c-overflow-menu
---

import './overflow-menu.css'

## Introduction
The overflow menu component condenses actions inside `.pf-v6-c-overflow-menu__content` container into a single menu button wrapped in `.pf-v6-c-overflow-menu__control`.

The overflow menu relies on groups (`.pf-v6-c-overflow-menu__group`) and items (`.pf-v6-c-overflow-menu__item`), with default spacer values. Groups and items can be siblings and/or items can be nested within groups. Modifier selectors adjust spacing based on the type of group. Each modifier applies a unique CSS variable, therefore, the base spacer value for all elements can be customized and item/groups spacers can be themed individually. The default spacer value for items and groups is set to `--pf-v6-c-toolbar--spacer--base`, whose value is `--pf-v6-global--spacer--md` or 16px.

### Simple condensed
```hbs
{{#> overflow-menu menu-toggle--IsCondensed=true overflow-menu--IsExpanded=true overflow-menu--id='overflow-menu-simple'}}
  {{#> overflow-menu-control menu-toggle--IsExpanded=true menu-toggle--aria-label='Generic options'}}
    {{> overflow-menu-toggle}}
    {{> overflow-menu-menu}}
  {{/overflow-menu-control}}
{{/overflow-menu}}
```

### Simple
```hbs
{{#> overflow-menu overflow-menu--id="overflow-menu-simple-expanded"}}
  {{#> overflow-menu-content}}
    {{#> overflow-menu-item}}
      Item 1
    {{/overflow-menu-item}}
    {{#> overflow-menu-item}}
      Item 2
    {{/overflow-menu-item}}
    {{#> overflow-menu-group}}
      {{#> overflow-menu-item}}
        Item 3
      {{/overflow-menu-item}}
      {{#> overflow-menu-item}}
        Item 4
      {{/overflow-menu-item}}
      {{#> overflow-menu-item}}
        Item 5
      {{/overflow-menu-item}}
    {{/overflow-menu-group}}
  {{/overflow-menu-content}}
{{/overflow-menu}}
```

### Default spacing for items and groups:

| Class | CSS Variable | Computed Value |
| -- | -- | -- |
| `.pf-v6-c-overflow-menu__group` | `--pf-v6-c-overflow-menu__group--spacer` | `16px` |
| `.pf-v6-c-overflow-menu__item` | `--pf-v6-c-overflow-menu__item--spacer` | `16px` |


### Overflow menu item types

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-overflow-menu` | `<div>` | Initiates an overflow menu. **Required** |
| `.pf-v6-c-overflow-menu__content` | `<div>` | Initiates an overflow menu content section. **Required** |
| `.pf-v6-c-overflow-menu__control` | `<div>` | Initiates the overflow menu control. **Required** |
| `.pf-v6-c-overflow-menu__group` | `<div>` | Initiates an overflow menu group. |
| `.pf-v6-c-overflow-menu__item` | `<div>` | Initiates an overflow menu item. **Required** |

### Group types
```hbs
{{#> overflow-menu overflow-menu--id="overflow-menu-button-group-example" overflow-menu-button--aria-label="Options"}}
  {{#> overflow-menu-content}}
    {{#> overflow-menu-group}}
      {{#> overflow-menu-item}}
        Item 1
      {{/overflow-menu-item}}
      {{#> overflow-menu-item}}
        Item 2
      {{/overflow-menu-item}}
      {{#> overflow-menu-item}}
        Item 3
      {{/overflow-menu-item}}
    {{/overflow-menu-group}}
    {{#> overflow-menu-group overflow-menu-group--modifier="pf-m-button-group"}}
      {{#> overflow-menu-item}}
        {{#> button button--modifier="pf-m-primary"}}
          Primary
        {{/button}}
      {{/overflow-menu-item}}
      {{#> overflow-menu-item}}
        {{#> button button--modifier="pf-m-secondary"}}
          Secondary
        {{/button}}
      {{/overflow-menu-item}}
      {{#> overflow-menu-item}}
        {{#> button button--modifier="pf-m-tertiary"}}
          Tertiary
        {{/button}}
      {{/overflow-menu-item}}
    {{/overflow-menu-group}}
    {{#> overflow-menu-group overflow-menu-group--modifier="pf-m-icon-button-group"}}
      {{#> overflow-menu-item}}
        {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Align left"'}}
          <i class="fas fa-align-left" aria-hidden="true"></i>
        {{/button}}
      {{/overflow-menu-item}}
      {{#> overflow-menu-item}}
        {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Align center"'}}
          <i class="fas fa-align-center" aria-hidden="true"></i>
        {{/button}}
      {{/overflow-menu-item}}
      {{#> overflow-menu-item}}
        {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Align right"'}}
          <i class="fas fa-align-right" aria-hidden="true"></i>
        {{/button}}
      {{/overflow-menu-item}}
    {{/overflow-menu-group}}
  {{/overflow-menu-content}}
{{/overflow-menu}}
```

The action group consists of a primary and secondary action. Any additional actions are part of the overflow control menu.

### Overflow menu group types

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-overflow-menu__group` | `<div>` | Initiates an overflow menu component group. |
| `.pf-m-button-group` | `.pf-v6-c-overflow-menu__group` | Modifies overflow menu group spacing. Spacer value is set to `var(--pf-v6-c-overflow-menu__group--m-button-group--spacer)`. Child `.pf-v6-c-button` spacer value is set to `var(--pf-v6-c-overflow-menu__group--m-button-group--space-items)`. |
| `.pf-m-icon-button-group` | `.pf-v6-c-overflow-menu__group` | Modifies overflow menu group spacing. Spacer value is set to `var(--pf-v6-c-overflow-menu__group--m-icon-button-group--spacer)`. Child `.pf-v6-c-button.pf-m-button-plain` spacer value is set to `var(--pf-v6-c-overflow-menu__group--m-icon-button-group--space-items)`. |

### Additional options in menu (hidden)
```hbs
{{#> overflow-menu overflow-menu--id="overflow-menu-simple-additional-options-hidden" overflow-menu--IsCondensed=true menu--IsExpanded=true}}
  {{#> overflow-menu-control menu-toggle--aria-label="Additional options in menu toggle"}}
    {{> overflow-menu-toggle}}
    {{#> overflow-menu-menu}}
      {{> menu-list-item menu-list-item--text='Primary'}}
      {{> menu-list-item menu-list-item--text='Secondary'}}
      {{> menu-list-item menu-list-item--text='Tertiary'}}
    {{/overflow-menu-menu}}
  {{/overflow-menu-control}}
{{/overflow-menu}}
```

### Additional options in menu (visible)
```hbs
{{#> overflow-menu overflow-menu--id="overflow-menu-simple-additional-options-visible"}}
  {{#> overflow-menu-content}}
    {{#> overflow-menu-group overflow-menu-group--modifier="pf-m-button-group"}}
      {{#> overflow-menu-item}}
        {{#> button button--modifier="pf-m-primary"}}
          Primary
        {{/button}}
      {{/overflow-menu-item}}
      {{#> overflow-menu-item}}
        {{#> button button--modifier="pf-m-secondary"}}
          Secondary
        {{/button}}
      {{/overflow-menu-item}}
      {{#> overflow-menu-item}}
        {{#> button button--modifier="pf-m-tertiary"}}
          Tertiary
        {{/button}}
      {{/overflow-menu-item}}
    {{/overflow-menu-group}}
    {{#> overflow-menu-group overflow-menu-group--modifier="pf-m-icon-button-group"}}
      {{#> overflow-menu-item}}
        {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Align left"'}}
          <i class="fas fa-align-left" aria-hidden="true"></i>
        {{/button}}
      {{/overflow-menu-item}}
      {{#> overflow-menu-item}}
        {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Align center"'}}
          <i class="fas fa-align-center" aria-hidden="true"></i>
        {{/button}}
      {{/overflow-menu-item}}
      {{#> overflow-menu-item}}
        {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Align right"'}}
          <i class="fas fa-align-right" aria-hidden="true"></i>
        {{/button}}
      {{/overflow-menu-item}}
    {{/overflow-menu-group}}
  {{/overflow-menu-content}}
  {{#> overflow-menu-control menu--IsExpanded=true menu-toggle--aria-label="Additional options toggle"}}
    {{> overflow-menu-toggle}}
    {{#> overflow-menu-menu}}
      {{> menu-list-item menu-list-item--text='Action 7'}}
    {{/overflow-menu-menu}}
  {{/overflow-menu-control}}
{{/overflow-menu}}
```

## Persistent configuration

### Persistent additional options (hidden)
```hbs
{{#> overflow-menu overflow-menu--id="overflow-menu-persistent-hidden"}}
  {{#> overflow-menu-content}}
    {{#> overflow-menu-group overflow-menu-group--modifier="pf-m-button-group"}}
      {{#> overflow-menu-item}}
        {{#> button button--modifier="pf-m-primary"}}
          Primary
        {{/button}}
      {{/overflow-menu-item}}
    {{/overflow-menu-group}}
  {{/overflow-menu-content}}
  {{#> overflow-menu-control menu--IsExpanded=true menu-toggle--aria-label="menu with additional options"}}
    {{> overflow-menu-toggle}}
    {{#> overflow-menu-menu}}
      {{> menu-list-item menu-list-item--text='Secondary'}}
      {{> menu-list-item menu-list-item--text='Tertiary'}}
      {{> menu-list-item menu-list-item--text='Action 4'}}
    {{/overflow-menu-menu}}
  {{/overflow-menu-control}}
{{/overflow-menu}}
```

### Persistent additional options (visible)
```hbs
{{#> overflow-menu overflow-menu--id="overflow-menu-persistent-visible-example"}}
  {{#> overflow-menu-content}}
    {{#> overflow-menu-group overflow-menu-group--modifier="pf-m-button-group"}}
      {{#> overflow-menu-item}}
        {{#> button button--modifier="pf-m-primary"}}
          Primary
        {{/button}}
      {{/overflow-menu-item}}
      {{#> overflow-menu-item}}
        {{#> button button--modifier="pf-m-secondary"}}
          Secondary
        {{/button}}
      {{/overflow-menu-item}}
      {{#> overflow-menu-item}}
        {{#> button button--modifier="pf-m-tertiary"}}
          Tertiary
        {{/button}}
      {{/overflow-menu-item}}
    {{/overflow-menu-group}}
  {{/overflow-menu-content}}
  {{#> overflow-menu-control menu--IsExpanded=true menu-toggle--aria-label="Persistent options toggle"}}
    {{> overflow-menu-toggle}}
    {{#> overflow-menu-menu}}
      {{> menu-list-item menu-list-item--text='Action 4'}}
    {{/overflow-menu-menu}}
  {{/overflow-menu-control}}
{{/overflow-menu}}
```

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-overflow-menu` | `<div>` | Initiates an overflow menu. **Required** |
| `.pf-v6-c-overflow-menu__content` | `<div>` | Initiates an overflow menu content section. **Required** |
| `.pf-v6-c-overflow-menu__control` | `<div>` | Initiates the overflow menu control. **Required** |
| `.pf-v6-c-overflow-menu__group` | `<div>` | Initiates an overflow menu group. |
| `.pf-v6-c-overflow-menu__item` | `<div>` | Initiates an overflow menu item. **Required** |
| `.pf-m-button-group` | `.pf-v6-c-overflow-menu__group` | Modifies overflow menu group spacing. Spacer value is set to `var(--pf-v6-c-overflow-menu__group--m-button-group--spacer)`. Child spacer value is set to `var(--pf-v6-c-overflow-menu__group--m-button-group--space-items)`. |
| `.pf-m-icon-button-group` | `.pf-v6-c-overflow-menu__group` | Modifies overflow menu group spacing. Spacer value is set to `var(--pf-v6-c-overflow-menu__group--m-icon-button-group--spacer)`. Child spacer value is set to `var(--pf-v6-c-overflow-menu__group--m-icon-button-group--space-items)`. |
