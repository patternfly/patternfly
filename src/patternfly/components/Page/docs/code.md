## Overview

This component provides the basic chrome for a page, including sidebar, header, and main areas.

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `role="banner"` | `.pf-c-page__header` | Identifies the element that serves as the banner region. **Required** |
| `role="main"` | `.pf-c-page__main` | Identifies the element that serves as the main region. **Required** |

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-page` | `<div>` |   Declares the page component. |
| `.pf-c-page__header` | `<header>` |   Declares the page header. |
| `.pf-c-page__header-brand` | `<div>` |   Creates a header container to nest the brand component. |
| `.pf-c-page__header-brand-toggle` | `<div>` |   Creates a container to nest the sidebar toggle. |
| `.pf-c-page__header-brand-link` | `<a>` |   Creates a link for the brand logo. |
| `.pf-c-page__header-selector` | `<div>` |   Creates a header container to nest the context selector component. |
| `.pf-c-page__header-nav` | `<div>` |   Creates a container to nest the navigation component in the header. |
| `.pf-c-page__header-tools` | `<div>` |   Creates a container to nest the icons and menus in header. |
| `.pf-c-page__header-tools-group` | `<div>` |  Creates a container for grouping sets of icons and menus in header. |
| `.pf-c-page__sidebar` | `<aside>` |   Declares the page sidebar. |
| `.pf-c-page__main` | `<main>` |   Declares the main page area. |
| `.pf-c-page__main-nav` | `<section>` |   Creates a container to nest the navigation component in the main page area. |
| `.pf-c-page__main-section` | `<section>` |  Creates a section container in the main page area. |
| `.pf-m-hide-lg` | `.pf-c-page__header-tools *` | Responsive modifier to hide elements on large breakpoint. |
| `.pf-m-show-lg` | `.pf-c-page__header-tools *` | Responsive modifier to show elements on large breakpoint. |
| `.pf-m-show-md` | `.pf-c-page__header-tools *` | Responsive modifier to show elements on medium breakpoint. |
| `.pf-m-expanded` | `.pf-c-page__sidebar` |  Modifies the sidebar for the expanded state. |
| `.pf-m-collapsed` | `.pf-c-page__sidebar` |  Modifies the sidebar for the collapsed state. |
| `.pf-m-light` | `.pf-c-page__main-section` | Modifies a main page section to have a light theme. |
| `.pf-m-dark-200` | `.pf-c-page__main-section` |  Modifies a main page section to have a dark theme and a dark transparent background. |
| `.pf-m-dark-100` | `.pf-c-page__main-section` |  Modifies a main page section to have a dark theme and a darker transparent background. |
