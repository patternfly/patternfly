---
id: 'Menu toggle'
section: components
subsection: menus
cssPrefix: pf-v6-c-menu-toggle
---

import './MenuToggle.css'

## Examples

### Testing
```hbs
<div class="test-container">
{{> menu-toggle menu-toggle--text='Testing the button, this button has long text' menu-toggle--count='4 selected'}}
{{> menu-toggle menu-toggle--IsAction=true menu-toggle--text='Action' menu-toggle--IsSecondary=true menu-toggle--IsSplitButton=true menu-toggle--check=true check--IsStandalone=true}}
{{> menu-toggle menu-toggle--IsPrimary=true menu-toggle--text='Primary button'}}
{{> menu-toggle menu-toggle--IsPlain=true menu-toggle--IsExpanded=true menu-toggle--attribute='aria-label="Actions"' menu-toggle--HasKebab=true}}
{{> menu-toggle menu-toggle--IsPlain=true menu-toggle--IsSmall=true menu-toggle--IsExpanded=true menu-toggle--attribute='aria-label="Actions"' menu-toggle--HasKebab=true}}
{{#> input-group}}
  {{#> input-group-item input-group-item--IsFill=true}}
    {{> text-input-group--search-input text-input-group--id="text-input-group-search-input-group-advanced-search" text-input-group--value="username:root firstname:ned"}}
  {{/input-group-item}}
  {{#> input-group-item}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-expanded="false" aria-label="Advanced search"'}}
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    {{/button}}
  {{/input-group-item}}
  {{#> input-group-item}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Search"' button--IsSubmit="true"}}
      <i class="fas fa-arrow-right" aria-hidden="true"></i>
    {{/button}}
  {{/input-group-item}}
{{/input-group}}
{{#> clipboard-copy clipboard-copy--id="expandable-not-expanded-editable"}}
  {{#> clipboard-copy-group}}
    {{#> button button--modifier="pf-m-control" button--attribute=(concat 'id="' clipboard-copy--id '-toggle" aria-labelledby="' clipboard-copy--id '-toggle ' clipboard-copy--id '-text-input" aria-controls="' clipboard-copy--id '-content"')}}
      {{> clipboard-copy-toggle-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion." id="' clipboard-copy--id '-text-input" aria-label="Copyable input"')}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute=(concat 'aria-label="Copy to clipboard" id="' clipboard-copy--id '-copy-button" aria-labelledby="' clipboard-copy--id '-copy-button ' clipboard-copy--id '-text-input"')}}
      <i class="fas fa-copy" aria-hidden="true"></i>
    {{/button}}
  {{/clipboard-copy-group}}
  {{#> clipboard-copy-expandable-content clipboard-copy-expandable-content--attribute=(concat 'id="' clipboard-copy--id '-content"')}}
    This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.
  {{/clipboard-copy-expandable-content}}
{{/clipboard-copy}}
</div>
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
{{> menu-toggle menu-toggle--IsPlain=true menu-toggle--attribute='aria-label="Actions"' menu-toggle--HasKebab=true}}
&nbsp;
{{> menu-toggle menu-toggle--IsPlain=true menu-toggle--IsExpanded=true menu-toggle--attribute='aria-label="Actions"' menu-toggle--HasKebab=true}}
&nbsp;
{{> menu-toggle menu-toggle--IsPlain="true" menu-toggle--IsDisabled="true" menu-toggle--attribute='aria-label="Actions"' menu-toggle--HasKebab=true}}
```

### Plain with text
```hbs
{{#> menu-toggle menu-toggle--IsPlain="true" menu-toggle--IsText="true"}}
  {{#> menu-toggle-text}}
    Custom text
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--IsPlain=true menu-toggle--IsText=true menu-toggle--IsExpanded=true}}
  {{#> menu-toggle-text}}
    Custom text
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--IsPlain="true" menu-toggle--IsText="true" menu-toggle--IsDisabled="true"}}
  {{#> menu-toggle-text}}
    Disabled
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}
```

### Split button (checkbox)
```hbs
{{#> menu-toggle menu-toggle--id="split-button-checkbox-example" menu-toggle--IsSplitButton="true"}}
  {{> menu-toggle--check check--IsStandalone=true}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--id="split-button-checkbox-expanded-example" menu-toggle--IsExpanded="true" menu-toggle--IsSplitButton="true"}}
  {{> menu-toggle--check check--IsStandalone=true}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--id="split-button-checkbox-disabled-example" menu-toggle--IsDisabled="true" menu-toggle--IsSplitButton="true"}}
  {{> menu-toggle--check check--IsStandalone=true check--IsDisabled=true}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}
```

