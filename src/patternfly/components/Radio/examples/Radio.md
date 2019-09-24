---
title: Radio
section: components
cssPrefix: pf-c-radio
---

```hbs title=Radio-example
{{#> radio}}
  {{#> radio-input radio-input--attribute='id="radio1" name="exampleRadio1"'}}{{/radio-input}}
  {{#> radio-label radio-label--attribute='for="radio1"'}}Radio 1{{/radio-label}}
{{/radio}}
{{#> radio}}
  {{#> radio-label radio-label--attribute='for="radio1-rev"'}}Radio 1 reversed{{/radio-label}}
  {{#> radio-input radio-input--attribute='id="radio1-rev" name="exampleRadio2"'}}{{/radio-input}}
{{/radio}}
{{#> radio radio--type="label" radio--attribute='for="radio2"'}}
  {{#> radio-input radio-input--attribute='id="radio2" name="exampleRadio3"'}}{{/radio-input}}
  {{#> radio-label radio-label--type="span"}}Radio 2 label wraps input{{/radio-label}}
{{/radio}}
{{#> radio}}
  {{#> radio-input radio-input--attribute='id="radio3" name="exampleRadio4" checked'}}{{/radio-input}}
  {{#> radio-label radio-label--attribute='for="radio3"'}}Radio 3 checked{{/radio-label}}
{{/radio}}
{{#> radio}}
  {{#> radio-input radio-input--attribute='id="radio4" name="exampleRadio5" disabled'}}{{/radio-input}}
  {{#> radio-label radio-label--modifier="pf-m-disabled" radio-label--attribute='for="radio4"'}}Radio 4 disabled{{/radio-label}}
{{/radio}}
```

# Documentation
## Overview

The Radio component is provided for use cases outside of forms. If it is used without label text ensure some sort of label for assistive technologies. (for example: `aria-label`)

If you extend this component or modify the styles of this component, then make sure any hover styles defined are applied to the clickable elements, like `<input>` or `<label>` since hover styles are used to convey the clickable target area of an element. To maximize the target area, use the example html where the `<label>` is the wrapping element.

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `disabled` | `<input type="radio">` | Indicates that the element is unavailable and removes it from keyboard focus. **Required when input is disabled** |

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-radio` | `<div>`, `<label>` |  Initiates the radio component. **Required**  |
| `.pf-c-radio__input` | `<input type="radio">` |  Initiates a radio input. **Required**  |
| `.pf-c-radio__label` | `<label>`, `<span>` |  Initiates a label. **Required**  |
| `.pf-m-disabled` | `.pf-c-radio__label` |  Initiates a disabled style for labels. **Required when input is disabled** |