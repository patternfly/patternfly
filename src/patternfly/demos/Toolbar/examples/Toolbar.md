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
          {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show-on-lg"}}
            {{> toolbar-toggle toolbar-toggle--IsExpanded=false}}
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
            {{> toolbar-item-search-filter toolbar-items-search-filter--text="Description" menu-toggle--id=(concat toolbar--id '-description')}}
          {{/toolbar-group}}
          {{#> button button--IsPrimary=true}}
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
            {{> menu-toggle menu-toggle--id=(concat toolbar--id '-menu-toggle-stopped') menu-toggle--text='Stopped'}}
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
        {{> menu-toggle menu-toggle--id=(concat toolbar--id '-menu-toggle-stopped') menu-toggle--text='Stopped'}}
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
            {{> menu-toggle menu-toggle--id=(concat toolbar--id '-menu-toggle-filter-by-status') menu-toggle--text='Filter by status'}}
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
  {{#> toolbar-content toolbar-content--modifier="pf-m-label-container"}}
    {{#> toolbar-item toolbar-item--modifier=(concat 'pf-m-label-group ' toolbar-item-label-group--modifier)}}
      {{#> label-group label-group--modifier="pf-m-category" label-group--id=(concat toolbar--id "-label-group")}}
        {{#> label-group-main}}
          {{#> label-group-label label-group-label--attribute=(concat 'id="' label-group--id '-label-group-label"')}}
            Status
          {{/label-group-label}}
          {{#> label-group-list label-group-list--attribute=(concat 'aria-labelledby="' label-group--id '-label-group-label"')}}
            {{#> label-group-list-item}}
              {{#> label label--IsOutlined=true}}
                {{#> label-content}}
                  {{#> label-text label-text--attribute=(concat 'id="' label-group--id '-label-one"')}}
                    Canceled
                  {{/label-text}}
                {{/label-content}}
                {{#> label-actions}}
                  {{> button button--IsPlain=true button--IsIcon=true button--icon="times" button--HasNoPadding=true button--attribute=(concat 'aria-labelledby="' label-group--id 'remove-label-one ' label-group--id 'label-one" aria-label="Remove" id="' label-group--id 'remove-label-one"')}}
                {{/label-actions}}
              {{/label}}
            {{/label-group-list-item}}
            {{#> label-group-list-item}}
              {{#> label label--IsOutlined=true}}
                {{#> label-content}}
                  {{#> label-text label-text--attribute=(concat 'id="' label-group--id 'label-two"')}}
                    Paused
                  {{/label-text}}
                {{/label-content}}
                {{#> label-actions}}
                  {{> button button--IsPlain=true button--IsIcon=true button--icon="times" button--HasNoPadding=true button--attribute=(concat 'aria-labelledby="' label-group--id 'remove-label-two ' label-group--id 'label-two" aria-label="Remove" id="' label-group--id 'remove-label-two"')}}
                {{/label-actions}}
              {{/label}}
            {{/label-group-list-item}}
            {{#> label-group-list-item}}
              {{#> label label--IsOutlined=true}}
                {{#> label-content}}
                  {{#> label-text label-text--attribute=(concat 'id="' label-group--id 'label-three"')}}
                    Restarted
                  {{/label-text}}
                {{/label-content}}
                {{#> label-actions}}
                  {{> button button--IsPlain=true button--IsIcon=true button--icon="times" button--HasNoPadding=true button--attribute=(concat 'aria-labelledby="' label-group--id 'remove-label-three ' label-group--id 'label-three" aria-label="Remove" id="' label-group--id 'remove-label-three"')}}
                {{/label-actions}}
              {{/label}}
            {{/label-group-list-item}}
          {{/label-group-list}}
        {{/label-group-main}}
      {{/label-group}}
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
            }}
        {{/toolbar-item}}
        {{#> toolbar-item toolbar-item--modifier=(concat 'pf-m-label-group ' toolbar-item-label-group--modifier)}}
           {{#> label-group label-group--modifier="pf-m-category" label-group--id=(concat toolbar--id "-label-group")}}
            {{#> label-group-main}}
              {{#> label-group-label label-group-label--attribute=(concat 'id="' label-group--id '-label-group-label"')}}
                Status
              {{/label-group-label}}
              {{#> label-group-list label-group-list--attribute=(concat 'aria-labelledby=" 'label-group--id '-label-group-label"')}}
                {{#> label-group-list-item}}
                  {{#> label label--IsOutlined=true}}
                    {{#> label-content}}
                      {{#> label-text label-text--attribute=(concat 'id="' label-group--id 'label-one"')}}
                        Canceled
                      {{/label-text}}
                    {{/label-content}}
                    {{#> label-actions}}
                      {{> button button--IsPlain=true button--IsIcon=true button--icon="times" button--HasNoPadding=true button--attribute=(concat 'aria-labelledby="' label-group--id 'remove-label-one ' label-group--id 'label-one" aria-label="Remove" id="' label-group--id 'remove-label-one"')}}
                    {{/label-actions}}
                  {{/label}}
                {{/label-group-list-item}}
                {{#> label-group-list-item}}
                  {{#> label label--IsOutlined=true}}
                    {{#> label-content}}
                      {{#> label-text label-text--attribute=(concat 'id="' label-group--id 'label-two"')}}
                        Paused
                      {{/label-text}}
                    {{/label-content}}
                    {{#> label-actions}}
                      {{> button button--IsPlain=true button--IsIcon=true button--icon="times" button--HasNoPadding=true button--attribute=(concat 'aria-labelledby="' label-group--id 'remove-label-two ' label-group--id 'label-two" aria-label="Remove" id="' label-group--id 'remove-label-two"')}}
                    {{/label-actions}}
                  {{/label}}
                {{/label-group-list-item}}
                {{#> label-group-list-item}}
                  {{#> label label--IsOutlined=true}}
                    {{#> label-content}}
                      {{#> label-text label-text--attribute=(concat 'id="' label-group--id 'label-three"')}}
                        Restarted
                      {{/label-text}}
                    {{/label-content}}
                    {{#> label-actions}}
                      {{> button button--IsPlain=true button--IsIcon=true button--icon="times" button--HasNoPadding=true button--attribute=(concat 'aria-labelledby="' label-group--id 'remove-label-three ' label-group--id 'label-three" aria-label="Remove" id="' label-group--id 'remove-label-three"')}}
                    {{/label-actions}}
                  {{/label}}
                {{/label-group-list-item}}
              {{/label-group-list}}
            {{/label-group-main}}
          {{/label-group}}
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
