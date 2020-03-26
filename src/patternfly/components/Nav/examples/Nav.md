---
title: Navigation
section: components
cssPrefix: pf-c-nav
---

import './Nav.css'

## Examples

```hbs title=Default
{{#> nav nav--attribute='aria-label="Global"' nav--modifier="pf-m-dark"}}
  {{#> nav-list}}
    {{#> nav-item}}
      {{#> nav-link nav-link--href="#" nav-link--current="true"}}
        Current link
      {{/nav-link}}
    {{/nav-item}}
    {{#> nav-item}}
      {{#> nav-link nav-link--href="#"}}
        Link 2
      {{/nav-link}}
    {{/nav-item}}
    {{#> nav-item}}
      {{#> nav-link nav-link--href="#"}}
        Link 3
      {{/nav-link}}
    {{/nav-item}}
    {{#> nav-item}}
      {{#> nav-link nav-link--href="#"}}
        Link 4
      {{/nav-link}}
    {{/nav-item}}
  {{/nav-list}}
{{/nav}}
```

```hbs title=Grouped
{{#> nav nav--attribute='aria-label="Global"' nav--modifier="pf-m-dark"}}
  {{#> nav-section nav-section--attribute='aria-labelledby="grouped-title1"'}}
    {{#> nav-section-title nav-section-title--attribute='id="grouped-title1"'}}
      Section title 1
    {{/nav-section-title}}
    {{#> nav-list nav-list--type="simple"}}
      {{#> nav-item}}
        {{#> nav-link nav-link--href="#"}}
          Link 1
        {{/nav-link}}
      {{/nav-item}}
      {{#> nav-item}}
        {{#> nav-link nav-link--href="#"}}
          Disabled link
        {{/nav-link}}
      {{/nav-item}}
      {{#> nav-item}}
        {{#> nav-link nav-link--href="#"}}
          Link 3
        {{/nav-link}}
      {{/nav-item}}
    {{/nav-list}}
  {{/nav-section}}
  {{#> nav-section nav-section--attribute='aria-labelledby="grouped-title2"'}}
    {{#> nav-section-title nav-section-title--attribute='id="grouped-title2"'}}
      Section title 2
    {{/nav-section-title}}
    {{#> nav-list nav-list--type="simple"}}
      {{#> nav-item}}
        {{#> nav-link nav-link--href="#" nav-link--current="true"}}
          Current link
        {{/nav-link}}
      {{/nav-item}}
      {{#> nav-item}}
        {{#> nav-link nav-link--href="#"}}
          Link 2
        {{/nav-link}}
      {{/nav-item}}
      {{#> nav-item}}
        {{#> nav-link nav-link--href="#"}}
          Link 3
        {{/nav-link}}
      {{/nav-item}}
    {{/nav-list}}
  {{/nav-section}}
{{/nav}}
```

```hbs title=Expanded
{{#> nav nav--attribute='aria-label="Global"' nav--modifier="pf-m-dark"}}
  {{#> nav-list}}
    {{#> nav-item nav-item--expandable="true" nav-item--expanded="true" nav-item--current="true"}}
      {{#> nav-link nav-link--href="#" nav-link--attribute='id="expandable-example1"'}}
        Link 1 (current and expanded example)
      {{/nav-link}}
      {{#> nav-subnav nav-subnav--attribute='aria-labelledby="expandable-example1"'}}
        {{#> nav-list nav-list--type="simple"}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#" nav-link--current="true"}}
              Current link
            {{/nav-link}}
          {{/nav-item}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#"}}
              Subnav link 2
            {{/nav-link}}
          {{/nav-item}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#"}}
              Subnav link 3
            {{/nav-link}}
          {{/nav-item}}
        {{/nav-list}}
      {{/nav-subnav}}
    {{/nav-item}}
    {{#> nav-item nav-item--expandable="true" nav-item--expanded="true"}}
      {{#> nav-link nav-link--href="#" nav-link--attribute='id="expandable-example2"'}}
        Link 2 (expanded, but not current example)
      {{/nav-link}}
      {{#> nav-subnav nav-subnav--attribute='aria-labelledby="expandable-example2"'}}
        {{#> nav-list nav-list--type="simple"}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#"}}
              Subnav link 1
            {{/nav-link}}
          {{/nav-item}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#"}}
              Subnav link 2
            {{/nav-link}}
          {{/nav-item}}
        {{/nav-list}}
      {{/nav-subnav}}
    {{/nav-item}}
    {{#> nav-item nav-item--expandable="true"}}
      {{#> nav-link nav-link--href="#" nav-link--attribute='id="expandable-example3"'}}
        Link 3
      {{/nav-link}}
      {{#> nav-subnav nav-subnav--attribute='aria-labelledby="expandable-example3"'}}
        {{#> nav-list nav-list--type="simple"}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#"}}
              Subnav link 1
            {{/nav-link}}
          {{/nav-item}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#"}}
              Subnav link 2
            {{/nav-link}}
          {{/nav-item}}
        {{/nav-list}}
      {{/nav-subnav}}
    {{/nav-item}}
  {{/nav-list}}
{{/nav}}
```

