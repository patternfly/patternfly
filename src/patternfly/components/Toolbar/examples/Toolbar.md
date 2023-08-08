---
id: Toolbar
section: components
cssPrefix: pf-v5-c-toolbar
---

import './Toolbar.css'

## Introduction

Toolbar relies on groups (`.pf-v5-c-toolbar__group`) and items (`.pf-v5-c-toolbar__item`), with default spacer values. Groups and items can be siblings and/or items can be nested within groups. Modifier selectors adjust spacing based on the type of group or item. Each modifier applies a unique CSS variable, therefore, the base spacer value for all elements can be customized and item/groups spacers can be themed individually. The default spacer value for items and groups is set to `--pf-v5-c-toolbar--spacer--base`, whose value is `--pf-v5-global--spacer--md` or 16px.

### Default spacing for items and groups:

| Class | CSS Variable | Computed Value |
| -- | -- | -- |
| `.pf-v5-c-toolbar__item` | `--pf-v5-c-toolbar__item--spacer` | `16px` |
| `.pf-v5-c-toolbar__group` | `--pf-v5-c-toolbar__group--spacer` | `16px` |

### Toolbar item types

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-bulk-select` | `.pf-v5-c-toolbar__item` | Initiates bulk select spacing. Spacer value is set to `var(--pf-v5-c-toolbar--m-bulk-select--spacer)`. |
| `.pf-m-overflow-menu` | `.pf-v5-c-toolbar__item` | Initiates overflow menu spacing. Spacer value is set to `var(--pf-v5-c-toolbar--m-overflow-menu--spacer)`. |
| `.pf-m-pagination` | `.pf-v5-c-toolbar__item` | Initiates pagination spacing and margin. Spacer value is set to `var(--pf-v5-c-toolbar--m-pagination--spacer)`. |
| `.pf-m-search-filter` | `.pf-v5-c-toolbar__item` | Initiates search filter spacing. Spacer value is set to `var(--pf-v5-c-toolbar--m-search-filter--spacer)`. |

### Modifiers

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-hidden{-on-[breakpoint]}` | `.pf-v5-c-toolbar > *` | Modifies toolbar element to be hidden, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-visible{-on-[breakpoint]}` | `.pf-v5-c-toolbar > *` | Modifies toolbar element to be shown, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-align-right{-on-[breakpoint]}` | `.pf-v5-c-toolbar > *` | Modifies toolbar element to align right, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-align-left{-on-[breakpoint]}` | `.pf-v5-c-toolbar > *` | Modifies toolbar element to align left, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-align-items-start` | `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar element to vertically align children to flex-start. |
| `.pf-m-align-items-center` | `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar element to vertically align children to center. |
| `.pf-m-align-items-baseline` | `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar group to vertically align children to baseline. |
| `.pf-m-align-self-start` | `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar element to vertically align self to flex-start. |
| `.pf-m-align-self-center` | `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar element to vertically align self to center. |
| `.pf-m-align-self-baseline` | `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar element to vertically align self to baseline. |

### Special notes

Several components in the following examples do not include functional and/or accessibility specifications (for example `.pf-v5-c-select`, `.pf-v5-c-options-menu`). Rather, `.pf-v5-c-toolbar` focuses on functionality and accessibility specifications that apply to it only.

**Available [breakpoints](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes) are: `-on-sm`, `-on-md`, `-on-lg`, `-on-xl`, and `-on-2xl`.**

## Examples

### Simple
```hbs
{{#> toolbar toolbar--id="toolbar-simple-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
      {{> divider divider--modifier="pf-m-vertical"}}
      {{#> toolbar-group}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
      {{/toolbar-group}}
      {{> divider divider--modifier="pf-m-vertical"}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
    {{/toolbar-content-section}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Item types

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-toolbar__item` | `<div>` | Initiates the toolbar component item. **Required** |
| `.pf-v5-c-toolbar__group` | `<div>` | Initiates the toolbar component group. |

### Spacers

In some instances, it may be necessary to adjust spacing explicitly where items are hidden/shown. For example, if a `.pf-m-toggle-group` is adjacent to an element being hidden/shown, the spacing may appear to be inconsistent. If possible, rely on modifier values. Available spacer modifiers are `.pf-m-spacer-{none, sm, md, lg}{-on-md, -on-lg, -on-xl}` and `.pf-m-space-items-{none, sm, md, lg}{-on-md, -on-lg, -on-xl}`. These modifiers will overwrite existing modifiers provided by `.pf-v5-c-toolbar`.

