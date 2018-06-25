## Overview

The vertical navigation list contains list items, links, icons and text. Icons are optional, but recommended. Text must be included. The chevron is required for list items containing subnavigation. 

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-label` | `<nav>` |  Describes `<nav>` landmark. |
| `role="navigation"` | `<nav>` |  Defines `<nav>` as a navigational. |
| `aria-current="page"` | `.pf-c-vertical-nav__link` |  Defines link as current page. Do not expose `aria-current="false"` or `aria-current` on noncurrent pages. |
| `aria-disabled` | `.pf-c-vertical-nav__link` | Defines `<a>` elements as disabled, value is `true` when element is disabled. |


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-vertical-nav` | `<nav>` |  Initiates vertical navigation. Always use it with a list. **Required** |
| `.pf-c-vertical-nav__item` | `<li>` |  Initiates navigation items. Always use it with a list item. **Required** |
| `.pf-c-vertical-nav__link` | `<a>` |  Initiates link. Always use it with an `<a>`. **Required** |
| `.pf-c-vertical-nav__link-text` | `<span>` |  Initiates link text. It is required. **Required** |
| `.pf-m-hover` | `.pf-c-vertical-nav__link` |  Modifies for pf-c-vertical-nav__link :after, background-color and color. |
| `.pf-m-active` | `.pf-c-vertical-nav__link` |  Modifies for pf-c-vertical-nav__link :after, background-color and color. |
| `.pf-m-focus` | `.pf-c-vertical-nav__link` |  Modifies for pf-c-vertical-nav__link :after, background-color and color. |
| `.pf-m-disabled` | `.pf-c-vertical-nav__link` |  Modifies for pf-c-vertical-nav__link :after, background-color and color. |