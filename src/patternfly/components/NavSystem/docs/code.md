## Overview

The navigation system relies on several different sub-components: 

* `.pf-c-nav__list` - Default navigation list. It is the basis for both default and expandable, vertical navigation.
* `.pf-c-nav__simple-list` - Nav list simple is a shareable component this is used with grouped navigation and as secondary navigation.
* `.pf-c-nav__horizontal-list` - Nav list horizontal is a shareable component that can be used within the page header, as primary navigation, or as tertiary navigation, when expandable, vertical navigation is implemented.
* `.pf-c-nav__tertiary-list` - Nav list tertiary is a component that can be used within `<main>`, as third level navigation (tertiary navigation), when expandable, vertical navigation is implemented.

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-label="[landmark description]"` | `.pf-c-nav` |  Describes `<nav>` landmark |
| `aria-labelledby="[id value of link describing subnav]"` | `.pf-c-nav__subnav` |  Gives the subnav `<section>` landmark an accessible name by referring to the element that provides the subnav `<section>` landmark title |
| `aria-expanded="false"` | `.pf-c-nav__link` |  Indicates that subnav section is hidden |
| `aria-expanded="true"` | `.pf-c-nav__link` |  Indicates that subnav section is visible |
| `hidden` | `.pf-c-nav__subnav` |  Indicates that the subnav section is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies |
| `aria-current="page"` | `.pf-c-nav__link` |  Indicates the current page link. Can only occur once on page. |


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-nav`                           | `<nav>`                                 | Initiates a primary nav element |
| `.pf-c-nav__list`                     | `<ul>`                                  | Initiates default nav list |
| `.pf-c-nav__item`                     | `<li>`                                  | Initiates default nav list item |
| `.pf-c-nav__link`                     | `<a>`                                   | Initiates default nav list link |
| `.pf-c-nav__section`                  | `<section>`                             | Initiates a nav section element |
| `.pf-c-nav__section-title`            | `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`                        | Initiates a nav section title |
| `.pf-c-nav__toggl`                    | `<span>`                                | Initiates a chevron indicating expandability of a `pf-c-nav__list-link` |
| `.pf-m-expandable`                    | `.pf-c-nav__item`                       | Modifies for the expandable state |
| `.pf-m-expanded`                      | `.pf-c-nav__item`                       | Modifies for the expanded state |
| `.pf-m-hover`                         | `.pf-c-nav__link`                       | Modifies to display the link as hovered |
| `.pf-m-focus`                         | `.pf-c-nav__link`                       | Modifies to display the link as focussed |
| `.pf-m-current`                       | `.pf-c-nav__link`                       | Modifies for the current state |
| `.pf-m-active`                        | `.pf-c-nav__link`,                      | Modifies to display the link as active |
| `.pf-m-disabled`                      | `.pf-c-nav__link`,                      | Modifies to display the link as disabled |
