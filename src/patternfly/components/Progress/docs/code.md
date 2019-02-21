## Overview

## Accessibility

Note: If this component is describing the loading progress of a particular region of a page, the author should use `aria-describedby` to point to the status, and set the `aria-busy` attribute to `true` on the region until it is finished loading. 

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `role="progressbar"` | `.pf-c-progress` |  This role is used for an element that displays the progress status for a task that takes a long time or consists of several steps. |
| `aria-valuenow=""` | `.pf-c-progress` |  This value needs to be updated as progress continues. |
| `aria-valuemin="0"` | `.pf-c-progress` |  The minimum value for the progress bar. |
| `aria-valuemax="100"` | `.pf-c-progress` |  The maximum value for the progress bar. |
| `aria-describedby="[id of .pf-c-progress__description]"` | `.pf-c-progress` |  The description of what progress is being shown. |
| `aria-valuetext="[loading state]"` | `.pf-c-progress` |  Provide a text string that communicates current status. Only use if the important information about status is included in the text string. Do no use if percentage is the most important value to communicate. Some screen readers will ignore the percentage value determined from `aria-valuenow` when `aria-valuetext` is used. |


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
