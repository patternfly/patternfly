---
title: TabContent
section: components
cssPrefix: pf-c-tab-content
---

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import tabContentExampleRaw from '!!raw-loader!./tab-content-example.hbs';
import TabcontentExample from './tab-content-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const tabContentExample = TabcontentExample();
  const headingText = 'Tab content';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Tab content" handlebars={tabContentExampleRaw}>
        {tabContentExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

Tab content should be used with the [tabs component](/components/Tabs/examples/).

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="tabpanel"` | `.pf-c-tab-content` | Indicates that the element serves as a container for a set of tabs. **Required** |
| `aria-labelledby=[ID of tab element]` | `.pf-c-tab-content` | Provides an accessible name for the tab panel by referring to the tab element that controls it. **Required**
| `id=[ID of tab panel]` | `.pf-c-tab-content` | Provides an ID for the tab panel, and should be used as the value of `aria-controls` on the tab element that controls the panel.  **Required**
| `hidden` | `.pf-c-tab-content` | Indicates that the tab panel is not visible. **Required on all but the active tab panel**
| `tabindex="0"` | `.pf-c-tab-content` | Puts the tab panel in the page tab sequence and facilitates movement to panel content for assistive technology users. **Required**


## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-tab-content` | `<section>` |  Initiates the tab content component. **Required** |
