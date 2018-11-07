## Overview
A breadcrumb is a list of links to display a user's navigational hierarchy. The last item of the breadcrumb list indicates the current page's location.

* `.pf-c-breadcrumb__list` - Default breadcrumb navigation. Provides links to previous navigation pages and also shows the current page's location.

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-label="[landmark description]"` | `.pf-c-breadcrumb` |  Describes `<nav>` landmark. |
| `aria-label="[link name]"` | `.pf-c-breadcrumb__link` | If link has no text (icon), add an aria-label. |
| `aria-current="page"` | `.pf-c-breadcrumb__link`, `.pf-c-breadcrumb__item` |  Indicates the current page within a set of pages. |

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-breadcrumb`                | `<nav>`                   | Initiates a primary breadcrumb element. **Required** |
| `.pf-c-breadcrumb__list`          | `<ol>`                    | Initiates default breadcrumb ordered list. |
| `.pf-c-breadcrumb__item`          | `<li>`                    | Initiates default breadcrumb list item. |
| `.pf-c-breadcrumb__item-divider`  | `<span>`                  | Initiates default breadcrumb list item divider. |
| `.pf-c-breadcrumb__link`          | `<a>`                     | Initiates default breadcrumb list link. |
| `.pf-m-current`                   | `.pf-c-breadcrumb__link`  | Modifies to display the list item as the current item. |
