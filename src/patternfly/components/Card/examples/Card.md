---
title: Card
section: components
cssPrefix: pf-c-card
---

## Examples
```hbs title=Basic
{{#> card}}
  {{#> card-header}}
    Header
  {{/card-header}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

```hbs title=With-image-and-action
{{#> card card--id="card-action-example-1"}}
  {{#> card-head}}
    {{#> card-head-main}}
      <img src="/assets/images/pf_logo.svg" width="300px" alt="Logo">
    {{/card-head-main}}
    {{#> card-actions}}
      {{#> dropdown id=(concat card--id "-dropdown-kebab-right-aligned") dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}
      {{/dropdown}}
      <input type="checkbox" id="{{card--id}}-check" name="{{card--id}}-check" aria-labelledby="{{card--id}}-check-label">
    {{/card-actions}}
  {{/card-head}}
  {{#> card-header card-header--attribute=(concat 'id="' card--id '-check-label"')}}
    Header
  {{/card-header}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

```hbs title=With-header-in-head
{{#> card card--id="card-action-example-2"}}
  {{#> card-head}}
    {{#> card-actions}}
      {{#> dropdown id=(concat card--id "-dropdown-kebab-right-aligned") dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}
      {{/dropdown}}
      <input type="checkbox" id="{{card--id}}-check" name="{{card--id}}-check" aria-labelledby="{{card--id}}-check-label">
    {{/card-actions}}
    {{#> card-header card-header--attribute=(concat 'id="' card--id '-check-label"')}}
      This is a really really really really really really really really really really long header
    {{/card-header}}
  {{/card-head}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

```hbs title=With-only-actions-in-head-(no-header/footer)
{{#> card card--id="card-action-example-3"}}
  {{#> card-head}}
    {{#> card-actions}}
      {{#> dropdown id=(concat card--id "-dropdown-kebab-right-aligned") dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}
      {{/dropdown}}
      <input type="checkbox" id="{{card--id}}-check" name="{{card--id}}-check" aria-labelledby="{{card--id}}-check-label">
    {{/card-actions}}
  {{/card-head}}
  {{#> card-body card-body--attribute=(concat 'id="' card--id '-check-label"')}}
    This is the card body, there is only actions in the card head.
  {{/card-body}}
{{/card}}
```
```hbs title=With-only-image-in-head
{{#> card}}
  {{#> card-head}}
    {{#> card-head-main}}
      <img src="/assets/images/pf_logo.svg" width="300px" alt="Logo">
    {{/card-head-main}}
  {{/card-head}}
  {{#> card-header}}
    Header
  {{/card-header}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

```hbs title=With-no-footer
{{#> card}}
  {{#> card-header}}
    Header
  {{/card-header}}
  {{#> card-body}}
    This card has no footer
  {{/card-body}}
{{/card}}
```

```hbs title=With-no-header
{{#> card}}
  {{#> card-body}}
    This card has no header
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

```hbs title=With-only-a-content-section
{{#> card}}
  {{#> card-body}}
    Body
  {{/card-body}}
{{/card}}
```

```hbs title=With-multiple-body-sections
{{#> card}}
  {{#> card-header}}
    Header
  {{/card-header}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

```hbs title=With-only-one-body-that-fills
{{#> card}}
  {{#> card-header}}
    Header
  {{/card-header}}
  {{#> card-body card-body--modifier="pf-m-no-fill"}}
    Body pf-m-no-fill
  {{/card-body}}
  {{#> card-body card-body--modifier="pf-m-no-fill"}}
    Body pf-m-no-fill
  {{/card-body}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

```hbs title=Compact
{{#> card card--modifier="pf-m-compact"}}
  {{#> card-header}}
    Header
  {{/card-header}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

```hbs title=Hover
{{#> card card--modifier="pf-m-hoverable"}}
  {{#> card-header}}
    Header
  {{/card-header}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

```hbs title=Selectable
{{#> card card--modifier="pf-m-selectable" card--attribute='tabindex="0"'}}
  {{#> card-header}}
    Header
  {{/card-header}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

```hbs title=Selected
{{#> card card--modifier="pf-m-selectable pf-m-selected" card--attribute='tabindex="0"'}}
  {{#> card-header}}
    Header
  {{/card-header}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

## Documentation
### Overview
A card is a generic rectangular container that can be used to build other components. Use a default card for regular page content and the compact variation for dashboard or small cards.

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `tabindex="0"` | `.pf-c-card.pf-m-selectable` | Inserts the selectable card into the tab order of the page so that it is focusable. **Required** |

### Usage
| Class | Applied | Outcome |
| ---- | ---- | ---- |
| `.pf-c-card` | `<div>` | Creates a card containing content. **Required** |
| `.pf-c-card__header` | `<div>` | Creates the header of a card. |
| `.pf-c-card__body` | `<div>` | Creates the body of a card. By default, the body element fills the available space in the card. You can use multiple `.pf-c-card__body` elements. |
| `.pf-c-card__footer` | `<div>` | Creates the footer of a card. |
| `.pf-c-card__head` | `<div>` | Creates the head of the card where images or actions can go. |
| `.pf-c-card__actions` | `<div>` | Creates an actions element to be used in the card head. |
| `.pf-c-card__head-main` | `<div>` | Creates a wrapper element to be used in the card head when using an image, logo or text. |
| `.pf-m-compact` | `.pf-c-card` | Creates a compact variation of the card component that involves smaller font sizes and spacing. |
| `.pf-m-no-fill` | `.pf-c-card__body` | Sets a `.pf-c-card__body` to not fill the available space in `.pf-c-card`. `.pf-m-no-fill` can be added to multiple card bodies. |
| `.pf-m-hoverable` | `.pf-c-card` | Modifies the card to include hover styles on `:hover`. |
| `.pf-m-selectable` | `.pf-c-card` | Modifies a selectable card so that it is selectable. |
| `.pf-m-selected` | `.pf-c-card.pf-m-selectable` | Modifies a selectable card for the selected state. |
