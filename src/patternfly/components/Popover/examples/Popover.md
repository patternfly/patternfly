---
id: Popover
section: components
cssPrefix: pf-c-popover
---

import './Popover.css'

## Examples
### Top
```hbs isFullscreen
{{#> popover popover--modifier="pf-m-top" popover--attribute='aria-labelledby="popover-top-header" aria-describedby="popover-top-body"'}}
  {{#> popover-content}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
    {{#> title titleType="h1" title--modifier="pf-m-md" title--attribute='id="popover-top-header"'}}
      Popover header
    {{/title}}
    {{#> popover-body popover-body--attribute='id="popover-top-body"'}}
      Popovers are triggered by click rather than hover. Click again to close.
    {{/popover-body}}
    {{#> popover-footer}}
      Popover footer
    {{/popover-footer}}
  {{/popover-content}}
{{/popover}}
```

### Right
```hbs isFullscreen
{{#> popover popover--modifier="pf-m-right" popover--attribute='aria-labelledby="popover-right-header" aria-describedby="popover-right-body"'}}
  {{#> popover-content}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
    {{#> title titleType="h1" title--modifier="pf-m-md" title--attribute='id="popover-right-header"'}}
      Popover header
    {{/title}}
    {{#> popover-body popover-body--attribute='id="popover-right-body"'}}
      Popovers are triggered by click rather than hover. Click again to close.
    {{/popover-body}}
    {{#> popover-footer}}
      Popover footer
    {{/popover-footer}}
  {{/popover-content}}
{{/popover}}
```

### Bottom
```hbs isFullscreen
{{#> popover popover--modifier="pf-m-bottom" popover--attribute='aria-labelledby="popover-bottom-header" aria-describedby="popover-bottom-body"'}}
  {{#> popover-content}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
        <i class="fas fa-times" aria-hidden="true"></i>
      {{/button}}
      {{#> title titleType="h1" title--modifier="pf-m-md" title--attribute='id="popover-bottom-header"'}}
        Popover header
      {{/title}}
    {{#> popover-body popover-body--attribute='id="popover-bottom-body"'}}
      Popovers are triggered by click rather than hover. Click again to close.
    {{/popover-body}}
    {{#> popover-footer}}
      Popover footer
    {{/popover-footer}}
  {{/popover-content}}
{{/popover}}
```

### Left
```hbs isFullscreen
{{#> popover popover--modifier="pf-m-left" popover--attribute='aria-labelledby="popover-left-header" aria-describedby="popover-left-body"'}}
  {{#> popover-content}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
    {{#> title titleType="h1" title--modifier="pf-m-md" title--attribute='id="popover-left-header"'}}
        Popover header
    {{/title}}
    {{#> popover-body popover-body--attribute='id="popover-left-body"'}}
      Popovers are triggered by click rather than hover. Click again to close.
    {{/popover-body}}
    {{#> popover-footer}}
      Popover footer
    {{/popover-footer}}
  {{/popover-content}}
{{/popover}}
```

### Left top
```hbs isFullscreen
{{#> popover popover--modifier="pf-m-left-top" popover--attribute='aria-labelledby="popover-left-start-header" aria-describedby="popover-left-start-body"'}}
  {{#> popover-content}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
    {{#> title titleType="h1" title--modifier="pf-m-md" title--attribute='id="popover-left-start-header"'}}
        Popover header
    {{/title}}
    {{#> popover-body popover-body--attribute='id="popover-left-start-body"'}}
      This popover is to the left and at the start position
    {{/popover-body}}
    {{#> popover-footer}}
      Popover footer
    {{/popover-footer}}
  {{/popover-content}}
{{/popover}}
```

### Left bottom
```hbs isFullscreen
{{#> popover popover--modifier="pf-m-left-bottom" popover--attribute='aria-labelledby="popover-left-end-header" aria-describedby="popover-left-end-body"'}}
  {{#> popover-content}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
    {{#> title titleType="h1" title--modifier="pf-m-md" title--attribute='id="popover-left-end-header"'}}
        Popover header
    {{/title}}
    {{#> popover-body popover-body--attribute='id="popover-left-end-body"'}}
      This popover is to the left and at the end position
    {{/popover-body}}
    {{#> popover-footer}}
      Popover footer
    {{/popover-footer}}
  {{/popover-content}}
{{/popover}}
```