```hbs title=Expanded-with-subnav-titles
{{#> nav nav--attribute='aria-label="Global"' nav--modifier="pf-m-dark"}}
  {{#> nav-list}}
    {{#> nav-item nav-item--expandable="true" nav-item--expanded="true" nav-item--current="true"}}
      {{#> nav-link nav-link--href="#"}}
        Link 1
      {{/nav-link}}
      {{#> nav-subnav nav-subnav--attribute='aria-labelledby="subnav-title1"'}}
        {{#> nav-subnav-title nav-subnav-title--attribute='id="subnav-title1"'}}
          Current and expanded example sub-navigation
        {{/nav-subnav-title}}
        {{#> nav-list nav-list--type="simple"}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#" nav-link--current="true"}}
              Current link
            {{/nav-link}}
          {{/nav-item}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#"}}
              Subnav link 2
            {{/nav-link}}
          {{/nav-item}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#"}}
              Subnav link 3
            {{/nav-link}}
          {{/nav-item}}
        {{/nav-list}}
      {{/nav-subnav}}
    {{/nav-item}}
    {{#> nav-item nav-item--expandable="true" nav-item--expanded="true"}}
      {{#> nav-link nav-link--href="#"}}
        Link 2
      {{/nav-link}}
      {{#> nav-subnav nav-subnav--attribute='aria-labelledby="subnav-title2"'}}
        {{#> nav-subnav-title nav-subnav-title--attribute='id="subnav-title2"'}}
          Expanded, but not current example sub-navigation
        {{/nav-subnav-title}}
        {{#> nav-list nav-list--type="simple"}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#"}}
              Subnav link 1
            {{/nav-link}}
          {{/nav-item}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#"}}
              Subnav link 2
            {{/nav-link}}
          {{/nav-item}}
        {{/nav-list}}
      {{/nav-subnav}}
    {{/nav-item}}
  {{/nav-list}}
{{/nav}}
```

```hbs title=Mixed
{{#> nav nav--attribute='aria-label="Global"' nav--modifier="pf-m-dark"}}
  {{#> nav-list}}
    {{#> nav-item}}
      {{#> nav-link nav-link--href="#"}}
        Link 1 (not expandable)
      {{/nav-link}}
    {{/nav-item}}
    {{#> nav-item nav-item--expandable="true" nav-item--expanded="true"}}
      {{#> nav-link nav-link--href="#" nav-link--attribute='id="nav-mixed-link2"'}}
        Link 2 (expanded, but not current example)
      {{/nav-link}}
      {{#> nav-subnav nav-subnav--attribute='aria-labelledby="nav-mixed-link2"'}}
        {{#> nav-list nav-list--type="simple"}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#"}}
              Subnav link 1
            {{/nav-link}}
          {{/nav-item}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#"}}
              Subnav link 2
            {{/nav-link}}
          {{/nav-item}}
        {{/nav-list}}
      {{/nav-subnav}}
    {{/nav-item}}
    {{#> nav-item nav-item--expandable="true" nav-item--current="true"}}
      {{#> nav-link nav-link--href="#" nav-link--attribute='id="nav-mixed-link4"'}}
        Link 4 (current, but not expanded example)
      {{/nav-link}}
      {{#> nav-subnav nav-subnav--attribute='aria-labelledby="nav-mixed-link4"'}}
        {{#> nav-list nav-list--type="simple"}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#"}}
              Subnav link 1
            {{/nav-link}}
          {{/nav-item}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#" nav-link--current="true"}}
              Subnav link 2
            {{/nav-link}}
          {{/nav-item}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#"}}
              Subnav link 3
            {{/nav-link}}
          {{/nav-item}}
        {{/nav-list}}
      {{/nav-subnav}}
    {{/nav-item}}
  {{/nav-list}}
{{/nav}}
```

