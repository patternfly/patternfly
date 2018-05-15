## Overview

Always add a modifier class to add color to the button.

## Accessibility

An active state button will appear pressed when active. There’s no need to add a class to `<button>`s as they use a pseudo-class. However, if you are using a button as a toggle, you can still force the same active appearance with `pf-is-active` (and include the `aria-pressed="true"`) should you need to replicate the state programmatically.

Disabled buttons should include the `disabled="disabled"` attribute to indicate the state of the element to assistive technologies.

## Usage

| Class | Usage |
| -- | -- |
| `.pf-c-button` | **Applied to:** `<button>` |  **Outcome:** Initiates a button | **Required:** Yes | **Remarks:** Always use it with a modifier class. |
| `.pf-is-primary` | **Applied to:** `.pf-c-button` | **Outcome:** Modifies for primary styles | **Required:** No |
| `.pf-is-secondary` | **Applied to:** `.pf-c-button` | **Outcome:** Modifies for secondary styles | **Required:** No |
| `.pf-is-secondary-alt` | **Applied to:** `.pf-c-button` | **Outcome:** Modifies for alternate secondary styles | **Required:** No |
| `.pf-is-tertiary` | **Applied to:** `.pf-c-button` | **Outcome:** Modifies for tertiary styles | **Required:** No |
| `.pf-is-danger` | **Applied to:** `.pf-c-button` | **Outcome:** Modifies for danger styles | **Required:** No |
| `.pf-is-block` | **Applied to:** `.pf-c-button` | **Outcome:** Creates a block level button | **Required:** No |
| `.pf-is-hover` | **Applied to:** `.pf-c-button` | **Outcome:** Forces display of the hover state of the button | **Required:** No | **Notes:** This state is primarily for demonstration purposes and would not normally be used in lieu of the `:hover` pseudo-class. 
| `.pf-is-active` | **Applied to:** `.pf-c-button` | **Outcome:** Forces display of the active state of the button | **Required:** No | **Notes:** This state is primarily for demonstration purposes and would not normally be used in lieu of the `:active` pseudo-class. 
| `.pf-is-focus` | **Applied to:** `.pf-c-button` | **Outcome:** Forces display of the focus state of the button | **Required:** No | **Notes:** This state is primarily for demonstration purposes and would not normally be used in lieu of the `:focus` pseudo-class. 