### Bottom left
```hbs isFullscreen
{{#> popover popover--modifier="pf-m-bottom-left" popover--attribute='aria-labelledby="popover-bottom-start-header" aria-describedby="popover-bottom-start-body"'}}
  {{#> popover-content}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
    {{#> title titleType="h1" title--modifier="pf-m-md" title--attribute='id="popover-bottom-start-header"'}}
        Popover header
    {{/title}}
    {{#> popover-body popover-body--attribute='id="popover-bottom-start-body"'}}
      This popover is to the bottom and at the start position
    {{/popover-body}}
    {{#> popover-footer}}
      Popover footer
    {{/popover-footer}}
  {{/popover-content}}
{{/popover}}
```

### Bottom right
```hbs isFullscreen
{{#> popover popover--modifier="pf-m-bottom-right" popover--attribute='aria-labelledby="popover-bottom-end-header" aria-describedby="popover-bottom-end-body"'}}
  {{#> popover-content}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
    {{#> title titleType="h1" title--modifier="pf-m-md" title--attribute='id="popover-bottom-end-header"'}}
        Popover header
    {{/title}}
    {{#> popover-body popover-body--attribute='id="popover-bottom-end-body"'}}
      This popover is to the bottom and at the end position
    {{/popover-body}}
    {{#> popover-footer}}
      Popover footer
    {{/popover-footer}}
  {{/popover-content}}
{{/popover}}
```

### Without header/footer
```hbs isFullscreen
{{#> popover popover--modifier="pf-m-right" popover--attribute='aria-label="Popover with no header example" aria-describedby="popover-no-header-body"'}}
  {{#> popover-content}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
    {{#> popover-body popover-body--attribute='id="popover-no-header-body"'}}
      Popovers are triggered by click rather than hover. Click again to close.
    {{/popover-body}}
  {{/popover-content}}
{{/popover}}
```

### No padding
```hbs isFullscreen
{{#> popover popover--modifier="pf-m-right pf-m-no-padding" popover--attribute='aria-label="Popover with no padding example" aria-describedby="popover-no-padding-body"'}}
  {{#> popover-content}}
    {{#> popover-body popover-body--attribute='id="popover-no-padding-body"'}}
      This popover has no padding and is intended for use with content that has its own spacing and should touch the edges of the popover container.
    {{/popover-body}}
  {{/popover-content}}
{{/popover}}
```

### Width auto
```hbs isFullscreen
{{#> popover popover--modifier="pf-m-right pf-m-width-auto" popover--attribute='aria-labelledby="popover-width-auto-header" aria-describedby="popover-width-auto-body"'}}
  {{#> popover-content}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
    {{#> title titleType="h1" title--modifier="pf-m-md" title--attribute='id="popover-width-auto-header"'}}
      Popover header
    {{/title}}
    {{#> popover-body popover-body--attribute='id="popover-width-auto-body"'}}
      Popovers body
    {{/popover-body}}
    {{#> popover-footer}}
      Popover footer
    {{/popover-footer}}
  {{/popover-content}}
{{/popover}}
```

### Popover with icon in the title
```hbs isFullscreen
{{#> popover popover--modifier="pf-m-left" popover--attribute='aria-labelledby="popover-icon-title-header" aria-describedby="popover-icon-title-body"'}}
  {{#> popover-content}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
    {{#> popover-header}}
      {{#> popover-title popover-title--IsIcon="true" popover-title--attribute='id="popover-icon-title-header"' popover-title-icon--type="bullhorn"}}
        Popover with icon title
      {{/popover-title}}
    {{/popover-header}}
    {{#> popover-body popover-body--attribute='id="popover-icon-title-body"'}}
      Popovers are triggered by click rather than hover. Click again to close.
    {{/popover-body}}
    {{#> popover-footer}}
      Popover footer
    {{/popover-footer}}
  {{/popover-content}}
{{/popover}}
```
### Default alert popover
```hbs isFullscreen
{{#> popover popover--IsAlert="true" popover--IsDefaultAlert="true" popover--modifier="pf-m-left" popover--attribute='aria-labelledby="popover-default-alert-header" aria-describedby="popover-default-alert-body"'}}
  {{#> popover-content}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
    {{#> popover-header}}
      {{#> popover-title popover-title--IsIcon="true" popover-title--attribute='id="popover-default-alert-header"'}}
        Default popover title
      {{/popover-title}}
    {{/popover-header}}
    {{#> popover-body popover-body--attribute='id="popover-default-alert-body"'}}
      Popovers are triggered by click rather than hover. Click again to close.
    {{/popover-body}}
    {{#> popover-footer}}
      Popover footer
    {{/popover-footer}}
  {{/popover-content}}
{{/popover}}
```

