---
title: Toolbar
section: components
cssPrefix: pf-c-toolbar
---

## Examples
```hbs title=Basic isFullscreen
{{#> toolbar}}
  {{#> dropdown dropdown--modifier="pf-c-toolbar__bulk-select" dropdown--IsBulkSelect="true" dropdown--IsSplitButton="true" dropdown-toggle--type="div" dropdown-toggle--modifier="pf-m-split-button" dropdown-menu--toggle-id="toolbar-simple-split-button-dropdown-simple-example-button"}}
    {{> dropdown-toggle-check dropdown-toggle-check--id=(concat toolbar--id '-split-button-dropdown-simple-example-check') aria-label="Select all"}}
    {{> dropdown-toggle-button dropdown--IsToggleButton="true" dropdown-toggle-button--id=(concat toolbar--id '-split-button-dropdown-simple-example-button')  aria-label="Select"}}
  {{/dropdown}}
  {{#> button button--modifier="pf-m-plain pf-c-toolbar__filter-toggle" button--attribute='aria-label="Filter results"'}}
    <i class="fas fa-filter" aria-hidden="true"></i>
  {{/button}}
  {{#> toolbar-filter}}
    {{#> select id=(concat toolbar--id '-select-checkbox') select--IsCheckboxSelect="true"}}
      <i class="fas fa-filter" aria-hidden="true"></i>
      Filter
    {{/select}}
  {{/toolbar-filter}}
  {{#> options-menu id=(concat toolbar--id '-options-menu')  options-menu--modifier="pf-c-toolbar__sort"}}
    {{#> options-menu-toggle options-menu-toggle--modifier="pf-m-plain" options-menu-toggle--attribute='aria-label="Sort by"'}}
      <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
    {{/options-menu-toggle}}
    {{> options-menu-multiple}}
  {{/options-menu}}
  {{#> toolbar-action-group}}
    {{#> button button--modifier="pf-m-primary"}}
      Action
    {{/button}}
    {{#> button button--modifier="pf-m-link"}}
      Secondary
    {{/button}}
  {{/toolbar-action-group}}
  {{#> dropdown id=(concat toolbar--id '-dropdown-collapsed') dropdown--modifier="pf-c-toolbar__action-list" dropdown--HasKebabIcon="true" dropdown-toggle--modifier="pf-m-plain" aria-label="Actions"}}
  {{/dropdown}}
  {{#> toolbar-total-items}}37 items{{/toolbar-total-items}}
  {{#> toolbar-filter-list}}{{/toolbar-filter-list}}
{{/toolbar}}
```

