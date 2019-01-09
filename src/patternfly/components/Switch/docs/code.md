## Overview

A Switch is an alternative to the checkbox component.

Use a switch when your user needs to perform instantaneous actions without confirmation.

Use checkbox if your user has to perform additional steps for changes to become effective.

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-label="..."` | `.pf-c-switch__input` |  Indicates the action triggered by the switch. **required**  |
| `for` | `<label>` | Each `<label>` must have a `for` attribute that matches its input id. **Required** |
| `id` | `<input type="checkbox">` | Each `<input>` must have an `id` attribute that matches its label's `for` value. **Required** |
| `checked` | `.pf-c-switch__input` |  Indicates that the input is checked |
| `disabled` | `.pf-c-switch__input` |  Indicates that the input is disabled |

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-switch` | `<label>` |  Initiates a switch. **required**  |
| `.pf-c-switch__input` | `<input type="checkbox">` |  Hide the checkbox inside the switch. **required**  |
| `.pf-c-switch__toggle` | `<span>` |  Initiates the toggle inside the switch. **required**  |
| `.pf-c-switch__check` | `<i>` |  Initiates the font awesome check mark inside the switch. **required**  |
| `.pf-c-switch__label` | `<span>` |  Initiates a label inside the switch. |