```hbs title=Horizontal-in-masthead
<div class="pf-c-page__header">
  <div class="pf-c-page__header-nav">
    {{#> nav nav--attribute='aria-label="Global"'}}
      {{#> nav-scroll-button nav-scroll-button--IsLeft="true"}}
      {{/nav-scroll-button}}
      {{#> nav-list nav-list--type="horizontal"}}
        {{#> nav-item}}
          {{#> nav-link nav-link--href="#" nav-link--current="true"}}
            Item 1
          {{/nav-link}}
        {{/nav-item}}
        {{#> nav-item}}
          {{#> nav-link nav-link--href="#"}}
            Item 2
          {{/nav-link}}
        {{/nav-item}}
        {{#> nav-item}}
          {{#> nav-link nav-link--href="#"}}
            Item 3
          {{/nav-link}}
        {{/nav-item}}
      {{/nav-list}}
      {{#> nav-scroll-button nav-scroll-button--IsRight="true"}}
      {{/nav-scroll-button}}
    {{/nav}}
  </div>
</div>
```

```hbs title=Horizontal-overflow-in-masthead
<div class="pf-c-page__header">
  <div class="pf-c-page__header-nav">
    {{#> nav nav--modifier="pf-m-start pf-m-end" nav--attribute='aria-label="Global"'}}
      {{#> nav-scroll-button nav-scroll-button--IsLeft="true"}}
      {{/nav-scroll-button}}
      {{#> nav-list nav-list--type="horizontal"}}
        {{#> nav-item}}
          {{#> nav-link nav-link--href="#"}}
            Horizontal nav item 1
          {{/nav-link}}
        {{/nav-item}}
        {{#> nav-item}}
          {{#> nav-link nav-link--href="#"}}
            Horizontal nav item 2
          {{/nav-link}}
        {{/nav-item}}
        {{#> nav-item}}
          {{#> nav-link nav-link--href="#"}}
            Horizontal nav item 3
          {{/nav-link}}
        {{/nav-item}}
        {{#> nav-item}}
          {{#> nav-link nav-link--href="#"}}
            Horizontal nav item 4
          {{/nav-link}}
        {{/nav-item}}
        {{#> nav-item}}
          {{#> nav-link nav-link--href="#" nav-link--current="true"}}
            Horizontal nav item 5
          {{/nav-link}}
        {{/nav-item}}
      {{/nav-list}}
      {{#> nav-scroll-button nav-scroll-button--IsRight="true"}}
      {{/nav-scroll-button}}
    {{/nav}}
  </div>
</div>
```

```hbs title=Tertiary
{{#> nav nav--attribute='aria-label="Local"'}}
  {{#> nav-scroll-button nav-scroll-button--IsLeft="true"}}
  {{/nav-scroll-button}}
  {{#> nav-list nav-list--type="tertiary"}}
    {{#> nav-item}}
      {{#> nav-link nav-link--href="#" nav-link--current="true"}}
        Item 1
      {{/nav-link}}
    {{/nav-item}}
    {{#> nav-item}}
      {{#> nav-link nav-link--href="#"}}
        Item 2
      {{/nav-link}}
    {{/nav-item}}
    {{#> nav-item}}
      {{#> nav-link nav-link--href="#"}}
        Item 3
      {{/nav-link}}
    {{/nav-item}}
  {{/nav-list}}
  {{#> nav-scroll-button nav-scroll-button--IsRight="true"}}
  {{/nav-scroll-button}}
{{/nav}}
```

```hbs title=Tertiary-overflow
{{#> nav nav--modifier="pf-m-start pf-m-end" nav--attribute='aria-label="Local"'}}
  {{#> nav-scroll-button nav-scroll-button--IsLeft="true"}}
  {{/nav-scroll-button}}
  {{#> nav-list nav-list--type="tertiary"}}
    {{#> nav-item}}
      {{#> nav-link nav-link--href="#" nav-link--current="true"}}
        Tertiary nav item 1
      {{/nav-link}}
    {{/nav-item}}
    {{#> nav-item}}
      {{#> nav-link nav-link--href="#"}}
        Tertiary nav item 2
      {{/nav-link}}
    {{/nav-item}}
    {{#> nav-item}}
      {{#> nav-link nav-link--href="#"}}
        Tertiary nav item 3
      {{/nav-link}}
    {{/nav-item}}
    {{#> nav-item}}
      {{#> nav-link nav-link--href="#"}}
        Tertiary nav item 4
      {{/nav-link}}
    {{/nav-item}}
    {{#> nav-item}}
      {{#> nav-link nav-link--href="#"}}
        Tertiary nav item 5
      {{/nav-link}}
    {{/nav-item}}
  {{/nav-list}}
  {{#> nav-scroll-button nav-scroll-button--IsRight="true"}}
  {{/nav-scroll-button}}
{{/nav}}
```

