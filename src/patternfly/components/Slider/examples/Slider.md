---
id: 'Slider'
section: components
cssPrefix: pf-v6-c-slider
---

## Examples
### Discrete
```hbs
{{#> slider
  slider--value-min="0"
  slider--value-max="8"
  slider--value-now="5"
  slider--attribute='style="--pf-v6-c-slider--value: 62.5%;"'
  }}
  {{#> slider-main}}
    {{> slider-rail}}
    {{#> slider-steps}}
      {{> slider-step slider-step--InsetInlineStart="0%" slider-step--label="0" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="12.5%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="25%" slider-step--label="2" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="37.5%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="50%" slider-step--label="4" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="62.5%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="75%" slider-step--label="6"}}
      {{> slider-step slider-step--InsetInlineStart="87.5%"}}
      {{> slider-step slider-step--InsetInlineStart="100%" slider-step--label="8"}}
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
  slider--attribute='style="--pf-v6-c-slider--value: 50%;"'
  }}
  {{#> slider-main}}
    {{> slider-rail}}
    {{> slider-thumb}}
  {{/slider-main}}
{{/slider}}

{{#> slider
  slider--value-min="0"
  slider--value-max="100"
  slider--value-now="50"
  slider--attribute='style="--pf-v6-c-slider--value: 50%;"'
  }}
  {{#> slider-main}}
    {{> slider-rail}}
    {{#> slider-steps}}
      {{> slider-step slider-step--InsetInlineStart="0%" slider-step--label="0%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="100%" slider-step--label="100%"}}
    {{/slider-steps}}
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
  slider--attribute='style="--pf-v6-c-slider--value: 62.5%; --pf-v6-c-slider__value--c-form-control--width-chars: 1;"'
  }}
  {{#> slider-main}}
    {{> slider-rail}}
    {{#> slider-steps}}
      {{> slider-step slider-step--InsetInlineStart="0%" slider-step--label="0" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="12.5%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="25%" slider-step--label="2" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="37.5%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="50%" slider-step--label="4" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="62.5%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="75%" slider-step--label="6"}}
      {{> slider-step slider-step--InsetInlineStart="87.5%"}}
      {{> slider-step slider-step--InsetInlineStart="100%" slider-step--label="8"}}
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
  slider--attribute='style="--pf-v6-c-slider--value: 50%;"'
  }}
  {{#> slider-main}}
    {{> slider-rail}}
    {{#> slider-steps}}
      {{> slider-step slider-step--InsetInlineStart="0%" slider-step--label="0%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="25%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="50%" slider-step--label="50%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="75%"}}
      {{> slider-step slider-step--InsetInlineStart="100%" slider-step--label="100%"}}
    {{/slider-steps}}
    {{> slider-thumb}}
  {{/slider-main}}
  {{#> slider-value}}
    {{#> input-group}}
      {{#> input-group-item input-group-item--IsFill=true}}
        {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="' slider--value-now '" aria-label="Slider value input"')}}
      {{/input-group-item}}
      {{#> input-group-item input-group-item--IsBox=true}}
        {{> input-group-text input-group-text--value="%"}}
      {{/input-group-item}}
    {{/input-group}}
  {{/slider-value}}
{{/slider}}

<br>

{{#> slider
  slider--value-min="0"
  slider--value-max="100"
  slider--value-now="50"
  slider--attribute='style="--pf-v6-c-slider--value: 50%;"'
  }}
  {{#> slider-main}}
    {{> slider-rail}}
    {{> slider-thumb}}
  {{/slider-main}}
  {{#> slider-value}}
    {{#> input-group}}
      {{#> input-group-item input-group-item--IsFill=true}}
        {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="' slider--value-now '" aria-label="Slider value input"')}}
      {{/input-group-item}}
      {{#> input-group-item input-group-item--IsBox=true}}
        {{> input-group-text input-group-text--value="%"}}
      {{/input-group-item}}
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
  slider--attribute='style="--pf-v6-c-slider--value: 50%;"'
  }}
  {{#> slider-main}}
    {{> slider-rail}}
    {{> slider-thumb}}
    {{#> slider-value slider-value--modifier="pf-m-floating"}}
      {{#> input-group}}
        {{#> input-group-item input-group-item--IsFill=true}}
          {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="' slider--value-now '" aria-label="Slider value input"')}}
        {{/input-group-item}}
        {{#> input-group-item input-group-item--IsBox=true}}
          {{> input-group-text input-group-text--value="%"}}
        {{/input-group-item}}
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
  slider--attribute='style="--pf-v6-c-slider--value: 50%;"'
  }}
  {{#> slider-actions}}
    {{> button button--IsPlain=true button--IsIcon=true button--icon="minus fa-fw" button--attribute='aria-label="Minus"'}}
  {{/slider-actions}}
  {{#> slider-main}}
    {{> slider-rail}}
    {{> slider-thumb}}
  {{/slider-main}}
  {{#> slider-actions}}
    {{> button button--IsPlain=true button--IsIcon=true button--icon="plus fa-fw" button--attribute='aria-label="Plus"'}}
  {{/slider-actions}}
{{/slider}}

<br><br>

{{#> slider
  slider--value-min="0"
  slider--value-max="100"
  slider--value-now="50"
  slider--attribute='style="--pf-v6-c-slider--value: 50%;"'
  }}
  {{#> slider-main}}
    {{> slider-rail}}
    {{> slider-thumb}}
    {{#> slider-value slider-value--modifier="pf-m-floating"}}
      {{#> input-group}}
        {{#> input-group-item input-group-item--IsFill=true}}
          {{> form-control form-control--IsDisabled="true" controlType="input" input="true" form-control--attribute=(concat 'type="number" value="' slider--value-now '" aria-label="Slider value input"')}}
        {{/input-group-item}}
        {{#> input-group-item input-group-item--IsBox=true input-group-item--IsDisabled=true}}
          {{> input-group-text input-group-text--value="%"}}
        {{/input-group-item}}
      {{/input-group}}
    {{/slider-value}}
  {{/slider-main}}
  {{#> slider-actions}}
    {{> button button--IsPlain=true button--IsIcon=true button--icon="lock fa-fw" button--attribute='aria-label="Locked"'}}
  {{/slider-actions}}
{{/slider}}

<br><br>

{{#> slider
  slider--value-min="0"
  slider--value-max="100"
  slider--value-now="50"
  slider--attribute='style="--pf-v6-c-slider--value: 50%;"'
  }}
  {{#> slider-main}}
    {{> slider-rail}}
    {{> slider-thumb}}
    {{#> slider-value slider-value--modifier="pf-m-floating"}}
      {{#> input-group}}
        {{#> input-group-item input-group-item--IsFill=true}}
          {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="' slider--value-now '" aria-label="Slider value input"')}}
        {{/input-group-item}}
        {{#> input-group-item input-group-item--IsBox=true}}
          {{> input-group-text input-group-text--value="%"}}
        {{/input-group-item}}
      {{/input-group}}
    {{/slider-value}}
  {{/slider-main}}
  {{#> slider-actions}}
    {{> button button--IsPlain=true button--IsIcon=true button--icon="lock-open fa-fw" button--attribute='aria-label="Lock"'}}
  {{/slider-actions}}
{{/slider}}
```