### Info alert popover
```hbs isFullscreen
{{#> popover popover--IsAlert="true" popover--IsInfoAlert="true" popover--modifier="pf-m-top" popover--attribute='aria-labelledby="popover-info-alert-header" aria-describedby="popover-info-alert-body"'}}
  {{#> popover-content}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
    {{#> popover-header}}
      {{#> popover-title popover-title--IsIcon="true" popover-title--attribute='id="popover-info-alert-header"'}}
        Info popover title
      {{/popover-title}}
    {{/popover-header}}
    {{#> popover-body popover-body--attribute='id="popover-info-alert-body"'}}
      Popovers are triggered by click rather than hover. Click again to close.
    {{/popover-body}}
    {{#> popover-footer}}
      Popover footer
    {{/popover-footer}}
  {{/popover-content}}
{{/popover}}
```

### Success alert popover
```hbs isFullscreen
{{#> popover popover--IsAlert="true" popover--IsSuccessAlert="true" popover--modifier="pf-m-top" popover--attribute='aria-labelledby="popover-success-alert-header" aria-describedby="popover-success-alert-body"'}}
  {{#> popover-content}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
    {{#> popover-header}}
      {{#> popover-title popover-title--IsIcon="true" popover-title--attribute='id="popover-success-alert-header"'}}
        Success popover title
      {{/popover-title}}
    {{/popover-header}}
    {{#> popover-body popover-body--attribute='id="popover-success-alert-body"'}}
      Popovers are triggered by click rather than hover. Click again to close.
    {{/popover-body}}
    {{#> popover-footer}}
      Popover footer
    {{/popover-footer}}
  {{/popover-content}}
{{/popover}}
```

### Warning alert popover
```hbs isFullscreen
{{#> popover popover--IsAlert="true" popover--IsWarningAlert="true" popover--modifier="pf-m-top" popover--attribute='aria-labelledby="popover-warning-alert-header" aria-describedby="popover-warning-alert-body"'}}
  {{#> popover-content}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
    {{#> popover-header}}
      {{#> popover-title popover-title--IsIcon="true" popover-title--attribute='id="popover-warning-alert-header"'}}
        Warning popover title
      {{/popover-title}}
    {{/popover-header}}
    {{#> popover-body popover-body--attribute='id="popover-warning-alert-body"'}}
      Popovers are triggered by click rather than hover. Click again to close.
    {{/popover-body}}
    {{#> popover-footer}}
      Popover footer
    {{/popover-footer}}
  {{/popover-content}}
{{/popover}}
```

### Danger alert popover
```hbs isFullscreen
{{#> popover popover--IsAlert="true" popover--IsDangerAlert="true" popover--modifier="pf-m-top" popover--attribute='aria-labelledby="popover-danger-alert-header" aria-describedby="popover-danger-alert-body"'}}
  {{#> popover-content}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
    {{#> popover-header}}
      {{#> popover-title popover-title--IsIcon="true" popover-title--attribute='id="popover-danger-alert-header"'}}
        Danger popover title
      {{/popover-title}}
    {{/popover-header}}
    {{#> popover-body popover-body--attribute='id="popover-danger-alert-body"'}}
      Popovers are triggered by click rather than hover. Click again to close.
    {{/popover-body}}
    {{#> popover-footer}}
      Popover footer
    {{/popover-footer}}
  {{/popover-content}}
{{/popover}}
```