### Split button (checkbox with toggle text)
```hbs
{{#> menu-toggle menu-toggle--id="split-button-checkbox-with-toggle-text-example" menu-toggle--IsSplitButton="true"}}
  {{> menu-toggle--check check-label--text="10 selected"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--id="split-button-checkbox-with-toggle-text-expanded-example" menu-toggle--IsSplitButton="true" menu-toggle--IsExpanded="true"}}
  {{> menu-toggle--check check-label--text="10 selected"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--id="split-button-checkbox-with-toggle-text-disabled-example" menu-toggle--IsSplitButton="true" menu-toggle--IsDisabled="true"}}
  {{> menu-toggle--check check-label--text="10 selected" check--IsDisabled=true}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}
```

### Small
```hbs
{{> menu-toggle menu-toggle--IsPlain=true menu-toggle--IsSmall=true menu-toggle--attribute='aria-label="Actions"' menu-toggle--HasKebab=true}}
&nbsp;
{{> menu-toggle menu-toggle--IsPlain=true menu-toggle--IsSmall=true menu-toggle--IsExpanded=true menu-toggle--attribute='aria-label="Actions"' menu-toggle--HasKebab=true}}
&nbsp;
{{> menu-toggle menu-toggle--IsPlain=true menu-toggle--IsSmall=true menu-toggle--IsDisabled="true" menu-toggle--attribute='aria-label="Actions"' menu-toggle--HasKebab=true}}
```

### Small with text
```hbs
{{> menu-toggle menu-toggle--IsPlain=true menu-toggle--IsSmall=true menu-toggle--IsText=true menu-toggle--text='Collapsed'}}
&nbsp;
{{> menu-toggle menu-toggle--IsPlain=true menu-toggle--IsSmall=true menu-toggle--IsText=true menu-toggle--text='Expanded' menu-toggle--IsExpanded=true}}
&nbsp;
{{> menu-toggle menu-toggle--IsPlain=true menu-toggle--IsSmall=true menu-toggle--IsText=true  menu-toggle--text='Disabled' menu-toggle--IsDisabled=true}}
```

### Split button, primary
```hbs
{{#> menu-toggle menu-toggle--modifier="pf-m-primary" menu-toggle--id="split-button-checkbox-primary-example" menu-toggle--IsSplitButton="true"}}
  {{> menu-toggle--check check-label--text="10 selected"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--modifier="pf-m-primary" menu-toggle--id="split-button-checkbox-primary-expanded-example" menu-toggle--IsSplitButton="true" menu-toggle--IsExpanded="true"}}
  {{> menu-toggle--check check-label--text="10 selected"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--modifier="pf-m-primary" menu-toggle--id="split-button-checkbox-primary-disabled-example"  menu-toggle--IsSplitButton="true" menu-toggle--IsDisabled="true"}}
  {{> menu-toggle--check check-label--text="10 selected" check--IsDisabled=true}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}
```

### Split button, secondary
```hbs
{{#> menu-toggle menu-toggle--modifier="pf-m-secondary" menu-toggle--id="split-button-checkbox-secondary-example" menu-toggle--IsSplitButton="true"}}
  {{> menu-toggle--check check-label--text="10 selected"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--modifier="pf-m-secondary" menu-toggle--id="split-button-checkbox-secondary-expanded-example" menu-toggle--IsSplitButton="true" menu-toggle--IsExpanded="true"}}
  {{> menu-toggle--check check-label--text="10 selected"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--modifier="pf-m-secondary" menu-toggle--id="split-button-checkbox-secondary-disabled-example"  menu-toggle--IsSplitButton="true" menu-toggle--IsDisabled="true"}}
  {{> menu-toggle--check check-label--text="10 selected" check--IsDisabled=true}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}
```

