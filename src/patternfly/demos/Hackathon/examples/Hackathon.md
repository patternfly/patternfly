---
id: Hackathon
section: patterns
wrapperTag: div
---

## Demos

### Primary-detail expanded

```hbs isFullscreen
{{#> page page--id="page-id"}}
  {{#> masthead masthead--id="masthead-id" masthead--modifier=masthead-template--modifier masthead-template-content-icon-group--breakpoint="lg"}}
    {{> masthead-toggle}}
    {{#> masthead-main}}
      {{#> masthead-brand}}
        {{> brand brand--modifier="pf-m-light" brand--attribute='src="/assets/images/PF-IconLogo-color.svg" style="--pf-v5-c-brand--Width: 37px;" alt="PatternFly logo"'}}
        {{> brand brand--modifier="pf-m-dark" brand--attribute='src="/assets/images/PF-IconLogo-Reverse.svg" style="--pf-v5-c-brand--Width: 37px;" alt="PatternFly logo"'}}
      {{/masthead-brand}}
    {{/masthead-main}}
    {{#> masthead-content}}
      {{#> toolbar}}
        {{#> toolbar-content}}
          {{#> toolbar-content-section}}
            {{#> toolbar-item}}
              {{#> menu-toggle}}
                {{#> menu-toggle-text}}
                  Context selector
                {{/menu-toggle-text}}
                {{#> menu-toggle-controls}}
                  {{> menu-toggle-toggle-icon}}
                {{/menu-toggle-controls}}
              {{/menu-toggle}}
            {{/toolbar-item}}
            {{> masthead-template-content-icon-group}}
          {{/toolbar-content-section}}
        {{/toolbar-content}}
      {{/toolbar}}
    {{/masthead-content}}
  {{/masthead}}
{{#> page-sidebar page-sidebar--ExcludeSidebarBody=true}}
{{#> page-sidebar-body}}
  {{#> content}}
    <h3>
        PatternFly Navigation Product Name
    </h3>
  {{/content}}
{{/page-sidebar-body}}
{{#> page-sidebar-body}}
{{#> nav nav--attribute='aria-label="Global"'}}
        {{#> nav-section nav-section--attribute='aria-labelledby="grouped-title1"'}}
          {{#> nav-section-title nav-section-title--attribute='id="grouped-title1"'}}
            Cluster
          {{/nav-section-title}}
          {{#> nav-list}}
            {{#> nav-item}}
              {{#> nav-link nav-link--href="#"}}
                Dashboard
              {{/nav-link}}
            {{/nav-item}}
            {{#> nav-item}}
              {{#> nav-link nav-link--href="#"}}
                Builds
              {{/nav-link}}
            {{/nav-item}}
            {{#> nav-item}}
              {{#> nav-link nav-link--href="#"}}
                Compute
              {{/nav-link}}
            {{/nav-item}}
            {{#> nav-item}}
              {{#> nav-link nav-link--href="#"}}
                Networking
              {{/nav-link}}
            {{/nav-item}}
            {{#> nav-item}}
              {{#> nav-link nav-link--href="#"}}
                Observe
              {{/nav-link}}
            {{/nav-item}}
            {{#> nav-item}}
              {{#> nav-link nav-link--href="#"}}
                Operators
              {{/nav-link}}
            {{/nav-item}}
            {{#> nav-item}}
              {{#> nav-link nav-link--href="#" nav-link--current="true"}}
                Applications
              {{/nav-link}}
            {{/nav-item}}
            {{#> nav-item}}
              {{#> nav-link nav-link--href="#"}}
                Workloads
              {{/nav-link}}
            {{/nav-item}}
          {{/nav-list}}
        {{/nav-section}}
        {{#> nav-section nav-section--attribute='aria-labelledby="grouped-title2"'}}
          {{#> nav-section-title nav-section-title--attribute='id="grouped-title2"'}}
            Settings
          {{/nav-section-title}}
          {{#> nav-list}}
            {{#> nav-item}}
              {{#> nav-link nav-link--href="#"}}
                User Management
              {{/nav-link}}
            {{/nav-item}}
            {{#> nav-item}}
              {{#> nav-link nav-link--href="#"}}
                Administration
              {{/nav-link}}
            {{/nav-item}}
            {{#> nav-item}}
              {{#> nav-link nav-link--href="#"}}
                Import YAML
              {{/nav-link}}
            {{/nav-item}}
            {{#> nav-item}}
              {{#> nav-link nav-link--href="#"}}
                Help and Support
              {{/nav-link}}
            {{/nav-item}}
          {{/nav-list}}
        {{/nav-section}}
      {{/nav}}
    {{/page-sidebar-body}}
{{/page-sidebar}}

{{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
{{> page-template-breadcrumb}}

  {{#> page-main-section page-main-section--IsLimitWidth="true" page-main-section--modifier=(concat 'pf-m-light ' page-template-title--modifier)}}
    {{#> content}}
      <h1>
        {{~#if page-template-title--title}}
          {{page-template-title--title}}
        {{else}}
          Penta Hackathon Demo Page
        {{/if}}
      </h1>
      <p>
        {{~#if page-template-title--description}}
          {{page-template-title--description}}
        {{else}}
          A showcase of our new tokens being applied to create a new theme.
        {{/if}}
      </p>
    {{/content}}
  {{/page-main-section}}
  {{#> page-main-section page-main-section--IsLimitWidth="true" page-main-section--modifier=page-template-gallery--modifier page-main-section--attribute=page-template-gallery--attribute}}
    {{> toolbar-template toolbar--id=(concat page--id '-toolbar') toolbar-template--HasBulkSelect="true" toolbar-template--HasToggleGroup="true" toolbar-template--HasSearchFilter="true" toolbar-template--HasSortButton="true" toolbar-template--HasOverflowMenu="true"}}
    {{> table-simple-table}}
    {{> table-pagination-footer}}
  {{/page-main-section}}
{{/page-main}}
{{/page}}
```

## Documentation

This demo is specially engineered to make you happy.
