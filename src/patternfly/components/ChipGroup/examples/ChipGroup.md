---
title: Chip group
section: components
cssPrefix: pf-c-chip-group
---

## Examples
```hbs title=Collapsed
{{#> chip-group chip-group--modifier="pf-m-toolbar" chip-group--id="toolbar-collapsed"}}
  {{#> chip-group-list-item }}
    {{#> chip-group-label}}
      Category one
    {{/chip-group-label}}
    {{#> chip-group newcontext}}
      {{#> chip}}
        {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_one_toolbar_collapsed"')}}
          Chip one
        {{/chip-text}}
        {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_one_toolbar_collapsed ' chip-group--id 'chip_one_toolbar_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_one_toolbar_collapsed"')}}
          <i class="fas fa-times-circle" aria-hidden="true"></i>
        {{/button}}
      {{/chip}}
      {{#> chip}}
        {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_two_toolbar_collapsed"')}}
          Chip two
        {{/chip-text}}
        {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_two_toolbar_collapsed ' chip-group--id 'chip_two_toolbar_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_two_toolbar_collapsed"')}}
          <i class="fas fa-times-circle" aria-hidden="true"></i>
        {{/button}}
      {{/chip}}
      {{#> chip}}
        {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_three_toolbar_collapsed"')}}
          Chip three
        {{/chip-text}}
        {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_three_toolbar_collapsed ' chip-group--id 'chip_three_toolbar_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_three_toolbar_collapsed"')}}
          <i class="fas fa-times-circle" aria-hidden="true"></i>
        {{/button}}
      {{/chip}}
      {{#> chip}}
        {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_four_toolbar_collapsed"')}}
          Chip four
        {{/chip-text}}
        {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_four_toolbar_collapsed ' chip-group--id 'chip_four_toolbar_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_four_toolbar_collapsed"')}}
          <i class="fas fa-times-circle" aria-hidden="true"></i>
        {{/button}}
      {{/chip}}
    {{/chip-group}}
  {{/chip-group-list-item}}
  {{#> chip chip--modifier="pf-m-overflow"}}
    {{#> button button--modifier="pf-m-plain"}}
      {{#> chip-text}}
        3 more
      {{/chip-text}}
    {{/button}}
  {{/chip}}
{{/chip-group}}
```

```hbs title=Expanded
{{#> chip-group chip-group--modifier="pf-m-toolbar" chip-group--id="toolbar-expanded"}}
{{#> chip-group-list-item}}
  {{#> chip-group-label}}
    Category one
  {{/chip-group-label}}
    {{#> chip-group newcontext}}
      {{#> chip}}
      {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_one_toolbar"')}}
        Chip one
      {{/chip-text}}
      {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_one_toolbar ' chip-group--id 'chip_one_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_one_toolbar"')}}
        <i class="fas fa-times-circle" aria-hidden="true"></i>
      {{/button}}
      {{/chip}}
      {{#> chip}}
        {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_two_toolbar"')}}
          Chip two
        {{/chip-text}}
        {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_two_toolbar ' chip-group--id 'chip_two_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_two_toolbar"')}}
          <i class="fas fa-times-circle" aria-hidden="true"></i>
        {{/button}}
      {{/chip}}
      {{#> chip}}
        {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_three_toolbar"')}}
          Chip three
        {{/chip-text}}
        {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_three_toolbar ' chip-group--id 'chip_three_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_three_toolbar"')}}
          <i class="fas fa-times-circle" aria-hidden="true"></i>
        {{/button}}
      {{/chip}}
      {{#> chip}}
        {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_four_toolbar"')}}
          Chip four
        {{/chip-text}}
        {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_four_toolbar ' chip-group--id 'chip_four_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_four_toolbar"')}}
          <i class="fas fa-times-circle" aria-hidden="true"></i>
        {{/button}}
      {{/chip}}
    {{/chip-group}}
    {{/chip-group-list-item}}
    {{#> chip-group-list-item}}
  {{#> chip-group-label}}
      Category two
  {{/chip-group-label}}
  {{#> chip-group newcontext}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_five_toolbar"')}}
      Chip one
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_five_toolbar ' chip-group--id 'chip_five_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_five_toolbar"')}}
      <i class="fas fa-times-circle" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_six_toolbar"')}}
      Chip two
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_six_toolbar ' chip-group--id 'chip_six_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_six_toolbar"')}}
      <i class="fas fa-times-circle" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_seven_toolbar"')}}
      Chip three
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_seven_toolbar ' chip-group--id 'chip_seven_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_seven_toolbar"')}}
      <i class="fas fa-times-circle" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
{{/chip-group}}
{{/chip-group-list-item}}
{{/chip-group}}
```