### Split button (action)
```hbs
{{#> menu-toggle menu-toggle--id="split-button-checkbox-with-toggle-action-example" menu-toggle--IsSplitButton="true" menu-toggle--IsAction="true"}}
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

{{#> menu-toggle menu-toggle--id="split-button-checkbox-with-toggle-action-expanded-example" menu-toggle--IsSplitButton="true" menu-toggle--IsAction="true" menu-toggle--IsExpanded="true"}}
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

{{#> menu-toggle menu-toggle--id="split-button-checkbox-with-toggle-action-disabled-example" menu-toggle--IsSplitButton="true" menu-toggle--IsAction="true" menu-toggle--IsDisabled="true"}}
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
{{#> menu-toggle menu-toggle--modifier="pf-m-primary" menu-toggle--id="split-button-checkbox-with-toggle-action-primary-example" menu-toggle--IsSplitButton="true" menu-toggle--IsAction="true"}}
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

{{#> menu-toggle menu-toggle--modifier="pf-m-primary" menu-toggle--id="split-button-checkbox-with-toggle-action-primary-expanded-example" menu-toggle--IsSplitButton="true" menu-toggle--IsAction="true" menu-toggle--IsExpanded="true"}}
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

{{#> menu-toggle menu-toggle--modifier="pf-m-primary" menu-toggle--id="split-button-checkbox-with-toggle-action-primary-disabled-example" menu-toggle--IsSplitButton="true" menu-toggle--IsAction="true" menu-toggle--IsDisabled="true"}}
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
{{#> menu-toggle menu-toggle--modifier="pf-m-secondary" menu-toggle--id="split-button-checkbox-with-toggle-action-secondary-example" menu-toggle--IsSplitButton="true" menu-toggle--IsAction="true"}}
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

{{#> menu-toggle menu-toggle--modifier="pf-m-secondary" menu-toggle--id="split-button-checkbox-with-toggle-action-secondary-expanded-example" menu-toggle--IsSplitButton="true" menu-toggle--IsAction="true" menu-toggle--IsExpanded="true"}}
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

{{#> menu-toggle menu-toggle--modifier="pf-m-secondary" menu-toggle--id="split-button-checkbox-with-toggle-action-secondary-disabled-example" menu-toggle--IsSplitButton="true" menu-toggle--IsAction="true" menu-toggle--IsDisabled="true"}}
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
    {{> avatar}}
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
    {{> avatar}}
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
    {{> avatar}}
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

### Full width
```hbs
{{#> menu-toggle menu-toggle--modifier="pf-m-full-width"}}
  {{#> menu-toggle-text}}
    Full width
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
| `aria-expanded="true"` | `.pf-v6-c-menu-toggle`, `.pf-v6-c-menu-toggle__button` | Indicates that the menu toggle component is in the expanded state. |
| `aria-expanded="false"` | `.pf-v6-c-menu-toggle`, `.pf-v6-c-menu-toggle__button` | Indicates that the menu toggle component is in the collapsed state. |
| `aria-label="Descriptive text"` | `.pf-v6-c-menu-toggle`, `.pf-v6-c-menu-toggle.pf-m-plain` | Gives the menu toggle component an accessible label. Used whenever there is no text visible in the menu toggle. Often, plain modifiers are used when the menu toggle only contains an icon. |
| `disabled` | `.pf-v6-c-menu-toggle`, `.pf-v6-c-menu-toggle__button` | Indicates that the menu toggle component is disabled. |

### Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-v6-c-menu-toggle` | `<button>` | Initiates the menu toggle component. |
| `.pf-v6-c-menu-toggle__icon` | `<span>` | Defines the menu toggle component icon/image. |
| `.pf-v6-c-menu-toggle__text` | `<span>` | Defines the menu toggle component text. |
| `.pf-v6-c-menu-toggle__count` | `<span>` | Defines the menu toggle component count. |
| `.pf-v6-c-menu-toggle__controls` | `<span>` | Defines the menu toggle component controls. |
| `.pf-v6-c-menu-toggle__toggle-icon` | `<span>` | Defines the menu toggle component toggle/arrow icon. |
| `.pf-v6-c-menu-toggle__button` | `<button>` | Initiates the menu toggle button. |
| `.pf-m-split-button` | `.pf-v6-c-menu-toggle` | Modifies the menu toggle component for the split button variation. |
| `.pf-m-action` | `.pf-v6-c-menu-toggle.pf-m-split-button` | Modifies the menu toggle component for the action, split button variation. |
| `.pf-m-disabled` | `.pf-v6-c-menu-toggle` | Modifies the menu toggle component for the disabled variation. |
| `.pf-m-primary` | `.pf-v6-c-menu-toggle` | Modifies the menu toggle component for the primary variation. |
| `.pf-m-secondary` | `.pf-v6-c-menu-toggle` | Modifies the menu toggle component for the secondary variation. |
| `.pf-m-text` | `.pf-v6-c-menu-toggle` | Modifies the menu toggle component for the text variation. |
| `.pf-m-plain` | `.pf-v6-c-menu-toggle` | Modifies the menu toggle component for the plain variation. |
| `.pf-m-expanded` | `.pf-v6-c-menu-toggle` | Modifies the menu toggle component for the expanded state. |
| `.pf-m-full-height` | `.pf-v6-c-menu-toggle` | Modifies the menu toggle component to full height of parent. |
| `.pf-m-full-width` | `.pf-v6-c-menu-toggle` | Modifies the menu toggle component to full width of parent. |
