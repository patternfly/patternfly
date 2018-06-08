## Overview

The vertical navigation list contains list items, links, icons and text. Icons, along with text, must be included for the list items to align properly. Do not omit these elements. The chevron is required for list items containing subnavigation. 

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `role="list"` | `<ul>` |  Defines `<ul>` as a list. |
| `role="link"` | `.pf-c-vertical-nav__link` |  Defines `<a>` as a link. |
| `aria-current="page"` | `.pf-c-vertical-nav__link` |  Defines link as link to current page. Do not expose `aria-current="false"` or `aria-current` on noncurrent pages. |


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-vertical-nav` | `<nav>` |  Initiates vertical navigation. Always use it with a list. **Required** |
| `.pf-c-vertical-nav__item` | `<li>` |  Initiates navigation items. Always use it with a list item. **Required** |
| `.pf-c-vertical-nav__link` | `<a>` |  Initiates link. Always use it with an `<a>`. **Required** |
| `.pf-c-vertical-nav__link_icon` | `<span>` |  Initiates link icon. It is required. **Required** |
| `.pf-c-vertical-nav__link_text` | `<span>` |  Initiates link text. It is required. **Required** |
| `.pf-c-vertical-nav__link__arrow` | `<span>` |  Initiates link arrow, indicating subnavigation. |
| `.pf-m-active` | `.pf-c-vertical-nav__link` |  Modifies for pf-c-vertical-nav__link :after, background-color and color. |
