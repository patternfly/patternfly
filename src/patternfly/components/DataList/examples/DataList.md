---
title: Data List
section: components
---
## Overview

The DataList component provides a flexible alternative to the Table component, wherein individual data points may or may not exist within each row. DataList relies upon PatternFly layouts to achieve desired presentation within `pf-c-data-list__cell`s. DataLists do not have headers. If headers are required, use the [table component](../../Table/examples).

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import DataListSimpleExampleRaw from '!raw!./data-list-simple-example.hbs';
import DataListSimpleH2ExampleRaw from '!raw!./data-list-simple-h2-example.hbs';
import DataListCheckActionExampleRaw from '!raw!./data-list-check-action-example.hbs';
import DataListExpandableExampleRaw from '!raw!./data-list-expandable-example.hbs';
import DataListWidthExampleRaw from '!raw!./data-list-width-example.hbs';

import DataListSimpleExample from './data-list-simple-example.hbs';
import DataListSimpleH2Example from './data-list-simple-h2-example.hbs';
import DataListCheckActionExample from './data-list-check-action-example.hbs';
import DataListExpandableExample from './data-list-expandable-example.hbs';
import DataListWidthExample from './data-list-width-example.hbs';

import DataListSimpleExampleDoc from '../docs/data-list-simple.md';
import DataListSimpleH2ExampleDoc from '../docs/data-list-simple-h2.md';
import DataListCheckActionExampleDoc from '../docs/data-list-check-action.md';
import DataListExpandableExampleDoc from '../docs/data-list-expandable.md';
import DataListWidthExampleDoc from '../docs/data-list-width.md';

