---
title: Page
section: components
cssPrefix: pf-c-page
---

## Examples
```hbs title=Vertical-nav
{{#> page}}
  {{#> page-header}}
    {{#> page-header-brand}}
      {{#> page-header-brand-toggle}}
        toggle
      {{/page-header-brand-toggle}}
      {{#> page-header-brand-link}}
        Logo
      {{/page-header-brand-link}}
    {{/page-header-brand}}
    {{#> page-header-tools}}
      header-tools
    {{/page-header-tools}}
  {{/page-header}}
  {{#> page-sidebar page-sidebar--modifier="pf-m-dark"}}
    pf-c-nav
  {{/page-sidebar}}
  {{#> page-main}}
    {{#> page-main-section page-main-section--modifier="pf-m-dark-100"}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-dark-200"}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
    {{/page-main-section}}
    {{#> page-main-section}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

```hbs title=Horizontal-nav
{{#> page page--nav-direction="vertical"}}
  {{#> page-header}}
    {{!-- Brand --}}
    {{#> page-header-brand}}
      {{#> page-header-brand-link}}
        Logo
      {{/page-header-brand-link}}
    {{/page-header-brand}}
    {{!-- Horizontal nav --}}
    {{#> page-header-nav}}
      pf-c-nav
    {{/page-header-nav}}
    {{!-- Toolbar --}}
    {{#> page-header-tools}}
      header-tools
    {{/page-header-tools}}
  {{/page-header}}
  {{#> page-main}}
    {{#> page-main-section page-main-section--modifier="pf-m-dark-100"}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-dark-200"}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
    {{/page-main-section}}
    {{#> page-main-section}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

```hbs title=With-or-without-fill
{{#> page page--nav-direction="vertical"}}
  {{#> page-header}}
    {{!-- Brand --}}
    {{#> page-header-brand}}
      {{#> page-header-brand-link}}
        Logo
      {{/page-header-brand-link}}
    {{/page-header-brand}}
    {{!-- Horizontal nav --}}
    {{#> page-header-nav}}
      pf-c-nav
    {{/page-header-nav}}
    {{!-- Toolbar --}}
    {{#> page-header-tools}}
      header-tools
    {{/page-header-tools}}
  {{/page-header}}
  {{#> page-main}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-fill"}}
      This section uses pf-m-fill to fill the available space.
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-light pf-m-no-fill"}}
      This section uses pf-m-no-fill to not fill the available space.
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

```hbs title=Main-section-padding
{{#> page}}
  {{#> page-header}}
    {{#> page-header-brand}}
      {{#> page-header-brand-toggle}}
        toggle
      {{/page-header-brand-toggle}}
      {{#> page-header-brand-link}}
        Logo
      {{/page-header-brand-link}}
    {{/page-header-brand}}
    {{#> page-header-tools}}
      header-tools
    {{/page-header-tools}}
  {{/page-header}}
  {{#> page-sidebar page-sidebar--modifier="pf-m-dark"}}
    pf-c-nav
  {{/page-sidebar}}
  {{#> page-main}}
    {{#> page-main-section}}
      This `.pf-c-page__main-section` has default padding.
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-light"}}
      This `.pf-c-page__main-section` uses `.pf-m-no-padding` to remove all padding.
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding-mobile"}}
      This `.pf-c-page__main-section` uses `.pf-m-no-padding-mobile` to remove padding on mobile only.
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```
      
## Documentation
### Overview
This component provides the basic chrome for a page, including sidebar, header, and main areas.

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="banner"` | `.pf-c-page__header` | Identifies the element that serves as the banner region. **Required** |
| `role="main"` | `.pf-c-page__main` | Identifies the element that serves as the main region. **Required** |
| `tabindex="-1"` | `.pf-c-page__main` | Allows the main region to receive programmatic focus. **Required** |
| `id="[id]"` | `.pf-c-page__main` | Provides a hook for sending focus to new content. **Required** |
| `aria-expanded="true/false"` | `.pf-c-page__header-brand-toggle > .pf-c-button` | Indicates that the expandable content is visible and the current state of the contents. **Required** |
| `aria-controls="[id of nav]"` | `.pf-c-page__header-brand-toggle > .pf-c-button` | Identifies the element controlled by the toggle. **Required**

### Usage
| Class | Applied to | Outcome |
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
| `.pf-c-page__sidebar-body` | `<div>` | Creates a wrapper within the sidebar to hold content. |
| `.pf-c-page__main` | `<main>` |   Declares the main page area. |
| `.pf-c-page__main-nav` | `<section>` |   Creates a container to nest the navigation component in the main page area. |
| `.pf-c-page__main-breadcrumb` | `<section>` |   Creates a container to nest the breadcrumb component in the main page area. |
| `.pf-c-page__main-section` | `<section>` |  Creates a section container in the main page area. **Note: The last/only `.pf-c-page__main-section` element will grow to fill the availble vertical space. You can change this behavior using `.pf-m-fill` and `.pf-m-no-fill`, which are documented below.**  |
| `.pf-c-page__drawer` | `<div>` |  Creates a container for the drawer component when placing the main page element in the drawer body. |
| `.pf-m-icons` | `.pf-c-page__header-tools div` | Modifier for responsive behavior of header icons list. |
| `.pf-m-selected` | `.pf-c-page__header-tools .pf-c-button` | Modifies the button in the masthead for the selected state. |
| `.pf-m-mobile` | `.pf-c-page__header-tools .pf-c-button` | Modifier for responsive behavior of mobile menu. |
| `.pf-m-user` | `.pf-c-page__header-tools div` | Modifier for responsive behavior of user menu. |
| `.pf-m-expanded` | `.pf-c-page__sidebar` |  Modifies the sidebar for the expanded state. |
| `.pf-m-collapsed` | `.pf-c-page__sidebar` |  Modifies the sidebar for the collapsed state. |
| `.pf-m-dark` | `.pf-c-page__sidebar` |  Modifies the sidebar the dark variation. **Note: for use with a dark themed nav component** |
| `.pf-m-light` | `.pf-c-page__main-section` | Modifies a main page section to have a light theme. |
| `.pf-m-dark-200` | `.pf-c-page__main-section` |  Modifies a main page section to have a dark theme and a dark transparent background. |
| `.pf-m-dark-100` | `.pf-c-page__main-section` |  Modifies a main page section to have a dark theme and a darker transparent background. |
| `.pf-m-no-padding` | `.pf-c-page__main-section` | Modifies a main page section to have no padding. |
| `.pf-m-no-padding-mobile` | `.pf-c-page__main-section` | Modifies a main page section to have no padding on mobile. |
| `.pf-m-fill` | `.pf-c-page__main-section` | Modifies a main page section to grow to fill the available vertical space. |
| `.pf-m-no-fill` | `.pf-c-page__main-section` | Modifies a main page section to not grow to fill the available vertical space. |
