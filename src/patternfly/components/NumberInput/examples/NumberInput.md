---
id: Number input
section: components
cssPrefix: pf-v6-c-number-input
---

## Examples
### Default
```hbs
{{#> number-input number-input--id="number-input-default"}}
  {{#> input-group}}
    {{#> input-group-item}}
      {{> number-input-icon number-input-icon--IsMinus=true}}
    {{/input-group-item}}
    {{#> input-group-item input-group-item--IsFill=true}}
      {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="90" name="' number-input--id '-name" aria-label="Number input"')}}
    {{/input-group-item}}
    {{#> input-group-item}}
      {{> number-input-icon number-input-icon--IsPlus=true}}
    {{/input-group-item}}
  {{/input-group}}
{{/number-input}}
```

### With unit
```hbs
{{#> number-input number-input--id="number-input-unit"}}
  {{#> input-group}}
    {{#> input-group-item}}
      {{> number-input-icon number-input-icon--IsMinus=true}}
    {{/input-group-item}}
    {{#> input-group-item input-group-item--IsFill=true}}
      {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="90" name="' number-input--id '-name" aria-label="Number input"')}}
    {{/input-group-item}}
    {{#> input-group-item}}
      {{> number-input-icon number-input-icon--IsPlus=true}}
    {{/input-group-item}}
  {{/input-group}}
  {{#> number-input-unit}}%{{/number-input-unit}}
{{/number-input}}
<br>
<br>
{{#> number-input number-input--id="number-input-unit2"}}
  {{#> number-input-unit}}${{/number-input-unit}}
  {{#> input-group}}
    {{#> input-group-item}}
      {{> number-input-icon number-input-icon--IsMinus=true}}
    {{/input-group-item}}
    {{#> input-group-item input-group-item--IsFill=true}}
      {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="1.00" name="' number-input--id '-name" aria-label="Number input"')}}
    {{/input-group-item}}
    {{#> input-group-item}}
      {{> number-input-icon number-input-icon--IsPlus=true}}
    {{/input-group-item}}
  {{/input-group}}
{{/number-input}}
```

### With unit and lower threshold reached
```hbs
{{#> number-input number-input--id="number-input-unit-lower-threshold"}}
  {{#> input-group}}
    {{#> input-group-item}}
      {{> number-input-icon number-input-icon--IsMinus=true number-input-icon--IsDisabled=true}}
    {{/input-group-item}}
    {{#> input-group-item input-group-item--IsFill=true}}
      {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="0" min="0" name="' number-input--id '-name" aria-label="Number input"')}}
    {{/input-group-item}}
    {{#> input-group-item}}
      {{> number-input-icon number-input-icon--IsPlus=true}}
    {{/input-group-item}}
  {{/input-group}}
  {{#> number-input-unit}}%{{/number-input-unit}}
{{/number-input}}
```

### With unit and upper threshold reached
```hbs
{{#> number-input number-input--id="number-input-unit-upper-threshold"}}
  {{#> input-group}}
    {{#> input-group-item}}
      {{> number-input-icon number-input-icon--IsMinus=true}}
    {{/input-group-item}}
    {{#> input-group-item input-group-item--IsFill=true}}
      {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="100" max="100" name="' number-input--id '-name" aria-label="Number input"')}}
    {{/input-group-item}}
    {{#> input-group-item}}
      {{> number-input-icon number-input-icon--IsPlus=true number-input-icon--IsDisabled=true}}
    {{/input-group-item}}
  {{/input-group}}
  {{#> number-input-unit}}%{{/number-input-unit}}
{{/number-input}}
```

### Disabled
```hbs
{{#> number-input number-input--id="number-input-disabled"}}
  {{#> input-group}}
    {{#> input-group-item}}
      {{> number-input-icon number-input-icon--IsMinus=true number-input-icon--IsDisabled=true}}
    {{/input-group-item}}
    {{#> input-group-item input-group-item--IsFill=true}}
      {{> form-control controlType="input" input="true" form-control--IsDisabled='true' form-control--attribute=(concat 'type="number" value="100" name="' number-input--id '-name" aria-label="Number input"')}}
    {{/input-group-item}}
    {{#> input-group-item}}
      {{> number-input-icon number-input-icon--IsPlus=true number-input-icon--IsDisabled=true}}
    {{/input-group-item}}
  {{/input-group}}
  {{#> number-input-unit}}%{{/number-input-unit}}
{{/number-input}}
```