## Documentation
### Overview
A popover is used to provide contextual information for another component on click.  The popover itself is made up of two main elements: arrow and content. The content element follows the pattern of the popover box component, with a close icon in the top right corner, as well as a header and body.  One of the directional modifiers (`.pf-m-left`, `.pf-m-top`, etc.) is required on the popover component

### Accessibility
| Attribute | Applies to | Outcome |
| -- | -- | -- |
| `role="dialog"` | `.pf-c-popover` | Identifies the element that serves as the popover container. **Required** |
| `aria-labelledby="[id value of .pf-c-title]"` | `.pf-c-popover` | Gives the popover an accessible name by referring to the element that provides the dialog title. **Required when .pf-c-title is present** |
| `aria-label="[title of popover]"` | `.pf-c-popover` | Gives the popover an accessible name. **Required when .pf-c-title is _not_ present** |
| `aria-describedby="[id value of applicable content]"` | `.pf-c-popover` | Gives the popover an accessible description by referring to the popover content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the popover. |
| `aria-modal="true"` | `.pf-c-popover` | Tells assistive technologies that the windows underneath the current popover are not available for interaction. **Required**|
| `aria-label="Close"` | `.pf-c-button` | Provides an accessible name for the close button as it uses an icon instead of text. **Required**|
| `aria-hidden="true"` | Parent element containing the page contents when the popover is open. | Hides main contents of the page from screen readers. The element with `.pf-c-popover` must not be a descendent of the element with `aria-hidden="true"`. For more info, see [trapping focus](/accessibility/product-development-guide#trapping-focus). **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-popover` | `<div>` |  Creates a popover. Always use it with a modifier class that positions the popover relative to the element that triggered it. **Required** |
| `.pf-c-popover__arrow` | `<div>` |  Creates an arrow pointing towards the element the popover describes. **Required** |
| `.pf-c-popover__content` | `<div>` |  Creates the content area of the popover. **Required** |
| `.pf-c-button` | `<button>` |  Positions the close icon in the top-right corner of the popover. **Required** |
| `.pf-c-popover__header` | `<header>` | Creates the popover header |
| `.pf-c-popover__title` | `<h1>`,`<h2>`,`<h3>`,`<h4>`,`<h5>`,`<h6>`,`<div>` | Creates the popover title |
| `.pf-c-title` | `<h1>`,`<h2>`,`<h3>`,`<h4>`,`<h5>`,`<h6>` |  Initiates a title. Always use it with a modifier class. See the [title component](/components/title) for more info.|
| `.pf-c-popover__title-icon` | `<span>` | Creates the popover title icon |
| `.pf-c-popover__title-text` | `<span>` | Creates the popover title text |
| `.pf-c-popover__body` | `<div>` |  The popover's body text. **Required** |
| `.pf-c-popover__footer` | `<footer>` | Initiates a popover footer. |
| `.pf-m-left{-top/bottom}` | `.pf-c-popover` | Positions the popover to the left (or left top/left bottom) of the element. |
| `.pf-m-right{-top/bottom}` | `.pf-c-popover` | Positions the popover to the right (or right top/right bottom) of the element. |
| `.pf-m-top{-left/right}` | `.pf-c-popover` | Positions the popover to the top (or top left/top right) of the element. |
| `.pf-m-bottom{-left/right}` | `.pf-c-popover` | Positions the popover to the bottom (or bottom left/bottom right) of the element. |
| `.pf-m-no-padding` | `.pf-c-popover` | Removes the outer padding from the popover content. |
| `.pf-m-width-auto` | `.pf-c-popover` | Allows popover width to be defined by the popover content. |
| `.pf-m-icon` | `.pf-c-popover__title` | Modifies the title layout to accommodate an icon. |
| `.pf-m-default` | `.pf-c-popover` | Modifies for the default alert state. |
| `.pf-m-info` | `.pf-c-popover` | Modifies for the info alert state. |
| `.pf-m-success` | `.pf-c-popover` | Modifies for the success alert state. |
| `.pf-m-warning` | `.pf-c-popover` | Modifies for the warning alert state. |
| `.pf-m-danger` | `.pf-c-popover` | Modifies for the danger alert state. |
