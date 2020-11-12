---
id: 'Dual list selector'
beta: true
section: components
cssPrefix: pf-c-dual-list-selector
---

## Examples
### Basic
```hbs
{{#> dual-list-selector dual-list-selector--id="basic"}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-available') dual-list-selector-pane--modifier="pf-m-available"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Available options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> form-control form-control--modifier="pf-m-search" controlType="input" input="true" form-control--attribute=(concat 'type="text" placeholder="Filter options" id="' dual-list-selector-pane--id '-filter" aria-label="Filter options"')}}
      {{/dual-list-selector-tools-filter}}
      {{#> dual-list-selector-tools-actions}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Sort"'}}
            <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
          {{/button}}
        {{/dual-list-selector-tools-actions-item}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> dropdown id=(concat "dropdown-kebab-" dual-list-selector-pane--id) dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
        {{/dual-list-selector-tools-actions-item}}
      {{/dual-list-selector-tools-actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        0 of 5 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item1"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item2"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item3"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item4"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item5"}}
        {{/dual-list-selector-list-item}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
  {{#> dual-list-selector-controls}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Add selected"'}}
        <i class="fas fa-fw fa-angle-right"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Add all"'}}
        <i class="fas fa-fw fa-angle-double-right"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Remove all"'}}
        <i class="fas fa-fw fa-angle-double-left"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Remove selected"'}}
        <i class="fas fa-fw fa-angle-left"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
  {{/dual-list-selector-controls}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-chosen') dual-list-selector-pane--modifier="pf-m-chosen"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Chosen options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> form-control form-control--modifier="pf-m-search" controlType="input" input="true" form-control--attribute=(concat 'type="text" placeholder="Filter options" id="' dual-list-selector-pane--id '-filter" aria-label="Filter options"')}}
      {{/dual-list-selector-tools-filter}}
      {{#> dual-list-selector-tools-actions}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Sort"'}}
            <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
          {{/button}}
        {{/dual-list-selector-tools-actions-item}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> dropdown id=(concat "dropdown-kebab-" dual-list-selector-pane--id) dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
        {{/dual-list-selector-tools-actions-item}}
      {{/dual-list-selector-tools-actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        0 of 0 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
{{/dual-list-selector}}
```

### Available item selected
```hbs
{{#> dual-list-selector dual-list-selector--id="available-item-selected"}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-available') dual-list-selector-pane--modifier="pf-m-available"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Available options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> form-control form-control--modifier="pf-m-search" controlType="input" input="true" form-control--attribute=(concat 'type="text" placeholder="Filter options" id="' dual-list-selector-pane--id '-filter" aria-label="Filter options"')}}
      {{/dual-list-selector-tools-filter}}
      {{#> dual-list-selector-tools-actions}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Sort"'}}
            <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
          {{/button}}
        {{/dual-list-selector-tools-actions-item}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> dropdown id=(concat "dropdown-kebab-" dual-list-selector-pane--id) dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
        {{/dual-list-selector-tools-actions-item}}
      {{/dual-list-selector-tools-actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        1 of 5 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item1"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--modifier="pf-m-selected" dual-list-selector-item--text="Item2"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item3"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item4"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item5"}}
        {{/dual-list-selector-list-item}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
  {{#> dual-list-selector-controls}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Add selected"'}}
        <i class="fas fa-fw fa-angle-right"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Add all"'}}
        <i class="fas fa-fw fa-angle-double-right"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Remove all"'}}
        <i class="fas fa-fw fa-angle-double-left"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Remove selected"'}}
        <i class="fas fa-fw fa-angle-left"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
  {{/dual-list-selector-controls}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-chosen') dual-list-selector-pane--modifier="pf-m-chosen"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Chosen options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> form-control form-control--modifier="pf-m-search" controlType="input" input="true" form-control--attribute=(concat 'type="text" placeholder="Filter options" id="' dual-list-selector-pane--id '-filter" aria-label="Filter options"')}}
      {{/dual-list-selector-tools-filter}}
      {{#> dual-list-selector-tools-actions}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Sort"'}}
            <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
          {{/button}}
        {{/dual-list-selector-tools-actions-item}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> dropdown id=(concat "dropdown-kebab-" dual-list-selector-pane--id) dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
        {{/dual-list-selector-tools-actions-item}}
      {{/dual-list-selector-tools-actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        0 of 0 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
{{/dual-list-selector}}
```

