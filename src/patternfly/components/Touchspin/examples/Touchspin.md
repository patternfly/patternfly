---
id: Touchspin
section: components
cssPrefix: pf-c-touchspin
beta: true
---

## Examples
### Default
```hbs
{{#> touchspin}}
  {{#> input-group}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Minus"'}}
      {{#> touchspin-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="90"  name="textInput1" aria-label="Input touchspin"'}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Plus"'}}
      {{#> touchspin-icon}}
        <i class="fas fa-plus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
  {{/input-group}}
{{/touchspin}}
```

### With unit
```hbs
{{#> touchspin}}
  {{#> input-group}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Minus"'}}
      {{#> touchspin-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="90"  name="textInput3" aria-label="Input touchspin"'}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Plus"'}}
      {{#> touchspin-icon}}
        <i class="fas fa-plus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
  {{/input-group}}
  {{#> touchspin-unit}}%{{/touchspin-unit}}
{{/touchspin}}
<br>
<br>
{{#> touchspin}}
  {{#> touchspin-unit}}${{/touchspin-unit}}
  {{#> input-group}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Minus"'}}
      {{#> touchspin-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="1.00" name="textInput5" aria-label="Input touchspin"'}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Plus"'}}
      {{#> touchspin-icon}}
        <i class="fas fa-plus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
  {{/input-group}}
{{/touchspin}}
```

### With unit and lower threshold reached
```hbs
{{#> touchspin}}
  {{#> input-group}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Minus" disabled'}}
      {{#> touchspin-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="0" name="textInput7" aria-label="Input touchspin"'}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Plus"'}}
      {{#> touchspin-icon}}
        <i class="fas fa-plus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
  {{/input-group}}
  {{#> touchspin-unit}}%{{/touchspin-unit}}
{{/touchspin}}
```

### With unit and upper threshold reached
```hbs
{{#> touchspin}}
  {{#> input-group}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Minus"'}}
      {{#> touchspin-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="100" name="textInput9" aria-label="Input touchspin"'}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Plus" disabled'}}
      {{#> touchspin-icon}}
        <i class="fas fa-plus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
  {{/input-group}}
  {{#> touchspin-unit}}%{{/touchspin-unit}}
{{/touchspin}}
```

### Disabled
```hbs
{{#> touchspin}}
  {{#> input-group}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Minus" disabled'}}
      {{#> touchspin-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="100" name="textInput9" aria-label="Input touchspin" disabled'}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Plus" disabled'}}
      {{#> touchspin-icon}}
        <i class="fas fa-plus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
  {{/input-group}}
  {{#> touchspin-unit}}%{{/touchspin-unit}}
{{/touchspin}}
```

### Varying sizes
```hbs
{{#> touchspin touchspin--attribute='style="--pf-c-touchspin--c-form-control--width-chars: 1;"'}}
  {{#> input-group}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Minus"'}}
      {{#> touchspin-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="1"  name="textInput1" aria-label="Input touchspin"'}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Plus"'}}
      {{#> touchspin-icon}}
        <i class="fas fa-plus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
  {{/input-group}}
{{/touchspin}}
<br>
<br>
{{#> touchspin touchspin--attribute='style="--pf-c-touchspin--c-form-control--width-chars: 10;"'}}
  {{#> input-group}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Minus"'}}
      {{#> touchspin-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="1234567890"  name="textInput1" aria-label="Input touchspin"'}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Plus"'}}
      {{#> touchspin-icon}}
        <i class="fas fa-plus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
  {{/input-group}}
{{/touchspin}}
<br>
<br>
{{#> touchspin touchspin--attribute='style="--pf-c-touchspin--c-form-control--width-chars: 5;"'}}
  {{#> input-group}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Minus"'}}
      {{#> touchspin-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="5"  name="textInput1" aria-label="Input touchspin"'}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Plus"'}}
      {{#> touchspin-icon}}
        <i class="fas fa-plus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
  {{/input-group}}
{{/touchspin}}
<br><br>
{{#> touchspin touchspin--attribute='style="--pf-c-touchspin--c-form-control--width-chars: 5;"'}}
  {{#> input-group}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Minus"'}}
      {{#> touchspin-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="12345"  name="textInput1" aria-label="Input touchspin"'}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Plus"'}}
      {{#> touchspin-icon}}
        <i class="fas fa-plus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
  {{/input-group}}
{{/touchspin}}
```

## Documentation
### Overview

### Usage
| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-c-touchspin` | `<div>` | Initiates the touchspin component. |
| `.pf-c-touchspin__icon` | `<span>` | Initiates the touchspin icon. |
| `.pf-c-touchspin__unit` | `<span>` | Initiates the touchspin unit. |
| `--pf-c-touchspin--c-form-control--width-chars` | `.pf-c-touchspin` | Specifies the number of characters to show in the input. |