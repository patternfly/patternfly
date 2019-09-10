---
title: Overflow Menu
section: components
---

# Design
The overflow menu component condenses actions inside `.pf-c-overflow-menu__content` container into a single dropdown button wrapped in `.pf-c-overflow-menu__control`, then exposes those actions at a defined breakpoint `.pf-m-show{-on-[md, lg, xl]}`.

The overflow menu relies on groups (`.pf-c-overflow-menu__group`) and items (`.pf-c-overflow-menu__item`), with default spacer values. Groups and items can be siblings and/or items can be nested within groups. Modifier selectors adjust spacing based on the type of group. Each modifier applies a unique CSS variable, therefore, the base spacer value for all elements can be customized and item/groups spacers can be themed individually. The default spacer value for items and groups is set to `--pf-c-data-toolbar--spacer--base`, whose value is `--pf-global--spacer--md` or 16px.


```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import overflowMenuSimpleExampleRaw from '!raw!./overflow-menu-simple-example.hbs';
import overflowMenuGroupTypesExampleRaw from '!raw!./overflow-menu-group-types-example.hbs';
import overflowMenuSimpleAdditionalOptionsExampleRaw from '!raw!./overflow-menu-simple-additional-options-example.hbs';
import overflowMenuPersistentExampleRaw from '!raw!./overflow-menu-persistent-example.hbs';

import OverflowMenuSimpleExample from './overflow-menu-simple-example.hbs';
import OverflowMenuGroupTypesExample from './overflow-menu-group-types-example.hbs';
import OverflowMenuSimpleAdditionalOptionsExample from './overflow-menu-simple-additional-options-example.hbs';
import OverflowMenuPersistentExample from './overflow-menu-persistent-example.hbs';

import overflowMenuSimpleExampleDoc from '../docs/overflow-menu-simple.md';
import overflowMenuGroupTypesExampleDoc from '../docs/overflow-menu-group-types.md';
import overflowMenuSimpleAdditionalOptionsExampleDoc from '../docs/overflow-menu-simple-additional-options.md';
import overflowMenuPersistentExampleDoc from '../docs/overflow-menu-persistent.md';
import overflowMenuIntroDoc from '../docs/overflow-menu-intro.md';

import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const overflowMenuSimpleExample = OverflowMenuSimpleExample();
  const overflowMenuGroupTypesExample = OverflowMenuGroupTypesExample();
  const overflowMenuSimpleAdditionalOptionsExample = OverflowMenuSimpleAdditionalOptionsExample();
  const overflowMenuPersistentExample = OverflowMenuPersistentExample();
  const headingText = 'Overflow menu';
  const variablesRoot = 'pf-c-overflow-menu';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example
        intro={overflowMenuIntroDoc}
        heading="Overflow menu simple (responsive)"
        handlebars={overflowMenuSimpleExampleRaw}
        docs={overflowMenuSimpleExampleDoc}
        className="is-layout-page"
      >
        {overflowMenuSimpleExample}
      </Example>
      <Example
        heading="Overflow menu group types"
        handlebars={overflowMenuGroupTypesExampleRaw}
        docs={overflowMenuGroupTypesExampleDoc}
        className="is-layout-page"
      >
        {overflowMenuGroupTypesExample}
      </Example>
      <Example
        heading="Overflow menu multiple groups - additional options"
        handlebars={overflowMenuSimpleAdditionalOptionsExampleRaw}
        docs={overflowMenuSimpleAdditionalOptionsExampleDoc}
      >
        {overflowMenuSimpleAdditionalOptionsExample}
      </Example>
      <Example
        heading="Overflow menu persistent - additional options"
        handlebars={overflowMenuPersistentExampleRaw}
        docs={overflowMenuPersistentExampleDoc}
        className="is-layout-page"
      >
        {overflowMenuPersistentExample}
      </Example>
    </Documentation>
  );
};
```

### Default spacing for items and groups:

| Class | CSS Variable | Computed Value |
| -- | -- | -- |
| `.pf-c-overflow-menu__item` | `--pf-c-overflow-menu__item--spacer` | `16px` |
| `.pf-c-overflow-menu__group` | `--pf-c-overflow-menu__group--spacer` | `16px` |

