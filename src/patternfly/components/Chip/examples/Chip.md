---
id: Chip
section: components
cssPrefix: ['pf-v6-c-chip', 'pf-v6-c-chip-group']
---

## Examples
### Chip variants
```hbs

{{#> chip chip--type="div"}}
  {{#> chip-content}}
    {{#> chip-text chip-text--attribute='id="chip_one"'}}
      Chip
    {{/chip-text}}
  {{/chip-content}}
  {{#> chip-actions}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-labelledby="remove_chip_one chip_one" aria-label="Remove" id="remove_chip_one"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip-actions}}
{{/chip}}
<br>
<br>
{{#> chip chip--type="div"}}
  {{#> chip-content}}
    {{#> chip-text chip-text--attribute='id="chip_two"'}}
      Really long chip that goes on and on
    {{/chip-text}}
  {{/chip-content}}
  {{#> chip-actions}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-labelledby="remove_chip_two chip_two" aria-label="Remove" id="remove_chip_two"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip-actions}}
{{/chip}}
<br>
<br>
{{#> chip chip--type="div"}}
  {{#> chip-content}}
    {{#> chip-text chip-text--attribute='id="chip_three"'}}
      Chip
    {{/chip-text}}
    {{#> badge badge--modifier="pf-m-read"}}
      00
    {{/badge}}
  {{/chip-content}}
  {{#> chip-actions}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-labelledby="remove_chip_three chip_three" aria-label="Remove" id="remove_chip_three"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/chip-actions}}
{{/chip}}
<br>
<br>
{{#> chip chip--type="div"}}
  {{#> chip-content}}
    {{#> chip-text}}
      Read-only chip
    {{/chip-text}}
  {{/chip-content}}
{{/chip}}
<br>
<br>
{{#> chip chip--type="button" chip--modifier="pf-m-overflow"}}
  {{#> chip-content}}
    {{#> chip-text}}
      Overflow chip
    {{/chip-text}}
  {{/chip-content}}
{{/chip}}
<br>
<br>
{{#> chip chip--type="div" chip--modifier="pf-m-draggable"}}
  {{#> chip-content}}
    {{#> chip-icon}}
      <i class="fas fa-grip-vertical" role="img" aria-label="Drag"></i>
    {{/chip-icon}}
    {{#> chip-text}}
      Draggable chip
    {{/chip-text}}
  {{/chip-content}}
{{/chip}}
```

### Simple inline chip group with overflow
```hbs
{{#> chip-group chip-group--id="simple-inline-chip-group-overflow" chip-group--aria-label="simple inline chip group with overflow"}}
  {{#> chip-group-main}}
    {{#> chip-group-list chip-group-list--attribute='aria-label="Chip group list"'}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_one_select_collapsed"')}}
              Chip one
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_one_select_collapsed ' chip-group--id 'chip_one_select_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_one_select_collapsed"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_two_select_collapsed"')}}
            Chip two
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_two_select_collapsed ' chip-group--id 'chip_two_select_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_two_select_collapsed"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_three_select_collapsed"')}}
            Chip three
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_three_select_collapsed ' chip-group--id 'chip_three_select_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_three_select_collapsed"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
      {{#> chip-group-list-item}}
        {{#> chip chip--type="button" chip--modifier="pf-m-overflow"}}
          {{#> chip-content}}
            {{#> chip-text}}
              2 more
            {{/chip-text}}
          {{/chip-content}}
        {{/chip}}
      {{/chip-group-list-item}}
    {{/chip-group-list}}
  {{/chip-group-main}}
{{/chip-group}}
```

### Simple inline chip group expanded
```hbs
{{#> chip-group chip-group--id="simple-inline-chip-group-expanded" chip-group--aria-label="simple inline chip group expanded"}}
  {{#> chip-group-main}}
    {{#> chip-group-list chip-group-list--attribute='aria-label="Chip group list"'}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_one_select"')}}
              Chip one
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_one_select ' chip-group--id 'chip_one_select" aria-label="Remove" id="' chip-group--id 'remove_chip_one_select"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_two_select"')}}
              Chip two
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_two_select ' chip-group--id 'chip_two_select" aria-label="Remove" id="' chip-group--id 'remove_chip_two_select"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_three_select"')}}
              Chip three
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_three_select ' chip-group--id 'chip_three_select" aria-label="Remove" id="' chip-group--id 'remove_chip_three_select"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_four_select"')}}
              Chip four
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_four_select ' chip-group--id 'chip_four_select" aria-label="Remove" id="' chip-group--id 'remove_chip_four_select"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_five_select"')}}
              Chip five
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_five_select ' chip-group--id 'chip_five_select" aria-label="Remove" id="' chip-group--id 'remove_chip_five_select"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
      {{#> chip-group-list-item}}
        {{#> chip chip--type="button" chip--modifier="pf-m-overflow"}}
          {{#> chip-content}}
            {{#> chip-text}}
              Show less
            {{/chip-text}}
          {{/chip-content}}
        {{/chip}}
      {{/chip-group-list-item}}
    {{/chip-group-list}}
  {{/chip-group-main}}
{{/chip-group}}
```