### Multiple available items selected
```hbs
{{#> dual-list-selector dual-list-selector--id="multiple-available-items-selected"}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-available') dual-list-selector-pane--modifier="pf-m-available"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Available options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> form-control form-control--modifier="pf-m-search" controlType="input" input="true" form-control--attribute=(concat 'type="text" placeholder="Filter options" id="' dual-list-selector-pane--id '-filter" aria-label="Filter options"')}}
      {{/dual-list-selector-tools-filter}}
      {{#> dual-list-selector-tools-actions}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Sort"'}}
            <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
          {{/button}}
        {{/dual-list-selector-tools-actions-item}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> dropdown id=(concat "dropdown-kebab-" dual-list-selector-pane--id) dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
        {{/dual-list-selector-tools-actions-item}}
      {{/dual-list-selector-tools-actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        1 of 5 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item1"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--modifier="pf-m-selected" dual-list-selector-item--text="Item2"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--modifier="pf-m-selected" dual-list-selector-item--text="Item3"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item4"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--modifier="pf-m-selected" dual-list-selector-item--text="Item5"}}
        {{/dual-list-selector-list-item}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
  {{#> dual-list-selector-controls}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Add selected"'}}
        <i class="fas fa-fw fa-angle-right"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Add all"'}}
        <i class="fas fa-fw fa-angle-double-right"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Remove all"'}}
        <i class="fas fa-fw fa-angle-double-left"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Remove selected"'}}
        <i class="fas fa-fw fa-angle-left"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
  {{/dual-list-selector-controls}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-chosen') dual-list-selector-pane--modifier="pf-m-chosen"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Chosen options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> form-control form-control--modifier="pf-m-search" controlType="input" input="true" form-control--attribute=(concat 'type="text" placeholder="Filter options" id="' dual-list-selector-pane--id '-filter" aria-label="Filter options"')}}
      {{/dual-list-selector-tools-filter}}
      {{#> dual-list-selector-tools-actions}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Sort"'}}
            <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
          {{/button}}
        {{/dual-list-selector-tools-actions-item}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> dropdown id=(concat "dropdown-kebab-" dual-list-selector-pane--id) dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
        {{/dual-list-selector-tools-actions-item}}
      {{/dual-list-selector-tools-actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        0 of 0 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
{{/dual-list-selector}}
```

### Chosen item
```hbs
{{#> dual-list-selector dual-list-selector--id="chosen-item"}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-available') dual-list-selector-pane--modifier="pf-m-available"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Available options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> form-control form-control--modifier="pf-m-search" controlType="input" input="true" form-control--attribute=(concat 'type="text" placeholder="Filter options" id="' dual-list-selector-pane--id '-filter" aria-label="Filter options"')}}
      {{/dual-list-selector-tools-filter}}
      {{#> dual-list-selector-tools-actions}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Sort"'}}
            <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
          {{/button}}
        {{/dual-list-selector-tools-actions-item}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> dropdown id=(concat "dropdown-kebab-" dual-list-selector-pane--id) dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
        {{/dual-list-selector-tools-actions-item}}
      {{/dual-list-selector-tools-actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        0 of 4 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item1"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item2"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item3"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item4"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item5"}}
        {{/dual-list-selector-list-item}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
  {{#> dual-list-selector-controls}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Add selected"'}}
        <i class="fas fa-fw fa-angle-right"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Add all"'}}
        <i class="fas fa-fw fa-angle-double-right"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Remove all"'}}
        <i class="fas fa-fw fa-angle-double-left"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Remove selected"'}}
        <i class="fas fa-fw fa-angle-left"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
  {{/dual-list-selector-controls}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-chosen') dual-list-selector-pane--modifier="pf-m-chosen"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Chosen options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> form-control form-control--modifier="pf-m-search" controlType="input" input="true" form-control--attribute=(concat 'type="text" placeholder="Filter options" id="' dual-list-selector-pane--id '-filter" aria-label="Filter options"')}}
      {{/dual-list-selector-tools-filter}}
      {{#> dual-list-selector-tools-actions}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Sort"'}}
            <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
          {{/button}}
        {{/dual-list-selector-tools-actions-item}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> dropdown id=(concat "dropdown-kebab-" dual-list-selector-pane--id) dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
        {{/dual-list-selector-tools-actions-item}}
      {{/dual-list-selector-tools-actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        0 of 1 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item1"}}
        {{/dual-list-selector-list-item}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
{{/dual-list-selector}}
```

