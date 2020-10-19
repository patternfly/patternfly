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
  {{#> touchspin-main}}
    {{#> input-group}}
      {{#> touchspin-control}}
        {{#> button button--modifier="pf-m-control" button--attribute='id="textAreaButton1"'}}
          {{#> touchspin-icon}}
            <i class="fas fa-minus" aria-hidden="true"></i>
          {{/touchspin-icon}}
        {{/button}}
      {{/touchspin-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="90" id="textInput1" name="textInput1" aria-label="Input touchspin"'}}
      {{/form-control}}
      {{#> touchspin-control}}
        {{#> button button--modifier="pf-m-control"}}
          {{#> touchspin-icon}}
            <i class="fas fa-plus" aria-hidden="true"></i>
          {{/touchspin-icon}}
        {{/button}}
      {{/touchspin-control}}
    {{/input-group}}
  {{/touchspin-main}}
{{/touchspin}}
```

### Active touchspin
```hbs
{{#> touchspin}}
  {{#> touchspin-main touchspin-main--modifier="pf-m-active"}}
    {{#> input-group}}
      {{#> touchspin-control}}
        {{#> button button--modifier="pf-m-control" button--attribute='id="textAreaButton1"'}}
          {{#> touchspin-icon}}
            <i class="fas fa-minus" aria-hidden="true"></i>
          {{/touchspin-icon}}
        {{/button}}
      {{/touchspin-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="91" id="textInput2" name="textInput2" aria-label="Input touchspin"'}}
      {{/form-control}}
      {{#> touchspin-control}}
        {{#> button button--modifier="pf-m-control pf-m-expanded"}}
          {{#> touchspin-icon}}
            <i class="fas fa-plus" aria-hidden="true"></i>
          {{/touchspin-icon}}
        {{/button}}
      {{/touchspin-control}}
    {{/input-group}}
  {{/touchspin-main}}
{{/touchspin}}
```

### With units and editing text
```hbs
{{#> touchspin}}
  {{#> touchspin-main}}
    {{#> input-group}}
      {{#> touchspin-control}}
        {{#> button button--modifier="pf-m-control" button--attribute='id="textAreaButton1"'}}
          {{#> touchspin-icon}}
            <i class="fas fa-minus" aria-hidden="true"></i>
          {{/touchspin-icon}}
        {{/button}}
      {{/touchspin-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="90" id="textInput3" name="textInput3" aria-label="Input touchspin"'}}
      {{/form-control}}
      {{#> touchspin-control}}
        {{#> button button--modifier="pf-m-control"}}
          {{#> touchspin-icon}}
            <i class="fas fa-plus" aria-hidden="true"></i>
          {{/touchspin-icon}}
        {{/button}}
      {{/touchspin-control}}
    {{/input-group}}
  {{/touchspin-main}}
  {{#> touchspin-units}}%{{/touchspin-units}}
{{/touchspin}}
<br/>
{{#> touchspin}}
  {{#> touchspin-main touchspin-main--modifier="pf-m-active"}}
    {{#> input-group}}
      {{#> touchspin-control}}
        {{#> button button--modifier="pf-m-control" button--attribute='id="textAreaButton1"'}}
          {{#> touchspin-icon}}
            <i class="fas fa-minus" aria-hidden="true"></i>
          {{/touchspin-icon}}
        {{/button}}
      {{/touchspin-control}}
      {{#> form-control form-control--modifier="pf-m-expanded" controlType="input" input="true" form-control--attribute='type="text" value="91" id="textInput4" name="textInput4" aria-label="Input touchspin"'}}
      {{/form-control}}
      {{#> touchspin-control}}
        {{#> button button--modifier="pf-m-control"}}
          {{#> touchspin-icon}}
            <i class="fas fa-plus" aria-hidden="true"></i>
          {{/touchspin-icon}}
        {{/button}}
      {{/touchspin-control}}
    {{/input-group}}
  {{/touchspin-main}}
  {{#> touchspin-units}}%{{/touchspin-units}}
{{/touchspin}}
<br/>
<br/>
{{#> touchspin}}
  {{#> touchspin-units}}${{/touchspin-units}}
  {{#> touchspin-main}}
    {{#> input-group}}
      {{#> touchspin-control}}
        {{#> button button--modifier="pf-m-control" button--attribute='id="textAreaButton1"'}}
          {{#> touchspin-icon}}
            <i class="fas fa-minus" aria-hidden="true"></i>
          {{/touchspin-icon}}
        {{/button}}
      {{/touchspin-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="1.00" id="textInput5" name="textInput5" aria-label="Input touchspin"'}}
      {{/form-control}}
      {{#> touchspin-control}}
        {{#> button button--modifier="pf-m-control"}}
          {{#> touchspin-icon}}
            <i class="fas fa-plus" aria-hidden="true"></i>
          {{/touchspin-icon}}
        {{/button}}
      {{/touchspin-control}}
    {{/input-group}}
  {{/touchspin-main}}
{{/touchspin}}
<br/>
{{#> touchspin}}
  {{#> touchspin-units}}${{/touchspin-units}}
  {{#> touchspin-main touchspin-main--modifier="pf-m-active"}}
    {{#> input-group}}
      {{#> touchspin-control}}
        {{#> button button--modifier="pf-m-control" button--attribute='id="textAreaButton1"'}}
          {{#> touchspin-icon}}
            <i class="fas fa-minus" aria-hidden="true"></i>
          {{/touchspin-icon}}
        {{/button}}
      {{/touchspin-control}}
      {{#> form-control form-control--modifier="pf-m-expanded" controlType="input" input="true" form-control--attribute='type="text" value="2.00" id="textInput6" name="textInput6" aria-label="Input touchspin"'}}
      {{/form-control}}
      {{#> touchspin-control}}
        {{#> button button--modifier="pf-m-control"}}
          {{#> touchspin-icon}}
            <i class="fas fa-plus" aria-hidden="true"></i>
          {{/touchspin-icon}}
        {{/button}}
      {{/touchspin-control}}
    {{/input-group}}
  {{/touchspin-main}}
{{/touchspin}}
```

### With units and left threshold reached
```hbs
{{#> touchspin}}
  {{#> touchspin-main}}
    {{#> input-group}}
      {{#> touchspin-control touchspin-control--modifier="pf-m-threshold"}}
        {{#> button button--modifier="pf-m-control" button--attribute='id="textAreaButton1"'}}
          {{#> touchspin-icon}}
            <i class="fas fa-minus" aria-hidden="true"></i>
          {{/touchspin-icon}}
        {{/button}}
      {{/touchspin-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="0" id="textInput7" name="textInput7" aria-label="Input touchspin"'}}
      {{/form-control}}
      {{#> touchspin-control}}
        {{#> button button--modifier="pf-m-control"}}
          {{#> touchspin-icon}}
            <i class="fas fa-plus" aria-hidden="true"></i>
          {{/touchspin-icon}}
        {{/button}}
      {{/touchspin-control}}
    {{/input-group}}
  {{/touchspin-main}}
  {{#> touchspin-units}}%{{/touchspin-units}}
{{/touchspin}}
<br/>
{{#> touchspin}}
  {{#> touchspin-main touchspin-main--modifier="pf-m-active"}}
    {{#> input-group}}
      {{#> touchspin-control touchspin-control--modifier="pf-m-threshold"}}
        {{#> button button--modifier="pf-m-control" button--attribute='id="textAreaButton1"'}}
          {{#> touchspin-icon}}
            <i class="fas fa-minus" aria-hidden="true"></i>
          {{/touchspin-icon}}
        {{/button}}
      {{/touchspin-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="1" id="textInput8" name="textInput8" aria-label="Input touchspin"'}}
      {{/form-control}}
      {{#> touchspin-control}}
        {{#> button button--modifier="pf-m-control pf-m-expanded"}}
          {{#> touchspin-icon}}
            <i class="fas fa-plus" aria-hidden="true"></i>
          {{/touchspin-icon}}
        {{/button}}
      {{/touchspin-control}}
    {{/input-group}}
  {{/touchspin-main}}
  {{#> touchspin-units}}%{{/touchspin-units}}
{{/touchspin}}
```

### With units and right threshold reached
```hbs
{{#> touchspin}}
  {{#> touchspin-main}}
    {{#> input-group}}
      {{#> touchspin-control}}
        {{#> button button--modifier="pf-m-control" button--attribute='id="textAreaButton1"'}}
          {{#> touchspin-icon}}
            <i class="fas fa-minus" aria-hidden="true"></i>
          {{/touchspin-icon}}
        {{/button}}
      {{/touchspin-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="100" id="textInput9" name="textInput9" aria-label="Input touchspin"'}}
      {{/form-control}}
      {{#> touchspin-control touchspin-control--modifier="pf-m-threshold"}}
        {{#> button button--modifier="pf-m-control"}}
          {{#> touchspin-icon}}
            <i class="fas fa-plus" aria-hidden="true"></i>
          {{/touchspin-icon}}
        {{/button}}
      {{/touchspin-control}}
    {{/input-group}}
  {{/touchspin-main}}
  {{#> touchspin-units}}%{{/touchspin-units}}
{{/touchspin}}
<br/>
{{#> touchspin}}
  {{#> touchspin-main touchspin-main--modifier="pf-m-active"}}
    {{#> input-group}}
      {{#> touchspin-control}}
        {{#> button button--modifier="pf-m-control pf-m-expanded" button--attribute='id="textAreaButton1"'}}
          {{#> touchspin-icon}}
            <i class="fas fa-minus" aria-hidden="true"></i>
          {{/touchspin-icon}}
        {{/button}}
      {{/touchspin-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="99" id="textInput10" name="textInput10" aria-label="Input touchspin"'}}
      {{/form-control}}
      {{#> touchspin-control touchspin-control--modifier="pf-m-threshold"}}
        {{#> button button--modifier="pf-m-control"}}
          {{#> touchspin-icon}}
            <i class="fas fa-plus" aria-hidden="true"></i>
          {{/touchspin-icon}}
        {{/button}}
      {{/touchspin-control}}
    {{/input-group}}
  {{/touchspin-main}}
  {{#> touchspin-units}}%{{/touchspin-units}}
{{/touchspin}}
```

## Documentation
### Overview

### Usage
| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-c-touchspin` | `<div>` | Initiates the touchspin component. |
| `.pf-c-touchspin__main` | `<div>` | Initiates the touchspin main container. |
| `.pf-c-touchspin__control` | `<div>` | Initiates the touchspin control container. |
| `.pf-c-touchspin__icon` | `<span>` | Initiates the touchspin icon. |
| `.pf-c-touchspin__units` | `<span>` | Initiates the touchspin units. |
| `.pf-m-active` | `.pf-c-touchspin__main` | Modifies the touchspin main container to be active. |
| `.pf-m-threshold` | `.pf-c-touchspin__control` | Modifies the touchspin control container to be in the threshold state. |