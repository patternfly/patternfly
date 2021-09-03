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
<!-- progress-stepper--IsVertical="true" progress-stepper--IsCenter="true" progress-stepper--IsCompact="true" -->
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
<!-- progress-stepper--IsVertical="true" progress-stepper--IsCenter="true" progress-stepper--IsCompact="true" -->
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
<!-- progress-stepper--IsVertical="true" progress-stepper--IsCenter="true" progress-stepper--IsCompact="true" -->
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
<!-- progress-stepper--IsVertical="true" progress-stepper--IsCenter="true" progress-stepper--IsCompact="true" -->
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
<!-- progress-stepper--IsVertical="true" progress-stepper--IsCenter="true" progress-stepper--IsCompact="true" -->
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


## Documentation

### Overview
The progress stepper is intended to show progress through a finite number of discrete steps.

Add a modifier class to the progress stepper to change the orientation or alignment: `.pf-m-center`, `.pf-m-vertical`, or `.pf-m-compact`.

Steps can be modified with `.pf-m-success`, `.pf-m-warning`, `.pf-m-danger`, and `.pf-m-info` to change their color. Use modifiers `.pf-m-pending` and `.pf-m-current` to indicate progress through the steps.
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="Completed step"` | `.pf-c-progress-stepper__step` |  Indicates the step is complete. |
| `aria-label="Current step"` | `.pf-c-progress-stepper__step` |  Indicates the current step. |
| `aria-label="Pending step"` | `.pf-c-progress-stepper__step` |  Indicates the step is pending. |
| `aria-label="In process step"` | `.pf-c-progress-stepper__step` |  Indicates the step is in process. |
| `aria-label="Step with issue"` | `.pf-c-progress-stepper__step` |  Indicates the step has a warning. |
| `aria-label="Step with failure"` | `.pf-c-progress-stepper__step` |  Indicates the step has a failure. |
| `aria-label="Information alert"` | `.pf-c-progress-stepper__step` |  Indicates the information alert. |
| `aria-hidden="true"` | `.pf-c-progress-stepper__step-icon <i>` |  Hides icon for assistive technologies. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-progress-stepper` | `<ol>` | Applies default progress stepper styling.  **Required** |
| `.pf-c-progress-stepper__step` | `<li>` | Defines each step of the progress stepper. **Required** |
| `.progress-stepper-step-connector` | `<div>` | Creates the connecting line between steps **Required** |
| `.progress-stepper-step-icon` | `<span>` | Creates the step node and contains the icon designating the type of step. This element is required, but may be empty if no icon is used for the step. **Required** |
| `.progress-stepper-step-main` | `<div>` | Contains the main text content of the step. This element is required, but may be empty if title and description are not used. **Required** |
| `.progress-stepper-step-title` | `<div>` | Contains the title of the step. |
| `.progress-stepper-step-description` | `<div>` | Contains the description of the step. |

### Modifiers
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-center`| `.pf-c-progress-stepper` | Centers the text content of each step. |
| `.pf-m-vertical`| `.pf-c-progress-stepper` | Changes the orientation to show steps vertically. |
| `.pf-m-compact`| `.pf-c-progress-stepper` | Changes the styling to be compact. The title of the current step is shown above the steps. |
| `.pf-m-success`| `.pf-c-progress-stepper__step` | Changes the color of the icon to the success color. |
| `.pf-m-warning`| `.pf-c-progress-stepper__step` | Changes the color of the icon to the warning color. |
| `.pf-m-danger`| `.pf-c-progress-stepper__step` | Changes the color of the icon to the danger color. |
| `.pf-m-info`| `.pf-c-progress-stepper__step` | Changes the color of the icon to the info color. |
