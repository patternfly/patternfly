---
id: Checkbox
section: components
subsection: forms
cssPrefix: pf-v5-c-check
---

## Examples
### Basic
```hbs
{{> check check--id="basic-example-example" check-label--text="Check"}}
```

### Required
```hbs
{{> check check--id="check-required-example" check-label--text="Check" check--IsRequired=true}}
```

### Checked
```hbs
{{> check check--id="check-checked-example" check-label--text="Check checked" check-input--IsChecked=true}}
```

### Label wrapping input
```hbs
{{> check check--id="check-label-wrapping-input-example" check-label--text="Check label wraps input" check--IsLabelWrapped=true}}
```

### Reversed
```hbs
{{> check check--id="check-reversed-example" check-label--text="Check reversed" check--IsReversed=true}}
```

### Disabled
```hbs
{{> check check--id="check-disabled-example" check-label--text="Check disabled" check--IsDisabled=true}}
{{> check check--id="check-disabled-checked-example" check-label--text="Check disabled checked" check--IsDisabled=true check-input--IsChecked=true}}
```

### With description
```hbs
{{> check
    check--id="check-with-example-description-example" 
    check-label--text="Check with description" 
    check-description--text="Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS od GCP."
  }}
```

### With body
```hbs
{{> check check--id="check-with-example-body-example" check-label--text="Check with body" check-body--text="This is where custom content goes."}}
```

### With description and body
```hbs
{{> check
    check--id="check-with-example-description-body-example"
    check-label--text="Check with description and body"
    check-description--text="Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS od GCP."
    check-body--text="This is where custom content goes."
  }}
```

### Standalone input
```hbs
{{> check check--id="standalone-input-example" check--IsStandalone=true check--IsLabelWrapped=true}}
```

## Documentation
### Overview
The Check component is provided for use cases outside of forms. If it is used without label text ensure some sort of label for assistive technologies. (for example: `aria-label`)

If you extend this component or modify the styles of this component, then make sure any hover styles defined are applied to the clickable elements, like `<input>` or `<label>` since hover styles are used to convey the clickable target area of an element. To maximize the target area, use the example html where the `<label>` is the wrapping element.

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `disabled` | `.pf-v5-c-check__input` | Indicates that the element is unavailable and removes it from keyboard focus. **Required when input is disabled** |
| `required` | `.pf-v5-c-check__input` | Indicates that the element is required. |
| `aria-describedby` | `.pf-v5-c-check__input` |  When using `.pf-v5-c-check__description` make use of this on the input. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-check` | `<div>`, `<label>` |  Initiates the check component. **Required**  |
| `.pf-v5-c-check__input` | `<input type="checkbox">` |  Initiates a check input. **Required**  |
| `.pf-v5-c-check__label` | `<label>`, `<span>` |  Initiates a label. **Required**  |
| `.pf-v5-c-check__label-required` | `<span>` |  Initiates a required indicator. |
| `.pf-v5-c-check__description` | `<span>` |  Initiates a check description. |
| `.pf-v5-c-check__body` | `<span>` |  Initiates a check body. |
| `.pf-m-standalone` | `.pf-v5-c-check` |  Modifies the check component for use with a standalone `<input type="checkbox">`. **Required when there is no label** |
| `.pf-m-disabled` | `.pf-v5-c-check__label` |  Modifies the check component for the disabled state. **Required when input is disabled** |
