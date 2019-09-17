---
title: Data Toolbar
section: components
cssPrefix: pf-c-data-toolbar
---
## Overview

As the data toolbar component is a hybrid layout and component, some of its elements are presentational, while some require accessibility support.

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import dataToolbarItemsExampleRaw from '!raw!./data-toolbar-items-example.hbs';
import dataToolbarGroupTypesExampleRaw from '!raw!./data-toolbar-group-types-example.hbs';
import dataToolbarToggleGroupExampleRaw from '!raw!./data-toolbar-toggle-group-example.hbs';
import dataToolbarSelectedFiltersExampleRaw from '!raw!./data-toolbar-selected-filters-example.hbs';
import dataToolbarSpacersExampleRaw from '!raw!./data-toolbar-spacers-example.hbs';
import dataToolbarGroupSpacersExampleRaw from '!raw!./data-toolbar-group-spacers-example.hbs';
import dataToolbarStackedExampleRaw from '!raw!./data-toolbar-stacked-example.hbs';

import DataToolbarItemsExample from './data-toolbar-items-example.hbs';
import DataToolbarGroupTypesExample from './data-toolbar-group-types-example.hbs';
import DataToolbarToggleGroupExample from './data-toolbar-toggle-group-example.hbs';
import DataToolbarSelectedFiltersExample from './data-toolbar-selected-filters-example.hbs';
import DataToolbarSpacersExample from './data-toolbar-spacers-example.hbs';
import DataToolbarGroupSpacersExample from './data-toolbar-group-spacers-example.hbs';
import DataToolbarStackedExample from './data-toolbar-stacked-example.hbs';

import dataToolbarIntroExampleDoc from '../docs/data-toolbar-intro.md';
import dataToolbarGroupTypesExampleDoc from '../docs/data-toolbar-group-types.md';
import dataToolbarChildTypesExampleDoc from '../docs/data-toolbar-child-types.md';
import dataToolbarSpacersIntroExampleDoc from '../docs/data-toolbar-spacers-intro.md';
import dataToolbarSpacersExampleDoc from '../docs/data-toolbar-spacers.md';
import dataToolbarToggleGroupIntroExampleDoc from '../docs/data-toolbar-toggle-group-intro.md';
import dataToolbarToggleGroupExampleDoc from '../docs/data-toolbar-toggle-group.md';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const dataToolbarItemsExample = DataToolbarItemsExample();
  const dataToolbarGroupTypesExample = DataToolbarGroupTypesExample();
  const dataToolbarToggleGroupExample = DataToolbarToggleGroupExample();
  const dataToolbarSelectedFiltersExample = DataToolbarSelectedFiltersExample();
  const dataToolbarSpacersExample = DataToolbarSpacersExample();
  const dataToolbarGroupSpacersExample = DataToolbarGroupSpacersExample();
  const dataToolbarStackedExample = DataToolbarStackedExample();

  const headingText = 'Data toolbar';

  return (
    <Documentation
      data={props}
      docs={Docs}
      heading={headingText}
      variablesRoot={variablesRoot}
      className="toolbar-documentation"
    >
      <Example
        intro={dataToolbarIntroExampleDoc}
        className="is-layout-page"
        heading="Data toolbar items"
        handlebars={dataToolbarItemsExampleRaw}
        docs={dataToolbarChildTypesExampleDoc}
      >
        {dataToolbarItemsExample}
      </Example>
      <Example
        intro={dataToolbarSpacersIntroExampleDoc}
        className="is-layout-page"
        heading="Adjusting item spacers"
        handlebars={dataToolbarSpacersExampleRaw}
      >
        {dataToolbarSpacersExample}
      </Example>
      <Example
        className="is-layout-page"
        heading="Adjusting group spacers"
        handlebars={dataToolbarGroupSpacersExampleRaw}
        docs={dataToolbarSpacersExampleDoc}
      >
        {dataToolbarGroupSpacersExample}
      </Example>
      <Example
        heading="Data toolbar group types"
        handlebars={dataToolbarGroupTypesExampleRaw}
        minHeight=""
        docs={dataToolbarGroupTypesExampleDoc}
      >
        {dataToolbarGroupTypesExample}
      </Example>
      <Example
        heading="Data toolbar toggle group (responsive)"
        handlebars={dataToolbarToggleGroupExampleRaw}
        intro={dataToolbarToggleGroupIntroExampleDoc}
        docs={dataToolbarToggleGroupExampleDoc}
      >
        {dataToolbarToggleGroupExample}
      </Example>
      <Example
        heading="Data toolbar selected filters"
        handlebars={dataToolbarSelectedFiltersExampleRaw}
        minHeight="27rem"
      >
        {dataToolbarSelectedFiltersExample}
      </Example>
      <Example heading="Data toolbar stacked" handlebars={dataToolbarStackedExampleRaw}>
        {dataToolbarStackedExample}
      </Example>
    </Documentation>
  );
};
```

Data toolbar relies on groups (`.pf-c-data-toolbar__group`) and items (`.pf-c-data-toolbar__item`), with default spacer values. Groups and items can be siblings and/or items can be nested within groups. Modifier selectors adjust spacing based on the type of group or item. Each modifier applies a unique CSS variable, therefore, the base spacer value for all elements can be customized and item/groups spacers can be themed individually. The default spacer value for items and groups is set to `--pf-c-data-toolbar--spacer--base`, whose value is `--pf-global--spacer--md` or 16px.

### Default spacing for items and groups:
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

### Available breakpoints are: `-on-md, -on-lg, -on-xl, -on-2xl`.

### Data toolbar group types
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-filter-group` | `.pf-c-data-toolbar__group` | Modifies toolbar group spacing. Spacer value is set to `var(--pf-c-data-toolbar__group--m-filter-group--spacer)`. Child spacer value is set to `var(--pf-c-data-toolbar__group--m-filter-group--space-items)`. |
| `.pf-m-icon-button-group` | `.pf-c-data-toolbar__group` | Modifies toolbar group spacing. Spacer value is set to `var(--pf-c-data-toolbar__group--m-toggle-group--spacer)`. Child spacer value is set to `var(--pf-c-data-toolbar__group--m-icon-button-group--space-items)`. |
| `.pf-m-button-group` | `.pf-c-data-toolbar__group` | Modifies toolbar group spacing. Spacer value is set to `var(--pf-c-data-toolbar__group--m-toggle-group--spacer)`. Child spacer value is set to `var(--pf-c-data-toolbar__group--m-button-group--space-items)`. |

