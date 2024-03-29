---
id: Toolbar
section: components
cssPrefix: pf-v6-c-toolbar
---

import './Toolbar.css'

<!-- TODO: add documentation for resize observer/responsive variable usage -->

Toolbar relies on groups (`.pf-v6-c-toolbar__group`) and items (`.pf-v6-c-toolbar__item`), with default col/row gap values. Groups and items can be siblings and/or items can be nested within groups. Modifier selectors adjust spacing based on the type of group. The default `column-gap` value for items and groups is set to `--pf-v6-c--ColumnGap`, whose value is `--pf-t--global--spacer--sm` or 8px.

### Default spacing for items and groups:

| Class | CSS Variable | Computed Value |
| -- | -- | -- |
| `.pf-v6-c-toolbar__group` | `--pf-v6-c-toolbar__group--ColumnGap` | `8px` |
| `.pf-v6-c-toolbar__item` | `--pf-v6-c-toolbar__item--ColumnGap` | `8px` |

### Toolbar item types

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-pagination` | `.pf-v6-c-toolbar__item` | Initiates pagination and margin. |

### Modifiers

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-[hidden/visible]` | `.pf-v6-c-toolbar > *` | Modifies toolbar element to be hidden/visible. |
| `.pf-m-flex-grow` | `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__item` | Modifies toolbar element to `flex-grow: 1`, allowing it to consume available main-axis space. |
| `.pf-m-align-[start/end]` | `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__item` | Modifies toolbar [main axis](https://developer.mozilla.org/en-US/docs/Glossary/Main_Axis) element alignment. |
| `.pf-m-align-items-[stretch/baseline/start/center/end]` | `.pf-v6-c-toolbar__content`, `.pf-v6-c-toolbar__content-section`, `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__item` | Modifies toolbar element [cross axis](https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis) child alignment. |
| `.pf-m-align-self-[stretch/baseline/start/center/end]` | `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__item` | Modifies toolbar element [cross axis](https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis) self alignment. |

### Special notes

Several components in the following examples do not include functional and/or accessibility specifications (for example `.pf-v6-c-select`, `.pf-v6-c-options-menu`). Rather, `.pf-v6-c-toolbar` focuses on functionality and accessibility specifications that apply to it only.

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
| `.pf-v6-c-toolbar__item` | `<div>` | Initiates the toolbar component item. **Required** |
| `.pf-v6-c-toolbar__group` | `<div>` | Initiates the toolbar component group. |

### Adjusted group column gap
```hbs
{{#> toolbar toolbar--id="toolbar-group-spacer-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-column-gap-lg"}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
      {{/toolbar-group}}
      {{> divider divider--modifier="pf-m-vertical"}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-column-gap-none pf-m-column-gap-sm"}}
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
{{#> toolbar toolbar--modifier="pf-m-inset-xl" toolbar--id="toolbar-inset-example"}}
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
| `.pf-m-column-gap-[none/sm/md/lg]` | `.pf-v6-c-toolbar__group` | Modifies toolbar group child spacing. |
| `.pf-m-inset-[none/sm/md/lg/xl/2xl]` | `.pf-v6-c-toolbar` | Modifies toolbar horizontal. |

### Width control
```hbs
{{#> toolbar toolbar--id="toolbar-width-control"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group}}
        {{#> toolbar-item toolbar-item--attribute='style="--pf-v6-c-toolbar__item--Width: 80px; --pf-v6-c-toolbar__item--Width-on-xl: 10rem"'}}
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
| `--pf-v6-c-toolbar__item--Width: {width}` | `.pf-v6-c-toolbar__item` |  Modifies the width value of a toolbar item at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `--pf-v6-c-toolbar__item--MinWidth: {width}` | `.pf-v6-c-toolbar__item` |  Modifies the min width value of a toolbar item at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |

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
| `.pf-m-filter-group` | `.pf-v6-c-toolbar__group` | Modifies toolbar group column gap. |
| `.pf-m-icon-button-group` | `.pf-v6-c-toolbar__group` | Modifies toolbar group column gap. |

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
| `hidden` | `.pf-v6-c-toolbar__item`, `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__toggle`, `.pf-v6-c-toolbar__expandable-content` |  Indicates that the toggle group element is hidden. **Required** |
| `aria-expanded="[true/false]"` | `.pf-v6-c-toolbar__toggle > .pf-v6-c-button` |  Indicates that the expandable content is visible/hidden. **Required** |
| `aria-controls="[id of expandable content]"` | `.pf-v6-c-toolbar__toggle > .pf-v6-c-button` |  Identifies the expanded content controlled by the toggle button. **Required** |
| `id="[expandable-content_id]"` | `.pf-v6-c-toolbar__expandable-content` | Provides a reference for toggle button description. **Required** |

### Responsive attributes

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-haspopup=true` | `.pf-v6-c-toolbar__toggle > .pf-v6-c-button` | When expandable content appears above content (mobile viewport), `aria-haspopup=true` should be applied to indicate that focus should be trapped. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-[show/hide][-on-[sm/md/lg/xl/2xl]]` | `.pf-v6-c-toolbar__group.pf-m-toggle-group`, `.pf-v6-c-toolbar__expandable-content` | Modifies toolbar element visibility. |
| `.pf-m-chip-container` | `.pf-v6-c-toolbar__content-section`, `.pf-v6-c-toolbar__group` | Modifies the toolbar element for applied filters layout. |
| `.pf-m-expanded` | `.pf-v6-c-toolbar__expandable-content`, `.pf-v6-c-toolbar__toggle` | Modifies the component for the expanded state. |

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
      {{#> toolbar-group toolbar-group--modifier='pf-m-chip-container'}}
        {{#> toolbar-group toolbar-group--modifier='pf-m-grow'}}
          {{> toolbar--item-chip-group chip-group--label="Status" chip-group--id=(concat toolbar--id '-chip-group-status')}}
          {{> toolbar--item-chip-group chip-group--label="Risk" chip-group--id=(concat toolbar--id '-chip-group-risk')}}
        {{/toolbar-group}}
        {{> toolbar-item-clear}}
      {{/toolbar-group}}
    {{/toolbar-expandable-content}}
  {{/toolbar-content}}
  {{#> toolbar-content}}
    {{#> toolbar-group}}
      {{#> toolbar-item}}
        6 filters applied
      {{/toolbar-item}}
      {{> toolbar-item-clear}}
    {{/toolbar-group}}
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
      {{#> toolbar-group toolbar-group--modifier='pf-m-chip-container'}}
        {{#> toolbar-group toolbar-group--modifier='pf-m-grow'}}
          {{> toolbar--item-chip-group chip-group--label="Status" chip-group--id=(concat toolbar--id '-chip-group-status')}}
          {{> toolbar--item-chip-group chip-group--label="Risk" chip-group--id=(concat toolbar--id '-chip-group-risk')}}
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
    {{#> toolbar-group}}
      {{#> toolbar-group}}
        {{> toolbar--item-chip-group chip-group--label="Status" chip-group--id=(concat toolbar--id '-chip-group-status')}}
        {{> toolbar--item-chip-group chip-group--label="Risk" chip-group--id=(concat toolbar--id '-chip-group-risk')}}
      {{/toolbar-group}}
      {{> toolbar-item-clear}}
    {{/toolbar-group}}
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

### Primary background
```hbs
{{#> toolbar toolbar--modifier="pf-m-primary" toolbar--id="primary-background"}}
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

### Secondary background
```hbs
{{#> toolbar toolbar--modifier="pf-m-secondary" toolbar--id="secondary-background"}}
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

### No background
```hbs
{{#> toolbar toolbar--modifier="pf-m-no-background" toolbar--id="no-background"}}
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

### Sticky toolbar
```hbs
{{#> toolbar toolbar--modifier="pf-m-sticky" toolbar--id="sticky-toolbar"}}
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

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor mattis massa dignissim blandit. Mauris pellentesque nisi a erat ultricies, mollis auctor nulla volutpat. Donec eu nisl magna. Donec nisi nulla, blandit et mauris in, lobortis elementum neque. Nunc pharetra eleifend purus, in commodo nisl accumsan in. Vestibulum feugiat nisl eu venenatis feugiat. Morbi ornare velit vitae tellus sollicitudin, sed ornare neque sagittis. Proin sodales, libero et vestibulum luctus, nunc mi euismod dui, vel accumsan lacus odio vel nibh. Etiam at mattis purus, sit amet vestibulum metus. Maecenas feugiat condimentum ligula eget hendrerit. Nullam eleifend convallis sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam rhoncus consectetur enim, at interdum mi tincidunt eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

<br><br>

Maecenas vel sollicitudin ipsum, pulvinar pharetra magna. Aenean vel ipsum vel purus malesuada sagittis eget ac odio. Nullam vitae diam mollis, consectetur est vitae, sodales diam. Vivamus eu lectus quis mi maximus porta. Praesent erat sapien, vestibulum nec libero non, tincidunt congue mauris. Pellentesque vitae imperdiet mi. Nulla in ipsum neque. Cras a quam ut sem venenatis euismod non at tortor. Mauris porta purus augue, ut pharetra elit varius at. Vestibulum fringilla ligula ac leo tristique, porta venenatis nibh convallis.

<br><br>

Vestibulum vel orci mattis magna tristique suscipit. In vel tellus tempor, consectetur mi at, pellentesque enim. Cras venenatis tellus eget velit porttitor, sit amet malesuada tortor venenatis. Maecenas vitae augue ac orci volutpat gravida. In fermentum, orci eget tincidunt lobortis, turpis orci porta nibh, cursus dignissim lectus sapien at felis. Nulla facilisi. Aenean lectus justo, pellentesque sed nulla ut, pulvinar pellentesque tortor. Ut tempus euismod dolor gravida rhoncus. Quisque sed lorem sit amet erat tincidunt aliquet quis in nulla. Maecenas arcu erat, hendrerit a dui eget, convallis pharetra sapien. Nunc tellus enim, dictum eu egestas vel, ultrices eget est. Etiam quis vehicula sem. Nulla facilisi. Donec ante ipsum, fringilla iaculis ex a, tincidunt lobortis mi.

<br><br>

Etiam nulla lacus, porttitor vel volutpat et, malesuada id nunc. Suspendisse porttitor sem quis ante consequat, vitae commodo nulla ultricies. Nulla fermentum ipsum ac dolor elementum, eu luctus ex condimentum. Sed sed arcu aliquam, porta metus in, sollicitudin felis. Sed faucibus lacus consectetur orci ultricies laoreet. Morbi sed lectus dictum sem tempor porta. Donec ut diam tempor, venenatis erat vitae, accumsan diam. Etiam sed purus eget lacus vehicula iaculis non euismod dolor. Quisque ultricies eget est in semper.

<br><br>

Fusce tristique nulla id vestibulum maximus. Morbi sit amet nisi nec orci pulvinar interdum. Duis convallis, nunc vel pharetra blandit, urna neque eleifend nunc, maximus faucibus tellus nisl a velit. Aliquam quis turpis tempor nisi ultricies fermentum at et ipsum. Pellentesque vel tincidunt nisl. Donec elit ante, sodales ac ultrices vitae, egestas ut magna. Nulla sollicitudin ornare mi, a porttitor sem fermentum vitae. Praesent maximus fringilla gravida. Sed ultricies turpis ut lacus sodales, et aliquet risus accumsan. Pellentesque lacus sapien, cursus vitae nulla vel, bibendum tristique risus.
```

## Documentation

### Overview

As the toolbar component is a hybrid layout and component, some of its elements are presentational, while some require accessibility support.

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-toolbar` | `<div>` | Initiates the toolbar component. **Required** |
| `.pf-v6-c-toolbar__item` | `<div>` | Initiates a toolbar item. **Required** |
| `.pf-v6-c-toolbar__group` | `<div>` | Initiates a toolbar group. |
| `.pf-v6-c-toolbar__content` | `<div>` | Initiates a toolbar content container. **Required** |
| `.pf-v6-c-toolbar__content-section` | `<div>` | Initiates a toolbar content section. This is used to separate static elements from dynamic elements within a content container. There should be no more than one `.pf-v6-c-toolbar__content-section` per `.pf-v6-c-toolbar__content` **Required** |
| `.pf-v6-c-toolbar__expandable-content` | `<div>` | Initiates a toolbar expandable content section. |
| `.pf-m-sticky` | `.pf-v6-c-toolbar` | Modifies toolbar component to be sticky to the top of its container. |
| `.pf-m-full-height` | `.pf-v6-c-toolbar`, `.pf-v6-c-toolbar__content-section`, `.pf-v6-c-toolbar__group` | Modifies toolbar component to full height of its container and removes vertical padding. |
| `.pf-m-static` | `.pf-v6-c-toolbar` | Modifies expandable content section to position itself to the nearest absolutely positioned parent outside of the toolbar component. This is used primarily for masthead toolbar. |
| `.pf-m-primary` | `.pf-v6-c-toolbar` | Modifies toolbar to have primary background color. |
| `.pf-m-secondary` | `.pf-v6-c-toolbar` | Modifies toolbar to have secondary background color. |
| `.pf-m-no-background` | `.pf-v6-c-toolbar` | Modifies toolbar to have no background color. |
| `.pf-m-expanded` | `.pf-v6-c-toolbar__expandable-content` | Modifies expandable content section for the expanded state. |
| `.pf-m-expanded` | `.pf-v6-c-toolbar__item.pf-m-expand-all` | Modifies an expand all button for the expanded state. |
| `.pf-m-icon-button-group` | `.pf-v6-c-toolbar__group` | Initiates icon button group spacing. |
| `.pf-m-filter-group` | `.pf-v6-c-toolbar__group` | Initiates filter group spacing. |
| `.pf-m-chip-container` | `.pf-v6-c-toolbar__content`, `.pf-v6-c-toolbar__content-section`, `.pf-v6-c-toolbar__group` | Modifies the toolbar element for applied filters layout. |
| `.pf-m-overflow-container` | `.pf-v6-c-toolbar__item`, `.pf-v6-c-toolbar__group` | Modifies the toolbar element to hide overflow and respond to available space. Used for horizontal navigation. |
| `.pf-m-expanded` | `.pf-v6-c-toolbar__expandable-content`, `.pf-v6-c-toolbar__toggle` | Modifies the component for the expanded state. |
| `.pf-m-[wrap/nowrap]` | `.pf-v6-c-toolbar__content`, `.pf-v6-c-toolbar__content-section`, `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__item` | Modifies the toolbar element to wrap/not wrap. |
| `.pf-m-align-[start/end]` | `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__item` | Modifies toolbar [main axis](https://developer.mozilla.org/en-US/docs/Glossary/Main_Axis) element alignment. |
| `.pf-m-align-items-[stretch/baseline/start/center/end]` | `.pf-v6-c-toolbar__content`, `.pf-v6-c-toolbar__content-section`, `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__item` | Modifies toolbar element [cross axis](https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis) child alignment. |
| `.pf-m-align-self-[stretch/baseline/start/center/end]` | `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__item` | Modifies toolbar element [cross axis](https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis) self alignment. |

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-v6-c-toolbar__item`, `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__toggle`, `.pf-v6-c-toolbar__expandable-content` |  Indicates that the toolbar element is hidden. **Required** |
| `aria-expanded="[true/false]"` | `.pf-v6-c-toolbar__toggle > .pf-v6-c-button` |  Indicates the the expandable content is hidden/visible. **Required** |
| `aria-controls="[id of expandable content]"` | `.pf-v6-c-toolbar__toggle > .pf-v6-c-button` |  Identifies the expanded content controlled by the toggle button. **Required** |
| `id="[expandable-content_id]"` | `.pf-v6-c-toolbar__expandable-content` | Provides a reference for toggle button description. **Required** |
| `aria-label="Expand all"` | `.pf-v6-c-toolbar__item.pf-m-expand-all` | Provides an accessible label for the expand all item button. **Required** |
| `aria-label="Collapse all"` | `.pf-v6-c-toolbar__item.pf-m-expand-all.pf-m-expanded` | Provides an accessible label for the expand all item button. **Required** |

### Toggle group usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-toggle-group` | `.pf-v6-c-toolbar__group` | Modifies toolbar group to control when, and at which breakpoint, filters will be hidden/shown. By default, all filters are hidden until the specified breakpoint is reached. |
| `.pf-m-[show/hide]` | `.pf-v6-c-toolbar__group.pf-m-toggle-group`, `.pf-v6-c-toolbar__expandable-content` | Modifies toolbar element to hidden. |

### Spacer system

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-[column/row]-gap-[none/sm/md/lg/xl/2xl]` | `.pf-v6-c-toolbar__group`, `.pf-v6-c-toolbar__item` | Modifies toolbar group or item spacing at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
