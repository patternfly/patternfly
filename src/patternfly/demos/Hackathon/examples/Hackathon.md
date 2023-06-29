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
        {{> brand brand--modifier="pf-m-darkmi" brand--attribute='src="/assets/images/PF-IconLogo-Reverse.svg" style="--pf-v5-c-brand--Width: 37px;" alt="PatternFly logo"'}}
      {{/masthead-brand}}
    {{/masthead-main}}
    {{#> masthead-content}}
      {{#> toolbar toolbar--modifier="pf-m-full-height pf-m-static" toolbar--id=(concat masthead--id '-toolbar')}}
        {{#> toolbar-content}}
          {{#> toolbar-content-section}}
            {{#if masthead-template--HasContextSelector}}
              {{#> toolbar-item toolbar-item--attribute='style="--pf-v5-c-toolbar__item--MinWidth: 140px"'}}
                {{#> menu-toggle menu-toggle--modifier="pf-m-full-height"}}
                  {{#> menu-toggle-text}}
                    Context selector
                  {{/menu-toggle-text}}
                  {{#> menu-toggle-controls}}
                    {{> menu-toggle-toggle-icon}}
                  {{/menu-toggle-controls}}
                {{/menu-toggle}}
              {{/toolbar-item}}
            {{/if}}
            {{#if masthead-template--HasHorizontalNav}}
              {{#> toolbar-item toolbar-item--modifier="pf-m-overflow-container" toolbar-item--attribute='style="--pf-v5-c-toolbar__item--MinWidth: 18ch;"'}}
                {{#> nav nav--HasScroll="true" nav--IsHorizontal="true" nav--IsScrollable="true" nav--attribute=(concat 'id="' masthead-q-id '-horizontal-nav" aria-label="Global"')}}
                  {{#> nav-list}}
                    {{#> nav-item}}
                      {{#> nav-link nav-link--href="#"}}
                        Horizontal nav item 1
                      {{/nav-link}}
                    {{/nav-item}}
                    {{#> nav-item}}
                      {{#> nav-link nav-link--href="#"}}
                        Horizontal nav item 2
                      {{/nav-link}}
                    {{/nav-item}}
                    {{#> nav-item}}
                      {{#> nav-link nav-link--href="#"}}
                        Horizontal nav item 3
                      {{/nav-link}}
                    {{/nav-item}}
                    {{#> nav-item}}
                      {{#> nav-link nav-link--href="#"}}
                        Horizontal nav item 4
                      {{/nav-link}}
                    {{/nav-item}}
                    {{#> nav-item}}
                      {{#> nav-link nav-link--href="#" nav-link--current="true"}}
                        Horizontal nav item 5
                      {{/nav-link}}
                    {{/nav-item}}
                  {{/nav-list}}
                {{/nav}}
              {{/toolbar-item}}
            {{/if}}
            {{> masthead-template-content-icon-group}}
          {{/toolbar-content-section}}
        {{/toolbar-content}}
      {{/toolbar}}
    {{/masthead-content}}
  {{/masthead}}
  {{> page-template-sidebar}}
  {{> page-template-main}}
{{/page}}
```

## Documentation

This demo implements the drawer in context of the page component.
