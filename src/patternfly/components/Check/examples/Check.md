---
title: Check
section: components
cssPrefix: pf-c-check
---

## Examples
```hbs title=Basic
{{#> check}}
  {{#> check-input check-input--attribute='id="check1" name="exampleCheck1"'}}{{/check-input}}
  {{#> check-label check-label--attribute='for="check1"'}}Check 1{{/check-label}}
{{/check}}
{{#> check}}
  {{#> check-label check-label--attribute='for="check1-rev"'}}Check 1 reversed{{/check-label}}
  {{#> check-input check-input--attribute='id="check1-rev" name="exampleCheck2"'}}{{/check-input}}
{{/check}}
{{#> check check--type="label" check--attribute='for="check2"'}}
  {{#> check-input check-input--attribute='id="check2" name="exampleCheck3"'}}{{/check-input}}
  {{#> check-label check-label--type="span"}}Check 2 label wraps input{{/check-label}}
{{/check}}
{{#> check}}
  {{#> check-input check-input--attribute='id="check3" name="exampleCheck4" checked'}}{{/check-input}}
  {{#> check-label check-label--attribute='for="check3"'}}Check 3 checked{{/check-label}}
{{/check}}
{{#> check}}
  {{#> check-input check-input--attribute='id="check4" name="exampleCheck5" disabled'}}{{/check-input}}
  {{#> check-label check-label--modifier="pf-m-disabled" check-label--attribute='for="check4"'}}Check 4 disabled{{/check-label}}
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
| `.pf-m-disabled` | `.pf-c-check__label` |  Initiates a disabled style for labels. **Required when input is disabled** |