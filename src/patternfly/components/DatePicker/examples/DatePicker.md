---
id: 'Date picker'
section: components
subsection: date-and-time
cssPrefix: pf-v6-c-date-picker
---

import './DatePicker.css'

## Examples

### Basic
```hbs
{{#> date-picker date-picker--id="basic"}}
  {{#> input-group}}
    {{#> input-group-item input-group-item--IsFill=true}}
      {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="2020-03-05" id="' date-picker--id '-input" name="' date-picker--id '-input" aria-label="Date picker"')}}
    {{/input-group-item}}
    {{#> input-group-item}}
      {{> button button--IsControl=true button--IsIcon=true button--icon="calendar-alt" button--aria-label="Toggle date picker"}}
    {{/input-group-item}}
  {{/input-group}}
{{/date-picker}}
```

### Helper text
```hbs
{{#> date-picker date-picker--id="helper-text" helper-text--value="Select a date"}}
  {{#> input-group}}
    {{#> input-group-item input-group-item--IsFill=true}}
      {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="2020-03-05" id="' date-picker--id '-input" name="' date-picker--id '-input" aria-label="Date picker"')}}
    {{/input-group-item}}
    {{#> input-group-item}}
      {{> button button--IsControl=true button--IsIcon=true button--icon="calendar-alt" button--aria-label="Toggle date picker"}}
    {{/input-group-item}}
  {{/input-group}}
{{/date-picker}}
```

### Invalid
```hbs
{{#> date-picker date-picker--id="invalid" helper-text--value="Invalid date" helper-text-item--IsError="true" helper-text-item--HasIcon=true}}
  {{#> input-group}}
    {{#> input-group-item input-group-item--IsFill=true}}
      {{> form-control controlType="input" input="true" form-control--IsError="true" form-control--attribute=(concat 'aria-invalid="true" type="text" value="2020-03-05" id="' date-picker--id '-input" name="' date-picker--id '-input" aria-label="Date picker"')}}
    {{/input-group-item}}
    {{#> input-group-item}}
      {{> button button--IsControl=true button--IsIcon=true button--icon="calendar-alt" button--aria-label="Toggle date picker"}}
    {{/input-group-item}}
  {{/input-group}}
{{/date-picker}}
```

### Expanded
```hbs
{{#> date-picker date-picker--id="expanded" date-picker--IsExpanded="true"}}
  {{#> input-group}}
    {{#> input-group-item input-group-item--IsFill=true}}
      {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="2020-03-05" id="' date-picker--id '-input" name="' date-picker--id '-input" aria-label="Date picker"')}}
    {{/input-group-item}}
    {{#> input-group-item}}
      {{> button button--IsControl=true button--IsIcon=true button--icon="calendar-alt" button--aria-label="Toggle date picker"}}
    {{/input-group-item}}
  {{/input-group}}
{{/date-picker}}
```

### Custom width input
```hbs
{{#> date-picker date-picker--id="custom-width-input" date-picker--attribute='style="--pf-v6-c-date-picker__input--c-form-control--Width: 220px;"'}}
  {{#> input-group}}
    {{#> input-group-item input-group-item--IsFill=true}}
      {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="November 20, 2020" id="' date-picker--id '-input" name="' date-picker--id '-input" aria-label="Date picker"')}}
    {{/input-group-item}}
    {{#> input-group-item}}
      {{> button button--IsControl=true button--IsIcon=true button--icon="calendar-alt" button--aria-label="Toggle date picker"}}
    {{/input-group-item}}
  {{/input-group}}
{{/date-picker}}
```

### Custom width input based on number of characters
```hbs
{{#> date-picker date-picker--id="custom-width-input-based-on-number-of-characters" date-picker--attribute='style="--pf-v6-c-date-picker__input--c-form-control--width-chars: 18;"'}}
  {{#> input-group}}
    {{#> input-group-item input-group-item--IsFill=true}}
      {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="November 20, 2020" id="' date-picker--id '-input" name="' date-picker--id '-input" aria-label="Date picker"')}}
    {{/input-group-item}}
    {{#> input-group-item}}
      {{> button button--IsControl=true button--IsIcon=true button--icon="calendar-alt" button--aria-label="Toggle date picker"}}
    {{/input-group-item}}
  {{/input-group}}
{{/date-picker}}
```

## Documentation
### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-date-picker` | `<div>` | Initiates the date picker component. **Required** |
| `.pf-v6-c-date-picker__input` | `<div>` | Initiates the date picker input container. **Required** |
| `.pf-v6-c-date-picker__helper-text` | `<div>` | Initiates the date picker helper text. |
| `.pf-v6-c-date-picker__calendar` | `<div>` | Initiates an optional date picker calendar container. **Note:** Required in the react date picker component. |
| `.pf-m-top` | `.pf-v6-c-date-picker` | Modifies to display the calendar above the date picker. |
| `.pf-m-align-right` | `.pf-v6-c-date-picker__calendar` | Modifies the calendar to align the calendar to the right edge of the date picker. |
| `.pf-m-static` | `.pf-v6-c-date-picker__calendar` | Modifies the calendar to be statically positioned to support custom positioning. |
