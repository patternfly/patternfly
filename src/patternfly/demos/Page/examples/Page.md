---
id: Page
section: components
wrapperTag: div
---

## Demos

### Masthead component
```hbs isFullscreen
{{> page-demo-masthead-component page-demo-default--id="page-demo-masthead-component"}}
```

### Sticky horizontal subnav
```hbs isFullscreen
{{> page-demo-sticky-top-horizontal-subnav page-demo-default--id="page-demo-sticky-top-horizontal-subnav"}}
```

### Sticky breadcrumb
```hbs isFullscreen
{{> page-demo-sticky-top-breadcrumb page-demo-default--id="page-demo-sticky-top-breadcrumb"}}
```

### Sticky section group
```hbs isFullscreen
{{> page-demo-sticky-top-section-group page-demo-default--id="page-demo-sticky-top-section-group"}}
```

### Sticky section bottom
```hbs isFullscreen
{{> page-demo-sticky-section-bottom page-demo-default--id="page-demo-sticky-section-bottom"}}
```

### Overflow scroll
```hbs isFullscreen
{{> page-demo-overflow-scroll page-demo-default--id="page-demo-overflow-scroll"}}
```

### Centered content
```hbs isFullscreen
{{#> page page--id="page-demo-centered-content"}}
  {{> page-template-header}}
  {{> page-template-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
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
  {{/page-main}}
{{/page}}
```

## Documentation
To make the page component take up the full height of the viewport, it is recommended to add `height: 100%;` to all ancestor elements of the page component.
