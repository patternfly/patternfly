---
id: Toggle group
section: components
cssPrefix: pf-c-toggle-group
---

import './toggle-group.css'

## Examples

### Default
```hbs
{{#> toggle-group}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button}}
      {{#> toggle-group-text}}
        Option 1
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button}}
      {{#> toggle-group-text}}
        Option 2
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button}}
      {{#> toggle-group-text}}
        Option 3
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
{{/toggle-group}}

<br/>

{{#> toggle-group}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--modifier="pf-m-selected"}}
      {{#> toggle-group-text}}
        Option 1
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--modifier="pf-m-selected"}}
      {{#> toggle-group-text}}
        Option 2
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button}}
      {{#> toggle-group-text}}
        Option 3
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
{{/toggle-group}}

<br/>

{{#> toggle-group}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button}}
      {{#> toggle-group-text}}
        Option 1
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button}}
      {{#> toggle-group-text}}
        Option 2
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--attribute="disabled"}}
      {{#> toggle-group-text}}
        Option 3
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
{{/toggle-group}}
```

### With icon
```hbs
{{#> toggle-group}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--attribute='aria-label="Copy button"'}}
      {{#> toggle-group-icon}}
        <i class="fas fa-copy" aria-hidden="true"></i>
      {{/toggle-group-icon}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--attribute='aria-label="Undo button"'}}
      {{#> toggle-group-icon}}
        <i class="fas fa-undo" aria-hidden="true"></i>
      {{/toggle-group-icon}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--attribute='aria-label="Share button"'}}
      {{#> toggle-group-icon}}
        <i class="fas fa-share-square" aria-hidden="true"></i>
      {{/toggle-group-icon}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
{{/toggle-group}}

<br/>

{{#> toggle-group}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--modifier="pf-m-selected" toggle-group-button--attribute='aria-label="Copy button"'}}
      {{#> toggle-group-icon}}
        <i class="fas fa-copy" aria-hidden="true"></i>
      {{/toggle-group-icon}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--attribute='aria-label="Undo button"'}}
      {{#> toggle-group-icon}}
        <i class="fas fa-undo" aria-hidden="true"></i>
      {{/toggle-group-icon}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--attribute='aria-label="Share button"'}}
      {{#> toggle-group-icon}}
        <i class="fas fa-share-square" aria-hidden="true"></i>
      {{/toggle-group-icon}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
{{/toggle-group}}

<br/>

{{#> toggle-group}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--attribute='aria-label="Copy button"'}}
      {{#> toggle-group-icon}}
        <i class="fas fa-copy" aria-hidden="true"></i>
      {{/toggle-group-icon}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--attribute='aria-label="Undo button"'}}
      {{#> toggle-group-icon}}
        <i class="fas fa-undo" aria-hidden="true"></i>
      {{/toggle-group-icon}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--attribute='aria-label="Share button" disabled'}}
      {{#> toggle-group-icon}}
        <i class="fas fa-share-square" aria-hidden="true"></i>
      {{/toggle-group-icon}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
{{/toggle-group}}
```

### Icon-and-text
```hbs
{{#> toggle-group}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button}}
      {{#> toggle-group-icon}}
        <i class="fas fa-copy" aria-hidden="true"></i>
      {{/toggle-group-icon}}
      {{#> toggle-group-text}}
        Copy
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--attribute='aria-label="Undo button"'}}
      {{#> toggle-group-icon}}
        <i class="fas fa-undo" aria-hidden="true"></i>
      {{/toggle-group-icon}}
      {{#> toggle-group-text}}
        Undo
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--modifier="pf-m-selected"}}
      {{#> toggle-group-icon}}
        <i class="fas fa-share-square" aria-hidden="true"></i>
      {{/toggle-group-icon}}
      {{#> toggle-group-text}}
        Share
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
{{/toggle-group}}

<br/>

{{#> toggle-group}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button}}
      {{#> toggle-group-text}}
        Copy
      {{/toggle-group-text}}
      {{#> toggle-group-icon}}
        <i class="fas fa-copy" aria-hidden="true"></i>
      {{/toggle-group-icon}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button}}
      {{#> toggle-group-text}}
        Undo
      {{/toggle-group-text}}
      {{#> toggle-group-icon}}
        <i class="fas fa-undo" aria-hidden="true"></i>
      {{/toggle-group-icon}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--modifier="pf-m-selected"}}
      {{#> toggle-group-text}}
        Share
      {{/toggle-group-text}}
      {{#> toggle-group-icon}}
        <i class="fas fa-share-square" aria-hidden="true"></i>
      {{/toggle-group-icon}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
{{/toggle-group}}
```

### Compact
```hbs
{{#> toggle-group toggle-group--modifier="pf-m-compact"}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button}}
      {{#> toggle-group-text}}
        Option 1
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button}}
      {{#> toggle-group-text}}
        Option 2
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button}}
      {{#> toggle-group-text}}
        Option 3
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
{{/toggle-group}}

<br/>

{{#> toggle-group toggle-group--modifier="pf-m-compact"}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--modifier="pf-m-selected"}}
      {{#> toggle-group-text}}
        Option 1
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--modifier="pf-m-selected"}}
      {{#> toggle-group-text}}
        Option 2
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button}}
      {{#> toggle-group-text}}
        Option 3
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
{{/toggle-group}}

<br/>

{{#> toggle-group toggle-group--modifier="pf-m-compact"}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button}}
      {{#> toggle-group-text}}
        Option 1
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button}}
      {{#> toggle-group-text}}
        Option 2
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--attribute="disabled"}}
      {{#> toggle-group-text}}
        Option 3
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
{{/toggle-group}}
```

## Documentation

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="[button label text]"` | `.pf-c-toggle-group__button` | Provides an accessible name for the button when an icon is used instead of text. **Required when icon is used with no supporting text** |
| `disabled` | `.pf-c-toggle-group__button` | When a button element is used, indicates that it is unavailable and removes it from keyboard focus. **Required when button is disabled** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-toggle-group` | `<div>` | Initiates the toggle group. **Required** |
| `.pf-c-toggle-group__button` | `<button>` | Initiates the toggle group button. **Required** |
| `.pf-c-toggle-group__item` | `<div>` | Initiates the toggle group item wrapper. **Required** |
| `.pf-c-toggle-group__text` | `<span>` | Initiates the toggle button text element. |
| `.pf-c-toggle-group__icon` | `<span>` | Initiates the toggle button icon element. |
| `.pf-m-compact` | `.pf-c-toggle-group` | Modifies the toggle group for compact styles. |
| `.pf-m-selected` | `.pf-c-toggle-group__button` | Modifies the toggle button group button for the selected state. |
