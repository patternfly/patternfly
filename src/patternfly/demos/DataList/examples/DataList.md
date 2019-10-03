---
title: Data List
section: demos
---

## Demos
```hbs title=Simple isFullscreen
{{#> page page--id="page-layout-data-list-simple"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> data-list-page-header}}
  {{/page-header}}
  {{#> page-sidebar page-sidebar--modifier="pf-m-dark"}}
    {{> data-list-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-nav page-main-nav--modifier="pf-m-light"}}
      {{> data-list-main-section-nav}}
    {{/page-main-nav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{> data-list-main-section-content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding-mobile"}}
      {{#> card}}
        {{> data-list-toolbar}}
        {{> data-list-simple-data-list}}
        {{> data-list-pagination}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

```hbs title=Actionable isFullscreen
{{#> page page--id="page-layout-data-list-actionable"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> data-list-page-header}}
  {{/page-header}}
  {{#> page-sidebar page-sidebar--modifier="pf-m-dark"}}
    {{> data-list-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-nav page-main-nav--modifier="pf-m-light"}}
      {{> data-list-main-section-nav}}
    {{/page-main-nav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{> data-list-main-section-content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding-mobile"}}
      {{#> card}}
        {{> data-list-toolbar}}
        {{> data-list-actionable-data-list}}
        {{> data-list-pagination}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

```hbs title=Expandable-demo isFullscreen
{{#> page page--id="page-layout-data-list-expandable"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> data-list-page-header}}
  {{/page-header}}
  {{#> page-sidebar page-sidebar--modifier="pf-m-dark"}}
    {{> data-list-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-nav page-main-nav--modifier="pf-m-light"}}
      {{> data-list-main-section-nav}}
    {{/page-main-nav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{> data-list-main-section-content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding-mobile"}}
      {{#> card}}
        {{> data-list-toolbar}}
        {{> data-list-expandable-data-list}}
        {{> data-list-pagination}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

```hbs title=Without-pagination isFullscreen
{{#> page page--id="page-layout-data-list-simple-without-pagination"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> data-list-page-header}}
  {{/page-header}}
  {{#> page-sidebar page-sidebar--modifier="pf-m-dark"}}
    {{> data-list-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-nav page-main-nav--modifier="pf-m-light"}}
      {{> data-list-main-section-nav}}
    {{/page-main-nav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{> data-list-main-section-content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding-mobile"}}
      {{#> card}}
        {{> data-list-without-pagination-toolbar}}
        {{> data-list-simple-no-pagination-data-list}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

```hbs title=With-compact-pagination isFullscreen
{{#> page page--id="page-layout-data-list-simple-compact-pagination"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> data-list-page-header}}
  {{/page-header}}
  {{#> page-sidebar page-sidebar--modifier="pf-m-dark"}}
    {{> data-list-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-nav page-main-nav--modifier="pf-m-light"}}
      {{> data-list-main-section-nav}}
    {{/page-main-nav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{> data-list-main-section-content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding-mobile"}}
      {{#> card}}
        {{> data-list-toolbar data-list-toolbar--IsCompactPagination="true"}}
        {{> data-list-simple-data-list}}
        {{> data-list-pagination}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```