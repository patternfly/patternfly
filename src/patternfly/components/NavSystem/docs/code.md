## Overview

The navigation system relies on several different sub-components: 

* `.pf-nav__list` - Default navigation list. It is the basis for both default and expandable, vertical navigation.
* `.pf-nav__list-simple` - Nav list simple is a shareable component this is used with grouped navigation and as secondary navigation.
* `.pf-nav__list-horizontal` - Nav list horizontal is a shareable component that can be used within the page header, as primary navigation, or as tertiary navigation, when expandable, vertical navigation is implemented.
* `.pf-nav__list-tertiary` - Nav list tertiary is a component that can be used within the `<main>`, as third level navigation (tertiary navigation), when expandable, vertical navigation is implemented.

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-label="[landmark description]"` | `pf-c-nav` |  Describes `<nav>` landmark |
| `aria-labelledby="[id value of link describing subnav]"` | `pf-c-nav__subnav` |  Gives the subnav `<section>` landmark an accessible name by referring to the element that provides the subnav `<section>` landmark title |
| `aria-expanded="false"` | `pf-c-nav__list-link` |  Indicates that subnav section is hidden |
| `aria-expanded="true"` | `pf-c-nav__list-link` |  Indicates that subnav section is visible |
| `hidden` | `pf-c-nav__subnav` |  Indicates that the subnav section is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies |
| `aria-disabled="true"`  | `pf-c-nav__list-simple-link`, `pf-c-nav__list-link`, `pf-c-nav__list-horizontal-link` |  Indicates that a link is unavailable |
| `tabindex="-1"` | `pf-c-nav__list-simple-link`, `pf-c-nav__list-link`, `pf-c-nav__list-horizontal-link` |  Removes link from keyboard focus |
| `aria-current="page"`   | `pf-c-nav__list-link` |  Indicates the current page link. Can only occur once on page. |


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-nav`                           | `<nav>`                       | Initiates a primary nav element |
| `.pf-c-nav__list`                     | `<ul>`                        | Initiates default nav list |
| `.pf-c-nav__list-item`                | `<li>`                        | Initiates default nav list item |
| `.pf-c-nav__list-link`                | `<a>`                         | Initiates default nav list link |
| `.pf-c-nav__list-simple`              | `<ul>`                        | Initiates a simple nav list |
| `.pf-c-nav__list-simple-item`         | `<li>`                        | Initiates a simple nav list item |
| `.pf-c-nav__list-simple-link`         | `<a>`                         | Initiates a simple nav list link |
| `.pf-c-nav__list-horizontal`          | `<ul>`                        | Initiates a horizontal nav list |
| `.pf-c-nav__list-horizontal-item`     | `<li>`                        | Initiates a horizontal nav list item |
| `.pf-c-nav__list-horizontal-link`     | `<a>`                         | Initiates a horizontal nav list link |
| `.pf-c-nav__list-tertiary`            | `<ul>`                        | Initiates a tertiary nav list |
| `.pf-c-nav__list-tertiary-item`       | `<li>`                        | Initiates a tertiary nav list item |
| `.pf-c-nav__list-tertiary-link`       | `<a>`                         | Initiates a tertiary nav list link |
| `.pf-c-nav__section`                  | `<ul>`                        | Initiates a nav section element |
| `.pf-c-nav__section-title`            | `<ul>`                        | Initiates a nav section title |
| `.pf-c-nav__list-expand`              | `<span>`                      | Initiates a chevron indicating expandability of a `pf-c-nav__list-link` |
| `.pf-m-expandable`                    | `.pf-c-nav__list-item`        | Modifies for the expandable state |
| `.pf-m-expanded`                      | `.pf-c-nav__list-item`        | Modifies for the expanded state |
| `.pf-m-current`                       | `.pf-c-nav__list-item`, `.pf-c-nav__list-link`        | Modifies for the current state |
| `.pf-m-active`                        | `.pf-c-nav__list-link`        | Modifies to display the link as active |
| `.pf-m-disabled`                      | `.pf-c-nav__list-link`        | Modifies to display the link as disabled |
