## Overview

Checkbox and Radio are provided in the check component for use cases outside of forms. If they are used without label text ensure some sort of label for assistive technologies. (for example: `aria-label`)

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `disabled` | `<input type="checkbox">`,`<input type="radio">` | Indicates that the element is unavailable and removes it from keyboard focus. **Required when input is disabled** |

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-check` | `<div>`, `<label>` |  Initiates a checkbox or radio component. **Required**  |
| `.pf-c-check__input` | `<input type="checkbox">`,`<input type="radio">` |  Initiates a checkbox or radio. **Required**  |
| `.pf-c-check__label` | `<label>`, `<span>` |  Initiates a label. **Required**  |
| `.pf-m-disabled` | `.pf-c-check__label` |  Initiates a disabled style for labels. **Required when input is disabled** |