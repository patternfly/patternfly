---
id: 'Slider'
beta: true
section: components
cssPrefix: pf-c-slider
---

## Examples
### Discrete
```hbs
{{#> slider
  slider--value-min="0"
  slider--value-max="8"
  slider--value-now="5"
  slider--attribute='style="--pf-c-slider--value: 62.5%;"'
  }}
  {{#> slider-main}}
    {{> slider-rail}}
    {{#> slider-steps}}
      {{> slider-step slider-step--Left="0%" slider-step--label="0" slider-step--IsActive="true"}}
      {{> slider-step slider-step--Left="12.5%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--Left="25%" slider-step--label="2" slider-step--IsActive="true"}}
      {{> slider-step slider-step--Left="37.5%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--Left="50%" slider-step--label="4" slider-step--IsActive="true"}}
      {{> slider-step slider-step--Left="62.5%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--Left="75%" slider-step--label="6"}}
      {{> slider-step slider-step--Left="87.5%"}}
      {{> slider-step slider-step--Left="100%" slider-step--label="8"}}
    {{/slider-steps}}
    {{> slider-thumb}}
  {{/slider-main}}
{{/slider}}

<br>

{{#> slider
  slider--value-min="0"
  slider--value-max="100"
  slider--value-now="50"
  slider--attribute='style="--pf-c-slider--value: 50%;"'
  }}
  {{#> slider-main}}
    {{> slider-rail}}
    {{#> slider-steps}}
      {{> slider-step slider-step--Left="0%" slider-step--label="0%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--Left="25%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--Left="50%" slider-step--label="50%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--Left="75%"}}
      {{> slider-step slider-step--Left="100%" slider-step--label="100%"}}
    {{/slider-steps}}
    {{> slider-thumb}}
  {{/slider-main}}
{{/slider}}
```

### Continuous
```hbs
{{#> slider
  slider--value-min="0"
  slider--value-max="100"
  slider--value-now="50"
  slider--attribute='style="--pf-c-slider--value: 50%;"'
  }}
  {{#> slider-main}}
    {{> slider-rail}}
    {{> slider-thumb}}
  {{/slider-main}}
{{/slider}}
```

### Value input
```hbs
{{#> slider
  slider--value-min="0"
  slider--value-max="8"
  slider--value-now="5"
  slider--attribute='style="--pf-c-slider--value: 62.5%; --pf-c-slider__value--c-form-control--width-chars: 1;"'
  }}
  {{#> slider-main}}
    {{> slider-rail}}
    {{#> slider-steps}}
      {{> slider-step slider-step--Left="0%" slider-step--label="0" slider-step--IsActive="true"}}
      {{> slider-step slider-step--Left="12.5%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--Left="25%" slider-step--label="2" slider-step--IsActive="true"}}
      {{> slider-step slider-step--Left="37.5%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--Left="50%" slider-step--label="4" slider-step--IsActive="true"}}
      {{> slider-step slider-step--Left="62.5%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--Left="75%" slider-step--label="6"}}
      {{> slider-step slider-step--Left="87.5%"}}
      {{> slider-step slider-step--Left="100%" slider-step--label="8"}}
    {{/slider-steps}}
    {{> slider-thumb}}
  {{/slider-main}}
  {{#> slider-value}}
    {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="' slider--value-now '" aria-label="Slider value input"')}}
  {{/slider-value}}
{{/slider}}

<br>

{{#> slider
  slider--value-min="0"
  slider--value-max="100"
  slider--value-now="50"
  slider--attribute='style="--pf-c-slider--value: 50%;"'
  }}
  {{#> slider-main}}
    {{> slider-rail}}
    {{#> slider-steps}}
      {{> slider-step slider-step--Left="0%" slider-step--label="0%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--Left="25%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--Left="50%" slider-step--label="50%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--Left="75%"}}
      {{> slider-step slider-step--Left="100%" slider-step--label="100%"}}
    {{/slider-steps}}
    {{> slider-thumb}}
  {{/slider-main}}
  {{#> slider-value}}
    {{#> input-group}}
      {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="' slider--value-now '" aria-label="Slider value input"')}}
      {{#> input-group-text input-group-text--modifier="pf-m-plain"}}%{{/input-group-text}}
    {{/input-group}}
  {{/slider-value}}
{{/slider}}

<br>

{{#> slider
  slider--value-min="0"
  slider--value-max="100"
  slider--value-now="50"
  slider--attribute='style="--pf-c-slider--value: 50%;"'
  }}
  {{#> slider-main}}
    {{> slider-rail}}
    {{> slider-thumb}}
  {{/slider-main}}
  {{#> slider-value}}
    {{#> input-group}}
      {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="' slider--value-now '" aria-label="Slider value input"')}}
      {{#> input-group-text input-group-text--modifier="pf-m-plain"}}%{{/input-group-text}}
    {{/input-group}}
  {{/slider-value}}
{{/slider}}
```