### Toggle group accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-c-overflow-menu__item`, `.pf-c-overflow-menu__group`, `.pf-c-overflow-menu__shared-item` |  Indicates that the overflow menu element is hidden. **Required** |

### Overflow menu item types

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-overflow-menu__item` | `<div>` | Initiates the overflow menu component item. **Required** |
| `.pf-c-overflow-menu__group` | `<div>` | Initiates the overflow menu component group. |

The action group consists of a primary and secondary action. Any additional actions are part of the overflow control dropdown.

### Overflow menu group types
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-overflow-menu__group` | `<div>` | Initiates the overflow menu component group. |
| `.pf-m-button-group` | `.pf-c-overflow-menu__group` | Modifies overflow menu group spacing. Spacer value is set to `var(--pf-c-overflow-menu__group--m-button-group--spacer)`. Child `.pf-c-button` spacer value is set to `var(--pf-c-overflow-menu__group--m-button-group--space-items)`. |
| `.pf-m-icon-button-group` | `.pf-c-overflow-menu__group` | Modifies overflow menu group spacing. Spacer value is set to `var(--pf-c-overflow-menu__group--m-icon-button-group--spacer)`. Child `.pf-c-button.pf-m-button-plain` spacer value is set to `var(--pf-c-overflow-menu__group--m-icon-button-group--space-items)`. |

When additional options in the overflow menu exist, the overflow dropdown persists. When the viewport expands beyond the prescribed breakpoint, the overflow dropdown remains visible.

### Overflow menu has additional options
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-additional-options` | `.pf-c-overflow-menu__control` | Modifies overflow menu control visibility. |

When an item is a member of an overflow menu, but needs to remain visible, the `.pf-m-persistent` class is applied to the item and parent group, if applicable.

### Overflow menu has additional options


| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-persistent` | `.pf-c-overflow-menu__item`, `.pf-c-overflow-menu__group` | Modifies overflow menu group/item visibility. |

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-c-overflow-menu__item`, `.pf-c-overflow-menu__group`, `.pf-c-overflow-menu__shared-item` |  Indicates that the overflow menu element is hidden. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-overflow-menu` | `<div>` |  Initiates the overflow menu component. **Required** |
| `.pf-c-overflow-menu__item` | `<div>` | Initiates an overflow menu item. **Required** |
| `.pf-c-overflow-menu__group` | `<div>` | Initiates an overflow menu group. |
| `.pf-c-overflow-menu__content` | `<div>` | Initiates an overflow menu content container. |
| `.pf-c-overflow-menu__control` | `<div>` | Initiates an overflow menu control element. |
| `.pf-c-overflow-menu__shared-item` | `.pf-c-dropdown__menu > li` | Initiates a shared item element. This class controls when a member of the `.pf-c-overflow-menu__control` dropdown shows and hides the list item. |
| `.pf-m-button-group` | `.pf-c-overflow-menu__group` | Modifies overflow menu group spacing. Spacer value is set to `var(--pf-c-overflow-menu__group--m-button-group--spacer)`. Child spacer value is set to `var(--pf-c-overflow-menu__group--m-button-group--space-items)`. |
| `.pf-m-icon-button-group` | `.pf-c-overflow-menu__group` | Modifies overflow menu group spacing. Spacer value is set to `var(--pf-c-overflow-menu__group--m-icon-button-group--spacer)`. Child spacer value is set to `var(--pf-c-overflow-menu__group--m-icon-button-group--space-items)`. |
| `.pf-m-additional-options` | `.pf-c-overflow-menu__control` | Modifies overflow menu control visibility. |
| `.pf-m-persistent` | `.pf-c-overflow-menu__item`, `.pf-c-overflow-menu__group` | Modifies overflow menu group/item visibility. |
| `.pf-m-show{-on-[md, lg, xl]}` | `.pf-c-overflow-menu` |  Specifies at which breakpoint overflow menu items and groups are shown. **Required** |
