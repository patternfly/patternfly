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
  {{#> masthead-brand}}
    Logo
  {{/masthead-brand}}
  {{#> masthead-content}}
    Example content
  {{/masthead-content}}
{{/masthead}}
```

### Display inline
```hbs
{{#> masthead masthead--id="inline-masthead" masthead--modifier="pf-m-display-inline"}}
  {{> masthead-toggle}}
  {{#> masthead-brand}}
    Logo
  {{/masthead-brand}}
  {{#> masthead-content}}
    Example content
  {{/masthead-content}}
{{/masthead}}
```

### Display stack
```hbs
{{#> masthead masthead--id="stack-masthead" masthead--modifier="pf-m-display-stack"}}
  {{> masthead-toggle}}
  {{#> masthead-brand}}
    Logo
  {{/masthead-brand}}
  {{#> masthead-content}}
    Example content
  {{/masthead-content}}
{{/masthead}}
```

### Display stack, display inline responsive
```hbs
{{#> masthead masthead--id="stack-inline-masthead" masthead--modifier="pf-m-display-inline pf-m-display-stack-on-lg pf-m-display-inline-on-2xl"}}
  {{> masthead-toggle}}
  {{#> masthead-brand}}
    Logo
  {{/masthead-brand}}
  {{#> masthead-content}}
    Example content
  {{/masthead-content}}
{{/masthead}}
```

### Light variant
```hbs
{{#> masthead masthead--id="light-masthead" masthead--modifier="pf-m-light-100"}}
  {{> masthead-toggle}}
  {{#> masthead-brand}}
    Logo
  {{/masthead-brand}}
  {{#> masthead-content}}
    Example content
  {{/masthead-content}}
{{/masthead}}
```

### Light 200 variant
```hbs
{{#> masthead masthead--id="light-masthead" masthead--modifier="pf-m-light-200"}}
  {{> masthead-toggle}}
  {{#> masthead-brand}}
    Logo
  {{/masthead-brand}}
  {{#> masthead-content}}
    Example content
  {{/masthead-content}}
{{/masthead}}
```

### Insets
```hbs
{{#> masthead masthead--id="inset-masthead" masthead--modifier="pf-m-inset-sm"}}
  {{> masthead-toggle}}
  {{#> masthead-brand}}
    Logo
  {{/masthead-brand}}
  {{#> masthead-content}}
    Example content
  {{/masthead-content}}
{{/masthead}}
```

### Responsive insets
```hbs
{{#> masthead masthead--id="responsive-insets-masthead" masthead--modifier="pf-m-inset-xl pf-m-inset-sm-on-lg pf-m-inset-xl-on-2xl"}}
  {{> masthead-toggle}}
  {{#> masthead-brand}}
    Logo
  {{/masthead-brand}}
  {{#> masthead-content}}
    Example content
  {{/masthead-content}}
{{/masthead}}
```

### Page insets
```hbs
{{#> masthead masthead--id="responsive-insets-masthead" masthead--modifier="pf-m-page-insets"}}
  {{> masthead-toggle}}
  {{#> masthead-brand}}
    Logo
  {{/masthead-brand}}
  {{#> masthead-content}}
    Example content
  {{/masthead-content}}
{{/masthead}}
```

## Documentation

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-masthead` | `<header>` | Initiates the masthead component. **Required** |
| `.pf-c-masthead__toggle` | `<span>` | Initiates the masthead toggle component. |
| `.pf-c-masthead__brand` | `<a>, <div>` | Initiates the masthead content component. |
| `.pf-c-masthead__content` | `<div>` | Initiates the masthead content component. |
| `.pf-m-light-100` | `.pf-c-masthead` |  Modifies a masthead component to have a light theme with a background color of `--pf-global--BackgroundColor--100`. |
| `.pf-m-light-200` | `.pf-c-masthead` |  Modifies a masthead component to have a light theme with a background color of `--pf-global--BackgroundColor--200`. |
| `.pf-m-inset-{none, sm, md, lg, xl, 2xl}{-on-[breakpoint]}` | `.pf-c-masthead` | Modifies masthead horizontal padding. |
| `.pf-m-page-insets` | `.pf-c-masthead` | Modifies masthead insets to match page section, table, page header or any other component whose inset shifts from `--pf-global--spacer--md` to `--pf-global--spacer--lg` at the `xl` breakpoint. |

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
<!-- | `hidden` | `.pf-c-masthead__item`, `.pf-c-masthead__group`, `.pf-c-masthead__toggle`, `.pf-c-masthead__expandable-content` |  Indicates that the masthead element is hidden. **Required** | -->
