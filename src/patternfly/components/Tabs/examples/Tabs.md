---
id: Tabs
section: components
cssPrefix: pf-v6-c-tabs
---

# Examples

## Default

### Default tabs example
```hbs
{{#> tabs tabs--id="default-tabs"}}
  {{> __tabs-list __tabs-list--IsDisabled="true"}}
{{/tabs}}
```

### Default tabs usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-disabled` | `a.pf-v6-c-tabs__link` | Modifies a tabs link for disabled styles. |
| `.pf-m-aria-disabled` | `.pf-v6-c-tabs__link` | Modifies a tabs link for disabled styles, but is still hoverable/focusable. |

## Overflow

### Overflow beginning of list example
```hbs
{{#> tabs tabs--id="overflow-beginning-of-list" tabs--modifier="pf-m-scrollable"}}
  {{> __tabs-list __tabs-list--DisabledFirstScrollButton="true" __tabs-list--IsScrollable="true" __tabs-list--IsLong="true"}}
{{/tabs}}
```

### Overflow beginning of list usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-scrollable` | `.pf-v6-c-tabs` | Enables the directional scroll buttons. |
| `.pf-v6-c-tabs__scroll-button` | `<div>` | Initiates a tabs component scroll button container. |

### Horizontal overflow example
```hbs
{{#> tabs tabs--id="horizontal-overflow" __tabs-list--IsOverflow="true"}}
  {{> __tabs-list __tabs-list--NoScrollButtons="true"}}
{{/tabs}}
```

### Horizontal overflow expanded example
```hbs
{{#> tabs tabs--id="horizontal-overflow-expanded" __tabs-list--IsOverflow="true" __tabs-list--IsOverflowExpanded="true"}}
  {{> __tabs-list __tabs-list--NoScrollButtons="true"}}
{{/tabs}}
```

### Horizontal overflow selected example
```hbs
{{#> tabs tabs--id="horizontal-overflow-selected" __tabs-list--IsOverflow="true" __tabs-list--IsOverflowSelected="true"}}
  {{> __tabs-list __tabs-list--NoScrollButtons="true"}}
{{/tabs}}
```

## Vertical

### Vertical tabs example
```hbs
{{#> tabs tabs--id="vertical-tabs" tabs--IsVertical=true}}
  {{> __tabs-list __tabs-list--NoScrollButtons="true" __tabs-list--IsDisabled="true"}}
{{/tabs}}
```

### Vertical expandable example
```hbs
{{#> tabs tabs--id="vertical-expandable" tabs--IsExpandable="true" tabs--IsVertical=true}}
  {{> tabs-toggle}}
  {{> __tabs-list __tabs-list--NoScrollButtons="true"}}
{{/tabs}}
```

### Vertical expanded example
```hbs
{{#> tabs tabs--id="vertical-expanded" tabs--IsExpandable="true" tabs--IsExpanded="true" tabs--IsVertical=true}}
  {{> tabs-toggle}}
  {{> __tabs-list __tabs-list--NoScrollButtons="true"}}
{{/tabs}}
```

### Vertical expandable responsive example
```hbs
{{#> tabs tabs--id="vertical-expandable-responsive" tabs--IsExpandable="true" tabs--IsVertical=true tabs--modifier="pf-m-non-expandable-on-md pf-m-expandable-on-lg pf-m-non-expandable-on-xl"}}
  {{> tabs-toggle}}
  {{> __tabs-list __tabs-list--NoScrollButtons="true"}}
{{/tabs}}
```

### Vertical expandable example (deprecated)
```hbs isDeprecated
{{#> tabs tabs--id="vertical-expandable-legacy" tabs--IsExpandable="true" tabs--IsLegacy="true" tabs--IsVertical=true}}
  {{> tabs-toggle}}
  {{> __tabs-list __tabs-list--NoScrollButtons="true"}}
{{/tabs}}
```

