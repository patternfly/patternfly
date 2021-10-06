---
id: Data list
section: components
wrapperTag: div
---

## Demos
### Simple
```hbs isFullscreen
{{#> page page--id="page-layout-data-list-simple"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> data-list-page-header}}
  {{/page-header}}
  {{#> page-sidebar}}
    {{> data-list-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-subnav}}
      {{> data-list-main-section-nav}}
    {{/page-main-subnav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{> data-list-main-section-content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
      {{#> card}}
        {{> toolbar--template toolbar--id=(concat page--id '-toolbar') toolbar--template--HasBulkSelect="true" toolbar--template--HasContextSelector="true" toolbar--template--HasOverflowMenu="true"}}
        {{> data-list-simple-data-list}}
        {{> data-list-pagination-footer}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### Actionable
```hbs isFullscreen
{{#> page page--id="page-layout-data-list-actionable"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> data-list-page-header}}
  {{/page-header}}
  {{#> page-sidebar}}
    {{> data-list-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-subnav}}
      {{> data-list-main-section-nav}}
    {{/page-main-subnav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{> data-list-main-section-content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
      {{#> card}}
        {{> toolbar--template toolbar--id=(concat page--id '-toolbar') toolbar--template--HasToggleGroup="true" toolbar--template--HasBulkSelect="true" toolbar--template--HasContextSelector="true" toolbar--template--HasOverflowMenu="true" toolbar--template--HasOverflowMenuSecondButton="true"}}
        {{> data-list-actionable-data-list}}
        {{> data-list-pagination-footer}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### Expandable demo
```hbs isFullscreen
{{#> page page--id="page-layout-data-list-expandable"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> data-list-page-header}}
  {{/page-header}}
  {{#> page-sidebar}}
    {{> data-list-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-subnav}}
      {{> data-list-main-section-nav}}
    {{/page-main-subnav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{> data-list-main-section-content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
      {{#> card}}
        {{> toolbar--template toolbar--id=(concat page--id '-toolbar') toolbar--template--HasToggleGroup="true" toolbar--template--HasBulkSelect="true" toolbar--template--HasSearchFilter="true" toolbar--template--HasOverflowMenu="true"}}
        {{> data-list-expandable-data-list}}
        {{> data-list-pagination-footer}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### Static bottom pagination
```hbs isFullscreen
{{#> page page--id="page-layout-data-list-simple"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> data-list-page-header}}
  {{/page-header}}
  {{#> page-sidebar}}
    {{> data-list-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-subnav}}
      {{> data-list-main-section-nav}}
    {{/page-main-subnav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{> data-list-main-section-content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
      {{#> card}}
        {{> toolbar--template toolbar--id=(concat page--id '-toolbar') toolbar--template--HasToggleGroup="true" toolbar--template--HasSearchFilter="true" toolbar--template--HasOverflowMenu="true" toolbar--template--HasOverflowMenuSecondButton="true"}}
        {{> data-list-simple-data-list}}
        {{> data-list-pagination-footer-static}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```
