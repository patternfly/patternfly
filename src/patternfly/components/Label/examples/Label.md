---
title: Label
section: components
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import labelExampleRaw from '!raw!./label-example.hbs';
import LabelExample from './label-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const labelExample = LabelExample();
  const headingText = 'Label';
  const variablesRoot = 'pf-c-label';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Label component" handlebars={labelExampleRaw}>
        {labelExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

Labels can be used in a variety of components and can adjust in font size to match that of the component it lives in. For example, labels can be used in tables. Specifically, the compact table has a modifier that adjusts its font size, so when using a label in this table, it's important to also add its respective modifier.

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-label` | `<span>` | Iniates a label. |
| `.pf-m-compact` | `.pf-c-label` | Modifies label for a compact table. |