### Chip group with categories
```hbs
{{#> chip-group chip-group--modifier="pf-m-category" chip-group--id="chip-group-with-categories" chip-group--HasCategoryText="true"}}
  {{#> chip-group-main}}
    {{#> chip-group-label chip-group-label--attribute=(concat 'id="' chip-group--id '-label"')}}
      Category one
    {{/chip-group-label}}
    {{#> chip-group-list chip-group-list--attribute=(concat 'aria-labelledby="' chip-group--id '-label"')}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_one_toolbar_collapsed"')}}
              Chip one
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_one_toolbar_collapsed ' chip-group--id 'chip_one_toolbar_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_one_toolbar_collapsed"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_two_toolbar_collapsed"')}}
              Chip two
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_two_toolbar_collapsed ' chip-group--id 'chip_two_toolbar_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_two_toolbar_collapsed"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_three_toolbar_collapsed"')}}
              Chip three
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_three_toolbar_collapsed ' chip-group--id 'chip_three_toolbar_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_three_toolbar_collapsed"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
    {{/chip-group-list}}
  {{/chip-group-main}}
{{/chip-group}}
```

### Chip group with categories and overflow
```hbs
{{#> chip-group chip-group--modifier="pf-m-category" chip-group--id="chip-group-with-categories-overflow" chip-group--HasCategoryText="true"}}
  {{#> chip-group-main}}
    {{#> chip-group-label chip-group-label--attribute=(concat 'id="' chip-group--id '-label"')}}
      Category one
    {{/chip-group-label}}
    {{#> chip-group-list chip-group-list--attribute=(concat 'aria-labelledby="' chip-group--id '-label"')}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_one_toolbar_collapsed"')}}
              Chip one
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_one_toolbar_collapsed ' chip-group--id 'chip_one_toolbar_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_one_toolbar_collapsed"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_two_toolbar_collapsed"')}}
              Chip two
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_two_toolbar_collapsed ' chip-group--id 'chip_two_toolbar_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_two_toolbar_collapsed"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_three_toolbar_collapsed"')}}
              Chip three
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_three_toolbar_collapsed ' chip-group--id 'chip_three_toolbar_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_three_toolbar_collapsed"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
      {{#> chip-group-list-item}}
        {{#> chip chip--type="button" chip--modifier="pf-m-overflow"}}
          {{#> chip-content}}
            {{#> chip-text}}
              2 more
            {{/chip-text}}
          {{/chip-content}}
        {{/chip}}
      {{/chip-group-list-item}}
    {{/chip-group-list}}
  {{/chip-group-main}}
{{/chip-group}}
```

### Chip group with categories and overflow expanded
```hbs
{{#> chip-group chip-group--modifier="pf-m-category" chip-group--id="chip-group-with-categories-overflow-expanded" chip-group--HasCategoryText="true"}}
  {{#> chip-group-main}}
    {{#> chip-group-label chip-group-label--attribute=(concat 'id="' chip-group--id '-label"')}}
      Category one
    {{/chip-group-label}}
    {{#> chip-group-list chip-group-list--attribute=(concat 'aria-labelledby="' chip-group--id '-label"')}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_one_toolbar"')}}
              Chip one
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_one_toolbar ' chip-group--id 'chip_one_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_one_toolbar"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_two_toolbar"')}}
              Chip two
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_two_toolbar ' chip-group--id 'chip_two_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_two_toolbar"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_three_toolbar"')}}
              Chip three
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_three_toolbar ' chip-group--id 'chip_three_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_three_toolbar"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_four_toolbar"')}}
              Chip four
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_four_toolbar ' chip-group--id 'chip_four_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_four_toolbar"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_five_select"')}}
              Chip five
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_five_select ' chip-group--id 'chip_five_select" aria-label="Remove" id="' chip-group--id 'remove_chip_five_select"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
      {{#> chip-group-list-item}}
        {{#> chip chip--type="button" chip--modifier="pf-m-overflow"}}
          {{#> chip-content}}
            {{#> chip-text}}
              Show less
            {{/chip-text}}
          {{/chip-content}}
        {{/chip}}
      {{/chip-group-list-item}}
    {{/chip-group-list}}
  {{/chip-group-main}}
{{/chip-group}}
```

