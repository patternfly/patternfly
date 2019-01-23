## Overview

The Radio component is provided for use cases outside of forms. If it is used without label text ensure some sort of label for assistive technologies. (for example: `aria-label`)

If you extend this component or modify the styles of this component, then make sure any hover styles defined are applied to the clickable elements, like `<input>` or `<label>` since hover styles are used to convey the clickable target area of an element. To maximize the target area, use the example html where the `<label>` is the wrapping element.

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `disabled` | `<input type="radio">` | Indicates that the element is unavailable and removes it from keyboard focus. **Required when input is disabled** |

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-radio` | `<div>`, `<label>` |  Initiates the radio component. **Required**  |
| `.pf-c-radio__input` | `<input type="radio">` |  Initiates a radio input. **Required**  |
| `.pf-c-radio__label` | `<label>`, `<span>` |  Initiates a label. **Required**  |
| `.pf-m-disabled` | `.pf-c-radio__label` |  Initiates a disabled style for labels. **Required when input is disabled** |