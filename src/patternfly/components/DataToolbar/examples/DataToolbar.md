---
title: Data Toolbar
section: experimental
cssPrefix: pf-c-data-toolbar
---

import './DataToolbar.css'

## Introduction
Data toolbar relies on groups (`.pf-c-data-toolbar__group`) and items (`.pf-c-data-toolbar__item`), with default spacer values. Groups and items can be siblings and/or items can be nested within groups. Modifier selectors adjust spacing based on the type of group or item. Each modifier applies a unique CSS variable, therefore, the base spacer value for all elements can be customized and item/groups spacers can be themed individually. The default spacer value for items and groups is set to `--pf-c-data-toolbar--spacer--base`, whose value is `--pf-global--spacer--md` or 16px.

### Default spacing for items and groups
| Class | CSS Variable | Computed Value |
| -- | -- | -- |
| `.pf-c-data-toolbar__item` | `--pf-c-data-toolbar__item--spacer` | `16px` |
| `.pf-c-data-toolbar__group` | `--pf-c-data-toolbar__group--spacer` | `16px` |

### Data toolbar item types
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-bulk-select` | `.pf-c-data-toolbar__item` | Initiates bulk select spacing. Spacer value is set to `var(--pf-c-data-toolbar--m-bulk-select--spacer)`. |
| `.pf-m-overflow-menu` | `.pf-c-data-toolbar__item` | Initiates overflow menu spacing. Spacer value is set to `var(--pf-c-data-toolbar--m-overflow-menu--spacer)`. |
| `.pf-m-pagination` | `.pf-c-data-toolbar__item` | Initiates pagination spacing and margin. Spacer value is set to `var(--pf-c-data-toolbar--m-pagination--spacer)`. |
| `.pf-m-search-filter` | `.pf-c-data-toolbar__item` | Initiates search filter spacing. Spacer value is set to `var(--pf-c-data-toolbar--m-search-filter--spacer)`. |

### Modifiers
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-hidden{-on-[breakpoint]}` | `.pf-c-data-toolbar > *` | Modifies toolbar element to be hidden, at optional breakpoint. |
| `.pf-m-visible{-on-[breakpoint]}` | `.pf-c-data-toolbar > *` | Modifies toolbar element to be shown, at optional breakpoint. |
| `.pf-m-align-right{-on-[breakpoint]}` | `.pf-c-data-toolbar > *` | Modifies toolbar element to align right, at optional breakpoint. |
| `.pf-m-align-left{-on-[breakpoint]}` | `.pf-c-data-toolbar > *` | Modifies toolbar element to align left, at optional breakpoint. |

### Special notes
Several components in the following examples do not include functional and/or accessibility specifications (for example `pf-c-select`, `pf-c-options-menu`). Rather, `pf-c-data-toolbar` focuses on functionality and accessibility specifications that apply to it only.

**Available breakpoints are: `-on-md, -on-lg, -on-xl, -on-2xl`.**

