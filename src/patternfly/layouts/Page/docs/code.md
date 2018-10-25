## Overview

This layout provides the basic chrome for a page, including sidebar, header and main areas.

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `role="banner"` | `.pf-l-page__header` | Identifies the element that serves as the banner region. **Required** |
| `role="main"` | `.pf-l-page__main` | Identifies the element that serves as the main region. **Required** |

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-l-page` | `<div>` |   Declares the page layout. |
| `.pf-l-page__header` | `<header>` |   Declares the page header. |
| `.pf-l-page__header-brand` | `<div>` |   Creates a header container to nest the brand component. |
| `.pf-l-page__header-brand-toggle` | `<div>` |   Creates a container to nest the sidebar toggle. |
| `.pf-l-page__header-brand-link` | `<a>` |   Creates a link for the brand logo. |
| `.pf-l-page__header-selector` | `<div>` |   Creates a header container to nest the context selector component. |
| `.pf-l-page__header-nav` | `<div>` |   Creates a container to nest the navigation component in the header. |
| `.pf-l-page__header-tools` | `<div>` |   Creates a header container to nest the toolbar layout. |
| `.pf-l-page__sidebar` | `<aside>` |   Declares the page sidebar. |
| `.pf-l-page__main` | `<main>` |   Declares the main page area. |
| `.pf-l-page__main-nav` | `<section>` |   Creates a container to nest the navigation component in the main page area. |
| `.pf-l-page__main-section` | `<section>` |  Creates a section container in the main page area. |
| `.pf-m-expanded` | `.pf-l-page__sidebar` |  Modifies the sidebar for the expanded state. |
| `.pf-m-collapsed` | `.pf-l-page__sidebar` |  Modifies the sidebar for the collapsed state. |
| `.pf-m-light` | `.pf-l-page__main-section` | Modifies a main page section to have a light theme. |
| `.pf-m-dark-200` | `.pf-l-page__main-section` |  Modifies a main page section to have a dark theme and a dark transparent background. |
| `.pf-m-dark-100` | `.pf-l-page__main-section` |  Modifies a main page section to have a dark theme and a darker transparent background. |
| `.pf-m-condensed` | `.pf-l-page__header` |   Modifies header to condensed height on scroll (this requires JS to toggle this class on scroll). |
