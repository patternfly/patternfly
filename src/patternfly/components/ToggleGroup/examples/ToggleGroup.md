---
title: Toggle group
section: components
cssPrefix: pf-c-toggle-group
beta: true
---

import './ToggleGroup.css'

## Examples
```hbs title=Default
{{#> toggle-group}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button}}
      {{#> toggle-group-text}}
        Option 1
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button}}
      {{#> toggle-group-text}}
        Option 2
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
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
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--modifier="pf-m-selected"}}
      {{#> toggle-group-text}}
        Option 2
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
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
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button}}
      {{#> toggle-group-text}}
        Option 2
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--attribute="disabled"}}
      {{#> toggle-group-text}}
        Option 3
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
{{/toggle-group}}
```

```hbs title=With-icon
{{#> toggle-group}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--attribute='aria-label="Copy button"'}}
      {{#> toggle-group-icon}}
        <i class="fas fa-copy" aria-hidden="true"/>
      {{/toggle-group-icon}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--attribute='aria-label="Undo button"'}}
      {{#> toggle-group-icon}}
        <i class="fas fa-undo" aria-hidden="true"></i>
      {{/toggle-group-icon}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
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
        <i class="fas fa-copy" aria-hidden="true"/>
      {{/toggle-group-icon}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--attribute='aria-label="Undo button"'}}
      {{#> toggle-group-icon}}
        <i class="fas fa-undo" aria-hidden="true"></i>
      {{/toggle-group-icon}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
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
        <i class="fas fa-copy" aria-hidden="true"/>
      {{/toggle-group-icon}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
    {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--attribute='aria-label="Undo button"'}}
      {{#> toggle-group-icon}}
        <i class="fas fa-undo" aria-hidden="true"></i>
      {{/toggle-group-icon}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--attribute='aria-label="Share button" disabled'}}
      {{#> toggle-group-icon}}
        <i class="fas fa-share-square" aria-hidden="true"></i>
      {{/toggle-group-icon}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
{{/toggle-group}}
```

```hbs title=Light
{{#> toggle-group}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--modifier="pf-m-light"}}
      {{#> toggle-group-text}}
        Option 1
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--modifier="pf-m-light"}}
      {{#> toggle-group-text}}
        Option 2
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--modifier="pf-m-light pf-m-selected"}}
      {{#> toggle-group-text}}
        Option 3
      {{/toggle-group-text}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
{{/toggle-group}}

<br/>

{{#> toggle-group}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--modifier="pf-m-light" toggle-group-button--attribute='aria-label="Copy button"'}}
    {{#> toggle-group-icon}}
        <i class="fas fa-copy" aria-hidden="true"/>
      {{/toggle-group-icon}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--modifier="pf-m-light" toggle-group-button--attribute='aria-label="Undo button"'}}
      {{#> toggle-group-icon}}
        <i class="fas fa-undo" aria-hidden="true"></i>
      {{/toggle-group-icon}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-group-item}}
    {{#> toggle-group-button toggle-group-button--modifier="pf-m-light pf-m-selected" toggle-group-button--attribute='aria-label="Share button"'}}
      {{#> toggle-group-icon}}
        <i class="fas fa-share-square" aria-hidden="true"></i>
      {{/toggle-group-icon}}
    {{/toggle-group-button}}
  {{/toggle-group-item}}
{{/toggle-group}}
```


## Documentation
### Overview


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
| `.pf-m-selected` | `.pf-c-toggle-group__button` | Modifies the toggle button group button for the selected state. |
| `.pf-m-light` | `.pf-c-toggle-group__button` | Modifies the toggle button group button to have a light background to be used on a darker background. |