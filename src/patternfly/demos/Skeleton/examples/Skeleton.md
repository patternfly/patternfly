---
id: Skeleton
section: components
---

## Demos

### Skeleton card
```hbs isFullscreen
{{> page-template page-template--id="skeleton-basic-example"}}

{{#* inline "page-template-main-content"}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}
  {{#> page-main-section}}
    {{#> gallery gallery--modifier="pf-m-gutter"}}
      {{> card-skeleton}}
      {{> card-skeleton}}
      {{> card-skeleton}}
      {{> card-skeleton}}
      {{> card-skeleton}}
      {{> card-skeleton}}
      {{> card-skeleton}}
    {{/gallery}}
  {{/page-main-section}}
{{/inline}}
```
