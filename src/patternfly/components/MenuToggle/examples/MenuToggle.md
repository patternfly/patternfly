---
id: 'Menu toggle'
beta: true
section: components
cssPrefix: pf-c-menu-toggle
---

import './MenuToggle.css'

## Examples

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

### Split button (checkbox)
```hbs
{{#> menu-toggle menu-toggle--id="split-button-checkbox-disabled-example" menu-toggle--IsDisabled="true" menu-toggle--IsDiv="true" menu-toggle--IsSplitButton="true"}}
  {{> menu-toggle--check menu-toggle--check--IsStandalone="true"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--id="split-button-checkbox-example" menu-toggle--IsDiv="true" menu-toggle--IsSplitButton="true"}}
  {{> menu-toggle--check menu-toggle--check--IsStandalone="true"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--id="split-button-checkbox-expanded-example" menu-toggle--IsExpanded="true" menu-toggle--IsDiv="true" menu-toggle--IsSplitButton="true"}}
  {{> menu-toggle--check menu-toggle--check--IsStandalone="true"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}
```

### Split button (checkbox with toggle text)
```hbs
{{#> menu-toggle menu-toggle--id="split-button-checkbox-with-toggle-text-disabled-example" menu-toggle--IsDiv="true" menu-toggle--IsSplitButton="true" menu-toggle--IsDisabled="true"}}
  {{> menu-toggle--check menu-toggle--check--text="10 selected" check--IsDisabled="true"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--id="split-button-checkbox-with-toggle-text-example" menu-toggle--IsDiv="true" menu-toggle--IsSplitButton="true"}}
  {{> menu-toggle--check menu-toggle--check--text="10 selected"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--id="split-button-checkbox-with-toggle-text-expanded-example" menu-toggle--IsDiv="true" menu-toggle--IsSplitButton="true" menu-toggle--IsExpanded="true"}}
  {{> menu-toggle--check menu-toggle--check--text="10 selected"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}
```


### Split button, primary
```hbs
{{#> menu-toggle menu-toggle--modifier="pf-m-primary" menu-toggle--id="split-button-checkbox-primary-disabled-example"  menu-toggle--IsDiv="true" menu-toggle--IsSplitButton="true" menu-toggle--IsDisabled="true"}}
  {{> menu-toggle--check menu-toggle--check--text="10 selected" check--IsDisabled="true"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--modifier="pf-m-primary" menu-toggle--id="split-button-checkbox-primary-example" menu-toggle--IsDiv="true" menu-toggle--IsSplitButton="true"}}
  {{> menu-toggle--check menu-toggle--check--text="10 selected" check--IsDisabled="true"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--modifier="pf-m-primary" menu-toggle--id="split-button-checkbox-primary-expanded-example" menu-toggle--IsDiv="true" menu-toggle--IsSplitButton="true" menu-toggle--IsExpanded="true"}}
  {{> menu-toggle--check menu-toggle--check--text="10 selected" check--IsDisabled="true"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}
```

### Split button, secondary
```hbs
{{#> menu-toggle menu-toggle--modifier="pf-m-secondary" menu-toggle--id="split-button-checkbox-secondary-disabled-example"  menu-toggle--IsDiv="true" menu-toggle--IsSplitButton="true" menu-toggle--IsDisabled="true"}}
  {{> menu-toggle--check menu-toggle--check--text="10 selected" check--IsDisabled="true"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--modifier="pf-m-secondary" menu-toggle--id="split-button-checkbox-secondary-example" menu-toggle--IsDiv="true" menu-toggle--IsSplitButton="true"}}
  {{> menu-toggle--check menu-toggle--check--text="10 selected" check--IsDisabled="true"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--modifier="pf-m-secondary" menu-toggle--id="split-button-checkbox-secondary-expanded-example" menu-toggle--IsDiv="true" menu-toggle--IsSplitButton="true" menu-toggle--IsExpanded="true"}}
  {{> menu-toggle--check menu-toggle--check--text="10 selected" check--IsDisabled="true"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}
```

### Split button (action)
```hbs
{{#> menu-toggle menu-toggle--id="split-button-checkbox-with-toggle-action-disabled-example" menu-toggle--IsSplitButton="true" menu-toggle--IsDiv="true" menu-toggle--IsAction="true" menu-toggle--IsDisabled="true"}}
  {{#> menu-toggle-button}}
    Action
  {{/menu-toggle-button}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--id="split-button-checkbox-with-toggle-action-example" menu-toggle--IsSplitButton="true" menu-toggle--IsDiv="true" menu-toggle--IsAction="true"}}
  {{#> menu-toggle-button}}
    Action
  {{/menu-toggle-button}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--id="split-button-checkbox-with-toggle-action-expanded-example" menu-toggle--IsSplitButton="true" menu-toggle--IsDiv="true" menu-toggle--IsAction="true" menu-toggle--IsExpanded="true"}}
  {{#> menu-toggle-button}}
    Action
  {{/menu-toggle-button}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}
```

