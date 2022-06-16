---
id: Card
section: components
cssPrefix: pf-c-card
---

import './Card.css'

## Examples
### Basic
```hbs
{{#> card card--id="card-basic-example"}}
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
      {{> card--dropdown}}
      {{> card--check}}
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
      {{> card--dropdown}}
      {{> card--check}}
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
      {{> card--dropdown}}
      {{> card--check}}
    {{/card-actions}}
  {{/card-header}}
  {{#> card-body card-body--attribute=(concat 'id="' card--id '-check-label"')}}
    This is the card body. There are only actions in the card head.
  {{/card-body}}
{{/card}}
```

### Actions with no offset
```hbs
{{#> card card--id="card-action-no-offset"}}
  {{#> card-header}}
    {{#> card-actions card-actions--modifier="pf-m-no-offset"}}
      {{#> button button--modifier="pf-m-primary"}}Action{{/button}}
    {{/card-actions}}
    {{#> title title--modifier="pf-m-2xl" title--attribute=(concat 'id="' card--id '-check-label"')}}This is a card title{{/title}}
  {{/card-header}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

### With only image in head
```hbs
{{#> card card--id="card-image-head-example"}}
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
{{#> card card--id="card-no-footer-example"}}
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
{{#> card card--id="card-no-title-example"}}
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
{{#> card card--id="card-body-example"}}
  {{#> card-body}}
    Body
  {{/card-body}}
{{/card}}
```

### With multiple body sections
```hbs
{{#> card card--id="card-multiple-body-example"}}
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
{{#> card card--id="card-body-fill-example"}}
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
{{#> card card--id="card-compact-example" card--modifier="pf-m-compact"}}
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

### Large
```hbs
{{#> card card--id="card-display-lg-example" card--modifier="pf-m-display-lg"}}
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

### Hoverable
```hbs
{{#> card card--id="card-hoverable-example" card--modifier="pf-m-hoverable-raised"}}
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
{{#> card card--id="card-selectable-example" card--modifier="pf-m-selectable-raised" card--attribute='tabindex="0"'}}
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
{{#> card card--id="card-selected-example" card--modifier="pf-m-selectable-raised pf-m-selected-raised" card--attribute='tabindex="0"'}}
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

### Selectable with a hidden input for improved screen reader accessibility
```hbs
{{> card-sr-input card-sr-input--attribute="aria-label='Checkbox to improve screen reader accessibility of a selectable card'"}}
{{#> card card--id="card-selectable-with-input-example" card--modifier="pf-m-selectable-raised" card--attribute='tabindex="0"'}}
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

### Non selectable
```hbs
{{#> card card--id="card-non-selectable-example" card--modifier="pf-m-non-selectable-raised"}}
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

### Hoverable (legacy)
```hbs
{{#> card card--id="card-hoverable-legacy-example" card--modifier="pf-m-hoverable"}}
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

### Selectable (legacy)
```hbs
{{#> card card--id="card-selectable-legacy-example" card--modifier="pf-m-selectable" card--attribute='tabindex="0"'}}
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

### Selected (legacy)
```hbs
{{#> card card--id="card-selected-legacy-example" card--modifier="pf-m-selectable pf-m-selected" card--attribute='tabindex="0"'}}
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
{{#> card card--id="card-flat-example" card--modifier="pf-m-flat"}}
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

### Rounded
```hbs
{{#> card card--id="card-rounded-example" card--modifier="pf-m-rounded"}}
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

### Plain
```hbs
{{#> card card--id="card-plain-example" card--modifier="pf-m-plain"}}
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

### Expandable
```hbs
{{#> card card--id="card-expandable-example"}}
  {{#> card-header}}
    {{> card-header-toggle}}
    {{#> card-actions}}
      {{> card--dropdown}}
      {{> card--check}}
    {{/card-actions}}
    {{#> card-title card-title--attribute=(concat 'id="' card--id '-title"')}}
      Title
    {{/card-title}}
  {{/card-header}}
{{/card}}
```

### Expandable with image
```hbs
{{#> card card--id="card-expandable-image-example"}}
  {{#> card-header}}
    {{> card-header-toggle}}
    <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo" width="27px">
    {{#> card-actions}}
      {{> card--dropdown}}
      {{> card--check}}
    {{/card-actions}}
  {{/card-header}}
{{/card}}
```

### Expanded
```hbs
{{#> card card--id="card-expanded-example" card--modifier="pf-m-expanded"}}
  {{#> card-header}}
    {{> card-header-toggle}}
    {{#> card-actions}}
      {{> card--dropdown}}
      {{> card--check}}
    {{/card-actions}}
    {{#> card-title card-title--attribute=(concat 'id="' card--id '-title"')}}
      Title
    {{/card-title}}
  {{/card-header}}
  {{#> card-expandable-content}}
    {{#> card-body}}
      Body
    {{/card-body}}
    {{#> card-footer}}
      Footer
    {{/card-footer}}
  {{/card-expandable-content}}
{{/card}}
```

### Full height card
```hbs
{{#> card card--id="card-full-height-example" card--modifier="pf-m-full-height"}}
  {{#> card-header}}
    {{#> card-actions}}
      {{> card--dropdown}}
      {{> card--check}}
    {{/card-actions}}
    {{#> card-title card-title--attribute=(concat 'id="' card--id '-title"')}}
      Title
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

### Expandable toggle on right
```hbs
{{#> card card--id="card-toggle-on-right-example"}}
  {{#> card-header card-header--modifier="pf-m-toggle-right"}}
    {{#> card-actions}}
      {{> card--dropdown}}
      {{> card--check}}
    {{/card-actions}}
    {{#> card-title card-title--attribute=(concat 'id="' card--id '-title"')}}
      Title
    {{/card-title}}
    {{> card-header-toggle}}
  {{/card-header}}
{{/card}}
```

### Card with dividers between sections
```hbs
{{#> card}}
  {{#> card-title}}
    Title
  {{/card-title}}
  {{> divider}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{> divider}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{> divider}}
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
| `.pf-c-card__header-toggle` | `<div>` | Creates the expandable card toggle. |
| `.pf-c-card__header-toggle-icon` | `<span>` | Creates the expandable card toggle icon. |
| `.pf-c-card__actions` | `<div>` | Creates an actions element to be used in the card header. |
| `.pf-c-card__header-main` | `<div>` | Creates a wrapper element to be used in the card header when using an image, logo, or text. |
| `.pf-c-card__expandable-content` | `<div>` | Creates the expandable card's expandable content. |
| `.pf-c-card__sr-input` | `<input>` | Creates an input which, when focused, makes a following `.pf-c-card` appear focused. |
| `.pf-m-compact` | `.pf-c-card` | Creates a compact variation of the card component that involves smaller font sizes and spacing. This variation is for use on dashboards and where a smaller card is preferred. |
| `.pf-m-display-lg` | `.pf-c-card` | Creates a large variation of the card component that involves larger font sizes and spacing. This variation is for marketing use cases. |
| `.pf-m-no-fill` | `.pf-c-card__body` | Sets a `.pf-c-card__body` to not fill the available space in `.pf-c-card`. `.pf-m-no-fill` can be added to multiple card bodies. |
| `.pf-m-hoverable-raised` | `.pf-c-card` | Modifies the card to include hover styles on `:hover`. |
| `.pf-m-selectable-raised` | `.pf-c-card` | Modifies a selectable card so that it is selectable. |
| `.pf-m-selected-raised` | `.pf-c-card.pf-m-selectable-raised` | Modifies a selectable card for the selected state. |
| `.pf-m-non-selectable-raised` | `.pf-c-card` | Modifies a selectable card so that it is not selectable. |
| `.pf-m-flat` | `.pf-c-card` | Modifies the card to have a border instead of a shadow. `.pf-m-flat` is for use in layouts where cards are against a white background. |
| `.pf-m-rounded` | `.pf-c-card` | Modifies the card to have rounded corners. |
| `.pf-m-plain` | `.pf-c-card` | Modifies the card to have no box shadow and no background color. |
| `.pf-m-expanded` | `.pf-c-card` | Modifies the card for the expanded state. |
| `.pf-m-toggle-right` | `.pf-c-card__header` | Modifies the expandable card header toggle to be positioned at flex-end. |
| `.pf-m-full-height` | `.pf-c-card` | Modifies the card to full height of its parent. |
| `.pf-m-no-offset` | `.pf-c-card__actions` | Removes the negative vertical margins on the actions element intended to align the action content with the card title. |
