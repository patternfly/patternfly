---
id: 'Masthead'
section: components
cssPrefix: pf-v6-c-masthead
---

## Examples

Without JavaScript, these examples render in their default (mobile-first) layout. Wider viewport variants appear when responsive modifiers or product CSS apply.

### Basic structure
Shows the required masthead regions: toggle, brand/logo, and content slot.

```hbs
{{#> masthead masthead--id="basic-masthead"}}
  {{#> masthead-main}}
    {{> masthead-toggle}}
    {{#> masthead-brand}}
      {{> masthead-logo}}
    {{/masthead-brand}}
  {{/masthead-main}}
  {{> masthead-content}}
{{/masthead}}
```

### Content slot with mixed actions
Demonstrates placing multiple actions in the masthead content area. Prefer product-specific patterns (for example a user menu) over generic button rows in production UIs.

```hbs
{{#> masthead masthead--id="basic-masthead-with-mixed-content-example"}}
  {{#> masthead-main}}
    {{> masthead-toggle}}
    {{#> masthead-brand}}
      {{> masthead-logo}}
    {{/masthead-brand}}
  {{/masthead-main}}
  {{#> masthead-content}}
    {{#> button button--IsPrimary=true}}
      Primary
    {{/button}}
    {{#> button button--IsSecondary=true}}
      Secondary
    {{/button}}
    {{#> button button--IsTertiary=true}}
      Tertiary
    {{/button}}
  {{/masthead-content}}
{{/masthead}}
```

### Display inline
Forces an inline arrangement of masthead main and content.

```hbs
{{#> masthead masthead--id="inline-masthead-example" masthead--modifier="pf-m-display-inline"}}
  {{#> masthead-main}}
    {{> masthead-toggle}}
    {{#> masthead-brand}}
      {{> masthead-logo}}
    {{/masthead-brand}}
  {{/masthead-main}}
  {{> masthead-content}}
{{/masthead}}
```

### Display stack
Forces a stacked arrangement of masthead main and content.

```hbs
{{#> masthead masthead--id="stack-masthead-example" masthead--modifier="pf-m-display-stack"}}
  {{#> masthead-main}}
    {{> masthead-toggle}}
    {{#> masthead-brand}}
      {{> masthead-logo}}
    {{/masthead-brand}}
  {{/masthead-main}}
  {{> masthead-content}}
{{/masthead}}
```

### Display stack, display inline responsive
Shows how display modifiers can change by breakpoint (inline by default, stack at `lg`, inline again at `2xl`).

```hbs
{{#> masthead masthead--id="stack-inline-masthead-example" masthead--modifier="pf-m-display-inline pf-m-display-stack-on-lg pf-m-display-inline-on-2xl"}}
  {{#> masthead-main}}
    {{> masthead-toggle}}
    {{#> masthead-brand}}
      {{> masthead-logo}}
    {{/masthead-brand}}
  {{/masthead-main}}
  {{> masthead-content}}
{{/masthead}}
```

### Insets
Adjusts horizontal padding with inset modifiers.

```hbs
{{#> masthead masthead--id="inset-masthead-example" masthead--modifier="pf-m-inset-sm"}}
  {{#> masthead-main}}
    {{> masthead-toggle}}
    {{#> masthead-brand}}
      {{> masthead-logo}}
    {{/masthead-brand}}
  {{/masthead-main}}
  {{> masthead-content}}
{{/masthead}}
```

### Docked
Beta example for use with a docked navigation layout, including compact logo treatment.

```hbs isBeta
{{#> masthead masthead--id="docked-masthead-example" masthead--IsDocked=true}}
  {{#> masthead-main}}
    {{#> masthead-brand}}
      {{> masthead-logo}}
      {{> masthead-logo masthead-logo--IsCompact=true}}
    {{/masthead-brand}}
  {{/masthead-main}}
  {{#> masthead-content}}
    {{> button button--IsPlain=true button--IsIcon=true button--icon="comment-alt" button--aria-label="Chat"}}
  {{/masthead-content}}
{{/masthead}}
```

## Documentation

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-masthead` | `<header>` | Initiates the masthead component. **Required** |
| `.pf-v6-c-masthead__main` | `<div>` | Initiates the masthead main region. **Required** |
| `.pf-v6-c-masthead__toggle` | `<span>` | Initiates the masthead toggle control. |
| `.pf-v6-c-masthead__brand` | `<div>` | Initiates the masthead brand region. |
| `.pf-v6-c-masthead__logo` | `<a>, <div>` | Initiates the masthead logo. |
| `.pf-v6-c-masthead__content` | `<div>` | Initiates the masthead content region. |
| `.pf-m-inset-{none, sm, md, lg, xl, 2xl}{-on-[breakpoint]}` | `.pf-v6-c-masthead` | Modifies masthead horizontal padding at optional [breakpoint](/foundations-and-styles/design-tokens/all-design-tokens). |
| `.pf-m-docked` | `.pf-v6-c-masthead` | Modifies masthead for use with docked nav. |
