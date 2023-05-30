---
id: Page
section: components
wrapperTag: div
deprecated: true
---

import './PageHeader.css'

## Page header examples

### Vertical nav
```hbs
{{#> page}}
  {{#> page-header}}
    {{#> page-header-brand}}
      {{#> page-header-brand-toggle}}
        toggle
      {{/page-header-brand-toggle}}
      {{#> page-header-brand-link page-header-brand-link--href="#"}}
        Logo
      {{/page-header-brand-link}}
    {{/page-header-brand}}
    {{#> page-header-tools}}
      header-tools
    {{/page-header-tools}}
  {{/page-header}}
  {{#> page-sidebar}}
    Navigation
  {{/page-sidebar}}
  {{#> page-main}}
    {{#> page-main-section page-main-section--modifier="pf-m-dark-100"}}
      This <code>.pf-v5-c-page__main-section</code> uses <code>.pf-m-dark-100</code>.
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-dark-200"}}
      This <code>.pf-v5-c-page__main-section</code> uses <code>.pf-m-dark-200</code>.
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      This <code>.pf-v5-c-page__main-section</code> uses <code>.pf-m-light</code>.
    {{/page-main-section}}
    {{#> page-main-section}}
      This is a default <code>.pf-v5-c-page__main-section</code>.
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### Horizontal nav
```hbs
{{#> page page--nav-direction="vertical"}}
  {{#> page-header}}
    {{!-- Brand --}}
    {{#> page-header-brand}}
      {{#> page-header-brand-link page-header-brand-link--href="#"}}
        Logo
      {{/page-header-brand-link}}
    {{/page-header-brand}}
    {{!-- Horizontal nav --}}
    {{#> page-header-nav}}
      Navigation
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

### Multiple sidebar body elements, padding, and fill
```hbs
{{#> page}}
  {{#> page-header}}
    {{#> page-header-brand}}
      {{#> page-header-brand-toggle}}
        toggle
      {{/page-header-brand-toggle}}
      {{#> page-header-brand-link page-header-brand-link--href="#"}}
        Logo
      {{/page-header-brand-link}}
    {{/page-header-brand}}
    {{#> page-header-tools}}
      header-tools
    {{/page-header-tools}}
  {{/page-header}}
  {{#> page-sidebar page-sidebar--ExcludeSidebarBody="true"}}
    {{#> page-sidebar-body}}
      Navigation
    {{/page-sidebar-body}}
    {{#> page-sidebar-body page-sidebar-body--modifier="pf-m-fill pf-m-page-insets"}}
      inset content
    {{/page-sidebar-body}}
    {{#> page-sidebar-body page-sidebar-body--modifier="pf-m-page-insets"}}
      footer content
    {{/page-sidebar-body}}
  {{/page-sidebar}}
  {{#> page-main}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### With or without fill
```hbs
{{#> page page--nav-direction="vertical"}}
  {{#> page-header}}
    {{!-- Brand --}}
    {{#> page-header-brand}}
      {{#> page-header-brand-link page-header-brand-link--href="#"}}
        Logo
      {{/page-header-brand-link}}
    {{/page-header-brand}}
    {{!-- Horizontal nav --}}
    {{#> page-header-nav}}
      Navigation
    {{/page-header-nav}}
    {{!-- Toolbar --}}
    {{#> page-header-tools}}
      header-tools
    {{/page-header-tools}}
  {{/page-header}}
  {{#> page-main}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      A regular page section.
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-fill"}}
      This section uses <code>.pf-m-fill</code> to fill the available space.
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-light pf-m-no-fill"}}
      This section uses <code>.pf-m-no-fill</code> to not fill the available space.
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### Main section padding
```hbs
{{#> page}}
  {{#> page-header}}
    {{#> page-header-brand}}
      {{#> page-header-brand-toggle}}
        toggle
      {{/page-header-brand-toggle}}
      {{#> page-header-brand-link page-header-brand-link--href="#"}}
        Logo
      {{/page-header-brand-link}}
    {{/page-header-brand}}
    {{#> page-header-tools}}
      header-tools
    {{/page-header-tools}}
  {{/page-header}}
  {{#> page-sidebar}}
    Navigation
  {{/page-sidebar}}
  {{#> page-main}}
    {{#> page-main-section}}
      This <code>.pf-v5-c-page__main-section</code> has default padding.
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-light"}}
      This <code>.pf-v5-c-page__main-section</code> uses <code>.pf-m-no-padding</code> to remove all padding.
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-md"}}
      This <code>.pf-v5-c-page__main-section</code> uses <code>.pf-m-no-padding .pf-m-padding-on-md</code> to remove padding up to the <code>md</code> breakpoint.
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### Main section variations
```hbs
{{#> page}}
  {{#> page-header}}
    {{#> page-header-brand}}
      {{#> page-header-brand-toggle}}
        toggle
      {{/page-header-brand-toggle}}
      {{#> page-header-brand-link page-header-brand-link--href="#"}}
        Logo
      {{/page-header-brand-link}}
    {{/page-header-brand}}
    {{#> page-header-tools}}
      header-tools
    {{/page-header-tools}}
  {{/page-header}}
  {{#> page-sidebar}}
    Navigation
  {{/page-sidebar}}
  {{#> page-main}}
    {{#> page-main-subnav}}
      <code>.pf-v5-c-page__main-subnav</code> for horizontal subnav navigation
    {{/page-main-subnav}}
    {{#> page-main-nav}}
      <code>.pf-v5-c-page__main-nav</code> for tertiary navigation
    {{/page-main-nav}}
    {{#> page-main-tabs}}
      <code>.pf-v5-c-page__main-tabs</code> for tabs
    {{/page-main-tabs}}
    {{#> page-main-group}}
      <code>.pf-v5-c-page__main-group</code> for a group of page sections
    {{/page-main-group}}
    {{#> page-main-breadcrumb}}
      <code>.pf-v5-c-page__main-breadcrumb</code> for breadcrumbs
    {{/page-main-breadcrumb}}
    {{#> page-main-section}}
      <code>.pf-v5-c-page__main-section</code> for main sections
    {{/page-main-section}}
    {{#> page-main-wizard}}
      <code>.pf-v5-c-page__main-wizard</code> for wizards
    {{/page-main-wizard}}
  {{/page-main}}
{{/page}}
```

### Centered section
```hbs
{{#> page}}
  {{#> page-header}}
    {{#> page-header-brand}}
      {{#> page-header-brand-toggle}}
        toggle
      {{/page-header-brand-toggle}}
      {{#> page-header-brand-link page-header-brand-link--href="#"}}
        Logo
      {{/page-header-brand-link}}
    {{/page-header-brand}}
    {{#> page-header-tools}}
      header-tools
    {{/page-header-tools}}
  {{/page-header}}
  {{#> page-main}}
    {{#> page-main-section page-main-section--IsLimitWidth="true" page-main-section--modifier="pf-m-align-center"}}
      {{#> card}}
        {{#> card-body}}
          When a width limited page section is wider than the value of <code>--pf-v5-c-page--section--m-limit-width--MaxWidth</code>, the section will be centered in the main section.
          <br><br>
          The content in this example is placed in a card to better illustrate how the section behaves when it is centered. A card is not required to center a page section.
        {{/card-body}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

## Documentation
### Overview
The page header component is a deprecated approach to building a header on the page component. The recommended approach uses the masthead component instead.

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="banner"` | `.pf-v5-c-page__header` | Identifies the element that serves as the banner region. |
| `aria-expanded="true/false"` | `.pf-v5-c-page__header-brand-toggle > .pf-v5-c-button` | Indicates that the expandable content is visible and the current state of the contents. **Required** |
| `aria-controls="[id of nav]"` | `.pf-v5-c-page__header-brand-toggle > .pf-v5-c-button` | Identifies the element controlled by the toggle. **Required**

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-page__header` | `<header>` |   Declares the page header. |
| `.pf-v5-c-page__header-brand` | `<div>` |   Creates a header container to nest the brand component. |
| `.pf-v5-c-page__header-brand-toggle` | `<div>` |   Creates a container to nest the sidebar toggle. |
| `.pf-v5-c-page__header-brand-link` | `<a>`, `<span>` |   Creates a link for the brand logo. Use a `<span>` if there is no link. |
| `.pf-v5-c-page__header-selector` | `<div>` |   Creates a header container to nest the context selector component. |
| `.pf-v5-c-page__header-nav` | `<div>` |   Creates a container to nest the navigation component in the header. |
| `.pf-v5-c-page__header-tools` | `<div>` |   Creates a container to nest the icons and menus in header. |
| `.pf-v5-c-page__header-tools-group` | `<div>` |  Creates a container for grouping sets of icons and menus in header. |
| `.pf-v5-c-page__header-tools-item` | `<div>` |  Creates a container for an item in a header tools group. |
| `.pf-m-selected` | `.pf-v5-c-page__header-tools-item` | Modifies a header tools item to indicate that the button inside is in the selected state. |
| `.pf-m-hidden{-on-[breakpoint]}` | `.pf-v5-c-page__header-tools-group`, `.pf-v5-c-page__header-tools-item` | Hides a header tools group or item at an optional breakpoint, or hides it at all [breakpoints](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes) with `.pf-m-hidden`. |
| `.pf-m-visible{-on-[breakpoint]}` | `.pf-v5-c-page__header-tools-group`, `.pf-v5-c-page__header-tools-item` | Shows a header tools group or item at an optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
