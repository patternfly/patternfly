---
title: Select
section: components
cssPrefix: pf-c-select
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import SelectSingleExampleRaw from '!raw!./select-single-example.hbs';
import SelectDisabledExampleRaw from '!raw!./select-disabled-example.hbs';
import SelectSingleExpandedExampleRaw from '!raw!./select-single-expanded-example.hbs';
import SelectSingleExpandedSelectedExampleRaw from '!raw!./select-single-expanded-selected-example.hbs';
import SelectSingleTypeaheadExampleRaw from '!raw!./select-single-typeahead-example.hbs';
import SelectSingleTypeaheadExpandedExampleRaw from '!raw!./select-single-typeahead-expanded-example.hbs';
import SelectSingleTypeaheadExpandedSelectedExampleRaw from '!raw!./select-single-typeahead-expanded-selected-example.hbs';
import SelectMultiTypeaheadExampleRaw from '!raw!./select-multi-typeahead-example.hbs';
import SelectMultiTypeaheadExpandedExampleRaw from '!raw!./select-multi-typeahead-expanded-example.hbs';
import SelectMultiTypeaheadExpandedSelectedExampleRaw from '!raw!./select-multi-typeahead-expanded-selected-example.hbs';
import SelectCheckboxExampleRaw from '!raw!./select-checkbox-example.hbs';
import SelectCheckboxExpandedExampleRaw from '!raw!./select-checkbox-expanded-example.hbs';
import SelectCheckboxExpandedSelectedExampleRaw from '!raw!./select-checkbox-expanded-selected-example.hbs';
import SelectPlainExampleRaw from '!raw!./select-plain-example.hbs';
import SelectPlainExpandedExampleRaw from '!raw!./select-plain-expanded-example.hbs';
import SelectIconExampleRaw from '!raw!./select-icon-example.hbs';

import SelectSingleExample from './select-single-example.hbs';
import SelectDisabledExample from './select-disabled-example.hbs';
import SelectSingleExpandedExample from './select-single-expanded-example.hbs';
import SelectSingleExpandedSelectedExample from './select-single-expanded-selected-example.hbs';
import SelectSingleTypeaheadExample from './select-single-typeahead-example.hbs';
import SelectSingleTypeaheadExpandedExample from './select-single-typeahead-expanded-example.hbs';
import SelectSingleTypeaheadExpandedSelectedExample from './select-single-typeahead-expanded-selected-example.hbs';
import SelectMultiTypeaheadExample from './select-multi-typeahead-example.hbs';
import SelectMultiTypeaheadExpandedExample from './select-multi-typeahead-expanded-example.hbs';
import SelectMultiTypeaheadExpandedSelectedExample from './select-multi-typeahead-expanded-selected-example.hbs';
import SelectCheckboxExample from './select-checkbox-example.hbs';
import SelectCheckboxExpandedExample from './select-checkbox-expanded-example.hbs';
import SelectCheckboxExpandedSelectedExample from './select-checkbox-expanded-selected-example.hbs';
import SelectPlainExample from './select-plain-example.hbs';
import SelectPlainExpandedExample from './select-plain-expanded-example.hbs';
import SelectIconExample from './select-icon-example.hbs';

import SelectSingleExampleDoc from '../docs/select-single.md';
import SelectSingleTypeaheadExampleDoc from '../docs/select-single-typeahead.md';
import SelectMultiTypeaheadExampleDoc from '../docs/select-multi-typeahead.md';
import SelectCheckboxExampleDoc from '../docs/select-checkbox.md';
import SelectPlainExampleDoc from '../docs/select-plain.md';
import SelectIconExampleDoc from '../docs/select-icon.md';
import docs from '../docs/code.md';

export const selectSingleExampleDoc = SelectSingleExampleDoc;
export const selectSingleTypeaheadExampleDoc = SelectSingleTypeaheadExampleDoc;
export const selectMultiTypeaheadExampleDoc = SelectMultiTypeaheadExampleDoc;
export const selectCheckboxExampleDoc = SelectCheckboxExampleDoc;
export const selectPlainExampleDoc = SelectPlainExampleDoc;
export const selectIconExampleDoc = SelectIconExampleDoc;
export const Docs = docs;