import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const dataListSimpleExample = DataListSimpleExample();
  const dataListSimpleH2Example = DataListSimpleH2Example();
  const dataListCheckActionExample = DataListCheckActionExample();
  const dataListExpandableExample = DataListExpandableExample();
  const dataListWidthExample = DataListWidthExample();
  const headingText = 'Data list';
  const variablesRoot = 'pf-c-data-list';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Data list simple" handlebars={DataListSimpleExampleRaw} docs={DataListSimpleExampleDoc}>
        {dataListSimpleExample}
      </Example>
      <Example
        heading="Data list simple with headings"
        handlebars={DataListSimpleH2ExampleRaw}
        docs={DataListSimpleH2ExampleDoc}
      >
        {dataListSimpleH2Example}
      </Example>
      <Example
        heading="Data list checkboxes, actions and additional cells"
        handlebars={DataListCheckActionExampleRaw}
        docs={DataListCheckActionExampleDoc}
      >
        {dataListCheckActionExample}
      </Example>
      <Example
        heading="Data list expandable"
        handlebars={DataListExpandableExampleRaw}
        docs={DataListExpandableExampleDoc}
      >
        {dataListExpandableExample}
      </Example>
      <Example heading="Data list width modifiers" handlebars={DataListWidthExampleRaw} docs={DataListWidthExampleDoc}>
        {dataListWidthExample}
      </Example>
    </Documentation>
  );
};
```

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="list"`       | `.pf-c-data-list` | Indicates that the data list is a list. **Required** |
| `aria-label`        | `.pf-c-data-list`       | Provides an accessible name for the data list. **Required** |
| `aria-labelledby`   | `.pf-c-data-list__item` | Provides an accessible description for data list item. **Required** |
| `id`                | `.pf-c-data-list__cell`, `.pf-c-data-list__cell *`  | Provides a reference for data list item description. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-data-list` | `<ul>` | Initiates a data list. **Required** |
| `.pf-c-data-list__item` | `<li>` | Initiates a data list item. **Required** |
| `.pf-c-data-list__item-row` | `<div>` | Initiates a data list item row. **Required** |
| `.pf-c-data-list__item-content` | `<div>` | Initiates a container for data list content. **Required**|
| `.pf-c-data-list__cell` | `*` | Initiates a data list content cell. **Required** |
| `.pf-m-align-left` | `.pf-c-data-list__cell` | Modifies a data list cell to not grow and align-left when its the first data-list__cell element. For example use `.pf-c-data-list__icon`. |
| `.pf-m-no-fill` | `.pf-c-data-list__cell` | Modifies a data list cell to not fill the available horizontal space. |
| `.pf-m-align-right` | `.pf-c-data-list__cell` | Modifies a data list cell to align-right. |


### Usage
When a list item includes more than one block of content, it can be difficult for some screen reader users to discern where one list item ends and the next one begins. A simple way to provide better separation of list items is to define the primary content section as a heading. Headings are useful for indicating a new section of contents, but also provide an easy way for screen reader users to navigate to specific sections on the page. The heading level should be based on the context in which the DataList component is being used. For example, if the heading for the section that contains the DataList is a level 3, then `h4` elements should be used in the DataList list items.

### Data list checkbox/action button notes

**All simple data list accessibility and usage requirements apply.**

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="[descriptive text]"`  | `.pf-c-data-list__action` > `.pf-c-button`  | Provides an accessible label buttons. **Required** |
| `aria-labelledby="{title_cell_id}"`  | `.pf-c-data-list__check` > `.pf-c-check__input`   | Creates an accessible label for the checkbox based on the title cell. **Required** |
| `aria-labelledby="{title_cell_id} {data_list_action_id}"`  | `.pf-c-data-list__action` > `.pf-c-button`   | Creates an accessible label for the action button using the title cell and button label **Required** |
| `id`  | `.pf-c-data-list__cell > *`, `.pf-c-data-list__check` > `.pf-c-check__input`, `.pf-c-data-list__action` > `.pf-c-button` | Provides a reference for interactive elements. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-data-list__item-control` | `<div>` | Initiates a container for data list controls. For example, add `.pf-c-data-list__check` here. **Required** |
| `.pf-c-data-list__item-action` | `<div>` | Initiates a container for the data list actions. For example, add `.pf-c-data-list__action` here. **Required** |
| `.pf-c-data-list__check`  | `<div>` | Initiates a data list check cell. **Required** |
| `.pf-c-data-list__action` | `<div>` | Initiates a data list action button cell. **Required** |
| `.pf-m-hidden{-on-[breakpoint]}` | `.pf-c-data-list__item-action` | Hides an actions container at a given breakpoint, or hides it at all breakpoints with `.pf-m-hidden`. |
| `.pf-m-visible{-on-[breakpoint]}` | `.pf-c-data-list__item-action` | Shows an actions container at a given breakpoint. |

### Data list expandable notes

**All simple data list accessibility and usage requirements apply.**

**All data list checkbox/action button accessibility and usage requirements apply.**

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="true"` | `.pf-c-data-list__toggle` > `.pf-c-button` | Indicates that the expandable content is visible. **Required**|
| `hidden` | `.pf-c-data-list__expandable-content` | Indicates that the expandable content is hidden. **Required**|
| `aria-label="[descriptive text]"` | `.pf-c-data-list__toggle` > `.pf-c-button` | Provides an accessible name for toggle button. **Required**|
| `aria-labelledby="{title_cell_id} {button_id}"` | `.pf-c-data-list__toggle` > `.pf-c-button` | Establishes relationship between aria-label text and toggle button. **Required**
| `id="{button_id}"` | `.pf-c-data-list__toggle` > `.pf-c-button` | Provides a reference for toggle button description. **Required** |
| `aria-controls="[id of element controlled]"` | `.pf-c-data-list__toggle` > `.pf-c-button`    | Identifies the section controlled by the toggle button. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-data-list__item-control` | `<div>` | Initiates a container for data list controls. For example, add `.pf-c-data-list__toggle` here. **Required** |
| `.pf-c-data-list__toggle` | `<div>` | Initiates a toggle button. |
| `.pf-c-data-list__toggle-icon` | `<i>` | Initiates a toggle icon. |
| `.pf-c-data-list__icon`  | `<i>` | Initiates a data list icon. |
| `.pf-c-data-list__expandable-content` | `<div>` | Initiates an expandable content container. |
| `.pf-c-data-list__expandable-content-body` | `<div>` | Initiates an expandable content container body. **Required** when `.pf-c-data-list__expandable-content` is used. |
| `.pf-m-expanded` | `.pf-c-table__item` | Modifies for expanded state. |
| `.pf-m-no-padding` | `.pf-c-data-list__expandable-content-body` | Removes padding for the expandable content body. |
| `.pf-m-icon` | `.pf-c-data-list__cell` | Modifies a data list cell to not grow and align-left when its the first data-list__cell element. Use `.pf-c-data-list__icon`. |

### Data list width notes

**All simple data list accessibility and usage requirements apply.**

**All data list checkbox/action button accessibility and usage requirements apply.**

**All expandable data list accessibility and usage requirements apply.**

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-controls="[id of element controlled]"` | `.pf-c-data-list__toggle` > `.pf-c-button`    | Identifies the section controlled by the toggle button. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-flex-{1, 2, 3, 4, 5}` | `.pf-c-data-list__cell` | Percentage based modifier for `.pf-c-data-list__cell` widths. |
