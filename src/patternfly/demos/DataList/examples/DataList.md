---
id: Data list
section: components
wrapperTag: div
---

## Demos
### Basic
```hbs isFullscreen
{{> page-template page-template--id="data-list-basic-example"}}

{{#* inline "page-template-main-content"}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
    {{#> card}}
      {{> toolbar-template
            toolbar--id="data-list-basic-example-toolbar"
            toolbar-template--HasBulkSelect="true"
            toolbar-template--HasContextSelector="true"
            toolbar-template--HasOverflowMenu="true"
      }}
      {{> data-list-simple-data-list}}
      {{> data-list-pagination-footer}}
    {{/card}}
  {{/page-main-section}}
{{/inline}}
```

### Actionable
```hbs isFullscreen
{{> page-template page-template--id="data-list-actionable-example"}}

{{#* inline "page-template-main-content"}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
    {{#> card}}
      {{> toolbar-template toolbar--id="data-list-actionable-example-toolbar"
            toolbar-template--HasToggleGroup="true"
            toolbar-template--HasBulkSelect="true"
            toolbar-template--HasContextSelector="true"
            toolbar-template--HasOverflowMenu="true"
            toolbar-template--HasOverflowMenuSecondButton="true"
      }}
      {{> data-list-actionable-data-list}}
      {{> data-list-pagination-footer}}
    {{/card}}
  {{/page-main-section}}
{{/inline}}
```

### Expandable demo
```hbs isFullscreen
{{> page-template page-template--id="data-list-expandable-example"}}

{{#* inline "page-template-main-content"}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
    {{#> card}}
      {{> toolbar-template
            toolbar--id="data-list-expandable-example-toolbar"
            toolbar-template--HasToggleGroup="true"
            toolbar-template--HasExpandAll="true"
            toolbar-template--HasBulkSelect="true"
            toolbar-template--HasSearchFilter="true"
            toolbar-template--HasOverflowMenu="true"
      }}
      {{> data-list-expandable-data-list}}
      {{> data-list-pagination-footer}}
    {{/card}}
  {{/page-main-section}}
{{/inline}}
```

### Static bottom pagination
```hbs isFullscreen
{{> page-template page-template--id="data-list-static-bottom-example"}}

{{#* inline "page-template-main-content"}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
    {{#> card}}
      {{> toolbar-template
            toolbar--id="data-list-static-bottom-example-toolbar"
            toolbar-template--HasToggleGroup="true"
            toolbar-template--HasSearchFilter="true"
            toolbar-template--HasOverflowMenu="true"
            toolbar-template--HasOverflowMenuSecondButton="true"
      }}
      {{> data-list-simple-data-list}}
      {{> data-list-pagination-footer-static}}
    {{/card}}
  {{/page-main-section}}
{{/inline}}
```
