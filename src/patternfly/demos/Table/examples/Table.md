---
title: Table
section: demos
---

## Demos
```hbs title=Basic isFullscreen
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
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-md"}}
      {{#> card}}
        {{> table-toolbar}}
        {{> table-simple-table}}
        {{> table-pagination}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

```hbs title=Sortable isFullscreen
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
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-md"}}
      {{#> card}}
        {{> table-toolbar-no-sort}}
        {{> table-sortable-table}}
        {{> table-pagination}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

```hbs title=Expandable isFullscreen
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
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-md"}}
      {{#> card}}
        {{> table-toolbar}}
        {{> table-expandable-table}}
        {{> table-pagination}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

```hbs title=Compact isFullscreen
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
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-md"}}
      {{#> card}}
        {{> table-toolbar}}
        {{> table-compact-table}}
        {{> table-pagination}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

```hbs title=Compound-expansion isFullscreen
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
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-md"}}
      {{#> card}}
        {{> table-toolbar-no-sort}}
        {{> table-compound-expansion-table}}
        {{> table-pagination}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

```hbs title=Loading-state-demo isFullscreen
{{#> page page--id="table-loading-demo"}}
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
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-md"}}
      {{#> card}}
        {{> table-toolbar}}
        {{> table-loading-table}}
        {{> table-pagination}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

```hbs title=Empty-state isFullscreen
{{#> page page--id="table-empty-state-demo"}}
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
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-md"}}
      {{#> card}}
        {{> table-toolbar}}
        {{> table-empty-state-table}}
        {{> table-pagination}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

```hbs title=Compact-pagination-demo isFullscreen
{{#> page page--id="page-layout-table-simple-compact-pagination"}}
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
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-md"}}
      {{#> card}}
        {{> table-toolbar table-toolbar--IsCompactPagination="true"}}
        {{> table-simple-table}}
        {{> table-pagination}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

```hbs title=Column-management-dropdown isFullscreen
{{#> page page--id="page-layout-table-column-management-dropdown"}}
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
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-md"}}
      {{#> card}}
        {{> table-toolbar table-toolbar--IsColumnManagementDropdown="true"}}
        {{> table-simple-table}}
        {{> table-pagination}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

```hbs title=Column-management-action isFullscreen
{{#> page page--id="page-layout-table-column-management-action"}}
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
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-md"}}
      {{#> card}}
        {{> table-toolbar table-toolbar--IsColumnManagementAction="true"}}
        {{> table-simple-table}}
        {{> table-pagination}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

```hbs title=Column-management-modal isFullscreen
{{#> page page--id="page-layout-table-simple-compact-pagination-modal-open"}}
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
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-md"}}
      {{#> card}}
        {{> table-toolbar}}
        {{> table-simple-table}}
        {{> table-pagination}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}

{{#> backdrop}}
  {{#> bullseye}}
    {{#> modal-box modal-box--attribute='aria-labelledby="modal-title" aria-describedby="modal-description"' modal-box--modifier="pf-m-sm"}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
      {{/button}}
      {{#> modal-box-header}}
        {{#> title titleType="h1" title--modifier="pf-m-2xl" title--attribute='id="modal-title"'}}
          Manage columns
        {{/title}}
      {{/modal-box-header}}
      {{#> modal-box-description}}
        {{#> content}}
          <p>Selected categories will be displayed in the table.</p>
          {{#> button button--modifier="pf-m-link pf-m-inline"}}Select all{{/button}}
        {{/content}}
      {{/modal-box-description}}
      {{#> modal-box-body modal-box-body--attribute='id="modal-description"'}}
        {{#> data-list data-list--id="table-column-management" data-list--attribute='aria-label="Table column management"' data-list--modifier="pf-m-compact"}}
          {{#> data-list-item data-list-item--attribute=(concat 'aria-labelledby="' data-list--id '-item1"')}}
            {{#> data-list-item-row}}
              {{#> data-list-item-control}}
                {{#> data-list-check checkbox--attribute=(concat 'name="' data-list--id '-check-action-check1" aria-labelledby="' data-list--id '-item1" checked')}}{{/data-list-check}}
              {{/data-list-item-control}}
              {{#> data-list-item-content}}
                {{#> data-list-cell data-list-cell--attribute=(concat 'id="' data-list--id '-item1"')}}
                  Repositories
                {{/data-list-cell}}
              {{/data-list-item-content}}
            {{/data-list-item-row}}
          {{/data-list-item}}
          {{#> data-list-item data-list-item--attribute=(concat 'aria-labelledby="' data-list--id '-item2"')}}
            {{#> data-list-item-row}}
              {{#> data-list-item-control}}
                {{#> data-list-check checkbox--attribute=(concat 'name="' data-list--id '-check-action-check1" aria-labelledby="' data-list--id '-item2" checked')}}{{/data-list-check}}
              {{/data-list-item-control}}
              {{#> data-list-item-content}}
                {{#> data-list-cell data-list-cell--attribute=(concat 'id="' data-list--id '-item2"')}}
                  Branches
                {{/data-list-cell}}
              {{/data-list-item-content}}
            {{/data-list-item-row}}
          {{/data-list-item}}
          {{#> data-list-item data-list-item--attribute=(concat 'aria-labelledby="' data-list--id '-item3"')}}
            {{#> data-list-item-row}}
              {{#> data-list-item-control}}
                {{#> data-list-check checkbox--attribute=(concat 'name="' data-list--id '-check-action-check1" aria-labelledby="' data-list--id '-item3" checked')}}{{/data-list-check}}
              {{/data-list-item-control}}
              {{#> data-list-item-content}}
                {{#> data-list-cell data-list-cell--attribute=(concat 'id="' data-list--id '-item3"')}}
                  Pull requests
                {{/data-list-cell}}
              {{/data-list-item-content}}
            {{/data-list-item-row}}
          {{/data-list-item}}
          {{#> data-list-item data-list-item--attribute=(concat 'aria-labelledby="' data-list--id '-item4"')}}
            {{#> data-list-item-row}}
              {{#> data-list-item-control}}
                {{#> data-list-check checkbox--attribute=(concat 'name="' data-list--id '-check-action-check1" aria-labelledby="' data-list--id '-item4" checked')}}{{/data-list-check}}
              {{/data-list-item-control}}
              {{#> data-list-item-content}}
                {{#> data-list-cell data-list-cell--attribute=(concat 'id="' data-list--id '-item4"')}}
                  Workspaces
                {{/data-list-cell}}
              {{/data-list-item-content}}
            {{/data-list-item-row}}
          {{/data-list-item}}
          {{#> data-list-item data-list-item--attribute=(concat 'aria-labelledby="' data-list--id '-item5"')}}
            {{#> data-list-item-row}}
              {{#> data-list-item-control}}
                {{#> data-list-check checkbox--attribute=(concat 'name="' data-list--id '-check-action-check1" aria-labelledby="' data-list--id '-item5" checked')}}{{/data-list-check}}
              {{/data-list-item-control}}
              {{#> data-list-item-content}}
                {{#> data-list-cell data-list-cell--attribute=(concat 'id="' data-list--id '-item5"')}}
                  Last commit
                {{/data-list-cell}}
              {{/data-list-item-content}}
            {{/data-list-item-row}}
          {{/data-list-item}}
        {{/data-list}}
      {{/modal-box-body}}
      {{#> modal-box-footer}}
        {{#> button button--modifier="pf-m-primary"}}
          Save
        {{/button}}
        {{#> button button--modifier="pf-m-secondary"}}
          Cancel
        {{/button}}
      {{/modal-box-footer}}
    {{/modal-box}}
  {{/bullseye}}
{{/backdrop}}
```
