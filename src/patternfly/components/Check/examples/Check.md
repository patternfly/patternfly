---
id: Checkbox
section: components
cssPrefix: pf-c-check
---

## Examples
### Basic
```hbs
{{#> check}}
  {{#> check-input check-input--attribute='id="check-basic" name="check-basic"'}}{{/check-input}}
  {{#> check-label check-label--attribute='for="check-basic"'}}Check{{/check-label}}
{{/check}}
```

### Checked
```hbs
{{#> check}}
  {{#> check-input check-input--attribute='id="check-checked" name="check-checked" checked'}}{{/check-input}}
  {{#> check-label check-label--attribute='for="check-checked"'}}Check checked{{/check-label}}
{{/check}}
```

### Label wrapping input
```hbs
{{#> check check--type="label" check--attribute='for="check-label-wrapping-input"'}}
  {{#> check-input check-input--attribute='id="check-label-wrapping-input" name="check-label-wrapping-input"'}}{{/check-input}}
  {{#> check-label check-label--type="span"}}Check label wraps input{{/check-label}}
{{/check}}
```

### Reversed
```hbs
{{#> check}}
  {{#> check-label check-label--attribute='for="check-reversed"'}}Check reversed{{/check-label}}
  {{#> check-input check-input--attribute='id="check-reversed" name="check-reversed"'}}{{/check-input}}
{{/check}}
```

### Disabled
```hbs
{{#> check}}
  {{#> check-input check-input--attribute='id="check-disabled" name="check-disabled" disabled'}}{{/check-input}}
  {{#> check-label check-label--modifier="pf-m-disabled" check-label--attribute='for="check-disabled"'}}Check disabled{{/check-label}}
{{/check}}
{{#> check}}
  {{#> check-input check-input--attribute='id="check-disabled-2" name="check-disabled-2" checked disabled'}}{{/check-input}}
  {{#> check-label check-label--modifier="pf-m-disabled" check-label--attribute='for="check-disabled-2"'}}Check disabled checked{{/check-label}}
{{/check}}
```

### With description
```hbs
{{#> check}}
  {{#> check-input check-input--attribute='id="check-with-description" name="check-with-description"'}}{{/check-input}}
  {{#> check-label check-label--attribute='for="check-with-description"'}}Check with description{{/check-label}}
  {{#> check-description}}
    Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS od GCP.
  {{/check-description}}
{{/check}}
```

## Documentation
### Overview
The Check component is provided for use cases outside of forms. If it is used without label text ensure some sort of label for assistive technologies. (for example: `aria-label`)

If you extend this component or modify the styles of this component, then make sure any hover styles defined are applied to the clickable elements, like `<input>` or `<label>` since hover styles are used to convey the clickable target area of an element. To maximize the target area, use the example html where the `<label>` is the wrapping element.

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `disabled` | `<input type="checkbox">` | Indicates that the element is unavailable and removes it from keyboard focus. **Required when input is disabled** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-check` | `<div>`, `<label>` |  Initiates the check component. **Required**  |
| `.pf-c-check__input` | `<input type="checkbox">` |  Initiates a check input. **Required**  |
| `.pf-c-check__label` | `<label>`, `<span>` |  Initiates a label. **Required**  |
| `.pf-c-check__description` | `<div>` |  Initiates a check description. |
| `.pf-m-disabled` | `.pf-c-check__label` |  Initiates a disabled style for labels. **Required when input is disabled** |