## Examples
```hbs title=Simple
{{#> data-toolbar}}
  {{#> data-toolbar-content}}
    {{#> data-toolbar-item}}
      Item
    {{/data-toolbar-item}}
    {{#> data-toolbar-item}}
      Item
    {{/data-toolbar-item}}
    {{#> data-toolbar-item}}
      Item
    {{/data-toolbar-item}}

    {{!-- Separator --}}
    {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-separator"}}{{/data-toolbar-item}}

    {{#> data-toolbar-group}}
      {{#> data-toolbar-item}}
        Item
      {{/data-toolbar-item}}
      {{#> data-toolbar-item}}
        Item
      {{/data-toolbar-item}}
      {{#> data-toolbar-item}}
        Item
      {{/data-toolbar-item}}
    {{/data-toolbar-group}}

    {{!-- Separator --}}
    {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-separator"}}{{/data-toolbar-item}}

    {{#> data-toolbar-item}}
      Item
    {{/data-toolbar-item}}
    {{#> data-toolbar-item}}
      Item
    {{/data-toolbar-item}}
    {{#> data-toolbar-item}}
      Item
    {{/data-toolbar-item}}
  {{/data-toolbar-content}}
{{/data-toolbar}}
```
### Item types
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-data-toolbar__item` | `<div>` | Initiates the toolbar component item. **Required** |
| `.pf-c-data-toolbar__group` | `<div>` | Initiates the toolbar component group. |
| `.pf-m-separator` | `.pf-c-data-toolbar__item` | Modifies item to a separator. |

```hbs title=Adjusted-spacers
{{#> data-toolbar}}
  {{#> data-toolbar-content}}
    {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-spacer-none"}}
      Item
    {{/data-toolbar-item}}
    {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-spacer-sm"}}
      Item
    {{/data-toolbar-item}}
    {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-spacer-md"}}
      Item
    {{/data-toolbar-item}}
    {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-spacer-lg"}}
      Item
    {{/data-toolbar-item}}

    {{!-- Separator --}}
    {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-separator"}}{{/data-toolbar-item}}

    {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-spacer-none pf-m-spacer-sm-on-md pf-m-spacer-md-on-lg pf-m-spacer-lg-on-xl"}}
      Item
    {{/data-toolbar-item}}
    {{#> data-toolbar-item}}
      Item
    {{/data-toolbar-item}}
  {{/data-toolbar-content}}
{{/data-toolbar}}
```
### Spacers
In some instances, it may be necessary to adjust spacing explicitly where items are being hidden/revealed. For example, if a `.pf-m-toggle-group` is adjacent to an element being hidden/shown or hidden/revealed, the spacing may appear to be inconsistent. If possible, rely on modifier values. Available spacer modifiers are `.pf-m-spacer-{none, sm, md, lg}{-on-md, -on-lg, -on-xl}` and `.pf-m-space-items-{none, sm, md, lg}{-on-md, -on-lg, -on-xl}`. These modifiers will overwrite existing modifiers provided by `.pf-c-data-toolbar`.

```hbs title=Adjusted-group-spacers
{{#> data-toolbar}}
  {{#> data-toolbar-content}}

    {{!-- Group --}}
    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-space-items-lg"}}

      {{!-- Item --}}
      {{#> data-toolbar-item}}
        Item
      {{/data-toolbar-item}}

      {{!-- Item --}}
      {{#> data-toolbar-item}}
        Item
      {{/data-toolbar-item}}

    {{/data-toolbar-group}}

    {{!-- Separator --}}
    {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-separator"}}{{/data-toolbar-item}}

    {{!-- Group --}}
    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-space-items-none pf-m-space-items-sm-on-md pf-m-space-items-md-on-lg pf-m-space-items-lg-on-xl"}}

      {{!-- Item --}}
      {{#> data-toolbar-item}}
        Item
      {{/data-toolbar-item}}

      {{!-- Item --}}
      {{#> data-toolbar-item}}
        Item
      {{/data-toolbar-item}}

    {{/data-toolbar-group}}

  {{/data-toolbar-content}}
{{/data-toolbar}}
```
### Data toolbar spacers
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-spacer-{none, sm, md, lg}{-on-[breakpoint]}` | `.pf-c-data-toolbar__group`, `.pf-c-data-toolbar__item` | Modifies toolbar group or item spacing. |
| `.pf-m-space-items-{none, sm, md, lg}{-on-[breakpoint]}` | `.pf-c-data-toolbar__group` | Modifies toolbar group child spacing. |

```hbs title=Group-types
{{#> data-toolbar data-toolbar--modifier="example-border"}}
  {{#> data-toolbar-content}}
    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-filter-group"}}
      {{#> data-toolbar-item}}
        {{#> select id=(concat data-toolbar--id '-select-checkbox-filter1')}}
          Filter 1
        {{/select}}
      {{/data-toolbar-item}}
      {{#> data-toolbar-item}}
        {{#> select id=(concat data-toolbar--id '-select-checkbox-filter2')}}
          Filter 2
        {{/select}}
      {{/data-toolbar-item}}
      {{#> data-toolbar-item}}
        {{#> select id=(concat data-toolbar--id '-select-checkbox-filter3')}}
          Filter 3
        {{/select}}
      {{/data-toolbar-item}}
   {{/data-toolbar-group}}

    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-icon-button-group"}}
      {{#> data-toolbar-item}}
        {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Edit"'}}
          <i class="fas fa-edit" aria-hidden="true"></i>
        {{/button}}
      {{/data-toolbar-item}}
      {{#> data-toolbar-item}}
        {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Clone"'}}
          <i class="fas fa-clone" aria-hidden="true"></i>
        {{/button}}
      {{/data-toolbar-item}}
      {{#> data-toolbar-item}}
        {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Sync"'}}
          <i class="fas fa-sync" aria-hidden="true"></i>
        {{/button}}
      {{/data-toolbar-item}}
    {{/data-toolbar-group}}

    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-button-group"}}
      {{#> data-toolbar-item}}
        {{#> button button--modifier="pf-m-primary"}}
          Action
        {{/button}}
      {{/data-toolbar-item}}
      {{#> data-toolbar-item}}
        {{#> button button--modifier="pf-m-secondary"}}
          Secondary
        {{/button}}
      {{/data-toolbar-item}}
      {{#> data-toolbar-item}}
        {{#> button button--modifier="pf-m-tertiary"}}
          Tertiary
        {{/button}}
      {{/data-toolbar-item}}
    {{/data-toolbar-group}}
  {{/data-toolbar-content}}
{{/data-toolbar}}
```
### Data toolbar group types
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-filter-group` | `.pf-c-data-toolbar__group` | Modifies toolbar group spacing. Spacer value is set to `var(--pf-c-data-toolbar__group--m-filter-group--spacer)`. Child spacer value is set to `var(--pf-c-data-toolbar__group--m-filter-group--space-items)`. |
| `.pf-m-icon-button-group` | `.pf-c-data-toolbar__group` | Modifies toolbar group spacing. Spacer value is set to `var(--pf-c-data-toolbar__group--m-toggle-group--spacer)`. Child spacer value is set to `var(--pf-c-data-toolbar__group--m-icon-button-group--space-items)`. |
| `.pf-m-button-group` | `.pf-c-data-toolbar__group` | Modifies toolbar group spacing. Spacer value is set to `var(--pf-c-data-toolbar__group--m-toggle-group--spacer)`. Child spacer value is set to `var(--pf-c-data-toolbar__group--m-button-group--space-items)`. |

```hbs title=Toggle-group-(responsive)
Toolbar not expanded
{{#> data-toolbar}}
  {{#> data-toolbar-content}}

    {{!-- Toggle group --}}
    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-toggle-group pf-m-reveal-on-xl" data-toolbar-group--IsExpanded="false"}}
      {{> data-toolbar-toggle}}

      {{!-- Search filter --}}
      {{> data-toolbar-item-search-filter button--id="content"}}

      {{!-- Filter group --}}
      {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-filter-group"}}
        {{#> data-toolbar-item}}
          {{#> select id=(concat data-toolbar--id '-select-checkbox-status') select--IsCheckboxSelect="true"}}
            Status
          {{/select}}
        {{/data-toolbar-item}}
        {{#> data-toolbar-item}}
          {{#> select id=(concat data-toolbar--id '-select-checkbox-risk') select--IsCheckboxSelect="true"}}
            Risk
          {{/select}}
        {{/data-toolbar-item}}
      {{/data-toolbar-group}}
    {{/data-toolbar-group}}
  {{/data-toolbar-content}}

  {{#> data-toolbar-expandable-content}}
    {{> data-toolbar-item-search-filter button--id="expandable-content" data-toolbar-item-search-filter--modifier="pf-m-shared-item"}}

    {{!-- Filter group --}}
    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-filter-group"}}
        {{#> data-toolbar-item}}
            {{#> select id=(concat data-toolbar--id '-select-checkbox-status-expanded') select--IsCheckboxSelect="true"}}
                Status
            {{/select}}
        {{/data-toolbar-item}}
        {{#> data-toolbar-item}}
            {{#> select id=(concat data-toolbar--id '-select-checkbox-risk-expanded') select--IsCheckboxSelect="true"}}
                Risk
            {{/select}}
        {{/data-toolbar-item}}
    {{/data-toolbar-group}}
  {{/data-toolbar-expandable-content}}
{{/data-toolbar}}
<br>
<br>
Toolbar expanded
{{#> data-toolbar}}
  {{#> data-toolbar-content}}

    {{!-- Toggle group --}}
    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-toggle-group pf-m-reveal-on-xl" data-toolbar-group--IsExpanded="false"}}
      {{> data-toolbar-toggle}}

      {{!-- Search filter --}}
      {{> data-toolbar-item-search-filter button--id="content"}}

      {{!-- Filter group --}}
      {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-filter-group"}}
        {{#> data-toolbar-item}}
          {{#> select id=(concat data-toolbar--id '-select-checkbox-status') select--IsCheckboxSelect="true"}}
            Status
          {{/select}}
        {{/data-toolbar-item}}
        {{#> data-toolbar-item}}
          {{#> select id=(concat data-toolbar--id '-select-checkbox-risk') select--IsCheckboxSelect="true"}}
            Risk
          {{/select}}
        {{/data-toolbar-item}}
      {{/data-toolbar-group}}
    {{/data-toolbar-group}}
  {{/data-toolbar-content}}

  {{#> data-toolbar-expandable-content data-toolbar-expandable-content--modifier="pf-m-hidden-on-xl" data-toolbar-expandable-content--IsExpanded="true"}}
    {{> data-toolbar-item-search-filter button--id="expandable-content" data-toolbar-item-search-filter--modifier="pf-m-shared-item"}}

    {{!-- Filter group --}}
    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-filter-group"}}
        {{#> data-toolbar-item}}
            {{#> select id=(concat data-toolbar--id '-select-checkbox-status-expanded') select--IsCheckboxSelect="true"}}
                Status
            {{/select}}
        {{/data-toolbar-item}}
        {{#> data-toolbar-item}}
            {{#> select id=(concat data-toolbar--id '-select-checkbox-risk-expanded') select--IsCheckboxSelect="true"}}
                Risk
            {{/select}}
        {{/data-toolbar-item}}
    {{/data-toolbar-group}}
  {{/data-toolbar-expandable-content}}
{{/data-toolbar}}
```
### Toggle group modifier
The `.pf-m-toggle-group` controls when, and at which breakpoint, filters will be hidden and revealed. By default, all filters are hidden until the specified breakpoint is reached. `.pf-m-reveal-on-{md, lg, xl}` controls when filters are revealed and when the toggle button is hidden.
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-c-data-toolbar__item`, `.pf-c-data-toolbar__group`, `.pf-c-data-toolbar__toggle`, `.pf-c-data-toolbar__expandable-content` |  Indicates that the toggle group element is hidden. **Required** |
| `aria-expanded="true"` | `.pf-c-data-toolbar__toggle > .pf-c-button` |  Indicates that the expandable content is visible. **Required** |
| `aria-expanded="false"` | `.pf-c-data-toolbar__toggle > .pf-c-button` |  Indicates the the expandable content is hidden. **Required** |
| `aria-controls="[id of expandable content]"` | `.pf-c-data-toolbar__toggle > .pf-c-button` |  Identifies the expanded content controlled by the toggle button. **Required** |
| `id="[expandable-content_id]"` | `.pf-c-data-toolbar__expandable-content` | Provides a reference for toggle button description. **Required** |
### Responsive attributes
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-haspopup="true"` | `.pf-c-data-toolbar__toggle > .pf-c-button` | When expandable content appears above content (mobile viewport), `aria-haspopup="true"` should be applied to indicate that focus should be trapped. **Required** |
### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-reveal{-on-[breakpoint]}` | `.pf-c-data-toolbar__group.pf-m-toggle-group`, `.pf-c-data-toolbar__expandable-content` | Modifies toolbar element visibility at breakpoint. This selector must be applied consistently to toggle group and expandable content. |
| `.pf-m-shared-item` | `.pf-c-data-toolbar__item`, `.pf-c-data-toolbar__group` | Identifies a toolbar item or group that appear both within `pf-m-toggle-group` and `pf-c-data-toolbar__expandable-content`. At smaller viewports, filters within `.pf-m-toggle-group` are hidden in `.pf-c-toolbar__content` and visible in `.pf-c-toolbar__expandable-content`. As the viewport scales, filters are visible in `.pf-c-toolbar__content` and hidden in `.pf-c-toolbar__expandable-content`. |
| `.pf-m-expanded` | `.pf-c-data-toolbar__expandable-content` | Modifies the component for the expanded state. |

```hbs title=Selected-filters
Toolbar not expanded
{{#> data-toolbar}}
  {{#> data-toolbar-content}}

    {{!-- Bulk select --}}
    {{> data-toolbar-item-bulk-select}}

    {{!-- Toggle group --}}
    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-toggle-group pf-m-reveal-on-xl" data-toolbar-group--IsExpanded="true"}}
      {{> data-toolbar-toggle data-toolbar-toggle--SelectedFilters="6"}}

      {{!-- Search filter --}}
      {{> data-toolbar-item-search-filter button--id="content"}}

      {{!-- Filter group --}}
      {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-filter-group"}}
        {{#> data-toolbar-item}}
          {{#> select id=(concat data-toolbar--id '-select-checkbox-status') select--IsCheckboxSelect="true" select--ItemIsSelected="true"}}
            Status
          {{/select}}
        {{/data-toolbar-item}}
        {{#> data-toolbar-item}}
          {{#> select id=(concat data-toolbar--id '-select-checkbox-risk') select--IsCheckboxSelect="true" select--ItemIsSelected="true"}}
            Risk
          {{/select}}
        {{/data-toolbar-item}}
      {{/data-toolbar-group}}
    {{/data-toolbar-group}}

    {{#> data-toolbar-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Sort"'}}
        <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
      {{/button}}
    {{/data-toolbar-item}}

    {{!-- Overflow menu --}}
    {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-overflow-menu"}}
      {{!-- Uncomment when overflow menu merges --}}
      {{!-- {{> overflow-menu-action-group-example overflow-menu--IsSingle="true" overflow-menu--RevealOn="xl" overflow-menu-control--HasAdditionalOptions="true" overflow-menu--id=data-toolbar--id}} --}}


      {{!-- Remove when overflow menu merges --}}
      Overflow menu
    {{/data-toolbar-item}}
  {{/data-toolbar-content}}

  {{!-- Expanded content --}}
  {{#> data-toolbar-expandable-content}}

    {{!-- Search filter --}}
    {{> data-toolbar-item-search-filter button--id="expanded-content" data-toolbar-item-search-filter--modifier="pf-m-shared-item"}}

    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-filter-group"}}

        {{!-- Filter --}}
        {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-shared-item"}}
          {{#> select id=(concat data-toolbar--id '-select-checkbox-status-expanded')}}
            Status
          {{/select}}
        {{/data-toolbar-item}}

        {{> data-toolbar-item-chip-group chip-group--label="Status" chip-group--id=(concat data-toolbar--id '-group1-')}}

        {{!-- Filter --}}
        {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-shared-item"}}
          {{#> select id=(concat data-toolbar--id '-select-checkbox-risk-expanded') select--IsCheckboxSelect="true"}}
            Risk
          {{/select}}
        {{/data-toolbar-item}}

        {{> data-toolbar-item-chip-group chip-group--label="Risk" chip-group--id=(concat data-toolbar--id '-group2-')}}

    {{/data-toolbar-group}}

    {{!-- Clear all filters button --}}
    {{> data-toolbar-item-clear}}
  {{/data-toolbar-expandable-content}}
{{/data-toolbar}}
<br>
<br>
Toolbar expanded
{{#> data-toolbar}}
  {{#> data-toolbar-content}}

    {{!-- Bulk select --}}
    {{> data-toolbar-item-bulk-select}}

    {{!-- Toggle group --}}
    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-toggle-group pf-m-reveal-on-xl" data-toolbar-group--IsExpanded="true"}}
      {{> data-toolbar-toggle data-toolbar-toggle--SelectedFilters="6"}}

      {{!-- Search filter --}}
      {{> data-toolbar-item-search-filter button--id="content"}}

      {{!-- Filter group --}}
      {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-filter-group"}}
        {{#> data-toolbar-item}}
          {{#> select id=(concat data-toolbar--id '-select-checkbox-status') select--IsCheckboxSelect="true" select--ItemIsSelected="true"}}
            Status
          {{/select}}
        {{/data-toolbar-item}}
        {{#> data-toolbar-item}}
          {{#> select id=(concat data-toolbar--id '-select-checkbox-risk') select--IsCheckboxSelect="true" select--ItemIsSelected="true"}}
            Risk
          {{/select}}
        {{/data-toolbar-item}}
      {{/data-toolbar-group}}
    {{/data-toolbar-group}}

    {{#> data-toolbar-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Sort"'}}
        <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
      {{/button}}
    {{/data-toolbar-item}}

    {{!-- Overflow menu --}}
    {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-overflow-menu"}}
      {{!-- Uncomment when overflow menu merges --}}
      {{!-- {{> overflow-menu-action-group-example overflow-menu--IsSingle="true" overflow-menu--RevealOn="xl" overflow-menu-control--HasAdditionalOptions="true" overflow-menu--id=data-toolbar--id}} --}}


      {{!-- Remove when overflow menu merges --}}
      Overflow menu
    {{/data-toolbar-item}}
  {{/data-toolbar-content}}

  {{!-- Expanded content --}}
  {{#> data-toolbar-expandable-content data-toolbar-expandable-content--modifier="pf-m-reveal-on-xl" data-toolbar-expandable-content--IsExpanded="true"}}

    {{!-- Search filter --}}
    {{> data-toolbar-item-search-filter button--id="expanded-content" data-toolbar-item-search-filter--modifier="pf-m-shared-item"}}

    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-filter-group"}}

        {{!-- Filter --}}
        {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-shared-item"}}
          {{#> select id=(concat data-toolbar--id '-select-checkbox-status-expanded')}}
            Status
          {{/select}}
        {{/data-toolbar-item}}

        {{> data-toolbar-item-chip-group chip-group--label="Status" chip-group--id=(concat data-toolbar--id '-group1-')}}

        {{!-- Filter --}}
        {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-shared-item"}}
          {{#> select id=(concat data-toolbar--id '-select-checkbox-risk-expanded') select--IsCheckboxSelect="true"}}
            Risk
          {{/select}}
        {{/data-toolbar-item}}

        {{> data-toolbar-item-chip-group chip-group--label="Risk" chip-group--id=(concat data-toolbar--id '-group2-')}}

    {{/data-toolbar-group}}

    {{!-- Clear all filters button --}}
    {{> data-toolbar-item-clear}}
  {{/data-toolbar-expandable-content}}
{{/data-toolbar}}
```

```hbs title=Stacked
{{#> data-toolbar}}
  {{#> data-toolbar-content}}

    {{!-- Toggle group --}}
    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-toggle-group pf-m-reveal-on-xl" data-toolbar-group--IsExpanded="false"}}
      {{> data-toolbar-toggle}}

      {{#> data-toolbar-group newcontext}}
        {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-label" data-toolbar-item--attribute='aria-hidden="true"' data-toolbar-item--id=(concat data-toolbar--id '-select-checkbox-resource-label')}}
          Resource
        {{/data-toolbar-item}}
        {{#> data-toolbar-item}}
          {{#> select id=(concat data-toolbar--id '-select-checkbox-resource') select--IsCheckboxSelect="true" select--HasCustomLabel="true"}}
            Pod
          {{/select}}
        {{/data-toolbar-item}}
      {{/data-toolbar-group}}
      {{#> data-toolbar-group newcontext}}
        {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-label" data-toolbar-item--attribute='aria-hidden="true"' data-toolbar-item--id=(concat data-toolbar--id '-select-checkbox-status-label')}}
          Status
        {{/data-toolbar-item}}
        {{#> data-toolbar-item}}
          {{#> select id=(concat data-toolbar--id '-select-checkbox-status') select--IsCheckboxSelect="true" select--HasCustomLabel="true"}}
            Running
          {{/select}}
        {{/data-toolbar-item}}
      {{/data-toolbar-group}}
      {{#> data-toolbar-group newcontext}}
        {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-label" data-toolbar-item--attribute='aria-hidden="true"' data-toolbar-item--id=(concat data-toolbar--id '-select-checkbox-type-label')}}
          Type
        {{/data-toolbar-item}}
        {{#> data-toolbar-item}}
          {{#> select id=(concat data-toolbar--id '-select-checkbox-type') select--IsCheckboxSelect="true" select--HasCustomLabel="true"}}
            Any
          {{/select}}
        {{/data-toolbar-item}}
      {{/data-toolbar-group}}
    {{/data-toolbar-group}}

    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-icon-button-group"}}
      {{#> data-toolbar-item}}
        {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Sort"'}}
          <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
        {{/button}}
      {{/data-toolbar-item}}

      {{#> data-toolbar-item}}
        {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Edit"'}}
          <i class="fas fa-external-link-alt" aria-hidden="true"></i>
        {{/button}}
      {{/data-toolbar-item}}
    {{/data-toolbar-group}}

    {{!-- Overflow menu --}}
    {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-overflow-menu pf-m-align-right"}}
      {{!-- Uncomment when overflow menu merges --}}
      {{!-- {{> overflow-menu-action-group-example overflow-menu-control--HasAdditionalOptions="true" overflow-menu--id=data-toolbar--id overflow-menu--RevealOn="lg"}} --}}

      {{!-- Remove when overflow menu merges --}}
      {{#> example-text example-text--modifier="example-border"}}Overflow menu{{/example-text}}
    {{/data-toolbar-item}}

  {{/data-toolbar-content}}

  {{!-- Divider --}}
  {{#> divider}}{{/divider}}

  {{#> data-toolbar-content}}

    {{!-- Bulk select --}}
    {{> data-toolbar-item-bulk-select}}

    {{!-- Pagination --}}
    {{> data-toolbar-item-pagination}}
  {{/data-toolbar-content}}

  {{#> data-toolbar-expandable-content data-toolbar-expandable-content--modifier="pf-m-reveal-on-xl"}}
      {{#> data-toolbar-group newcontext data-toolbar-group--modifier="pf-m-shared-item"}}
          {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-label" data-toolbar-item--attribute='aria-hidden="true"' data-toolbar-item--id=(concat data-toolbar--id '-select-checkbox-resource-label-expanded')}}
              Resource
          {{/data-toolbar-item}}
          {{#> data-toolbar-item}}
              {{#> select id=(concat data-toolbar--id '-select-checkbox-resource-expanded') select--IsCheckboxSelect="true" select--HasCustomLabel="true"}}
                  Pod
              {{/select}}
          {{/data-toolbar-item}}
      {{/data-toolbar-group}}
      {{#> data-toolbar-group newcontext data-toolbar-group--modifier="pf-m-shared-item"}}
          {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-label" data-toolbar-item--attribute='aria-hidden="true"' data-toolbar-item--id=(concat data-toolbar--id '-select-checkbox-status-label-expanded')}}
              Status
          {{/data-toolbar-item}}
          {{#> data-toolbar-item}}
              {{#> select id=(concat data-toolbar--id '-select-checkbox-status-expanded') select--IsCheckboxSelect="true" select--HasCustomLabel="true"}}
                  Running
              {{/select}}
          {{/data-toolbar-item}}
      {{/data-toolbar-group}}
      {{#> data-toolbar-group newcontext data-toolbar-group--modifier="pf-m-shared-item"}}
          {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-label" data-toolbar-item--attribute='aria-hidden="true"' data-toolbar-item--id=(concat data-toolbar--id '-select-checkbox-type-label-expanded')}}
              Type
          {{/data-toolbar-item}}
          {{#> data-toolbar-item}}
              {{#> select id=(concat data-toolbar--id '-select-checkbox-type-expanded') select--IsCheckboxSelect="true" select--HasCustomLabel="true"}}
                  Any
              {{/select}}
          {{/data-toolbar-item}}
      {{/data-toolbar-group}}
  {{/data-toolbar-expandable-content}}
{{/data-toolbar}}
```

```hbs title=Expanded-elements-(responsive)
Toolbar not expanded
<br>
{{#> data-toolbar}}
  {{#> data-toolbar-content}}
    {{!-- Bulk select --}}
    {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-bulk-select"}}
      {{#> dropdown dropdown--IsBulkSelect="true" dropdown--IsSplitButton="true" dropdown-toggle--type="div" dropdown-toggle--modifier="pf-m-split-button" dropdown-menu--toggle-id=(concat data-toolbar--id '-button')}}
        {{> dropdown-toggle-check dropdown-toggle-check--id=(concat data-toolbar--id '-bulk-select-check') aria-label="Select all"}}
        {{> dropdown-toggle-button dropdown--IsToggleButton="true" dropdown-toggle-button--id=(concat data-toolbar--id '-button') aria-label="Select"}}
      {{/dropdown}}
    {{/data-toolbar-item}}
    {{!-- Toggle group --}}
    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-toggle-group pf-m-reveal-on-xl" data-toolbar-group--IsExpanded="true"}}
      {{> data-toolbar-toggle data-toolbar-toggle--SelectedFilters="6"}}
      {{!-- Search filter --}}
      {{> data-toolbar-item-search-filter button--id="content"}}
      {{!-- Filter group --}}
      {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-filter-group"}}
        {{#> data-toolbar-item}}
          {{#> select id=(concat data-toolbar--id '-select-checkbox-status') select--IsCheckboxSelect="true" select--ItemIsSelected="true"}}
            Status
          {{/select}}
        {{/data-toolbar-item}}
        {{#> data-toolbar-item}}
          {{#> select id=(concat data-toolbar--id '-select-checkbox-risk') select--IsCheckboxSelect="true" select--ItemIsSelected="true"}}
            Risk
          {{/select}}
        {{/data-toolbar-item}}
      {{/data-toolbar-group}}
    {{/data-toolbar-group}}
    {{#> data-toolbar-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Sort"'}}
        <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
      {{/button}}
    {{/data-toolbar-item}}
    {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-overflow-menu"}}
      {{!-- Uncomment when overflow menu merges --}}
      {{!-- {{> overflow-menu-action-group-example overflow-menu--IsSingle="true" overflow-menu--RevealOn="xl" overflow-menu-control--HasAdditionalOptions="true" overflow-menu--id=data-toolbar--id}} --}}
      {{!-- Remove when overflow menu merges --}}
      Overflow menu
    {{/data-toolbar-item}}
  {{/data-toolbar-content}}
  {{#> data-toolbar-expandable-content data-toolbar-expandable-content--modifier="pf-m-reveal-on-xl"}}
    {{> data-toolbar-item-search-filter button--id="expanded-content" data-toolbar-item-search-filter--modifier="pf-m-shared-item"}}
    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-filter-group"}}
      {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-shared-item"}}
        {{#> select id=(concat data-toolbar--id '-select-checkbox-status-expanded')}}
          Status
        {{/select}}
      {{/data-toolbar-item}}
      {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-shared-item"}}
        {{#> select id=(concat data-toolbar--id '-select-checkbox-risk-expanded') select--IsCheckboxSelect="true"}}
          Risk
        {{/select}}
       {{/data-toolbar-item}}
    {{/data-toolbar-group}}
  {{/data-toolbar-expandable-content}}
{{/data-toolbar}}
<br>
<br>
Toolbar expanded
<br>
{{#> data-toolbar}}
  {{#> data-toolbar-content}}
    {{!-- Bulk select --}}
    {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-bulk-select"}}
      {{#> dropdown dropdown--IsBulkSelect="true" dropdown--IsExpanded="true" dropdown--IsSplitButton="true" dropdown-toggle--type="div" dropdown-toggle--modifier="pf-m-split-button" dropdown-menu--toggle-id=(concat data-toolbar--id '-button')}}
        {{> dropdown-toggle-check dropdown-toggle-check--id=(concat data-toolbar--id '-bulk-select-check') aria-label="Select all"}}
        {{> dropdown-toggle-button dropdown--IsToggleButton="true" dropdown-toggle-button--id=(concat data-toolbar--id '-button') aria-label="Select"}}
      {{/dropdown}}
    {{/data-toolbar-item}}
    {{!-- Toggle group --}}
    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-toggle-group pf-m-reveal-on-xl" data-toolbar-group--IsExpanded="true"}}
      {{> data-toolbar-toggle data-toolbar-toggle--SelectedFilters="6"}}
      {{!-- Search filter --}}
      {{> data-toolbar-item-search-filter button--id="content"}}
      {{!-- Filter group --}}
      {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-filter-group"}}
        {{#> data-toolbar-item}}
          {{#> select id=(concat data-toolbar--id '-select-checkbox-status') select--IsCheckboxSelect="true" select--IsChecked="true" select--ItemIsSelected="true" select--IsExpanded="true"}}
            Status
          {{/select}}
        {{/data-toolbar-item}}
        {{#> data-toolbar-item}}
          {{#> select id=(concat data-toolbar--id '-select-checkbox-risk') select--IsCheckboxSelect="true" select--IsChecked="true" select--ItemIsSelected="true" select--IsExpanded="true"}}
            Risk
          {{/select}}
        {{/data-toolbar-item}}
      {{/data-toolbar-group}}
    {{/data-toolbar-group}}
    {{#> data-toolbar-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Sort"'}}
        <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
      {{/button}}
    {{/data-toolbar-item}}
    {{!-- Overflow menu --}}
    {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-overflow-menu"}}
      {{!-- Uncomment when overflow menu merges --}}
      {{!-- {{> overflow-menu-action-group-example overflow-menu--IsSingle="true" overflow-menu--RevealOn="xl" overflow-menu-control--HasAdditionalOptions="true" overflow-menu--id=data-toolbar--id}} --}}
      {{!-- Remove when overflow menu merges --}}
      Overflow menu
    {{/data-toolbar-item}}
  {{/data-toolbar-content}}
  {{#> data-toolbar-expandable-content data-toolbar-expandable-content--modifier="pf-m-reveal-on-xl" data-toolbar-expandable-content--IsExpanded="true"}}
    {{> data-toolbar-item-search-filter button--id="expanded-content" data-toolbar-item-search-filter--modifier="pf-m-shared-item"}}
    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-filter-group"}}
      {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-shared-item"}}
        {{#> select id=(concat data-toolbar--id '-select-checkbox-status-expanded')}}
          Status
        {{/select}}
      {{/data-toolbar-item}}
      {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-shared-item"}}
        {{#> select id=(concat data-toolbar--id '-select-checkbox-risk-expanded') select--IsCheckboxSelect="true" select--IsChecked="true" select--ItemIsSelected="true" select--IsExpanded="true"}}
          Risk
        {{/select}}
       {{/data-toolbar-item}}
    {{/data-toolbar-group}}
  {{/data-toolbar-expandable-content}}
{{/data-toolbar}}
```
## Documentation
### Overview
As the data toolbar component is a hybrid layout and component, some of its elements are presentational, while some require accessibility support.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-data-toolbar` | `<div>` | Initiates the toolbar component. **Required** |
| `.pf-c-data-toolbar__item` | `<div>` | Initiates a toolbar item. **Required** |
| `.pf-c-data-toolbar__group` | `<div>` | Initiates a toolbar group. |
| `.pf-c-data-toolbar__content` | `<div>` | Initiates a toolbar content section. **Required** |
| `.pf-c-data-toolbar__expandable-content` | `<div>` | Initiates a toolbar expandable content section. |
| `.pf-m-expanded` | `.pf-c-data-toolbar__expandable-content` | Modifies expandable content section for the expanded state. |
| `.pf-m-separator` | `.pf-c-data-toolbar__item` | Initiates separator border. |
| `.pf-m-bulk-select` | `.pf-c-data-toolbar__item` | Initiates bulk select spacing. |
| `.pf-m-overflow-menu` | `.pf-c-data-toolbar__item` | Initiates overflow menu spacing. |
| `.pf-m-pagination` | `.pf-c-data-toolbar__item` | Initiates pagination spacing and margin. |
| `.pf-m-search-filter` | `.pf-c-data-toolbar__item` | Initiates search filter spacing. |
| `.pf-m-chip-group` | `.pf-c-data-toolbar__item` | Initiates chip group spacing. |
| `.pf-m-button-group` | `.pf-c-data-toolbar__group` | Initiates button group spacing. |
| `.pf-m-icon-button-group` | `.pf-c-data-toolbar__group` | Initiates icon button group spacing. |
| `.pf-m-filter-group` | `.pf-c-data-toolbar__group` | Initiates filter group spacing. |
| `.pf-m-hidden{-on-[breakpoint]}` | `.pf-c-data-toolbar > *` | Modifies toolbar element to be hidden, at optional breakpoint. |
| `.pf-m-visible{-on-[breakpoint]}` | `.pf-c-data-toolbar > *` | Modifies toolbar element to be shown, at optional breakpoint. |
| `.pf-m-align-right{-on-[breakpoint]}` | `.pf-c-data-toolbar > *` | Modifies toolbar element to align right, at optional breakpoint. |
| `.pf-m-align-left{-on-[breakpoint]}` | `.pf-c-data-toolbar > *` | Modifies toolbar element to align left, at optional breakpoint. |
| `.pf-m-label` | `.pf-c-data-toolbar__item` | Modifies toolbar item to label. |

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-c-data-toolbar__item`, `.pf-c-data-toolbar__group`, `.pf-c-data-toolbar__toggle`, `.pf-c-data-toolbar__expandable-content` |  Indicates that the toggle group element is hidden. **Required** |
| `aria-expanded="true"` | `.pf-c-data-toolbar__toggle > .pf-c-button` |  Indicates that the expandable content is visible. **Required** |
| `aria-expanded="false"` | `.pf-c-data-toolbar__toggle > .pf-c-button` |  Indicates the the expandable content is hidden. **Required** |
| `aria-controls="[id of expandable content]"` | `.pf-c-data-toolbar__toggle > .pf-c-button` |  Identifies the expanded content controlled by the toggle button. **Required** |
| `id="[expandable-content_id]"` | `.pf-c-data-toolbar__expandable-content` | Provides a reference for toggle button description. **Required** |

### Toggle group usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-toggle-group` | `.pf-c-data-toolbar__group` | Modifies toolbar group to control when, and at which breakpoint, filters will be hidden and revealed. By default, all filters are hidden until the specified breakpoint is reached. |
| `.pf-m-reveal{-on-[breakpoint]}` | `.pf-c-data-toolbar__group.pf-m-toggle-group`, `.pf-c-data-toolbar__expandable-content` | Modifies toolbar element to hidden at breakpoint. This selector must be applied consistently to toggle group and expandable content. |
| `.pf-m-shared-item` | `.pf-c-data-toolbar__item`, `.pf-c-data-toolbar__group` | Identifies a toolbar item or group that appear within toggle group and expandable content. |

### Spacer system
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-spacer-{none, sm, md, lg, xl}{-on-[breakpoint]}` | `.pf-c-data-toolbar__group`, `.pf-c-data-toolbar__item` | Modifies toolbar group or item spacing. |
| `.pf-m-space-items-{none, sm, md, lg, xl}{-on-[breakpoint]}` | `.pf-c-data-toolbar__group` | Modifies toolbar group child spacing. |
