---
id: Empty state
section: components
cssPrefix: pf-c-empty-state
---

## Examples

### Basic
```hbs
{{#> empty-state}}
  {{#> empty-state-icon}}{{/empty-state-icon}}
  {{#> title titleType="h1" title--modifier="pf-m-xl"}}
    Empty state
  {{/title}}
  {{#> empty-state-body}}
    This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.
  {{/empty-state-body}}
  {{#> empty-state-primary}}
    {{#> button button--modifier="pf-m-primary"}}
      Primary action
    {{/button}}
  {{/empty-state-primary}}
  {{#> empty-state-secondary}}
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
      In the secondary
    {{/button}}
    {{#> button button--modifier="pf-m-link"}}
      Action area
    {{/button}}
  {{/empty-state-secondary}}
{{/empty-state}}
```

### Extra small
```hbs
{{#> empty-state empty-state--modifier="pf-m-xs"}}
  {{#> title titleType="h1" title--modifier="pf-m-md"}}
    Empty state
  {{/title}}
  {{#> empty-state-body}}
    This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.
  {{/empty-state-body}}
  {{#> empty-state-secondary}}
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
      In the secondary
    {{/button}}
    {{#> button button--modifier="pf-m-link pf-m-small"}}
      Action area
    {{/button}}
  {{/empty-state-secondary}}
{{/empty-state}}
```

### Small
```hbs
{{#> empty-state empty-state--modifier="pf-m-sm"}}
  {{#> empty-state-icon}}{{/empty-state-icon}}
  {{#> title titleType="h1" title--modifier="pf-m-xl"}}
    Empty state
  {{/title}}
  {{#> empty-state-body}}
    This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.
  {{/empty-state-body}}
    {{#> empty-state-primary}}
    {{#> button button--modifier="pf-m-primary"}}
      Primary action
    {{/button}}
  {{/empty-state-primary}}
  {{#> empty-state-secondary}}
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
      In the secondary
    {{/button}}
    {{#> button button--modifier="pf-m-link"}}
      Action area
    {{/button}}
  {{/empty-state-secondary}}
{{/empty-state}}
```

### Large
```hbs
{{#> empty-state empty-state--modifier="pf-m-lg"}}
  {{#> empty-state-icon}}{{/empty-state-icon}}
  {{#> title titleType="h1" title--modifier="pf-m-xl"}}
    Empty state
  {{/title}}
  {{#> empty-state-body}}
    This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.
  {{/empty-state-body}}
  {{#> empty-state-primary}}
    {{#> button button--modifier="pf-m-primary"}}
      Primary action
    {{/button}}
  {{/empty-state-primary}}
  {{#> empty-state-secondary}}
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
      In the secondary
    {{/button}}
    {{#> button button--modifier="pf-m-link"}}
      Action area
    {{/button}}
  {{/empty-state-secondary}}
{{/empty-state}}
```

### Extra large
```hbs
{{#> empty-state empty-state--modifier="pf-m-xl"}}
  {{#> empty-state-icon}}{{/empty-state-icon}}
  {{#> title titleType="h1" title--modifier="pf-m-4xl"}}
    Empty state
  {{/title}}
  {{#> empty-state-body}}
    This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.
  {{/empty-state-body}}
  {{#> empty-state-primary}}
    {{#> button button--modifier="pf-m-primary"}}
      Primary action
    {{/button}}
  {{/empty-state-primary}}
{{/empty-state}}
```

### With primary element
```hbs
{{#> empty-state}}
  {{#> empty-state-icon}}{{/empty-state-icon}}
  {{#> title titleType="h1" title--modifier="pf-m-lg"}}
    Empty State
  {{/title}}
  {{#> empty-state-body}}
    This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.
  {{/empty-state-body}}
  {{#> empty-state-primary}}
    {{#> button button--modifier="pf-m-link"}}
      Action buttons
    {{/button}}
  {{/empty-state-primary}}
{{/empty-state}}
```

## Documentation
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-hidden="true"` | `.pf-c-empty-state__icon` |  Hides icon for assistive technologies. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-empty-state` | `<div>` |  Initiates an empty state component. The empty state centers its content (`.pf-c-empty-state__content`) vertically and horizontally. **Required** |
| `.pf-c-empty-state__content` | `<div>` |  Creates the content container. **Required** |
| `.pf-c-empty-state__icon` | `<div>` |  Creates the empty state icon container. |
| `.pf-c-title` | `<h1>, <h2>, <h3>, <h4>, <h5>, <h6>` |  Creates the empty state title. **Required** |
| `.pf-c-empty-state__body` | `<div>` |  Creates the empty state body content. There can be more than one `.pf-c-empty-state__body` elements. |
| `.pf-c-empty-state__primary` | `<div>` |  Container for primary actions. **Required if there is a primary action** |
| `.pf-c-empty-state__secondary` | `<div>` |  Container secondary actions. **Required if there is a secondary action** |
| `.pf-m-xs` | `.pf-c-empty-state` | Modifies the empty state for a extra small variation and max-width. |
| `.pf-m-sm` | `.pf-c-empty-state` | Modifies the empty state for a small max-width. |
| `.pf-m-lg` | `.pf-c-empty-state` | Modifies the empty state for a large max-width. |
| `.pf-m-xl` | `.pf-c-empty-state` | Modifies the empty state for an x-large variation and max-width. |
| `.pf-m-full-height` | `.pf-c-empty-state` | Modifies the empty state to be `height: 100%`. If you need the empty state content to be centered vertically, you can use this modifier to make the empty state fill the height of its container, and center `.pf-c-empty-state__content`. **Note:** this modifier requires the parent of `.pf-c-empty-state` have an implicit or explicit `height` defined.  |
