---
id: 'Dashboard'
section: patterns
cssPrefix: pf-d-dashboard
---

## Examples
### Basic
```hbs isFullscreen
{{> page-template page-template--id="dashboard-demo"}}

{{#*inline "page-template-section"}}
  {{#> page-main-section page-main-section--IsLimitWidth=true}}
    {{#> grid grid--modifier="pf-m-gutter"}}
      {{> card-template-expandable-status card-template-expandable-status--id=(concat page-template--id '-expandable-status-card-1')}}
      {{#> grid-item grid-item--modifier="pf-m-gutter pf-m-4-col-on-lg pf-m-6-col-on-2xl" grid-item--attribute='style="--pf-v6-l-grid--item--Order-on-lg:3"'}}
        {{#> l-flex l-flex--modifier="pf-m-column"}}
          {{> card-template-status card-template-status--id=(concat page-template--id '-status-card-1')}} <!-- inventory -->
          {{> card-template-line-chart card-template-line-chart--id=(concat page-template--id '-line-chart-card-1')}}
          {{> card-template-metrics card-template-metrics--id=(concat page-template--id '-metrics-card-1')}}
        {{/l-flex}}
      {{/grid-item}}
      {{#> grid-item grid-item--modifier="pf-m-gutter pf-m-4-col-on-lg pf-m-3-col-on-2xl" grid-item--attribute='style="--pf-v6-l-grid--item--Order-on-lg:2"'}}
        {{> card-template-details card-template-details--id=(concat page-template--id '-details-card-1')}}
        {{> card-template-data-list card-template-data-list--id=(concat page-template--id '-data-list-card-1')}}
      {{/grid-item}}
      {{#> grid-item grid-item--modifier="pf-m-4-col-on-lg pf-m-3-col-on-2xl" grid-item--attribute='style="--pf-v6-l-grid--item--Order-on-lg:4"'}}
        {{#> l-flex l-flex--modifier="pf-m-column"}}
          {{> card-template-events card-template-events--id=(concat page-template--id '-events-card-1')}}
        {{/l-flex}}
      {{/grid-item}}
    {{/grid}}
  {{/page-main-section}}
{{/inline}}
```