### Split button, primary (action)
```hbs
{{#> menu-toggle menu-toggle--modifier="pf-m-primary" menu-toggle--id="split-button-checkbox-with-toggle-action-primary-disabled-example" menu-toggle--IsDiv="true" menu-toggle--IsSplitButton="true" menu-toggle--IsAction="true" menu-toggle--IsDisabled="true"}}
  {{#> menu-toggle-button}}
    Action
  {{/menu-toggle-button}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--modifier="pf-m-primary" menu-toggle--id="split-button-checkbox-with-toggle-action-primary-example" menu-toggle--IsDiv="true" menu-toggle--IsSplitButton="true" menu-toggle--IsAction="true"}}
  {{#> menu-toggle-button}}
    Action
  {{/menu-toggle-button}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--modifier="pf-m-primary" menu-toggle--id="split-button-checkbox-with-toggle-action-primary-expanded-example" menu-toggle--IsDiv="true" menu-toggle--IsSplitButton="true" menu-toggle--IsAction="true" menu-toggle--IsExpanded="true"}}
  {{#> menu-toggle-button}}
    Action
  {{/menu-toggle-button}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}
```

### Split button, secondary (action)
```hbs
{{#> menu-toggle menu-toggle--modifier="pf-m-secondary" menu-toggle--id="split-button-checkbox-with-toggle-action-secondary-disabled-example" menu-toggle--IsDiv="true" menu-toggle--IsSplitButton="true" menu-toggle--IsAction="true" menu-toggle--IsDisabled="true"}}
  {{#> menu-toggle-button}}
    Action
  {{/menu-toggle-button}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--modifier="pf-m-secondary" menu-toggle--id="split-button-checkbox-with-toggle-action-secondary-example" menu-toggle--IsDiv="true" menu-toggle--IsSplitButton="true" menu-toggle--IsAction="true"}}
  {{#> menu-toggle-button}}
    Action
  {{/menu-toggle-button}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--modifier="pf-m-secondary" menu-toggle--id="split-button-checkbox-with-toggle-action-secondary-expanded-example" menu-toggle--IsDiv="true" menu-toggle--IsSplitButton="true" menu-toggle--IsAction="true" menu-toggle--IsExpanded="true"}}
  {{#> menu-toggle-button}}
    Action
  {{/menu-toggle-button}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
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

### Typeahead
```hbs
{{#> menu-toggle menu-toggle--id="typeahead-example" menu-toggle--IsDiv="true" menu-toggle--IsTypeahead="true" menu-toggle--modifier="pf-m-full-width"}}
  {{#> text-input-group text-input-group--modifier="pf-m-plain"}}
    {{#> text-input-group-main}}
      {{#> text-input-group-text}}
        {{> text-input-group-text-input}}
      {{/text-input-group-text}}
    {{/text-input-group-main}}
    {{#> text-input-group-utilities}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Clear input"'}}
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      {{/button}}
    {{/text-input-group-utilities}}
  {{/text-input-group}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}
```

### Accessibility
| Class | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="true"` | `.pf-c-menu-toggle`, `.pf-c-menu-toggle__button` | Indicates that the menu toggle component is in the expanded state. |
| `aria-expanded="false"` | `.pf-c-menu-toggle`, `.pf-c-menu-toggle__button` | Indicates that the menu toggle component is in the collapsed state. |
| `aria-label="Descriptive text"` | `.pf-c-menu-toggle.pf-m-plain` | Gives the plain menu toggle component an accessible label. |
| `disabled` | `.pf-c-menu-toggle`, `.pf-c-menu-toggle__button` | Indicates that the menu toggle component is disabled. |

### Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-c-menu-toggle` | `<button>` | Initiates the menu toggle component. |
| `.pf-c-menu-toggle__icon` | `<span>` | Defines the menu toggle component icon/image. |
| `.pf-c-menu-toggle__text` | `<span>` | Defines the menu toggle component text. |
| `.pf-c-menu-toggle__count` | `<span>` | Defines the menu toggle component count. |
| `.pf-c-menu-toggle__controls` | `<span>` | Defines the menu toggle component controls. |
| `.pf-c-menu-toggle__toggle-icon` | `<span>` | Defines the menu toggle component toggle/arrow icon. |
| `.pf-c-menu-toggle__button` | `<button>` | Initiates the menu toggle button. |
| `.pf-m-split-button` | `.pf-c-menu-toggle` | Modifies the menu toggle component for the split button variation. |
| `.pf-m-action` | `.pf-c-menu-toggle.pf-m-split-button` | Modifies the menu toggle component for the action, split button variation. |
| `.pf-m-disabled` | `.pf-c-menu-toggle` | Modifies the menu toggle component for the disabled variation. |
| `.pf-m-primary` | `.pf-c-menu-toggle` | Modifies the menu toggle component for the primary variation. |
| `.pf-m-secondary` | `.pf-c-menu-toggle` | Modifies the menu toggle component for the secondary variation. |
| `.pf-m-text` | `.pf-c-menu-toggle` | Modifies the menu toggle component for the text variation. |
| `.pf-m-plain` | `.pf-c-menu-toggle` | Modifies the menu toggle component for the plain variation. |
| `.pf-m-expanded` | `.pf-c-menu-toggle` | Modifies the menu toggle component for the expanded state. |
| `.pf-m-full-height` | `.pf-c-menu-toggle` | Modifies the menu toggle component to full height of parent. |