## Documentation
### Overview
The navigation system relies on several different sub-components:

* `.pf-c-nav__list` - default navigation list. It is the basis for both default and expandable, vertical navigation.
* `.pf-c-nav__simple-list` - nav list simple is used within `.pf-c-nav__subnav` in expandable navigation.
* `.pf-c-nav__horizontal-list` - nav list horizontal is a shareable component that can be used within the page header, as primary navigation, or as tertiary navigation, when expandable, vertical navigation is implemented.
* `.pf-c-nav__tertiary-list` - nav list tertiary is a component that can be used within `<main>`, as third level navigation (tertiary navigation), when expandable, vertical navigation is implemented.

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="[landmark description]"` | `.pf-c-nav` |  Describes `<nav>` landmark. |
| `aria-labelledby="[id value of link describing subnav]"` | `.pf-c-nav__subnav` |  Gives the subnav `<section>` landmark an accessible name by referring to the element that provides the subnav `<section>` landmark title. |
| `aria-expanded="false"` | `.pf-c-nav__link` |  Indicates that subnav section is hidden. |
| `aria-expanded="true"` | `.pf-c-nav__link` |  Indicates that subnav section is visible. |
| `hidden` | `.pf-c-nav__subnav` |  Indicates that the subnav section is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies. |
| `aria-current="page"` | `.pf-c-nav__link` |  Indicates the current page link. Can only occur once on page. |
| `role="separator"` | `.pf-c-nav__separator` |  Indicates that the divider separates and distinguishes sections of links in the nav. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-nav` | `<nav>` | Initiates a primary nav element. |
| `.pf-c-nav__subnav` | `<section>` | Initiates a subnav section. |
| `.pf-c-nav__list` | `<ul>` | Initiates default nav list. |
| `.pf-c-nav__simple-list` | `<ul>` | Initiates simple nav list. |
| `.pf-c-nav__item` | `<li>` | Initiates default nav list item. |
| `.pf-c-nav__separator` | `<li>` | Initiates list separator. |
| `.pf-c-nav__scroll-button` | `<button>` | Intitiates a nav scroll button. **Required for horizontal navs** |
| `.pf-c-nav__link` | `<a>` | Initiates default nav list link. |
| `.pf-c-nav__section` | `<section>` | Initiates a nav section element. |
| `.pf-c-nav__section-title` | `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` | Initiates a nav section title. |
| `.pf-c-nav__toggle` | `<span>` | Initiates a chevron indicating expandability of a `pf-c-nav__list-link`. |
| `.pf-c-nav__toggle-icon` | `<i>` | Initiates a nav toggle icon. |
| `.pf-m-dark` | `.pf-c-nav` | Modifies the nav for the dark variation. **Note: only for use with vertical navs, and requires `.pf-m-dark` on the page component's sidebar element (`.pf-c-page__sidebar`)**. |
| `.pf-m-expandable` | `.pf-c-nav__item` | Modifies for the expandable state. |
| `.pf-m-expanded` | `.pf-c-nav__item` | Modifies for the expanded state. |
| `.pf-m-hover` | `.pf-c-nav__link` | Modifies to display the link as hovered. |
| `.pf-m-focus` | `.pf-c-nav__link` | Modifies to display the link as focussed. |
| `.pf-m-current` | `.pf-c-nav__link` | Modifies for the current state. |
| `.pf-m-active` | `.pf-c-nav__link` | Modifies to display the link as active. |
| `.pf-m-disabled` | `.pf-c-nav__link` | Modifies to display the link as disabled. |
| `.pf-m-start` | `.pf-c-nav` | Modifiers the nav to show the overflow at the start. |
| `.pf-m-end` | `.pf-c-nav` | Modifiers the nav to show the overflow at the end. |
