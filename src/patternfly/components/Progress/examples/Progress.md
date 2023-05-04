---
id: Progress
section: components
cssPrefix: pf-v5-c-progress
---

## Examples
### Simple
```hbs
{{#> progress
  progress__value="33"
  progress__description="Title"
  progress__id="progress-simple-example"
}}
{{/progress}}
```

### Small
```hbs
{{#> progress
  progress__value="33"
  progress__description="Title"
  progress--modifier="pf-m-sm"
  progress__id="progress-sm-example"
}}
{{/progress}}
```

### Large
```hbs
{{#> progress
  progress__value="33"
  progress__description="Title"
  progress--modifier="pf-m-lg"
  progress__id="progress-lg-example"
}}
{{/progress}}
```

### Outside
```hbs
{{#> progress
  progress__value="33"
  progress__description="Title"
  progress--modifier="pf-m-outside pf-m-lg"
  progress__id="progress-outside-example"
}}
{{/progress}}
```

### Inside
```hbs
{{#> progress
  progress__value="33"
  progress__description="Title"
  progress--modifier="pf-m-lg"
  progress--inside="inside"
  progress__id="progress-inside-example"
}}
{{/progress}}
```

### Success
```hbs
{{#> progress
  progress__value="100"
  progress__description="Title"
  progress--success="true"
  progress__id="progress-success-example"
}}
{{/progress}}
```

### Warning
```hbs
{{#> progress
  progress__value="100"
  progress__description="Title"
  progress--warning="true"
  progress__id="progress-warning-example"
}}
{{/progress}}
```

### Failure
```hbs
{{#> progress
  progress__value="33"
  progress__description="Title"
  progress--danger="true"
  progress__id="progress-failure-example"
}}
{{/progress}}
```

### Inside success
```hbs
{{#> progress
  progress__value="100"
  progress__description="Title"
  progress--modifier="pf-m-lg"
  progress--inside="inside"
  progress--success="success"
  progress__id="progress-inside-success-example"
}}
{{/progress}}
```

### Inside warning
```hbs
{{#> progress
  progress__value="100"
  progress__description="Title"
  progress--modifier="pf-m-lg"
  progress--inside="inside"
  progress--warning="warning"
  progress__id="progress-inside-warning-example"
}}
{{/progress}}
```

### Outside failure
```hbs
{{#> progress
  progress__value="33"
  progress__description="Title"
  progress--modifier="pf-m-outside pf-m-lg"
  progress--danger="danger"
  progress__id="progress-outside-failure-example"
}}
{{/progress}}
```

### Outside static width measure
```hbs
{{#> progress
  progress__value="1"
  progress--modifier="pf-m-outside pf-m-lg"
  progress__id="progress-outside-static-width-example"
  progress-measure--modifier="pf-m-static-width"
}}
{{/progress}}
<br>
{{#> progress
  progress__value="50"
  progress--modifier="pf-m-outside pf-m-lg"
  progress__id="progress-outside-static-width-2-example"
  progress-measure--modifier="pf-m-static-width"
}}
{{/progress}}
<br>
{{#> progress
  progress__value="100"
  progress--modifier="pf-m-outside pf-m-lg"
  progress__id="progress-outside-static-width-3-example"
  progress-measure--modifier="pf-m-static-width"
}}
{{/progress}}
<br><br>
{{#> progress
  progress__value="1000"
  progress__valuetext="1,000"
  progress__valuemax="100000"
  progress__width="1"
  progress--modifier="pf-m-outside pf-m-lg"
  progress__id="progress-outside-static-width-4-example"
  progress-measure--modifier="pf-m-static-width"
  progress--attribute='style="--pf-v5-c-progress__measure--m-static-width--MinWidth: 6ch;"'
}}
{{/progress}}
<br>
{{#> progress
  progress__value="50000"
  progress__valuetext="50,000"
  progress__valuemax="100000"
  progress__width="50"
  progress--modifier="pf-m-outside pf-m-lg"
  progress__id="progress-outside-static-width-5-example"
  progress-measure--modifier="pf-m-static-width"
  progress--attribute='style="--pf-v5-c-progress__measure--m-static-width--MinWidth: 6ch;"'
}}
{{/progress}}
<br>
{{#> progress
  progress__value="100000"
  progress__valuetext="100,000"
  progress__valuemax="100000"
  progress__width="100"
  progress--modifier="pf-m-outside pf-m-lg"
  progress__id="progress-outside-static-width-6-example"
  progress-measure--modifier="pf-m-static-width"
  progress--attribute='style="--pf-v5-c-progress__measure--m-static-width--MinWidth: 6ch;"'
}}
{{/progress}}
```

### On single line
```hbs
{{#> progress
  progress__value="33"
  progress--modifier="pf-m-singleline"
  progress__id="progress-singleline-example"
}}
{{/progress}}
```

### Without measure
```hbs
{{#> progress
  progress__value="33"
  progress__description="Title"
  progress--no-measure="true"
  progress__id="progress-no-measure-example"
}}
{{/progress}}
```

### Failure without measure
```hbs
{{#> progress
  progress__value="33"
  progress--no-measure="true"
  progress__description="Title"
  progress--danger="true"
  progress__id="progress-no-measure-failure-example"
}}
{{/progress}}
```

### Finite step
```hbs
{{#> progress
  progress__value="2"
  progress__valuemax="5"
  progress__width="40"
  progress__valuetext="2 of 5 units"
  progress__description="Title"
  progress--dynamic="true"
  progress__id="progress-finite-step-example"
}}
{{/progress}}
```

