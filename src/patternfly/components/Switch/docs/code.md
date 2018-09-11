## Overview

A Switch is an alternative to the checkbox component.

Use a switch when your user needs to perform instantaneous actions without confirmation.

Use checkbox if your user has to perform additional steps for changes to become effective.

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `role="switch"` | `.pf-c-switch` |  Identifies the element as a switch. **required** |
| `aria-checked="true"` | `.pf-c-switch` |  Indicates that the switch is on |
| `aria-checked="false"` | `.pf-c-switch` |  Indicates that the switch is off |
| `aria-disabled="true"` | `.pf-c-switch__input` |  Indicates that the input is disabled |
| `aria-disabled="false"` | `.pf-c-switch__input` |  Indicates that the input is disabled |
| `disabled` | `.pf-c-switch__input` |  Indicates that the input is disabled |

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-switch` | `<span>` |  Initiates a switch. **required**  |
| `.pf-c-switch__input` | `<input type="checkbox">` |  Hide the checkbox inside the switch. **required**  |
| `.pf-c-switch__toggle` | `<span>` |  Initiates the toggle inside the switch. **required**  |
| `.pf-c-switch__label` | `<label>` |  Initiates a label. **required**  |
| `.pf-m-off` | `.pf-c-switch__toggle` `.pf-c-switch__label`  |  Changes the appearance of the toggle or the label to be off. |
| `.pf-m-disabled` | `.pf-c-switch__toggle` `.pf-c-switch__label` |  Changes the appearance of the toggle or the label to be disabled. |