```hbs title=With-pagination isFullscreen
{{#> toolbar}}
  {{#> dropdown dropdown--modifier="pf-c-toolbar__bulk-select" dropdown--IsBulkSelect="true" dropdown--IsSplitButton="true" dropdown-toggle--type="div" dropdown-toggle--modifier="pf-m-split-button" dropdown-menu--toggle-id=(concat toolbar--id '-split-button-dropdown-button')}}
    {{> dropdown-toggle-check dropdown-toggle-check--id=(concat toolbar--id '-split-button-dropdown-check') aria-label="Select all"}}
    {{> dropdown-toggle-button dropdown--IsToggleButton="true" dropdown-toggle-button--id=(concat toolbar--id '-split-button-dropdown-button')  aria-label="Select"}}
  {{/dropdown}}
  {{#> button button--modifier="pf-m-plain pf-c-toolbar__filter-toggle" button--attribute='aria-label="Filter results"'}}
    <i class="fas fa-filter" aria-hidden="true"></i>
  {{/button}}
  {{#> toolbar-filter}}
    {{#> select id=(concat toolbar--id '-select-checkbox') select--IsCheckboxSelect="true"}}
      <i class="fas fa-filter" aria-hidden="true"></i>
      Status
    {{/select}}
  {{/toolbar-filter}}
  {{#> options-menu id=(concat toolbar--id '-options-menu')  options-menu--modifier="pf-c-toolbar__sort"}}
    {{#> options-menu-toggle options-menu-toggle--modifier="pf-m-plain" options-menu-toggle--attribute='aria-label="Sort by"'}}
      <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
    {{/options-menu-toggle}}
    {{> options-menu-multiple}}
  {{/options-menu}}
  {{#> toolbar-action-group}}
    {{#> button button--modifier="pf-m-primary"}}
      Action
    {{/button}}
    {{#> button button--modifier="pf-m-link"}}
      Secondary
    {{/button}}
  {{/toolbar-action-group}}
  {{#> dropdown id=(concat toolbar--id '-dropdown') dropdown--modifier="pf-c-toolbar__action-list" dropdown--HasKebabIcon="true" dropdown-toggle--modifier="pf-m-plain" aria-label="Actions"}}
  {{/dropdown}}
  {{#> pagination pagination--attribute='aria-label="Element pagination"'}}
    {{#> pagination-total-items}}
      37 items
    {{/pagination-total-items}}

    {{> pagination-options-menu id=(concat toolbar--id '-pagination-options-menu')  options-menu--IsText="true"}}

    {{#> pagination-nav}}
      {{#> button button--modifier="pf-m-plain pf-m-disabled" button--attribute='aria-label="Go to first page" aria-disabled="true"'}}
        <i class="fas fa-angle-double-left" aria-hidden="true"></i>
      {{/button}}
      {{#> button button--modifier="pf-m-plain pf-m-disabled" button--attribute='aria-label="Go to previous page" aria-disabled="true"'}}
        <i class="fas fa-angle-left" aria-hidden="true"></i>
      {{/button}}

      {{#> pagination-nav-page-select pagination-nav-page-select--attribute='aria-label="Current page 1 of 4"'}}
        {{> form-control input="true" controlType="input" form-control--attribute='aria-label="Current page" type="number" min="1" max="4" value="1"'}}
        <span aria-hidden="true">of 4</span>
      {{/pagination-nav-page-select}}

      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Go to next page"'}}
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      {{/button}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Go to last page"'}}
        <i class="fas fa-angle-double-right" aria-hidden="true"></i>
      {{/button}}
    {{/pagination-nav}}
  {{/pagination}}
  {{#> toolbar-filter-list}}{{/toolbar-filter-list}}
{{/toolbar}}
```

```hbs title=With-pagination-and-expanded-menus isFullscreen
{{#> toolbar}}
  {{#> dropdown dropdown--modifier="pf-c-toolbar__bulk-select" dropdown--IsExpanded="true" dropdown--IsBulkSelect="true" dropdown--IsSplitButton="true" dropdown-toggle--type="div" dropdown-toggle--modifier="pf-m-split-button" dropdown-menu--toggle-id=(concat toolbar--id '-split-button-dropdown-button')}}
    {{> dropdown-toggle-check dropdown-toggle-check--id=(concat toolbar--id '-split-button-dropdown-check') aria-label="Select all"}}
    {{> dropdown-toggle-button dropdown--IsToggleButton="true" dropdown-toggle-button--id=(concat toolbar--id '-split-button-dropdown-button') aria-label="Select"}}
  {{/dropdown}}
  {{#> button button--modifier="pf-m-plain pf-c-toolbar__filter-toggle" button--attribute='aria-label="Filter results"'}}
    <i class="fas fa-filter" aria-hidden="true"></i>
  {{/button}}
  {{#> toolbar-filter}}
    {{#> select id=(concat toolbar--id '-select-checkbox') select--IsCheckboxSelect="true"}}
      <i class="fas fa-filter" aria-hidden="true"></i>
      Status
    {{/select}}
  {{/toolbar-filter}}
  {{#> options-menu id=(concat toolbar--id '-options-menu')  options-menu--modifier="pf-c-toolbar__sort" options-menu--IsExpanded="true"}}
    {{#> options-menu-toggle options-menu-toggle--modifier="pf-m-plain" options-menu-toggle--attribute='aria-label="Sort by"'}}
      <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
    {{/options-menu-toggle}}
    {{> options-menu-multiple}}
  {{/options-menu}}
  {{#> toolbar-action-group}}
    {{#> button button--modifier="pf-m-primary"}}
      Action
    {{/button}}
    {{#> button button--modifier="pf-m-link"}}
      Secondary
    {{/button}}
  {{/toolbar-action-group}}
  {{#> dropdown id=(concat toolbar--id '-dropdown-simple') dropdown--IsBasicActionMenu="true" dropdown--IsExpanded="true" dropdown--modifier="pf-c-toolbar__action-list" dropdown--HasKebabIcon="true" dropdown-toggle--modifier="pf-m-plain" aria-label="Actions"}}
  {{/dropdown}}
  {{#> pagination pagination--attribute='aria-label="Element pagination"'}}
    {{#> pagination-total-items}}
      37 items
    {{/pagination-total-items}}

    {{> pagination-options-menu id=(concat toolbar--id '-pagination-options-menu') options-menu--IsExpanded="true"  options-menu--IsText="true"}}

    {{#> pagination-nav}}
      {{#> button button--modifier="pf-m-plain pf-m-disabled" button--attribute='aria-label="Go to first page" aria-disabled="true"'}}
        <i class="fas fa-angle-double-left" aria-hidden="true"></i>
      {{/button}}
      {{#> button button--modifier="pf-m-plain pf-m-disabled" button--attribute='aria-label="Go to previous page" aria-disabled="true"'}}
        <i class="fas fa-angle-left" aria-hidden="true"></i>
      {{/button}}

      {{#> pagination-nav-page-select pagination-nav-page-select--attribute='aria-label="Current page 1 of 4"'}}
        {{> form-control input="true" controlType="input" form-control--attribute='aria-label="Current page" type="number" min="1" max="4" value="1"'}}
        <span aria-hidden="true">of 4</span>
      {{/pagination-nav-page-select}}

      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Go to next page"'}}
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      {{/button}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Go to last page"'}}
        <i class="fas fa-angle-double-right" aria-hidden="true"></i>
      {{/button}}
    {{/pagination-nav}}
  {{/pagination}}
  {{#> toolbar-filter-list}}{{/toolbar-filter-list}}
{{/toolbar}}
```

