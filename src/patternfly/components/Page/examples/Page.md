---
id: Page
section: components
cssPrefix: pf-v6-c-page
wrapperTag: div
---

import './Page.css'

## Examples

### Vertical nav
```hbs
{{#> page}}
  {{#> masthead}}
    {{#> masthead-main}}
      {{> masthead-toggle}}
      {{#> masthead-brand}}
        {{#> masthead-logo}}
          Logo
        {{/masthead-logo}}
      {{/masthead-brand}}
    {{/masthead-main}}
    {{> masthead-content}}
  {{/masthead}}
  {{#> page-sidebar}}
    Navigation
  {{/page-sidebar}}
  {{#> page-main}}
    {{#> page-main-section}}
      This is a default <code>.pf-v6-c-page__main-section</code>.
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-secondary"}}
      This <code>.pf-v6-c-page__main-section</code> uses <code>.pf-m-secondary</code>.
    {{/page-main-section}}
    {{#> page-main-section}}
      This is a default <code>.pf-v6-c-page__main-section</code>.
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-secondary" page-main-section--ExcludeMainBody="true"}}
      {{#> page-main-body}}
        This is a page__main-body, one of three within one page__main-section.
      {{/ page-main-body}}
      {{#> page-main-body}}
        This is a page__main-body, one of three within one page__main-section.
      {{/ page-main-body}}
      {{#> page-main-body}}
        This is a page__main-body, one of three within one page__main-section.
      {{/ page-main-body}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### Horizontal nav
```hbs
{{#> page page--nav-direction="vertical"}}
  {{#> masthead}}
    {{#> masthead-main}}
      {{> masthead-toggle}}
      {{#> masthead-brand}}
        {{#> masthead-logo}}
          Logo
        {{/masthead-logo}}
      {{/masthead-brand}}
    {{/masthead-main}}
    {{> masthead-content}}
  {{/masthead}}
  {{#> page-main}}
    {{#> page-main-section}}
      This is a default <code>.pf-v6-c-page__main-section</code>.
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-secondary"}}
      This <code>.pf-v6-c-page__main-section</code> uses <code>.pf-m-secondary</code>.
    {{/page-main-section}}
    {{#> page-main-section}}
      This is a default <code>.pf-v6-c-page__main-section</code>.
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### Multiple sidebar body elements, padding, and fill
```hbs
{{#> page}}
  {{#> masthead}}
    {{#> masthead-main}}
      {{> masthead-toggle}}
      {{#> masthead-brand}}
        {{#> masthead-logo}}
          Logo
        {{/masthead-logo}}
      {{/masthead-brand}}
    {{/masthead-main}}
    {{> masthead-content}}
  {{/masthead}}
  {{#> page-sidebar page-sidebar--ExcludeSidebarBody="true"}}
    {{#> page-sidebar-body}}
      Navigation
    {{/page-sidebar-body}}
    {{#> page-sidebar-body page-sidebar-body--modifier="pf-m-fill"}}
      inset content
    {{/page-sidebar-body}}
    {{#> page-sidebar-body page-sidebar-body--modifier="pf-m-fill pf-m-inset-none"}}
      content that is not inset
    {{/page-sidebar-body}}
    {{#> page-sidebar-body page-sidebar-body--modifier="pf-m-no-fill"}}
      footer content
    {{/page-sidebar-body}}
  {{/page-sidebar}}
  {{#> page-main}}
    {{#> page-main-section}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### With or without fill
```hbs
{{#> page page--nav-direction="vertical"}}
  {{#> masthead}}
    {{#> masthead-main}}
      {{> masthead-toggle}}
      {{#> masthead-brand}}
        {{#> masthead-logo}}
          Logo
        {{/masthead-logo}}
      {{/masthead-brand}}
    {{/masthead-main}}
    {{> masthead-content}}
  {{/masthead}}
  {{#> page-main page-main-container--IsFilled="true"}}
    {{#> page-main-section}}
      A regular page section.
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-fill"}}
      This section uses <code>.pf-m-fill</code> to fill the available space. The <code>.pf-v6-c-page__main-container</code> must also have <code>.pf-m-fill</code> in order for the section to have space to stretch to full height.
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-fill"}}
      This section uses <code>.pf-m-no-fill</code> and will not fill the available space.
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### Main section padding
```hbs
{{#> page}}
  {{#> masthead}}
    {{#> masthead-main}}
      {{> masthead-toggle}}
      {{#> masthead-brand}}
        {{#> masthead-logo}}
          Logo
        {{/masthead-logo}}
      {{/masthead-brand}}
    {{/masthead-main}}
    {{> masthead-content}}
  {{/masthead}}
  {{#> page-sidebar}}
    Navigation
  {{/page-sidebar}}
  {{#> page-main}}
    {{#> page-main-section}}
      This <code>.pf-v6-c-page__main-section</code> has default padding.
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding"}}
      This <code>.pf-v6-c-page__main-section</code> uses <code>.pf-m-no-padding</code> to remove all padding.
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-md"}}
      This <code>.pf-v6-c-page__main-section</code> uses <code>.pf-m-no-padding .pf-m-padding-on-md</code> to remove padding up to the <code>md</code> breakpoint.
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### Main section variations
```hbs
{{#> page}}
  {{#> masthead}}
    {{#> masthead-main}}
      {{> masthead-toggle}}
      {{#> masthead-brand}}
        {{#> masthead-logo}}
          Logo
        {{/masthead-logo}}
      {{/masthead-brand}}
    {{/masthead-main}}
    {{> masthead-content}}
  {{/masthead}}
  {{#> page-sidebar}}
    Navigation
  {{/page-sidebar}}
  {{#> page-main}}
    {{#> page-main-subnav}}
      <code>.pf-v6-c-page__main-subnav</code> for horizontal subnav navigation
    {{/page-main-subnav}}
    {{#> page-main-tabs}}
      <code>.pf-v6-c-page__main-tabs</code> for tabs
    {{/page-main-tabs}}
    {{#> page-main-group}}
      <code>.pf-v6-c-page__main-group</code> for a group of page sections
    {{/page-main-group}}
    {{#> page-main-breadcrumb}}
      <code>.pf-v6-c-page__main-breadcrumb</code> for breadcrumbs
    {{/page-main-breadcrumb}}
    {{#> page-main-section}}
      <code>.pf-v6-c-page__main-section</code> for main sections
    {{/page-main-section}}
    {{#> page-main-wizard}}
      <code>.pf-v6-c-page__main-wizard</code> for wizards
    {{/page-main-wizard}}
  {{/page-main}}
{{/page}}
```

### Centered section
```hbs
{{#> page}}
  {{#> masthead}}
    {{#> masthead-main}}
      {{> masthead-toggle}}
      {{#> masthead-brand}}
        {{#> masthead-logo}}
          Logo
        {{/masthead-logo}}
      {{/masthead-brand}}
    {{/masthead-main}}
    {{> masthead-content}}
  {{/masthead}}
  {{#> page-main}}
    {{#> page-main-section page-main-section--IsLimitWidth="true" page-main-section--modifier="pf-m-align-center"}}
      {{#> card}}
        {{#> card-body}}
          When a width limited page section is wider than the value of <code>--pf-v6-c-page--section--m-limit-width--MaxWidth</code>, the section will be centered in the main section.
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
This component provides the basic chrome for a page, including sidebar and main areas.

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="main"` | `.pf-v6-c-page__main` | Identifies the element that serves as the main region. |
| `tabindex="-1"` | `.pf-v6-c-page__main` | Allows the main region to receive programmatic focus. **Required** |
| `id="[id]"` | `.pf-v6-c-page__main` | Provides a hook for sending focus to new content. **Required** |
| `tabindex="0"` | `.pf-v6-c-page__main-section.pf-m-overflow-scroll` | If a page section has overflow content that triggers a scrollbar, to ensure that the content is keyboard accessible, the page section must include either a focusable element within the scrollable region or the page section itself must be focusable by adding `tabindex="0"`. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-page` | `<div>` | Declares the page component. |
| `.pf-v6-c-page__sidebar` | `<aside>` | Declares the page sidebar. |
| `.pf-v6-c-page__sidebar-body` | `<div>` | Creates a wrapper within the sidebar to hold content. **Note: The last/only `.pf-v6-c-page__sidebar-body` element will grow to fill the available vertical space. You can change this behavior using `.pf-m-fill` and `.pf-m-no-fill`, which are documented below.** |
| `.pf-v6-c-page__main` | `<main>` | Declares the main page area. |
| `.pf-v6-c-page__main-subnav` | `<section>` | Creates a container to nest the horizontal subnav navigation component in the main page area. |
| `.pf-v6-c-page__main-breadcrumb` | `<section>` | Creates a container to nest the breadcrumb component in the main page area. |
| `.pf-v6-c-page__main-section` | `<section>` | Creates a section container in the main page area. **Note: This section will not fill the vertical space. You can change this behavior using `.pf-m-fill` and `.pf-m-no-fill`, which are documented below.**  |
| `.pf-v6-c-page__main-tabs` | `<section>` | Creates a container to nest the tabs component in the main page area. |
| `.pf-v6-c-page__main-wizard` | `<section>` | Creates a container to nest the wizard component in the main page area. |
| `.pf-v6-c-page__main-body` | `<div>` | Creates the body section for a page section. **Required** |
| `.pf-v6-c-page__main-group` | `<div>` | Creates the group of `.pf-v6-c-page__main-*` sections. Can be used in combination with `.pf-m-sticky-[top/bottom]` to make multiple sections sticky. |
| `.pf-v6-c-page__drawer` | `<div>` | Creates a container for the drawer component when placing the main page element in the drawer body. |
| `.pf-m-no-sidebar` | `.pf-v6-c-page` | Modifies the page grid for layouts without a sidebar. |
| `.pf-m-expanded` | `.pf-v6-c-page__sidebar` | Modifies the sidebar for the expanded state. |
| `.pf-m-collapsed` | `.pf-v6-c-page__sidebar` | Modifies the sidebar for the collapsed state. |
| `.pf-m-page-insets` | `.pf-v6-c-page__sidebar-body` | Modifies a sidebar body padding/inset to visually match padding of page elements. |
| `.pf-m-context-selector` | `.pf-v6-c-page__sidebar-body` | Modifies a sidebar body to contain a context selector. |
| `.pf-m-inset-none` | `.pf-v6-c-page__sidebar-body` | Removes a sidebar body left/right inset. |
| `.pf-m-padding{-on-[breakpoint]}` | `.pf-v6-c-page__main-section` | Modifies the main page section to add padding back in at an optional [breakpoint](/tokens/all-patternfly-tokens). Should be used with pf-m-no-padding. |
| `.pf-m-no-padding{-on-[breakpoint]}` | `.pf-v6-c-page__main-section` | Removes padding from the main page section at an optional [breakpoint](/tokens/all-patternfly-tokens). |
| `.pf-m-fill` | `.pf-v6-c-page__main-container`, `.pf-v6-c-page__main-section`, `.pf-v6-c-page__main-group`, `.pf-v6-c-page__main-wizard`, `.pf-v6-c-page__sidebar-body` | Modifies the element to grow to fill the available space. Note that `.pf-v6-c-page__main-container` must also have `.pf-m-fill` applied in order for the section to have space to stretch to full height.|
| `.pf-m-no-fill` | `.pf-v6-c-page__main-section`, `.pf-v6-c-page__main-group`, `.pf-v6-c-page__main-wizard`, `.pf-v6-c-page__sidebar-body` | Modifies the element not to grow to fill the available vertical space. |
| `.pf-m-limit-width` | `.pf-v6-c-page__main-section` | Modifies a page section to limit the `max-width` of the content inside. |
| `.pf-m-align-center` | `.pf-v6-c-page__main-section.pf-m-limit-width` | Modifies a page section body to align center. |
| `.pf-m-sticky-top{-on-[breakpoint]-height}` | `.pf-v6-c-page__main-*` | Modifies a section/group to be sticky to the top of its container at an optional height breakpoint. |
| `.pf-m-sticky-bottom{-on-[breakpoint]-height}` | `.pf-v6-c-page__main-*` | Modifies a section/group to be sticky to the bottom of its container at an optional height breakpoint. |
| `.pf-m-shadow-bottom` | `.pf-v6-c-page__main-*` | Modifies a section/group to have a bottom shadow. |
| `.pf-m-shadow-top` | `.pf-v6-c-page__main-*` | Modifies a section/group to have a top shadow. |
| `.pf-m-overflow-scroll` | `.pf-v6-c-page__main-*` | Modifies a section/group to show a scrollbar if it has overflow content. |
