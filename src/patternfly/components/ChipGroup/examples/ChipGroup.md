---
title: Chip Group
section: components
cssPrefix: pf-c-chip-group
---

import ToolbarCollapsedExampleRaw from '!!raw-loader!./chip-group-toolbar-collapsed-example.hbs';
import ToolbarExpandedExampleRaw from '!!raw-loader!./chip-group-toolbar-expanded-example.hbs';
import SelectExpandedExampleRaw from '!!raw-loader!./chip-group-select-expanded-example.hbs';
import SelectCollapsedExampleRaw from '!!raw-loader!./chip-group-select-collapsed-example.hbs';
import ToolbarCollapsedExample from './chip-group-toolbar-collapsed-example.hbs';
import ToolbarExpandedExample from './chip-group-toolbar-expanded-example.hbs';
import SelectExpandedExample from './chip-group-select-expanded-example.hbs';
import SelectCollapsedExample from './chip-group-select-collapsed-example.hbs';

<Example
  title="Chip group toolbar (collapsed)"
  handlebars={ToolbarCollapsedExampleRaw}
  className="is-light-preview"
  html={ToolbarCollapsedExample()} />

<Example
  title="Chip group toolbar (expanded)"
  handlebars={ToolbarExpandedExampleRaw}
  className="is-light-preview"
  html={ToolbarExpandedExample()} />

<Example
  title="Chip group multi-select (collapsed)"
  handlebars={SelectCollapsedExampleRaw}
  className="is-light-preview"
  html={SelectCollapsedExample()} />

<Example
  title="Chip group multi-select (expanded)"
  handlebars={SelectExpandedExampleRaw}
  className="is-light-preview"
  html={SelectExpandedExample()} />

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