```hbs title=With-filter-menu-expanded isFullscreen
{{#> toolbar}}
  {{#> dropdown dropdown--modifier="pf-c-toolbar__bulk-select" dropdown--IsBulkSelect="true" dropdown--IsSplitButton="true" dropdown-toggle--type="div" dropdown-toggle--modifier="pf-m-split-button" dropdown-menu--toggle-id=(concat toolbar--id '-split-dropdown-button')}}
    {{> dropdown-toggle-check dropdown-toggle-check--id=(concat toolbar--id '-split-dropdown-check') aria-label="Select all"}}
    {{> dropdown-toggle-button dropdown--IsToggleButton="true" dropdown-toggle-button--id=(concat toolbar--id '-split-dropdown-button')  aria-label="Select"}}
  {{/dropdown}}
  {{#> button button--modifier="pf-m-plain pf-c-toolbar__filter-toggle" button--attribute='aria-label="Filter results"'}}
    <i class="fas fa-filter" aria-hidden="true"></i>
  {{/button}}
  {{#> toolbar-filter}}
    {{#> select id=(concat toolbar--id '-select-checkbox') select--IsExpanded="true" select--IsCheckboxSelect="true"}}
      <i class="fas fa-filter" aria-hidden="true"></i>
      Status
    {{/select}}
  {{/toolbar-filter}}
  {{#> options-menu id=(concat toolbar--id '-options-menu')  options-menu--modifier="pf-c-toolbar__sort"}}
    {{#> options-menu-toggle options-menu-toggle--modifier="pf-m-plain" options-menu-toggle--attribute='aria-label="Sort by"'}}
      <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
    {{/options-menu-toggle}}
    {{> options-menu-multiple}}
  {{/options-menu}}
  {{#> toolbar-action-group}}
    {{#> button button--modifier="pf-m-primary"}}
      Action
    {{/button}}
    {{#> button button--modifier="pf-m-link"}}
      Secondary
    {{/button}}
  {{/toolbar-action-group}}
  {{#> dropdown id=(concat toolbar--id '-dropdown') dropdown--modifier="pf-c-toolbar__action-list" dropdown--HasKebabIcon="true" dropdown-toggle--modifier="pf-m-plain" aria-label="Actions"}}
  {{/dropdown}}
  {{#> toolbar-total-items}}37 items{{/toolbar-total-items}}
  {{#> toolbar-filter-list}}{{/toolbar-filter-list}}
{{/toolbar}}
```

