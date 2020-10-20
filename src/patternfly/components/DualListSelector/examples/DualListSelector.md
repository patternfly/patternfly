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
  {{#> dual-list-selector-pane dual-list-selector-pane--modifier="pf-m-available"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Title text
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" placeholder="Filter options" id="' dual-list-selector--id '-filter" aria-label="Filter options"')}}
      {{/dual-list-selector-tools-filter}}
      {{#> dual-list-selector-tools-actions}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> button button--modifier="pf-m-plain"}}
            <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
          {{/button}}
        {{/dual-list-selector-tools-actions-item}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> dropdown id=(concat "dropdown-kebab-" dual-list-selector--id) dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
        {{/dual-list-selector-tools-actions-item}}
      {{/dual-list-selector-tools-actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        Status text
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
        {{#> dual-list-selector-list-item}}
          {{#> dual-list-selector-item}}
            {{#> dual-list-selector-item-text}}
              Item text
            {{/dual-list-selector-item-text}}
            {{/dual-list-selector-item}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item dual-list-selector-list-item--modifier="pf-m-selected"}}
          {{#> dual-list-selector-item}}
            {{#> dual-list-selector-item-text}}
              Item text
            {{/dual-list-selector-item-text}}
          {{/dual-list-selector-item}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{#> dual-list-selector-item}}
            {{#> dual-list-selector-item-text}}
              Item text
            {{/dual-list-selector-item-text}}
          {{/dual-list-selector-item}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{#> dual-list-selector-item}}
            {{#> dual-list-selector-item-text}}
              Item text
            {{/dual-list-selector-item-text}}
          {{/dual-list-selector-item}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{#> dual-list-selector-item}}
            {{#> dual-list-selector-item-text}}
              Item text
            {{/dual-list-selector-item-text}}
          {{/dual-list-selector-item}}
        {{/dual-list-selector-list-item}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}

  {{#> dual-list-selector-controls}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain"}}
        <i class="fas fa-fw fa-angle-right"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain"}}
        <i class="fas fa-fw fa-angle-double-right"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain"}}
        <i class="fas fa-fw fa-angle-double-left"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
    {{#> dual-list-selector-controls-item}}
      {{#> button button--modifier="pf-m-plain"}}
        <i class="fas fa-fw fa-angle-left"></i>
      {{/button}}
    {{/dual-list-selector-controls-item}}
  {{/dual-list-selector-controls}}

  {{#> dual-list-selector-pane dual-list-selector-pane--modifier="pf-m-selected"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Title text
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" placeholder="Filter options" id="' dual-list-selector--id '-filter" aria-label="Filter options"')}}
      {{/dual-list-selector-tools-filter}}
      {{#> dual-list-selector-tools-actions}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> button button--modifier="pf-m-plain"}}
            <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
          {{/button}}
        {{/dual-list-selector-tools-actions-item}}
        {{#> dual-list-selector-tools-actions-item}}
          {{#> dropdown id=(concat "dropdown-kebab-" dual-list-selector--id) dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
        {{/dual-list-selector-tools-actions-item}}
      {{/dual-list-selector-tools-actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        Status text
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
        {{#> dual-list-selector-list-item}}
          {{#> dual-list-selector-item}}
            {{#> dual-list-selector-item-text}}
              Item text
            {{/dual-list-selector-item-text}}
            {{/dual-list-selector-item}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{#> dual-list-selector-item}}
            {{#> dual-list-selector-item-text}}
              Item text
            {{/dual-list-selector-item-text}}
          {{/dual-list-selector-item}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{#> dual-list-selector-item}}
            {{#> dual-list-selector-item-text}}
              Item text
            {{/dual-list-selector-item-text}}
          {{/dual-list-selector-item}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{#> dual-list-selector-item}}
            {{#> dual-list-selector-item-text}}
              Item text
            {{/dual-list-selector-item-text}}
          {{/dual-list-selector-item}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{#> dual-list-selector-item}}
            {{#> dual-list-selector-item-text}}
              Item text
            {{/dual-list-selector-item-text}}
          {{/dual-list-selector-item}}
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
| `.pf-c-dual-list-selector__menu` | `<div>` | Initiates a dual list selector pane menu container. **Required** |
| `.pf-c-dual-list-selector__list` | `<ul>` | Initiates a dual list selector pane menu list. **Required** |
| `.pf-c-dual-list-selector__list-item` | `<li>` | Initiates a dual list selector pane menu list item. **Required** |
| `.pf-c-dual-list-selector__item` | `<button>`, `<div>` | Initiates a dual list selector pane menu item. **Required** |
| `.pf-c-dual-list-selector__item-main` | `<span>` | Initiates a dual list selector pane menu item main container. **Required** |
| `.pf-c-dual-list-selector__item-text` | `<span>` | Initiates a dual list selector pane menu item text. **Required** |
| `.pf-c-dual-list-selector__controls` | `<div>` | Initiates the dual list selector controls. **Required** |
| `.pf-c-dual-list-selector__controls-item` | `<div>` | Initiates the dual list selector controls item. **Required** |
| `.pf-m-selected` | `.pf-c-dual-list-selector__list-item` | Modifies the menu list item for the selected state. |
