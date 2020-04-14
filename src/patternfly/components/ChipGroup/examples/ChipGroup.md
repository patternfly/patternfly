---
title: Chip group
section: components
cssPrefix: pf-c-chip-group
---

## Examples
```hbs title=Simple-inline-chip-group-overflow
{{#> chip-group chip-group--id="select-collapsed"}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_one_select_collapsed"')}}
      Chip one
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_one_select_collapsed ' chip-group--id 'chip_one_select_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_one_select_collapsed"')}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_two_select_collapsed"')}}
      Chip two
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_two_select_collapsed ' chip-group--id 'chip_two_select_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_two_select_collapsed"')}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_three_select_collapsed"')}}
      Chip three
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_three_select_collapsed ' chip-group--id 'chip_three_select_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_three_select_collapsed"')}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip chip--type="button" chip--modifier="pf-m-overflow"}}
    {{#> chip-text}}
      2 more
    {{/chip-text}}
  {{/chip}}
{{/chip-group}}
```

```hbs title=Simple-inline-chip-group-expanded
{{#> chip-group chip-group--id="select-expanded"}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_one_select"')}}
      Chip one
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_one_select ' chip-group--id 'chip_one_select" aria-label="Remove" id="' chip-group--id 'remove_chip_one_select"')}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_two_select"')}}
      Chip two
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_two_select ' chip-group--id 'chip_two_select" aria-label="Remove" id="' chip-group--id 'remove_chip_two_select"')}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_three_select"')}}
      Chip three
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_three_select ' chip-group--id 'chip_three_select" aria-label="Remove" id="' chip-group--id 'remove_chip_three_select"')}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_four_select"')}}
      Chip four
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_four_select ' chip-group--id 'chip_four_select" aria-label="Remove" id="' chip-group--id 'remove_chip_four_select"')}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_five_select"')}}
      Chip five
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_five_select ' chip-group--id 'chip_five_select" aria-label="Remove" id="' chip-group--id 'remove_chip_five_select"')}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip chip--type="button" chip--modifier="pf-m-overflow"}}
    {{#> chip-text}}
      Show less
    {{/chip-text}}
  {{/chip}}
{{/chip-group}}
```

```hbs title=Chip-group-with-categories
{{#> chip-group chip-group--modifier="pf-m-category" chip-group--id="toolbar-collapsed"}}
  {{#> chip-group-label}}
    Category one
  {{/chip-group-label}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_one_toolbar_collapsed"')}}
      Chip one
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_one_toolbar_collapsed ' chip-group--id 'chip_one_toolbar_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_one_toolbar_collapsed"')}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_two_toolbar_collapsed"')}}
      Chip two
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_two_toolbar_collapsed ' chip-group--id 'chip_two_toolbar_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_two_toolbar_collapsed"')}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_three_toolbar_collapsed"')}}
      Chip three
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_three_toolbar_collapsed ' chip-group--id 'chip_three_toolbar_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_three_toolbar_collapsed"')}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
{{/chip-group}}
```

```hbs title=Chip-group-with-categories-overflow
{{#> chip-group chip-group--modifier="pf-m-category" chip-group--id="toolbar-collapsed"}}
  {{#> chip-group-label}}
    Category one
  {{/chip-group-label}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_one_toolbar_collapsed"')}}
      Chip one
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_one_toolbar_collapsed ' chip-group--id 'chip_one_toolbar_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_one_toolbar_collapsed"')}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_two_toolbar_collapsed"')}}
      Chip two
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_two_toolbar_collapsed ' chip-group--id 'chip_two_toolbar_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_two_toolbar_collapsed"')}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_three_toolbar_collapsed"')}}
      Chip three
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_three_toolbar_collapsed ' chip-group--id 'chip_three_toolbar_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_three_toolbar_collapsed"')}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip chip--type="button" chip--modifier="pf-m-overflow"}}
    {{#> chip-text}}
      2 more
    {{/chip-text}}
  {{/chip}}
{{/chip-group}}
```

```hbs title=Chip-group-with-categories-overflow-expanded
{{#> chip-group chip-group--modifier="pf-m-category" chip-group--id="toolbar-expanded"}}
  {{#> chip-group-label}}
    Category one
  {{/chip-group-label}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_one_toolbar"')}}
      Chip one
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_one_toolbar ' chip-group--id 'chip_one_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_one_toolbar"')}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_two_toolbar"')}}
      Chip two
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_two_toolbar ' chip-group--id 'chip_two_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_two_toolbar"')}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_three_toolbar"')}}
      Chip three
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_three_toolbar ' chip-group--id 'chip_three_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_three_toolbar"')}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_four_toolbar"')}}
      Chip four
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_four_toolbar ' chip-group--id 'chip_four_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_four_toolbar"')}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_five_select"')}}
      Chip five
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_five_select ' chip-group--id 'chip_five_select" aria-label="Remove" id="' chip-group--id 'remove_chip_five_select"')}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip chip--type="button" chip--modifier="pf-m-overflow"}}
    {{#> chip-text}}
      Show less
    {{/chip-text}}
  {{/chip}}
{{/chip-group}}
```

```hbs title=Chip-group-with-categories-removable
{{#> chip-group chip-group--modifier="pf-m-category" chip-group--id="chip-group-toolbar-closable"}}
  {{#> chip-group-label chip-group-label--attribute=(concat 'id="' chip-group--id '-label"')}}
    Category one
  {{/chip-group-label}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_one_toolbar"')}}
      Chip one
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_one_toolbar ' chip-group--id 'chip_one_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_one_toolbar"')}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_two_toolbar"')}}
      Chip two
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_two_toolbar ' chip-group--id 'chip_two_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_two_toolbar"')}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{#> chip}}
    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_three_toolbar"')}}
      Chip three
    {{/chip-text}}
    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_three_toolbar ' chip-group--id 'chip_three_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_three_toolbar"')}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip}}
  {{> chip-group-close}}
{{/chip-group}}
```

### Overview
A chip group is constrained to the width of its container and will wrap when it exceeds that width. An overflow value can be set and when the number of chips exceeds that value, additional chips will be hidden by default. The default overflow value will be set to 3 chips but this can be adjusted per application needs. The toggle button after the last chip allows the group to be expanded (or collapsed).

If you want to create sub-groupings of chips to represent multiple values applied against the same category, chips can be grouped by category. This can be useful in filtering use cases, for example, where you want all items the match more than one value of the same attribute, e.g., ‘status = down OR needs maintenance’.

The chip group requires the [chip component](/documentation/core/components/chip).

### Accessibility
**All single chip accessibility and usage requirements apply.**

| Attributes for closable chip group button | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="[button label text]"` | `.pf-c-chip-group__close > button` |  Provides an accessible name for a chip group close when an icon is used instead of text. Required when an icon is used with no supporting text. **Required** |
| `aria-labelledby="[id value of .pf-c-chip-group__close > button] [id value of .pf-c-chip-group__label]"` | `.pf-c-chip-group__close > button` | Provides an accessible name for the button. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-chip-group` | `<ul>` | Initiates the container used to group chips. **Required.** |
| `.pf-c-chip-group__label` | `<h4>` | Initiates the label to be used in the chip group. |
| `.pf-c-chip-group__close` | `<div>` | Initiates the container used to remove button in the chip group. **Required.** |
| `.pf-m-category` | `.pf-c-chip-group` | Modifies the chip group to support category styling. |
