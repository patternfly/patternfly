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
  {{#> progress-stepper-step progress-stepper-step--IsInProcess="true" progress-stepper-step--IsCurrent="true"}}
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
  {{#> progress-stepper-step progress-stepper-step--IsInProcess="true" progress-stepper-step--IsCurrent="true"}}
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
  {{#> progress-stepper-step progress-stepper-step--IsInProcess="true" progress-stepper-step--IsCurrent="true"}}
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
  {{#> progress-stepper-step progress-stepper-step--IsInProcess="true" progress-stepper-step--IsCurrent="true"}}
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
  {{#> progress-stepper-step progress-stepper-step--IsInProcess="true" progress-stepper-step--IsCurrent="true"}}
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
  {{#> progress-stepper-step progress-stepper-step--IsInProcess="true" progress-stepper-step--IsCurrent="true"}}
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
  {{#> progress-stepper-step progress-stepper-step--IsInProcessAlt="true" progress-stepper-step--IsCurrent="true"}}
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
