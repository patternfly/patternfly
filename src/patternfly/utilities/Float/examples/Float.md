---
title: Float
section: utilities
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import floatSimpleExampleRaw from '!!raw-loader!./float-simple-example.hbs';
import FloatSimpleExample from './float-simple-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const floatSimpleExample = FloatSimpleExample();
  const headingText = 'Float';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} className="is-utility-page">
      <Example heading="Float simple" handlebars={floatSimpleExampleRaw}>
        {floatSimpleExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

Breakpoint is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. **Example .pf-u-text-left-on-lg**

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-u-float-left{-on-[breakpoint]}` | `*` |  Float element left |
| `.pf-u-float-right{-on-[breakpoint]}` | `*` |  Float element right |
