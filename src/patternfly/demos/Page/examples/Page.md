---
id: Page
section: components
wrapperTag: div
---

## Demos

### Basic
```hbs isFullscreen
{{> page-template page-template--id="page-demo-basic"}}
```

### Sticky horizontal subnav
```hbs isFullscreen
{{> page-template
      page-template--id="page-demo-sticky-top-horizontal-subnav"
      page-template-gallery--IsLongGallery="true"
      page-template--HasHorizontalSubnav="true"
      page-template-horizontal-subnav--modifier="pf-m-sticky-top"
}}
```

### Sticky breadcrumb
```hbs isFullscreen
{{> page-template
      page-template--id="page-demo-sticky-top-breadcrumb"
      page-template-gallery--IsLongGallery="true"
      page-template-breadcrumb--modifier="pf-m-sticky-top"
}}
```

### Sticky section group
```hbs isFullscreen
{{> page-template
      page-template--id="page-demo-sticky-top-section-group"
      page-template--HasNoBreadcrumb="true"
      page-template--HasNoTitle="true"
      page-template-gallery--IsLongGallery="true"
}}

{{#*inline "page-template-section"}}
  {{#> page-main-group page-main-group--modifier="pf-m-sticky-top"}}
    {{> page-template-breadcrumb}}
    {{> page-template-title}}
  {{/page-main-group}}
  {{> page-template-gallery}}
{{/inline}}
```

### Sticky section bottom
```hbs isFullscreen
{{> page-template
      page-template--id="page-demo-sticky-section-bottom"
      page-template--HasFooter="true"
      page-template-gallery--IsLongGallery="true"
      page-template-footer--modifier="pf-m-sticky-bottom"
}}
```

### Overflow scroll
```hbs isFullscreen
{{> page-template
      page-template--id="page-demo-overflow-scroll"
      page-template--HasFooter="true"
      page-template-gallery--IsLongGallery="true"
      page-template-gallery--modifier="pf-m-overflow-scroll"
      page-template-gallery--attribute='tabindex="0"'
      page-template-title--modifier="pf-m-shadow-bottom"
      page-template-footer--modifier="pf-m-shadow-top"
}}
```

### Centered section
```hbs isFullscreen
{{> page-template
      page-template--id="page-demo-centered-section"
}}

{{#*inline "page-template-main-content"}}
  {{#> page-main-section page-main-section--IsLimitWidth="true" page-main-section--modifier="pf-m-align-center pf-m-light"}}
    {{#> content}}
      <h1>Centering page sections</h1>
      <p>When a width limited page section is wider than the value of <code>--pf-c-page--section--m-limit-width--MaxWidth</code>, the section will be centered in the main section.</p>
      <p>All of the page sections on this page are centered.</p>
    {{/content~}}
  {{/page-main-section}}
  {{> divider}}
  {{#> page-main-section page-main-section--IsLimitWidth="true" page-main-section--modifier="pf-m-align-center"}}
    {{> page-template-gallery-cards}}
  {{/page-main-section}}
  {{> divider}}
  {{#> page-main-section page-main-section--IsLimitWidth="true" page-main-section--modifier="pf-m-align-center pf-u-text-align-center"}}
    {{#> card}}
      {{#> card-body}}
        <p>The content in this section is also centered using the <code>.pf-u-text-align-center</code> utility class.</p>
      {{/card-body}}
    {{/card}}
  {{/page-main-section}}
{{/inline}}
```

## Documentation
To make the page component take up the full height of the viewport, it is recommended to add `height: 100%;` to all ancestor elements of the page component.
