## Accessibility

| Attribute | Applied | Outcome |
| -- | -- | -- |
| `aria-label="Application launcher"` | `.pf-c-app-launcher` |  Gives the app launcher element an accessible name. **Required** |
| `aria-expanded="false"` | `.pf-c-button` |  Indicates that the menu is hidden. |
| `aria-expanded="true"` | `.pf-c-button` |  Indicates that the menu is visible. |
| `aria-label="Actions"` | `.pf-c-button` | Provides an accessible name for the app launcher when an icon is used. **Required** |
| `hidden` | `.pf-c-app-launcher__menu` | Indicates that the menu is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies. |
| `disabled` | `button.pf-c-app-launcher__menu-item` | When the menu item uses a button element, indicates that it is unavailable and removes it from keyboard focus. |
| `aria-disabled="true"` | `a.pf-c-app-launcher__menu-item` | When the menu item uses a link element, indicates that it is unavailable. |
| `tabindex="-1"` | `a.pf-c-app-launcher__menu-item` | When the menu item uses a link element, removes it from keyboard focus. |
| `aria-hidden="true"` | `.pf-c-app-launcher__menu-item-external-icon` | Hides the icon from assistive technologies. |

## Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-c-app-launcher` | `<nav>` | Defines the parent wrapper of the app launcher. |
| `.pf-c-app-launcher__menu` | `<ul>`, `<div>` | Defines the parent wrapper of the menu items. Use a `<div>` if your app launcher has groups. |
| `.pf-c-app-launcher__group` | `<section>` | Defines a group of items. Required when there is more than one group. |
| `.pf-c-app-launcher__group-title` | `<h1>` | Defines a title for a group of items. |
| `.pf-c-app-launcher__menu-item` | `<a>` | Defines a menu item. |
| `.pf-c-app-launcher__menu-item-icon` | `<span>` | Defines the wrapper for the menu item icon. |
| `.pf-c-app-launcher__menu-item-text` | `<span>` | Defines the wrapper for the menu item text. |
| `.pf-c-app-launcher__menu-item-external-icon` | `<i>` | Defines the external link icon that appears on hover/focus. Use with `.pf-m-external`. |
| `.pf-c-app-launcher__separator` | `<li>`, `<hr>` | Defines a separator within the menu. Can be used between items (`<li>`) or  between groups (`<hr>`). |
| `.pf-m-expanded` | `.pf-c-app-launcher` | Modifies for the expanded state. |
| `.pf-m-hover` | `.pf-c-app-launcher__menu-item` | Forces display of the hover state of the element. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:hover` pseudo-class. |
| `.pf-m-focus` | `.pf-c-app-launcher__menu-item` | Forces display of the focus state of the element. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:focus` pseudo-class. |
| `.pf-m-disabled` | `a.pf-c-app-launcher__menu-item` | Modifies to display the menu item as disabled. |
| `.pf-m-external` | `.pf-c-app-launcher__menu-item` | Modifies to display the menu item as having an external link icon on hover/focus. |
