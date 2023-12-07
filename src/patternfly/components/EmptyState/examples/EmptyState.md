---
id: Empty state
section: components
cssPrefix: pf-v5-c-empty-state
---

## Examples

### Basic
```hbs
{{#> empty-state}}
  {{#> empty-state-header}}
    {{> empty-state-icon}}
    {{#> empty-state-title}}
      {{#> empty-state-title-text}}
        Empty state
      {{/empty-state-title-text}}
    {{/empty-state-title}}
  {{/empty-state-header}}

  {{#> empty-state-body}}
    This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.
  {{/empty-state-body}}

  {{#> empty-state-footer}}
    {{#> empty-state-actions}}
      {{#> button button--modifier="pf-m-primary"}}
        Primary action
      {{/button}}
    {{/empty-state-actions}}
    {{#> empty-state-actions}}
      {{#> button button--modifier="pf-m-link"}}
        Multiple
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        Action buttons
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        Can
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        Go here
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        In the second
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        Action area
      {{/button}}
    {{/empty-state-actions}}
  {{/empty-state-footer}}
{{/empty-state}}
```

### Extra small
```hbs
{{#> empty-state empty-state--modifier="pf-m-xs"}}
  {{#> empty-state-header}}
    {{> empty-state-icon}}
    {{#> empty-state-title}}
      {{#> empty-state-title-text}}
        Empty state
      {{/empty-state-title-text}}
    {{/empty-state-title}}
  {{/empty-state-header}}

  {{#> empty-state-body}}
    This represents an the empty state pattern in PatternFly. The icon is optional.
  {{/empty-state-body}}

  {{#> empty-state-footer}}
    {{#> empty-state-actions}}
      {{#> button button--modifier="pf-m-link pf-m-small"}}
        Multiple
      {{/button}}
      {{#> button button--modifier="pf-m-link pf-m-small"}}
        Action buttons
      {{/button}}
      {{#> button button--modifier="pf-m-link pf-m-small"}}
        Can
      {{/button}}
      {{#> button button--modifier="pf-m-link pf-m-small"}}
        Go here
      {{/button}}
      {{#> button button--modifier="pf-m-link pf-m-small"}}
        In the
      {{/button}}
      {{#> button button--modifier="pf-m-link pf-m-small"}}
        Action area
      {{/button}}
    {{/empty-state-actions}}
  {{/empty-state-footer}}
{{/empty-state}}
```

### Small
```hbs
{{#> empty-state empty-state--modifier="pf-m-sm"}}
  {{#> empty-state-header}}
    {{> empty-state-icon}}
    {{#> empty-state-title}}
      {{#> empty-state-title-text}}
        Empty state
      {{/empty-state-title-text}}
    {{/empty-state-title}}
  {{/empty-state-header}}

  {{#> empty-state-body}}
    This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.
  {{/empty-state-body}}

  {{#> empty-state-footer}}
    {{#> empty-state-actions}}
      {{#> button button--modifier="pf-m-primary"}}
        Primary action
      {{/button}}
    {{/empty-state-actions}}

    {{#> empty-state-actions}}
      {{#> button button--modifier="pf-m-link"}}
        Multiple
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        Action buttons
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        Can
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        Go here
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        In the second
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        Action area
      {{/button}}
    {{/empty-state-actions}}
  {{/empty-state-footer}}
{{/empty-state}}
```

### Large
```hbs
{{#> empty-state empty-state--modifier="pf-m-lg"}}
  {{#> empty-state-header}}
    {{> empty-state-icon}}
    {{#> empty-state-title}}
      {{#> empty-state-title-text}}
        Empty state
      {{/empty-state-title-text}}
    {{/empty-state-title}}
  {{/empty-state-header}}

  {{#> empty-state-body}}
    This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.
  {{/empty-state-body}}

  {{#> empty-state-footer}}
    {{#> empty-state-actions}}
      {{#> button button--modifier="pf-m-primary"}}
        Primary action
      {{/button}}
    {{/empty-state-actions}}
    {{#> empty-state-actions}}
      {{#> button button--modifier="pf-m-link"}}
        Multiple
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        Action buttons
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        Can
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        Go here
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        In the second
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        Action area
      {{/button}}
    {{/empty-state-actions}}
  {{/empty-state-footer}}
{{/empty-state}}
```

