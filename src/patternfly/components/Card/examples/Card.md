---
id: Card
section: components
cssPrefix: pf-c-card
---

## Examples
### Basic
```hbs
{{#> card}}
  {{#> card-title}}
    Title
  {{/card-title}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

### With image and action
```hbs
{{#> card card--id="card-action-example-1"}}
  {{#> card-header}}
    {{#> card-header-main}}
      <img src="/assets/images/pf_logo.svg" width="300px" alt="Logo">
    {{/card-header-main}}
    {{#> card-actions}}
      {{#> dropdown id=(concat card--id "-dropdown-kebab-right-aligned") dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}
      {{/dropdown}}
      <input type="checkbox" id="{{card--id}}-check" name="{{card--id}}-check" aria-labelledby="{{card--id}}-check-label">
    {{/card-actions}}
  {{/card-header}}
  {{#> card-title card-title--attribute=(concat 'id="' card--id '-check-label"')}}
    Title
  {{/card-title}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

### With title in head
```hbs
{{#> card card--id="card-action-example-2"}}
  {{#> card-header}}
    {{#> card-actions}}
      {{#> dropdown id=(concat card--id "-dropdown-kebab-right-aligned") dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}
      {{/dropdown}}
      <input type="checkbox" id="{{card--id}}-check" name="{{card--id}}-check" aria-labelledby="{{card--id}}-check-label">
    {{/card-actions}}
    {{#> card-title card-title--attribute=(concat 'id="' card--id '-check-label"')}}
      This is a really really really really really really really really really really long title
    {{/card-title}}
  {{/card-header}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

### With only actions in head (no title/footer)
```hbs
{{#> card card--id="card-action-example-3"}}
  {{#> card-header}}
    {{#> card-actions}}
      {{#> dropdown id=(concat card--id "-dropdown-kebab-right-aligned") dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}
      {{/dropdown}}
      <input type="checkbox" id="{{card--id}}-check" name="{{card--id}}-check" aria-labelledby="{{card--id}}-check-label">
    {{/card-actions}}
  {{/card-header}}
  {{#> card-body card-body--attribute=(concat 'id="' card--id '-check-label"')}}
    This is the card body, there are only actions in the card head.
  {{/card-body}}
{{/card}}
```
### With only image in head
```hbs
{{#> card}}
  {{#> card-header}}
    {{#> card-header-main}}
      <img src="/assets/images/pf_logo.svg" width="300px" alt="Logo">
    {{/card-header-main}}
  {{/card-header}}
  {{#> card-title}}
    Title
  {{/card-title}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

### With no footer
```hbs
{{#> card}}
  {{#> card-title}}
    Title
  {{/card-title}}
  {{#> card-body}}
    This card has no footer
  {{/card-body}}
{{/card}}
```

### With no title
```hbs
{{#> card}}
  {{#> card-body}}
    This card has no title
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

### With only a content section
```hbs
{{#> card}}
  {{#> card-body}}
    Body
  {{/card-body}}
{{/card}}
```

### With multiple body sections
```hbs
{{#> card}}
  {{#> card-title}}
    Title
  {{/card-title}}
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

### With only one body that fills
```hbs
{{#> card}}
  {{#> card-title}}
    Title
  {{/card-title}}
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

### Compact
```hbs
{{#> card card--modifier="pf-m-compact"}}
  {{#> card-title}}
    Title
  {{/card-title}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

### Hover
```hbs
{{#> card card--modifier="pf-m-hoverable"}}
  {{#> card-title}}
    Title
  {{/card-title}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

### Selectable
```hbs
{{#> card card--modifier="pf-m-selectable" card--attribute='tabindex="0"'}}
  {{#> card-title}}
    Title
  {{/card-title}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

### Selected
```hbs
{{#> card card--modifier="pf-m-selectable pf-m-selected" card--attribute='tabindex="0"'}}
  {{#> card-title}}
    Title
  {{/card-title}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

### Flat
```hbs
{{#> card card--modifier="pf-m-flat"}}
  {{#> card-title}}
    Title
  {{/card-title}}
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
| `.pf-c-card` | `<div>` | Creates a card component.  **Required** |
| `.pf-c-card__title` | `<div>` | Creates the title of a card. |
| `.pf-c-card__body` | `<div>` | Creates the body of a card. By default, the body element fills the available space in the card. You can use multiple `.pf-c-card__body` elements. |
| `.pf-c-card__footer` | `<div>` | Creates the footer of a card. |
| `.pf-c-card__header` | `<div>` | Creates the header of the card where images, actions, and/or the card title can go. |
| `.pf-c-card__actions` | `<div>` | Creates an actions element to be used in the card header. |
| `.pf-c-card__header-main` | `<div>` | Creates a wrapper element to be used in the card header when using an image, logo, or text. |
| `.pf-m-compact` | `.pf-c-card` | Creates a compact variation of the card component that involves smaller font sizes and spacing. This variation is for use on dashboards and where a smaller card is preferred. |
| `.pf-m-no-fill` | `.pf-c-card__body` | Sets a `.pf-c-card__body` to not fill the available space in `.pf-c-card`. `.pf-m-no-fill` can be added to multiple card bodies. |
| `.pf-m-hoverable` | `.pf-c-card` | Modifies the card to include hover styles on `:hover`. |
| `.pf-m-selectable` | `.pf-c-card` | Modifies a selectable card so that it is selectable. |
| `.pf-m-selected` | `.pf-c-card.pf-m-selectable` | Modifies a selectable card for the selected state. |
| `.pf-m-flat` | `.pf-c-card` | Modifies the card to have a border instead of a shadow. `.pf-m-flat` is for use in layouts where cards are against a white background.
