---
title: Tabs
section: components
cssPrefix: pf-c-tabs
---

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

// Raw
import tabsPrimaryExampleRaw from '!!raw-loader!./tabs-primary.hbs';
import tabsPrimaryOverflowExampleRaw from '!!raw-loader!./tabs-primary-overflow.hbs';

import tabsSecondaryExampleRaw from '!!raw-loader!./tabs-secondary.hbs';
import tabsSecondaryOverflowExampleRaw from '!!raw-loader!./tabs-secondary-overflow.hbs';

import tabsPrimarySecondaryExampleRaw from '!!raw-loader!./tabs-primary-secondary.hbs';

import tabsFilledExampleRaw from '!!raw-loader!./tabs-filled.hbs';

import tabsNavExampleRaw from '!!raw-loader!./tabs-nav.hbs';

// Primary tabs
import TabsPrimaryExample from './tabs-primary.hbs';
import TabsPrimaryOverflowExample from './tabs-primary-overflow.hbs';
import tabsPrimaryDocs from '../docs/tabs-primary.md';
import tabsPrimaryOverflowDocs from '../docs/tabs-primary-overflow.md';

// Secondary tabs
import TabsSecondaryExample from './tabs-secondary.hbs';
import TabsSecondaryOverflowExample from './tabs-secondary-overflow.hbs';
import tabsSecondaryDocs from '../docs/tabs-secondary.md';
import tabsSecondaryOverflowDocs from '../docs/tabs-secondary-overflow.md';

// Primary and Secondary
import TabsPrimarySecondaryExample from './tabs-primary-secondary.hbs';

// Filled tabs
import TabsFilledExample from './tabs-filled.hbs';
import tabsFilledDocs from '../docs/tabs-filled.md';

// Nav example
import TabsNavExample from './tabs-nav.hbs';
import tabsNavDocs from '../docs/tabs-nav.md';

import docs from '../docs/code.md';

export const headingText = 'Tabs';
export const Docs = docs;

