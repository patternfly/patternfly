---
title: Table
section: demos
---

```hbs title=Table-simple-demo isFullscreen
{{#> page page--id="page-layout-table-simple"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> table-page-header}}
  {{/page-header}}
  {{#> page-sidebar page-sidebar--modifier="pf-m-dark"}}
    {{> table-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-nav}}
      {{> table-main-section-nav}}
    {{/page-main-nav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{> table-main-section-content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding-mobile"}}
      {{#> card}}
        {{> table-toolbar}}
        {{> table-simple-table}}
        {{> table-pagination}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

```hbs title=table-sortable-demo isFullscreen
{{#> page page--id="page-layout-table-sortable"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> table-page-header}}
  {{/page-header}}
  {{#> page-sidebar page-sidebar--modifier="pf-m-dark"}}
    {{> table-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-nav}}
      {{> table-main-section-nav}}
    {{/page-main-nav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{> table-main-section-content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding-mobile"}}
      {{#> card}}
        {{> table-toolbar-no-sort}}
        {{> table-sortable-table}}
        {{> table-pagination}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

```hbs title=Table-expandable-demo isFullscreen
{{#> page page--id="page-layout-table-expandable"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> table-page-header}}
  {{/page-header}}
  {{#> page-sidebar page-sidebar--modifier="pf-m-dark"}}
    {{> table-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-nav}}
      {{> table-main-section-nav}}
    {{/page-main-nav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{> table-main-section-content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding-mobile"}}
      {{#> card}}
        {{> table-toolbar}}
        {{> table-expandable-table}}
        {{> table-pagination}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

```hbs title=Table-compact-demo isFullscreen
{{#> page page--id="page-layout-table-compact"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> table-page-header}}
  {{/page-header}}
  {{#> page-sidebar page-sidebar--modifier="pf-m-dark"}}
    {{> table-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-nav}}
      {{> table-main-section-nav}}
    {{/page-main-nav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{> table-main-section-content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding-mobile"}}
      {{#> card}}
        {{> table-toolbar}}
        {{> table-compact-table}}
        {{> table-pagination}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

```hbs title=Table-compound-expansion-demo isFullscreen
{{#> page page--id="page-layout-table-compound-expansion"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> table-page-header}}
  {{/page-header}}
  {{#> page-sidebar page-sidebar--modifier="pf-m-dark"}}
    {{> table-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-nav}}
      {{> table-main-section-nav}}
    {{/page-main-nav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{> table-main-section-content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding-mobile"}}
      {{#> card}}
        {{> table-toolbar-no-sort}}
        {{> table-compound-expansion-table}}
        {{> table-pagination}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```