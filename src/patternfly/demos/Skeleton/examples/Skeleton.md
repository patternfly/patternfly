---
id: Skeleton
section: components
---

## Demos

### Skeleton card
```hbs isFullscreen
{{> page-template page-template--id="skeleton-basic-example"}}

{{#* inline "page-template-section"}}
  {{#> page-main-section}}
    {{#> gallery gallery--modifier="pf-m-gutter"}}
      <span class="pf-v6-screen-reader">Loading content</span>
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
