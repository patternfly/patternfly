---
id: Button
section: components
cssPrefix: pf-v5-c-button
---

import './Button.css'

## Examples
### Variations
```hbs
{{> button--variations}}
```

### Clicked buttons
```hbs
{{> button--variations button--IsClicked=true}}
```

### Small buttons
```hbs
{{> button--variations button--IsSmall=true}}
```

### Disabled
```hbs
{{> button--variations button--IsDisabled=true}}
```

### Aria-disabled
```hbs
{{> button--variations button--IsAriaDisabled=true}}
```

### Links as buttons
```hbs
{{#> button button--IsAnchor="true" button--url="https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples" button--modifier="pf-m-primary"}}
  Primary link to W3.org
{{/button}}

{{#> button button--IsAnchor="true" button--url="#overview" button--attribute='aria-label="Read more about button documentation"' button--modifier="pf-m-secondary"}}
  Secondary link to anchor
{{/button}}

{{#> button button--IsAnchor="true" button--url="#overview" button--attribute='aria-label="Read more about button documentation"' button--modifier="pf-m-secondary pf-m-danger"}}
  Secondary danger link to anchor
{{/button}}

{{#> button button--IsAnchor="true" button--url="https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples" button--attribute='aria-disabled="true" tabindex="-1"' button--modifier="pf-m-tertiary pf-m-disabled"}}
  Tertiary link to W3.org
{{/button}}

{{#> button button--IsAnchor="true" button--url="https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples" button--modifier="pf-m-link"}}
  Link to W3.org
{{/button}}

{{#> button button--IsAnchor="true" button--url="https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples" button--modifier="pf-m-link pf-m-danger"}}
  Link danger to W3.org
{{/button}}
```

### Inline link as span
```hbs
<strong>Plain</strong>
<br>
{{#> button button--attribute='aria-label="Remove"' button--IsSpan=true button--IsPlain=true}}
  <i class="fas fa-times" aria-hidden="true"></i>
{{/button}}
<br><br>
<strong>Plain no padding</strong>
<br>
{{#> button button--attribute='aria-label="Remove"' button--IsSpan=true button--IsPlain=true button--HasNoPadding=true}}
  <i class="fas fa-times" aria-hidden="true"></i>
{{/button}}
<br><br>
<strong>Inline link</strong>
<br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
{{#> button button--IsSpan="true" button--modifier="pf-m-link pf-m-inline"}}
  This is long button text that needs to be a span so that it will wrap inline with the text around it.
{{/button}}
Sed hendrerit nisi in cursus maximus. Ut malesuada nisi turpis, in condimentum velit elementum non.
```

### Block level
```hbs
{{#> button button--modifier="pf-m-primary pf-m-block"}}
  Block level button
{{/button}}
```

### Types
```hbs
{{#> button button--modifier="pf-m-primary" button--IsSubmit="true"}}
  Submit
{{/button}}

{{#> button button--modifier="pf-m-primary" button--IsReset="true"}}
  Reset
{{/button}}

{{#> button button--modifier="pf-m-primary"}}
  Default
{{/button}}
```

### Call to action
```hbs
{{#*inline "cta-buttons"}}
  {{#> button button--modifier="pf-m-primary pf-m-display-lg"}}
    Call to action
  {{/button}}

  {{#> button button--modifier="pf-m-secondary pf-m-display-lg"}}
    Call to action
  {{/button}}

  {{#> button button--modifier="pf-m-tertiary pf-m-display-lg"}}
    Call to action
  {{/button}}

  {{#> button button--modifier="pf-m-link pf-m-display-lg"}}
    Call to action
    {{#> button-icon button-icon--modifier="pf-m-end"}}
      <i class="fas fa-arrow-right" aria-hidden="true"></i>
    {{/button-icon}}
  {{/button}}

  {{#> button button--modifier="pf-m-link pf-m-inline pf-m-display-lg"}}
    Call to action
    {{#> button-icon button-icon--modifier="pf-m-end"}}
      <i class="fas fa-arrow-right" aria-hidden="true"></i>
    {{/button-icon}}
  {{/button}}
{{/inline}}
{{> cta-buttons}}
<br><br>
<strong>disabled</strong>
<br>
{{> cta-buttons button--IsDisabled=true}}
```

