## Overview

A Switch is an alternative to the checkbox component.

Use a switch when your user needs to perform instantaneous actions without confirmation.

Use checkbox if your user has to perform additional steps for changes to become effective.

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-labelledby="..."` | `.pf-c-switch__input` |  Indicates the action triggered by the switch. **required**  |
| `for` | `<label>` | Each `<label>` must have a `for` attribute that matches its input id. **Required** |
| `id` | `<input type="checkbox">` | Each `<input>` must have an `id` attribute that matches its label's `for` value. **Required** |
| `checked` | `.pf-c-switch__input` |  Indicates that the input is checked |
| `disabled` | `.pf-c-switch__input` |  Indicates that the input is disabled |
| `aria-hidden="true"` | `.pf-c-switch__label` | Hides the text from the screen reader. |

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-switch` | `<label>` |  Initiates a switch. **required**  |
| `.pf-c-switch__input` | `<input type="checkbox">` |  Hide the checkbox inside the switch. **required**  |
| `.pf-c-switch__toggle` | `<span>` |  Initiates the toggle inside the switch. **required**  |
| `.pf-c-switch__toggle-icon` | `<i>` | Initiates an icon inside the switch toggle. **required when the switch is used without a label** |
| `.pf-c-switch__label` | `<span>` |  Initiates a label inside the switch. |
| `.pf-m-on` | `.pf-c-switch__label` | Modifies the switch label to display the on message. |
| `.pf-m-off` | `.pf-c-switch__label` | Modifies the switch label to display the off message. |
