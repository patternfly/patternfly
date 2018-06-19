## Overview

The vertical navigation list contains list items, links, icons and text. Icons are optional, but recommended. Text must be included. The chevron is required for list items containing subnavigation. 

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-label` | `<nav>` |  Describes `<nav>` landmark. |
| `role="navigation"` | `<nav>` |  Defines `<nav>` as a navigational. |
| `aria-current="page"` | `.pf-c-vertical-nav__link` |  Defines link as current page. Do not expose `aria-current="false"` or `aria-current` on noncurrent pages. |
| `aria-disabled` | `.pf-c-vertical-nav__link` | Defines `<a>` elements as disabled, value is `true` when element is disabled. |
| `aria-hidden="true"` | `.pf-c-vertical-nav__link__icon` | Defines elements as `hidden`, value is `true` when element is presentational only, such as icons. |
| `aria-expanded` | `.pf-c-vertical-nav__link` | Defines associated submenu state, values are `expanded` or `collapsed`. This is **Required** where submenus are used. |


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-vertical-nav` | `<nav>` |  Initiates vertical navigation. Always use it with a list. **Required** |
| `.pf-c-vertical-nav__item` | `<li>` |  Initiates navigation items. Always use it with a list item. **Required** |
| `.pf-c-vertical-nav__link` | `<a>` |  Initiates link. Always use it with an `<a>`. **Required** |
| `.pf-c-vertical-nav__link_text` | `<span>` |  Initiates link text. It is required. **Required** |
| `.pf-c-vertical-nav__link_icon` | `<span>` |  Initiates link icon. |
| `.pf-c-vertical-nav__link__arrow` | `<span>` |  Initiates link arrow, indicating subnavigation. |
| `.pf-m-hover` | `.pf-c-vertical-nav__item` |  Modifies for pf-c-vertical-nav__item background-color, text:after and link color. |
| `.pf-m-active` | `.pf-c-vertical-nav__item` |  Modifies for pf-c-vertical-nav__item background-color, text:after and link color. |
| `.pf-m-focus` | `.pf-c-vertical-nav__item` |  Modifies for pf-c-vertical-nav__item background-color, text:after and link color. |
| `.pf-m-disabled` | `.pf-c-vertical-nav__item` |  Modifies for pf-c-vertical-nav__item background-color, text:after and link color. |
