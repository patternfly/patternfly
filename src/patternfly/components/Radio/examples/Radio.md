---
id: Radio
section: components
subsection: forms
cssPrefix: pf-v5-c-radio
---

## Examples
### Basic
```hbs
{{> radio radio--id="radio-basic" radio-label--text="Basic radio"}}
```

### Checked
```hbs
{{> radio radio--id="radio-checked" radio-label--text="Radio checked" radio--IsChecked=true}}
```

### Label wrapping input
```hbs
{{> radio radio--id="radio-label-wrapping-input" radio-label--text="Radio label wraps input" radio--IsLabelWrapped=true}}
```

### Reversed
```hbs
{{> radio radio--id="radio-reversed" radio-label--text="Radio reversed" radio--IsReversed=true}}
```

### Disabled
```hbs
{{> radio radio--id="radio-disabled" radio-input--text="Radio disabled" radio--IsDisabled=true}}
{{> radio radio--id="radio-disabled" radio-input--text="Radio disabled" radio--IsDisabled=true radio--IsChecked=true}}
```

### With description
```hbs
{{> radio
    radio--id="radio-with-description"
    radio-label--text="Radio with description"
    radio-description--text="Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS od GCP."
  }}
```

### With body
```hbs
{{> radio
    radio--id="radio-with-body"
    radio-label--text="Radio with body"
    radio-body--text="This is where custom content goes."}}
```

### With description and body
```hbs
{{> radio
    radio--id="radio-with-description-body"
    radio-label--text="Radio with description and body"
    radio-body--text="This is where custom content goes."
  }}
```

### Standalone input
```hbs
{{> radio radio--id="radio-standalon-input" radio--IsStandalone=true}}
```

## Documentation
### Overview
The Radio component is provided for use cases outside of forms. If it is used without label text ensure some sort of label for assistive technologies. (for example: `aria-label`)

If you extend this component or modify the styles of this component, then make sure any hover styles defined are applied to the clickable elements, like `<input>` or `<label>` since hover styles are used to convey the clickable target area of an element. To maximize the target area, use the example html where the `<label>` is the wrapping element.

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `disabled` | `<input type="radio">` | Indicates that the element is unavailable and removes it from keyboard focus. **Required when input is disabled** |
| `aria-describedby` | `.pf-v5-c-radio__input` |  When using `.pf-v5-c-radio__description` make use of this on the input. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-radio` | `<div>`, `<label>` |  Initiates the radio component. **Required**  |
| `.pf-v5-c-radio__input` | `<input type="radio">` |  Initiates a radio input. **Required**  |
| `.pf-v5-c-radio__label` | `<label>`, `<span>` |  Initiates a label. **Required**  |
| `.pf-v5-c-radio__description` | `<span>` | Initiates a radio description. |
| `.pf-v5-c-radio__body` | `<span>` | Initiates a radio body. |
| `.pf-m-standalone` | `.pf-v5-c-radio` |  Modifies the radio component for use with a standalone `<input type="radio">`. **Required when there is no label** |
| `.pf-m-disabled` | `.pf-v5-c-radio__label` |  Modifies the radio component for the disabled state. **Required when input is disabled** |
