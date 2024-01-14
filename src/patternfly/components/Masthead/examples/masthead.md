---
id: 'Masthead'
section: components
cssPrefix: pf-v5-c-masthead
---

## Examples
### Basic
```hbs
{{#> masthead masthead--id="basic-masthead"}}
  {{> masthead-toggle}}
  {{#> masthead-main}}
    {{> masthead-brand}}
  {{/masthead-main}}
  {{> masthead-content}}
{{/masthead}}
```

### Basic with mixed content
```hbs
{{#> masthead masthead--id="basic-masthead-with-mixed-content-example"}}
  {{> masthead-toggle}}
  {{#> masthead-main}}
    {{> masthead-brand}}
  {{/masthead-main}}
  {{#> masthead-content}}
    {{#> button button--modifier="pf-m-primary"}}
      Primary
    {{/button}}
    {{#> button button--modifier="pf-m-secondary"}}
      Secondary
    {{/button}}
    {{#> button button--modifier="pf-m-tertiary"}}
      Tertiary
    {{/button}}
  {{/masthead-content}}
{{/masthead}}
```

### Display inline
```hbs
{{#> masthead masthead--id="inline-masthead-example" masthead--modifier="pf-m-display-inline"}}
  {{> masthead-toggle}}
  {{#> masthead-main}}
    {{> masthead-brand}}
  {{/masthead-main}}
  {{> masthead-content}}
{{/masthead}}
```

### Display stack
```hbs
{{#> masthead masthead--id="stack-masthead-example" masthead--modifier="pf-m-display-stack"}}
  {{> masthead-toggle}}
  {{#> masthead-main}}
    {{> masthead-brand}}
  {{/masthead-main}}
  {{> masthead-content}}
{{/masthead}}
```

### Display stack, display inline responsive
```hbs
{{#> masthead masthead--id="stack-inline-masthead-example" masthead--modifier="pf-m-display-inline pf-m-display-stack-on-lg pf-m-display-inline-on-2xl"}}
  {{> masthead-toggle}}
  {{#> masthead-main}}
    {{> masthead-brand}}
  {{/masthead-main}}
  {{> masthead-content}}
{{/masthead}}
```

### Insets
```hbs
{{#> masthead masthead--id="inset-masthead-example" masthead--modifier="pf-m-inset-sm"}}
  {{> masthead-toggle}}
  {{#> masthead-main}}
    {{> masthead-brand}}
  {{/masthead-main}}
  {{> masthead-content}}
{{/masthead}}
```

## Documentation

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-masthead` | `<header>` | Initiates the masthead component. **Required** |
| `.pf-v5-c-masthead__main` | `<div>` | Initiates the masthead main component. **Required** |
| `.pf-v5-c-masthead__toggle` | `<span>` | Initiates the masthead toggle component. |
| `.pf-v5-c-masthead__brand` | `<a>, <div>` | Initiates the masthead content component. |
| `.pf-v5-c-masthead__content` | `<div>` | Initiates the masthead content component. |
| `.pf-m-inset-{none, sm, md, lg, xl, 2xl}{-on-[breakpoint]}` | `.pf-v5-c-masthead` | Modifies masthead horizontal padding at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