### Progress
```hbs
{{#> button button--modifier="pf-m-primary" button--IsProgress="true"}}
  Primary loader
{{/button}}

{{#> button button--modifier="pf-m-primary" button--IsProgress="true" button--IsInProgress="true"}}
  Primary loading
{{/button}}
<br/>
{{#> button button--modifier="pf-m-secondary" button--IsProgress="true"}}
  Secondary loader
{{/button}}

{{#> button button--modifier="pf-m-secondary" button--IsProgress="true" button--IsInProgress="true"}}
  Secondary loading
{{/button}}
<br/>
{{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Upload"'}}
  <i class="fas fa-upload" aria-hidden="true"></i>
{{/button}}

{{#> button button--modifier="pf-m-plain" button--IsInProgress="true" button--progress-text="Uploading..."}}
  <i class="fas fa-upload" aria-hidden="true"></i>
{{/button}}
<br/>
{{#> button button--modifier="pf-m-link" button--IsInline="true" button--IsProgress="true"}}
  Inline loader
{{/button}}

{{#> button button--modifier="pf-m-link" button--IsInline="true" button--IsProgress="true" button--IsInProgress="true"}}
  Inline loading
{{/button}}
```

### Counts
```hbs isBeta
{{#*inline "button-counts"}}
{{#> button button--modifier="pf-m-primary" button--attribute='aria-label="View 7 issues"'}}
  View issues
  {{#> button-count}}
    {{#> badge badge--modifier="pf-m-unread"}}
      7
    {{/badge}}
  {{/button-count}}
{{/button}}
{{#> button button--modifier="pf-m-primary" button--attribute='aria-label="View 7 issues"'}}
  View issues
  {{#> button-count}}
    {{#> badge badge--modifier="pf-m-read"}}
      7
    {{/badge}}
  {{/button-count}}
{{/button}}

{{#> button button--modifier="pf-m-link" button--attribute='aria-label="View 7 issues"'}}
  View issues
  {{#> button-count}}
    {{#> badge badge--modifier="pf-m-unread"}}
      7
    {{/badge}}
  {{/button-count}}
{{/button}}
{{#> button button--modifier="pf-m-link" button--attribute='aria-label="View 7 issues"'}}
  View issues
  {{#> button-count}}
    {{#> badge badge--modifier="pf-m-read"}}
      7
    {{/badge}}
  {{/button-count}}
{{/button}}
{{/inline}}

{{> button-counts}}
<br>
<strong>disabled</strong>
<br>
{{> button-counts button--IsDisabled=true}}
```

### Plain with no padding
```hbs
For when a plain/icon button is placed inline with text {{#> button button--modifier="pf-m-plain pf-m-no-padding" button--attribute='aria-label="More info"'}}<i class="fas fa-question-circle" aria-hidden="true"></i>{{/button}}.
```

### Stateful
```hbs
<strong>Read</strong>
<br>
{{#> button button--modifier="pf-m-stateful pf-m-read"}}
  <i class="fas fa-bell" aria-hidden="true"></i> 10 {{#> screen-reader}}items{{/screen-reader}}
{{/button}}

{{#> button button--modifier="pf-m-stateful pf-m-read pf-m-clicked"}}
  <i class="fas fa-bell" aria-hidden="true"></i> 10 {{#> screen-reader}}items{{/screen-reader}}
{{/button}}

<br><br>

<strong>Unread</strong>
<br>
{{#> button button--modifier="pf-m-stateful pf-m-unread"}}
  <i class="fas fa-bell" aria-hidden="true"></i> 10 {{#> screen-reader}}unread items{{/screen-reader}}
{{/button}}

{{#> button button--modifier="pf-m-stateful pf-m-unread pf-m-clicked"}}
  <i class="fas fa-bell" aria-hidden="true"></i> 10 {{#> screen-reader}}unread items{{/screen-reader}}
{{/button}}

<br><br>

<strong>Attention</strong>
<br>
{{#> button button--modifier="pf-m-stateful pf-m-attention"}}
  <i class="fas fa-bell" aria-hidden="true"></i> 10 {{#> screen-reader}}unread items, needs attention{{/screen-reader}}
{{/button}}

{{#> button button--modifier="pf-m-stateful pf-m-attention pf-m-clicked"}}
  <i class="fas fa-bell" aria-hidden="true"></i> 10 {{#> screen-reader}}unread items, needs attention{{/screen-reader}}
{{/button}}
```

## Documentation
### Overview
Always add a modifier class to add color to the button.