```hbs title=With-filter-menu-expanded+checked isFullscreen
{{#> toolbar}}
  {{#> dropdown dropdown--modifier="pf-c-toolbar__bulk-select" dropdown--IsBulkSelect="true" dropdown--IsSplitButton="true" dropdown-toggle--type="div" dropdown-toggle--modifier="pf-m-split-button" dropdown-menu--toggle-id=(concat toolbar--id '-split-button-dropdown-button')}}
    {{> dropdown-toggle-check dropdown-toggle-check--id=(concat toolbar--id '-split-button-dropdown-check') aria-label="Select all"}}
    {{> dropdown-toggle-button dropdown--IsToggleButton="true" dropdown-toggle-button--id=(concat toolbar--id '-split-button-dropdown-button') aria-label="Select"}}
  {{/dropdown}}
  {{#> button button--modifier="pf-m-plain pf-c-toolbar__filter-toggle" button--attribute='aria-label="Filter results"'}}
    <i class="fas fa-filter" aria-hidden="true"></i>
    {{#> badge badge--modifier="pf-m-read"}}3{{/badge}}
  {{/button}}
  {{#> toolbar-filter}}
    {{#> select id=(concat toolbar--id '-select-checkbox') select--IsChecked="true" select--IsExpanded="true" select--IsCheckboxSelect="true" select--ItemIsSelected="true"}}
      <i class="fas fa-filter" aria-hidden="true"></i>
      Status
    {{/select}}
  {{/toolbar-filter}}
  {{#> options-menu id=(concat toolbar--id '-options-menu')  options-menu--modifier="pf-c-toolbar__sort"}}
    {{#> options-menu-toggle options-menu-toggle--modifier="pf-m-plain" options-menu-toggle--attribute='aria-label="Sort by"'}}
      <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
    {{/options-menu-toggle}}
    {{> options-menu-multiple}}
  {{/options-menu}}
  {{#> toolbar-action-group}}
    {{#> button button--modifier="pf-m-primary"}}
      Action
    {{/button}}
    {{#> button button--modifier="pf-m-link"}}
      Secondary
    {{/button}}
  {{/toolbar-action-group}}
  {{#> dropdown id=(concat toolbar--id '-dropdown-simple') dropdown--modifier="pf-c-toolbar__action-list" dropdown--HasKebabIcon="true" dropdown-toggle--modifier="pf-m-plain" aria-label="Actions"}}
  {{/dropdown}}
  {{#> toolbar-total-items}}36 of 37 Items{{/toolbar-total-items}}
  {{#> toolbar-filter-list toolbar-filter-list--modifier="pf-m-expanded"}}
    {{#> chip-group chip-group--modifier="pf-m-toolbar" chip-group--id=(concat toolbar--id '-filter')}}
      {{#> chip-group-list-item}}
        {{#> chip-group-label}}
            Status
        {{/chip-group-label}}
        {{#> chip-group newcontext chip-group--id=chip-group--id }}
          {{#> chip}}
          {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id '-chip-one"')}}
            Stopped
          {{/chip-text}}
          {{#> badge badge--modifier="pf-m-read"}}18{{/badge}}
          {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id '-remove-chip-one ' chip-group--id '-chip-one" aria-label="Remove" id="' chip-group--id '-remove-chip-one"')}}
            <i class="fas fa-times-circle" aria-hidden="true"></i>
          {{/button}}
          {{/chip}}
          {{#> chip}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id '-chip-two"')}}
              Down
            {{/chip-text}}
            {{#> badge badge--modifier="pf-m-read"}}12{{/badge}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id '-remove-chip-two ' chip-group--id '-chip-two" aria-label="Remove" id="' chip-group--id '-remove-chip-two"')}}
              <i class="fas fa-times-circle" aria-hidden="true"></i>
            {{/button}}
          {{/chip}}
          {{#> chip}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id '-chip-three"')}}
              Needs maintenance
            {{/chip-text}}
            {{#> badge badge--modifier="pf-m-read"}}6{{/badge}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id '-remove-chip-three ' chip-group--id '-chip-three" aria-label="Remove" id="' chip-group--id '-remove-chip-three"')}}
              <i class="fas fa-times-circle" aria-hidden="true"></i>
            {{/button}}
          {{/chip}}
        {{/chip-group}}
      {{/chip-group-list-item}}
    {{/chip-group}}
    {{#> button button--modifier="pf-m-link pf-c-toolbar__filter-clear"}}
      Clear filters
    {{/button}}
  {{/toolbar-filter-list}}
{{/toolbar}}
```

