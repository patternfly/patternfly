---
title: Tabs
section: components
cssPrefix: pf-c-tabs
---

import './Tabs.css'

## Examples

```hbs title=Default
<script>
  function toggleClass(root) {
    let target = document.getElementById(root);

    target.classList.toggle('pf-m-scrollable');
  }
</script>

{{> class-toggle class-toggle--id="default-example"}}
{{#> tabs tabs--id="default-example"}}
  {{> tabs-list-content}}
{{/tabs}}
```

```hbs title=Default-overflow-beginning-of-list
{{> class-toggle class-toggle--id="default-overflow-beginning-of-list-example"}}
{{#> tabs tabs--id="default-overflow-beginning-of-list-example" tabs--modifier="pf-m-scrollable"}}
  {{> tabs-list-content tabs-list-content--DisabledFirstScrollButton="true"}}
{{/tabs}}
```

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `disabled` | `.pf-c-tabs__scroll-button` | Indicates that a scroll button is disable, typically when at the first or last item of a list. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-scrollable` | `.pf-c-tabs` | Enables the directional scroll buttons. |

```hbs title=Vertical
{{#> tabs tabs--id="vertical-example" tabs--modifier="pf-m-vertical"}}
  {{> tabs-list-content tabs-list-content--NoScrollButtons="true"}}
{{/tabs}}
```

```hbs title=Box
{{> class-toggle class-toggle--id="box-example"}}
{{#> tabs tabs--id="box-example" tabs--modifier="pf-m-box"}}
  {{> tabs-list-content}}
{{/tabs}}
```

```hbs title=Box-overflow
{{> class-toggle class-toggle--id="box-overflow-example"}}
{{#> tabs tabs--id="box-overflow-example" tabs--modifier="pf-m-box pf-m-scrollable" tabs-list-content--DisabledFirstScrollButton="true"}}
  {{> tabs-list-content}}
{{/tabs}}
```

```hbs title=Box-vertical
{{#> tabs tabs--id="box-vertical-example" tabs--modifier="pf-m-box pf-m-vertical"}}
  {{> tabs-list-content tabs-list-content--NoScrollButtons="true"}}
{{/tabs}}
```

```hbs title=Icons-and-text
{{> class-toggle class-toggle--id="icons-example"}}
{{#> tabs tabs--id="icons-example"}}
  {{> tabs-list-content tabs-list-content--HasIcons="true"}}
{{/tabs}}
```

```hbs title=Tabs-with-sub-tabs
{{#> class-toggle-group}}
  {{> class-toggle class-toggle--id="default-parent-example" class-toggle--text="default-parent"}}
  {{> class-toggle class-toggle--id="default-child-example" class-toggle--text="default-child"}}
{{/class-toggle-group}}
{{#> tabs tabs--id="default-parent-example" tabs--modifier="pf-m-sortable"}}
  {{> tabs-list-content}}
{{/tabs}}

{{#> tabs tabs--id="default-child-example" tabs--IsSecondary="true"}}
  {{> tabs-list-content-secondary}}
{{/tabs}}
```

```hbs title=Box-tabs-with-sub-tabs
{{#> class-toggle-group}}
  {{> class-toggle class-toggle--id="box-parent-example" class-toggle--text="box-parent"}}
  {{> class-toggle class-toggle--id="box-child-example" class-toggle--text="box-child"}}
{{/class-toggle-group}}
{{#> tabs tabs--id="box-parent-example" tabs--modifier="pf-m-box pf-m-scrollable"}}
  {{> tabs-list-content}}
{{/tabs}}

{{#> tabs tabs--id="box-child-example" tabs--IsSecondary="true"}}
  {{> tabs-list-content-secondary}}
{{/tabs}}
```

```hbs title=Filled
{{> class-toggle class-toggle--id="filled-example"}}
{{#> tabs tabs--id="filled-example" tabs--modifier="pf-m-fill"}}
  {{> tabs-list-content tabs-list-content--IsShort="true"}}
{{/tabs}}
```

```hbs title=Filled-with-icons
{{> class-toggle class-toggle--id="filled-with-icons-example"}}
{{#> tabs tabs--id="filled-with-icons-example" tabs--modifier="pf-m-fill"}}
  {{> tabs-list-content tabs-list-content--HasIcons="true" tabs-list-content--IsShort="true"}}
{{/tabs}}
```

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-fill`  | `.pf-c-tabs` | Enables the filled tab list layout. **Required** |

```hbs title=Using-the-nav-element
{{> class-toggle class-toggle--id="default-scroll-nav-example"}}
{{#> tabs tabs--id="default-scroll-nav-example" tabs--type="nav" tabs--modifier="pf-m-scrollable" tabs--attribute='aria-label="Local"' tabs-button--type="a"}}
  {{> tabs-list-content}}
{{/tabs}}
```

```hbs title=Sub-nav-using-the-nav-element
{{#> tabs tabs--id="primary-nav-example" tabs--type="nav" tabs--attribute='aria-label="Local"' tabs-button--type="a"}}
  {{> tabs-list-content}}
{{/tabs}}

{{#> tabs tabs--id="secondary-nav-example" tabs--type="nav" tabs--attribute='aria-label="Local secondary"' tabs-button--type="a" tabs--modifier="pf-m-secondary"}}
  {{> tabs-list-content-secondary}}
{{/tabs}}
```

Whenever a list of tabs is unique on the current page, it can be used in a `<nav>` element. Cases where the same set of tabs are duplicated in multiple regions on a page (e.g. cards on a dashboard) are less likely to benefit from using the `<nav>` element.

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="Descriptive text"` | `nav.pf-c-tabs`, `nav.pf-c-tabs.pf-m-secondary` | Gives the `<nav>` an accessible label. **Required when `.pf-c-tabs` is used with `<nav>`**
| `aria-label="Descriptive text"` | `.pf-c-inline-edit__toggle > button` | Provides an accessible description for toggle button. **Required**

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-tabs` | `<nav>`, `<div>` | Initiates a tabs component. **Required** |
| `.pf-c-tabs__list` | `<div>` | Initiates a tabs component list. **Required** |
| `.pf-c-tabs__item` | `<div>` | Initiates a tabs component item. **Required** |
| `.pf-c-tabs__button` | `<div>` | Initiates a tabs component button. **Required** |
| `.pf-c-tabs__scroll-button` | `<div>` | Initiates a tabs component scroll button. |
| `.pf-m-secondary` | `.pf-c-tabs` | Applies secondary styling to the tab component. |
| `.pf-m-box` | `.pf-c-tabs` | Applies box styling to the tab component. |
| `.pf-m-vertical` | `.pf-c-tabs` | Applies vertical styling to the tab component. |
| `.pf-m-fill` | `.pf-c-tabs` | Applies filled styling to the tabs component. |
| `.pf-m-current` | `.pf-c-tabs__item` | Indicates that a tab item is currently selected. |
| `.pf-m-inset-{none, sm, md, lg, xl, 2xl, 3xl}{-on-[sm, md, lg, xl, 2xl]}` | `.pf-c-tabs` | Modifies the tabs component padding/inset to visually match padding of other adjacent components. |

The tabs component should only be used to change content views within a page. The similar-looking but semantically different [horizontal nav component](/documentation/core/components/nav) is available for general navigation use cases.

Tabs should be used with the [tab content component](/documentation/core/components/tabcontent).
