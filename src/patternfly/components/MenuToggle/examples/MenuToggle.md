---
id: 'Menu toggle'
beta: true
section: components
cssPrefix: pf-c-menu-toggle
---

import './MenuToggle.css'

## Examples

### Split Button (checkbox)
```hbs
{{#> menu-toggle menu-toggle--id="split-button-with-checkbox-disabled-example" menu-toggle--IsSplitButton="true" menu-toggle--IsSecondarysss="true" menu-toggle--IsDisabled="true"}}
  {{> menu-toggle-check menu-toggle-check--aria-label="Split button check"}}
  {{#> menu-toggle-button}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--id="split-button-with-checkbox-example" menu-toggle--IsSplitButton="true" menu-toggle--IsSecondarysss="true"}}
  {{> menu-toggle-check menu-toggle-check--aria-label="Split button check"}}
  {{#> menu-toggle-button}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--id="split-button-with-checkbox-expanded-example" menu-toggle--IsSplitButton="true" menu-toggle--IsSecondarysss="true"}}
  {{> menu-toggle-check menu-toggle-check--aria-label="Split button check"}}
  {{#> menu-toggle-button}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;
```

### Split Button (action)
```hbs
{{#> menu-toggle menu-toggle--IsSplitButton="true" menu-toggle--IsSecondarysss="true"}}
  {{#> menu-toggle-button}}
    {{#> menu-toggle-text}}
      Action
    {{/menu-toggle-text}}
  {{/menu-toggle-button}}
  {{#> menu-toggle-button}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--IsSplitButton="true" menu-toggle--IsSecondarysss="true" menu-toggle--IsExpanded="true"}}
  {{#> menu-toggle-button}}
    {{#> menu-toggle-text}}
      Action
    {{/menu-toggle-text}}
  {{/menu-toggle-button}}
  {{#> menu-toggle-button}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--IsSplitButton="true" menu-toggle--IsSecondarysss="true"}}
  {{#> menu-toggle-button}}
    {{#> menu-toggle-icon}}
      <i class="fas fa-cog" aria-hidden="true"></i>
    {{/menu-toggle-icon}}
    {{#> menu-toggle-text}}
      Action
    {{/menu-toggle-text}}
  {{/menu-toggle-button}}
  {{#> menu-toggle-button}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--IsSplitButton="true" menu-toggle--IsSecondarysss="true" menu-toggle--IsExpanded="true"}}
  {{#> menu-toggle-button}}
    {{#> menu-toggle-icon}}
      <i class="fas fa-cog" aria-hidden="true"></i>
    {{/menu-toggle-icon}}
    {{#> menu-toggle-text}}
      Action
    {{/menu-toggle-text}}
  {{/menu-toggle-button}}
  {{#> menu-toggle-button}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--IsSplitButton="true" menu-toggle--IsSecondarysss="true" menu-toggle--IsExpanded="true"}}
  {{#> menu-toggle-button}}
    {{#> menu-toggle-icon}}
      <i class="fas fa-cog" aria-hidden="true"></i>
    {{/menu-toggle-icon}}
  {{/menu-toggle-button}}
  {{#> menu-toggle-button}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--IsSplitButton="true" menu-toggle--IsSecondarysss="true" menu-toggle--IsExpanded="true"}}
  {{#> menu-toggle-button}}
    {{#> menu-toggle-icon}}
      <i class="fas fa-cog" aria-hidden="true"></i>
    {{/menu-toggle-icon}}
  {{/menu-toggle-button}}
  {{#> menu-toggle-button}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}
```

### Collapsed
```hbs
{{#> menu-toggle}}
  {{#> menu-toggle-text}}
    Collapsed
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}
```

### Expanded
```hbs
{{#> menu-toggle menu-toggle--IsExpanded="true"}}
  {{#> menu-toggle-text}}
    Expanded
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}
```

### Disabled
```hbs
{{#> menu-toggle menu-toggle--IsDisabled="true"}}
  {{#> menu-toggle-text}}
    Disabled
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}
```

### Count
```hbs
{{#> menu-toggle}}
  {{#> menu-toggle-text}}
    Count
  {{/menu-toggle-text}}
  {{#> menu-toggle-count}}
    {{#> badge badge--modifier="pf-m-unread"}}
      4 selected
    {{/badge}}
  {{/menu-toggle-count}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}
```

### Primary
```hbs
{{#> menu-toggle menu-toggle--IsPrimary="true"}}
  {{#> menu-toggle-text}}
    Collapsed
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--IsPrimary="true"}}
  {{#> menu-toggle-icon}}
    <i class="fas fa-cog" aria-hidden="true"></i>
  {{/menu-toggle-icon}}
  {{#> menu-toggle-text}}
    Icon
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--IsPrimary="true" menu-toggle--IsExpanded="true"}}
  {{#> menu-toggle-text}}
    Expanded
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--IsPrimary="true" menu-toggle--IsDisabled="true"}}
  {{#> menu-toggle-text}}
    Disabled
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}
```

