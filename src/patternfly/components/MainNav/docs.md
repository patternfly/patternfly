## Overview


## Accessibility

Disabled links must have the `aria-disabled` set to `true`, and active links must be `aria-current` set to `true`.

## Usage

| Class | Usage |
| -- | -- |
| `.pf-c-main-nav` **Applied to:** `<nav>` |  **Outcome:** Declares the main navigation **Required:** Yes |
| `.pf-c-main-nav__list` **Applied to:** `<ul>` |  **Outcome:** Resets the list default styles **Required:** Yes |
| `.pf-c-main-nav__item` **Applied to:** `<li>` |  **Outcome:** Explicitly sets the child for the gallery **Required:** No **Remarks:** This class isn't necessary, but it is included to keep inline with BEM convention, and to provide an entity that will later be used for applying modifiers.
| `.pf-c-main-nav__link` **Applied to:** `<a>` |  **Outcome:** Positions the elements within and resets styles for the anchor **Required:** Yes
| `.pf-c-main-nav__link-icon` **Applied to:** `<span>` |  **Outcome:** Styles the icon  **Required:** Yes |
| `.pf-c-main-nav__link-text` **Applied to:** `<span>` |  **Outcome:** Styles the text on the link  **Required:** Yes |
| `.pf-is-active` **Applied to:** `.pf-c-main-nav-link` |  **Outcome:** Defines styles for the active state **Required:** No **Remarks:** You must add the aria tag to make this accessible |
| `.pf-is-disabled` **Applied to:** `.pf-c-main-nav-link` |  **Outcome:** Defines styles for the disable state **Required:** No **Remarks:** You must add the aria tag to make this accessible |