### Chip group with removable categories
```hbs
{{#> chip-group chip-group--modifier="pf-m-category" chip-group--id="chip-group-with-categories-removable" chip-group--HasCategoryText="true"}}
  {{#> chip-group-main}}
    {{#> chip-group-label chip-group-label--attribute=(concat 'id="' chip-group--id '-label"')}}
      Category one
    {{/chip-group-label}}
    {{#> chip-group-list chip-group-list--attribute=(concat 'aria-labelledby="' chip-group--id '-label"')}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_one_toolbar"')}}
              Chip one
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_one_toolbar ' chip-group--id 'chip_one_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_one_toolbar"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_two_toolbar"')}}
              Chip two
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_two_toolbar ' chip-group--id 'chip_two_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_two_toolbar"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_three_toolbar"')}}
              Chip three
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_three_toolbar ' chip-group--id 'chip_three_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_three_toolbar"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_four_toolbar"')}}
              Chip four
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_four_toolbar ' chip-group--id 'chip_four_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_four_toolbar"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_five_toolbar"')}}
              Chip five
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_five_toolbar ' chip-group--id 'chip_five_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_five_toolbar"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
      {{#> chip-group-list-item}}
        {{#> chip}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_six_toolbar"')}}
              Chip six
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_six_toolbar ' chip-group--id 'chip_six_toolbar" aria-label="Remove" id="' chip-group--id 'remove_chip_six_toolbar"')}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/chip-group-list-item}}
    {{/chip-group-list}}
  {{/chip-group-main}}
  {{> chip-group-close}}
{{/chip-group}}
```

## Documentation
### Chip overview
A Chip is used to display items that have been filtered or selected from a larger group. They comprise of a text element and a button component that is used to remove the chip from selection. When the text overflows it is truncated using ellipses. A chip can be grouped by using the "chip-group" component.


### Chip accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="[button label text]"` | `.pf-v6-c-button` |  Provides an accessible name for the button when an icon is used instead of text. Required when an icon is used with no supporting text. |
| `aria-labelledby="[id value of .pf-v6-c-button]"` | `.pf-v6-c-button` | Gives the button an accessible name by referring to the element that provides the position of the button within a list. Required when the button is being removed. |
| `aria-hidden="true"` | `<i>` |  Hides the icon from assistive technologies. |

### Chip usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-chip` | `<div>`, `<button>`, | Initiates the chip component. Use a `<button>` with overflow chips **Required** |
| `.pf-v6-c-chip__content` | `<span>` | Creates a content wrapper for the chip. **Required** |
| `.pf-v6-c-chip__text` | `<span>` | Initiates the text inside the chip. **Required** |
| `.pf-v6-c-chip__icon` | `<span>` | Initiates the icon inside the chip. |
| `.pf-v6-c-chip__actions` | `<span>` | Creates a wrapper for chip actions. **Required for removable chips** |
| `.pf-m-overflow` | `button.pf-v6-c-chip` | Applies styling of the overflow chip. |
| `.pf-m-draggable` | `.pf-v6-c-chip` | Modifies the chip to be in the draggable state. |

### Chip group overview
A chip group is constrained to the width of its container and will wrap when it exceeds that width. An overflow value can be set and when the number of chips exceeds that value, additional chips will be hidden by default. The default overflow value will be set to 3 chips but this can be adjusted per application needs. The toggle button after the last chip allows the group to be expanded (or collapsed).

If you want to create sub-groupings of chips to represent multiple values applied against the same category, chips can be grouped by category. This can be useful in filtering use cases, for example, where you want all items that match more than one value of the same attribute, e.g., ‘status = down OR needs maintenance’.

The chip group requires the [chip component](#chip-overview). **All single chip accessibility and usage requirements apply.**

### Chip group accessibility

| Attributes for closable chip group button | Applied to | Outcome |
| -- | -- | -- |
| `role="list"` | `.pf-v6-c-chip-group__list` | Indicates that the chip group list is a list element. This role is redundant since `.pf-v6-c-chip-group__list` is a `<ul>` but is required for screen readers to announce the list properly. **Required** |
| `aria-label="[button label text]"` | `.pf-v6-c-chip-group__close > button` |  Provides an accessible name for a chip group close when an icon is used instead of text. Required when an icon is used with no supporting text. **Required** |
| `aria-labelledby="[id value of .pf-v6-c-chip-group__close > button] [id value of .pf-v6-c-chip-group__label]"` | `.pf-v6-c-chip-group__close > button` | Provides an accessible name for the button. **Required** |

### Chip group usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-chip-group` | `<div>` | Initiates the chip group component. **Required.** |
| `.pf-v6-c-chip-group__list` | `<ul>` | Initiates the container for a list of chips. **Required.** |
| `.pf-v6-c-chip-group__list-item` | `<li>` | Initiates the list item inside of the chip group. **Required.** |
| `.pf-v6-c-chip-group__label` | `<span>` | Initiates the label to be used in the chip group. |
| `.pf-v6-c-chip-group__close` | `<div>` | Initiates the container used for the button to remove the chip group. |
| `.pf-v6-c-chip-group__main` | `<div>` | Initiates the container for the label and list elements so that they wrap together. **Required** |
| `.pf-v6-c-button` | `.pf-v6-c-chip-group__close <button>` | Initiates the button used to remove the chip group. |
| `.pf-m-category` | `.pf-v6-c-chip-group` | Modifies the chip group to support category styling. |