### Secondary
```hbs
{{#> menu-toggle menu-toggle--IsSecondary="true"}}
  {{#> menu-toggle-text}}
    Collapsed
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--IsSecondary="true" menu-toggle--IsExpanded="true"}}
  {{#> menu-toggle-text}}
    Expanded
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--IsSecondary="true" menu-toggle--IsDisabled="true"}}
  {{#> menu-toggle-text}}
    Disabled
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}
```

### Plain
```hbs
{{#> menu-toggle menu-toggle--IsPlain="true" menu-toggle--attribute='aria-label="Actions"'}}
  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--IsPlain="true" menu-toggle--IsExpanded="true" menu-toggle--attribute='aria-label="Actions"'}}
  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--IsPlain="true" menu-toggle--IsDisabled="true" menu-toggle--attribute='aria-label="Actions"'}}
  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
{{/menu-toggle}}
```

### Plain with text
```hbs
{{#> menu-toggle menu-toggle--IsPlain="true" menu-toggle--IsText="true" menu-toggle--IsDisabled="true"}}
  {{#> menu-toggle-text}}
    Disabled
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--IsPlain="true" menu-toggle--IsText="true"}}
  {{#> menu-toggle-text}}
    Custom text
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}
```

### With icon/image and text
```hbs
{{#> menu-toggle menu-toggle--IsSecondary="true"}}
  {{#> menu-toggle-icon}}
    <i class="fas fa-cog" aria-hidden="true"></i>
  {{/menu-toggle-icon}}
  {{#> menu-toggle-text}}
    Icon
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--IsSecondary="true" menu-toggle--IsDisabled="true"}}
  {{#> menu-toggle-icon}}
    <i class="fas fa-cog" aria-hidden="true"></i>
  {{/menu-toggle-icon}}
  {{#> menu-toggle-text}}
    Icon
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}
```

### With avatar and text
```hbs
{{#> menu-toggle}}
  {{#> menu-toggle-icon}}
    {{> avatar avatar--modifier="pf-m-light" avatar--attribute='src="/assets/images/img_avatar-light.svg" alt="Avatar image light"'}}
  {{/menu-toggle-icon}}
  {{#> menu-toggle-text}}
    Ned Username
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--IsExpanded="true"}}
  {{#> menu-toggle-icon}}
    {{> avatar avatar--modifier="pf-m-light" avatar--attribute='src="/assets/images/img_avatar-light.svg" alt="Avatar image light"'}}
  {{/menu-toggle-icon}}
  {{#> menu-toggle-text}}
    Ned Username
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--IsDisabled="true"}}
  {{#> menu-toggle-icon}}
    {{> avatar avatar--modifier="pf-m-light" avatar--attribute='src="/assets/images/img_avatar-light.svg" alt="Avatar image light"'}}
  {{/menu-toggle-icon}}
  {{#> menu-toggle-text}}
    Ned Username
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}

```

### Full height
```hbs
{{#> menu-toggle menu-toggle--modifier="pf-m-full-height"}}
  {{#> menu-toggle-text}}
    Full height
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}
```

### Accessibility
| Class | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="true"` | `.pf-c-menu-toggle` | Indicates that the menu toggle component is in the expanded state. |
| `aria-expanded="false"` | `.pf-c-menu-toggle` | Indicates that the menu toggle component is in the collapsed state. |
| `aria-label="Descriptive text"` | `.pf-c-menu-toggle.pf-m-plain` | Gives the plain menu toggle component an accessible label. |
| `disabled` | `.pf-c-menu-toggle` | Indicates that the menu toggle component is disabled. |

### Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-c-menu-toggle` | `<button>` | Initiates the menu toggle component. |
| `.pf-c-menu-toggle__icon` | `<span>` | Defines the menu toggle component icon/image. |
| `.pf-c-menu-toggle__text` | `<span>` | Defines the menu toggle component text. |
| `.pf-c-menu-toggle__count` | `<span>` | Defines the menu toggle component count. |
| `.pf-c-menu-toggle__controls` | `<span>` | Defines the menu toggle component controls. |
| `.pf-c-menu-toggle__toggle-icon` | `<span>` | Defines the menu toggle component toggle/arrow icon. |
| `.pf-m-primary` | `.pf-c-menu-toggle` | Modifies the menu toggle component for the primary variation. |
| `.pf-m-secondary` | `.pf-c-menu-toggle` | Modifies the menu toggle component for the secondary variation. |
| `.pf-m-text` | `.pf-c-menu-toggle` | Modifies the menu toggle component for the text variation. |
| `.pf-m-plain` | `.pf-c-menu-toggle` | Modifies the menu toggle component for the plain variation. |
| `.pf-m-expanded` | `.pf-c-menu-toggle` | Modifies the menu toggle component for the expanded state. |
| `.pf-m-full-height` | `.pf-c-menu-toggle` | Modifies the menu toggle component to full height of parent. |
