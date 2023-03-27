---
id: Toolbar
section: components
---

import './Toolbar.css'

## Demos

### Toolbar attribute value search filter on desktop
```hbs
{{#> toolbar toolbar--id="toolbar-attribute-value-search-filter-desktop-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show"}}
        {{> toolbar-toggle toolbar-toggle--IsExpanded="false"}}
        {{> toolbar-item-search-filter}}
      {{/toolbar-group}}
      {{> toolbar-overflow-menu-example toolbar-overflow-menu-example--content="true" toolbar-overflow-menu-example--control="true"}}
      {{#> toolbar-item toolbar-item--modifier=(concat 'pf-m-pagination ' toolbar-item-pagination--modifier)}}
        {{#> pagination pagination--modifier="pf-m-compact pf-m-hidden pf-m-visible-on-md"}}
          {{#> pagination pagination--IsCompact="true"}}
            {{> pagination-options-menu pagination-options-menu--id=(concat toolbar--id '-pagination-options-menu')}}
            {{> pagination-nav-content}}
          {{/pagination}}
        {{/pagination}}
      {{/toolbar-item}}
    {{/toolbar-content-section}}
    {{> toolbar-expandable-content}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Toolbar with validation on desktop
```hbs isFullscreen
{{> page-template page-template--id="toolbar-pagination-management-example"}}

