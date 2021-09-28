---
id: 'Progress stepper'
beta: true
section: components
cssPrefix: pf-c-progress-stepper
---

## Examples
### Basic
```hbs
<!-- progress-stepper--IsVertical="true" progress-stepper--IsCenter="true" progress-stepper--IsCompact="true" -->
{{#> progress-stepper }}
  {{#> progress-stepper-step progress-stepper-step--IsComplete="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        First step
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsInProgress="true" progress-stepper-step--IsCurrent="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        Second step
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsPending="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        Third step
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
{{/progress-stepper}}
```

### Basic with descriptions
```hbs
{{#> progress-stepper }}
  {{#> progress-stepper-step progress-stepper-step--IsComplete="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        First step
      {{/progress-stepper-step-title}}
      {{#> progress-stepper-step-description}}
        This is the first thing to happen
      {{/progress-stepper-step-description}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsInProgress="true" progress-stepper-step--IsCurrent="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        Second step
      {{/progress-stepper-step-title}}
      {{#> progress-stepper-step-description}}
        This is the second thing to happen
      {{/progress-stepper-step-description}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsPending="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        Third step
      {{/progress-stepper-step-title}}
      {{#> progress-stepper-step-description}}
        This is the last thing to happen
      {{/progress-stepper-step-description}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
{{/progress-stepper}}
```

### Center aligned with descriptions
```hbs
{{#> progress-stepper  progress-stepper--IsCenter="true"}}
  {{#> progress-stepper-step progress-stepper-step--IsComplete="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        First step
      {{/progress-stepper-step-title}}
      {{#> progress-stepper-step-description}}
        This is the first thing to happen
      {{/progress-stepper-step-description}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsInProgress="true" progress-stepper-step--IsCurrent="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        Second step
      {{/progress-stepper-step-title}}
      {{#> progress-stepper-step-description}}
        This is the second thing to happen
      {{/progress-stepper-step-description}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsPending="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        Third step
      {{/progress-stepper-step-title}}
      {{#> progress-stepper-step-description}}
        This is the last thing to happen
      {{/progress-stepper-step-description}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
{{/progress-stepper}}
```

### Vertical with descriptions
```hbs
{{#> progress-stepper progress-stepper--IsVertical="true"}}
  {{#> progress-stepper-step progress-stepper-step--IsComplete="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        First step
      {{/progress-stepper-step-title}}
      {{#> progress-stepper-step-description}}
        This is the first thing to happen
      {{/progress-stepper-step-description}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsInProgress="true" progress-stepper-step--IsCurrent="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        Second step
      {{/progress-stepper-step-title}}
      {{#> progress-stepper-step-description}}
        This is the second thing to happen
      {{/progress-stepper-step-description}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsPending="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        Third step
      {{/progress-stepper-step-title}}
      {{#> progress-stepper-step-description}}
        This is the last thing to happen
      {{/progress-stepper-step-description}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
{{/progress-stepper}}
```

### Compact
```hbs
{{#> progress-stepper progress-stepper--IsCompact="true"}}
  {{#> progress-stepper-step progress-stepper-step--IsComplete="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        First step
      {{/progress-stepper-step-title}}
      {{#> progress-stepper-step-description}}
        This is the first thing to happen
      {{/progress-stepper-step-description}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsInProgress="true" progress-stepper-step--IsCurrent="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        Second step
      {{/progress-stepper-step-title}}
      {{#> progress-stepper-step-description}}
        This is the second thing to happen
      {{/progress-stepper-step-description}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsPending="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        Third step
      {{/progress-stepper-step-title}}
      {{#> progress-stepper-step-description}}
        This is the last thing to happen
      {{/progress-stepper-step-description}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
{{/progress-stepper}}
```

### Basic with an issue
```hbs
{{#> progress-stepper }}
  {{#> progress-stepper-step progress-stepper-step--IsComplete="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        First step
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsComplete="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        Second step
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#>progress-stepper-step progress-stepper-step--IsIssue="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        Third step
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsInProgress="true" progress-stepper-step--IsCurrent="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        Fourth step
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsPending="true"}}
    {{#> progress-stepper-step-icon}}
    {{/progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        Fifth step
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
{{/progress-stepper}}
```

