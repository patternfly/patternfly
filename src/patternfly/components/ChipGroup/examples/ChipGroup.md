---
title: Chip Group
section: components
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ChipGroupToolbarCollapsedExampleRaw from '!raw!./chip-group-toolbar-collapsed-example.hbs';
import ChipGroupToolbarExpandedExampleRaw from '!raw!./chip-group-toolbar-expanded-example.hbs';
import ChipGroupSelectExpandedExampleRaw from '!raw!./chip-group-select-expanded-example.hbs';
import ChipGroupSelectCollapsedExampleRaw from '!raw!./chip-group-select-collapsed-example.hbs';

import chipGroupToolbarCollapsedExample from './chip-group-toolbar-collapsed-example.hbs';
import chipGroupToolbarExpandedExample from './chip-group-toolbar-expanded-example.hbs';
import chipGroupToolbarDoc from '../docs/chip-group-toolbar.md';

import chipGroupSelectExpandedExample from './chip-group-select-expanded-example.hbs';
import chipGroupSelectCollapsedExample from './chip-group-select-collapsed-example.hbs';
import chipGroupMultiSelectDoc from '../docs/chip-group-multi-select.md';

import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const ChipGroupToolbarCollapsedExample = chipGroupToolbarCollapsedExample();
  const ChipGroupToolbarExpandedExample = chipGroupToolbarExpandedExample();
  const ChipGroupSelectExpandedExample = chipGroupSelectExpandedExample();
  const ChipGroupSelectCollapsedExample = chipGroupSelectCollapsedExample();
  const headingText = 'Chip group';
  const variablesRoot = 'pf-c-chip-group';

  return (
    <Documentation data={props} heading={headingText} variablesRoot={variablesRoot}>
      <Example
        heading="Chip group toolbar (collapsed)"
        handlebars={ChipGroupToolbarCollapsedExampleRaw}
        className="is-light-preview"
      >
        {ChipGroupToolbarCollapsedExample}
      </Example>
      <Example
        heading="Chip group toolbar (expanded)"
        handlebars={ChipGroupToolbarExpandedExampleRaw}
        className="is-light-preview"
        docs={chipGroupToolbarDoc}
      >
        {ChipGroupToolbarExpandedExample}
      </Example>
      <Example
        heading="Chip group multi-select (collapsed)"
        handlebars={ChipGroupSelectCollapsedExampleRaw}
        className="is-light-preview"
      >
        {ChipGroupSelectCollapsedExample}
      </Example>
      <Example
        heading="Chip group multi-select (expanded)"
        handlebars={ChipGroupSelectExpandedExampleRaw}
        className="is-light-preview"
        docs={chipGroupMultiSelectDoc}
      >
        {ChipGroupSelectExpandedExample}
      </Example>
    </Documentation>
  );
};
```

## Overview 

A chip-group used in a toolbar require the modifier `.pf-m-toolbar` which styles the group's background-color and border-radius. Multiple chip-groups can exist in the toolbar depending on the size of the group that is being filtered from and its parent container should handle the spacing between the chip groups. Categories can be labelled by using  `.pf-c-chip-group__label` and its heading level should be based on the context in which this component exists on the page. When groups of chips overflow they will wrap to the next line. This overflow is indicated by a chip with the modifier `.pf-m-overflow` that acts as a button to show/hide the overflown chips by expanding the height of the container they belong to.

The chip group requires the [chip component](../../Chip/examples).

## Accessibility

**All single chip accessibility and usage requirements apply.**

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-chip-group` | `<ul>` | Initiates the container used to group chips. **Required.** |
| `.pf-c-chip-group__label` | `<li> <span>` | Initiates the label for a group of chips. |
| `.pf-c-button` | `<button>` | Initiates the button used to show overflown chips. |
| `.pf-m-toolbar` | `.pf-c-chip-group` | Modifies `.pf-c-chip-group` to be used in a toolbar. **Required** |

## Overview

A chip-group used in a multi-select do not require a modifier as its parent will handle its styles. When it overflows outside of the group, the chips will wrap to the next line. This overflow is indicated by a chip with the modifier `.pf-m-overflow` that acts as a button to show/hide the overflown chips by expanding the height of the container they belong to. 

The chip group requires the [chip component](../../Chip/examples).

## Accessibility

**All single chip accessibility and usage requirements apply.**

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-chip-group` | `<ul>` | Initiates the container used to group chips. **Required.** |
| `.pf-c-button` | `<button>` | Initiates the button used to expand overflown chips. |

