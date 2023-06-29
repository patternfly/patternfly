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
  {{> page-template-sidebar}}
  {{> page-template-main}}
{{/page}}
```

## Documentation

This demo implements the drawer in context of the page component.