### Disabled
```hbs
{{#> slider
  slider--IsDisabled="true"
  slider--value-min="0"
  slider--value-max="8"
  slider--value-now="5"
  slider--attribute='style="--pf-v6-c-slider--value: 62.5%;"'
  }}
  {{#> slider-main}}
    {{> slider-rail}}
    {{#> slider-steps}}
      {{> slider-step slider-step--InsetInlineStart="0%" slider-step--label="0" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="12.5%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="25%" slider-step--label="2" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="37.5%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="50%" slider-step--label="4" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="62.5%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="75%" slider-step--label="6"}}
      {{> slider-step slider-step--InsetInlineStart="87.5%"}}
      {{> slider-step slider-step--InsetInlineStart="100%" slider-step--label="8"}}
    {{/slider-steps}}
    {{> slider-thumb}}
  {{/slider-main}}
{{/slider}}

<br><br>

{{#> slider
  slider--IsDisabled="true"
  slider--value-min="0"
  slider--value-max="100"
  slider--value-now="50"
  slider--attribute='style="--pf-v6-c-slider--value: 50%;"'
  }}
  {{#> slider-main}}
    {{> slider-rail}}
    {{#> slider-steps}}
      {{> slider-step slider-step--InsetInlineStart="0%" slider-step--label="0%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="25%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="50%" slider-step--label="50%" slider-step--IsActive="true"}}
      {{> slider-step slider-step--InsetInlineStart="75%"}}
      {{> slider-step slider-step--InsetInlineStart="100%" slider-step--label="100%"}}
    {{/slider-steps}}
    {{> slider-thumb}}
  {{/slider-main}}
  {{#> slider-value}}
    {{#> input-group}}
      {{#> input-group-item input-group-item--IsFill=true}}
        {{> form-control form-control--IsDisabled="true" controlType="input" input="true" form-control--attribute=(concat 'type="number" value="' slider--value-now '" aria-label="Slider value input"')}}
      {{/input-group-item}}
      {{#> input-group-item input-group-item--IsBox=true input-group-item--IsDisabled=true}}
        {{> input-group-text input-group-text--value="%"}}
      {{/input-group-item}}
    {{/input-group}}
  {{/slider-value}}
{{/slider}}

```