### Vertical expanded example (deprecated)
```hbs isDeprecated
{{#> tabs tabs--id="vertical-expanded-legacy" tabs--IsExpandable="true" tabs--IsLegacy="true" tabs--IsExpanded="true" tabs--IsVertical=true}}
  {{> tabs-toggle}}
  {{> __tabs-list __tabs-list--NoScrollButtons="true"}}
{{/tabs}}
```

### Vertical expandable responsive example (deprecated)
```hbs isDeprecated
{{#> tabs tabs--id="vertical-expandable-responsive-legacy" tabs--IsExpandable="true" tabs--IsLegacy="true" tabs--IsVertical=true tabs--modifier="pf-m-non-expandable-on-md pf-m-expandable-on-lg pf-m-non-expandable-on-xl"}}
  {{> tabs-toggle}}
  {{> __tabs-list __tabs-list--NoScrollButtons="true"}}
{{/tabs}}
```

## Box

### Box tabs example
```hbs
{{#> tabs tabs--id="box-tabs" tabs--modifier="pf-m-box"}}
  {{> __tabs-list __tabs-list--IsDisabled="true"}}
{{/tabs}}
```

### Box overflow example
```hbs
{{#> tabs tabs--id="box-overflow" tabs--modifier="pf-m-box pf-m-scrollable" __tabs-list--DisabledFirstScrollButton="true"}}
  {{> __tabs-list __tabs-list--IsScrollable="true" __tabs-list--IsLong="true"}}
{{/tabs}}
```

### Box vertical example
```hbs
{{#> tabs tabs--id="box-vertical" tabs--IsVertical=true tabs--modifier="pf-m-box"}}
  {{> __tabs-list __tabs-list--NoScrollButtons="true" __tabs-list--IsDisabled="true"}}
{{/tabs}}
```

### Box tabs secondary variant example
```hbs
{{#> tabs tabs--modifier="pf-m-box pf-m-secondary" tabs--id="box-tabs-secondary"}}
  {{> __tabs-list __tabs-list--IsDisabled="true"}}
{{/tabs}}
<div className="tabs-example-block tabs-example-block--m-secondary"></div>
```

## Tab insets

### Default tab insets example
```hbs
{{#> tabs tabs--id="default-tab-insets" tabs--modifier="pf-m-inset-sm-on-md pf-m-inset-lg-on-lg pf-m-inset-2xl-on-xl"}}
  {{> __tabs-list}}
{{/tabs}}
```

### Box tab insets example
```hbs
{{#> tabs tabs--id="box-tab-insets" tabs--modifier="pf-m-box pf-m-inset-sm-on-md pf-m-inset-lg-on-lg pf-m-inset-2xl-on-xl"}}
  {{> __tabs-list}}
{{/tabs}}
```

### Page insets example
```hbs
{{#> tabs tabs--id="page-insets" tabs--modifier="pf-m-page-insets"}}
  {{> __tabs-list}}
{{/tabs}}
```

### Insets usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-inset-{none, sm, md, lg, xl, 2xl, 3xl}{-on-[sm, md, lg, xl, 2xl]}` | `.pf-v6-c-tabs` | Modifies the tabs component padding/inset to visually match padding of other adjacent components. |
| `.pf-m-page-insets` | `.pf-v6-c-tabs` | Modifies the tabs component padding/inset to visually match padding of page elements. |

## Icons

### Icons and text example
```hbs
{{#> tabs tabs--id="icons-and-text"}}
  {{> __tabs-list __tabs-list--HasIcons="true"}}
{{/tabs}}
```

## Sub tabs

### Tabs with sub tabs example
```hbs
{{#> tabs tabs--id="tabs-with-sub-tabs" tabs--modifier="pf-m-scrollable"}}
  {{> __tabs-list __tabs-list--IsScrollable="true"}}
{{/tabs}}

{{#> tabs tabs--id="tabs-with-sub-tabs-subtab" tabs--IsSubtab="true" tabs--modifier="pf-m-scrollable"}}
  {{> __tabs-list-secondary __tabs-list-secondary--IsScrollable="true"}}
{{/tabs}}
```