### Chosen item selected
```hbs
{{#> dual-list-selector dual-list-selector--id="chosen-item-selected"}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-available') dual-list-selector-pane--modifier="pf-m-available"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Available options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> form-control form-control--modifier="pf-m-search" controlType="input" input="true" form-control--attribute=(concat 'type="text" placeholder="Filter options" id="' dual-list-selector-pane--id '-filter" aria-label="Filter options"')}}
      {{/dual-list-selector-tools-filter}}
      {{#> dual-list-selector-tools-actions}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Sort"'}}
            <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
          {{/button}}
        {{/dual-list-selector-tools-actions-item}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> dropdown id=(concat "dropdown-kebab-" dual-list-selector-pane--id) dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
        {{/dual-list-selector-tools-actions-item}}
      {{/dual-list-selector-tools-actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        0 of 4 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item1"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item2"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item3"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item4"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item5"}}
        {{/dual-list-selector-list-item}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
  {{#> dual-list-selector-controls}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Add selected"'}}
        <i class="fas fa-fw fa-angle-right"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Add all"'}}
        <i class="fas fa-fw fa-angle-double-right"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Remove all"'}}
        <i class="fas fa-fw fa-angle-double-left"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Remove selected"'}}
        <i class="fas fa-fw fa-angle-left"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
  {{/dual-list-selector-controls}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-chosen') dual-list-selector-pane--modifier="pf-m-chosen"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Chosen options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> form-control form-control--modifier="pf-m-search" controlType="input" input="true" form-control--attribute=(concat 'type="text" placeholder="Filter options" id="' dual-list-selector-pane--id '-filter" aria-label="Filter options"')}}
      {{/dual-list-selector-tools-filter}}
      {{#> dual-list-selector-tools-actions}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Sort"'}}
            <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
          {{/button}}
        {{/dual-list-selector-tools-actions-item}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> dropdown id=(concat "dropdown-kebab-" dual-list-selector-pane--id) dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
        {{/dual-list-selector-tools-actions-item}}
      {{/dual-list-selector-tools-actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        1 of 1 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--modifier="pf-m-selected" dual-list-selector-item--text="Item5"}}
        {{/dual-list-selector-list-item}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
{{/dual-list-selector}}
```