### Truncate description
```hbs
{{#> progress
  progress__value="33"
  progress__description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ultricies lectus, eu lobortis mauris. Morbi pretium arcu id rhoncus mollis. Donec accumsan tincidunt enim nec varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti."
  progress__id="progress-truncate-description-example"
  progress-description--modifier="pf-m-truncate"
}}
{{/progress}}
```

### Helper text
```hbs
{{#> progress
  progress__value="33"
  progress__description="Title"
  progress__id="progress-helper-text-example"
  helper-text--value="Progress helper text"
}}
{{/progress}}
```

### Non-percentage progress
If the status that displays with the bar is not a percentage, then the ARIA tag `aria-valuetext` should be used to provide this status to screen reader users. This is the only case when setting the `aria-valuemax` to a value other than "100" is recommended, given how different screen readers handle these attributes.

### Progress step instruction
```hbs
{{#> progress
  progress__value="2"
  progress__valuemax="5"
  progress__width="40"
  progress__valuetext="Step 2: Copying files"
  progress__description="Title"
  progress--dynamic="true"
  progress__id="progress-step-instruction-example"
}}
{{/progress}}
```

## Documentation
### Overview
### Accessibility
If this component is describing the loading progress of a particular region of a page, the author should use `aria-describedby` to point to the status, and set the `aria-busy` attribute to `true` on the region until it is finished loading.

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="progressbar"` | `.pf-v5-c-progress__bar` |  This role is used for an element that displays the progress status for a task that takes a long time or consists of several steps. |
| `aria-valuenow=""` | `.pf-v5-c-progress__bar` |  This value needs to be updated as progress continues. |
| `aria-valuemin="0"` | `.pf-v5-c-progress__bar` |  The minimum value for the progress bar. |
| `aria-valuemax="100"` | `.pf-v5-c-progress__bar` |  The maximum value for the progress bar. If the progress is only defined using `aria-valuenow` (e.g a percentage), the value should be set to "100". If the progress is defined using `aria-valuetext`, then this value can be a number other than 100. For example, if `aria-valuetext` is "2 of 5 units", then `aria-valuemax` can be "5" and `aria-valuenow` can be "2". |
| `aria-label="[id of .pf-v5-c-progress__description]"` | `.pf-v5-c-progress__bar` | Provides an accessible name for the progress component. |
| `aria-labelledby="[id element that labels the progress]"` | `.pf-v5-c-progress__bar` | Provides an accessible name for the progress component. |
| `aria-describedby="[id of element that describes the progress]"` | `.pf-v5-c-progress__bar` | Provides an accessible description for the progress component. |
| `aria-valuetext="[loading state]"` | `.pf-v5-c-progress__bar` |  Provide a text string that communicates current status. Only use if the important information about status is included in the text string. Do not use if percentage is the most important value to communicate. Some screen readers will ignore the percentage value determined from `aria-valuenow` when `aria-valuetext` is used. |
| `aria-hidden="true"` | `.pf-v5-c-progress__status` |  Hides the visible progress bar status from screen readers. This information is communicated by the aria attributes defined on the `.pf-v5-c-progress__bar` element. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-progress` | `<div>` |  Initiates a progress component. |
| `.pf-v5-c-progress__description` | `<div>` |  The description for a progress bar. |
| `.pf-v5-c-progress__status` | `<div>` |  Displays the % of progress and status icons. |
| `.pf-v5-c-progress__measure` | `<span>` |  Displays the % complete. |
| `.pf-v5-c-progress__status-icon` | `<span>` |  Displays the status icon. (optional) |
| `.pf-v5-c-progress__bar` | `<div>` |  Displays across the entire width and represents the completed state. |
| `.pf-v5-c-progress__indicator` | `<div>` |  Displays with the `.pf-v5-c-progress__bar` to indicate the progress so far. |
| `.pf-v5-c-progress__helper-text` | `<div>` |  Displays additional text below the progress bar. (optional) |
| `.pf-m-lg` | `.pf-v5-c-progress` |  Modifies the progress bar to be larger. |
| `.pf-m-sm` | `.pf-v5-c-progress` |  Modifies the progress bar to be smaller. |
| `.pf-m-inside` | `.pf-v5-c-progress` |  Shows the measure within the progress indicator. NOTE: This option requires `.pf-m-lg`.|
| `.pf-m-outside` | `.pf-v5-c-progress` |  Shows the measure and status icon to the right of the progress bar. |
| `.pf-m-singleline` | `.pf-v5-c-progress` | Modifies the progress component to exist on one row. If a measure is needed, use with `.pf-m-inside` or `.pf-m-outside`|
| `.pf-m-success` | `.pf-v5-c-progress` |  Changes the appearance of the progess component to indicate a success state. |
| `.pf-m-warning` | `.pf-v5-c-progress` |  Changes the appearance of the progess component to indicate a warning state. |
| `.pf-m-danger` | `.pf-v5-c-progress` |  Changes the appearance of the progess component to indicate a danger (failure) state. |
| `.pf-m-truncate` | `.pf-v5-c-progress__description` | Modifies the description to display a single line and truncate any overflow text with ellipses. |
| `.pf-m-static-width` | `.pf-v5-c-progress.pf-m-outside .pf-v5-c-progress__measure` | Modifies the measure element to have a static `min-width` that will hold 0-100%. Overridable by setting `--pf-v5-c-progress__measure--m-static-width--MinWidth`. |
