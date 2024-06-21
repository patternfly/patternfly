---
id: Data list
section: components
wrapperTag: div
---

## Demos
### Basic
```hbs isFullscreen
{{> page-template page-template--id='data-list-basic-example'}}

{{#* inline 'page-template-section'}}
  {{#> page-main-section page-main-section--modifier='pf-m-no-padding pf-m-padding-on-xl'}}
    {{> toolbar-template
        toolbar-template--id='data-list-basic-example-toolbar'
        toolbar-template--HasBulkSelect=true
        toolbar-template--HasOverflowMenu=true
      }}
  {{> data-list-simple-data-list}}
{{> data-list-pagination-footer}}
    
  {{/page-main-section}}
{{/inline}}
```

### Actionable
```hbs isFullscreen
{{> page-template page-template--id='data-list-actionable-example'}}

{{#* inline 'page-template-section'}}
  {{#> page-main-section page-main-section--modifier='pf-m-no-padding pf-m-padding-on-xl'}}
    {{> toolbar-template
        toolbar-template--id='data-list-actionable-example-toolbar'
        toolbar-template--HasToggleGroup=true
        toolbar-template--HasBulkSelect=true
        toolbar-template--HasOverflowMenu=true
        toolbar-template--HasOverflowMenuSecondButton=true
      }}
    {{> data-list-actionable-data-list}}
    {{> data-list-pagination-footer}}
  {{/page-main-section}}
{{/inline}}
```

### Expandable demo
```hbs isFullscreen
{{> page-template page-template--id='data-list-expandable-example'}}

{{#* inline 'page-template-section'}}
  {{#> page-main-section page-main-section--modifier='pf-m-no-padding pf-m-padding-on-xl'}}
    {{> toolbar-template
        toolbar-template--id='data-list-expandable-example-toolbar'
        toolbar-template--HasToggleGroup=true
        toolbar-template--HasExpandAll=true
        toolbar-template--HasBulkSelect=true
        toolbar-template--HasSearchFilter=true
        toolbar-template--HasOverflowMenu=true
      }}
    {{> data-list-expandable-data-list}}
    {{> data-list-pagination-footer}}
  {{/page-main-section}}
{{/inline}}
```

### Static bottom pagination
```hbs isFullscreen
{{> page-template page-template--id='data-list-static-bottom-example'}}

{{#* inline 'page-template-section'}}
  {{#> page-main-section page-main-section--modifier='pf-m-no-padding pf-m-padding-on-xl'}}
    {{> toolbar-template
        toolbar-template--id='data-list-static-bottom-example-toolbar'
        toolbar-template--HasToggleGroup=true
        toolbar-template--HasSearchFilter=true
        toolbar-template--HasOverflowMenu=true
        toolbar-template--HasOverflowMenuSecondButton=true
      }}
    {{> data-list-simple-data-list}}
    {{> data-list-pagination-footer-static}}
  {{/page-main-section}}
{{/inline}}
```
