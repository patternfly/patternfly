---
id: 'Banner'
section: components
cssPrefix: pf-v6-c-banner
wrapperTag: div
---

## Examples
### Basic
```hbs isFullscreen
{{> page-template page-template--id="banner-basic-example" page-template-gallery--IsLongGallery="true"}}

{{#* inline "page-template-main-content"}}
  {{> banner-template banner-template--modifier="pf-m-sticky"}}
  {{> demos/Page/page-template-main-content}}
{{/inline}}
```
### Top/bottom
```hbs isFullscreen
{{#> l-flex l-flex--modifier="pf-m-column pf-m-nowrap pf-m-space-items-none" l-flex--attribute='style="height: 100%;"'}}
  {{> banner-template banner-template--modifier="pf-m-sticky"}}
  {{#> l-flex-item l-flex-item--modifier="pf-m-grow" l-flex-item--attribute='style="min-height: 0;"'}}
    {{> page-template page-template--id="banner-top-bottom-example" page-template-gallery--IsLongGallery="true"}}
  {{/l-flex-item}}
  {{> banner-template banner-template--modifier="pf-m-sticky"}}
{{/l-flex}}
```
