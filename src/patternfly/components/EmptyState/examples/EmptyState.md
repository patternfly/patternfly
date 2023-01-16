---
id: Empty state
section: components
cssPrefix: pf-c-empty-state
---

## Examples

### Basic
```hbs
{{#> empty-state}}
  {{#> empty-state-header}}
    {{#> empty-state-icon}}{{/empty-state-icon}}
    {{#> empty-state-title}}
      {{#> title titleType="h1" title--modifier="pf-m-xl"}}
        Empty state
      {{/title}}
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
    {{#> empty-state-title}}
      {{#> title titleType="h1" title--modifier="pf-m-md"}}
        Empty state
      {{/title}}
    {{/empty-state-title}}
  {{/empty-state-header}}

  {{#> empty-state-body}}
    This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.
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
    {{#> empty-state-icon}}{{/empty-state-icon}}
    {{#> empty-state-title}}
      {{#> title titleType="h1" title--modifier="pf-m-xl"}}
        Empty state
      {{/title}}
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
    {{#> empty-state-icon}}{{/empty-state-icon}}
    {{#> empty-state-title}}
      {{#> title titleType="h1" title--modifier="pf-m-xl"}}
        Empty state
      {{/title}}
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
    {{#> empty-state-icon}}{{/empty-state-icon}}
    {{#> empty-state-title}}
      {{#> title titleType="h1" title--modifier="pf-m-4xl"}}
        Empty state
      {{/title}}
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
| `aria-hidden="true"` | `.pf-c-empty-state__icon` |  Hides icon for assistive technologies. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-empty-state` | `<div>` |  Initiates an empty state component. The empty state centers its content (`.pf-c-empty-state__content`) vertically and horizontally. **Required** |
| `.pf-c-empty-state__content` | `<div>` |  Creates the content container. **Required** |
| `.pf-c-empty-state__header` | `<div>` |  Creates the header container. **Required** |
| `.pf-c-empty-state__title` | `<div>` |  Creates the empty state title container. |
| `.pf-c-empty-state__icon` | `<div>` |  Creates the empty state icon container. |
| `.pf-c-empty-state__body` | `<div>` |  Creates the empty state body content. There can be more than one `.pf-c-empty-state__body` elements. |
| `.pf-c-empty-state__footer` | `<div>` |  Container for actions. **Required** |
| `.pf-c-empty-state__actions` | `<div>` |  Container for actions. **Required** |
| `.pf-m-xs` | `.pf-c-empty-state` | Modifies the empty state for a extra small variation and max-width. |
| `.pf-m-sm` | `.pf-c-empty-state` | Modifies the empty state for a small max-width. |
| `.pf-m-lg` | `.pf-c-empty-state` | Modifies the empty state for a large max-width. |
| `.pf-m-xl` | `.pf-c-empty-state` | Modifies the empty state for an x-large variation and max-width. |
| `.pf-m-full-height` | `.pf-c-empty-state` | Modifies the empty state to be `height: 100%`. If you need the empty state content to be centered vertically, you can use this modifier to make the empty state fill the height of its container, and center `.pf-c-empty-state__content`. **Note:** this modifier requires the parent of `.pf-c-empty-state` have an implicit or explicit `height` defined.  |
