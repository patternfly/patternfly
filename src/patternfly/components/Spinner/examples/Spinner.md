---
id: Spinner
section: components
cssPrefix: pf-c-spinner
---

## Examples

### Basic
```hbs
{{#> spinner spinner--IsSvg="true"}}Loading...{{/spinner}}
```

### Sizes
```hbs
{{#> spinner spinner--IsSvg="true" spinner--modifier="pf-m-sm"}}Loading...{{/spinner}}

{{#> spinner spinner--IsSvg="true" spinner--modifier="pf-m-md"}}Loading...{{/spinner}}

{{#> spinner spinner--IsSvg="true" spinner--modifier="pf-m-lg"}}Loading...{{/spinner}}

{{#> spinner spinner--IsSvg="true" spinner--modifier="pf-m-xl"}}Loading...{{/spinner}}
```

### Custom size
```hbs
{{#> spinner spinner--IsSvg="true" spinner--attribute='style="--pf-c-spinner--diameter: 80px;"'}}Loading...{{/spinner}}
```

### Basic (legacy)
```hbs
{{#> spinner}}Loading...{{/spinner}}
```

### Sizes (legacy)
```hbs
{{#> spinner spinner--modifier="pf-m-sm"}}Loading...{{/spinner}}

{{#> spinner spinner--modifier="pf-m-md"}}Loading...{{/spinner}}

{{#> spinner spinner--modifier="pf-m-lg"}}Loading...{{/spinner}}

{{#> spinner spinner--modifier="pf-m-xl"}}Loading...{{/spinner}}
```


## Documentation
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="progressbar"` | `.pf-c-spinner` | Indicates to assistive technologies that this is an indeterminate progress indicator. |
| `aria-label="Loading..."` | `.pf-c-spinner` | Provides an accessible name for the spinner. **Note: one of `aria-label` or `aria-labelledby` is required.** |
| `aria-labelledby="[id of spinner label]"` | `.pf-c-spinner` | Gives the spinner an accessible name by referring to the element that labels the spinner. |
| `aria-describedby="[id of spinner description]"` | `.pf-c-spinner` | Gives the spinner an accessible description by referring to the element that describes the spinner. |

Note: If the spinner is showing that loading of a particular region of a page is in process, the author should use `aria-describedby` to point to the status, and set the `aria-busy` attribute to `true` on the region until it is finished loading.

Note: A [live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) must be present before changing its status in order for the change to be read.


### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-spinner` | `<svg>` |  Creates a spinner component. The default is an extra large spinner. **Required**|
| `.pf-c-spinner__path` | `<circle>` |  Creates a spinner circle component. **Required**|
| `--pf-c-spinner--diameter` | `.pf-c-spinner` | Modifies the value for `--pf-c-spinner--diameter` declaration. |

### Usage (legacy)
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-spinner` | `<span>` |  Creates a spinner component. The default is an extra large spinner. **Required**|
| `.pf-c-spinner__clipper` | `<span>` |  Creates the spinning line. **Required**|
| `.pf-c-spinner__lead-ball` | `<span>` |  Rounds out the beginning of the spinning line. **Required**|
| `.pf-c-spinner__tail-ball` | `<span>` |  Rounds out the end of the spinning line. **Required**|

### Modifiers
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-sm` | `.pf-c-spinner` |  Creates a small spinner. |
| `.pf-m-md` | `.pf-c-spinner` |  Creates a medium spinner. |
| `.pf-m-lg` | `.pf-c-spinner` |  Creates a large spinner. |
| `.pf-m-xl` | `.pf-c-spinner` |  Creates an extra-large spinner. |
