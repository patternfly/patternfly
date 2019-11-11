---
title: Tabs
section: components
cssPrefix: pf-c-tabs
---

## Examples
```hbs title=Primary
{{#> tabs tabs--id="primary"}}
  {{#> tabs-scroll-button tabs-scroll-button--IsLeft="true"}}
  {{/tabs-scroll-button}}
  {{#> tabs-list}}
    {{#> tabs-item tabs-item--attribute='' tabs-item--current="true"}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab1"')}}
        Tab item 1
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab2"')}}
        Tab item 2
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab3"')}}
        Tab item 3
      {{/tabs-button}}
    {{/tabs-item}}
  {{/tabs-list}}
  {{#> tabs-scroll-button tabs-scroll-button--IsRight="true"}}
  {{/tabs-scroll-button}}
{{/tabs}}
```

```hbs title=Primary-overflow
{{#> tabs tabs--id="primary-overflow" tabs--modifier="pf-m-start pf-m-start-current pf-m-end"}}
  {{#> tabs-scroll-button tabs-scroll-button--IsLeft="true"}}
  {{/tabs-scroll-button}}
  {{#> tabs-list}}
    {{#> tabs-item tabs-item--current="true"}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab1"')}}
        Tab item 1
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab2"')}}
        Tab item 2
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab3"')}}
        Tab item 3
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab4"')}}
        Tab item 4
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab5"')}}
        Tab item 5
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab6"')}}
        Tab item 6
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab7"')}}
        Tab item 7
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab8"')}}
        Tab item 8
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab9"')}}
        Tab item 9
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab10"')}}
        Tab item 10
      {{/tabs-button}}
    {{/tabs-item}}
  {{/tabs-list}}
  {{#> tabs-scroll-button tabs-scroll-button--IsRight="true"}}
  {{/tabs-scroll-button}}
{{/tabs}}
```
Whenever a `.pf-m-current` tab is scrolled beyond the width of the container, the appropriate scroll button should be highlighted using `.pf-m-start-current` or `.pf-m-end-current` to indicate that the current tab exists in that direction.
### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-start`          | `.pf-c-tabs` | Enables the first directional scroll button.     |
| `.pf-m-start-current`  | `.pf-c-tabs` | Highlights the first directional scroll button.  |
| `.pf-m-end`            | `.pf-c-tabs` | Enables the second directional scroll button.    |
| `.pf-m-end-current`    | `.pf-c-tabs` | Highlights the second directional scroll button. |

```hbs title=Secondary
{{#> tabs tabs--id="secondary" tabs--IsSecondary="true"}}
  {{#> tabs-scroll-button tabs-scroll-button--modifier="pf-m-secondary" tabs-scroll-button--IsLeft="true"}}
  {{/tabs-scroll-button}}
  {{#> tabs-list}}
    {{#> tabs-item tabs-item--current="true"}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab1"')}}
        Secondary tab item 1
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab2"')}}
        Secondary tab item 2
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab3"')}}
        Secondary tab item 3
      {{/tabs-button}}
    {{/tabs-item}}
  {{/tabs-list}}
  {{#> tabs-scroll-button tabs-scroll-button--modifier="pf-m-secondary" tabs-scroll-button--IsRight="true"}}
  {{/tabs-scroll-button}}
{{/tabs}}
```
Secondary tabs can be placed as an independent component anywhere within an interface. If placed directly adjacent to a set of primary tabs, they adopt a small amount of styling to properly align the two tab sets.

If secondary tabs cannot be placed directly adjacent to primary tabs, `.pf-m-tabs-secondary` can be applied to a directly adjacent container `<div>` with `.pf-c-tabs` as a child to achieve the same effect.
### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-tabs-secondary` | `.pf-c-tabs` or `<div>` | Creates a secondary tabs component. **Required** |

```hbs title=Secondary-overflow
{{#> tabs tabs--id="secondary-overflow-end" tabs--IsSecondary="true" tabs--modifier="pf-m-start pf-m-end-current pf-m-end"}}
  {{#> tabs-scroll-button tabs-scroll-button--modifier="pf-m-secondary" tabs-scroll-button--IsLeft="true"}}
  {{/tabs-scroll-button}}
  {{#> tabs-list}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab1"')}}
        Secondary tab item 1
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab2"')}}
        Secondary tab item 2
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab3"')}}
        Secondary tab item 3
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab4"')}}
        Secondary tab item 4
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab5"')}}
        Secondary tab item 5
      {{/tabs-button}}
    {{/tabs-item}}
     {{#> tabs-item tabs-item--current="true"}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab6"')}}
        Secondary tab item 6
      {{/tabs-button}}
    {{/tabs-item}}
  {{/tabs-list}}
  {{#> tabs-scroll-button tabs-scroll-button--modifier="pf-m-secondary" tabs-scroll-button--IsRight="true"}}
  {{/tabs-scroll-button}}
{{/tabs}}
```
Whenever a `.pf-m-current` tab is scrolled beyond the width of the container, the appropriate scroll button should be highlighted using `.pf-m-start-current` or `.pf-m-end-current` to indicate that the current tab exists in that direction.
### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-start` | `.pf-c-tabs` | Enables the first directional scroll button.     |
| `.pf-m-start-current` | `.pf-c-tabs` | Highlights the first directional scroll button.  |
| `.pf-m-end` | `.pf-c-tabs` | Enables the second directional scroll button.    |
| `.pf-m-end-current` | `.pf-c-tabs` | Highlights the second directional scroll button. |
| `.pf-m-hover` | `.pf-c-tabs__button` | Adds the hover style to the tabs button. |
| `.pf-m-active` | `.pf-c-tabs__button` | Adds the active style to the tabs button. |
| `.pf-m-focus` | `.pf-c-tabs__button` | Adds the focus style to the tabs button. |
| `.pf-m-secondary` | `.pf-c-tabs__button` | Adds the secondary styles to the button. |

