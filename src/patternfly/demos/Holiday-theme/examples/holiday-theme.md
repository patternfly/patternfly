---
id: 'Holiday theme'
section: patterns
cssPrefix: pf-d-holiday-theme
---

## Examples
### Basic
```hbs isFullscreen
{{> page-template page-template--id="holiday-theme-demo" page-sidebar-body--modifier="pf-m-no-fill" menu-template--HasContextSelector=true}}

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
        {{#> l-flex l-flex--modifier="pf-m-column pf-m-row-on-md pf-m-column-on-lg"}}
          {{#> l-flex-item l-flex-item--modifier="pf-m-flex-1"}}
            {{> card-template-details card-template-details--id=(concat page-template--id '-details-card-1')}}
          {{/l-flex-item}}
          {{#> l-flex-item l-flex-item--modifier="pf-m-flex-1"}}
            {{> card-template-data-list card-template-data-list--id=(concat page-template--id '-data-list-card-1')}}
          {{/l-flex-item}}
        {{/l-flex}}
      {{/grid-item}}
      {{#> grid-item grid-item--modifier="pf-m-4-col-on-lg pf-m-3-col-on-2xl" grid-item--attribute='style="--pf-v6-l-grid--item--Order-on-lg:4"'}}
        {{#> l-flex l-flex--modifier="pf-m-column"}}
          {{> card-template-events card-template-events--id=(concat page-template--id '-events-card-1')}}
        {{/l-flex}}
      {{/grid-item}}
    {{/grid}}
  {{/page-main-section}}
{{/inline}}

{{#*inline "page-template-title"}}
  {{#> page-main-section page-main-section--IsLimitWidth="true" page-main-section--modifier=page-template-title--modifier}}
    {{#> l-flex l-flex--attribute='style="font-size: var(--pf-t--global--font--size--heading--2xl)"'}}
      {{#> icon icon--modifier="pf-m-inline"}}
        {{#> icon-content}}
          <i class="fas fa-snowman" aria-hidden="true"></i>
        {{/icon-content}}
      {{/icon}}
      {{#> title titleType="h1" title--modifier="pf-m-4xl" title--IsPageTitle=true}}
        Frosty Analytics Dashboard
      {{/title}}
    {{/l-flex}}
  {{/page-main-section}}
{{/inline}}

{{#*inline "masthead-template-context-selector"}}
{{#> switch switch--attribute='for="holiday-switch"'}}
  {{#> switch-input switch-input--id="holiday-switch" aria-labelledby="holiday-switch-label"}}{{/switch-input}}
  {{#> switch-toggle}}{{/switch-toggle}}
  {{#> switch-label switch-label--id="holiday-switch-label" switch-label--attribute='aria-hidden="true"'}}Holiday theme{{/switch-label}}
{{/switch}}
{{/inline}}

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
```
