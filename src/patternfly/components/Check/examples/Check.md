---
title: Check
section: components
---

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import CheckExampleRaw from '!raw!./check-example.hbs';
import CheckExample from './check-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const checkExample = CheckExample();
  const headingText = 'Check';
  const variablesRoot = 'pf-c-check';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Check example" handlebars={CheckExampleRaw}>
        {checkExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

The Check component is provided for use cases outside of forms. If it is used without label text ensure some sort of label for assistive technologies. (for example: `aria-label`)

If you extend this component or modify the styles of this component, then make sure any hover styles defined are applied to the clickable elements, like `<input>` or `<label>` since hover styles are used to convey the clickable target area of an element. To maximize the target area, use the example html where the `<label>` is the wrapping element.

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `disabled` | `<input type="checkbox">` | Indicates that the element is unavailable and removes it from keyboard focus. **Required when input is disabled** |

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-check` | `<div>`, `<label>` |  Initiates the check component. **Required**  |
| `.pf-c-check__input` | `<input type="checkbox">` |  Initiates a check input. **Required**  |
| `.pf-c-check__label` | `<label>`, `<span>` |  Initiates a label. **Required**  |
| `.pf-m-disabled` | `.pf-c-check__label` |  Initiates a disabled style for labels. **Required when input is disabled** |