{{#* inline "page-template-main-content"}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}
  {{#> page-main-section}}
    {{#> toolbar toolbar--id="toolbar-with-validation-example"}}
      {{#> toolbar-content}}
        {{#> toolbar-content-section}}
          {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show-on-2xl"}}
            {{> toolbar-toggle toolbar-toggle--IsExpanded="false"}}
            {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
              {{#> toolbar-item}}
                {{#> input-group input-group--attribute=(concat 'aria-label="search filter" role="group"')}}
                  {{#> select select--id=(concat toolbar--id '-select-month') select--width='160px' select-toggle--icon="fas fa-filter"}}
                    Last month
                  {{/select}}
                  {{#> date-picker date-picker--id=(concat toolbar--id "-helper-text") helper-text--value="MM/DD/YYYY"}}
                    {{#> input-group}}
                      {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="2020-03-05" id="' date-picker--id '-input" name="' date-picker--id '-input" aria-label="Date picker"')}}
                      {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Toggle date picker"'}}
                        <i class="fas fa-calendar-alt" aria-hidden="true"></i>
                      {{/button}}
                    {{/input-group}}
                  {{/date-picker}}
                  {{#> date-picker date-picker--id=(concat toolbar--id "-invalid") helper-text--value="Max: 08/10/2022" helper-text-item--IsError="true"}}
                    {{#> input-group}}
                      {{> form-control controlType="input" input="true" form-control--attribute=(concat 'aria-invalid="true" type="text" value="2020-03-05" id="' date-picker--id '-input" name="' date-picker--id '-input" aria-label="Date picker"')}}
                      {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Toggle date picker"'}}
                        <i class="fas fa-calendar-alt" aria-hidden="true"></i>
                      {{/button}}
                    {{/input-group}}
                    {{> date-picker-helper-text helper-text--value="MM/DD/YYYY" }}
                  {{/date-picker}}
                {{/input-group}}
              {{/toolbar-item}}
            {{/toolbar-group}}
            {{> toolbar-item-search-filter toolbar-items-search-filter--text="Description" toolbar-items-search-filter--width="160px"}}
          {{/toolbar-group}}
          {{#> button button--modifier="pf-m-primary"}}
            Download
          {{/button}}
        {{/toolbar-content-section}}
        {{> toolbar-expandable-content}}
      {{/toolbar-content}}
    {{/toolbar}}
    <div>
      {{> table-simple-table page--id=(concat toolbar--id '-table')}}
    </div>
  {{/page-main-section}}
{{/inline}}
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
            {{> pagination-options-menu pagination-options-menu--id=(concat toolbar--id '-pagination-options-menu')}}
            {{> pagination-nav-content}}
          {{/pagination}}
        {{/pagination}}
      {{/toolbar-item}}
    {{/toolbar-content-section}}
    {{#> toolbar-expandable-content toolbar-expandable-content--IsExpanded="true"}}
      {{> toolbar-item-search-filter}}
    {{/toolbar-expandable-content}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Toolbar attribute value single select filter on desktop
```hbs
{{#> toolbar toolbar--id="toolbar-attribute-value-single-select-filter-desktop-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show"}}
        {{> toolbar-toggle toolbar-toggle--IsExpanded="false"}}
        {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
          {{#> toolbar-item}}
            {{#> select select--attribute='style="width: 175px"' select--id=(concat toolbar--id '-select-status') select-toggle--icon="fas fa-filter"}}
              Status
            {{/select}}
          {{/toolbar-item}}
          {{#> toolbar-item}}
            {{#> select select--attribute='style="width: 200px"' select--id=(concat toolbar--id '-select-status-two') select--IsExpanded="true"}}
              Stopped
            {{/select}}
          {{/toolbar-item}}
        {{/toolbar-group}}
      {{/toolbar-group}}
      {{> toolbar-overflow-menu-example toolbar-overflow-menu-example--content="true" toolbar-overflow-menu-example--control="true"}}
      {{#> toolbar-item toolbar-item--modifier=(concat 'pf-m-pagination ' toolbar-item-pagination--modifier)}}
        {{#> pagination pagination--modifier="pf-m-compact pf-m-hidden pf-m-visible-on-md"}}
          {{#> pagination pagination--IsCompact="true"}}
            {{> pagination-options-menu pagination-options-menu--id=(concat toolbar--id '-pagination-options-menu')}}
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
            {{> pagination-options-menu pagination-options-menu--id=(concat toolbar--id '-pagination-options-menu')}}
            {{> pagination-nav-content}}
          {{/pagination}}
        {{/pagination}}
      {{/toolbar-item}}
    {{/toolbar-content-section}}
    {{#> toolbar-expandable-content toolbar-expandable-content--IsExpanded="true"}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
      {{#> toolbar-item}}
        {{#> select select--id=(concat toolbar--id '-select-status-expanded') select-toggle--icon="fas fa-filter"}}
          Status
        {{/select}}
      {{/toolbar-item}}
      {{#> toolbar-item}}
        {{#> select select--id=(concat toolbar--id '-select-status-two-expanded') select--IsExpanded="true"}}
          Stopped
        {{/select}}
      {{/toolbar-item}}
    {{/toolbar-group}}
    {{/toolbar-expandable-content}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Toolbar attribute value checkbox select filter on desktop
```hbs
{{#> toolbar toolbar--id="toolbar-attribute-value-checkbox-select-filter-desktop-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show"}}
        {{> toolbar-toggle toolbar-toggle--IsExpanded="false"}}
        {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
          {{#> toolbar-item}}
            {{#> select select--attribute='style="width: 175px"' select--id=(concat toolbar--id '-select-status') select-toggle--icon="fas fa-filter"}}
              Status
            {{/select}}
          {{/toolbar-item}}
          {{#> toolbar-item}}
            {{#> select select--id=(concat toolbar--id '-select-filter-status') select--IsChecked="true" select--IsCheckboxSelect="true" select--IsExpanded="true"}}
              Filter by status
            {{/select}}
          {{/toolbar-item}}
        {{/toolbar-group}}
      {{/toolbar-group}}
      {{> toolbar-overflow-menu-example toolbar-overflow-menu-example--content="true" toolbar-overflow-menu-example--control="true"}}
      {{#> toolbar-item toolbar-item--modifier=(concat 'pf-m-pagination ' toolbar-item-pagination--modifier)}}
        {{#> pagination pagination--modifier="pf-m-compact pf-m-hidden pf-m-visible-on-md"}}
          {{#> pagination pagination--IsCompact="true"}}
            {{> pagination-options-menu pagination-options-menu--id=(concat toolbar--id '-pagination-options-menu')}}
            {{> pagination-nav-content}}
          {{/pagination}}
        {{/pagination}}
      {{/toolbar-item}}
    {{/toolbar-content-section}}
    {{> toolbar-expandable-content}}
  {{/toolbar-content}}
  {{#> toolbar-content toolbar-content--modifier="pf-m-chip-container"}}
    {{#> toolbar-item toolbar-item--modifier=(concat 'pf-m-chip-group ' toolbar-item-chip-group--modifier)}}
      {{#> chip-group chip-group--modifier="pf-m-category" chip-group--id=(concat toolbar--id "-chip-group")}}
        {{#> chip-group-main}}
          {{#> chip-group-label chip-group-label--attribute=(concat 'id="' chip-group--id '-chip-group-label"')}}
            Status
          {{/chip-group-label}}
          {{#> chip-group-list chip-group-list--attribute=(concat 'aria-labelledby="' chip-group--id '-chip-group-label"')}}
            {{#> chip-group-list-item}}
              {{#> chip}}
                {{#> chip-content}}
                  {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id '-chip-one"')}}
                    Canceled
                  {{/chip-text}}
                {{/chip-content}}
                {{#> chip-actions}}
                  {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove-chip-one ' chip-group--id 'chip-one" aria-label="Remove" id="' chip-group--id 'remove-chip-one"')}}
                    <i class="fas fa-times" aria-hidden="true"></i>
                  {{/button}}
                {{/chip-actions}}
              {{/chip}}
            {{/chip-group-list-item}}
            {{#> chip-group-list-item}}
              {{#> chip}}
                {{#> chip-content}}
                  {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip-two"')}}
                    Paused
                  {{/chip-text}}
                {{/chip-content}}
                {{#> chip-actions}}
                  {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove-chip-two ' chip-group--id 'chip-two" aria-label="Remove" id="' chip-group--id 'remove-chip-two"')}}
                    <i class="fas fa-times" aria-hidden="true"></i>
                  {{/button}}
                {{/chip-actions}}
              {{/chip}}
            {{/chip-group-list-item}}
            {{#> chip-group-list-item}}
              {{#> chip}}
                {{#> chip-content}}
                  {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip-three"')}}
                    Restarted
                  {{/chip-text}}
                {{/chip-content}}
                {{#> chip-actions}}
                  {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove-chip-three ' chip-group--id 'chip-three" aria-label="Remove" id="' chip-group--id 'remove-chip-three"')}}
                    <i class="fas fa-times" aria-hidden="true"></i>
                  {{/button}}
                {{/chip-actions}}
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
            {{> pagination-options-menu pagination-options-menu--id=(concat toolbar--id '-pagination-options-menu')}}
            {{> pagination-nav-content}}
          {{/pagination}}
        {{/pagination}}
      {{/toolbar-item}}
    {{/toolbar-content-section}}
    {{#> toolbar-expandable-content toolbar-expandable-content--IsExpanded="true"}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
        {{#> toolbar-item}}
          {{#> select select--id=(concat toolbar--id '-select-status-expanded') select-toggle--icon="fas fa-filter"}}
            Status
          {{/select}}
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{#> select select--id=(concat toolbar--id '-select-filter-status-expanded') select--IsChecked="true" select--IsCheckboxSelect="true"}}
            Filter by status
          {{/select}}
        {{/toolbar-item}}
        {{#> toolbar-item toolbar-item--modifier=(concat 'pf-m-chip-group ' toolbar-item-chip-group--modifier)}}
           {{#> chip-group chip-group--modifier="pf-m-category" chip-group--id=(concat toolbar--id "-chip-group")}}
            {{#> chip-group-main}}
              {{#> chip-group-label chip-group-label--attribute=(concat 'id="' chip-group--id '-chip-group-label"')}}
                Status
              {{/chip-group-label}}
              {{#> chip-group-list chip-group-list--attribute=(concat 'aria-labelledby=" 'chip-group--id '-chip-group-label"')}}
                {{#> chip-group-list-item}}
                  {{#> chip}}
                    {{#> chip-content}}
                      {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip-one"')}}
                        Canceled
                      {{/chip-text}}
                    {{/chip-content}}
                    {{#> chip-actions}}
                      {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove-chip-one ' chip-group--id 'chip-one" aria-label="Remove" id="' chip-group--id 'remove-chip-one"')}}
                        <i class="fas fa-times" aria-hidden="true"></i>
                      {{/button}}
                    {{/chip-actions}}
                  {{/chip}}
                {{/chip-group-list-item}}
                {{#> chip-group-list-item}}
                  {{#> chip}}
                    {{#> chip-content}}
                      {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip-two"')}}
                        Paused
                      {{/chip-text}}
                    {{/chip-content}}
                    {{#> chip-actions}}
                      {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove-chip-two ' chip-group--id 'chip-two" aria-label="Remove" id="' chip-group--id 'remove-chip-two"')}}
                        <i class="fas fa-times" aria-hidden="true"></i>
                      {{/button}}
                    {{/chip-actions}}
                  {{/chip}}
                {{/chip-group-list-item}}
                {{#> chip-group-list-item}}
                  {{#> chip}}
                    {{#> chip-content}}
                      {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip-three"')}}
                        Restarted
                      {{/chip-text}}
                    {{/chip-content}}
                    {{#> chip-actions}}
                      {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove-chip-three ' chip-group--id 'chip-three" aria-label="Remove" id="' chip-group--id 'remove-chip-three"')}}
                        <i class="fas fa-times" aria-hidden="true"></i>
                      {{/button}}
                    {{/chip-actions}}
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

{{#* inline "page-template-section"}}
  {{#> page-main-section}}
    {{#> toolbar toolbar--id=(concat page-template--id "-toolbar") toolbar--modifier="pf-m-nowrap"}}
      {{#> toolbar-content}}
        {{#> toolbar-content-section toolbar-content-section--modifier="pf-m-nowrap"}}
          {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show"}}
            {{> toolbar-toggle toolbar-toggle--IsExpanded="false"}}
            {{> toolbar-item-search-filter}}
          {{/toolbar-group}}
          {{> toolbar-overflow-menu-example toolbar-overflow-menu-example--control="true"}}
          {{#> toolbar-item toolbar-item--modifier=(concat 'pf-m-pagination ' toolbar-item-pagination--modifier)}}
            {{#> pagination pagination--modifier="pf-m-compact pf-m-hidden pf-m-visible-on-md"}}
              {{#> pagination pagination--IsCompact="true"}}
                {{> pagination-options-menu pagination-options-menu--id=(concat toolbar--id '-pagination-options-menu')}}
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
        {{> pagination-options-menu pagination-options-menu--id="pagination-options-menu-bottom-collapsed-example" pagination-options-menu--modifier="pf-m-top"}}
        {{> pagination-nav-content}}
      {{/pagination}}
    </div>
  {{/page-main-section}}
{{/inline}}
```