### Tree view
```hbs
{{#> dual-list-selector dual-list-selector--id="basic"}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-available') dual-list-selector-pane--modifier="pf-m-available"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Available options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> form-control form-control--modifier="pf-m-search" controlType="input" input="true" form-control--attribute=(concat 'type="text" placeholder="Filter options" id="' dual-list-selector-pane--id '-filter" aria-label="Filter options"')}}
      {{/dual-list-selector-tools-filter}}
      {{#> dual-list-selector-tools-actions}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Sort"'}}
            <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
          {{/button}}
        {{/dual-list-selector-tools-actions-item}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> dropdown id=(concat "dropdown-kebab-" dual-list-selector-pane--id) dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
        {{/dual-list-selector-tools-actions-item}}
      {{/dual-list-selector-tools-actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        1 of 11 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
        {{#> dual-list-selector-list-item dual-list-selector-list-item--IsExpandable="true" dual-list-selector-list-item--IsExpanded="true"}}
          {{#> dual-list-selector-item dual-list-selector-item--text="Colors" dual-list-selector-item--HasCheck="true" dual-list-selector-item--id="0" dual-list-selector-item--count="00" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
            {{#> dual-list-selector-list newcontext}}
              {{#> dual-list-selector-list-item}}
                {{#> dual-list-selector-item dual-list-selector-item--text="Red" dual-list-selector-item--HasCheck="true" dual-list-selector-item-check--IsChecked="true" dual-list-selector-item--id="1" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
              {{/dual-list-selector-list-item}}
              {{#> dual-list-selector-list-item}}
                {{#> dual-list-selector-item dual-list-selector-item--text="Orange" dual-list-selector-item--modifier="pf-m-selected" dual-list-selector-item--HasCheck="true" dual-list-selector-item--id="2" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
              {{/dual-list-selector-list-item}}
              {{#> dual-list-selector-list-item}}
                {{#> dual-list-selector-item dual-list-selector-item--text="Yellow" dual-list-selector-item--HasCheck="true" dual-list-selector-item--id="3" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
              {{/dual-list-selector-list-item}}
              {{#> dual-list-selector-list-item dual-list-selector-list-item--IsExpandable="true" dual-list-selector-list-item--IsExpanded="true"}}
                {{#> dual-list-selector-item dual-list-selector-item--text="Green" dual-list-selector-item--HasCheck="true" dual-list-selector-item--id="4" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
                {{#> dual-list-selector-list newcontext}}
                  {{#> dual-list-selector-list-item}}
                    {{#> dual-list-selector-item dual-list-selector-item--text="Light green" dual-list-selector-item--HasCheck="true" dual-list-selector-item--id="5" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
                  {{/dual-list-selector-list-item}}
                  {{#> dual-list-selector-list-item}}
                    {{#> dual-list-selector-item dual-list-selector-item--text="medium green" dual-list-selector-item--HasCheck="true" dual-list-selector-item--id="6" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
                  {{/dual-list-selector-list-item}}
                  {{#> dual-list-selector-list-item}}
                    {{#> dual-list-selector-item dual-list-selector-item--text="Dark green" dual-list-selector-item--HasCheck="true" dual-list-selector-item--id="7" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
                  {{/dual-list-selector-list-item}}
                  {{/dual-list-selector-list}}
              {{/dual-list-selector-list-item}}
            {{/dual-list-selector-list}}
        {{/dual-list-selector-list-item}}

        {{#> dual-list-selector-list-item dual-list-selector-list-item--IsExpandable="true"}}
          {{#> dual-list-selector-item dual-list-selector-item--text="Type something" dual-list-selector-item--HasCheck="true" dual-list-selector-item--id="8" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
        {{/dual-list-selector-list-item}}

        {{#> dual-list-selector-list-item dual-list-selector-list-item--IsExpandable="true"}}
          {{#> dual-list-selector-item dual-list-selector-item--text="Type something" dual-list-selector-item--HasCheck="true" dual-list-selector-item--id="9" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
        {{/dual-list-selector-list-item}}

        {{#> dual-list-selector-list-item dual-list-selector-list-item--IsExpandable="true"}}
          {{#> dual-list-selector-item dual-list-selector-item--text="Type something" dual-list-selector-item--HasCheck="true" dual-list-selector-item--id="10" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
        {{/dual-list-selector-list-item}}

      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
  {{#> dual-list-selector-controls}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Add selected"'}}
        <i class="fas fa-fw fa-angle-right"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Add all"'}}
        <i class="fas fa-fw fa-angle-double-right"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Remove all"'}}
        <i class="fas fa-fw fa-angle-double-left"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Remove selected"'}}
        <i class="fas fa-fw fa-angle-left"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
  {{/dual-list-selector-controls}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-chosen') dual-list-selector-pane--modifier="pf-m-chosen"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Chosen options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> form-control form-control--modifier="pf-m-search" controlType="input" input="true" form-control--attribute=(concat 'type="text" placeholder="Filter options" id="' dual-list-selector-pane--id '-filter" aria-label="Filter options"')}}
      {{/dual-list-selector-tools-filter}}
      {{#> dual-list-selector-tools-actions}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Sort"'}}
            <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
          {{/button}}
        {{/dual-list-selector-tools-actions-item}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> dropdown id=(concat "dropdown-kebab-" dual-list-selector-pane--id) dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
        {{/dual-list-selector-tools-actions-item}}
      {{/dual-list-selector-tools-actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        0 of 0 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
{{/dual-list-selector}}
```