### Box tabs with sub tabs example
```hbs
{{#> tabs tabs--id="box-tabs-with-sub-tabs" tabs--modifier="pf-m-box pf-m-scrollable"}}
  {{> __tabs-list __tabs-list--IsScrollable="true"}}
{{/tabs}}

{{#> tabs tabs--id="box-tabs-with-sub-tabs-subtab" tabs--IsSubtab="true" tabs--modifier="pf-m-scrollable"}}
  {{> __tabs-list-secondary __tabs-list-secondary--IsScrollable="true"}}
{{/tabs}}
```

## Filled

### Filled tabs example
```hbs
{{#> tabs tabs--id="filled-tabs" tabs--modifier="pf-m-fill"}}
  {{> __tabs-list __tabs-list--IsShort="true"}}
{{/tabs}}
```

### Filled with icons example
```hbs
{{#> tabs tabs--id="filled-with-icons" tabs--modifier="pf-m-fill"}}
  {{> __tabs-list __tabs-list--HasIcons="true" __tabs-list--IsShort="true"}}
{{/tabs}}
```

### Filled box example
```hbs
{{#> tabs tabs--id="filled-box" tabs--modifier="pf-m-fill pf-m-box"}}
  {{> __tabs-list __tabs-list--IsShort="true"}}
{{/tabs}}
```

### Filled box with icons example
```hbs
{{#> tabs tabs--id="filled-box-with-icons" tabs--modifier="pf-m-fill pf-m-box"}}
  {{> __tabs-list __tabs-list--HasIcons="true" __tabs-list--IsShort="true"}}
{{/tabs}}
```

### Filled usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-fill`  | `.pf-v6-c-tabs` | Modifies the tabs to fill the available space. **Required** |

## Tabs as navigation

### Using the nav element example
```hbs
{{#> tabs tabs--id="using-the-nav-element" tabs--type="nav" tabs--modifier="pf-m-scrollable" tabs--attribute='aria-label="Tabs nav"' tabs-link--isLink="true"}}
  {{> __tabs-list __tabs-list--IsScrollable="true" __tabs-list--IsDisabled="true"}}
{{/tabs}}
```

### Sub tabs using the nav element example
```hbs
{{#> tabs tabs--id="sub-tabs-using-the-nav-element" tabs--type="nav" tabs--attribute='aria-label="Tabs primary nav"' tabs-link--isLink="true"}}
  {{> __tabs-list}}
{{/tabs}}

{{#> tabs tabs--id="sub-tabs-using-the-nav-element-subtab" tabs--type="nav" tabs--attribute='aria-label="Tabs subtab nav"' tabs-link--isLink="true" tabs--modifier="pf-m-subtab"}}
  {{> __tabs-list-secondary __tabs-list--IsDisabled="true"}}
{{/tabs}}
```

## Tab item actions

### Help button example
```hbs
{{> __tabs-all
      __tabs-all--id="help-button"
      __tabs-list--IsDisabled="true"
      __tabs-list--IsAction="true"
      __tabs-list--IsScrollable="true"
      __tabs-list--DisabledFirstScrollButton="true"
      __tabs-list--HasHelp="true" __tabs-list--IsHelpDisabled="true"}}
```

### Close button example
```hbs
{{> __tabs-all
      __tabs-all--id="close-button"
      __tabs-list--IsDisabled="true"
      __tabs-list--IsAction="true"
      __tabs-list--HasClose="true"
      __tabs-list--IsCloseDisabled="true"
      __tabs-list--IsScrollable="true"
      __tabs-list--DisabledFirstScrollButton="true"}}
```

### Help and close button example
```hbs
{{> __tabs-all
      __tabs-all--id="help-close-button"
      __tabs-list--IsDisabled="true"
      __tabs-list--IsAction="true"
      __tabs-list--IsScrollable="true"
      __tabs-list--DisabledFirstScrollButton="true"
      __tabs-list--HasHelp="true"
      __tabs-list--HasClose="true"
      __tabs-list--IsHelpDisabled="true"
      __tabs-list--IsCloseDisabled="true"
      __tabs-list--IsHelpCloseDisabled="true"}}
```