### Data toolbar item types
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-data-toolbar__item` | `<div>` | Initiates the toolbar component item. **Required** |
| `.pf-c-data-toolbar__group` | `<div>` | Initiates the toolbar component group. |
| `.pf-m-separator` | `.pf-c-data-toolbar__item` | Modifies item to a separator. |

<h3 class="Example_heading">Data toolbar spacers</h3>

In some instances, it may be necessary to adjust spacing explicitly where items are being hidden/revealed. For example, if a `.pf-m-toggle-group` is adjacent to an element being hidden/shown or hidden/revealed, the spacing may appear to be inconsistent. If possible, rely on modifier values. Available spacer modifiers are `.pf-m-spacer-{none, sm, md, lg}{-on-md, -on-lg, -on-xl}` and `.pf-m-space-items-{none, sm, md, lg}{-on-md, -on-lg, -on-xl}`. These modifiers will overwrite existing modifiers provided by `.pf-c-data-toolbar`.

### Data toolbar spacers
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-spacer-{none, sm, md, lg}{-on-[breakpoint]}` | `.pf-c-data-toolbar__group`, `.pf-c-data-toolbar__item` | Modifies toolbar group or item spacing. |
| `.pf-m-space-items-{none, sm, md, lg}{-on-[breakpoint]}` | `.pf-c-data-toolbar__group` | Modifies toolbar group child spacing. |

