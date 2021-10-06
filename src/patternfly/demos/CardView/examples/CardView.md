---
id: 'Card view'
section: demos
---

## Examples
### Card view
```hbs isFullscreen
{{#> page page--id="card-view-example"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{!-- Brand --}}
    {{#> page-header-brand}}
      {{#> page-header-brand-toggle}}
        {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'id="' page--id '-nav-toggle" aria-label="Global navigation" aria-expanded="true" aria-controls="' page--id '-primary-nav"')}}
          <i class="fas fa-bars" aria-hidden="true"></i>
        {{/button}}
      {{/page-header-brand-toggle}}
      {{#> page-header-brand-link page-header-brand-link--href="#"}}
        {{#> brand brand--attribute='src="/assets/images/PF-Masthead-Logo.svg" alt="PatternFly logo"'}}{{/brand}}
      {{/page-header-brand-link}}
    {{/page-header-brand}}

    {{#> page-template-header-tools-elements}}
    {{/page-template-header-tools-elements}}
  {{/page-header}}
  {{!-- Nav --}}
  {{#> page-sidebar}}
    {{#> nav nav--attribute=(concat 'id="' page--id '-primary-nav" aria-label="Global"')}}
      {{#> nav-list}}
        {{#> nav-item}}
          {{#> nav-link nav-link--href="#" nav-link--current="true"}}
            System Panel
          {{/nav-link}}
        {{/nav-item}}
        {{#> nav-item}}
          {{#> nav-link nav-link--href="#"}}
            Policy
          {{/nav-link}}
        {{/nav-item}}
        {{#> nav-item}}
          {{#> nav-link nav-link--href="#"}}
            Authentication
          {{/nav-link}}
        {{/nav-item}}
        {{#> nav-item}}
          {{#> nav-link nav-link--href="#"}}
            Network Services
          {{/nav-link}}
        {{/nav-item}}
        {{#> nav-item}}
          {{#> nav-link nav-link--href="#"}}
            Server
          {{/nav-link}}
        {{/nav-item}}
      {{/nav-list}}
    {{/nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{#> content}}
        <h1>Projects</h1>
        <p>This is a demo that showcases PatternFly cards. </p>
      {{/content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-light pf-m-no-padding"}}
      {{> toolbar--template toolbar--id=(concat page--id '-toolbar') toolbar--modifier="pf-m-page-insets" toolbar--template--HasBulkSelect="true" toolbar--template--HasOverflowMenu="true" toolbar--template--HasFilter="true" toolbar--template--HasToggleGroup="true"}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-fill"}}
      {{> card-demo--template-gallery}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-light pf-m-sticky-bottom pf-m-no-fill"}}
      {{#> pagination pagination--modifier="pf-m-bottom"}}
        {{> pagination-options-menu id="pagination-options-menu-bottom-example" options-menu--IsText="true" pagination-options-menu--modifier="pf-m-top"}}
        {{> pagination-nav-content}}
      {{/pagination}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

## Documentation