```hbs title=Primary-with-secondary
{{#> tabs tabs--id="primary-with-secondary"}}
  {{#> tabs-scroll-button tabs-scroll-button--IsLeft="true"}}
  {{/tabs-scroll-button}}
  {{#> tabs-list}}
    {{#> tabs-item tabs-item--attribute='' tabs-item--current="true"}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab1"')}}
        Tab item 1
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab2"')}}
        Tab item 2
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab3"')}}
        Tab item 3
      {{/tabs-button}}
    {{/tabs-item}}
  {{/tabs-list}}
  {{#> tabs-scroll-button tabs-scroll-button--IsRight="true"}}
  {{/tabs-scroll-button}}
{{/tabs}}

{{#> tabs tabs--id="secondary-with-primary" tabs--IsSecondary="true"}}
  {{#> tabs-scroll-button tabs-scroll-button--modifier="pf-m-secondary" tabs-scroll-button--IsLeft="true"}}
  {{/tabs-scroll-button}}
  {{#> tabs-list}}
    {{#> tabs-item tabs-item--current="true"}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab1"')}}
        Secondary tab item 1
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab2"')}}
        Secondary tab item 2
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab3"')}}
        Secondary tab item 3
      {{/tabs-button}}
    {{/tabs-item}}
  {{/tabs-list}}
  {{#> tabs-scroll-button tabs-scroll-button--modifier="pf-m-secondary" tabs-scroll-button--IsRight="true"}}
  {{/tabs-scroll-button}}
{{/tabs}}

<br>
<br>

{{#> tabs tabs--id="primary-with-secondary-scroll" tabs--modifier="pf-m-start pf-m-start-current pf-m-end"}}
  {{#> tabs-scroll-button tabs-scroll-button--IsLeft="true"}}
  {{/tabs-scroll-button}}
  {{#> tabs-list}}
    {{#> tabs-item tabs-item--current="true"}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab1"')}}
        Tab item 1
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab2"')}}
        Tab item 2
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab3"')}}
        Tab item 3
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab4"')}}
        Tab item 4
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab5"')}}
        Tab item 5
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab6"')}}
        Tab item 6
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab7"')}}
        Tab item 7
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab8"')}}
        Tab item 8
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab9"')}}
        Tab item 9
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab10"')}}
        Tab item 10
      {{/tabs-button}}
    {{/tabs-item}}
  {{/tabs-list}}
  {{#> tabs-scroll-button tabs-scroll-button--IsRight="true"}}
  {{/tabs-scroll-button}}
{{/tabs}}

{{#> tabs tabs--id="secondary-with-primary-scroll" tabs--IsSecondary="true" tabs--modifier="pf-m-start pf-m-start-current pf-m-end"}}
  {{#> tabs-scroll-button tabs-scroll-button--modifier="pf-m-secondary" tabs-scroll-button--IsLeft="true"}}
  {{/tabs-scroll-button}}
  {{#> tabs-list}}
    {{#> tabs-item tabs-item--current="true"}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab1"')}}
        Secondary tab item 1
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab2"')}}
        Secondary tab item 2
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab3"')}}
        Secondary tab item 3
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab4"')}}
        Secondary tab item 4
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab5"')}}
        Secondary tab item 5
      {{/tabs-button}}
    {{/tabs-item}}
     {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab7"')}}
        Secondary tab item 6
      {{/tabs-button}}
    {{/tabs-item}}
  {{/tabs-list}}
  {{#> tabs-scroll-button tabs-scroll-button--modifier="pf-m-secondary" tabs-scroll-button--IsRight="true"}}
  {{/tabs-scroll-button}}
{{/tabs}}
```