## Add tab button

### Add tab button example
```hbs
{{#> tabs tabs--id="default-tabs-add-tab-button" tabs--modifier="pf-m-scrollable"}}
  {{> __tabs-list __tabs-list--IsAction="true" __tabs-list--HasClose="true" __tabs-list--IsScrollable="true" __tabs-list--DisabledFirstScrollButton="true" __tabs-list--HasAddTab="true"}}
{{/tabs}}
{{#> tabs tabs--id="default-tabs-add-tab-button-subtab" tabs--modifier="pf-m-scrollable" tabs--IsSubtab="true"}}
  {{> __tabs-list __tabs-list--IsAction="true" __tabs-list--HasClose="true" __tabs-list--IsScrollable="true" __tabs-list--DisabledFirstScrollButton="true" __tabs-list--HasAddTab="true"}}
{{/tabs}}

<br><br>

{{#> tabs tabs--id="box-tabs-add-tab-button" tabs--modifier="pf-m-box pf-m-scrollable"}}
  {{> __tabs-list __tabs-list--IsAction="true" __tabs-list--HasClose="true" __tabs-list--IsScrollable="true" __tabs-list--DisabledFirstScrollButton="true" __tabs-list--HasAddTab="true"}}
{{/tabs}}

<br><br>

{{#> tabs tabs--id="box-tabs-add-tab-button-secondary " tabs--modifier="pf-m-box pf-m-secondary pf-m-scrollable"}}
  {{> __tabs-list __tabs-list--IsAction="true" __tabs-list--HasClose="true" __tabs-list--IsScrollable="true" __tabs-list--DisabledFirstScrollButton="true" __tabs-list--HasAddTab="true"}}
{{/tabs}}
```

## Animate current tab accent

### Animate default tabs accent
```hbs
{{#> tabs tabs--IsAnimateCurrent=true tabs--id="tabs-animate-current-default"}}
  {{> __tabs-list __tabs-list--IsDisabled="true"}}
{{/tabs}}
```

### Animate sub tabs accent
```hbs
{{#> tabs tabs--IsAnimateCurrent=true tabs--id="tabs-animate-current-subtabs" tabs--modifier="pf-m-scrollable"}}
  {{> __tabs-list __tabs-list--IsScrollable="true"}}
{{/tabs}}

{{#> tabs tabs--IsAnimateCurrent=true tabs--id="tabs-animate-current-subtabs-sub" tabs--IsSubtab="true" tabs--modifier="pf-m-scrollable"}}
  {{> __tabs-list-secondary __tabs-list-secondary--IsScrollable="true"}}
{{/tabs}}
```

### Animate filled tabs accent
```hbs
{{#> tabs tabs--IsAnimateCurrent=true tabs--id="tabs-animate-current-filled" tabs--modifier="pf-m-fill"}}
  {{> __tabs-list __tabs-list--IsShort="true"}}
{{/tabs}}
```

### Animate vertical tabs accent
```hbs
{{#> tabs tabs--IsAnimateCurrent=true tabs--id="tabs-animate-current-vertical" tabs--IsVertical=true __tabs-list--HasMultiLine=true}}
  {{> __tabs-list __tabs-list--NoScrollButtons="true" __tabs-list--IsDisabled="true"}}
{{/tabs}}
```

## Tab content

### Default tab content example
```hbs
{{#> tab-content tab-content--IsActive="true" tab-content--attribute='id="basic-tab1-panel"'}}
  Panel 1
{{/tab-content}}
{{#> tab-content tab-content--attribute='id="basic-tab2-panel"'}}
  Panel 2
{{/tab-content}}
{{#> tab-content tab-content--attribute='id="basic-tab3-panel"'}}
  Panel 3
{{/tab-content}}
{{#> tab-content tab-content--attribute='id="basic-tab4-panel"'}}
  Panel 4
{{/tab-content}}
```

