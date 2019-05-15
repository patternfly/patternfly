## Accessibility

Attribute | Applied To | Outcome
-- | -- | --
`aria-label` | `.pf-c-mega-menu__toggle` and `.pf-c-mega-menu__menu .pf-c-nav` | Provides an accessible label for the toggle and navigation menu. The same label should be used for both.
`aria-expanded="false"` | `.pf-c-mega-menu__toggle` |  Indicates that the menu is hidden. |
`aria-expanded="true"` | `.pf-c-mega-menu__toggle` |  Indicates that the menu is visible. |
`aria-current="page"` | `.pf-c-nav__link.pf-m-current` | Indicates the current page link.
`aria-label="[label of currently selected item in mega menu]"` | `ul.pf-c-nav__list` | The next sibling to the mega menu component should be the `ul.pf-c-nav__list` element in the nav component. This attribute provides an accessible label for assistive technologies, and names the list in the global navigation after the currently selected item in the mega menu.


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-mega-menu` | `<div>` |  Initiates the mega menu. |
| `.pf-c-mega-menu__header` | `<div>` |  Initiates the mega header. |
| `.pf-c-mega-menu__title` | `<div>` |  Initiates the mega menu title area. |
| `.pf-c-title.pf-m-md` | `<h1>` |  Initiates the mega menu title. |
| `.pf-c-mega-menu__description` | `<p>` |  Initiates the mega menu description. |
| `.pf-c-mega-menu__toggle` | `<button>` |  Initiates the mega menu. |
| `.pf-c-mega-menu__menu` | `<div>` |  Initiates the mega menu menu. |
| `.pf-c-nav` | `<nav>` |  Initiates the mega menu menu nav. |
| `.pf-c-mega-menu__menu-link-icon` | `<img>`, `<svg>`, `<i>` |  Initiates the mega menu. |
| `.pf-m-expanded` | `.pf-c-mega-menu` |  Modifies for the expanded state. |