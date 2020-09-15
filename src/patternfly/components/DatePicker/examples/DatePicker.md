---
id: 'Date picker'
beta: true
section: components
cssPrefix: pf-c-date-picker
---

## Examples

### Basic
```hbs
{{#> date-picker date-picker--id="basic"}}
  {{> form-control controlType="input" input="true" form-control--modifier="pf-m-icon pf-m-calendar" form-control--attribute=(concat 'type="text" value="03/05/2020" id="' date-picker--id '-input" name="' date-picker--id '-input" aria-label="Basic date picker example"')}}
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
{{#> date-picker date-picker--id="Invalid" date-picker-helper-text--text="Invalid date selected." date-picker-helper-text--IsError="true"}}
  {{> form-control controlType="input" input="true" form-control--modifier="pf-m-icon pf-m-calendar" form-control--attribute=(concat 'aria-invalid="true" type="text" value="03/05/2020" id="' date-picker--id '-input" name="' date-picker--id '-input" aria-label="Basic date picker example"')}}
{{/date-picker}}
```

## Documentation


### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `title` | `.pf-c-description-list` | Provides an accessible title for the description list. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-date-picker` | `<div>` | Initiates the date picker component. **Required** |
| `.pf-c-date-picker__input` | `<div>` | Initiates the date picker input container. **Required** |
| `.pf-c-date-picker__helper-text` | `<div>` | Initiates the date picker helper text. |
| `.pf-m-error` | `.pf-c-date-picker__helper-text` | Modifies the helper text for the invalid/error state. |