```hbs title=Filled
{{#> tabs tabs--id="primary-filled" tabs--modifier="pf-m-fill"}}
  {{#> tabs-scroll-button tabs-scroll-button--IsLeft="true"}}
  {{/tabs-scroll-button}}
  {{#> tabs-list}}
    {{#> tabs-item tabs-item--current="true"}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab1"')}}
        Tab item 1
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab2"')}}
        Tab item 2
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab3"')}}
        Tab item 3
      {{/tabs-button}}
    {{/tabs-item}}
  {{/tabs-list}}
  {{#> tabs-scroll-button tabs-scroll-button--IsRight="true"}}
  {{/tabs-scroll-button}}
{{/tabs}}
```
## Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-fill`  | `.pf-c-tabs` | Enables the filled tab list layout. **Required** |

```hbs title=Using-the-nav-element
{{#> tabs tabs--id="primary-scroll-nav" tabs--type="nav" tabs--modifier="pf-m-start pf-m-start-current pf-m-end" tabs--attribute='aria-label="Local"' tabs-button--type="a"}}
  {{#> tabs-scroll-button tabs-scroll-button--IsLeft="true"}}
  {{/tabs-scroll-button}}
  {{#> tabs-list}}
    {{#> tabs-item tabs-item--current="true"}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab1" href="#"')}}
        Tab item 1
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab2" href="#"')}}
        Tab item 2
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab3" href="#"')}}
        Tab item 3
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab4" href="#"')}}
        Tab item 4
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab5" href="#"')}}
        Tab item 5
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab6" href="#"')}}
        Tab item 6
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab7" href="#"')}}
        Tab item 7
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab8" href="#"')}}
        Tab item 8
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab9" href="#"')}}
        Tab item 9
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab10" href="#"')}}
        Tab item 10
      {{/tabs-button}}
    {{/tabs-item}}
  {{/tabs-list}}
  {{#> tabs-scroll-button tabs-scroll-button--IsRight="true"}}
  {{/tabs-scroll-button}}
{{/tabs}}

<br><br>

{{#> tabs tabs--id="primary-nav" tabs--type="nav" tabs--attribute='aria-label="Local"' tabs-button--type="a"}}
  {{#> tabs-scroll-button tabs-scroll-button--IsLeft="true"}}
  {{/tabs-scroll-button}}
  {{#> tabs-list}}
    {{#> tabs-item tabs-item--current="true"}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab1" href="#"')}}
        Tab item 1
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab2" href="#"')}}
        Tab item 2
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab3" href="#"')}}
        Tab item 3
      {{/tabs-button}}
    {{/tabs-item}}
  {{/tabs-list}}
  {{#> tabs-scroll-button tabs-scroll-button--IsRight="true"}}
  {{/tabs-scroll-button}}
{{/tabs}}

{{#> tabs tabs--id="secondary-nav" tabs--type="nav" tabs--IsSecondary="true" tabs--attribute='aria-label="Local secondary"' tabs-button--type="a"}}
  {{#> tabs-scroll-button tabs-scroll-button--modifier="pf-m-secondary" tabs-scroll-button--IsLeft="true"}}
  {{/tabs-scroll-button}}
  {{#> tabs-list}}
    {{#> tabs-item tabs-item--current="true"}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab1" href="#"')}}
        Secondary tab item 1
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab2" href="#"')}}
        Secondary tab item 2
      {{/tabs-button}}
    {{/tabs-item}}
    {{#> tabs-item}}
      {{#> tabs-button tabs-button--attribute=(concat 'id="' tabs--id '-tab3" href="#"')}}
        Secondary tab item 3
      {{/tabs-button}}
    {{/tabs-item}}
  {{/tabs-list}}
  {{#> tabs-scroll-button tabs-scroll-button--modifier="pf-m-secondary" tabs-scroll-button--IsRight="true"}}
  {{/tabs-scroll-button}}
{{/tabs}}
```
Whenever a list of tabs is unique on the current page, it can be used in a `<nav>` element. Cases where the same set of tabs are duplicated in multiple regions on a page (e.g. cards on a dashboard) are less likely to benefit from using the `<nav>` element.

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="Local"` | `nav.pf-c-tabs` | Gives the `<nav>` element an accessible name. **Required when `.pf-c-tabs` is used with `<nav>`**
| `aria-label="Local secondary"` | `nav.pf-c-tabs.pf-m-tabs-secondary` | Gives the `<nav>` element an accessible name. **Required when `.pf-c-tabs.pf-m-tabs-secondary` is used with `<nav>`**

### Usage
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-tabs__button` | `<a>`, `<button>` | Creates a tab link/button. **Note: `<a>` should be used when there is a URL associated with the tab, and should only be used when `.pf-c-tabs` is used with `<nav>`.** **Required** |


## Documentation
### Overview
The tabs component should only be used to change content views within a page. The similar-looking but semantically different [horizontal nav component](/documentation/core/components/nav) is available for general navigation use cases.

Tabs should be used with the [tab content component](/documentation/core/components/tabcontent).