### Extra large
```hbs
{{#> empty-state empty-state--modifier="pf-m-xl"}}
  {{#> empty-state-header}}
    {{> empty-state-icon}}
    {{#> empty-state-title}}
      {{#> empty-state-title-text}}
        Empty state
      {{/empty-state-title-text}}
    {{/empty-state-title}}
  {{/empty-state-header}}

  {{#> empty-state-body}}
    This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.
  {{/empty-state-body}}
  {{#> empty-state-footer}}
    {{#> empty-state-actions}}
      {{#> button button--modifier="pf-m-primary"}}
        Primary action
      {{/button}}
    {{/empty-state-actions}}
    {{#> empty-state-actions}}
      {{#> button button--modifier="pf-m-link"}}
        Multiple
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        Action buttons
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        Can
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        Go here
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        In the second
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        Action area
      {{/button}}
    {{/empty-state-actions}}
  {{/empty-state-footer}}
{{/empty-state}}
```

### With status
```hbs
{{#> empty-state empty-state--modifier="pf-m-success"}}
  {{#> empty-state-header}}
    {{> empty-state-icon empty-state-icon--type="check-circle"}}
    {{#> empty-state-title}}
      {{#> empty-state-title-text}}
        You're all set
      {{/empty-state-title-text}}
    {{/empty-state-title}}
  {{/empty-state-header}}

  {{#> empty-state-body}}
    This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.
  {{/empty-state-body}}

  {{#> empty-state-footer}}
    {{#> empty-state-actions}}
      {{#> button button--modifier="pf-m-primary"}}
        Primary action
      {{/button}}
    {{/empty-state-actions}}
    {{#> empty-state-actions}}
      {{#> button button--modifier="pf-m-link"}}
        Multiple
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        Action buttons
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        Can
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        Go here
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        In the second
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        Action area
      {{/button}}
    {{/empty-state-actions}}
  {{/empty-state-footer}}
{{/empty-state}}
```

## Documentation
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-hidden="true"` | `.pf-v5-c-empty-state__icon` |  Hides icon for assistive technologies. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-empty-state` | `<div>` |  Initiates an empty state component. The empty state centers its content (`.pf-v5-c-empty-state__content`) vertically and horizontally. **Required** |
| `.pf-v5-c-empty-state__content` | `<div>` |  Creates the content container. **Required** |
| `.pf-v5-c-empty-state__header` | `<div>` |  Creates the header container. **Required** |
| `.pf-v5-c-empty-state__title` | `<div>` |  Creates the empty state title container. **Required** |
| `.pf-v5-c-empty-state__title-text` | `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`, `<div>` |  Creates the empty state title text container. |
| `.pf-v5-c-empty-state__icon` | `<div>` |  Creates the empty state icon container. |
| `.pf-v5-c-empty-state__body` | `<div>` |  Creates the empty state body content. There can be more than one `.pf-v5-c-empty-state__body` elements. |
| `.pf-v5-c-empty-state__footer` | `<div>` |  Creates the footer container. **Required** |
| `.pf-v5-c-empty-state__actions` | `<div>` |  Container for actions. **Required** |
| `.pf-m-xs` | `.pf-v5-c-empty-state` | Modifies the empty state for an extra small variation and max-width. |
| `.pf-m-sm` | `.pf-v5-c-empty-state` | Modifies the empty state for a small max-width. |
| `.pf-m-lg` | `.pf-v5-c-empty-state` | Modifies the empty state for a large max-width. |
| `.pf-m-xl` | `.pf-v5-c-empty-state` | Modifies the empty state for an extra large variation and max-width. |
| `.pf-m-full-height` | `.pf-v5-c-empty-state` | Modifies the empty state to be `height: 100%`. If you need the empty state content to be centered vertically, you can use this modifier to make the empty state fill the height of its container, and center `.pf-v5-c-empty-state__content`. **Note:** this modifier requires the parent of `.pf-v5-c-empty-state` have an implicit or explicit `height` defined.  |
| `.pf-m-danger` | `.pf-v5-c-empty-state` | Modifies the empty state for danger status. |
| `.pf-m-warning` | `.pf-v5-c-empty-state` | Modifies the empty state for warning status. |
| `.pf-m-success` | `.pf-v5-c-empty-state` | Modifies the empty state for success status. |
| `.pf-m-info` | `.pf-v5-c-empty-state` | Modifies the empty state for info status. |
| `.pf-m-custom` | `.pf-v5-c-empty-state` | Modifies the empty state for custom status. |
