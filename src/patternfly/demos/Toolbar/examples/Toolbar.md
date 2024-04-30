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
        {{> toolbar-toggle}}
        {{> toolbar-item-search-filter}}
      {{/toolbar-group}}
      {{> toolbar-overflow-menu-example
          toolbar-overflow-menu-example--content=true
          toolbar-overflow-menu-example--control=true
        }}
      {{#> toolbar-item toolbar-item--modifier=(concat 'pf-m-pagination ' toolbar-item-pagination--modifier)}}
        {{#> pagination pagination--modifier="pf-m-compact pf-m-hidden pf-m-visible-on-md"}}
          {{#> pagination pagination--IsCompact=true}}
            {{> pagination-menu-toggle pagination-menu-toggle--id=(concat toolbar--id '-pagination-menu-toggle')}}
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
            {{> toolbar-toggle}}
            {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
              {{#> toolbar-item}}
                {{#> input-group input-group--attribute=(concat 'aria-label="search filter" role="group"')}}
                  {{#> input-group-item}}
                    {{> menu-toggle
                        menu-toggle--id=(concat toolbar--id '-month')
                        menu-toggle--text='Last month'
                        menu-toggle--icon='filter'
                      }}
                  {{/input-group-item}}
                  {{#> input-group-item}}
                    {{#> date-picker date-picker--id=(concat toolbar--id '-helper-text') helper-text--value='MM/DD/YYYY'}}
                      {{#> input-group}}
                        {{> form-control
                            controlType='input'
                            input=true
                            form-control--attribute=(concat 'type="text" value="2020-03-05" id="' date-picker--id '-input" name="' date-picker--id '-input" aria-label="Date picker"')
                          }}
                        {{#> button button--modifier='pf-m-control' button--attribute='aria-label="Toggle date picker"'}}
                          <i class="fas fa-calendar-alt" aria-hidden=true></i>
                        {{/button}}
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
                        {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Toggle date picker"'}}
                          <i class="fas fa-calendar-alt" aria-hidden=true></i>
                        {{/button}}
                      {{/input-group}}
                      {{> date-picker-helper-text helper-text--value="MM/DD/YYYY" helper-text--IsError=false}}
                    {{/date-picker}}
                  {{/input-group-item}}
                {{/input-group}}
              {{/toolbar-item}}
            {{/toolbar-group}}
            {{> toolbar-item-search-filter toolbar-items-search-filter--text="Description" menu-toggle--id=(concat toolbar--id '-description')}}
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
  {{#> toolbar-content toolbar-content--HasToggleGroup=true}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group"}}
        {{> toolbar-toggle toolbar-toggle--IsExpanded=true}}
      {{/toolbar-group}}
      {{> toolbar-overflow-menu-example toolbar-overflow-menu-example--control=true}}
      {{#> toolbar-item toolbar-item--modifier=(concat 'pf-m-pagination ' toolbar-item-pagination--modifier)}}
        {{#> pagination pagination--modifier="pf-m-compact pf-m-hidden pf-m-visible-on-md"}}
          {{#> pagination pagination--IsCompact=true}}
            {{> pagination-menu-toggle pagination-menu-toggle--id=(concat toolbar--id '-pagination-menu-toggle')}}
            {{> pagination-nav-content}}
          {{/pagination}}
        {{/pagination}}
      {{/toolbar-item}}
    {{/toolbar-content-section}}
    {{#> toolbar-expandable-content toolbar-expandable-content--IsExpanded=true}}
      {{> toolbar-item-search-filter}}
    {{/toolbar-expandable-content}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Toolbar attribute value single select filter on desktop
```hbs
{{#> toolbar toolbar--id="toolbar-attribute-value-single-menu-toggle-filter-desktop-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show"}}
        {{> toolbar-toggle}}
        {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
          {{#> toolbar-item}}
            {{> menu-toggle
                menu-toggle--id=(concat toolbar--id '-menu-toggle-status')
                menu-toggle--text='Status'
                menu-toggle--icon='filter'
              }}
          {{/toolbar-item}}
          {{#> toolbar-item}}
            {{> menu-toggle
                menu-toggle--id=(concat toolbar--id '-menu-toggle-stopped')
                menu-toggle--text='Stopped'
                menu-toggle--IsExpanded=true
              }}
            {{#> panel}}
              {{#> menu menu--width='175px'}}
                {{#> menu-content}}
                  {{#> menu-group}}
                    {{#> menu-list}}
                      {{> menu-list-item menu-item--text='Running'}}
                      {{> menu-list-item menu-item--text='Stopped' menu-item--IsSelected=true}}
                      {{> menu-list-item menu-item--text='Down'}}
                      {{> menu-list-item menu-item--text='Degraded'}}
                      {{> menu-list-item menu-item--text='Needs maintenance'}}
                    {{/menu-list}}
                  {{/menu-group}}
                {{/menu-content}}
              {{/menu}}
            {{/panel}}
          {{/toolbar-item}}
        {{/toolbar-group}}
      {{/toolbar-group}}
      {{> toolbar-overflow-menu-example toolbar-overflow-menu-example--content=true toolbar-overflow-menu-example--control=true}}
      {{#> toolbar-item toolbar-item--modifier=(concat 'pf-m-pagination ' toolbar-item-pagination--modifier)}}
        {{#> pagination pagination--modifier="pf-m-compact pf-m-hidden pf-m-visible-on-md"}}
          {{#> pagination pagination--IsCompact=true}}
            {{> pagination-menu-toggle pagination-menu-toggle--id=(concat toolbar--id '-pagination-menu-toggle')}}
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
{{#> toolbar toolbar--id="toolbar-attribute-value-single-menu-toggle-filter-mobile-example"}}
  {{#> toolbar-content toolbar-content--HasToggleGroup=true}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group"}}
        {{> toolbar-toggle toolbar-toggle--IsExpanded=true}}
      {{/toolbar-group}}
      {{> toolbar-overflow-menu-example toolbar-overflow-menu-example--control=true}}
      {{#> toolbar-item toolbar-item--modifier=(concat 'pf-m-pagination ' toolbar-item-pagination--modifier)}}
        {{#> pagination pagination--modifier="pf-m-compact pf-m-hidden pf-m-visible-on-md"}}
          {{#> pagination pagination--IsCompact=true}}
            {{> pagination-menu-toggle pagination-menu-toggle--id=(concat toolbar--id '-pagination-menu-toggle')}}
            {{> pagination-nav-content}}
          {{/pagination}}
        {{/pagination}}
      {{/toolbar-item}}
    {{/toolbar-content-section}}
    {{#> toolbar-expandable-content toolbar-expandable-content--IsExpanded=true}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
      {{#> toolbar-item}}
        {{> menu-toggle
            menu-toggle--id=(concat toolbar--id '-menu-toggle-status')
            menu-toggle--text='Status'
            menu-toggle--icon='filter'
          }}
      {{/toolbar-item}}
      {{#> toolbar-item}}
        {{> menu-toggle
            menu-toggle--id=(concat toolbar--id '-menu-toggle-stopped')
            menu-toggle--text='Stopped'
            menu-toggle--IsExpanded=true
          }}
        {{#> panel}}
          {{#> menu menu--width='175px'}}
            {{#> menu-content}}
              {{#> menu-group}}
                {{#> menu-list}}
                  {{> menu-list-item menu-item--text='Running'}}
                  {{> menu-list-item menu-item--text='Stopped' menu-item--IsSelected=true}}
                  {{> menu-list-item menu-item--text='Down'}}
                  {{> menu-list-item menu-item--text='Degraded'}}
                  {{> menu-list-item menu-item--text='Needs maintenance'}}
                {{/menu-list}}
              {{/menu-group}}
            {{/menu-content}}
          {{/menu}}
        {{/panel}}
      {{/toolbar-item}}
    {{/toolbar-group}}
    {{/toolbar-expandable-content}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Toolbar attribute value checkbox menu toggle filter on desktop
```hbs
{{#> toolbar toolbar--id="toolbar-attribute-value-checkbox-menu-toggle-filter-desktop-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show"}}
        {{> toolbar-toggle}}
        {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
          {{#> toolbar-item}}
            {{> menu-toggle
                menu-toggle--id=(concat toolbar--id '-menu-toggle-status')
                menu-toggle--text='Status'
                menu-toggle--icon='filter'
              }}
          {{/toolbar-item}}
          {{#> toolbar-item}}
            {{> menu-toggle
                menu-toggle--id=(concat toolbar--id '-menu-toggle-filter-by-status')
                menu-toggle--text='Filter by status'
                menu-toggle--IsExpanded=true
              }}
            {{#> panel}}
              {{#> menu menu--id=(concat toolbar--id '-status-menu')}}
                {{#> menu-content}}
                  {{#> menu-list}}
                    {{#> menu-list-item menu-list-item--id=(concat menu--id '-check1') menu-list-item--IsCheckbox=true}}
                      {{> menu-item menu-item--text='Active'}}
                    {{/menu-list-item}}
                    {{#> menu-list-item menu-list-item--id=(concat menu--id '-check2') menu-list-item--IsCheckbox=true menu-list-item--IsChecked=true}}
                      {{> menu-item menu-item--text='Cancelled'}}
                    {{/menu-list-item}}
                    {{#> menu-list-item menu-list-item--id=(concat menu--id '-check3') menu-list-item--IsCheckbox=true menu-list-item--IsChecked=true}}
                      {{> menu-item menu-item--text='Paused'}}
                    {{/menu-list-item}}
                    {{#> menu-list-item menu-list-item--id=(concat menu--id '-check4') menu-list-item--IsCheckbox=true}}
                      {{> menu-item menu-item--text='Warning'}}
                    {{/menu-list-item}}
                    {{#> menu-list-item menu-list-item--id=(concat menu--id '-check5') menu-list-item--IsCheckbox=true}}
                      {{> menu-item menu-item--text='Restarted'}}
                    {{/menu-list-item}}
                  {{/menu-list}}
                {{/menu-content}}
              {{/menu}}
            {{/panel}}
          {{/toolbar-item}}
        {{/toolbar-group}}
      {{/toolbar-group}}
      {{> toolbar-overflow-menu-example toolbar-overflow-menu-example--content=true toolbar-overflow-menu-example--control=true}}
      {{#> toolbar-item toolbar-item--modifier=(concat 'pf-m-pagination ' toolbar-item-pagination--modifier)}}
        {{#> pagination pagination--modifier="pf-m-compact pf-m-hidden pf-m-visible-on-md"}}
          {{#> pagination pagination--IsCompact=true}}
            {{> pagination-menu-toggle pagination-menu-toggle--id=(concat toolbar--id '-pagination-menu-toggle')}}
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
                    <i class="fas fa-times" aria-hidden=true></i>
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
                    <i class="fas fa-times" aria-hidden=true></i>
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
                    <i class="fas fa-times" aria-hidden=true></i>
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

### Toolbar attribute value checkbox menu toggle filter on mobile
```hbs
{{#> toolbar toolbar--id="toolbar-attribute-value-checkbox-menu-toggle-filter-mobile-example"}}
  {{#> toolbar-content toolbar-content--HasToggleGroup=true}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group"}}
        {{> toolbar-toggle toolbar-toggle--IsExpanded=true}}
      {{/toolbar-group}}
      {{> toolbar-overflow-menu-example toolbar-overflow-menu-example--control=true}}
      {{#> toolbar-item toolbar-item--modifier=(concat 'pf-m-pagination ' toolbar-item-pagination--modifier)}}
        {{#> pagination pagination--modifier="pf-m-compact pf-m-hidden pf-m-visible-on-md"}}
          {{#> pagination pagination--IsCompact=true}}
            {{> pagination-menu-toggle pagination-menu-toggle--id=(concat toolbar--id '-pagination-menu-toggle')}}
            {{> pagination-nav-content}}
          {{/pagination}}
        {{/pagination}}
      {{/toolbar-item}}
    {{/toolbar-content-section}}
    {{#> toolbar-expandable-content toolbar-expandable-content--IsExpanded=true}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
        {{#> toolbar-item}}
          {{> menu-toggle
              menu-toggle--id=(concat toolbar--id '-menu-toggle-status')
              menu-toggle--text='Status'
              menu-toggle--icon='filter'
            }}
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{> menu-toggle
              menu-toggle--id=(concat toolbar--id '-menu-toggle-filter-by-status')
              menu-toggle--text='Filter by status'
              menu-toggle--IsExpanded=true
            }}
          {{#> panel}}
            {{#> menu menu--id=(concat toolbar--id '-status-menu')}}
              {{#> menu-content}}
                {{#> menu-list}}
                  {{#> menu-list-item menu-list-item--id=(concat menu--id '-check1') menu-list-item--IsCheckbox=true}}
                    {{> menu-item menu-item--text='Active'}}
                  {{/menu-list-item}}
                  {{#> menu-list-item menu-list-item--id=(concat menu--id '-check2') menu-list-item--IsCheckbox=true menu-list-item--IsChecked=true}}
                    {{> menu-item menu-item--text='Cancelled'}}
                  {{/menu-list-item}}
                  {{#> menu-list-item menu-list-item--id=(concat menu--id '-check3') menu-list-item--IsCheckbox=true menu-list-item--IsChecked=true}}
                    {{> menu-item menu-item--text='Paused'}}
                  {{/menu-list-item}}
                  {{#> menu-list-item menu-list-item--id=(concat menu--id '-check4') menu-list-item--IsCheckbox=true}}
                    {{> menu-item menu-item--text='Warning'}}
                  {{/menu-list-item}}
                  {{#> menu-list-item menu-list-item--id=(concat menu--id '-check5') menu-list-item--IsCheckbox=true}}
                    {{> menu-item menu-item--text='Restarted'}}
                  {{/menu-list-item}}
                {{/menu-list}}
              {{/menu-content}}
            {{/menu}}
          {{/panel}}
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
                        <i class="fas fa-times" aria-hidden=true></i>
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
                        <i class="fas fa-times" aria-hidden=true></i>
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
                        <i class="fas fa-times" aria-hidden=true></i>
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
            {{> toolbar-toggle}}
            {{> toolbar-item-search-filter}}
          {{/toolbar-group}}
          {{> toolbar-overflow-menu-example toolbar-overflow-menu-example--control=true}}
          {{#> toolbar-item toolbar-item--modifier=(concat 'pf-m-pagination ' toolbar-item-pagination--modifier)}}
            {{#> pagination pagination--modifier="pf-m-compact pf-m-hidden pf-m-visible-on-md"}}
              {{#> pagination pagination--IsCompact=true}}
                {{> pagination-menu-toggle pagination-menu-toggle--id=(concat toolbar--id '-pagination-menu-toggle')}}
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
        {{> pagination-menu-toggle pagination-menu-toggle--id="pagination-menu-toggle-bottom-collapsed-example" pagination-menu-toggle--modifier="pf-m-top"}}
        {{> pagination-nav-content}}
      {{/pagination}}
    </div>
  {{/page-main-section}}
{{/inline}}
```