### Adjusted spacers
```hbs
{{#> toolbar toolbar--id="toolbar-spacer-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-item toolbar-item--modifier="pf-m-spacer-none"}}
        Item
      {{/toolbar-item}}
      {{#> toolbar-item toolbar-item--modifier="pf-m-spacer-sm"}}
        Item
      {{/toolbar-item}}
      {{#> toolbar-item toolbar-item--modifier="pf-m-spacer-md"}}
        Item
      {{/toolbar-item}}
      {{#> toolbar-item toolbar-item--modifier="pf-m-spacer-lg"}}
        Item
      {{/toolbar-item}}
      {{> divider divider--modifier="pf-m-vertical"}}
      {{#> toolbar-item toolbar-item--modifier="pf-m-spacer-none pf-m-spacer-sm-on-md pf-m-spacer-md-on-lg pf-m-spacer-lg-on-xl"}}
        Item
      {{/toolbar-item}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
    {{/toolbar-content-section}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Adjusted group spacers
```hbs
{{#> toolbar toolbar--id="toolbar-group-spacer-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-space-items-lg"}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
      {{/toolbar-group}}
      {{> divider divider--modifier="pf-m-vertical"}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-space-items-none pf-m-space-items-sm-on-md pf-m-space-items-md-on-lg pf-m-space-items-lg-on-xl"}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
      {{/toolbar-group}}
    {{/toolbar-content-section}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Insets
```hbs
{{#> toolbar toolbar--modifier="pf-m-inset-none pf-m-inset-md-on-md pf-m-inset-2xl-on-lg" toolbar--id="toolbar-inset-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
      {{/toolbar-group}}
      {{> divider divider--modifier="pf-m-vertical"}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
    {{/toolbar-content-section}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Page insets
```hbs
{{#> toolbar toolbar--modifier="pf-m-page-insets" toolbar--id="toolbar-page-insets-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
      {{/toolbar-group}}
      {{> divider divider--modifier="pf-m-vertical"}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
    {{/toolbar-content-section}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Toolbar spacers and insets

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-page-insets` | `.pf-v5-c-toolbar` | Modifies toolbar insets to match page section, table, page header or any other component whose inset shifts from `--pf-v5-global--spacer--md` to `--pf-v5-global--spacer--lg` at the `xl` breakpoint. |
| `.pf-m-spacer-{none, sm, md, lg}{-on-[breakpoint]}` | `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar group or item spacing at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-space-items-{none, sm, md, lg}{-on-[breakpoint]}` | `.pf-v5-c-toolbar__group` | Modifies toolbar group child spacing at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-inset-{none, sm, md, lg, xl, 2xl}{-on-[breakpoint]}` | `.pf-v5-c-toolbar` | Modifies toolbar horizontal padding at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |

### Width control
```hbs
{{#> toolbar toolbar--id="toolbar-width-control"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group}}
        {{#> toolbar-item toolbar-item--attribute='style="--pf-v5-c-toolbar__item--Width: 80px; --pf-v5-c-toolbar__item--Width-on-xl: 10rem"'}}
          Item
        {{/toolbar-item}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
      {{/toolbar-group}}
      {{> divider divider--modifier="pf-m-vertical"}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
    {{/toolbar-content-section}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Width control usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `--pf-v5-c-toolbar__item--Width{-on-[breakpoint]}: {width}` | `.pf-v5-c-toolbar__item` |  Modifies the width value of a toolbar item at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `--pf-v5-c-toolbar__item--MinWidth{-on-[breakpoint]}: {width}` | `.pf-v5-c-toolbar__item` |  Modifies the min width value of a toolbar item at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |

### Group types
```hbs
{{#> toolbar toolbar--id="toolbar-group-types-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
        {{#> toolbar-item}}
          {{> menu-toggle menu-toggle--id=(concat toolbar--id '-toggle-1') menu-toggle--text='Filter 1'}}
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{> menu-toggle menu-toggle--id=(concat toolbar--id '-toggle-2') menu-toggle--text='Filter 2'}}
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{> menu-toggle menu-toggle--id=(concat toolbar--id '-toggle-3') menu-toggle--text='Filter 3'}}
        {{/toolbar-item}}
      {{/toolbar-group}}
      {{> toolbar-icon-button-group-example}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-button-group"}}
        {{#> toolbar-item}}
          {{#> button button--modifier="pf-m-primary"}}
            Action
          {{/button}}
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{#> button button--modifier="pf-m-secondary"}}
            Secondary
          {{/button}}
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{#> button button--modifier="pf-m-tertiary"}}
            Tertiary
          {{/button}}
        {{/toolbar-item}}
      {{/toolbar-group}}
    {{/toolbar-content-section}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Toolbar group types

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-filter-group` | `.pf-v5-c-toolbar__group` | Modifies toolbar group spacing. Spacer value is set to `var(--pf-v5-c-toolbar__group--m-filter-group--spacer)`. Child spacer value is set to `var(--pf-v5-c-toolbar__group--m-filter-group--space-items)`. |
| `.pf-m-icon-button-group` | `.pf-v5-c-toolbar__group` | Modifies toolbar group spacing. Spacer value is set to `var(--pf-v5-c-toolbar__group--m-toggle-group--spacer)`. Child spacer value is set to `var(--pf-v5-c-toolbar__group--m-icon-button-group--space-items)`. |
| `.pf-m-button-group` | `.pf-v5-c-toolbar__group` | Modifies toolbar group spacing. Spacer value is set to `var(--pf-v5-c-toolbar__group--m-toggle-group--spacer)`. Child spacer value is set to `var(--pf-v5-c-toolbar__group--m-button-group--space-items)`. |

### Toggle group
```hbs
{{#> toolbar toolbar--id="toolbar-toggle-group-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show-on-lg"}}
        {{> toolbar-toggle}}
        {{> toolbar-item-search-filter}}
        {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
          {{#> toolbar-item}}
            {{> menu-toggle
                menu-toggle--id=(concat toolbar--id '-menu-toggle-checkbox-status')
                menu-toggle--text='Status'
              }}
          {{/toolbar-item}}
          {{#> toolbar-item}}
            {{> menu-toggle
                menu-toggle--id=(concat toolbar--id '-menu-toggle-checkbox-risk')
                menu-toggle--text='Risk'
              }}
          {{/toolbar-item}}
        {{/toolbar-group}}
      {{/toolbar-group}}
    {{/toolbar-content-section}}
    {{> toolbar-expandable-content}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Toggle group on mobile (filters collapsed, expandable content expanded)
```hbs
{{#> toolbar toolbar--id="toolbar-toggle-group-collapsed-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group"}}
        {{> toolbar-toggle toolbar-toggle--IsExpanded=true}}
      {{/toolbar-group}}
    {{/toolbar-content-section}}
    {{#> toolbar-expandable-content toolbar-expandable-content--IsExpanded=true}}
      {{> toolbar-item-search-filter button--id="expandable-content"}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
        {{#> toolbar-item}}
          {{> menu-toggle
              menu-toggle--id=(concat toolbar--id '-menu-toggle-checkbox-status')
              menu-toggle--text='Status'
            }}
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{> menu-toggle
              menu-toggle--id=(concat toolbar--id '-menu-toggle-checkbox-risk')
              menu-toggle--text='Risk'
            }}
        {{/toolbar-item}}
      {{/toolbar-group}}
    {{/toolbar-expandable-content}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Toggle group modifier

The `.pf-m-toggle-group` controls when, and at which breakpoint, filters will be hidden/shown. By default, all filters are hidden until the specified breakpoint is reached. `.pf-m-show-on-{md, lg, xl}` controls when filters are shown and when the toggle button is hidden.

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-v5-c-toolbar__item`, `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__toggle`, `.pf-v5-c-toolbar__expandable-content` |  Indicates that the toggle group element is hidden. **Required** |
| `aria-expanded=true` | `.pf-v5-c-toolbar__toggle > .pf-v5-c-button` |  Indicates that the expandable content is visible. **Required** |
| `aria-expanded="false"` | `.pf-v5-c-toolbar__toggle > .pf-v5-c-button` |  Indicates the the expandable content is hidden. **Required** |
| `aria-controls="[id of expandable content]"` | `.pf-v5-c-toolbar__toggle > .pf-v5-c-button` |  Identifies the expanded content controlled by the toggle button. **Required** |
| `id="[expandable-content_id]"` | `.pf-v5-c-toolbar__expandable-content` | Provides a reference for toggle button description. **Required** |

### Responsive attributes

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-haspopup=true` | `.pf-v5-c-toolbar__toggle > .pf-v5-c-button` | When expandable content appears above content (mobile viewport), `aria-haspopup=true` should be applied to indicate that focus should be trapped. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-show{-on-[breakpoint]}` | `.pf-v5-c-toolbar__group.pf-m-toggle-group`, `.pf-v5-c-toolbar__expandable-content` | Modifies toolbar element visibility at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). This selector must be applied consistently to toggle group and expandable content. |
| `.pf-m-chip-container` | `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__group` | Modifies the toolbar element for applied filters layout. |
| `.pf-m-expanded` | `.pf-v5-c-toolbar__expandable-content`, `.pf-v5-c-toolbar__toggle` | Modifies the component for the expanded state. |

### Selected

### Selected filters on mobile (filters collapsed, selected filters summary visible)
```hbs
{{#> toolbar toolbar--id="toolbar-selected-filters-toggle-group-collapsed-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{> toolbar-item-bulk-select}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group"}}
        {{> toolbar-toggle}}
        {{> toolbar-item-search-filter button--id="content"}}
        {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
          {{#> toolbar-item}}
            {{> menu-toggle
                menu-toggle--id=(concat toolbar--id '-menu-toggle-checkbox-status')
                menu-toggle--text='Status'
              }}
          {{/toolbar-item}}
          {{#> toolbar-item}}
            {{> menu-toggle
                menu-toggle--id=(concat toolbar--id '-menu-toggle-checkbox-risk')
                menu-toggle--text='Risk'
              }}
          {{/toolbar-item}}
        {{/toolbar-group}}
      {{/toolbar-group}}
      {{> toolbar-icon-button-group-example toolbar-icon-button-group-example--IsOverflowMenu=true toolbar-icon-button-group-example--control=true}}
    {{/toolbar-content-section}}
    {{#> toolbar-expandable-content}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-chip-container"}}
        {{> toolbar-item-chip-group chip-group--label="Status" chip-group--id=(concat toolbar--id '-chip-group-status')}}
        {{> toolbar-item-chip-group chip-group--label="Risk" chip-group--id=(concat toolbar--id '-chip-group-risk')}}
      {{/toolbar-group}}
    {{/toolbar-expandable-content}}
  {{/toolbar-content}}
  {{#> toolbar-content}}
    {{#> toolbar-item}}
      6 filters applied
    {{/toolbar-item}}
    {{> toolbar-item-clear}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Selected filters on mobile (filters collapsed, expandable content expanded)
```hbs
{{#> toolbar toolbar--id="toolbar-selected-filters-toggle-group-expanded-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{> toolbar-item-bulk-select}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group"}}
        {{> toolbar-toggle toolbar-toggle--IsExpanded=true}}
      {{/toolbar-group}}
      {{> toolbar-icon-button-group-example toolbar-icon-button-group-example--IsOverflowMenu=true toolbar-icon-button-group-example--control=true}}
    {{/toolbar-content-section}}
    {{#> toolbar-expandable-content toolbar-expandable-content--IsExpanded=true}}
      {{> toolbar-item-search-filter button--id="expanded-content"}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
        {{#> toolbar-item}}
          {{> menu-toggle
              menu-toggle--id=(concat toolbar--id '-menu-toggle-checkbox-status')
              menu-toggle--text='Status'
            }}
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{> menu-toggle
              menu-toggle--id=(concat toolbar--id '-menu-toggle-checkbox-risk')
              menu-toggle--text='Risk'
            }}
        {{/toolbar-item}}
      {{/toolbar-group}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-chip-container"}}
        {{#> toolbar-group toolbar-group--modifier=""}}
          {{> toolbar-item-chip-group chip-group--label="Status" chip-group--id=(concat toolbar--id '-chip-group-status')}}
          {{> toolbar-item-chip-group chip-group--label="Risk" chip-group--id=(concat toolbar--id '-chip-group-risk')}}
        {{/toolbar-group}}
        {{> toolbar-item-clear}}
      {{/toolbar-group}}
    {{/toolbar-expandable-content}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Selected filters on desktop (not responsive)
```hbs
{{#> toolbar toolbar--id="toolbar-selected-filters-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{> toolbar-item-bulk-select}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show"}}
        {{> toolbar-toggle}}
        {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
          {{#> toolbar-item}}
            {{> menu-toggle
                menu-toggle--id=(concat toolbar--id '-menu-toggle-checkbox-status')
                menu-toggle--text='Status'
              }}
          {{/toolbar-item}}
          {{#> toolbar-item}}
            {{> menu-toggle
                menu-toggle--id=(concat toolbar--id '-menu-toggle-checkbox-risk')
                menu-toggle--text='Risk'
              }}
          {{/toolbar-item}}
        {{/toolbar-group}}
      {{/toolbar-group}}
      {{> toolbar-icon-button-group-example toolbar-icon-button-group-example--IsOverflowMenu=true}}
      {{> toolbar-overflow-menu-example toolbar-overflow-menu-example--content=true toolbar-overflow-menu-example--control=true}}
    {{/toolbar-content-section}}
  {{/toolbar-content}}
  {{#> toolbar-content toolbar-content--modifier="pf-m-chip-container"}}
    {{#> toolbar-group toolbar-group--modifier=reset}}
      {{> toolbar-item-chip-group chip-group--label="Status" chip-group--id=(concat toolbar--id '-chip-group-status')}}
      {{> toolbar-item-chip-group chip-group--label="Risk" chip-group--id=(concat toolbar--id '-chip-group-risk')}}
    {{/toolbar-group}}
    {{> toolbar-item-clear}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Stacked

### Stacked on desktop
```hbs
{{#> toolbar toolbar--id="toolbar-stacked-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show-on-2xl"}}
        {{> toolbar-toggle}}
        {{#> toolbar-group toolbar-group--modifier=reset}}
          {{#> toolbar-item toolbar-item--modifier="pf-m-label" toolbar-item--attribute='aria-hidden=true' toolbar-item--id=(concat toolbar--id '-menu-toggle-resource-label')}}
            Resource
          {{/toolbar-item}}

          {{#> toolbar-item}}
            {{> menu-toggle
                menu-toggle--id=(concat toolbar--id '-menu-toggle-resource')
                menu-toggle--text='Pod'
              }}
          {{/toolbar-item}}
        {{/toolbar-group}}
        {{#> toolbar-group toolbar-group--modifier=reset}}
          {{#> toolbar-item toolbar-item--modifier="pf-m-label" toolbar-item--attribute='aria-hidden=true' toolbar-item--id=(concat toolbar--id '-menu-toggle-status-label')}}
            Status
          {{/toolbar-item}}
          {{#> toolbar-item}}
            {{> menu-toggle
                menu-toggle--id=(concat toolbar--id '-menu-toggle-status')
                menu-toggle--text='Running'
              }}
          {{/toolbar-item}}
        {{/toolbar-group}}
        {{#> toolbar-group toolbar-group--modifier=reset}}
          {{#> toolbar-item toolbar-item--modifier="pf-m-label" toolbar-item--attribute='aria-hidden=true' toolbar-item--id=(concat toolbar--id '-menu-toggle-type-label')}}
            Type
          {{/toolbar-item}}
          {{#> toolbar-item}}
            {{> menu-toggle
                menu-toggle--id=(concat toolbar--id '-menu-toggle-type')
                menu-toggle--text='Any'
              }}
          {{/toolbar-item}}
        {{/toolbar-group}}
      {{/toolbar-group}}
      {{> toolbar-icon-button-group-example toolbar-icon-button-group-example--IsOverflowMenu=true}}
      {{> toolbar-overflow-menu-example toolbar-overflow-menu-example--content=true toolbar-overflow-menu-example--control=true}}
    {{/toolbar-content-section}}
    {{> toolbar-expandable-content}}
  {{/toolbar-content}}
  {{#> divider}}{{/divider}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{> toolbar-item-bulk-select}}
      {{> toolbar-item-pagination}}
    {{/toolbar-content-section}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Stacked on mobile (filters collapsed, expandable content expanded)
```hbs
{{#> toolbar toolbar--id="toolbar-stacked-collapsed-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group"}}
        {{> toolbar-toggle toolbar-toggle--IsExpanded=true}}
      {{/toolbar-group}}
      {{> toolbar-icon-button-group-example toolbar-icon-button-group-example--IsOverflowMenu=true toolbar-icon-button-group-example--control=true}}
    {{/toolbar-content-section}}
    {{#> toolbar-expandable-content toolbar-expandable-content--IsExpanded=true}}
      {{#> toolbar-group}}
        {{#> toolbar-item toolbar-item--modifier="pf-m-label" toolbar-item--attribute='aria-hidden=true' toolbar-item--id=(concat toolbar--id '-menu-toggle-resource-label')}}
          Resource
        {{/toolbar-item}}

        {{#> toolbar-item}}
          {{> menu-toggle
              menu-toggle--id=(concat toolbar--id '-menu-toggle-resource')
              menu-toggle--text='Pod'
            }}
        {{/toolbar-item}}
      {{/toolbar-group}}
      {{#> toolbar-group newcontext}}
        {{#> toolbar-item toolbar-item--modifier="pf-m-label" toolbar-item--attribute='aria-hidden=true' toolbar-item--id=(concat toolbar--id '-menu-toggle-status-label')}}
          Status
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{> menu-toggle
              menu-toggle--id=(concat toolbar--id '-menu-toggle-status')
              menu-toggle--text='Running'
            }}
        {{/toolbar-item}}
      {{/toolbar-group}}
      {{#> toolbar-group newcontext}}
        {{#> toolbar-item toolbar-item--modifier="pf-m-label" toolbar-item--attribute='aria-hidden=true' toolbar-item--id=(concat toolbar--id '-menu-toggle-type-label')}}
          Type
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{> menu-toggle
              menu-toggle--id=(concat toolbar--id '-menu-toggle-type')
              menu-toggle--text='Any'
            }}
        {{/toolbar-item}}
      {{/toolbar-group}}
    {{/toolbar-expandable-content}}
  {{/toolbar-content}}
  {{#> divider}}{{/divider}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{> toolbar-item-bulk-select}}
      {{> toolbar-item-pagination}}
    {{/toolbar-content-section}}
  {{/toolbar-content}}
{{/toolbar}}
```

## Documentation

### Overview

As the toolbar component is a hybrid layout and component, some of its elements are presentational, while some require accessibility support.

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-toolbar` | `<div>` | Initiates the toolbar component. **Required** |
| `.pf-v5-c-toolbar__item` | `<div>` | Initiates a toolbar item. **Required** |
| `.pf-v5-c-toolbar__group` | `<div>` | Initiates a toolbar group. |
| `.pf-v5-c-toolbar__content` | `<div>` | Initiates a toolbar content container. **Required** |
| `.pf-v5-c-toolbar__content-section` | `<div>` | Initiates a toolbar content section. This is used to separate static elements from dynamic elements within a content container. There should be no more than one `.pf-v5-c-toolbar__content-section` per `.pf-v5-c-toolbar__content` **Required** |
| `.pf-v5-c-toolbar__expandable-content` | `<div>` | Initiates a toolbar expandable content section. |
| `.pf-m-sticky` | `.pf-v5-c-toolbar` | Modifies toolbar component to be sticky to the top of its container. |
| `.pf-m-full-height` | `.pf-v5-c-toolbar`, `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__group` | Modifies toolbar component to full height of its container and removes vertical padding. |
| `.pf-m-static` | `.pf-v5-c-toolbar` | Modifies expandable content section to position itself to the nearest absolutely positioned parent outside of the toolbar component. This is used primarily for masthead toolbar. |
| `.pf-m-expanded` | `.pf-v5-c-toolbar__expandable-content` | Modifies expandable content section for the expanded state. |
| `.pf-m-label` | `.pf-v5-c-toolbar__item` | Modifies label vertical positioning. |
| `.pf-m-form-element` | `.pf-v5-c-toolbar__item` | Modifies form element vertical positioning. |
| `.pf-m-bulk-select` | `.pf-v5-c-toolbar__item` | Modifies bulk select spacing. |
| `.pf-m-overflow-menu` | `.pf-v5-c-toolbar__item` | Modifies overflow menu spacing. |
| `.pf-m-pagination` | `.pf-v5-c-toolbar__item` | Modifies pagination spacing and margin. |
| `.pf-m-search-filter` | `.pf-v5-c-toolbar__item` | Modifies search filter spacing. |
| `.pf-m-chip-group` | `.pf-v5-c-toolbar__item` | Modifies chip group spacing. |
| `.pf-m-expand-all` | `.pf-v5-c-toolbar__item` | Modifies an item for an expand all button. |
| `.pf-m-expanded` | `.pf-v5-c-toolbar__item.pf-m-expand-all` | Modifies an expand all button for the expanded state. |
| `.pf-m-button-group` | `.pf-v5-c-toolbar__group` | Modifies button group spacing. |
| `.pf-m-icon-button-group` | `.pf-v5-c-toolbar__group` | Modifies icon button group spacing. |
| `.pf-m-filter-group` | `.pf-v5-c-toolbar__group` | Modifies filter group spacing. |
| `.pf-m-hidden{-on-[breakpoint]}` | `.pf-v5-c-toolbar__content`, `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__item`, `.pf-v5-c-toolbar__group` | Modifies toolbar element to be hidden, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-visible{-on-[breakpoint]}` | `.pf-v5-c-toolbar__content`, `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__item`, `.pf-v5-c-toolbar__group` | Modifies toolbar element to be shown, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-align-right{-on-[breakpoint]}` | `.pf-v5-c-toolbar > *` | Modifies toolbar element to align right, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-align-left{-on-[breakpoint]}` | `.pf-v5-c-toolbar > *` | Modifies toolbar element to align left, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-align-items-center` | `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__group` | Modifies toolbar element to vertically align children to center. |
| `.pf-m-align-items-baseline` | `.pf-v5-c-toolbar__group` | Modifies toolbar group to vertically align children to baseline. |
| `.pf-m-align-self-center` | `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar element to vertically align self to center. |
| `.pf-m-align-self-baseline` | `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar element to vertically align self to baseline. |
| `.pf-m-chip-container` | `.pf-v5-c-toolbar__content`, `.pf-v5-c-toolbar__group` | Modifies the toolbar element for applied filters layout. |
| `.pf-m-overflow-container` | `.pf-v5-c-toolbar__item`, `.pf-v5-c-toolbar__group` | Modifies the toolbar element to hide overflow and respond to available space. Used for horizontal navigation. |
| `.pf-m-expanded` | `.pf-v5-c-toolbar__expandable-content`, `.pf-v5-c-toolbar__toggle` | Modifies the component for the expanded state. |
| `.pf-m-wrap` | `.pf-v5-c-toolbar`, `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__group` | Modifies the toolbar element to wrap. |
| `.pf-m-nowrap` | `.pf-v5-c-toolbar`, `.pf-v5-c-toolbar__group` | Modifies the toolbar element to nowrap. |

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-v5-c-toolbar__item`, `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__toggle`, `.pf-v5-c-toolbar__expandable-content` |  Indicates that the toolbar element is hidden. **Required** |
| `aria-expanded=true` | `.pf-v5-c-toolbar__toggle > .pf-v5-c-button` |  Indicates that the expandable content is visible. **Required** |
| `aria-expanded="false"` | `.pf-v5-c-toolbar__toggle > .pf-v5-c-button` |  Indicates the the expandable content is hidden. **Required** |
| `aria-controls="[id of expandable content]"` | `.pf-v5-c-toolbar__toggle > .pf-v5-c-button` |  Identifies the expanded content controlled by the toggle button. **Required** |
| `id="[expandable-content_id]"` | `.pf-v5-c-toolbar__expandable-content` | Provides a reference for toggle button description. **Required** |
| `aria-label="Expand all"` | `.pf-v5-c-toolbar__item.pf-m-expand-all` | Provides an accessible label for the expand all item button. **Required** |
| `aria-label="Collapse all"` | `.pf-v5-c-toolbar__item.pf-m-expand-all.pf-m-expanded` | Provides an accessible label for the expand all item button. **Required** |

### Toggle group usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-toggle-group` | `.pf-v5-c-toolbar__group` | Modifies toolbar group to control when, and at which breakpoint, filters will be hidden/shown. By default, all filters are hidden until the specified breakpoint is reached. |
| `.pf-m-show{-on-[breakpoint]}` | `.pf-v5-c-toolbar__group.pf-m-toggle-group`, `.pf-v5-c-toolbar__expandable-content` | Modifies toolbar element to hidden at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). This selector must be applied consistently to toggle group and expandable content. |

### Spacer system

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-spacer-{none, sm, md, lg, xl}{-on-[breakpoint]}` | `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar group or item spacing at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-space-items-{none, sm, md, lg, xl}{-on-[breakpoint]}` | `.pf-v5-c-toolbar__group` | Modifies toolbar group child spacing at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
