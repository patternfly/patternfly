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

  {{> page-template-main}}
{{/page}}
```

## Documentation

This demo implements the drawer in context of the page component.