export default (props) => {
  const tabsPrimaryExample = TabsPrimaryExample();
  const tabsPrimaryOverflowExample = TabsPrimaryOverflowExample();
  const tabsSecondaryExample = TabsSecondaryExample();
  const tabsSecondaryOverflowExample = TabsSecondaryOverflowExample();
  const tabsPrimarySecondaryExample = TabsPrimarySecondaryExample();
  const tabsFilledExample = TabsFilledExample();
  const tabsNavExample = TabsNavExample();
  
  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Primary tabs" handlebars={tabsPrimaryExampleRaw} docs={tabsPrimaryDocs}>
        {tabsPrimaryExample}
      </Example>
      <Example
        heading="Primary tabs overflow"
        handlebars={tabsPrimaryOverflowExampleRaw}
        docs={tabsPrimaryOverflowDocs}
      >
        {tabsPrimaryOverflowExample}
      </Example>
      <Example heading="Secondary tabs" handlebars={tabsSecondaryExampleRaw} docs={tabsSecondaryDocs}>
        {tabsSecondaryExample}
      </Example>
      <Example
        heading="Secondary tabs overflow"
        handlebars={tabsSecondaryOverflowExampleRaw}
        docs={tabsSecondaryOverflowDocs}
      >
        {tabsSecondaryOverflowExample}
      </Example>
      <Example heading="Primary tabs with secondary tabs" handlebars={tabsPrimarySecondaryExampleRaw}>
        {tabsPrimarySecondaryExample}
      </Example>
      <Example heading="Filled tabs" handlebars={tabsFilledExampleRaw} docs={tabsFilledDocs}>
        {tabsFilledExample}
      </Example>
      <Example heading="Tabs using the nav element" handlebars={tabsNavExampleRaw} docs={tabsNavDocs}>
        {tabsNavExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

The tabs component should only be used to change content views within a page. The similar-looking but semantically different [horizontal nav component](https://pf4.patternfly.org/components/Nav/examples/) is available for general navigation use cases.

Tabs should be used with the [tab content component](/components/TabContent/examples/).

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-controls=[ID of tab content element]` | `.pf-c-tabs__button` | Identifies the section controlled by the tab. **Required**       |

### Usage

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-tabs` | `<div>`, `<nav>` | Creates a tab component. **Required**     |
| `.pf-c-tabs__scroll-button` | `<button>` | Creates a scroll button. **Required**     |
| `.pf-c-tabs__list` | `<ul>` | Creates a tab list. **Required**          |
| `.pf-c-tabs__item` | `<li>` | Creates a tab item. **Required**          |
| `.pf-c-tabs__button` | `<button>` | Creates a tab button. **Required**        |
| `id="{id of tabs + id of tab button}"` | `.pf-c-tabs__button` | Uniquely identifies the tab button within the tab component. **Required** |

### Modifiers

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-current`| `.pf-c-tabs__item` | Highlights the current tab. |

### Note

Whenever a `.pf-m-current` tab is scrolled beyond the width of the container, the appropriate scroll button should be highlighted using `.pf-m-start-current` or `.pf-m-end-current` to indicate that the current tab exists in that direction.

## Modifiers

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-start`          | `.pf-c-tabs` | Enables the first directional scroll button.     |
| `.pf-m-start-current`  | `.pf-c-tabs` | Highlights the first directional scroll button.  |
| `.pf-m-end`            | `.pf-c-tabs` | Enables the second directional scroll button.    |
| `.pf-m-end-current`    | `.pf-c-tabs` | Highlights the second directional scroll button. |

### Note

Secondary tabs can be placed as an independent component anywhere within an interface. If placed directly adjacent to a set of primary tabs, they adopt a small amount of styling to properly align the two tab sets.

If secondary tabs cannot be placed directly adjacent to primary tabs, `.pf-m-tabs-secondary` can be applied to a directly adjacent container `<div>` with `.pf-c-tabs` as a child to achieve the same effect.

### Modifiers

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-tabs-secondary` | `.pf-c-tabs` or `<div>` | Creates a secondary tabs component. **Required** |

### Note

Whenever a `.pf-m-current` tab is scrolled beyond the width of the container, the appropriate scroll button should be highlighted using `.pf-m-start-current` or `.pf-m-end-current` to indicate that the current tab exists in that direction.

## Modifiers

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-start` | `.pf-c-tabs` | Enables the first directional scroll button.     |
| `.pf-m-start-current` | `.pf-c-tabs` | Highlights the first directional scroll button.  |
| `.pf-m-end` | `.pf-c-tabs` | Enables the second directional scroll button.    |
| `.pf-m-end-current` | `.pf-c-tabs` | Highlights the second directional scroll button. |
| `.pf-m-hover` | `.pf-c-tabs__button` | Adds the hover style to the tabs button. |
| `.pf-m-active` | `.pf-c-tabs__button` | Adds the active style to the tabs button. |
| `.pf-m-focus` | `.pf-c-tabs__button` | Adds the focus style to the tabs button. |
| `.pf-m-secondary` | `.pf-c-tabs__button` | Adds the secondary styles to the button. |

## Modifiers

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-fill`  | `.pf-c-tabs` | Enables the filled tab list layout. **Required** |

### Note

Whenever a list of tabs is unique on the current page, it can be used in a `<nav>` element. Cases where the same set of tabs are duplicated in multiple regions on a page (e.g. cards on a dashboard) are less likely to benefit from using the `<nav>` element.

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="Local"` | `nav.pf-c-tabs` | Gives the `<nav>` element an accessible name. **Required when `.pf-c-tabs` is used with `<nav>`**
| `aria-label="Local secondary"` | `nav.pf-c-tabs.pf-m-tabs-secondary` | Gives the `<nav>` element an accessible name. **Required when `.pf-c-tabs.pf-m-tabs-secondary` is used with `<nav>`**

### Usage

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-tabs__button` | `<a>`, `<button>` | Creates a tab link/button. **Note: `<a>` should be used when there is a URL associated with the tab, and should only be used when `.pf-c-tabs` is used with `<nav>`.** **Required** |
