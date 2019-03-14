## Overview

## Accessibility

Note: If this component is describing the loading progress of a particular region of a page, the author should use `aria-describedby` to point to the status, and set the `aria-busy` attribute to `true` on the region until it is finished loading. 

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `role="progressbar"` | `.pf-c-progress__bar` |  This role is used for an element that displays the progress status for a task that takes a long time or consists of several steps. |
| `aria-valuenow=""` | `.pf-c-progress__bar` |  This value needs to be updated as progress continues. |
| `aria-valuemin="0"` | `.pf-c-progress__bar` |  The minimum value for the progress bar. |
| `aria-valuemax="100"` | `.pf-c-progress__bar` |  The maximum value for the progress bar. If the progress is only defined using `aria-valuenow` (e.g a percentage), the value should be set to "100". If the progress is defined using `aria-valuetext`, then this value can be a number other than 100. For example, if `aria-valuetext` is "2 of 5 units", then `aria-valuemax` can be "5" and `aria-valuenow` can be "2". |
| `aria-describedby="[id of .pf-c-progress__description]"` | `.pf-c-progress__bar` |  The description of what progress is being shown. |
| `aria-valuetext="[loading state]"` | `.pf-c-progress__bar` |  Provide a text string that communicates current status. Only use if the important information about status is included in the text string. Do not use if percentage is the most important value to communicate. Some screen readers will ignore the percentage value determined from `aria-valuenow` when `aria-valuetext` is used. |
| `aria-hidden="true"` | `.pf-c-progress__status` |  Hides the visible progress bar status from screen readers. This information is communicated by the aria attributes defined on the `.pf-c-progress__bar` element. |

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-progress` | `<div>` |  Initiates a progress component. |
| `.pf-c-progress__description` | `<div>` |  The description for a progress bar. |
| `.pf-c-progress__status` | `<div>` |  Displays the % of progress and status icons. |
| `.pf-c-progress__measure` | `<span>` |  Displays the % complete. |
| `.pf-c-progress__status-icon` | `<span>` |  Displays the status icon. (optional) |
| `.pf-c-progress__bar` | `<div>` |  Displays across the entire width and represents the completed state. |
| `.pf-c-progress__indicator` | `<div>` |  Displays with the `.pf-c-progress__bar` to indicate the progress so far. |
| `.pf-m-lg` | `.pf-c-progress` |  Modifies the progress bar to be larger. |
| `.pf-m-sm` | `.pf-c-progress` |  Modifies the progress bar to be smaller. |
| `.pf-m-inside` | `.pf-c-progress` |  Shows the measure within the progress indicator. NOTE: This option requires `.pf-m-lg`.|
| `.pf-m-outside` | `.pf-c-progress` |  Shows the measure and status icon to the right of the progress bar. |
| `.pf-m-singleline` | `.pf-c-progress` | Modifies the progress component to exist on one row. If a measure is needed, use with `.pf-m-inside` or `.pf-m-outside`|
| `.pf-m-success` | `.pf-c-progress` |  Changes the appearance of the progess component to indicate a success state. |
| `.pf-m-danger` | `.pf-c-progress` |  Changes the appearance of the progess component to indicate a danger (failure) state. |
