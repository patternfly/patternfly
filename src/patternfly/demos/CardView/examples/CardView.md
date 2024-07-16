---
id: 'Card view'
section: patterns
---

## Examples
### Card view
```hbs isFullscreen
{{> page-template page-template--id="card-view-basic-example" page-template-sidebar--nav--IsExpandable="true"}}

{{#* inline "page-template-section"}}
  {{#> page-main-section page-main-section--modifier="pf-m-light"}}
    {{> toolbar-template
        toolbar-template--id=(concat page-template--id '-toolbar')
        toolbar-template--HasToggleGroup=true
        toolbar-template--HasBulkSelect=true
        toolbar-template--HasOverflowMenu=true
        toolbar-template--HasFilter=true
      }}
  {{/page-main-section}}
  {{#> page-main-section page-main-section--modifier="pf-m-fill"}}
    {{> card-template-gallery card-template-gallery--id="card-view-basic-example-gallery"}}
  {{/page-main-section}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-light pf-m-sticky-bottom pf-m-no-fill"}}
    {{#> pagination pagination--modifier="pf-m-bottom"}}
      {{> pagination-menu-toggle pagination-menu-toggle--id="pagination-menu-toggle-bottom-example" pagination-menu-toggle--modifier="pf-m-top"}}
      {{> pagination-nav-content}}
    {{/pagination}}
  {{/page-main-section}}
{{/inline}}
```

## Documentation