### Padding
```hbs
{{#> tab-content tab-content-body--modifier="pf-m-padding" tab-content--IsActive="true" tab-content--attribute='id="tab1-panel-with-padding"'}}
  Panel 1
{{/tab-content}}
{{#> tab-content tab-content-body--modifier="pf-m-padding" tab-content--attribute='id="tab2-panel-with-padding"'}}
  Panel 2
{{/tab-content}}
{{#> tab-content tab-content-body--modifier="pf-m-padding" tab-content--attribute='id="tab3-panel-with-padding"'}}
  Panel 3
{{/tab-content}}
{{#> tab-content tab-content-body--modifier="pf-m-padding" tab-content--attribute='id="tab4-panel-with-padding"'}}
  Panel 4
{{/tab-content}}
```

### Secondary
```hbs
{{#> tab-content tab-content--modifier="pf-m-secondary" tab-content--IsActive="true" tab-content--attribute='id="secondary-tab1-panel"'}}
  Panel 1
{{/tab-content}}
{{#> tab-content tab-content--modifier="pf-m-secondary" tab-content--attribute='id="secondary-tab2-panel"'}}
  Panel 2
{{/tab-content}}
{{#> tab-content tab-content--modifier="pf-m-secondary" tab-content--attribute='id="secondary-tab3-panel"'}}
  Panel 3
{{/tab-content}}
{{#> tab-content tab-content--modifier="pf-m-secondary" tab-content--attribute='id="secondary-tab4-panel"'}}
  Panel 4
{{/tab-content}}
```

## Documentation