### Tree view chosen options
```hbs
{{#> dual-list-selector dual-list-selector--id="basic"}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-available') dual-list-selector-pane--modifier="pf-m-available"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Available options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> form-control form-control--modifier="pf-m-search" controlType="input" input="true" form-control--attribute=(concat 'type="text" placeholder="Filter options" id="' dual-list-selector-pane--id '-filter" aria-label="Filter options"')}}
      {{/dual-list-selector-tools-filter}}
      {{#> dual-list-selector-tools-actions}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Sort"'}}
            <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
          {{/button}}
        {{/dual-list-selector-tools-actions-item}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> dropdown id=(concat "dropdown-kebab-" dual-list-selector-pane--id) dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
        {{/dual-list-selector-tools-actions-item}}
      {{/dual-list-selector-tools-actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        0 of 10 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
        {{#> dual-list-selector-list-item dual-list-selector-list-item--IsExpandable="true" dual-list-selector-list-item--IsExpanded="true"}}
          {{#> dual-list-selector-item dual-list-selector-item--text="Colors" dual-list-selector-item--HasCheck="true" dual-list-selector-item--id="11" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
            {{#> dual-list-selector-list newcontext}}
              {{#> dual-list-selector-list-item}}
                {{#> dual-list-selector-item dual-list-selector-item--text="Orange" dual-list-selector-item--modifier="pf-m-selected" dual-list-selector-item--HasCheck="true" dual-list-selector-item--id="12" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
              {{/dual-list-selector-list-item}}
              {{#> dual-list-selector-list-item}}
                {{#> dual-list-selector-item dual-list-selector-item--text="Yellow" dual-list-selector-item--HasCheck="true" dual-list-selector-item--id="13" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
              {{/dual-list-selector-list-item}}
              {{#> dual-list-selector-list-item dual-list-selector-list-item--IsExpandable="true" dual-list-selector-list-item--IsExpanded="true"}}
                {{#> dual-list-selector-item dual-list-selector-item--text="Green" dual-list-selector-item--HasCheck="true" dual-list-selector-item--id="14" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
                {{#> dual-list-selector-list newcontext}}
                  {{#> dual-list-selector-list-item}}
                    {{#> dual-list-selector-item dual-list-selector-item--text="Light green" dual-list-selector-item--HasCheck="true" dual-list-selector-item--id="15" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
                  {{/dual-list-selector-list-item}}
                  {{#> dual-list-selector-list-item}}
                    {{#> dual-list-selector-item dual-list-selector-item--text="medium green" dual-list-selector-item--HasCheck="true" dual-list-selector-item--id="16" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
                  {{/dual-list-selector-list-item}}
                  {{#> dual-list-selector-list-item}}
                    {{#> dual-list-selector-item dual-list-selector-item--text="Dark green" dual-list-selector-item--HasCheck="true" dual-list-selector-item--id="17" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
                  {{/dual-list-selector-list-item}}
                  {{/dual-list-selector-list}}
              {{/dual-list-selector-list-item}}
            {{/dual-list-selector-list}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item dual-list-selector-list-item--IsExpandable="true"}}
          {{#> dual-list-selector-item dual-list-selector-item--text="Type something" dual-list-selector-item--HasCheck="true" dual-list-selector-item--id="18" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item dual-list-selector-list-item--IsExpandable="true"}}
          {{#> dual-list-selector-item dual-list-selector-item--text="Type something" dual-list-selector-item--HasCheck="true" dual-list-selector-item--id="19" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item dual-list-selector-list-item--IsExpandable="true"}}
          {{#> dual-list-selector-item dual-list-selector-item--text="Type something" dual-list-selector-item--HasCheck="true" dual-list-selector-item--id="20" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
        {{/dual-list-selector-list-item}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
  {{#> dual-list-selector-controls}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Add selected"'}}
        <i class="fas fa-fw fa-angle-right"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Add all"'}}
        <i class="fas fa-fw fa-angle-double-right"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Remove all"'}}
        <i class="fas fa-fw fa-angle-double-left"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Remove selected"'}}
        <i class="fas fa-fw fa-angle-left"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
  {{/dual-list-selector-controls}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-chosen') dual-list-selector-pane--modifier="pf-m-chosen"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Chosen options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> form-control form-control--modifier="pf-m-search" controlType="input" input="true" form-control--attribute=(concat 'type="text" placeholder="Filter options" id="' dual-list-selector-pane--id '-filter" aria-label="Filter options"')}}
      {{/dual-list-selector-tools-filter}}
      {{#> dual-list-selector-tools-actions}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Sort"'}}
            <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
          {{/button}}
        {{/dual-list-selector-tools-actions-item}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> dropdown id=(concat "dropdown-kebab-" dual-list-selector-pane--id) dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
        {{/dual-list-selector-tools-actions-item}}
      {{/dual-list-selector-tools-actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        0 of 0 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
        {{#> dual-list-selector-list-item dual-list-selector-list-item--IsExpandable="true" dual-list-selector-list-item--IsExpanded="true"}}
          {{#> dual-list-selector-item dual-list-selector-item--text="Colors" dual-list-selector-item--HasCheck="true" dual-list-selector-item--id="21" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
            {{#> dual-list-selector-list newcontext}}
              {{#> dual-list-selector-list-item}}
                {{#> dual-list-selector-item dual-list-selector-item--text="Orange" dual-list-selector-item--modifier="pf-m-selected" dual-list-selector-item--HasCheck="true" dual-list-selector-item--id="22" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
              {{/dual-list-selector-list-item}}
            {{/dual-list-selector-list}}
        {{/dual-list-selector-list-item}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
{{/dual-list-selector}}
```

