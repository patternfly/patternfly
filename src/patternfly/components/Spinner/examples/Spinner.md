---
id: Spinner
section: components
cssPrefix: pf-v5-c-spinner
---

## Examples

### Basic
```hbs
{{#> spinner}}Loading...{{/spinner}}
```

### Sizes
```hbs
{{#> spinner spinner--modifier="pf-m-sm"}}Loading...{{/spinner}}

{{#> spinner spinner--modifier="pf-m-md"}}Loading...{{/spinner}}

{{#> spinner spinner--modifier="pf-m-lg"}}Loading...{{/spinner}}

{{#> spinner spinner--modifier="pf-m-xl"}}Loading...{{/spinner}}
```

### Inline
An inline spinner inherits its font-size, so its size will match the content around it.

```hbs isBeta
{{#> spinner spinner--modifier="pf-m-inline"}}Loading...{{/spinner}}
```

### Custom size
```hbs
{{#> spinner spinner--attribute='style="--pf-c-spinner--diameter: 80px;"'}}Loading...{{/spinner}}
```

## Documentation
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="progressbar"` | `.pf-v5-c-spinner` | Indicates to assistive technologies that this is an indeterminate progress indicator. |
| `aria-label="Loading..."` | `.pf-v5-c-spinner` | Provides an accessible name for the spinner. **Note: one of `aria-label` or `aria-labelledby` is required.** |
| `aria-labelledby="[id of spinner label]"` | `.pf-v5-c-spinner` | Gives the spinner an accessible name by referring to the element that labels the spinner. |
| `aria-describedby="[id of spinner description]"` | `.pf-v5-c-spinner` | Gives the spinner an accessible description by referring to the element that describes the spinner. |

Note: If the spinner is showing that loading of a particular region of a page is in process, the author should use `aria-describedby` to point to the status, and set the `aria-busy` attribute to `true` on the region until it is finished loading.

Note: A [live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) must be present before changing its status in order for the change to be read.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-spinner` | `<svg>` |  Creates a spinner component. The default is an extra large spinner. **Required**|
| `.pf-v5-c-spinner__path` | `<circle>` |  Creates a spinner circle component. **Required**|
| `--pf-v5-c-spinner--diameter` | `.pf-v5-c-spinner` | Modifies the value for `--pf-v5-c-spinner--diameter` declaration. |

### Modifiers
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-sm` | `.pf-v5-c-spinner` |  Creates a small spinner. |
| `.pf-m-md` | `.pf-v5-c-spinner` |  Creates a medium spinner. |
| `.pf-m-lg` | `.pf-v5-c-spinner` |  Creates a large spinner. |
| `.pf-m-xl` | `.pf-v5-c-spinner` |  Creates an extra-large spinner. |
| `.pf-m-inline` | `.pf-v5-c-spinner` |  Creates an inline spinner. |