### Basic with a failure
```hbs
{{#> progress-stepper }}
  {{#> progress-stepper-step progress-stepper-step--IsComplete="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        First step
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsComplete="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        Second step
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#>progress-stepper-step progress-stepper-step--IsComplete="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        Third step
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsFailure="true" progress-stepper-step--IsCurrent="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        Fourth step
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsPending="true"}}
    {{#> progress-stepper-step-icon}}
    {{/progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        Fifth step
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
{{/progress-stepper}}
```

### Basic with Patternfly icons
```hbs
{{#> progress-stepper }}
  {{#> progress-stepper-step progress-stepper-step--IsComplete="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        Successful completion
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsInProgressAlt="true" progress-stepper-step--IsCurrent="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        In process
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsPendingAlt="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        Pending
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
{{/progress-stepper}}
```
### With help text
```hbs
{{#> progress-stepper }}
  {{#> progress-stepper-step progress-stepper-step--IsComplete="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title progress-stepper-step-title--type="span" progress-stepper-step-title--IsHelp="true"}}
        First step
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsFailure="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title progress-stepper-step-title--type="span" progress-stepper-step-title--IsHelp="true"}}
        Second step
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsInProgress="true" progress-stepper-step--IsCurrent="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title progress-stepper-step-title--type="span" progress-stepper-step-title--IsHelp="true"}}
        Third step
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsPending="true"}}
    {{> progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        Fourth step
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
{{/progress-stepper}}
```



## Documentation

### Overview
The progress stepper is intended to show progress through a finite number of discrete steps.

Add a modifier class to the progress stepper to change the orientation or alignment: `.pf-m-center`, `.pf-m-vertical`, or `.pf-m-compact`.

Steps can be modified with `.pf-m-success`, `.pf-m-warning`, `.pf-m-danger`, and `.pf-m-info` to change their color. Use modifiers `.pf-m-pending` and `.pf-m-current` to indicate progress through the steps.
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="[State of the step]"` | `.pf-c-progress-stepper__step` |  Provides an accessible label for the step. |
| `aria-hidden="true"` | `.pf-c-progress-stepper__step-icon <i>` |  Hides icon for assistive technologies. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-progress-stepper` | `<ol>` | Applies default progress stepper styling. **Required** |
| `.pf-c-progress-stepper__step` | `<li>` | Defines each step of the progress stepper. **Required** |
| `.progress-stepper__step-connector` | `<div>` | Creates the connecting line between steps **Required** |
| `.progress-stepper__step-icon` | `<span>` | Creates the step node and contains the icon designating the type of step. This element is required, but may be empty if no icon is used for the step. **Required** |
| `.progress-stepper__step-main` | `<div>` | Contains the main text content of the step. This element is required, but may be empty if title and description are not used. **Required** |
| `.progress-stepper__step-title` | `<div>` | Contains the title of the step. |
| `.progress-stepper__step-description` | `<div>` | Contains the description of the step. |
| `.pf-m-center`| `.pf-c-progress-stepper` | Modifies to center each step. |
| `.pf-m-vertical`| `.pf-c-progress-stepper` | Modifies for vertical orientation. |
| `.pf-m-compact`| `.pf-c-progress-stepper` | Modifies for compact styling. |
| `.pf-m-success`| `.pf-c-progress-stepper__step` | Modifies for success styling. |
| `.pf-m-warning`| `.pf-c-progress-stepper__step` | Modifies for warning styling. |
| `.pf-m-danger`| `.pf-c-progress-stepper__step` | Modifies for danger styling. |
| `.pf-m-info`| `.pf-c-progress-stepper__step` | Modifies for info styling. |
| `.pf-m-current`| `.pf-c-progress-stepper__step` | Modifies styling for the current step. |
| `.pf-m-pending`| `.pf-c-progress-stepper__step` | Modifies styling for pending steps. |
| `.pf-m-help-text`| `.pf-c-progress-stepper__step-title` | Modifies styling for steps that have help text. |
 
