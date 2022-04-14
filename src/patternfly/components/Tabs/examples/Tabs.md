---
id: Tabs
section: components
cssPrefix: pf-c-tabs
---

import './Tabs.css'

## Examples

### Default
```hbs
{{#> tabs tabs--id="default-example"}}
  {{> __tabs-list __tabs-list--IsDisabled="true"}}
{{/tabs}}
```

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `disabled` | `button.pf-c-tabs__link` | Indicates that a tabs link is disabled. **Required when disabled** |
| `aria-disabled="true"` | `a.pf-c-tabs__link.pf-m-disabled`, `.pf-c-tabs__link.pf-m-aria-disabled` | Indicates to assistive technology that a tabs link is disabled. **Required when disabled** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-disabled` | `a.pf-c-tabs__link` | Modifies a tabs link for disabled styles. |
| `.pf-m-aria-disabled` | `.pf-c-tabs__link` | Modifies a tabs link for disabled styles, but is still hoverable/focusable. |

### Default overflow beginning of list
```hbs
{{#> tabs tabs--id="default-overflow-beginning-of-list-example" tabs--modifier="pf-m-scrollable"}}
  {{> __tabs-list __tabs-list--DisabledFirstScrollButton="true" __tabs-list--IsScrollable="true" __tabs-list--IsLong="true"}}
{{/tabs}}
```

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `disabled` | `.pf-c-tabs__scroll-button` | Indicates that a scroll button is disabled, when at the first or last item of a list. **Required when disabled** |
| `aria-hidden="true"` | `.pf-c-tabs__scroll-button` | Hides the icon from assistive technologies.**Required when not scrollable** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-scrollable` | `.pf-c-tabs` | Enables the directional scroll buttons. |
| `.pf-c-tabs__scroll-button` | `<button>` | Initiates a tabs component scroll button. |

### Vertical
```hbs
{{#> tabs tabs--id="vertical-example" tabs--modifier="pf-m-vertical"}}
  {{> __tabs-list __tabs-list--NoScrollButtons="true" __tabs-list--IsDisabled="true"}}
{{/tabs}}
```

### Box
```hbs
{{#> tabs tabs--id="box-example" tabs--modifier="pf-m-box"}}
  {{> __tabs-list __tabs-list--IsDisabled="true"}}
{{/tabs}}
```

### Box overflow
```hbs
{{#> tabs tabs--id="box-overflow-example" tabs--modifier="pf-m-box pf-m-scrollable" __tabs-list--DisabledFirstScrollButton="true"}}
  {{> __tabs-list __tabs-list--IsScrollable="true" __tabs-list--IsLong="true"}}
{{/tabs}}
```

### Box vertical
```hbs
{{#> tabs tabs--id="box-vertical-example" tabs--modifier="pf-m-box pf-m-vertical"}}
  {{> __tabs-list __tabs-list--NoScrollButtons="true" __tabs-list--IsDisabled="true"}}
{{/tabs}}
```

### Box tabs color scheme light 300
```hbs
{{#> tabs tabs--modifier="pf-m-box pf-m-color-scheme--light-300" tabs--id="box-tabs-alt-color-scheme"}}
  {{> __tabs-list __tabs-list--IsDisabled="true"}}
{{/tabs}}
<div className="tabs-example-block tabs-example-block--m-color-scheme--light-300"></div>
```

### Inset
```hbs
{{#> tabs tabs--id="inset-example" tabs--modifier="pf-m-inset-sm-on-md pf-m-inset-lg-on-lg pf-m-inset-2xl-on-xl"}}
  {{> __tabs-list}}
{{/tabs}}
```

### Inset box
```hbs
{{#> tabs tabs--id="inset-box-example" tabs--modifier="pf-m-box pf-m-inset-sm-on-md pf-m-inset-lg-on-lg pf-m-inset-2xl-on-xl"}}
  {{> __tabs-list}}
{{/tabs}}
```

### Page insets
```hbs
{{#> tabs tabs--id="page-insets-example" tabs--modifier="pf-m-page-insets"}}
  {{> __tabs-list}}
{{/tabs}}
```

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-inset-{none, sm, md, lg, xl, 2xl, 3xl}{-on-[sm, md, lg, xl, 2xl]}` | `.pf-c-tabs` | Modifies the tabs component padding/inset to visually match padding of other adjacent components. |
| `.pf-m-page-insets` | `.pf-c-tabs` | Modifies the tabs component padding/inset to visually match padding of page elements. |

### Icons and text
```hbs
{{#> tabs tabs--id="icons-example"}}
  {{> __tabs-list __tabs-list--HasIcons="true"}}
{{/tabs}}
```

### Tabs with sub tabs
```hbs
{{#> tabs tabs--id="default-parent-example" tabs--modifier="pf-m-scrollable"}}
  {{> __tabs-list __tabs-list--IsScrollable="true"}}
{{/tabs}}

{{#> tabs tabs--id="default-child-example" tabs--IsSecondary="true" tabs--modifier="pf-m-scrollable"}}
  {{> __tabs-list-secondary __tabs-list-secondary--IsScrollable="true"}}
{{/tabs}}
```

### Box tabs with sub tabs
```hbs
{{#> tabs tabs--id="box-parent-example" tabs--modifier="pf-m-box pf-m-scrollable"}}
  {{> __tabs-list __tabs-list--IsScrollable="true"}}
{{/tabs}}

{{#> tabs tabs--id="box-child-example" tabs--IsSecondary="true" tabs--modifier="pf-m-scrollable"}}
  {{> __tabs-list-secondary __tabs-list-secondary--IsScrollable="true"}}
{{/tabs}}
```

### Filled
```hbs
{{#> tabs tabs--id="filled-example" tabs--modifier="pf-m-fill"}}
  {{> __tabs-list __tabs-list--IsShort="true"}}
{{/tabs}}
```

### Filled with icons
```hbs
{{#> tabs tabs--id="filled-with-icons-example" tabs--modifier="pf-m-fill"}}
  {{> __tabs-list __tabs-list--HasIcons="true" __tabs-list--IsShort="true"}}
{{/tabs}}
```

### Filled box
```hbs
{{#> tabs tabs--id="filled-box-example" tabs--modifier="pf-m-fill pf-m-box"}}
  {{> __tabs-list __tabs-list--IsShort="true"}}
{{/tabs}}
```

### Filled box with icons
```hbs
{{#> tabs tabs--id="filled-box-with-icons-example" tabs--modifier="pf-m-fill pf-m-box"}}
  {{> __tabs-list __tabs-list--HasIcons="true" __tabs-list--IsShort="true"}}
{{/tabs}}
```

## Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-fill`  | `.pf-c-tabs` | Modifies the tabs to fill the available space. **Required** |

### Using the nav element
```hbs
{{#> tabs tabs--id="default-scroll-nav-example" tabs--type="nav" tabs--modifier="pf-m-scrollable" tabs--attribute='aria-label="Local"' tabs-link--isLink="true"}}
  {{> __tabs-list __tabs-list--IsScrollable="true" __tabs-list--IsDisabled="true"}}
{{/tabs}}
```

### Sub nav using the nav element
```hbs
{{#> tabs tabs--id="primary-nav-example" tabs--type="nav" tabs--attribute='aria-label="Local"' tabs-link--isLink="true"}}
  {{> __tabs-list}}
{{/tabs}}

{{#> tabs tabs--id="secondary-nav-example" tabs--type="nav" tabs--attribute='aria-label="Local secondary"' tabs-link--isLink="true" tabs--modifier="pf-m-secondary"}}
  {{> __tabs-list-secondary __tabs-list--IsDisabled="true"}}
{{/tabs}}
```

### Vertical expandable
```hbs
{{#> tabs tabs--id="vertical-expandable-example" tabs--IsExpandable="true" tabs--modifier="pf-m-vertical"}}
  {{> tabs-toggle}}
  {{> __tabs-list __tabs-list--NoScrollButtons="true"}}
{{/tabs}}
```

### Vertical expanded
```hbs
{{#> tabs tabs--id="vertical-expanded-example" tabs--IsExpandable="true" tabs--IsExpanded="true" tabs--modifier="pf-m-vertical"}}
  {{> tabs-toggle}}
  {{> __tabs-list __tabs-list--NoScrollButtons="true"}}
{{/tabs}}
```

### Vertical expandable (responsive)
```hbs
{{#> tabs tabs--id="vertical-expandable-responsive-example" tabs--IsExpandable="true" tabs--modifier="pf-m-vertical pf-m-non-expandable-on-md pf-m-expandable-on-lg pf-m-non-expandable-on-xl"}}
  {{> tabs-toggle}}
  {{> __tabs-list __tabs-list--NoScrollButtons="true"}}
{{/tabs}}
```

### Vertical expandable (legacy)
```hbs
{{#> tabs tabs--id="vertical-expandable-example" tabs--IsExpandable="true" tabs--IsLegacy="true" tabs--modifier="pf-m-vertical"}}
  {{> tabs-toggle}}
  {{> __tabs-list __tabs-list--NoScrollButtons="true"}}
{{/tabs}}
```

### Vertical expanded (legacy)
```hbs
{{#> tabs tabs--id="vertical-expanded-example" tabs--IsExpandable="true" tabs--IsLegacy="true" tabs--IsExpanded="true" tabs--modifier="pf-m-vertical"}}
  {{> tabs-toggle}}
  {{> __tabs-list __tabs-list--NoScrollButtons="true"}}
{{/tabs}}
```

### Vertical expandable (responsive, legacy)
```hbs
{{#> tabs tabs--id="vertical-expandable-responsive-example" tabs--IsExpandable="true" tabs--IsLegacy="true" tabs--modifier="pf-m-vertical pf-m-non-expandable-on-md pf-m-expandable-on-lg pf-m-non-expandable-on-xl"}}
  {{> tabs-toggle}}
  {{> __tabs-list __tabs-list--NoScrollButtons="true"}}
{{/tabs}}
```

### Close button
```hbs
{{#> tabs tabs--id="close-default-example" tabs--modifier="pf-m-scrollable"}}
  {{> __tabs-list __tabs-list--IsDisabled="true" __tabs-list--IsAction="true" __tabs-list--HasClose="true" __tabs-list--IsCloseDisabled="true" __tabs-list--IsScrollable="true" __tabs-list--DisabledFirstScrollButton="true"}}
{{/tabs}}

<br><br>

{{#> tabs tabs--id="close-box-example" tabs--modifier="pf-m-box pf-m-scrollable"}}
  {{> __tabs-list __tabs-list--IsDisabled="true" __tabs-list--IsAction="true" __tabs-list--HasClose="true" __tabs-list--IsCloseDisabled="true" __tabs-list--IsScrollable="true" __tabs-list--DisabledFirstScrollButton="true"}}
{{/tabs}}

<br><br>

{{#> tabs tabs--id="close-box-light-300-example" tabs--modifier="pf-m-box pf-m-color-scheme--light-300 pf-m-scrollable"}}
  {{> __tabs-list __tabs-list--IsDisabled="true" __tabs-list--IsAction="true" __tabs-list--HasClose="true" __tabs-list--IsCloseDisabled="true" __tabs-list--IsScrollable="true" __tabs-list--DisabledFirstScrollButton="true"}}
{{/tabs}}

<br><br>

{{#> tabs tabs--id="close-icons-text-example" tabs--modifier="pf-m-scrollable"}}
  {{> __tabs-list __tabs-list--HasIcons="true" __tabs-list--IsDisabled="true" __tabs-list--IsAction="true" __tabs-list--HasClose="true" __tabs-list--IsCloseDisabled="true" __tabs-list--IsScrollable="true" __tabs-list--DisabledFirstScrollButton="true"}}
{{/tabs}}

<br><br>

{{#> tabs tabs--id="close-filled-example" tabs--modifier="pf-m-fill pf-m-scrollable"}}
  {{> __tabs-list __tabs-list--IsDisabled="true" __tabs-list--IsAction="true" __tabs-list--HasClose="true" __tabs-list--IsCloseDisabled="true" __tabs-list--IsScrollable="true" __tabs-list--DisabledFirstScrollButton="true"}}
{{/tabs}}

<br><br>

{{#> tabs tabs--id="close-secondary-primary-example" tabs--modifier="pf-m-scrollable"}}
  {{> __tabs-list __tabs-list--IsDisabled="true" __tabs-list--IsAction="true" __tabs-list--HasClose="true" __tabs-list--IsCloseDisabled="true" __tabs-list--IsScrollable="true" __tabs-list--DisabledFirstScrollButton="true"}}
{{/tabs}}
{{#> tabs tabs--id="close-secondary-secondary-example" tabs--modifier="pf-m-scrollable" tabs--IsSecondary="true"}}
  {{> __tabs-list __tabs-list--IsDisabled="true" __tabs-list--IsAction="true" __tabs-list--HasClose="true" __tabs-list--IsCloseDisabled="true" __tabs-list--IsScrollable="true" __tabs-list--DisabledFirstScrollButton="true"}}
{{/tabs}}
```

### Add tab button
```hbs
{{#> tabs tabs--id="close-default-example" tabs--modifier="pf-m-scrollable"}}
  {{> __tabs-list __tabs-list--IsAction="true" __tabs-list--HasClose="true" __tabs-list--IsScrollable="true" __tabs-list--DisabledFirstScrollButton="true" __tabs-list--HasAddTab="true"}}
{{/tabs}}
{{#> tabs tabs--id="close-secondary-example" tabs--modifier="pf-m-scrollable" tabs--IsSecondary="true"}}
  {{> __tabs-list __tabs-list--IsAction="true" __tabs-list--HasClose="true" __tabs-list--IsScrollable="true" __tabs-list--DisabledFirstScrollButton="true" __tabs-list--HasAddTab="true"}}
{{/tabs}}

<br><br>

{{#> tabs tabs--id="close-box-example" tabs--modifier="pf-m-box pf-m-scrollable"}}
  {{> __tabs-list __tabs-list--IsAction="true" __tabs-list--HasClose="true" __tabs-list--IsScrollable="true" __tabs-list--DisabledFirstScrollButton="true" __tabs-list--HasAddTab="true"}}
{{/tabs}}

<br><br>

{{#> tabs tabs--id="close-box-light-300-example" tabs--modifier="pf-m-box pf-m-color-scheme--light-300 pf-m-scrollable"}}
  {{> __tabs-list __tabs-list--IsAction="true" __tabs-list--HasClose="true" __tabs-list--IsScrollable="true" __tabs-list--DisabledFirstScrollButton="true" __tabs-list--HasAddTab="true"}}
{{/tabs}}
```

The tabs component should only be used to change content views within a page. The similar-looking but semantically different [horizontal nav component](/components/navigation/#horizontal) is available for general navigation use cases.

Tabs should be used with the [tab content component](/components/tab-content).

Whenever a list of tabs is unique on the current page, it can be used in a `<nav>` element. Cases where the same set of tabs are duplicated in multiple regions on a page (e.g. cards on a dashboard) are less likely to benefit from using the `<nav>` element.

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="Descriptive text"` | `nav.pf-c-tabs`, `nav.pf-c-tabs.pf-m-secondary` | Gives the `<nav>` an accessible label. **Required when `.pf-c-tabs` is used with `<nav>`**
| `aria-label="Descriptive text"` | `.pf-c-inline-edit__toggle > button` | Provides an accessible description for toggle button. **Required**
| `disabled` | `button.pf-c-tabs__link` | Indicates that a tabs link is disabled. **Required when disabled** |
| `aria-disabled="true"` | `a.pf-c-tabs__link.pf-m-disabled`, `.pf-c-tabs__link.pf-m-aria-disabled` | Indicates to assistive technology that a tabs link is disabled. **Required when disabled** |
| `disabled` | `.pf-c-tabs__scroll-button` | Indicates that a scroll button is disable, typically when at the first or last item of a list or scroll buttons are hidden. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-tabs` | `<nav>`, `<div>` | Initiates the tabs component. **Required** |
| `.pf-c-tabs__list` | `<ul>` | Initiates a tabs component list. **Required** |
| `.pf-c-tabs__item` | `<li>` | Initiates a tabs component item. **Required** |
| `.pf-c-tabs__item-text` | `<span>` | Initiates a tabs component item icon. **Required** |
| `.pf-c-tabs__item-icon` | `<span>` | Initiates a tabs component item text. **Required** |
| `.pf-c-tabs__item-close` | `<span>` | Initiates a tabs component item close. |
| `.pf-c-tabs__item-close-icon` | `<span>` | Initiates a tabs component item close icon. |
| `.pf-c-tabs__link` | `<button>`, `<a>` | Initiates a tabs component link. **Required** |
| `.pf-c-tabs__scroll-button` | `<button>` | Initiates a tabs component scroll button. |
| `.pf-c-tabs__add` | `<span>` | Initiates a tabs component add button. |
| `.pf-c-tabs__toggle` | `<div>` | Initiates a tabs expandable toggle. |
| `.pf-c-tabs__toggle-button` | `<button>` | Initiates a tabs expandable toggle button. |
| `.pf-c-tabs__toggle-icon` | `<span>` | Initiates a tabs expandable toggle icon. |
| `.pf-c-tabs__toggle-text` | `<span>` | Initiates a tabs expandable toggle text. |
| `.pf-m-secondary` | `.pf-c-tabs` | Applies secondary styling to the tab component. |
| `.pf-m-no-border-bottom` | `.pf-c-tabs` | Removes bottom border from a tab component. |
| `.pf-m-border-bottom` | `.pf-c-tabs` | Adds a bottom border to secondary tabs. |
| `.pf-m-box` | `.pf-c-tabs` | Applies box styling to the tab component. |
| `.pf-m-vertical` | `.pf-c-tabs` | Applies vertical styling to the tab component. |
| `.pf-m-fill` | `.pf-c-tabs` | Modifies the tabs to fill the available space. |
| `.pf-m-current` | `.pf-c-tabs__item` | Indicates that a tab item is currently selected. |
| `.pf-m-action` | `.pf-c-tabs__item` | Indicates that a tab item contains actions other than the tab link. |
| `.pf-m-inset-{none, sm, md, lg, xl, 2xl}{-on-[md, lg, xl, 2xl]}` | `.pf-c-tabs` | Modifies the tabs component padding/inset to visually match padding of other adjacent components. |
| `.pf-m-page-insets` | `.pf-c-tabs` | Modifies the tabs component padding/inset to visually match padding of page elements. |
| `.pf-m-color-scheme--light-300` | `.pf-c-tabs` | Modifies the tabs component tab background colors. |
| `.pf-m-expandable{-on-[breakpoint]}` | `.pf-c-tabs` | Modifies the tabs component to be expandable via a toggle at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). **Note:** works with vertical tabs only. |
| `.pf-m-non-expandable{-on-[breakpoint]}` | `.pf-c-tabs` | Modifies the tabs component to be non-expandable at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-expanded` | `.pf-c-tabs` | Modifies the expandable tabs component for the expanded state. |
| `.pf-m-disabled` | `a.pf-c-tabs__link` | Modifies a tabs link for disabled styles. |
| `.pf-m-aria-disabled` | `.pf-c-tabs__link` | Modifies a tabs link for disabled styles, but is still hoverable/focusable. |
