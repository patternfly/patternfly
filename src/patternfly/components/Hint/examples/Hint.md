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
    Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.
  {{/hint-body}}
  {{#> hint-actions}}
    {{#> dropdown id="dropdown-kebab" dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
  {{/hint-actions}}
{{/hint}}

<br>

{{#> hint}}
  {{#> hint-header}}
    Do more with Find it Fix it capabilities
  {{/hint-header}}
  {{#> hint-body}}
    Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.
  {{/hint-body}}
  {{#> hint-footer}}
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      Try it for 90 days
    {{/button}}
  {{/hint-footer}}
  {{#> hint-actions}}
    {{#> dropdown id="dropdown-kebab" dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
  {{/hint-actions}}
{{/hint}}
```

```hbs title=Default-with-no-header
{{#> hint}}
  {{#> hint-body}}
    Welcome to the new documentation experience.
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      Learn more about the improved features.
    {{/button}}
  {{/hint-body}}
{{/hint}}

<br>

{{#> hint}}
  {{#> hint-body}}
    Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.
  {{/hint-body}}
  {{#> hint-footer}}
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      Try it for 90 days
    {{/button}}
  {{/hint-footer}}
  {{#> hint-actions}}
    {{#> dropdown id="dropdown-kebab" dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
  {{/hint-actions}}
{{/hint}}
```

```hbs title=Dominant-with-header
{{#> hint hint--modifier="pf-m-dominant"}}
  {{#> hint-header}}
    Create service binding
  {{/hint-header}}
  {{#> hint-body}}
    Service bindings create a secret containing the necessary information for another application to use mongodb-persistent. Once the binding is ready, add the secret to your application’s environment variables.
  {{/hint-body}}
  {{#> hint-actions}}
    {{#> dropdown id="dropdown-kebab" dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
  {{/hint-actions}}
{{/hint}}

<br>

{{#> hint hint--modifier="pf-m-dominant"}}
  {{#> hint-header}}
    Create service binding
  {{/hint-header}}
  {{#> hint-body}}
    Service bindings create a secret containing the necessary information for another application to use mongodb-persistent. Once the binding is ready, add the secret to your application’s environment variables.
  {{/hint-body}}
  {{#> hint-footer}}
    {{#> button button--modifier="pf-m-secondary"}}
      Create service binding
    {{/button}}
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      Learn more
      {{#> button-icon button-icon--modifier="pf-m-end"}}
        <i class="fas fa-external-link-alt" aria-hidden="true"></i>
      {{/button-icon}}
    {{/button}}
  {{/hint-footer}}
  {{#> hint-actions}}
    {{#> dropdown id="dropdown-kebab" dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
  {{/hint-actions}}
{{/hint}}
```

```hbs title=Dominant-with-no-header
{{#> hint hint--modifier="pf-m-dominant"}}
  {{#> hint-body}}
    Welcome to the new documentation experience.
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      Learn more about the improved features.
    {{/button}}
  {{/hint-body}}
{{/hint}}

<br>

{{#> hint hint--modifier="pf-m-dominant"}}
  {{#> hint-body}}
    Service bindings create a secret containing the necessary information for another application to use mongodb-persistent. Once the binding is ready, add the secret to your application’s environment variables.
  {{/hint-body}}
  {{#> hint-footer}}
    {{#> button button--modifier="pf-m-secondary"}}
      Create service binding
    {{/button}}
    {{#> button button--modifier="pf-m-link pf-m-inline"}}
      Learn more
      {{#> button-icon button-icon--modifier="pf-m-end"}}
        <i class="fas fa-external-link-alt" aria-hidden="true"></i>
      {{/button-icon}}
    {{/button}}
  {{/hint-footer}}
  {{#> hint-actions}}
    {{#> dropdown id="dropdown-kebab" dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}{{/dropdown}}
  {{/hint-actions}}
{{/hint}}
```

## Documentation


### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-hint` | `<div>` | Initiates the hint component. |
| `.pf-c-hint__header` | `<div>` | Initiates the hint header element. |
| `.pf-c-hint__body` | `<div>` | Initiates the hint body element. |
| `.pf-c-hint__footer` | `<div>` | Initiates the hint footer element. |
| `.pf-c-hint__actions` | `<div>` | Initiates the hint actions element. |
| `.pf-m-dominant` | `.pf-c-hint` | Modifies the hint component for dominant styles. |