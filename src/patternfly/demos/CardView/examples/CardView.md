---
id: 'Card view'
section: demos
---

## Examples
### Card view
```hbs isFullscreen
{{> page-template page-template--id="card-view-basic-example" page-template-sidebar--nav--IsExpandable="true"}}

{{#* inline "page-template-main-content"}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}
  {{#> page-main-section page-main-section--modifier="pf-m-light pf-m-no-padding"}}
    {{> toolbar-template
          toolbar-template--id=(concat page-template--id '-toolbar')
          toolbar-template--modifier="pf-m-page-insets"
          toolbar-template--HasToggleGroup="true"
          toolbar-template--HasBulkSelect="true"
          toolbar-template--HasOverflowMenu="true"
          toolbar-template--HasFilter="true"
    }}
  {{/page-main-section}}
  {{#> page-main-section page-main-section--modifier="pf-m-fill"}}
    {{> card-template-gallery card-template-gallery--id="card-view-basic-example-gallery"}}
  {{/page-main-section}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-light pf-m-sticky-bottom pf-m-no-fill"}}
    {{#> pagination pagination--modifier="pf-m-bottom"}}
      {{> pagination-options-menu id="pagination-options-menu-bottom-example" pagination-options-menu--modifier="pf-m-top"}}
      {{> pagination-nav-content}}
    {{/pagination}}
  {{/page-main-section}}
{{/inline}}
```

## Documentation
