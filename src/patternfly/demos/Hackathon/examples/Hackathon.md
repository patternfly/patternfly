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
        {{> brand brand--attribute='src="/assets/images/PF-IconLogo-Reverse.svg" alt="PatternFly logo"'}}
      {{/masthead-brand}}
    {{/masthead-main}}
    {{> masthead-template-content}}
  {{/masthead}}
  {{> page-template-sidebar}}
  {{> page-template-main}}
{{/page}}
```

## Documentation

This demo implements the drawer in context of the page component.
