---
id: 'Masthead'
beta: true
section: components
cssPrefix: pf-c-masthead
---

## Examples
### Basic
```hbs
{{#> masthead masthead--id="basic-masthead"}}
  {{> masthead-toggle}}
  {{#> masthead-main}}
    {{#> masthead-brand}}
      Logo
    {{/masthead-brand}}
  {{/masthead-main}}
  {{> masthead-content}}
{{/masthead}}
```

### Basic with mixed content
```hbs
{{#> masthead masthead--id="basic-masthead-with-mixed-content"}}
  {{> masthead-toggle}}
  {{#> masthead-main}}
    {{#> masthead-brand}}
      Logo
    {{/masthead-brand}}
  {{/masthead-main}}
  {{#> masthead-content}}
    {{#> l-flex}}
      <span>Testing text color</span>
      {{#> button button--modifier="pf-m-primary"}}
        testing
      {{/button}}
      {{#> l-flex-item l-flex-item--modifier="pf-m-align-flex-end"}}
        {{#> button button--modifier="pf-m-primary"}}
          testing
        {{/button}}
      {{/l-flex-item}}
    {{/l-flex}}
  {{/masthead-content}}
{{/masthead}}
```

### Display inline
```hbs
{{#> masthead masthead--id="inline-masthead" masthead--modifier="pf-m-display-inline"}}
  {{> masthead-toggle}}
  {{#> masthead-main}}
    {{#> masthead-brand}}
      Logo
    {{/masthead-brand}}
  {{/masthead-main}}
  {{> masthead-content}}
{{/masthead}}
```

### Display stack
```hbs
{{#> masthead masthead--id="stack-masthead" masthead--modifier="pf-m-display-stack"}}
  {{> masthead-toggle}}
  {{#> masthead-main}}
    {{#> masthead-brand}}
      Logo
    {{/masthead-brand}}
  {{/masthead-main}}
  {{> masthead-content}}
{{/masthead}}
```

### Display stack, display inline responsive
```hbs
{{#> masthead masthead--id="stack-inline-masthead" masthead--modifier="pf-m-display-inline pf-m-display-stack-on-lg pf-m-display-inline-on-2xl"}}
  {{> masthead-toggle}}
  {{#> masthead-main}}
    {{#> masthead-brand}}
      Logo
    {{/masthead-brand}}
  {{/masthead-main}}
  {{> masthead-content}}
{{/masthead}}
```

### Light variant
```hbs
{{#> masthead masthead--id="light-masthead" masthead--modifier="pf-m-light"}}
  {{> masthead-toggle}}
  {{#> masthead-main}}
    {{#> masthead-brand}}
      Logo
    {{/masthead-brand}}
  {{/masthead-main}}
  {{> masthead-content}}
{{/masthead}}
```

### Light 200 variant
```hbs
{{#> masthead masthead--id="light-masthead" masthead--modifier="pf-m-light-200"}}
  {{> masthead-toggle}}
  {{#> masthead-main}}
    {{#> masthead-brand}}
      Logo
    {{/masthead-brand}}
  {{/masthead-main}}
  {{> masthead-content}}
{{/masthead}}
```

### Insets
```hbs
{{#> masthead masthead--id="inset-masthead" masthead--modifier="pf-m-inset-sm"}}
  {{> masthead-toggle}}
  {{#> masthead-main}}
    {{#> masthead-brand}}
      Logo
    {{/masthead-brand}}
  {{/masthead-main}}
  {{> masthead-content}}
{{/masthead}}
```

## Documentation

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-masthead` | `<header>` | Initiates the masthead component. **Required** |
| `.pf-c-masthead__main` | `<div>` | Initiates the masthead main component. **Required** |
| `.pf-c-masthead__toggle` | `<span>` | Initiates the masthead toggle component. |
| `.pf-c-masthead__brand` | `<a>, <div>` | Initiates the masthead content component. |
| `.pf-c-masthead__content` | `<div>` | Initiates the masthead content component. |
| `.pf-m-inset-{none, sm, md, lg, xl, 2xl}{-on-[breakpoint]}` | `.pf-c-masthead` | Modifies masthead horizontal padding at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-light` | `.pf-c-masthead` |  Modifies a masthead component to have a light theme with a background color of `--pf-global--BackgroundColor--100`. |
| `.pf-m-light-200` | `.pf-c-masthead` |  Modifies a masthead component to have a light theme with a background color of `--pf-global--BackgroundColor--200`. |
