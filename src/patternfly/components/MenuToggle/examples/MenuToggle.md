---
id: 'Menu toggle'
section: components
subsection: menus
cssPrefix: pf-v6-c-menu-toggle
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

&nbsp;

{{#> menu-toggle menu-toggle--IsText=true menu-toggle--IsPlain=true menu-toggle--IsSmall=true}}
  {{#> menu-toggle-count}}
    {{#> badge badge--modifier="pf-m-unread"}}
      4
      <span class="pf-v6-screen-reader">additional items</span>
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

### Split toggle with checkbox

```hbs
{{#> menu-toggle menu-toggle--id="split-button-checkbox-example" menu-toggle--IsSplitButton="true"}}
  {{> menu-toggle--check menu-toggle--check--IsStandalone=true}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--id="split-button-checkbox-expanded-example" menu-toggle--IsExpanded="true" menu-toggle--IsSplitButton="true"}}
  {{> menu-toggle--check menu-toggle--check--IsStandalone=true}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--id="split-button-checkbox-disabled-example" menu-toggle--IsDisabled="true" menu-toggle--IsSplitButton="true" check--standalone--label="Select all items"}}
  {{> menu-toggle--check menu-toggle--check--IsStandalone=true check--IsDisabled=true}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}
```

### Split toggle with labeled checkbox

To add a label to a split toggle that will be linked to the checkbox, pass the text wrapped in `span.pf-v6-c-check__label` as a child to `label.pf-v6-c-check`. Clicking the text will update the checked state of the split toggle's checkbox.

```hbs
{{#> menu-toggle menu-toggle--id="split-button-checkbox-with-toggle-text-example" menu-toggle--IsSplitButton="true"}}
  {{> menu-toggle--check menu-toggle--check--text="Select all items"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--id="split-button-checkbox-with-toggle-text-expanded-example" menu-toggle--IsSplitButton="true" menu-toggle--IsExpanded="true"}}
  {{> menu-toggle--check menu-toggle--check--text="Select all items"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--id="split-button-checkbox-with-toggle-text-disabled-example" menu-toggle--IsSplitButton="true" menu-toggle--IsDisabled="true"}}
  {{> menu-toggle--check menu-toggle--check--text="Select all items" check--IsDisabled=true}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}
```

### Split toggle with checkbox and toggle text

To add a label to a split toggle that will be linked to the toggle button, pass the text wrapped in `span.pf-v6-c-menu-toggle__text` as a child to `button.pf-v6-c-menu-toggle__button.pf-m-text`. Clicking the text should trigger any click action on the toggle.

```hbs
{{#> menu-toggle menu-toggle--id="split-button-checkbox-with-toggle-button-text-example" menu-toggle--IsSplitButton="true"}}
  {{> menu-toggle--check menu-toggle--check--IsStandalone="true"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true" menu-toggle-button--IsTextToggle="true"}}
    {{#> menu-toggle-text}}
      Toggle button text
    {{/menu-toggle-text}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}
&nbsp;
{{#> menu-toggle menu-toggle--id="split-button-checkbox-with-toggle-button-text-expanded-example"  menu-toggle--IsSplitButton="true" menu-toggle--IsExpanded="true"}}
  {{> menu-toggle--check menu-toggle--check--IsStandalone="true"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true" menu-toggle-button--IsTextToggle="true"}}
    {{#> menu-toggle-text}}
      Toggle button text
    {{/menu-toggle-text}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}
&nbsp;
{{#> menu-toggle menu-toggle--id="split-button-checkbox-with-toggle-button-text-disabled-example" menu-toggle--IsSplitButton="true" menu-toggle--IsDisabled="true"}}
  {{> menu-toggle--check menu-toggle--check--IsStandalone="true"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true" menu-toggle-button--IsTextToggle="true"}}
    {{#> menu-toggle-text}}
      Toggle button text
    {{/menu-toggle-text}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}
```

### Split button, primary

```hbs
{{#> menu-toggle menu-toggle--modifier="pf-m-primary" menu-toggle--id="split-button-checkbox-primary-example" menu-toggle--IsSplitButton="true"}}
  {{> menu-toggle--check menu-toggle--check--text="Select all items"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--modifier="pf-m-primary" menu-toggle--id="split-button-checkbox-primary-expanded-example" menu-toggle--IsSplitButton="true" menu-toggle--IsExpanded="true"}}
  {{> menu-toggle--check menu-toggle--check--text="Select all items"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--modifier="pf-m-primary" menu-toggle--id="split-button-checkbox-primary-disabled-example"  menu-toggle--IsSplitButton="true" menu-toggle--IsDisabled="true"}}
  {{> menu-toggle--check menu-toggle--check--text="Select all items" check--IsDisabled=true}}
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
  {{> menu-toggle--check menu-toggle--check--text="Select all items"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--modifier="pf-m-secondary" menu-toggle--id="split-button-checkbox-secondary-expanded-example" menu-toggle--IsSplitButton="true" menu-toggle--IsExpanded="true"}}
  {{> menu-toggle--check menu-toggle--check--text="Select all items"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--modifier="pf-m-secondary" menu-toggle--id="split-button-checkbox-secondary-disabled-example"  menu-toggle--IsSplitButton="true" menu-toggle--IsDisabled="true"}}
  {{> menu-toggle--check menu-toggle--check--text="Select all items" check--IsDisabled=true}}
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
  {{#> menu-toggle-icon menu-toggle-icon--HasAvatar=true}}
    {{> avatar avatar--modifier="pf-m-sm"}}
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
  {{#> menu-toggle-icon menu-toggle-icon--HasAvatar=true}}
    {{> avatar avatar--modifier="pf-m-sm"}}
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
  {{#> menu-toggle-icon menu-toggle-icon--HasAvatar=true}}
    {{> avatar avatar--modifier="pf-m-sm"}}
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
      {{> button button--IsPlain=true button--IsIcon=true button--icon="times fa-fw" button--attribute='aria-label="Clear input"'}}
    {{/text-input-group-utilities}}
  {{/text-input-group}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}
```

### Status

```hbs
{{> menu-toggle menu-toggle--IsSuccess=true menu-toggle--text="Success"}}

<br/><br/>

{{> menu-toggle menu-toggle--IsWarning=true menu-toggle--text="Warning"}}

<br/><br/>

{{> menu-toggle menu-toggle--IsDanger=true menu-toggle--text="Danger"}}
```

### Placeholder

```hbs
{{#> menu-toggle menu-toggle--IsPlaceholder=true}}
  {{#> menu-toggle-text}}
    Placeholder text
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}
```

## Documentation

### Accessibility

| Class                           | Applied to                                                | Outcome                                                                                                                                                                                     |
| ------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aria-expanded="true"`          | `.pf-v6-c-menu-toggle`, `.pf-v6-c-menu-toggle__button`    | Indicates that the menu toggle component is in the expanded state.                                                                                                                          |
| `aria-expanded="false"`         | `.pf-v6-c-menu-toggle`, `.pf-v6-c-menu-toggle__button`    | Indicates that the menu toggle component is in the collapsed state.                                                                                                                         |
| `aria-label="Descriptive text"` | `.pf-v6-c-menu-toggle`, `.pf-v6-c-menu-toggle.pf-m-plain` | Gives the menu toggle component an accessible label. Used whenever there is no text visible in the menu toggle. Often, plain modifiers are used when the menu toggle only contains an icon. |
| `disabled`                      | `.pf-v6-c-menu-toggle`, `.pf-v6-c-menu-toggle__button`    | Indicates that the menu toggle component is disabled.                                                                                                                                       |

### Usage

| Class                               | Applied                                  | Outcome                                                                    |
| ----------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------- |
| `.pf-v6-c-menu-toggle`              | `<button>`                               | Initiates the menu toggle component.                                       |
| `.pf-v6-c-menu-toggle__icon`        | `<span>`                                 | Defines the menu toggle component icon/image.                              |
| `.pf-v6-c-menu-toggle__text`        | `<span>`                                 | Defines the menu toggle component text.                                    |
| `.pf-v6-c-menu-toggle__count`       | `<span>`                                 | Defines the menu toggle component count.                                   |
| `.pf-v6-c-menu-toggle__controls`    | `<span>`                                 | Defines the menu toggle component controls.                                |
| `.pf-v6-c-menu-toggle__toggle-icon` | `<span>`                                 | Defines the menu toggle component toggle/arrow icon.                       |
| `.pf-v6-c-menu-toggle__button`      | `<button>`                               | Initiates the menu toggle button.                                          |
| `.pf-m-split-button`                | `.pf-v6-c-menu-toggle`                   | Modifies the menu toggle component for the split button variation.         |
| `.pf-m-action`                      | `.pf-v6-c-menu-toggle.pf-m-split-button` | Modifies the menu toggle component for the action, split button variation. |
| `.pf-m-text`                        | `.pf-v6-c-menu-toggle__button`           | Modifies the menu toggle component split button variation with text.       |
| `.pf-m-disabled`                    | `.pf-v6-c-menu-toggle`                   | Modifies the menu toggle component for the disabled variation.             |
| `.pf-m-primary`                     | `.pf-v6-c-menu-toggle`                   | Modifies the menu toggle component for the primary variation.              |
| `.pf-m-secondary`                   | `.pf-v6-c-menu-toggle`                   | Modifies the menu toggle component for the secondary variation.            |
| `.pf-m-text`                        | `.pf-v6-c-menu-toggle`                   | Modifies the menu toggle component for the text variation.                 |
| `.pf-m-plain`                       | `.pf-v6-c-menu-toggle`                   | Modifies the menu toggle component for the plain variation.                |
| `.pf-m-expanded`                    | `.pf-v6-c-menu-toggle`                   | Modifies the menu toggle component for the expanded state.                 |
| `.pf-m-full-height`                 | `.pf-v6-c-menu-toggle`                   | Modifies the menu toggle component to full height of parent.               |
| `.pf-m-full-width`                  | `.pf-v6-c-menu-toggle`                   | Modifies the menu toggle component to full width of parent.                |
| `.pf-m-success`                     | `.pf-v6-c-menu-toggle`                   | Modifies the menu toggle component for the success state.                  |
| `.pf-m-warning`                     | `.pf-v6-c-menu-toggle`                   | Modifies the menu toggle component for the warning state.                  |
| `.pf-m-danger`                      | `.pf-v6-c-menu-toggle`                   | Modifies the menu toggle component for the danger state.                   |
| `.pf-m-placeholder`                 | `.pf-v6-c-menu-toggle`                   | Modifies the menu toggle text for placeholder styles.                      |
| `.pf-m-avatar`                      | `.pf-v6-c-menu-toggle__icon`             | Modifies the menu toggle icon for avatar styles.                           |
