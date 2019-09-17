---
title: Input Group
section: components
cssPrefix: pf-c-input-group
---

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import InputgroupExampleRaw from '!raw!./input-group-example.hbs';
import InputgroupExample from './input-group-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const inputGroupExample = InputgroupExample();
  const headingText = 'Input group';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Inputgroup example" handlebars={InputgroupExampleRaw}>
        {inputGroupExample}
      </Example>
    </Documentation>
  );
};
```

## Overview
Use the input group to extend form controls by adding text, buttons, dropdowns, etc.

## Accessibility
When using the `.pf-c-input-group` always ensure labels are used outside the input group with the `.pf-screen-reader` class applied. You can also make use of the `aria-describedby`, `aria-label`, or `aria-labelledby` attributues. For more information on accessibility and forms see the [form component](../../Form/examples).

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-describedby` | `.pf-c-form-control` |  When using `.pf-c-input-group__text` or `.pf-c-input-group__action` make use of this on the input field. |


## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-input-group` | `<div>` |  Iniaties the input group. **Required** |
| `.pf-c-input-group__text` | `<span>` |  Iniaties the input group text. This can be used to show text, radio, icons, or check boxes. |