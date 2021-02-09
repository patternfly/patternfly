---
id: 'Toggle'
beta: true
section: components
cssPrefix: pf-c-toggle
---

## Examples
### Collapsed
```hbs
{{#> toggle}}
  {{#> toggle-text}}
    Collapsed
  {{/toggle-text}}
  {{#> toggle-controls}}
    {{> toggle-toggle-icon}}
  {{/toggle-controls}}
{{/toggle}}
```

### Expanded
```hbs
{{#> toggle toggle--IsExpanded="true"}}
  {{#> toggle-text}}
    Expanded
  {{/toggle-text}}
  {{#> toggle-controls}}
    {{> toggle-toggle-icon}}
  {{/toggle-controls}}
{{/toggle}}
```

### Disabled
```hbs
{{#> toggle toggle--IsDisabled="true"}}
  {{#> toggle-text}}
    Disabled
  {{/toggle-text}}
  {{#> toggle-controls}}
    {{> toggle-toggle-icon}}
  {{/toggle-controls}}
{{/toggle}}
```

### Icon
```hbs
{{#> toggle}}
  {{#> toggle-icon toggle-icon--IsStart="true"}}
    <i class="fas fa-cog" aria-hidden="true"></i>
  {{/toggle-icon}}
  {{#> toggle-text}}
    Icon
  {{/toggle-text}}
  {{#> toggle-controls}}
    {{> toggle-toggle-icon}}
  {{/toggle-controls}}
{{/toggle}}
```

### Count
```hbs
{{#> toggle}}
  {{#> toggle-text}}
    Count
  {{/toggle-text}}
  {{#> toggle-count}}
    {{#> badge badge--modifier="pf-m-unread"}}
      4 selected
    {{/badge}}
  {{/toggle-count}}
  {{#> toggle-controls}}
    {{> toggle-toggle-icon}}
  {{/toggle-controls}}
{{/toggle}}
```

### Primary
```hbs
{{#> toggle toggle--IsPrimary="true"}}
  {{#> toggle-text}}
    Collapsed
  {{/toggle-text}}
  {{#> toggle-controls}}
    {{> toggle-toggle-icon}}
  {{/toggle-controls}}
{{/toggle}}

&nbsp;

{{#> toggle toggle--IsPrimary="true"}}
  {{#> toggle-icon toggle-icon--IsStart="true"}}
    <i class="fas fa-cog" aria-hidden="true"></i>
  {{/toggle-icon}}
  {{#> toggle-text}}
    Icon
  {{/toggle-text}}
  {{#> toggle-controls}}
    {{> toggle-toggle-icon}}
  {{/toggle-controls}}
{{/toggle}}

&nbsp;

{{#> toggle toggle--IsPrimary="true" toggle--IsExpanded="true"}}
  {{#> toggle-text}}
    Expanded
  {{/toggle-text}}
  {{#> toggle-controls}}
    {{> toggle-toggle-icon}}
  {{/toggle-controls}}
{{/toggle}}

&nbsp;

{{#> toggle toggle--IsPrimary="true" toggle--IsDisabled="true"}}
  {{#> toggle-text}}
    Disabled
  {{/toggle-text}}
  {{#> toggle-controls}}
    {{> toggle-toggle-icon}}
  {{/toggle-controls}}
{{/toggle}}
```

### Plain
```hbs
{{#> toggle toggle--IsPlain="true" toggle--attribute='aria-label="Actions"'}}
  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
{{/toggle}}

&nbsp;

{{#> toggle toggle--IsPlain="true" toggle--IsExpanded="true" toggle--attribute='aria-label="Actions"'}}
  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
{{/toggle}}

&nbsp;

{{#> toggle toggle--IsPlain="true" toggle--IsDisabled="true" toggle--attribute='aria-label="Actions"'}}
  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
{{/toggle}}
```

### Accessibility
| Class | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="true"` | `.pf-c-toggle` | Indicates that the toggle component is in the expanded state. |
| `aria-expanded="false"` | `.pf-c-toggle` | Indicates that the toggle component is in the collapsed state. |
| `aria-label="Descriptive text"` | `.pf-c-toggle.pf-m-plain` | Gives the plain toggle component an accessible label. |
| `disabled` | `.pf-c-toggle` | Indicates that the toggle component is disabled. |

### Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-c-toggle` | `<button>` | Initiates the toggle component. |
| `.pf-c-toggle__icon` | `<span>` | Defines the toggle component icon. |
| `.pf-c-toggle__text` | `<span>` | Defines the toggle component text. |
| `.pf-c-toggle__count` | `<span>` | Defines the toggle component count. |
| `.pf-c-toggle__controls` | `<span>` | Defines the toggle component controls. |
| `.pf-c-toggle__toggle-icon` | `<span>` | Defines the toggle component toggle/arrow icon. |
| `.pf-m-primary` | `.pf-c-toggle` | Modifies the toggle component for the primary variation. |
| `.pf-m-plain` | `.pf-c-toggle` | Modifies the toggle component for the plain variation. |
| `.pf-m-expanded` | `.pf-c-toggle` | Modifies the toggle component for the expanded state. |
