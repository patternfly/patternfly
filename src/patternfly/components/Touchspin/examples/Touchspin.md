---
id: Touch spin
section: components
cssPrefix: pf-c-touchspin
beta: true
---

## Examples
### Default
```hbs
{{#> touchspin}}
  {{#> input-group}}
    {{#> button button--modifier="pf-m-control" button--attribute='id="controlButton1" aria-label="Minus"'}}
      {{#> touchspin-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="90" id="textInput1" name="textInput1" aria-label="Input touchspin"'}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='id="controlButton2" aria-label="Plus"'}}
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
    {{#> button button--modifier="pf-m-control" button--attribute='id="controlButton5" aria-label="Minus"'}}
      {{#> touchspin-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="90" id="textInput3" name="textInput3" aria-label="Input touchspin"'}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='id="controlButton6" aria-label="Plus"'}}
      {{#> touchspin-icon}}
        <i class="fas fa-plus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
  {{/input-group}}
  {{#> touchspin-unit}}%{{/touchspin-unit}}
{{/touchspin}}
<br/>
<br/>
{{#> touchspin}}
  {{#> touchspin-unit}}${{/touchspin-unit}}
  {{#> input-group}}
    {{#> button button--modifier="pf-m-control" button--attribute='id="controlButton9" aria-label="Minus"'}}
      {{#> touchspin-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="1.00" id="textInput5" name="textInput5" aria-label="Input touchspin"'}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='id="controlButton10" aria-label="Plus"'}}
      {{#> touchspin-icon}}
        <i class="fas fa-plus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
  {{/input-group}}
{{/touchspin}}
```

### With unit and left threshold reached
```hbs
{{#> touchspin}}
  {{#> input-group}}
    {{#> button button--modifier="pf-m-control" button--attribute='id="controlButton13" aria-label="Minus" disabled'}}
      {{#> touchspin-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="0" id="textInput7" name="textInput7" aria-label="Input touchspin"'}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='id="controlButton14" aria-label="Plus"'}}
      {{#> touchspin-icon}}
        <i class="fas fa-plus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
  {{/input-group}}
  {{#> touchspin-unit}}%{{/touchspin-unit}}
{{/touchspin}}
```

### With unit and right threshold reached
```hbs
{{#> touchspin}}
  {{#> input-group}}
    {{#> button button--modifier="pf-m-control" button--attribute='id="controlButton17" aria-label="Minus"'}}
      {{#> touchspin-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="100" id="textInput9" name="textInput9" aria-label="Input touchspin"'}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='id="controlButton18" aria-label="Plus" disabled'}}
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
    {{#> button button--modifier="pf-m-control" button--attribute='id="controlButton17" aria-label="Minus" disabled'}}
      {{#> touchspin-icon}}
        <i class="fas fa-minus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="100" id="textInput9" name="textInput9" aria-label="Input touchspin" disabled'}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute='id="controlButton18" aria-label="Plus" disabled'}}
      {{#> touchspin-icon}}
        <i class="fas fa-plus" aria-hidden="true"></i>
      {{/touchspin-icon}}
    {{/button}}
  {{/input-group}}
  {{#> touchspin-unit}}%{{/touchspin-unit}}
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