```hbs title=With-filter-group-expanded-on-mobile-(responsive) isFullscreen
{{#> toolbar}}
  {{#> dropdown dropdown--modifier="pf-c-toolbar__bulk-select" dropdown--IsBulkSelect="true" dropdown--IsSplitButton="true" dropdown-toggle--type="div" dropdown-toggle--modifier="pf-m-split-button" dropdown-menu--toggle-id=(concat toolbar--id '-split-button-dropdown-button')}}
    {{> dropdown-toggle-check dropdown-toggle-check--id=(concat toolbar--id '-split-button-dropdown-check') aria-label="Select all"}}
    {{> dropdown-toggle-button dropdown--IsToggleButton="true" dropdown-toggle-button--id=(concat toolbar--id '-split-button-dropdown-button') aria-label="Select"}}
  {{/dropdown}}
  {{#> button button--modifier="pf-m-plain pf-c-toolbar__filter-toggle pf-m-expanded" button--attribute='aria-label="Filter results"'}}
    <i class="fas fa-filter" aria-hidden="true"></i>
  {{/button}}
  {{#> toolbar-filter toolbar-filter--modifier="pf-m-expanded"}}
    {{#> select id=(concat toolbar--id '-select-checkbox') select--IsCheckboxSelect="true"}}
      <i class="fas fa-filter" aria-hidden="true"></i>
      Status
    {{/select}}
  {{/toolbar-filter}}
  {{#> options-menu id=(concat toolbar--id '-options-menu')  options-menu--modifier="pf-c-toolbar__sort"}}
    {{#> options-menu-toggle options-menu-toggle--modifier="pf-m-plain" options-menu-toggle--attribute='aria-label="Sort by"'}}
      <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
    {{/options-menu-toggle}}
    {{> options-menu-multiple}}
  {{/options-menu}}
  {{#> toolbar-action-group}}
    {{#> button button--modifier="pf-m-primary"}}
      Action
    {{/button}}
    {{#> button button--modifier="pf-m-link"}}
      Secondary
    {{/button}}
  {{/toolbar-action-group}}
  {{#> dropdown id=(concat toolbar--id '-dropdown') dropdown--modifier="pf-c-toolbar__action-list" dropdown--HasKebabIcon="true" dropdown-toggle--modifier="pf-m-plain" aria-label="Actions"}}
  {{/dropdown}}
  {{#> toolbar-total-items}}37 items{{/toolbar-total-items}}
  {{#> toolbar-filter-list}}{{/toolbar-filter-list}}
{{/toolbar}}
```