### Toggle group modifier
The `.pf-m-toggle-group` controls when, and at which breakpoint, filters will be hidden and revealed. By default, all filters are hidden until the specified breakpoint is reached. `.pf-m-reveal-on-{md, lg, xl}` controls when filters are revealed and when the toggle button is hidden.

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-c-data-toolbar__item`, `.pf-c-data-toolbar__group`, `.pf-c-data-toolbar__toggle`, `.pf-c-data-toolbar__expandable-content` |  Indicates that the toggle group element is hidden. **Required** |
| `aria-expanded="true"` | `.pf-c-data-toolbar__toggle > .pf-c-button` |  Indicates that the expandable content is visible. **Required** |
| `aria-expanded="false"` | `.pf-c-data-toolbar__toggle > .pf-c-button` |  Indicates the the expandable content is hidden. **Required** |
| `aria-controls="[id of expandable content]"` | `.pf-c-data-toolbar__toggle > .pf-c-button` |  Identifies the expanded content controlled by the toggle button. **Required** |
| `id="[expandable-content_id]"` | `.pf-c-data-toolbar__expandable-content` | Provides a reference for toggle button description. **Required** |

## Responsive attributes

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-haspopup="true"` | `.pf-c-data-toolbar__toggle > .pf-c-button` | When expandable content appears above content (mobile viewport), `aria-haspopup="true"` should be applied to indicate that focus should be trapped. **Required** |

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-reveal{-on-[breakpoint]}` | `.pf-c-data-toolbar__group.pf-m-toggle-group`, `.pf-c-data-toolbar__expandable-content` | Modifies toolbar element visibility at breakpoint. This selector must be applied consistently to toggle group and expandable content. |
| `.pf-m-shared-item` | `.pf-c-data-toolbar__item`, `.pf-c-data-toolbar__group` | Identifies a toolbar item or group that appear both within `pf-m-toggle-group` and `pf-c-data-toolbar__expandable-content`. At smaller viewports, filters within `.pf-m-toggle-group` are hidden in `.pf-c-toolbar__content` and visible in `.pf-c-toolbar__expandable-content`. As the viewport scales, filters are visible in `.pf-c-toolbar__content` and hidden in `.pf-c-toolbar__expandable-content`. |
| `.pf-m-expanded` | `.pf-c-data-toolbar__expandable-content` | Modifies the component for the expanded state. |
| `.pf-m-clear` | `.pf-c-data-toolbar__expandable-content .pf-c-data-toolbar__item` | Positions clear all filters button. |

## Usage

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
| `.pf-m-clear` | `.pf-c-data-toolbar__expandable-content .pf-c-data-toolbar__item` | Positions clear all filters button. |

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-c-data-toolbar__item`, `.pf-c-data-toolbar__group`, `.pf-c-data-toolbar__toggle`, `.pf-c-data-toolbar__expandable-content` |  Indicates that the toggle group element is hidden. **Required** |
| `aria-expanded="true"` | `.pf-c-data-toolbar__toggle > .pf-c-button` |  Indicates that the expandable content is visible. **Required** |
| `aria-expanded="false"` | `.pf-c-data-toolbar__toggle > .pf-c-button` |  Indicates the the expandable content is hidden. **Required** |
| `aria-controls="[id of expandable content]"` | `.pf-c-data-toolbar__toggle > .pf-c-button` |  Identifies the expanded content controlled by the toggle button. **Required** |
| `id="[expandable-content_id]"` | `.pf-c-data-toolbar__expandable-content` | Provides a reference for toggle button description. **Required** |

## Toggle group usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-toggle-group` | `.pf-c-data-toolbar__group` | Modifies toolbar group to control when, and at which breakpoint, filters will be hidden and revealed. By default, all filters are hidden until the specified breakpoint is reached. |
| `.pf-m-reveal{-on-[breakpoint]}` | `.pf-c-data-toolbar__group.pf-m-toggle-group`, `.pf-c-data-toolbar__expandable-content` | Modifies toolbar element to hidden at breakpoint. This selector must be applied consistently to toggle group and expandable content. |
| `.pf-m-shared-item` | `.pf-c-data-toolbar__item`, `.pf-c-data-toolbar__group` | Identifies a toolbar item or group that appear within toggle group and expandable content. |


## Spacer system

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-spacer-{none, sm, md, lg, xl}{-on-[breakpoint]}` | `.pf-c-data-toolbar__group`, `.pf-c-data-toolbar__item` | Modifies toolbar group or item spacing. |
| `.pf-m-space-items-{none, sm, md, lg, xl}{-on-[breakpoint]}` | `.pf-c-data-toolbar__group` | Modifies toolbar group child spacing. |