## Documentation
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="slider"` | `.pf-v6-c-slider__thumb` | Identifies the element as a slider. **Required** |
| `tabindex="0"` | `.pf-v6-c-slider__thumb` | Includes the slider thumb in the page tab sequence. **Note:** only for use with non-disabled slider. **Required** |
| `aria-disabled="true"` | `.pf-v6-c-slider.pf-m-disabled .pf-v6-c-slider__thumb` | Indicates that the slider thumb is disabled. **Required** |
| `aria-valuemin="[value]"` | `.pf-v6-c-slider__thumb` | Specifies the minimum value of the slider. **Required** |
| `aria-valuemax="[value]"` | `.pf-v6-c-slider__thumb` | Specifies the maximum value of the slider. **Required** |
| `aria-valuenow="[value]"` | `.pf-v6-c-slider__thumb` | Specifies the current value of the slider. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-slider` | `<div>` | Initiates the slider component. **Required** |
| `.pf-v6-c-slider__main` | `<div>` | Initiates the slider main element. **Required** |
| `.pf-v6-c-slider__rail` | `<div>` | Initiates the slider rail. **Required** |
| `.pf-v6-c-slider__rail-track` | `<div>` | Initiates the slider rail track. **Required** |
| `.pf-v6-c-slider__steps` | `<div>` | Initiates the slider steps. |
| `.pf-v6-c-slider__step` | `<div>` | Initiates a slider step. |
| `.pf-v6-c-slider__step-tick` | `<div>` | Initiates a slider step tick. |
| `.pf-v6-c-slider__step-label` | `<div>` | Initiates a slider step label. |
| `.pf-v6-c-slider__thumb` | `<div>` | Initiates the slider thumb. **Required** |
| `.pf-v6-c-slider__value` | `<div>` | Initiates the slider value. |
| `.pf-v6-c-slider__actions` | `<div>` | Initiates the slider actions. |
| `.pf-m-disabled` | `.pf-v6-c-slider` | Modifies the slider for the disabled state. |
| `.pf-m-floating` | `.pf-v6-c-slider__thumb` | Modifies the slider value to float above the thumb. |
| `--pf-v6-c-slider--value` | `.pf-v6-c-slider` | Applies appropriate slider styles based on the current value. **Required** |
