---
title: Context Selector
section: components
cssPrefix: pf-c-context-selector
---

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ContextSelectorExampleRaw from '!raw!./context-selector-example.hbs';
import ContextSelectorExample from './context-selector-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const contextselectorexample = ContextSelectorExample();
  const headingText = 'Context selector';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Context selector example" handlebars={ContextSelectorExampleRaw} minHeight="20em">
        {contextselectorexample}
      </Example>
    </Documentation>
  );
};
```

## Accessibility

Added after react implementation


| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-context-selector` | `<div>` | Initiates a context selector.|
| `.pf-c-context-selector__toggle` | `<button>` | Initiates a toggle. |
| `.pf-c-context-selector__toggle-text` | `<span>` | Initiates text inside the toggle. |
| `.pf-c-context-selector__toggle-icon` | `<i>` | Inititiates icon inside the toggle. |
| `.pf-c-context-selector__menu` | `<div>` | Initiaties a menu |
| `.pf-c-context-selector__menu-input` | `<div>` | Initiates a container for the input group. |
| `.pf-c-context-selector__menu-list` | `<ul>` | Initiaties an unordered list of menu items that sits under the input container. |
| `.pf-c-context-selector__menu-list-item` | `<li>` | Initiaties a menu item. |
| `.pf-m-expanded` | `.pf-c-context-selector` | Modifies for the expanded state. |
