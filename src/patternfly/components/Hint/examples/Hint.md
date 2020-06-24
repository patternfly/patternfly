---
title: 'Hint'
section: components
beta: true
cssPrefix: pf-c-hint
---

## Examples
```hbs title=Default-with-header
{{#> hint}}
  {{#> hint-header}}
    Do more with Find it Fix it capabilities
  {{/hint-header}}
  {{#> hint-body}}
    Upgrade to Red Hat Smart Management to remediate all your systems accross regions and geographies.
  {{/hint-body}}
{{/hint}}

{{#> hint}}
  {{#> hint-header}}
    Do more with Find it Fix it capabilities
  {{/hint-header}}
  {{#> hint-body}}
    Upgrade to Red Hat Smart Management to remediate all your systems accross regions and geographies.
  {{/hint-body}}
  {{#> hint-actions}}
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      Try it for 90 days
    {{/button}}
  {{/hint-actions}}
{{/hint}}
```

```hbs title=Default-with-no-header
{{#> hint}}
  {{#> hint-body}}
    Upgrade to Red Hat Smart Management to remediate all your systems accross regions and geographies.
  {{/hint-body}}
{{/hint}}

{{#> hint}}
  {{#> hint-body}}
    Upgrade to Red Hat Smart Management to remediate all your systems accross regions and geographies.
  {{/hint-body}}
  {{#> hint-actions}}
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      Try it for 90 days
    {{/button}}
  {{/hint-actions}}
{{/hint}}
```

```hbs title=Dominant-with-header
{{#> hint}}
  {{#> hint-header}}
    Create service binding
  {{/hint-header}}
  {{#> hint-body}}
    Service bindings create a secret containing the necessary information for another application to use mongodb-persistent. Once the binding is ready, add the secret to your application’s environment variables.
  {{/hint-body}}
{{/hint}}

{{#> hint}}
  {{#> hint-header}}
    Create service binding
  {{/hint-header}}
  {{#> hint-body}}
    Service bindings create a secret containing the necessary information for another application to use mongodb-persistent. Once the binding is ready, add the secret to your application’s environment variables.
  {{/hint-body}}
  {{#> hint-actions}}
    {{#> button button--modifier="pf-m-secondary"}}
      Create service binding
    {{/button}}
    {{#> button button--modifier="pf-m-link"}}
      Learn more
      {{#> button-icon button-icon--modifier="pf-m-end"}}
        <i class="fas fa-external-link-alt" aria-hidden="true"></i>
      {{/button-icon}}
    {{/button}}
  {{/hint-actions}}
{{/hint}}
```

```hbs title=Dominant-with-no-header
{{#> hint hint--modifier="pf-m-dominant"}}
  {{#> hint-body}}
    Service bindings create a secret containing the necessary information for another application to use mongodb-persistent. Once the binding is ready, add the secret to your application’s environment variables.
  {{/hint-body}}
{{/hint}}

{{#> hint hint--modifier="pf-m-dominant"}}
  {{#> hint-body}}
    Service bindings create a secret containing the necessary information for another application to use mongodb-persistent. Once the binding is ready, add the secret to your application’s environment variables.
  {{/hint-body}}
  {{#> hint-actions}}
    {{#> button button--modifier="pf-m-secondary"}}
      Create service binding
    {{/button}}
    {{#> button button--modifier="pf-m-link"}}
      Learn more
      {{#> button-icon button-icon--modifier="pf-m-end"}}
        <i class="fas fa-external-link-alt" aria-hidden="true"></i>
      {{/button-icon}}
    {{/button}}
  {{/hint-actions}}
{{/hint}}
```

## Documentation


### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