## Documentation

### Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-c-dual-list-selector` | `<div>` | Initiates the dual list selector component. **Required** |
| `.pf-c-dual-list-selector__pane` | `<div>` | Initiates a dual list selector pane. **Required** |
| `.pf-c-dual-list-selector__header` | `<div>` | Initiates a dual list selector pane header. **Required** |
| `.pf-c-dual-list-selector__title` | `<div>` | Initiates a dual list selector pane title. **Required** |
| `.pf-c-dual-list-selector__title-text` | `<div>` | Initiates a dual list selector pane title text. **Required** |
| `.pf-c-dual-list-selector__tools` | `<div>` | Initiates a dual list selector tools. **Required** |
| `.pf-c-dual-list-selector__filter` | `<div>` | Initiates a dual list selector pane filter. **Required** |
| `.pf-c-dual-list-selector__actions` | `<div>` | Initiates a dual list selector pane actions. |
| `.pf-c-dual-list-selector__actions-item` | `<div>` | Initiates a dual list selector pane actions item. |
| `.pf-c-dual-list-selector__status` | `<div>` | Initiates a dual list selector pane selected status. **Required** |
| `.pf-c-dual-list-selector__status-text` | `<span>` | Initiates a dual list selector pane selected status text. **Required** |
| `.pf-c-dual-list-selector__menu` | `<div>` | Initiates a dual list selector pane menu container. **Required** |
| `.pf-c-dual-list-selector__list` | `<ul>` | Initiates a dual list selector pane menu list. **Required** |
| `.pf-c-dual-list-selector__list-item` | `<li>` | Initiates a dual list selector pane menu list item. **Required** |
| `.pf-c-dual-list-selector__item` | `<button>`, `<div>` | Initiates a dual list selector pane menu item. **Required** |
| `.pf-c-dual-list-selector__item-main` | `<span>` | Initiates a dual list selector pane menu item main container. **Required** |
| `.pf-c-dual-list-selector__item-check` | `<span>` | Initiates the dual list selector item check. |
| `.pf-c-dual-list-selector__item-count` | `<span>` | Initiates the dual list selector item count. |
| `.pf-c-dual-list-selector__item-toggle-icon` | `<span>` | Initiates the dual list selector item toggle icon. |
| `.pf-c-dual-list-selector__item-toggle` | `<button>` | Initiates the dual list selector item toggle. |
| `.pf-c-dual-list-selector__item-text` | `<span>` | Initiates a dual list selector pane menu item text. **Required** |
| `.pf-c-dual-list-selector__controls` | `<div>` | Initiates the dual list selector controls. **Required** |
| `.pf-c-dual-list-selector__controls-item` | `<div>` | Initiates the dual list selector controls item. **Required** |
| `.pf-m-available` | `.pf-c-dual-list-selector__pane` | Defines a pane as the available list. |
| `.pf-m-chosen` | `.pf-c-dual-list-selector__pane` | Defines a pane as the chosen list. |
| `.pf-m-selected` | `.pf-c-dual-list-selector__list-item` | Modifies the menu list item for the selected state. |