### Button vs link
Semantic buttons and links are important for usability as well as accessibility. Using an `a` instead of a `button` element to perform user initiated actions should be avoided, unless absolutely necessary.

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-pressed="true or false"` | `.pf-v5-c-button` | Indicates that the button is a toggle. When set to "true", `pf-m-active` should also be set so that the button displays in an active state. **Required when button is a toggle** |
| `aria-label="[button label text]"` | `.pf-v5-c-button.pf-m-plain` | Provides an accessible name for the button when an icon is used instead of text. **Required when icon is used with no supporting text** |
| `aria-label="[descriptive text]"` | `a.pf-v5-c-button`, `span.pf-v5-c-button.pf-m-link.pf-m-inline` | The button component's text should adequately describe its purpose. If it does not, `aria-label` can provide more detailed interaction information. |
| `disabled` | `button.pf-v5-c-button` | When a button element is used, indicates that it is unavailable and removes it from keyboard focus. **Required when button is disabled** |
| `aria-disabled="true"` | `button.pf-v5-c-button` | When a button element is used, indicates that it is unavailable but does not prevent keyboard or hover interactions. Used when a disabled button provides interactive elements like a tooltip. |
| `aria-disabled="true"` | `a.pf-v5-c-button.pf-m-disabled`, `span.pf-v5-c-button.pf-m-link.pf-m-inline.pf-m-disabled` | When a non-button element is used, indicates that it is unavailable. **Required when element is disabled** |
| `aria-expanded="true"` | `.pf-v5-c-button.pf-m-expanded` | Indicates that the expanded content element is visible. **Required** |
| `tabindex="-1"` | `a.pf-v5-c-button.pf-m-disabled`, `span.pf-v5-c-button.pf-m-link.pf-m-inline.pf-m-disabled` | When a non-button element is used, removes it from keyboard focus. **Required when element is disabled** |
| `tabindex="0"` | `span.pf-v5-c-button.pf-m-link.pf-m-inline` | Inserts the span into the tab order of the page so that it is focusable. **Required when the element is a span** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-button` | `<button>, <span>` |  Initiates a button. Always use it with a modifier class. **Required** |
| `.pf-v5-c-button__icon` | `<span>` | Initiates a button icon. |
| `.pf-v5-c-button__progress` | `<span>` | Initiates a button progress container. |
| `.pf-v5-c-button__count` | `<span>` | Initiates a button count container. **Note:** Count should only be used on link buttons.|
| `.pf-m-primary` | `.pf-v5-c-button` | Modifies for primary styles. |
| `.pf-m-secondary` | `.pf-v5-c-button` | Modifies for secondary styles. |
| `.pf-m-tertiary` | `.pf-v5-c-button` | Modifies for tertiary styles. |
| `.pf-m-danger` | `.pf-v5-c-button` | Modifies for danger styles. |
| `.pf-m-warning` | `.pf-v5-c-button` | Modifies for warning styles. |
| `.pf-m-link` | `.pf-v5-c-button` | Modifies for link styles. This button has no background or border and is styled as a link. This button would commonly appear in a form and may include an icon. |
| `.pf-m-plain` | `.pf-v5-c-button` | Modifies for icon styles. This button has no background or border, uses a standard text color, and is used for `.pf-m-plain` icon buttons such as close, expand, kebab, etc. |
| `.pf-m-no-padding` | `.pf-v5-c-button.pf-m-plain` | Modifies a plain button to remove padding. This modifier should only be used when the button is inline within a sentence or block of text. Adjacent plain buttons without padding should always have spacing between them. |
| `.pf-m-inline` | `.pf-v5-c-button.pf-m-link` | Modifies for inline styles. This button is presented similar to a normal link and has no padding and is displayed inline with other inline content. When used as a `<span>`, the text will flow inline with text around it. |
| `.pf-m-block` | `.pf-v5-c-button` | Creates a block level button. |
| `.pf-m-control` | `.pf-v5-c-button` | Modifies for control styles. **Note:** This modifier should only be used when using buttons in the Input Group or Clipboard Copy components. |
| `.pf-m-expanded` | `.pf-v5-c-button.pf-m-control` | Modifies a control button for the expanded state. |
| `.pf-m-start` | `.pf-v5-c-button__icon` | Applies right spacing to an icon inside of a button when the icon comes before text. |
| `.pf-m-end` | `.pf-v5-c-button__icon` | Applies left spacing to an icon inside of a button when the icon comes after text. |
| `.pf-m-active` | `.pf-v5-c-button` | Forces display of the active state of the button. This modifier should be used when `aria-pressed` is set to true so that the button displays in an active state. |
| `.pf-m-small` | `.pf-v5-c-button` | Modifies the button so that it has small font size. |
| `.pf-m-aria-disabled` | `.pf-v5-c-button` | Modifies a button to be visually disabled, yet is still focusable. |
| `.pf-m-display-lg` | `.pf-v5-c-button`, `pf-v5-c-button.pf-m-link` | Modifies the button and link button for large display styling. For example, use this modifier to achieve "call to action" styles. |
| `.pf-m-progress` | `.pf-v5-c-button` | Indicates that the button supports the progress state. **Note:** Not used with the plain variation. |
| `.pf-m-in-progress` | `.pf-v5-c-button` | Indicates that the button is in the in progress state. |
| `.pf-m-stateful` | `.pf-v5-c-button` | Indicates that the button is used for one of read, unread, and attention states. **Note:** Always use with a modifier of `.pf-m-read`, `.pf-m-unread`, or `.pf-m-attention`. |
