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
      page-template-title--modifier="pf-m-shadow-bottom"
      page-template-footer--modifier="pf-m-shadow-top"
}}
```

### Centered content
```hbs isFullscreen
{{> page-template
      page-template--id="page-demo-centered-contentt"
}}

{{#*inline "page-template-main-content"}}
  {{#> page-main-section page-main-section--IsLimitWidth="true" page-main-section--modifier="pf-m-align-center pf-m-fill"}}
    {{#> bullseye}}
      {{#> content content--modifier="pf-u-text-align-center"}}
        <h1>Centered title (content centered)</h1>
        <p>Page section filled, width limited, centered.</p>
      {{/content}}
    {{/bullseye}}
  {{/page-main-section}}
  {{> divider}}
  {{#> page-main-section page-main-section--IsLimitWidth="true" page-main-section--modifier="pf-m-align-center pf-m-light"}}
    {{#> bullseye}}
      {{#> content content--modifier="pf-u-text-align-center"}}
        <h2>Centered page section (content centered)</h2>
        <p>Page section light, width limited, centered.</p>
      {{/content}}
    {{/bullseye}}
  {{/page-main-section}}
  {{> divider}}
  {{#> page-main-section page-main-section--IsLimitWidth="true" page-main-section--modifier="pf-m-align-center"}}
    {{#> card}}
      {{#> card-title}}
        <h2>Card title</h2>
      {{/card-title}}
      {{#> card-body}}
        <p>Page section width limited, centered. Full width card.</p>
      {{/card-body}}
    {{/card}}
  {{/page-main-section}}
  {{> divider}}
  {{#> page-main-section}}
    {{#> grid grid--modifier="pf-m-gutter pf-m-all-6-col-on-md pf-m-all-3-col-on-xl"}}
      {{#> grid-item grid-item--modifier="pf-m-12-col"}}
        <h2 class="pf-u-text-align-center">(Default page section)</h2>
      {{/grid-item}}
      {{#> card}}
        {{#> card-header}}
          Card header
        {{/card-header}}
        {{#> card-body}}
          Card body
        {{/card-body}}
      {{/card}}
      {{#> card}}
        {{#> card-header}}
          Card header
        {{/card-header}}
        {{#> card-body}}
          Card body
        {{/card-body}}
      {{/card}}
      {{#> card}}
        {{#> card-header}}
          Card header
        {{/card-header}}
        {{#> card-body}}
          Card body
        {{/card-body}}
      {{/card}}
      {{#> card}}
        {{#> card-header}}
          Card header
        {{/card-header}}
        {{#> card-body}}
          Card body
        {{/card-body}}
      {{/card}}
    {{/grid}}
  {{/page-main-section}}
  {{> divider}}
  {{#> page-main-section page-main-section--IsLimitWidth="true" page-main-section--modifier="pf-m-align-center"}}
    {{#> grid grid--modifier="pf-m-gutter pf-m-all-6-col-on-md pf-m-all-3-col-on-xl"}}
      {{#> grid-item grid-item--modifier="pf-m-12-col"}}
        <h2 class="pf-u-text-align-center">(Page section width limited, centered.)</h2>
      {{/grid-item}}
      {{#> card}}
        {{#> card-header}}
          Card header
        {{/card-header}}
        {{#> card-body}}
          Card body
        {{/card-body}}
      {{/card}}
      {{#> card}}
        {{#> card-header}}
          Card header
        {{/card-header}}
        {{#> card-body}}
          Card body
        {{/card-body}}
      {{/card}}
      {{#> card}}
        {{#> card-header}}
          Card header
        {{/card-header}}
        {{#> card-body}}
          Card body
        {{/card-body}}
      {{/card}}
      {{#> card}}
        {{#> card-header}}
          Card header
        {{/card-header}}
        {{#> card-body}}
          Card body
        {{/card-body}}
      {{/card}}
    {{/grid}}
  {{/page-main-section}}
{{/inline}}
```

## Documentation
To make the page component take up the full height of the viewport, it is recommended to add `height: 100%;` to all ancestor elements of the page component.
