---
id: Number input
section: components
cssPrefix: pf-c-number-input
---

## Examples
### Default
```hbs
{{#> number-input number-input--id="number-input-default"}}
  {{#> input-group}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Minus"'}}
      {{#> number-input-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/number-input-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="90" name="' number-input--id '-name" aria-label="Number input"')}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Plus"'}}
      {{#> number-input-icon}}
        <i class="fas fa-plus" aria-hidden="true"></i>
      {{/number-input-icon}}
    {{/button}}
  {{/input-group}}
{{/number-input}}
```

### With unit
```hbs
{{#> number-input number-input--id="number-input-unit"}}
  {{#> input-group}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Minus"'}}
      {{#> number-input-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/number-input-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="90" name="' number-input--id '-name" aria-label="Number input"')}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Plus"'}}
      {{#> number-input-icon}}
        <i class="fas fa-plus" aria-hidden="true"></i>
      {{/number-input-icon}}
    {{/button}}
  {{/input-group}}
  {{#> number-input-unit}}%{{/number-input-unit}}
{{/number-input}}
<br>
<br>
{{#> number-input number-input--id="number-input-unit2"}}
  {{#> number-input-unit}}${{/number-input-unit}}
  {{#> input-group}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Minus"'}}
      {{#> number-input-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/number-input-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="1.00" name="' number-input--id '-name" aria-label="Number input"')}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Plus"'}}
      {{#> number-input-icon}}
        <i class="fas fa-plus" aria-hidden="true"></i>
      {{/number-input-icon}}
    {{/button}}
  {{/input-group}}
{{/number-input}}
```

### With unit and lower threshold reached
```hbs
{{#> number-input number-input--id="number-input-unit-lower-threshold"}}
  {{#> input-group}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Minus" disabled'}}
      {{#> number-input-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/number-input-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="0" min="0" name="' number-input--id '-name" aria-label="Number input"')}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Plus"'}}
      {{#> number-input-icon}}
        <i class="fas fa-plus" aria-hidden="true"></i>
      {{/number-input-icon}}
    {{/button}}
  {{/input-group}}
  {{#> number-input-unit}}%{{/number-input-unit}}
{{/number-input}}
```

### With unit and upper threshold reached
```hbs
{{#> number-input number-input--id="number-input-unit-upper-threshold"}}
  {{#> input-group}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Minus"'}}
      {{#> number-input-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/number-input-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="100" max="100" name="' number-input--id '-name" aria-label="Number input"')}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Plus" disabled'}}
      {{#> number-input-icon}}
        <i class="fas fa-plus" aria-hidden="true"></i>
      {{/number-input-icon}}
    {{/button}}
  {{/input-group}}
  {{#> number-input-unit}}%{{/number-input-unit}}
{{/number-input}}
```

### Disabled
```hbs
{{#> number-input number-input--id="number-input-disabled"}}
  {{#> input-group}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Minus" disabled'}}
      {{#> number-input-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/number-input-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="100" name="' number-input--id '-name" aria-label="Number input" disabled')}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Plus" disabled'}}
      {{#> number-input-icon}}
        <i class="fas fa-plus" aria-hidden="true"></i>
      {{/number-input-icon}}
    {{/button}}
  {{/input-group}}
  {{#> number-input-unit}}%{{/number-input-unit}}
{{/number-input}}
```

### Varying sizes
```hbs
{{#> number-input number-input--id="number-input-sizes" number-input--attribute='style="--pf-c-number-input--c-form-control--width-chars: 1;"'}}
  {{#> input-group}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Minus"'}}
      {{#> number-input-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/number-input-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="1" name="' number-input--id '-name" aria-label="Number input"')}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Plus"'}}
      {{#> number-input-icon}}
        <i class="fas fa-plus" aria-hidden="true"></i>
      {{/number-input-icon}}
    {{/button}}
  {{/input-group}}
{{/number-input}}
<br>
<br>
{{#> number-input number-input--id="number-input-sizes2" number-input--attribute='style="--pf-c-number-input--c-form-control--width-chars: 10;"'}}
  {{#> input-group}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Minus"'}}
      {{#> number-input-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/number-input-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="1234567890" name="' number-input--id '-name" aria-label="Number input"')}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Plus"'}}
      {{#> number-input-icon}}
        <i class="fas fa-plus" aria-hidden="true"></i>
      {{/number-input-icon}}
    {{/button}}
  {{/input-group}}
{{/number-input}}
<br>
<br>
{{#> number-input number-input--id="number-input-sizes3" number-input--attribute='style="--pf-c-number-input--c-form-control--width-chars: 5;"'}}
  {{#> input-group}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Minus"'}}
      {{#> number-input-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/number-input-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="5" name="' number-input--id '-name" aria-label="Number input"')}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Plus"'}}
      {{#> number-input-icon}}
        <i class="fas fa-plus" aria-hidden="true"></i>
      {{/number-input-icon}}
    {{/button}}
  {{/input-group}}
{{/number-input}}
<br><br>
{{#> number-input number-input--id="number-input-sizes4" number-input--attribute='style="--pf-c-number-input--c-form-control--width-chars: 5;"'}}
  {{#> input-group}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Minus"'}}
      {{#> number-input-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/number-input-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="12345" name="' number-input--id '-name" aria-label="Number input"')}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Plus"'}}
      {{#> number-input-icon}}
        <i class="fas fa-plus" aria-hidden="true"></i>
      {{/number-input-icon}}
    {{/button}}
  {{/input-group}}
{{/number-input}}
```

## Documentation
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="Plus"`, `aria-label="Minus"` | `.pf-c-button.pf-m-control` | Provides an accessible name for the outer plus/minus buttons. **Required** |
| `min` | `input[type="number"].pf-c-form-control` | Provides an optional minimum value for the input. |
| `max` | `input[type="number"].pf-c-form-control` | Provides an optional maximum value for the input. |

### Usage
| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-c-number-input` | `<div>` | Initiates the number input component. |
| `.pf-c-number-input__icon` | `<span>` | Initiates the number input icon. |
| `.pf-c-number-input__unit` | `<span>` | Initiates the number input unit. |
| `--pf-c-number-input--c-form-control--width-chars` | `.pf-c-number-input` | Specifies the number of characters to show in the input. |