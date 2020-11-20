---
id: 'Date picker'
beta: true
section: components
cssPrefix: pf-c-date-picker
---

import './DatePicker.css'

## Examples

### Basic
```hbs
{{#> date-picker date-picker--id="basic"}}
  {{#> input-group}}
    {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="03/05/2020" id="' date-picker--id '-input" name="' date-picker--id '-input" aria-label="Date picker"')}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Toggle date picker"'}}
      <i class="fas fa-calendar-alt" aria-hidden="true"></i>
    {{/button}}
  {{/input-group}}
{{/date-picker}}
```

### Helper text
```hbs
{{#> date-picker date-picker--id="helper-text" date-picker-helper-text--text="Select a date."}}
  {{> form-control controlType="input" input="true" form-control--modifier="pf-m-icon pf-m-calendar" form-control--attribute=(concat 'type="text" value="03/05/2020" id="' date-picker--id '-input" name="' date-picker--id '-input" aria-label="Basic date picker example"')}}
{{/date-picker}}
```

### Invalid
```hbs
{{#> date-picker date-picker--id="invalid" date-picker-helper-text--text="Invalid date selected." date-picker-helper-text--IsError="true"}}
  {{> form-control controlType="input" input="true" form-control--modifier="pf-m-icon pf-m-calendar" form-control--attribute=(concat 'aria-invalid="true" type="text" value="03/05/2020" id="' date-picker--id '-input" name="' date-picker--id '-input" aria-label="Basic date picker example"')}}
{{/date-picker}}
```

### Expanded
```hbs
{{#> date-picker date-picker--id="expanded" date-picker--IsExpanded="true"}}
  {{> form-control controlType="input" input="true" form-control--modifier="pf-m-icon pf-m-calendar pf-m-expanded" form-control--attribute=(concat 'type="text" value="03/05/2020" id="' date-picker--id '-input" name="' date-picker--id '-input" aria-label="Expanded date picker example"')}}
{{/date-picker}}
```

## Documentation
### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-date-picker` | `<div>` | Initiates the date picker component. **Required** |
| `.pf-c-date-picker__input` | `<div>` | Initiates the date picker input container. **Required** |
| `.pf-c-date-picker__helper-text` | `<div>` | Initiates the date picker helper text. |
| `.pf-c-date-picker__calendar` | `<div>` | Initiates an optional date picker calendar container. **Note:** Required in the react date picker component. |
| `.pf-m-top` | `.pf-c-date-picker` | Modifies to display the calendar above the date picker. |
| `.pf-m-error` | `.pf-c-date-picker__helper-text` | Modifies the helper text for the invalid/error state. |
| `.pf-m-align-right` | `.pf-c-date-picker__calendar` | Modifies the calendar to align the calendar to the right edge of the date picker. |