### Tabs overview
The tabs component should only be used to change content views within a page. The similar-looking but semantically different [horizontal nav component](/components/navigation/#horizontal) is available for general navigation use cases.

Whenever a list of tabs is unique on the current page, it can be used in a `<nav>` element. Cases where the same set of tabs are duplicated in multiple regions on a page (e.g. cards on a dashboard) are less likely to benefit from using the `<nav>` element.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-tabs` | `<nav>`, `<div>` | Initiates the tabs component. **Required** |
| `.pf-v6-c-tabs__list` | `<ul>` | Initiates a tabs component list. **Required** |
| `.pf-v6-c-tabs__item` | `<li>` | Initiates a tabs component item. **Required** |
| `.pf-v6-c-tabs__item-text` | `<span>` | Initiates a tabs component item icon. **Required** |
| `.pf-v6-c-tabs__item-icon` | `<span>` | Initiates a tabs component item text. **Required** |
| `.pf-v6-c-tabs__item-close` | `<span>` | Initiates a tabs component item close. |
| `.pf-v6-c-tabs__item-close-icon` | `<span>` | Initiates a tabs component item close icon. |
| `.pf-v6-c-tabs__link` | `<button>`, `<a>` | Initiates a tabs component link. **Required** |
| `.pf-v6-c-tabs__scroll-button` | `<div>` | Initiates a tabs component scroll button container. |
| `.pf-v6-c-tabs__add` | `<span>` | Initiates a tabs component add button. |
| `.pf-v6-c-tabs__toggle` | `<div>` | Initiates a tabs expandable toggle. |
| `.pf-v6-c-tabs__toggle-button` | `<button>` | Initiates a tabs expandable toggle button. |
| `.pf-v6-c-tabs__toggle-icon` | `<span>` | Initiates a tabs expandable toggle icon. |
| `.pf-v6-c-tabs__toggle-text` | `<span>` | Initiates a tabs expandable toggle text. |
| `.pf-m-subtab` | `.pf-v6-c-tabs` | Applies subtab styling to the tab component. |
| `.pf-m-no-border-bottom` | `.pf-v6-c-tabs` | Removes bottom border from a tab component. |
| `.pf-m-box` | `.pf-v6-c-tabs` | Applies box styling to the tab component. |
| `.pf-m-vertical` | `.pf-v6-c-tabs` | Applies vertical styling to the tab component. |
| `.pf-m-fill` | `.pf-v6-c-tabs` | Modifies the tabs to fill the available space. |
| `.pf-m-inset-{none, sm, md, lg, xl, 2xl}{-on-[md, lg, xl, 2xl]}` | `.pf-v6-c-tabs` | Modifies tabs horizontal padding at optional [breakpoint](/tokens/all-patternfly-tokens). |
| `.pf-m-page-insets` | `.pf-v6-c-tabs` | Modifies the tabs component padding/inset to visually match padding of page elements. |
| `.pf-m-secondary` | `.pf-v6-c-tabs.pf-m-box` | Modifies the tabs component tab background colors for the box variant. |
| `.pf-m-expandable{-on-[breakpoint]}` | `.pf-v6-c-tabs` | Modifies the tabs component to be expandable via a toggle at optional [breakpoint](/tokens/all-patternfly-tokens). **Note:** works with vertical tabs only. |
| `.pf-m-non-expandable{-on-[breakpoint]}` | `.pf-v6-c-tabs` | Modifies the tabs component to be non-expandable at optional [breakpoint](/tokens/all-patternfly-tokens). |
| `.pf-m-expanded` | `.pf-v6-c-tabs` | Modifies the expandable tabs component for the expanded state. |
| `.pf-m-animate-current` | `.pf-v6-c-tabs` | Modifies tabs to animate movement of the current tab accent line. |
| `.pf-m-initializing-accent` | `.pf-v6-c-tabs.pf-m-animate-current` | Modifies tabs styles while initializing the "current" tab's accent styles. |
| `--pf-v6-c-tabs--link-accent--start` | `.pf-v6-c-tabs` | Sets the value for the "start" inset of the current tab's accent. |
| `--pf-v6-c-tabs--link-accent--length` | `.pf-v6-c-tabs` | Sets the value for the length of the current tab's accent. |
| `.pf-m-current` | `.pf-v6-c-tabs__item` | Indicates that a tab item is currently selected. |
| `.pf-m-action` | `.pf-v6-c-tabs__item` | Indicates that a tab item contains actions other than the tab link. |
| `.pf-m-overflow` | `.pf-v6-c-tabs__item` | Applies overflow menu styling to a tab item. |
| `.pf-m-expanded` | `.pf-v6-c-tabs__item` | Applies expanded styling to the overflow menu tab item. |
| `.pf-m-disabled` | `a.pf-v6-c-tabs__link` | Modifies a tabs link for disabled styles. |
| `.pf-m-aria-disabled` | `.pf-v6-c-tabs__link` | Modifies a tabs link for disabled styles, but is still hoverable/focusable. |

### Tab content accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="tabpanel"` | `.pf-v6-c-tab-content` | Indicates that the element serves as a container for a set of tabs. **Required** |
| `aria-labelledby=[ID of tab element]` | `.pf-v6-c-tab-content` | Provides an accessible name for the tab panel by referring to the tab element that controls it. **Required**
| `id=[ID of tab panel]` | `.pf-v6-c-tab-content` | Provides an ID for the tab panel, and should be used as the value of `aria-controls` on the tab element that controls the panel.  **Required**
| `hidden` | `.pf-v6-c-tab-content` | Indicates that the tab panel is not visible. **Required on all but the active tab panel**
| `tabindex="0"` | `.pf-v6-c-tab-content` | Puts the tab panel in the page tab sequence and facilitates movement to panel content for assistive technology users. **Required**

### Tab content usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-tab-content` | `<section>` |  Initiates the tab content component. **Required** |
| `.pf-v6-c-tab-content__body` | `<div>` |  Initiates the tab content body component. |
| `.pf-m-padding` | `.pf-v6-c-tab-content__body` | Modifies the tab content body component padding. |
| `.pf-m-secondary` | `.pf-v6-c-tab-content` |  Modifies the tab content component for secondary styles. |