### Thumb value input
```hbs
{{#> slider
  slider--value-min="0"
  slider--value-max="100"
  slider--value-now="50"
  slider--attribute='style="--pf-c-slider--value: 50%;"'
  }}
  {{#> slider-main}}
    {{> slider-rail}}
    {{> slider-thumb}}
    {{#> slider-value slider-value--modifier="pf-m-floating"}}
      {{#> input-group}}
        {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="' slider--value-now '" aria-label="Slider value input"')}}
        {{#> input-group-text input-group-text--modifier="pf-m-plain"}}%{{/input-group-text}}
      {{/input-group}}
    {{/slider-value}}
  {{/slider-main}}
{{/slider}}
```

### Actions
```hbs
{{#> slider
  slider--value-min="0"
  slider--value-max="100"
  slider--value-now="50"
  slider--attribute='style="--pf-c-slider--value: 50%;"'
  }}
  {{#> slider-actions}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Minus"'}}
      <i class="fas fa-minus" aria-hidden="true"></i>
    {{/button}}
  {{/slider-actions}}
  {{#> slider-main}}
    {{> slider-rail}}
    {{> slider-thumb}}
  {{/slider-main}}
  {{#> slider-actions}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Plus"'}}
      <i class="fas fa-plus" aria-hidden="true"></i>
    {{/button}}
  {{/slider-actions}}
{{/slider}}

<br><br>

{{#> slider
  slider--value-min="0"
  slider--value-max="100"
  slider--value-now="50"
  slider--attribute='style="--pf-c-slider--value: 50%;"'
  }}
  {{#> slider-main}}
    {{> slider-rail}}
    {{> slider-thumb}}
    {{#> slider-value slider-value--modifier="pf-m-floating"}}
      {{#> input-group}}
        {{> form-control controlType="input" input="true" form-control--attribute=(concat 'disabled type="number" value="' slider--value-now '" aria-label="Slider value input"')}}
        {{#> input-group-text input-group-text--modifier="pf-m-plain"}}%{{/input-group-text}}
      {{/input-group}}
    {{/slider-value}}
  {{/slider-main}}
  {{#> slider-actions}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Locked"'}}
      <i class="fas fa-lock" aria-hidden="true"></i>
    {{/button}}
  {{/slider-actions}}
{{/slider}}

<br><br>

{{#> slider
  slider--value-min="0"
  slider--value-max="100"
  slider--value-now="50"
  slider--attribute='style="--pf-c-slider--value: 50%;"'
  }}
  {{#> slider-main}}
    {{> slider-rail}}
    {{> slider-thumb}}
    {{#> slider-value slider-value--modifier="pf-m-floating"}}
      {{#> input-group}}
        {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="' slider--value-now '" aria-label="Slider value input"')}}
        {{#> input-group-text input-group-text--modifier="pf-m-plain"}}%{{/input-group-text}}
      {{/input-group}}
    {{/slider-value}}
  {{/slider-main}}
  {{#> slider-actions}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Lock"'}}
      <i class="fas fa-lock-open" aria-hidden="true"></i>
    {{/button}}
  {{/slider-actions}}
{{/slider}}
```

## Documentation
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="slider"` | `.pf-c-slider__thumb` | Identifies the element as a slider. **Required** |
| `tabindex="0"` | `.pf-c-slider__thumb` | Includes the slider thumb in the page tab sequence. **Required** |
| `aria-valuemin="[value]"` | `.pf-c-slider__thumb` | Specifies the minimum value of the slider. **Required** |
| `aria-valuemax="[value]"` | `.pf-c-slider__thumb` | Specifies the maximum value of the slider. **Required** |
| `aria-valuenow="[value]"` | `.pf-c-slider__thumb` | Specifies the current value of the slider. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-slider` | `<div>` | Initiates the slider component. **Required** |
| `.pf-c-slider__rail` | `<div>` | Initiates the slider rail. **Required** |
| `.pf-c-slider__rail-track` | `<div>` | Initiates the slider rail track. **Required** |
| `.pf-c-slider__steps` | `<div>` | Initiates the slider steps. |
| `.pf-c-slider__step` | `<div>` | Initiates a slider step. |
| `.pf-c-slider__step-tick` | `<div>` | Initiates a slider step tick. |
| `.pf-c-slider__step-label` | `<div>` | Initiates a slider step label. |
| `.pf-c-slider__thumb` | `<div>` | Initiates the slider thumb. **Required** |
| `.pf-c-slider__value` | `<div>` | Initiates the slider value. |
| `.pf-c-slider__actions` | `<div>` | Initiates the slider actions. |
| `.pf-m-floating` | `.pf-c-slider__thumb` | Modifies the slider value to float above the thumb. |
| `--pf-c-slider--value` | `.pf-c-slider` | Applies appropriate slider styles based on the current value. **Required** |