```hbs title=Closable
{{#> chip-group chip-group--modifier="pf-m-toolbar" chip-group--id="chip-group-toolbar-closable"}}
  {{#> chip-group-list-item}}
    {{#> chip-group-label chip-group-label--attribute=(concat 'id="' chip-group--id '-label"')}}
      Category one
    {{/chip-group-label}}
    {{#> chip-group newcontext}}
      {{#> chip}}
        {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_one_toolbar"')}}
          Chip one
        {{/chip-text}}
        {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_one_toolbar ' chip-group--id 'chip_one_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_one_toolbar"')}}
          <i class="fas fa-times-circle" aria-hidden="true"></i>
        {{/button}}
      {{/chip}}
      {{#> chip}}
        {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_two_toolbar"')}}
          Chip two
        {{/chip-text}}
        {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_two_toolbar ' chip-group--id 'chip_two_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_two_toolbar"')}}
          <i class="fas fa-times-circle" aria-hidden="true"></i>
        {{/button}}
      {{/chip}}
    {{/chip-group}}
    {{> chip-group-close}}
  {{/chip-group-list-item}}
{{/chip-group}}
```

### Overview
A chip-group used in a toolbar require the modifier `.pf-m-toolbar` which styles the group's background-color and border-radius. Multiple chip-groups can exist in the toolbar depending on the size of the group that is being filtered from and its parent container should handle the spacing between the chip groups. Categories can be labelled by using  `.pf-c-chip-group__label` and its heading level should be based on the context in which this component exists on the page. When groups of chips overflow they will wrap to the next line. This overflow is indicated by a chip with the modifier `.pf-m-overflow` that acts as a button to show/hide the overflown chips by expanding the height of the container they belong to.

The chip group requires the [chip component](/documentation/core/components/chip).

**All single chip accessibility and usage requirements apply.**

## Accessibility

| Attributes for closable chip group button | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="[button label text]"` | `.pf-c-chip-group__close > button` |  Provides an accessible name for a chip group close when an icon is used instead of text. Required when an icon is used with no supporting text. **Required** |
| `aria-labelledby="[id value of .pf-c-chip-group__close > button] [id value of .pf-c-chip-group__label]"` | `.pf-c-chip-group__close > button` | Provides an accessible name for the button. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-chip-group__close` | `<div>` | Initiates the container used to close chip group. **Required.** |

The chip group requires the [chip component](/documentation/core/components/chip).

```hbs title=Multi-select-collapsed
{{#> chip-group chip-group--id="select-collapsed"}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_one_select_collapsed"')}}
      Chip one
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_one_select_collapsed ' chip-group--id 'chip_one_select_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_one_select_collapsed"')}}
      <i class="fas fa-times-circle" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_two_select_collapsed"')}}
      Chip two
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_two_select_collapsed ' chip-group--id 'chip_two_select_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_two_select_collapsed"')}}
      <i class="fas fa-times-circle" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_three_select_collapsed"')}}
      Chip three
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_three_select_collapsed ' chip-group--id 'chip_three_select_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_three_select_collapsed"')}}
      <i class="fas fa-times-circle" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip chip--modifier="pf-m-overflow"}}
    {{#> button button--modifier="pf-m-plain"}}
      {{#> chip-text}}
        2 more
      {{/chip-text}}
    {{/button}}
  {{/chip}}
{{/chip-group}}
```

```hbs title=Multi-select-expanded
{{#> chip-group chip-group--id="select-expanded"}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_one_select"')}}
      Chip one
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_one_select ' chip-group--id 'chip_one_select" aria-label="Remove" id="' chip-group--id 'remove_chip_one_select"')}}
      <i class="fas fa-times-circle" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_two_select"')}}
      Chip two
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_two_select ' chip-group--id 'chip_two_select" aria-label="Remove" id="' chip-group--id 'remove_chip_two_select"')}}
      <i class="fas fa-times-circle" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_three_select"')}}
      Chip three
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_three_select ' chip-group--id 'chip_three_select" aria-label="Remove" id="' chip-group--id 'remove_chip_three_select"')}}
      <i class="fas fa-times-circle" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_four_select"')}}
      Chip four
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_four_select ' chip-group--id 'chip_four_select" aria-label="Remove" id="' chip-group--id 'remove_chip_four_select"')}}
      <i class="fas fa-times-circle" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_five_select"')}}
      Chip five
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_five_select ' chip-group--id 'chip_five_select" aria-label="Remove" id="' chip-group--id 'remove_chip_five_select"')}}
      <i class="fas fa-times-circle" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
{{/chip-group}}
```

### Overview
A chip-group used in a multi-select do not require a modifier as its parent will handle its styles. When it overflows outside of the group, the chips will wrap to the next line. This overflow is indicated by a chip with the modifier `.pf-m-overflow` that acts as a button to show/hide the overflown chips by expanding the height of the container they belong to.

### Accessibility
**All single chip accessibility and usage requirements apply.**

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-chip-group` | `<ul>` | Initiates the container used to group chips. **Required.** |
| `.pf-c-button` | `<button>` | Initiates the button used to expand overflown chips. |