```hbs title=With-filter-group-expanded+checked-on-mobile-(responsive) isFullscreen
{{#> toolbar}}
  {{#> dropdown dropdown--modifier="pf-c-toolbar__bulk-select" dropdown--IsBulkSelect="true" dropdown--IsSplitButton="true" dropdown-toggle--type="div" dropdown-toggle--modifier="pf-m-split-button" dropdown-menu--toggle-id=(concat toolbar--id '-split-button-dropdown-button')}}
    {{> dropdown-toggle-check dropdown-toggle-check--id=(concat toolbar--id '-split-button-dropdown-check') aria-label="Select all"}}
    {{> dropdown-toggle-button dropdown--IsToggleButton="true" dropdown-toggle-button--id=(concat toolbar--id '-split-button-dropdown-button') aria-label="Select"}}
  {{/dropdown}}
  {{#> button button--modifier="pf-m-plain pf-c-toolbar__filter-toggle pf-m-expanded" button--attribute='aria-label="Filter results"'}}
    <i class="fas fa-filter" aria-hidden="true"></i>
    {{#> badge badge--modifier="pf-m-read"}}3{{/badge}}
  {{/button}}
  {{#> toolbar-filter toolbar-filter--modifier="pf-m-expanded"}}
    {{#> select id=(concat toolbar--id '-select-checkbox') select--IsChecked="true" select--IsExpanded="true" select--IsCheckboxSelect="true" select--ItemIsSelected="true"}}
      <i class="fas fa-filter" aria-hidden="true"></i>
      Status
    {{/select}}
  {{/toolbar-filter}}
  {{#> options-menu id=(concat toolbar--id '-options')  options-menu--modifier="pf-c-toolbar__sort"}}
    {{#> options-menu-toggle options-menu-toggle--modifier="pf-m-plain" options-menu-toggle--attribute='aria-label="Sort by"'}}
      <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
    {{/options-menu-toggle}}
    {{> options-menu-multiple}}
  {{/options-menu}}
  {{#> toolbar-action-group}}
    {{#> button button--modifier="pf-m-primary"}}
      Action
    {{/button}}
    {{#> button button--modifier="pf-m-link"}}
      Secondary
    {{/button}}
  {{/toolbar-action-group}}
  {{#> dropdown id=(concat toolbar--id '-dropdown-simple') dropdown--modifier="pf-c-toolbar__action-list" dropdown--HasKebabIcon="true" dropdown-toggle--modifier="pf-m-plain" aria-label="Actions"}}
  {{/dropdown}}
  {{#> toolbar-total-items}}36 of 37 Items{{/toolbar-total-items}}
  {{#> toolbar-filter-list toolbar-filter-list--modifier="pf-m-expanded"}}
    {{#> chip-group chip-group--modifier="pf-m-toolbar" chip-group--id=(concat toolbar--id '-chip-group')}}
      {{#> chip-group-list-item}}
        {{#> chip-group-label}}
            Status
        {{/chip-group-label}}
        {{#> chip-group newcontext chip-group--id=chip-group--id}}
          {{#> chip}}
          {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id '-chip-one"')}}
            Stopped
          {{/chip-text}}
          {{#> badge badge--modifier="pf-m-read"}}18{{/badge}}
          {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id '-remove-chip-one ' chip-group--id '-chip-one" aria-label="Remove" id="' chip-group--id '-remove-chip-one"')}}
            <i class="fas fa-times-circle" aria-hidden="true"></i>
          {{/button}}
          {{/chip}}
          {{#> chip}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id '-chip-two"')}}
              Down
            {{/chip-text}}
            {{#> badge badge--modifier="pf-m-read"}}12{{/badge}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id '-remove-chip-two ' chip-group--id '-chip-two" aria-label="Remove" id="' chip-group--id '-remove-chip-two"')}}
              <i class="fas fa-times-circle" aria-hidden="true"></i>
            {{/button}}
          {{/chip}}
          {{#> chip}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id '-chip-three"')}}
              Needs maintenance
            {{/chip-text}}
            {{#> badge badge--modifier="pf-m-read"}}6{{/badge}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id '-remove-chip-three ' chip-group--id '-chip-three" aria-label="Remove" id="' chip-group--id '-remove-chip-three"')}}
              <i class="fas fa-times-circle" aria-hidden="true"></i>
            {{/button}}
          {{/chip}}
        {{/chip-group}}
      {{/chip-group-list-item}}
    {{/chip-group}}
    {{#> button button--modifier="pf-m-link pf-c-toolbar__filter-clear"}}
      Clear filters
    {{/button}}
  {{/toolbar-filter-list}}
{{/toolbar}}
```

## Documentation
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role` or `aria` | `pf-c-toolbar` |  accessibility notes. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-toolbar` | `<div>` |  Initiates the toolbar component. **Required** |
| `.pf-c-toolbar__bulk-select` | `.pf-c-dropdown` |  Indicates the bulk select. |
| `.pf-c-toolbar__filter-toggle` | `.pf-c-button.pf-m-plain` |  Indicates the filter toggle button on small screens. **Required** |
| `.pf-c-toolbar__filter` | `<div>` |  Initiates the filter area. **Required** |
| `.pf-c-toolbar__sort` | `.pf-c-options-menu` |  Initiates the options menu for sorting options. |
| `.pf-c-toolbar__action-group` | `<div>` |  Initiates the action group. **Required. Note - at least one action is required.**|
| `.pf-c-toolbar__action-list` | `.pf-c-dropdown` |  Indicates the dropdown for an action list. |
| `.pf-c-pagination` | `<div>` |  Indicates the pagination component. |
| `.pf-c-toolbar__total-items` | `<div>` |  Initiates the currently displayed item count for use when there is no pagination and in mobile. **Required** |
| `.pf-c-toolbar__filter-list` | `.pf-c-chip-group` | Indicates the list of currently applied filters. **Required**|
| `.pf-m-expanded` | `.pf-c-toolbar__filter-toggle` | Modifies the mobile filter toggle for expanded state.
| `.pf-m-expanded` | `.pf-c-toolbar__filter` | Modifies filter for the expanded state on small screens.
| `.pf-m-expanded` | `.pf-c-toolbar__filter-list` | Modifies for the expanded state when filters are applied.
