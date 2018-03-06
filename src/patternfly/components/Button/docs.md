## Overview

Always add a modifier class to add color to the button.

## Accessibility

An active state buttons will appear pressed when active. There’s no need to add a class to `<button>`s as they use a pseudo-class. However, you can still force the same active appearance with `.pf-is-active` (and include the `aria-pressed="true"` attribute) should you need to replicate the state programmatically.

Disabled buttons should include the `aria-disabled="true"` attribute to indicate the state of the element to assistive technologies.

The `.pf-is-disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s, but that CSS property is not yet standardized. In addition, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a `tabindex="-1"` attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.

## Usage

| Class | Usage |
| `.pf-c-button` **Applied to:** `<a>`, `<button>` |  **Outcome:** Initiates a button **Required:** Yes **Remarks:** Always use it with a modifier class. |
| `.pf-is-primary` **Applied to:** `.pf-c-button` | **Outcome:** Modifies for primary styles **Required:** No |
| `.pf-is-secondary` **Applied to:** `.pf-c-button` | **Outcome:** Modifies for secondary styles **Required:** No |
| `.pf-is-tertiary` **Applied to:** `.pf-c-button` | **Outcome:** Modifies for tertiary styles **Required:** No |
| `.pf-is-danger` **Applied to:** `.pf-c-button` | **Outcome:** Modifies for tertiary styles **Required:** No |
| `.pf-is-block` **Applied to:** `.pf-c-button` | **Outcome:** Creates a block level button **Required:** No |
| `.pf-is-small` **Applied to:** `.pf-c-button` | **Outcome:** Creates a small button **Required:** No |
| `.pf-is-small` **Applied to:** `.pf-c-button` | **Outcome:** Creates a large button **Required:** No |