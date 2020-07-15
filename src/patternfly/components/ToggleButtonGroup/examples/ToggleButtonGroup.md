---
title: Toggle button group
section: components
cssPrefix: pf-c-toggle-button-group
---

## Examples
```hbs title=Default
{{#> toggle-button-group}}
  {{#> toggle-button-group-button}}
    Option 1
  {{/toggle-button-group-button}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-button-group-button}}
    Option 2
  {{/toggle-button-group-button}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-button-group-button}}
    Option 3
  {{/toggle-button-group-button}}
{{/toggle-button-group}}

<br/>

{{#> toggle-button-group}}
  {{#> toggle-button-group-button toggle-button-group-button--modifier="pf-m-selected"}}
    Option 1
  {{/toggle-button-group-button}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-button-group-button}}
    Option 2
  {{/toggle-button-group-button}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-button-group-button}}
    Option 3
  {{/toggle-button-group-button}}
{{/toggle-button-group}}

<br/>

{{#> toggle-button-group}}
  {{#> toggle-button-group-button}}
    Option 1
  {{/toggle-button-group-button}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-button-group-button}}
    Option 2
  {{/toggle-button-group-button}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-button-group-button toggle-button-group-button--attribute="disabled"}}
    Option 3
  {{/toggle-button-group-button}}
{{/toggle-button-group}}
```

```hbs title=With-icon
{{#> toggle-button-group}}
  {{#> toggle-button-group-button toggle-button-group-button--attribute='aria-label="Copy button"'}}
    <i class="fas fa-copy" aria-hidden="true"/>
  {{/toggle-button-group-button}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-button-group-button toggle-button-group-button--attribute='aria-label="Undo button"'}}
    <i class="fas fa-undo" aria-hidden="true"></i>
  {{/toggle-button-group-button}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-button-group-button toggle-button-group-button--attribute='aria-label="Share button"'}}
    <i class="fas fa-share-square" aria-hidden="true"></i>
  {{/toggle-button-group-button}}
{{/toggle-button-group}}

<br/>

{{#> toggle-button-group}}
  {{#> toggle-button-group-button toggle-button-group-button--modifier="pf-m-selected" toggle-button-group-button--attribute='aria-label="Copy button"'}}
    <i class="fas fa-copy" aria-hidden="true"/>
  {{/toggle-button-group-button}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-button-group-button toggle-button-group-button--attribute='aria-label="Undo button"'}}
    <i class="fas fa-undo" aria-hidden="true"></i>
  {{/toggle-button-group-button}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-button-group-button toggle-button-group-button--attribute='aria-label="Share button"'}}
    <i class="fas fa-share-square" aria-hidden="true"></i>
  {{/toggle-button-group-button}}
{{/toggle-button-group}}

<br/>

{{#> toggle-button-group}}
  {{#> toggle-button-group-button toggle-button-group-button--attribute='aria-label="Copy button"'}}
    <i class="fas fa-copy" aria-hidden="true"/>
  {{/toggle-button-group-button}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-button-group-button toggle-button-group-button--attribute='aria-label="Undo button"'}}
    <i class="fas fa-undo" aria-hidden="true"></i>
  {{/toggle-button-group-button}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-button-group-button toggle-button-group-button--attribute='aria-label="Share button" disabled'}}
    <i class="fas fa-share-square" aria-hidden="true"></i>
  {{/toggle-button-group-button}}
{{/toggle-button-group}}
```

```hbs title=Links
{{#> toggle-button-group}}
  {{#> toggle-button-group-button toggle-button-group-button--type="a"}}
    Option 1
  {{/toggle-button-group-button}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-button-group-button toggle-button-group-button--modifier="pf-m-selected" toggle-button-group-button--type="a"}}
    Option 2
  {{/toggle-button-group-button}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-button-group-button toggle-button-group-button--modifier="pf-m-disabled" toggle-button-group-button--type="a" toggle-button-group-button--attribute='tabindex="-1"' aria-disabled="true" }}
    Option 3
  {{/toggle-button-group-button}}
{{/toggle-button-group}}

<br/>

{{#> toggle-button-group}}
  {{#> toggle-button-group-button toggle-button-group-button--attribute='aria-label="Copy button"' toggle-button-group-button--type="a"}}
    <i class="fas fa-copy" aria-hidden="true"/>
  {{/toggle-button-group-button}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-button-group-button toggle-button-group-button--attribute='aria-label="Undo button"' toggle-button-group-button--modifier="pf-m-selected" toggle-button-group-button--type="a"}}
    <i class="fas fa-undo" aria-hidden="true"></i>
  {{/toggle-button-group-button}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> toggle-button-group-button toggle-button-group-button--attribute='aria-label="Share button"' toggle-button-group-button--modifier="pf-m-disabled" toggle-button-group-button--type="a" toggle-button-group-button--attribute='tabindex="-1"' aria-disabled="true" }}
    <i class="fas fa-share-square" aria-hidden="true"></i>
  {{/toggle-button-group-button}}
{{/toggle-button-group}}
```

## Documentation
### Overview


### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="[button label text]"` | `.pf-c-toggle-button-group__button` | Provides an accessible name for the button when an icon is used instead of text. **Required when icon is used with no supporting text** |
| `disabled` | `.pf-c-toggle-button-group__button` | When a button element is used, indicates that it is unavailable and removes it from keyboard focus. **Required when button is disabled** |
| `tabindex="-1"` | `a.pf-c-toggle-button-group__button` | When a link element is used, removes it from keyboard focus. **Required when link is disabled** |
| `aria-disabled="true"` | `button.pf-c-toggle-button-group__button` | When a button element is used, indicates that it is unavailable but does not prevent keyboard or hover interactions. Used when a disabled button provides interactive elements like a tooltip. |
| `aria-disabled="true"` | `a.pf-c-toggle-button-group__button` | When a link element is used, indicates that it is unavailable. **Required when link is disabled** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-toggle-button-group` | `<div>` | Initiates the toggle button group. **Required** |
| `.pf-c-toggle-button-group__button` | `<button>`, `<a>` | Initiates the toggle button group button. **Required** |
| `.pf-m-selected` | `.pf-c-toggle-button-group__button` | Modifies the toggle button group button for the selected state. |
| `.pf-m-disabled` | `.pf-c-toggle-button-group__button` | Modifies the toggle button group button for the disabled state. |