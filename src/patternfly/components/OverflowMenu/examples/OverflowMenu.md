---
title: Overflow Menu
section: components
cssPrefix: pf-c-overflow-menu
---

# Design
The overflow menu component condenses actions inside `.pf-c-overflow-menu__content` container into a single dropdown button wrapped in `.pf-c-overflow-menu__control`, then exposes those actions at a defined breakpoint `.pf-m-show{-on-[md, lg, xl]}`.

The overflow menu relies on groups (`.pf-c-overflow-menu__group`) and items (`.pf-c-overflow-menu__item`), with default spacer values. Groups and items can be siblings and/or items can be nested within groups. Modifier selectors adjust spacing based on the type of group. Each modifier applies a unique CSS variable, therefore, the base spacer value for all elements can be customized and item/groups spacers can be themed individually. The default spacer value for items and groups is set to `--pf-c-data-toolbar--spacer--base`, whose value is `--pf-global--spacer--md` or 16px.


```hbs title=Overflow-menu-simple-(responsive)
{{#> overflow-menu overflow-menu--modifier="pf-m-show-on-lg" overflow-menu--id="overflow-menu-simple-example" overflow-menu-button--aria-label="Generic options" overflow-menu-dropdown-button-aria-expanded="aria-expanded=true"}}
  {{#> overflow-menu-content}}
    {{#> overflow-menu-item}}
      Item
    {{/overflow-menu-item}}

    {{#> overflow-menu-item}}
      Item
    {{/overflow-menu-item}}

    {{#> overflow-menu-group}}
      {{#> overflow-menu-item}}
        Item
      {{/overflow-menu-item}}

      {{#> overflow-menu-item}}
        Item
      {{/overflow-menu-item}}

      {{#> overflow-menu-item}}
        Item
      {{/overflow-menu-item}}

    {{/overflow-menu-group}}
  {{/overflow-menu-content}}

  {{#> overflow-menu-control}}
    {{#> overflow-menu-dropdown-item}}
      Action
    {{/overflow-menu-dropdown-item}}
    {{#> overflow-menu-dropdown-item overflow-menu-dropdown-item--IsShared="true"}}
      Item 1
    {{/overflow-menu-dropdown-item}}
    {{#> overflow-menu-dropdown-item overflow-menu-dropdown-item--IsShared="true"}}
      Item 2
    {{/overflow-menu-dropdown-item}}
    {{#> overflow-menu-dropdown-item overflow-menu-dropdown-item--IsShared="true"}}
      Item 3
    {{/overflow-menu-dropdown-item}}
    {{#> overflow-menu-dropdown-item overflow-menu-dropdown-item--IsShared="true"}}
      Item 4
    {{/overflow-menu-dropdown-item}}
    {{#> overflow-menu-dropdown-item overflow-menu-dropdown-item--IsShared="true"}}
      Item 5
    {{/overflow-menu-dropdown-item}}
  {{/overflow-menu-control}}
{{/overflow-menu}}
```

```hbs title=Overflow-menu-group-types
{{#> overflow-menu overflow-menu--id="overflow-menu-button-group-example" overflow-menu--modifier="pf-m-show-on-xl" overflow-menu-button--aria-label="Options"}}
  {{#> overflow-menu-content}}
    {{#> overflow-menu-group}}
      {{#> overflow-menu-item}}
        Item
      {{/overflow-menu-item}}
      {{#> overflow-menu-item}}
        Item
      {{/overflow-menu-item}}
      {{#> overflow-menu-item}}
        Item
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

  {{#> overflow-menu-control}}
    {{#> overflow-menu-dropdown-item overflow-menu-dropdown-item--IsShared="true"}}
      Item 1
    {{/overflow-menu-dropdown-item}}
    {{#> overflow-menu-dropdown-item overflow-menu-dropdown-item--IsShared="true"}}
      Item 2
    {{/overflow-menu-dropdown-item}}
    {{#> overflow-menu-dropdown-item overflow-menu-dropdown-item--IsShared="true"}}
      Item 3
    {{/overflow-menu-dropdown-item}}
    {{#> overflow-menu-dropdown-item overflow-menu-dropdown-item--IsShared="true"}}
      Primary
    {{/overflow-menu-dropdown-item}}
    {{#> overflow-menu-dropdown-item overflow-menu-dropdown-item--IsShared="true"}}
      Secondary
    {{/overflow-menu-dropdown-item}}
    {{#> overflow-menu-dropdown-item overflow-menu-dropdown-item--IsShared="true"}}
      Tertiary
    {{/overflow-menu-dropdown-item}}
    {{#> overflow-menu-dropdown-item overflow-menu-dropdown-item--IsShared="true"}}
      Icon action 1
    {{/overflow-menu-dropdown-item}}
    {{#> overflow-menu-dropdown-item overflow-menu-dropdown-item--IsShared="true"}}
      Icon action 2
    {{/overflow-menu-dropdown-item}}
    {{#> overflow-menu-dropdown-item overflow-menu-dropdown-item--IsShared="true"}}
      Icon action 3
    {{/overflow-menu-dropdown-item}}
  {{/overflow-menu-control}}
{{/overflow-menu}}
```

