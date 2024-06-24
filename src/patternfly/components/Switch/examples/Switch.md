---
id: Switch
section: components
cssPrefix: pf-v6-c-switch
---

## Examples
### Basic
```hbs
{{#> switch switch--attribute='for="switch-with-label-1"'}}
  {{#> switch-input switch-input--id="switch-with-label-1" aria-labelledby="switch-with-label-1-text" switch-input--attribute='checked'}}{{/switch-input}}
  {{#> switch-toggle}}{{/switch-toggle}}
  {{#> switch-label switch-label--id="switch-with-label-1-text" switch-label--attribute='aria-hidden="true"'}}Togglable option in basic example{{/switch-label}}
{{/switch}}
```

### Reverse (toggle on right)
```hbs
{{#> switch switch--attribute='for="switch-reverse-1"' switch--modifier="pf-m-reverse"}}
  {{#> switch-input switch-input--id="switch-reverse-1" aria-labelledby="switch-reverse-1-text" switch-input--attribute='checked'}}{{/switch-input}}
  {{#> switch-toggle}}{{/switch-toggle}}
  {{#> switch-label switch-label--id="switch-reverse-1-text" switch-label--modifier="pf-m-on" switch-label--attribute='aria-hidden="true"'}}Togglable option in reverse example{{/switch-label}}
{{/switch}}
```

### Label and check icon
```hbs
{{#> switch switch--attribute='for="switch-label-check-1"'}}
  {{#> switch-input switch-input--id="switch-label-check-1" aria-labelledby="switch-label-check-1-text" switch-input--attribute='checked'}}{{/switch-input}}
  {{#> switch-toggle}}
    {{#> switch-toggle-icon}}{{/switch-toggle-icon}}
  {{/switch-toggle}}
  {{#> switch-label switch-label--id="switch-label-check-1-text" switch-label--modifier="pf-m-on" switch-label--attribute='aria-hidden="true"'}}Togglable option in check icon example{{/switch-label}}
{{/switch}}
```

### Without visible text label
```hbs
{{#> switch switch--attribute='for="switch-with-icon-1"'}}
  {{#> switch-input aria-label="Togglable option in no text label example" switch-input--id="switch-with-icon-1" switch-input--attribute='checked'}}{{/switch-input}}
  {{#> switch-toggle}}
    {{#> switch-toggle-icon}}{{/switch-toggle-icon}}
  {{/switch-toggle}}
{{/switch}}
```

### Disabled
```hbs
{{#> switch switch--attribute='for="switch-disabled-1"'}}
  {{#> switch-input switch-input--id="switch-disabled-1" aria-labelledby="switch-disabled-1-text" switch-input--attribute='disabled checked'}}{{/switch-input}}
  {{#> switch-toggle}}{{/switch-toggle}}
  {{#> switch-label switch-label--id="switch-disabled-1-text" switch-label--attribute='aria-hidden="true"'}}Togglable option in disabled example{{/switch-label}}
{{/switch}}
<br/>
<br/>
{{#> switch switch--attribute='for="switch-disabled-2"'}}
  {{#> switch-input switch-input--id="switch-disabled-2" aria-labelledby="switch-disabled-2-text" switch-input--attribute='disabled'}}{{/switch-input}}
  {{#> switch-toggle}}{{/switch-toggle}}
  {{#> switch-label switch-label--id="switch-disabled-2-text" switch-label--attribute='aria-hidden="true"'}}Togglable option in basic example{{/switch-label}}
{{/switch}}
<br/>
<br/>
{{#> switch switch--attribute='for="switch-with-icon-disabled-1"'}}
  {{#> switch-input aria-label="Togglable option in disabled icon example" switch-input--id="switch-with-icon-disabled-1" switch-input--attribute='disabled checked'}}{{/switch-input}}
  {{#> switch-toggle}}
    {{#> switch-toggle-icon}}{{/switch-toggle-icon}}
  {{/switch-toggle}}
{{/switch}}
<br/>
<br/>
{{#> switch switch--attribute='for="switch-with-icon-disabled-2"'}}
  {{#> switch-input aria-label="Togglable option in disabled icon example" switch-input--id="switch-with-icon-disabled-2" switch-input--attribute='disabled'}}
  {{/switch-input}}
  {{#> switch-toggle}}
    {{#> switch-toggle-icon}}{{/switch-toggle-icon}}
  {{/switch-toggle}}
{{/switch}}
```

## Documentation
### Overview
A switch is an alternative to the checkbox component.

Use a switch when your user needs to perform instantaneous actions without confirmation.

Use checkbox if your user has to perform additional steps for changes to become effective.

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-labelledby="..."` or `aria-label="..."` | `.pf-v6-c-switch__input` | Indicates the behavior of the switch. This label should never dynamically change, and should always describe the behavior of the switch when its checked state is true. If an additional text label is included with the switch besides `.pf-v6-c-switch__label`, then `aria-labelledby` can reference the `id` of this text, but it must be in addition to the text of `.pf-v6-c-switch__label`. If there is no visible text label provided, then an `aria-label` must be provided. **Required** |
| `for` | `<label>` | Each `<label>` must have a `for` attribute that matches its input id. **Required** |
| `id` | `<input type="checkbox">` | Each `<input>` must have an `id` attribute that matches its label's `for` value. **Required** |
| `role="switch"` | `<input type="checkbox">` | Exposes the element as a switch for assistive technologies. **Required** |
| `id` | `.pf-v6-c-switch__label` | Each `.pf-v6-c-switch__label` must have an `id` attribute that matches the `aria-labelledby` on `.pf-v6-c-switch__input`. |
| `checked` | `.pf-v6-c-switch__input` |  Indicates that the input is checked |
| `disabled` | `.pf-v6-c-switch__input` |  Indicates that the input is disabled |
| `aria-hidden="true"` | `.pf-v6-c-switch__label` | Hides the text from the screen reader. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-switch` | `<label>` |  Initiates a switch. **Required**  |
| `.pf-v6-c-switch__input` | `<input type="checkbox">` |  Hide the checkbox inside the switch. **Required**  |
| `.pf-v6-c-switch__toggle` | `<span>` |  Initiates the toggle inside the switch. **Required**  |
| `.pf-v6-c-switch__toggle-icon` | `<span>` | Initiates the switch toggle icon wrapper. **Required when the switch is used without a label** |
| `.pf-v6-c-switch__label` | `<span>` |  Initiates a label inside the switch. |
| `.pf-m-reverse` | `.pf-v6-c-switch` | Positions the switch toggle to the right of the label. |