### With status
```hbs
{{#> number-input number-input--id="number-input-status" number-input--modifier="pf-m-status"}}
  {{#> input-group}}
    {{#> input-group-item}}
      {{> number-input-icon number-input-icon--IsMinus=true}}
    {{/input-group-item}}
    {{#> input-group-item input-group-item--IsFill=true}}
      {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="90" name="' number-input--id '-name" aria-label="Number input"')}}
    {{/input-group-item}}
    {{#> input-group-item}}
      {{> number-input-icon number-input-icon--IsPlus=true}}
    {{/input-group-item}}
  {{/input-group}}
{{/number-input}}
<br/><br/>
{{#> number-input number-input--id="number-input-status-warning" number-input--modifier="pf-m-status"}}
  {{#> input-group}}
    {{#> input-group-item}}
      {{> number-input-icon number-input-icon--IsMinus=true}}
    {{/input-group-item}}
    {{#> input-group-item input-group-item--IsFill=true}}
      {{> form-control controlType="input" input="true" form-control--IsWarning='true'  form-control--attribute=(concat 'type="number" value="90" name="' number-input--id '-name" aria-label="Number input"')}}
    {{/input-group-item}}
    {{#> input-group-item}}
      {{> number-input-icon number-input-icon--IsPlus=true}}
    {{/input-group-item}}
  {{/input-group}}
{{/number-input}}
```

### Varying sizes
```hbs
{{#> number-input number-input--id="number-input-sizes" number-input--attribute='style="--pf-v6-c-number-input--c-form-control--width-chars: 1;"'}}
  {{#> input-group}}
    {{#> input-group-item}}
      {{> number-input-icon number-input-icon--IsMinus=true}}
    {{/input-group-item}}
    {{#> input-group-item input-group-item--IsFill=true}}
      {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="1" name="' number-input--id '-name" aria-label="Number input"')}}
    {{/input-group-item}}
    {{#> input-group-item}}
      {{> number-input-icon number-input-icon--IsPlus=true}}
    {{/input-group-item}}
  {{/input-group}}
{{/number-input}}
<br>
<br>
{{#> number-input number-input--id="number-input-sizes2" number-input--attribute='style="--pf-v6-c-number-input--c-form-control--width-chars: 10;"'}}
  {{#> input-group}}
    {{#> input-group-item}}
      {{> number-input-icon number-input-icon--IsMinus=true}}
    {{/input-group-item}}
    {{#> input-group-item input-group-item--IsFill=true}}
      {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="1234567890" name="' number-input--id '-name" aria-label="Number input"')}}
    {{/input-group-item}}
    {{#> input-group-item}}
      {{> number-input-icon number-input-icon--IsPlus=true}}
    {{/input-group-item}}
  {{/input-group}}
{{/number-input}}
<br>
<br>
{{#> number-input number-input--id="number-input-sizes3" number-input--attribute='style="--pf-v6-c-number-input--c-form-control--width-chars: 5;"'}}
  {{#> input-group}}
    {{#> input-group-item}}
      {{> number-input-icon number-input-icon--IsMinus=true}}
    {{/input-group-item}}
    {{#> input-group-item input-group-item--IsFill=true}}
      {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="5" name="' number-input--id '-name" aria-label="Number input"')}}
    {{/input-group-item}}
    {{#> input-group-item}}
      {{> number-input-icon number-input-icon--IsPlus=true}}
    {{/input-group-item}}
  {{/input-group}}
{{/number-input}}
<br><br>
{{#> number-input number-input--id="number-input-sizes4" number-input--attribute='style="--pf-v6-c-number-input--c-form-control--width-chars: 5;"'}}
  {{#> input-group}}
    {{#> input-group-item}}
      {{> number-input-icon number-input-icon--IsMinus=true}}
    {{/input-group-item}}
    {{#> input-group-item input-group-item--IsFill=true}}
      {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="12345" name="' number-input--id '-name" aria-label="Number input"')}}
    {{/input-group-item}}
    {{#> input-group-item}}
      {{> number-input-icon number-input-icon--IsPlus=true}}
    {{/input-group-item}}
  {{/input-group}}
{{/number-input}}
```

## Documentation
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="Plus"`, `aria-label="Minus"` | `.pf-v6-c-button.pf-m-control` | Provides an accessible name for the outer plus/minus buttons. **Required** |
| `min` | `input[type="number"].pf-v6-c-form-control` | Provides an optional minimum value for the input. |
| `max` | `input[type="number"].pf-v6-c-form-control` | Provides an optional maximum value for the input. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-number-input` | `<div>` | Initiates the number input component. |
| `.pf-v6-c-number-input__icon` | `<span>` | Initiates the number input icon. |
| `.pf-v6-c-number-input__unit` | `<span>` | Initiates the number input unit. |
| `.pf-m-status` | `.pf-v6-c-number-input` | Modifies the width to create enough space for a status icon to be included in the form control portion of the number input. **Required** if a status icon may be shown, even if the icon is not currently shown. |
| `--pf-v6-c-number-input--c-form-control--width-chars` | `.pf-v6-c-number-input` | Specifies the number of characters to show in the input. |