```hbs title=Overflow-menu-multiple-groups-additional-options
{{#> overflow-menu dropdown--IsExpanded="false" overflow-menu--id="overflow-menu-simple-additional-options-example" overflow-menu-button--aria-label="Options" overflow-menu--showOn="lg" overflow-menu-dropdown-button-aria-expanded="aria-expanded=true"}}

  {{!-- Menu content --}}
  {{#> overflow-menu-content}}

    {{!-- Button group --}}
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

    {{!-- Button group --}}
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

  {{#> overflow-menu-control overflow-menu-control--HasAdditionalOptions="true"}}
    {{#> overflow-menu-dropdown-item overflow-menu-dropdown-item--IsShared="true"}}
      Primary
    {{/overflow-menu-dropdown-item}}
    {{#> overflow-menu-dropdown-item overflow-menu-dropdown-item--IsShared="true"}}
      Secondary
    {{/overflow-menu-dropdown-item}}
    {{#> overflow-menu-dropdown-item overflow-menu-dropdown-item--IsShared="true"}}
      Tertiary
    {{/overflow-menu-dropdown-item}}
    {{#> overflow-menu-dropdown-item overflow-menu-dropdown-item--IsShared="true"}}
      Action 4
    {{/overflow-menu-dropdown-item}}
    {{#> overflow-menu-dropdown-item overflow-menu-dropdown-item--IsShared="true"}}
      Action 5
    {{/overflow-menu-dropdown-item}}
    {{#> overflow-menu-dropdown-item overflow-menu-dropdown-item--IsShared="true"}}
      Action 6
    {{/overflow-menu-dropdown-item}}
    {{#> overflow-menu-dropdown-item}}
      Action 7
    {{/overflow-menu-dropdown-item}}
  {{/overflow-menu-control}}
{{/overflow-menu}}
```

```hbs title=Overflow-menu-persistent-additional-options
{{#> overflow-menu overflow-menu--id="overflow-menu-persistent-example" overflow-menu--modifier="pf-m-show-on-md" overflow-menu-button--aria-label="Options"  overflow-menu-control--HasAdditionalOptions="true"}}
  {{#> overflow-menu-content}}
    {{#> overflow-menu-group overflow-menu-group--modifier="pf-m-button-group pf-m-persistent"}}
      {{#> overflow-menu-item overflow-menu-item--modifier="pf-m-persistent"}}
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

  {{#> overflow-menu-control}}
    {{#> overflow-menu-dropdown-item overflow-menu-dropdown-item--IsShared="true"}}
      Primary
    {{/overflow-menu-dropdown-item}}
    {{#> overflow-menu-dropdown-item overflow-menu-dropdown-item--IsShared="true"}}
      Secondary
    {{/overflow-menu-dropdown-item}}
    {{#> overflow-menu-dropdown-item overflow-menu-dropdown-item--IsShared="true"}}
      Tertiary
    {{/overflow-menu-dropdown-item}}
    {{#> overflow-menu-dropdown-item}}
      Action 4
    {{/overflow-menu-dropdown-item}}
  {{/overflow-menu-control}}
{{/overflow-menu}}
```

# Documentation
### Default spacing for items and groups:

| Class | CSS Variable | Computed Value |
| -- | -- | -- |
| `.pf-c-overflow-menu__item` | `--pf-c-overflow-menu__item--spacer` | `16px` |
| `.pf-c-overflow-menu__group` | `--pf-c-overflow-menu__group--spacer` | `16px` |

### Toggle group accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-c-overflow-menu__item`, `.pf-c-overflow-menu__group`, `.pf-c-overflow-menu__shared-item` |  Indicates that the overflow menu element is hidden. **Required** |

### Overflow menu item types

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-overflow-menu__item` | `<div>` | Initiates the overflow menu component item. **Required** |
| `.pf-c-overflow-menu__group` | `<div>` | Initiates the overflow menu component group. |

The action group consists of a primary and secondary action. Any additional actions are part of the overflow control dropdown.

### Overflow menu group types
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-overflow-menu__group` | `<div>` | Initiates the overflow menu component group. |
| `.pf-m-button-group` | `.pf-c-overflow-menu__group` | Modifies overflow menu group spacing. Spacer value is set to `var(--pf-c-overflow-menu__group--m-button-group--spacer)`. Child `.pf-c-button` spacer value is set to `var(--pf-c-overflow-menu__group--m-button-group--space-items)`. |
| `.pf-m-icon-button-group` | `.pf-c-overflow-menu__group` | Modifies overflow menu group spacing. Spacer value is set to `var(--pf-c-overflow-menu__group--m-icon-button-group--spacer)`. Child `.pf-c-button.pf-m-button-plain` spacer value is set to `var(--pf-c-overflow-menu__group--m-icon-button-group--space-items)`. |

When additional options in the overflow menu exist, the overflow dropdown persists. When the viewport expands beyond the prescribed breakpoint, the overflow dropdown remains visible.

### Overflow menu has additional options
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-additional-options` | `.pf-c-overflow-menu__control` | Modifies overflow menu control visibility. |

When an item is a member of an overflow menu, but needs to remain visible, the `.pf-m-persistent` class is applied to the item and parent group, if applicable.

### Overflow menu has additional options


| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-persistent` | `.pf-c-overflow-menu__item`, `.pf-c-overflow-menu__group` | Modifies overflow menu group/item visibility. |

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-c-overflow-menu__item`, `.pf-c-overflow-menu__group`, `.pf-c-overflow-menu__shared-item` |  Indicates that the overflow menu element is hidden. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-overflow-menu` | `<div>` |  Initiates the overflow menu component. **Required** |
| `.pf-c-overflow-menu__item` | `<div>` | Initiates an overflow menu item. **Required** |
| `.pf-c-overflow-menu__group` | `<div>` | Initiates an overflow menu group. |
| `.pf-c-overflow-menu__content` | `<div>` | Initiates an overflow menu content container. |
| `.pf-c-overflow-menu__control` | `<div>` | Initiates an overflow menu control element. |
| `.pf-c-overflow-menu__shared-item` | `.pf-c-dropdown__menu > li` | Initiates a shared item element. This class controls when a member of the `.pf-c-overflow-menu__control` dropdown shows and hides the list item. |
| `.pf-m-button-group` | `.pf-c-overflow-menu__group` | Modifies overflow menu group spacing. Spacer value is set to `var(--pf-c-overflow-menu__group--m-button-group--spacer)`. Child spacer value is set to `var(--pf-c-overflow-menu__group--m-button-group--space-items)`. |
| `.pf-m-icon-button-group` | `.pf-c-overflow-menu__group` | Modifies overflow menu group spacing. Spacer value is set to `var(--pf-c-overflow-menu__group--m-icon-button-group--spacer)`. Child spacer value is set to `var(--pf-c-overflow-menu__group--m-icon-button-group--space-items)`. |
| `.pf-m-additional-options` | `.pf-c-overflow-menu__control` | Modifies overflow menu control visibility. |
| `.pf-m-persistent` | `.pf-c-overflow-menu__item`, `.pf-c-overflow-menu__group` | Modifies overflow menu group/item visibility. |
| `.pf-m-show{-on-[md, lg, xl]}` | `.pf-c-overflow-menu` |  Specifies at which breakpoint overflow menu items and groups are shown. **Required** |
