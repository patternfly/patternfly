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
      {{> toolbar-toggle-group toolbar-toggle-group--Show=true toolbar-toggle-group--HasNoFilter=true}}
      {{> toolbar-group-action-overflow-menu overflow-menu--IsVisible=true}}
      {{> toolbar-pagination}}
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
  {{#> page-main-section page-main-section--ExcludeMainBody=true}}
    {{#> page-main-body}}
      {{#> toolbar toolbar--id="toolbar-with-validation-example"}}
        {{#> toolbar-content}}
          {{#> toolbar-content-section}}
            {{#> toolbar-group toolbar-group--IsToggleGroup=true toolbar-group--modifier="pf-m-show-on-lg"}}
              {{> toolbar-toggle}}
              {{#> toolbar-group  toolbar-group--IsFilterGroup=true reset='toolbar-group--IsToggleGroup'}}
                {{#> toolbar-item}}
                  {{#> input-group input-group--attribute=(concat 'aria-label="search filter" role="group"')}}
                    {{#> input-group-item}}
                      {{> menu-toggle menu-toggle--id=(concat toolbar--id '-month') menu-toggle--text='Last month'}}
                    {{/input-group-item}}
                    {{#> input-group-item}}
                      {{#> date-picker date-picker--id=(concat toolbar--id '-helper-text') helper-text--value='MM/DD/YYYY'}}
                        {{#> input-group}}
                          {{> form-control
                              controlType='input'
                              input=true
                              form-control--attribute=(concat 'type="text" value="2020-03-05" id="' date-picker--id '-input" name="' date-picker--id '-input" aria-label="Date picker"')
                            }}
                          {{> button button--IsControl=true button--IsIcon=true button--icon="calendar-alt" button--aria-label="Toggle date picker"}}
                        {{/input-group}}
                      {{/date-picker}}
                    {{/input-group-item}}
                    {{#> input-group-item}}
                      {{#> date-picker
                            date-picker--id=(concat toolbar--id '-invalid') helper-text--value="Max: 08/10/2022" helper-text--IsError=true}}
                        {{#> input-group}}
                          {{> form-control
                              input=true
                              form-control--IsError=true
                              controlType='input'
                              form-control--attribute=(concat 'aria-invalid=true type="text" value="2020-03-05" id="'
                              date-picker--id '-input" name="'
                              date-picker--id '-input" aria-label="Date picker"')
                            }}
                          {{> button button--IsControl=true button--IsIcon=true button--icon="calendar-alt" button--aria-label="Toggle date picker"}}
                        {{/input-group}}
                        {{> date-picker-helper-text helper-text--value="MM/DD/YYYY" helper-text--IsError=false}}
                      {{/date-picker}}
                    {{/input-group-item}}
                  {{/input-group}}
                {{/toolbar-item}}
              {{/toolbar-group}}
              {{> toolbar-group-search}}
            {{/toolbar-group}}
            {{#> button button--IsPrimary=true}}
              Download
            {{/button}}
          {{/toolbar-content-section}}
          {{> toolbar-expandable-content}}
        {{/toolbar-content}}
      {{/toolbar}}
    {{/page-main-body}}
    {{#> page-main-body}}
      {{> table-simple-table page--id=(concat toolbar--id '-table')}}
    {{/page-main-body}}
  {{/page-main-section}}
{{/inline}}
```

### Toolbar attribute value search filter on mobile

```hbs
{{#> toolbar toolbar--id="toolbar-attribute-value-search-filter-mobile-example"  toolbar-expandable-content--IsExpanded=true}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{> toolbar-toggle-group toolbar-toggle-group--IsHidden=true}}
      {{> toolbar-group-action-overflow-menu}}
      {{> toolbar-pagination}}
    {{/toolbar-content-section}}
    {{#> toolbar-expandable-content}}
      {{> toolbar-group-search}}
    {{/toolbar-expandable-content}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Toolbar attribute value single select filter on desktop

```hbs
{{#> toolbar toolbar--id="toolbar-attribute-value-single-menu-toggle-filter-desktop-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{> toolbar-group-filter}}
      {{> toolbar-group-action-overflow-menu overflow-menu--IsVisible=true}}
      {{> toolbar-pagination}}
    {{/toolbar-content-section}}
    {{> toolbar-expandable-content}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Toolbar attribute value single select filter on mobile

```hbs
{{#> toolbar toolbar--id="toolbar-attribute-value-single-menu-toggle-filter-mobile-example" toolbar-expandable-content--IsExpanded=true}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{> toolbar-toggle-group toolbar-toggle-group--IsHidden=true}}
      {{> toolbar-group-action-overflow-menu overflow-menu--IsHidden=true}}
      {{> toolbar-pagination}}
    {{/toolbar-content-section}}
    {{#> toolbar-expandable-content}}
      {{> toolbar-group-filter}}
    {{/toolbar-expandable-content}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Toolbar attribute value checkbox menu toggle filter on desktop

```hbs
{{#> toolbar toolbar--id="toolbar-attribute-value-checkbox-menu-toggle-filter-desktop-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{> toolbar-group-filter}}
      {{> toolbar-group-action-overflow-menu overflow-menu--IsVisible=true}}
      {{> toolbar-pagination}}
    {{/toolbar-content-section}}
    {{> toolbar-expandable-content}}
  {{/toolbar-content}}
  {{#> toolbar-content}}
    {{> toolbar-group-label-group}}
    {{> toolbar-group-action-inline}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Toolbar attribute value checkbox menu toggle filter on mobile

```hbs
{{#> toolbar toolbar--id="toolbar-attribute-value-checkbox-menu-toggle-filter-mobile-example" toolbar-expandable-content--IsExpanded=true}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{> toolbar-toggle-group toolbar-toggle-group--IsHidden=true}}
      {{> toolbar-group-action-overflow-menu}}
      {{> toolbar-pagination}}
    {{/toolbar-content-section}}
    {{#> toolbar-expandable-content}}
      {{> toolbar-group-filter}}
      {{> toolbar-group-label-group}}
      {{> toolbar-group-action-inline}}
    {{/toolbar-expandable-content}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Toolbar pagination management on mobile

```hbs isFullscreen
{{> page-template page-template--id="toolbar-pagination-management-example"}}

{{#* inline "page-template-section"}}
  {{#> page-main-section page-main-section--ExcludeMainBody=true}}
    {{#> page-main-body}}
      {{#> toolbar toolbar--id=(concat page-template--id "-toolbar")}}
        {{#> toolbar-content}}
          {{#> toolbar-content-section}}
            {{> toolbar-toggle-group toolbar-toggle-group--HasNoFilter=true toolbar-toggle-group--ShowOn='lg'}}
            {{> toolbar-group-action-overflow-menu}}
            {{> toolbar-pagination}}
          {{/toolbar-content-section}}
          {{> toolbar-expandable-content}}
        {{/toolbar-content}}
      {{/toolbar}}
    {{/page-main-body}}
    {{#> page-main-body}}
      {{> table-simple-table page--id="toolbar-and-table-static-search-overflow-menu-collapsed"}}
      {{#> pagination pagination--modifier="pf-m-bottom"}}
        {{> pagination-menu-toggle pagination-menu-toggle--id="pagination-menu-toggle-bottom-collapsed-example" pagination-menu-toggle--modifier="pf-m-top"}}
        {{> pagination-nav-content}}
      {{/pagination}}
    {{/page-main-body}}
  {{/page-main-section}}
{{/inline}}
```
