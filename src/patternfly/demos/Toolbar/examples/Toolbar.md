---
id: Toolbar
section: components
---

import './Toolbar.css'

## Demos

### Toolbar attribute value search filter desktop
```hbs
{{#> toolbar toolbar--id="toolbar-attribute-value-search-filter-desktop-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show"}}
        {{> toolbar-toggle toolbar-toggle--IsExpanded="false"}}
        {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
          {{#> toolbar-item toolbar-item--modifier="pf-m-search-filter"}}
            {{#> input-group}}
              {{#> select select--attribute='style="width: 175px"' id=(concat toolbar--id '-select-name') select-toggle--icon="fas fa-filter"}}
                Name
              {{/select}}
              {{> search-input search-input--placeholder="Filter by name"}}
            {{/input-group}}
          {{/toolbar-item}}
        {{/toolbar-group}}
      {{/toolbar-group}}
      {{> toolbar-overflow-menu-example toolbar-overflow-menu-example--content="true" toolbar-overflow-menu-example--control="true"}}
      {{#> toolbar-item toolbar-item--modifier=(concat 'pf-m-pagination ' toolbar-item-pagination--modifier)}}
        {{#> pagination pagination--modifier="pf-m-compact pf-m-hidden pf-m-visible-on-md"}}
          {{#> pagination pagination--IsCompact="true"}}
            {{> pagination-options-menu id="pagination-options-menu-bottom-example"}}
            {{> pagination-nav-content}}
          {{/pagination}}
        {{/pagination}}
      {{/toolbar-item}}
    {{/toolbar-content-section}}
    {{> toolbar-expandable-content}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Toolbar attribute value search filter on mobile
```hbs
{{#> toolbar toolbar--id="toolbar-attribute-value-search-filter-mobile-example"}}
  {{#> toolbar-content toolbar-content--HasToggleGroup="true"}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group"}}
        {{> toolbar-toggle toolbar-toggle--modifier="pf-m-expanded" toolbar-toggle--IsExpanded="true"}}
      {{/toolbar-group}}
      {{> toolbar-overflow-menu-example toolbar-overflow-menu-example--control="true"}}
      {{#> toolbar-item toolbar-item--modifier=(concat 'pf-m-pagination ' toolbar-item-pagination--modifier)}}
        {{#> pagination pagination--modifier="pf-m-compact pf-m-hidden pf-m-visible-on-md"}}
          {{#> pagination pagination--IsCompact="true"}}
            {{> pagination-options-menu id="pagination-options-menu-bottom-example"}}
            {{> pagination-nav-content}}
          {{/pagination}}
        {{/pagination}}
      {{/toolbar-item}}
    {{/toolbar-content-section}}
    {{#> toolbar-expandable-content toolbar-expandable-content--IsExpanded="true"}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
        {{#> toolbar-item}}
          {{#> input-group}}
            {{#> select select--attribute='style="width: 175px"' id=(concat toolbar--id '-select-name-expanded') select-toggle--icon="fas fa-filter"}}
              Name
            {{/select}}
            {{> search-input search-input--placeholder="Filter by name"}}
          {{/input-group}}
        {{/toolbar-item}}
      {{/toolbar-group}}
    {{/toolbar-expandable-content}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Toolbar attribute value single select filter desktop
```hbs
{{#> toolbar toolbar--id="toolbar-attribute-value-single-select-filter-desktop-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show"}}
        {{> toolbar-toggle toolbar-toggle--IsExpanded="false"}}
        {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
          {{#> toolbar-item}}
            {{#> select select--attribute='style="width: 175px"' id=(concat toolbar--id '-select-status') select-toggle--icon="fas fa-filter"}}
              Status
            {{/select}}
          {{/toolbar-item}}
          {{#> toolbar-item}}
            {{#> select select--attribute='style="width: 200px"' id=(concat toolbar--id '-select-status-two') select--IsExpanded="true"}}
              Stopped
            {{/select}}
          {{/toolbar-item}}
        {{/toolbar-group}}
      {{/toolbar-group}}
      {{> toolbar-overflow-menu-example toolbar-overflow-menu-example--content="true" toolbar-overflow-menu-example--control="true"}}
      {{#> toolbar-item toolbar-item--modifier=(concat 'pf-m-pagination ' toolbar-item-pagination--modifier)}}
        {{#> pagination pagination--modifier="pf-m-compact pf-m-hidden pf-m-visible-on-md"}}
          {{#> pagination pagination--IsCompact="true"}}
            {{> pagination-options-menu id="pagination-options-menu-bottom-example"}}
            {{> pagination-nav-content}}
          {{/pagination}}
        {{/pagination}}
      {{/toolbar-item}}
    {{/toolbar-content-section}}
    {{> toolbar-expandable-content}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Toolbar attribute value single select filter on mobile
```hbs
{{#> toolbar toolbar--id="toolbar-attribute-value-single-select-filter-mobile-example"}}
  {{#> toolbar-content toolbar-content--HasToggleGroup="true"}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group"}}
        {{> toolbar-toggle toolbar-toggle--modifier="pf-m-expanded" toolbar-toggle--IsExpanded="true"}}
      {{/toolbar-group}}
      {{> toolbar-overflow-menu-example toolbar-overflow-menu-example--control="true"}}
      {{#> toolbar-item toolbar-item--modifier=(concat 'pf-m-pagination ' toolbar-item-pagination--modifier)}}
        {{#> pagination pagination--modifier="pf-m-compact pf-m-hidden pf-m-visible-on-md"}}
          {{#> pagination pagination--IsCompact="true"}}
            {{> pagination-options-menu id="pagination-options-menu-bottom-example"}}
            {{> pagination-nav-content}}
          {{/pagination}}
        {{/pagination}}
      {{/toolbar-item}}
    {{/toolbar-content-section}}
    {{#> toolbar-expandable-content toolbar-expandable-content--IsExpanded="true"}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
      {{#> toolbar-item}}
        {{#> select id=(concat toolbar--id '-select-status-expanded') select-toggle--icon="fas fa-filter"}}
          Status
        {{/select}}
      {{/toolbar-item}}
      {{#> toolbar-item}}
        {{#> select id=(concat toolbar--id '-select-status-two-expanded') select--IsExpanded="true"}}
          Stopped
        {{/select}}
      {{/toolbar-item}}
    {{/toolbar-group}}
    {{/toolbar-expandable-content}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Toolbar attribute value checkbox select filter desktop
```hbs
{{#> toolbar toolbar--id="toolbar-attribute-value-checkbox-select-filter-desktop-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show"}}
        {{> toolbar-toggle toolbar-toggle--IsExpanded="false"}}
        {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
          {{#> toolbar-item}}
            {{#> select select--attribute='style="width: 175px"' id=(concat toolbar--id '-select-status') select-toggle--icon="fas fa-filter"}}
              Status
            {{/select}}
          {{/toolbar-item}}
          {{#> toolbar-item}}
            {{#> select id=(concat toolbar--id '-select-filter-status') select--IsChecked="true" select--IsCheckboxSelect="true" select--IsExpanded="true"}}
              Filter by status
            {{/select}}
          {{/toolbar-item}}
        {{/toolbar-group}}
      {{/toolbar-group}}
      {{> toolbar-overflow-menu-example toolbar-overflow-menu-example--content="true" toolbar-overflow-menu-example--control="true"}}
      {{#> toolbar-item toolbar-item--modifier=(concat 'pf-m-pagination ' toolbar-item-pagination--modifier)}}
        {{#> pagination pagination--modifier="pf-m-compact pf-m-hidden pf-m-visible-on-md"}}
          {{#> pagination pagination--IsCompact="true"}}
            {{> pagination-options-menu id="pagination-options-menu-bottom-example"}}
            {{> pagination-nav-content}}
          {{/pagination}}
        {{/pagination}}
      {{/toolbar-item}}
    {{/toolbar-content-section}}
    {{> toolbar-expandable-content}}
  {{/toolbar-content}}
  {{#> toolbar-content toolbar-content--modifier="pf-m-chip-container"}}
    {{#> toolbar-item toolbar-item--modifier=(concat 'pf-m-chip-group ' toolbar-item-chip-group--modifier)}}
      {{#> chip-group chip-group--modifier="pf-m-category"}}
        {{#> chip-group-main}}
          {{#> chip-group-label chip-group-label--attribute=(concat 'id="' toolbar--id '-chip-group-label"')}}
            Status
          {{/chip-group-label}}
          {{#> chip-group-list chip-group-list--attribute=(concat 'aria-labelledby="' toolbar--id '-chip-group-label"')}}
            {{#> chip-group-list-item}}
              {{#> chip}}
                {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip-one"')}}
                  Canceled
                {{/chip-text}}
                {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove-chip-one ' chip-group--id 'chip-one" aria-label="Remove" id="' chip-group--id 'remove-chip-one"')}}
                  <i class="fas fa-times" aria-hidden="true"></i>
                {{/button}}
              {{/chip}}
            {{/chip-group-list-item}}
            {{#> chip-group-list-item}}
              {{#> chip}}
                {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip-two"')}}
                  Paused
                {{/chip-text}}
                {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove-chip-two ' chip-group--id 'chip-two" aria-label="Remove" id="' chip-group--id 'remove-chip-two"')}}
                  <i class="fas fa-times" aria-hidden="true"></i>
                {{/button}}
              {{/chip}}
            {{/chip-group-list-item}}
            {{#> chip-group-list-item}}
              {{#> chip}}
                {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip-three"')}}
                  Restarted
                {{/chip-text}}
                {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove-chip-three ' chip-group--id 'chip-three" aria-label="Remove" id="' chip-group--id 'remove-chip-three"')}}
                  <i class="fas fa-times" aria-hidden="true"></i>
                {{/button}}
              {{/chip}}
            {{/chip-group-list-item}}
          {{/chip-group-list}}
        {{/chip-group-main}}
      {{/chip-group}}
    {{/toolbar-item}}
    {{> toolbar-item-clear}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Toolbar attribute value checkbox select filter on mobile
```hbs
{{#> toolbar toolbar--id="toolbar-attribute-value-checkbox-select-filter-mobile-example"}}
  {{#> toolbar-content toolbar-content--HasToggleGroup="true"}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group"}}
        {{> toolbar-toggle toolbar-toggle--modifier="pf-m-expanded" toolbar-toggle--IsExpanded="true"}}
      {{/toolbar-group}}
      {{> toolbar-overflow-menu-example toolbar-overflow-menu-example--control="true"}}
      {{#> toolbar-item toolbar-item--modifier=(concat 'pf-m-pagination ' toolbar-item-pagination--modifier)}}
        {{#> pagination pagination--modifier="pf-m-compact pf-m-hidden pf-m-visible-on-md"}}
          {{#> pagination pagination--IsCompact="true"}}
            {{> pagination-options-menu id="pagination-options-menu-bottom-example"}}
            {{> pagination-nav-content}}
          {{/pagination}}
        {{/pagination}}
      {{/toolbar-item}}
    {{/toolbar-content-section}}
    {{#> toolbar-expandable-content toolbar-expandable-content--IsExpanded="true"}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
        {{#> toolbar-item}}
          {{#> select id=(concat toolbar--id '-select-status-expanded') select-toggle--icon="fas fa-filter"}}
            Status
          {{/select}}
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{#> select id=(concat toolbar--id '-select-filter-status-expanded') select--IsChecked="true" select--IsCheckboxSelect="true"}}
            Filter by status
          {{/select}}
        {{/toolbar-item}}
        {{#> toolbar-item toolbar-item--modifier=(concat 'pf-m-chip-group ' toolbar-item-chip-group--modifier)}}
          {{#> chip-group chip-group--modifier="pf-m-category"}}
            {{#> chip-group-main}}
              {{#> chip-group-label chip-group-label--attribute=(concat 'id="' toolbar--id '-chip-group-label"')}}
                Status
              {{/chip-group-label}}
              {{#> chip-group-list chip-group-list--attribute=(concat 'aria-labelledby=" 'toolbar--id '-chip-group-label"')}}
                {{#> chip-group-list-item}}
                  {{#> chip}}
                    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip-one"')}}
                      Canceled
                    {{/chip-text}}
                    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove-chip-one ' chip-group--id 'chip-one" aria-label="Remove" id="' chip-group--id 'remove-chip-one"')}}
                      <i class="fas fa-times" aria-hidden="true"></i>
                    {{/button}}
                  {{/chip}}
                {{/chip-group-list-item}}
                {{#> chip-group-list-item}}
                  {{#> chip}}
                    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip-two"')}}
                      Paused
                    {{/chip-text}}
                    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove-chip-two ' chip-group--id 'chip-two" aria-label="Remove" id="' chip-group--id 'remove-chip-two"')}}
                      <i class="fas fa-times" aria-hidden="true"></i>
                    {{/button}}
                  {{/chip}}
                {{/chip-group-list-item}}
                {{#> chip-group-list-item}}
                  {{#> chip}}
                    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip-three"')}}
                      Restarted
                    {{/chip-text}}
                    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove-chip-three ' chip-group--id 'chip-three" aria-label="Remove" id="' chip-group--id 'remove-chip-three"')}}
                      <i class="fas fa-times" aria-hidden="true"></i>
                    {{/button}}
                  {{/chip}}
                {{/chip-group-list-item}}
              {{/chip-group-list}}
            {{/chip-group-main}}
          {{/chip-group}}
        {{/toolbar-item}}
      {{/toolbar-group}}
      {{> toolbar-item-clear}}
    {{/toolbar-expandable-content}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Toolbar pagination management on mobile
```hbs isFullscreen
{{> page-template page-template--id="toolbar-pagination-management-example"}}

{{#* inline "page-template-main-content"}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}
  {{#> page-main-section}}
    {{#> toolbar toolbar--id=(concat page-template--id "-toolbar") toolbar--modifier="pf-m-nowrap"}}
      {{#> toolbar-content}}
        {{#> toolbar-content-section toolbar-content-section--modifier="pf-m-nowrap"}}
          {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show"}}
            {{> toolbar-toggle toolbar-toggle--IsExpanded="false"}}
            {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
              {{#> toolbar-item toolbar-item--modifier="pf-m-search-filter"}}
                {{#> input-group}}
                  {{#> select select--attribute='style="width: 175px"' id=(concat toolbar--id '-select-name') select-toggle--icon="fas fa-filter"}}
                    Name
                  {{/select}}
                  {{> search-input search-input--placeholder="Filter by name"}}
                {{/input-group}}
              {{/toolbar-item}}
            {{/toolbar-group}}
          {{/toolbar-group}}
          {{> toolbar-overflow-menu-example toolbar-overflow-menu-example--control="true"}}
          {{#> toolbar-item toolbar-item--modifier=(concat 'pf-m-pagination ' toolbar-item-pagination--modifier)}}
            {{#> pagination pagination--modifier="pf-m-compact pf-m-hidden pf-m-visible-on-md"}}
              {{#> pagination pagination--IsCompact="true"}}
                {{> pagination-options-menu id="pagination-options-menu-bottom-example"}}
                {{> pagination-nav-content}}
              {{/pagination}}
            {{/pagination}}
          {{/toolbar-item}}
        {{/toolbar-content-section}}
        {{> toolbar-expandable-content}}
      {{/toolbar-content}}
    {{/toolbar}}
    <div>
      {{> table-simple-table page--id="toolbar-and-table-static-search-overflow-menu-collapsed"}}
      {{#> pagination pagination--modifier="pf-m-bottom"}}
        {{> pagination-options-menu id="pagination-options-menu-bottom-collapsed-example" pagination-options-menu--modifier="pf-m-top"}}
        {{> pagination-nav-content}}
      {{/pagination}}
    </div>
  {{/page-main-section}}
{{/inline}}
```