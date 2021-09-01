---
id: 'Progress stepper'
beta: true
section: components
cssPrefix: pf-c-progress-stepper
---

## Examples
<!-- TODO: Other examples -->
### Basic
```hbs
<!-- progress-stepper--IsVertical="true" progress-stepper--IsCenter="true" progress-stepper--IsCompact="true" -->
{{#> progress-stepper }}
  {{#> progress-stepper-step progress-stepper-step--IsComplete="true"}}
    {{#> progress-stepper-step-icon}}
      All done
    {{/ progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        All done
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsInProcess="true"}}
    {{#> progress-stepper-step-icon}}
      icon
    {{/ progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        In process
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsInProcessAlt="true"}}
    {{#> progress-stepper-step-icon}}
      icon
    {{/progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        In process
      {{/progress-stepper-step-title}}
      {{#> progress-stepper-step-description}}
        the alt way
      {{/progress-stepper-step-description}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsFailure="true" progress-stepper-step--IsCurrent="true"}}
    {{#> progress-stepper-step-icon}}
      icon
    {{/progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        current step, fail!
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#>progress-stepper-step progress-stepper-step--IsIssue="true"}}
    {{#> progress-stepper-step-icon}}
      4
    {{/progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        Uh oh, this one is long and there's an issue
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsPendingAlt="true"}}
    {{#> progress-stepper-step-icon}}
      icon
    {{/progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        Pending
      {{/progress-stepper-step-title}}
      {{#> progress-stepper-step-description}}
        the alternate way
      {{/progress-stepper-step-description}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
  {{#> progress-stepper-step progress-stepper-step--IsPending="true"}}
    {{#> progress-stepper-step-icon}}
    {{/progress-stepper-step-icon}}
    {{#> progress-stepper-step-main}}
      {{#> progress-stepper-step-title}}
        Last thing
      {{/progress-stepper-step-title}}
    {{/progress-stepper-step-main}}
  {{/progress-stepper-step}}
{{/progress-stepper}}
```

## Documentation
