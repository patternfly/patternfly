---
id: Popover
section: components
cssPrefix: pf-c-popover
---

import './Popover.css'

## Examples

### Top

```hbs
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

```hbs
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

```hbs
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

```hbs
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

### Without header/footer

```hbs
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

```hbs
{{#> popover popover--modifier="pf-m-right pf-m-no-padding" popover--attribute='aria-label="Popover with no padding example" aria-describedby="popover-no-padding-body"'}}
  {{#> popover-content}}
    {{#> popover-body popover-body--attribute='id="popover-no-padding-body"'}}
      This popover has no padding and is intended for use with content that has its own spacing and should touch the edges of the popover container.
    {{/popover-body}}
  {{/popover-content}}
{{/popover}}
```

### Width auto

```hbs
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

### Variations

```hbs
{{#> popover popover--modifier="pf-m-top pf-m-success" popover--attribute='aria-labelledby="popover-top-header" aria-describedby="popover-top-body"'}}
  {{#> popover-content}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
    {{#> popover-icon popover-icon--type="check-circle"}}
    {{/popover-icon}}
    {{#> title titleType="h1" title--modifier="pf-m-md pf-m-success" title--attribute='id="popover-top-header"'}}
      Success Popover header
    {{/title}}
    {{#> popover-body popover-body--attribute='id="popover-top-body"'}}
      Popovers are triggered by click rather than hover. Click again to close.
    {{/popover-body}}
    {{#> popover-footer}}
      Popover footer
    {{/popover-footer}}
  {{/popover-content}}
{{/popover}}
<br/>
{{#> popover popover--modifier="pf-m-top pf-m-error" popover--attribute='aria-labelledby="popover-top-header" aria-describedby="popover-top-body"'}}
  {{#> popover-content}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
    {{#> popover-icon popover-icon--type="exclamation-circle"}}
    {{/popover-icon}}
    {{#> title titleType="h1" title--modifier="pf-m-md pf-m-error" title--attribute='id="popover-top-header"'}}
      Error Popover header
    {{/title}}
    {{#> popover-body popover-body--attribute='id="popover-top-body"'}}
      Popovers are triggered by click rather than hover. Click again to close.
    {{/popover-body}}
    {{#> popover-footer}}
      Popover footer
    {{/popover-footer}}
  {{/popover-content}}
{{/popover}}
<br/>
{{#> popover popover--modifier="pf-m-top pf-m-warning" popover--attribute='aria-labelledby="popover-top-header" aria-describedby="popover-top-body"'}}
  {{#> popover-content}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
    {{#> popover-icon popover-icon--type="exclamation-triangle"}}
    {{/popover-icon}}
    {{#> title titleType="h1" title--modifier="pf-m-md pf-m-warning" title--attribute='id="popover-top-header"'}}
      Warning Popover header
    {{/title}}
    {{#> popover-body popover-body--attribute='id="popover-top-body"'}}
      Popovers are triggered by click rather than hover. Click again to close.
    {{/popover-body}}
    {{#> popover-footer}}
      Popover footer
    {{/popover-footer}}
  {{/popover-content}}
{{/popover}}
<br/>
{{#> popover popover--modifier="pf-m-top pf-m-info" popover--attribute='aria-labelledby="popover-top-header" aria-describedby="popover-top-body"'}}
  {{#> popover-content}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
    {{#> popover-icon popover-icon--type="info-circle"}}
    {{/popover-icon}}
    {{#> title titleType="h1" title--modifier="pf-m-md pf-m-info" title--attribute='id="popover-top-header"'}}
      Info Popover header
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

## Documentation

### Overview

A popover is used to provide contextual information for another component on click. The popover itself is made up of two main elements: arrow and content. The content element follows the pattern of the popover box component, with a close icon in the top right corner, as well as a header and body. One of the directional modifiers (`.pf-m-left`, `.pf-m-top`, etc.) is required on the popover component. Add a modifier class to the default popover to change the color of the header and add the corresponding icon: `.pf-m-success`, `.pf-m-error`, `.pf-m-warning`, or `.pf-m-info`.

### Accessibility

| Attribute                                             | Applies to                                                            | Outcome                                                                                                                                                                                                                                                                  |
| ----------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `role="dialog"`                                       | `.pf-c-popover`                                                       | Identifies the element that serves as the popover container. **Required**                                                                                                                                                                                                |
| `aria-labelledby="[id value of .pf-c-title]"`         | `.pf-c-popover`                                                       | Gives the popover an accessible name by referring to the element that provides the dialog title. **Required when .pf-c-title is present**                                                                                                                                |
| `aria-label="[title of popover]"`                     | `.pf-c-popover`                                                       | Gives the popover an accessible name. **Required when .pf-c-title is _not_ present**                                                                                                                                                                                     |
| `aria-describedby="[id value of applicable content]"` | `.pf-c-popover`                                                       | Gives the popover an accessible description by referring to the popover content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the popover.                                                             |
| `aria-modal="true"`                                   | `.pf-c-popover`                                                       | Tells assistive technologies that the windows underneath the current popover are not available for interaction. **Required**                                                                                                                                             |
| `aria-label="Close"`                                  | `.pf-c-button`                                                        | Provides an accessible name for the close button as it uses an icon instead of text. **Required**                                                                                                                                                                        |
| `aria-hidden="true"`                                  | Parent element containing the page contents when the popover is open. | Hides main contents of the page from screen readers. The element with `.pf-c-popover` must not be a descendent of the element with `aria-hidden="true"`. For more info see [trapping focus](https://pf4.patternfly.org/accessibility-guide#trapping-focus). **Required** |

### Usage

| Class                    | Applied to                                | Outcome                                                                                                                                   |
| ------------------------ | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `.pf-c-popover`          | `<div>`                                   | Creates a popover. Always use it with a modifier class that positions the popover relative to the element that triggered it. **Required** |
| `.pf-c-popover__arrow`   | `<div>`                                   | Creates an arrow pointing towards the element the popover describes. **Required**                                                         |
| `.pf-c-popover__content` | `<div>`                                   | Creates the content area of the popover. **Required**                                                                                     |
| `.pf-c-button`           | `<button>`                                | Positions the close icon in the top-right corner of the popover. **Required**                                                             |
| `.pf-c-title`            | `<h1>`,`<h2>`,`<h3>`,`<h4>`,`<h5>`,`<h6>` | Initiates a title. Always use it with a modifier class. See [title component](/documentation/core/components/title) for more info.        |
| `.pf-c-popover__body`    | `<div>`                                   | The popover's body text. **Required**                                                                                                     |
| `.pf-c-popover__footer`  | `<footer>`                                | Initiates a popover footer.                                                                                                               |
| `.pf-m-left`             | `.pf-c-popover`                           | Positions the popover to the left of the element.                                                                                         |
| `.pf-m-right`            | `.pf-c-popover`                           | Positions the popover to the right of the element.                                                                                        |
| `.pf-m-top`              | `.pf-c-popover`                           | Positions the popover to the top of the element.                                                                                          |
| `.pf-m-bottom`           | `.pf-c-popover`                           | Positions the popover to the bottom of the element.                                                                                       |
| `.pf-m-no-padding`       | `.pf-c-popover`                           | Removes the outer padding from the popover content.                                                                                       |
| `.pf-m-width-auto`       | `.pf-c-popover`                           | Allows popover width to be defined by the popover content.                                                                                |
| `.pf-m-success`          | `.pf-c-popover`                           | Applies success styling.                                                                                                                  |
| `.pf-m-error`            | `.pf-c-popover`                           | Applies error styling.                                                                                                                    |
| `.pf-m-warning`          | `.pf-c-popover`                           | Applies warning styling.                                                                                                                  |
| `.pf-m-info`             | `.pf-c-popover`                           | Applies info styling.                                                                                                                     |

```

```