export default props => {
  const selectSingleExample = SelectSingleExample();
  const selectDisabledExample = SelectDisabledExample();
  const selectSingleExpandedExample = SelectSingleExpandedExample();
  const selectSingleExpandedSelectedExample = SelectSingleExpandedSelectedExample();
  const selectSingleTypeaheadExample = SelectSingleTypeaheadExample();
  const selectSingleTypeaheadExpandedExample = SelectSingleTypeaheadExpandedExample();
  const selectSingleTypeaheadExpandedSelectedExample = SelectSingleTypeaheadExpandedSelectedExample();
  const selectMultiTypeaheadExample = SelectMultiTypeaheadExample();
  const selectMultiTypeaheadExpandedExample = SelectMultiTypeaheadExpandedExample();
  const selectMultiTypeaheadExpandedSelectedExample = SelectMultiTypeaheadExpandedSelectedExample();
  const selectCheckboxExample = SelectCheckboxExample();
  const selectCheckboxExpandedExample = SelectCheckboxExpandedExample();
  const selectCheckboxExpandedSelectedExample = SelectCheckboxExpandedSelectedExample();
  const selectPlainExample = SelectPlainExample();
  const selectPlainExpandedExample = SelectPlainExpandedExample();
  const selectIconExample = SelectIconExample();
  const headingText = 'Select';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Select - single" handlebars={SelectSingleExampleRaw}>
        {selectSingleExample}
      </Example>
      <Example heading="Select - disabled" handlebars={SelectDisabledExampleRaw}>
        {selectDisabledExample}
      </Example>
      <Example heading="Select - single (expanded)" handlebars={SelectSingleExpandedExampleRaw} minHeight="20em">
        {selectSingleExpandedExample}
      </Example>
      <Example
        heading="Select - single (expanded and selected)"
        handlebars={SelectSingleExpandedSelectedExampleRaw}
        docs={selectSingleExampleDoc}
        minHeight="20em"
      >
        {selectSingleExpandedSelectedExample}
      </Example>
      <Example heading="Select - single with typeahead" handlebars={SelectSingleTypeaheadExampleRaw}>
        {selectSingleTypeaheadExample}
      </Example>
      <Example
        heading="Select - single with typeahead (expanded)"
        handlebars={SelectSingleTypeaheadExpandedExampleRaw}
        minHeight="20em"
      >
        {selectSingleTypeaheadExpandedExample}
      </Example>
      <Example
        heading="Select - single with typeahead (expanded and selected)"
        handlebars={SelectSingleTypeaheadExpandedSelectedExampleRaw}
        docs={selectSingleTypeaheadExampleDoc}
        minHeight="20em"
      >
        {selectSingleTypeaheadExpandedSelectedExample}
      </Example>
      <Example heading="Select - multi with typeahead" handlebars={SelectMultiTypeaheadExampleRaw}>
        {selectMultiTypeaheadExample}
      </Example>
      <Example
        heading="Select - multi with typeahead (expanded, chip group expanded)"
        handlebars={SelectMultiTypeaheadExpandedExampleRaw}
        minHeight="20em"
      >
        {selectMultiTypeaheadExpandedExample}
      </Example>
      <Example
        heading="Select - multi with typeahead (expanded, chip group collapsed)"
        handlebars={SelectMultiTypeaheadExpandedSelectedExampleRaw}
        docs={selectMultiTypeaheadExampleDoc}
        minHeight="20em"
      >
        {selectMultiTypeaheadExpandedSelectedExample}
      </Example>
      <Example heading="Select - checkbox" handlebars={SelectCheckboxExampleRaw}>
        {selectCheckboxExample}
      </Example>
      <Example heading="Select - checkbox (expanded)" handlebars={SelectCheckboxExpandedExampleRaw} minHeight="20em">
        {selectCheckboxExpandedExample}
      </Example>
      <Example
        heading="Select - checkbox (expanded and selected with groups)"
        handlebars={SelectCheckboxExpandedSelectedExampleRaw}
        docs={selectCheckboxExampleDoc}
        minHeight="29em"
      >
        {selectCheckboxExpandedSelectedExample}
      </Example>
      <Example heading="Select - plain" handlebars={SelectPlainExampleRaw}>
        {selectPlainExample}
      </Example>
      <Example
        heading="Select - plain (expanded)"
        handlebars={SelectPlainExpandedExampleRaw}
        docs={selectPlainExampleDoc}
        minHeight="20em"
      >
        {selectPlainExpandedExample}
      </Example>
      <Example heading="Select - icon" handlebars={SelectIconExampleRaw} docs={selectIconExampleDoc}>
        {selectIconExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

There are 4 variants of the select component: single select, single select with typeahead, multiple select with typeahead, and a multiple checkbox select. See the examples for more details about each variation.

The single select should be used when the user is selecting an option from a list of items. Although the presentation is similar to the basic dropdown, the underlying HTML and ARIA tag structure is specific to a select list. The selection will replace the default text in the toggle. The selection is highlighted with the list is opened. If the selection is cleared elsewhere (i.e. from the filter bar), the default text is restored.

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-selected="true"` | `.pf-c-select__menu-item` | Should be set programmatically to indicate the active item. |
| `disabled` | `.pf-c-select__toggle` | Disables the dropdown toggle and removes it from keyboard focus. |

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select` | `<div>` |  Initiates the select component. |
| `.pf-c-select__toggle` | `<button>` |  Initiates the select toggle. |
| `.pf-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper. |
| `.pf-c-select__toggle-arrow` | `<i>` |  Initiates the caret to toggle the dropdown. |
| `.pf-c-select__menu` | `<ul>` |  Initiates the select dropdown menu. |
| `.pf-c-select__menu-item` | `<li>` |  Initiates the items in the select dropdown menu. |
| `.pf-c-select__menu-item-icon` | `<i>` |  Initiates the selected item icon. |
| `.pf-m-expanded` | `.pf-c-select` |  Indicates the select is expanded. |
| `.pf-m-selected` | `.pf-c-select__menu-item` |  Indicates the menu item is selected. |
| `.pf-m-disabled` | `div.pf-c-select__toggle` | Modifies to display the select toggle as disabled. This applies to `div.pf-c-select__toggle` and should not be used in lieu of the `disabled` attribute on `button.pf-c-select__toggle`. When this is used, `disabled` should also be added to any form elements in `div.pf-c-select__toggle`|

The single select typeahead should be used when the user is selecting one option from a list of items with the option to narrow the list by typing from the keyboard. Selected items are removed from the list. The user can clear the selection and restore the placeholder text.

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-selected="true"` | `.pf-c-select__menu-item` | Should be set programmatically to indicate the active item. |

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select` | `<div>` |  Initiates the select component. |
| `.pf-c-select__toggle` | `<div>` |  Initiates the select toggle. |
| `.pf-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper. |
| `.pf-c-select__toggle-typeahead` | `input.pf-c-form-control` |  Initiates the input field for typeahead. |
| `.pf-c-select__toggle-clear` | `button.pf-m-plain` |  Initiates a clear button in the toggle. |
| `.pf-c-select__toggle-button` | `<button>` | Initiates a toggle button. |
| `.pf-c-select__toggle-arrow` | `<i>` |  Initiates the caret icon. |
| `.pf-c-select__menu` | `<ul>` |  Initiates the select dropdown menu. |
| `.pf-c-select__menu-item` | `<li>` |  Initiates the items in the select dropdown menu. |
| `.pf-m-expanded` | `.pf-c-select` |  Indicates the select is expanded. |
| `.pf-m-typeahead` | `.pf-c-select__toggle` |  Indicates the select has a typeahead. |

The Dropdown Multi Select should be used when the user is selecting multiple items from a list. The user can narrow the list by typing from the keyboard. The List updates while typing. Selected items create a new chip and are removed from the list. The user may clear selections individually or all at once to restore the placeholder.

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-selected="true"` | `.pf-c-select__menu-item` | Should be set programmatically to indicate the active item. |

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select` | `<div>` |  Initiates the select component. |
| `.pf-c-select__toggle` | `<div>` |  Initiates the select toggle. |
| `.pf-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper so that chips and input field can wrap together. |
| `.pf-c-chip` | `<div>` |  Initiates a chip. (See [chip component](/components/Check/examples/) for more details) |
| `.pf-c-select__toggle-typeahead` | `input.pf-c-form-control` |  Initiates the input field for typeahead. |
| `.pf-c-select__toggle-clear` | `button.pf-m-plain` |  Initiates a clear button in the toggle. |
| `.pf-c-select__toggle-button` | `<button>` | Initiates a toggle button. |
| `.pf-c-select__toggle-arrow` | `<i>` |  Initiates the caret icon. |
| `.pf-c-select__menu` | `<ul>` |  Initiates the select dropdown menu. |
| `.pf-c-select__menu-item` | `<li>` |  Initiates the items in the select dropdown menu. |
| `.pf-m-expanded` | `.pf-c-select` |  Indicates the select is expanded. |
| `.pf-m-typeahead` | `.pf-c-select__toggle` |  Indicates the select has a typeahead. |

The checkbox select can select multiple items using checkboxes. The number of items selected is reflected in a badge in the dropdown toggle. The user may clear items by unchecking or using the clear button. Optionally, items may be grouped.

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select` | `<div>` |  Initiates the select component. |
| `.pf-c-select__toggle` | `<button>` |  Initiates the select toggle. |
| `.pf-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper so that chips and input field can wrap together. |
| `.pf-c-chip` | `<div>` |  Initiates a chip. (See [chip component](/components/Check/examples/) for more details) |
| `.pf-c-select__toggle-typeahead` | `input.pf-c-form-control` |  Initiates the input field for typeahead. |
| `.pf-c-select__toggle-badge` | `<div>` |  Initiates a container for a badge to indicate the number of items checked. * note: This should contain an unread badge * |
| `.pf-c-select__toggle-clear` | `button.pf-m-plain` |  Initiates a clear button in the toggle. |
| `.pf-c-select__toggle-arrow` | `<i>` |  Initiates the caret to toggle the dropdown. |
| `.pf-c-select__menu` | `<div>` |  Initiates the select dropdown menu. |
| `.pf-c-select__menu-item` | `div.pf-c-check` |  Initiates the items in the select dropdown menu. |
| `.pf-c-form` | `<form>` |  Initiates a form for the items in a checkbox select. |
| `.pf-c-form__fieldset` | `<fieldset>` |  Initiates a fieldset for the items in a checkbox select. |
| `.pf-c-select__menu-group` | `<div>` |  Initiates a group within a select menu. |
| `.pf-c-select__menu-group-title` | `<div>` |  Initiates a title for a group with a select menu. |
| `.pf-m-expanded` | `.pf-c-select` |  Indicates the select is expanded. |
| `.pf-m-typeahead` | `.pf-c-select__toggle` |  Indicates the select has a typeahead. |

The plain select variation should be used when you do not want a border applied to the select toggle.

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select` | `<div>` |  Initiates the select component. |
| `.pf-c-select__toggle` | `<button>` |  Initiates the select toggle. |
| `.pf-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper. |
| `.pf-c-select__toggle-arrow` | `<i>` |  Initiates the caret to toggle the dropdown. |
| `.pf-c-select__menu` | `<ul>` |  Initiates the select dropdown menu. |
| `.pf-c-select__menu-item` | `<li>` |  Initiates the items in the select dropdown menu. |
| `.pf-c-select__menu-item-icon` | `<i>` |  Initiates the selected item icon. |
| `.pf-m-expanded` | `.pf-c-select` |  Indicates the select is expanded. |
| `.pf-m-plain` | `.pf-c-select__toggle` |  Modifies to display the toggle with no border. |
| `.pf-m-selected` | `.pf-c-select__menu-item` |  Indicates the menu item is selected. |

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-hidden="true"` | `.pf-c-select__toggle-icon` | Hides the icon from assistive technologies.

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select` | `<div>` |  Initiates the select component. |
| `.pf-c-select__toggle` | `<button>` |  Initiates the select toggle. |
| `.pf-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper. |
| `.pf-c-select__toggle-icon` | `<span>` |  Initiates the icon in the dropdown toggle. |
| `.pf-c-select__toggle-arrow` | `<i>` |  Initiates the caret to toggle the dropdown. |
