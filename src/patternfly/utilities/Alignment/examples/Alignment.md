---
title: Alignment
section: utilities
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import alignmentSimpleExampleRaw from '!raw!./alignment-simple-example.hbs';
import AlignmentSimpleExample from './alignment-simple-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const alignmentSimpleExample = AlignmentSimpleExample();
  const headingText = 'Alignment';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} className="is-utility-page">
      <Example heading="Alignment simple" handlebars={alignmentSimpleExampleRaw}>
        {alignmentSimpleExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

Breakpoint is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. **Example .pf-u-text-left-on-lg**

<!-- ## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role` or `aria` | `pf-u-alignment` |  accessibility notes. |
 -->

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-u-text-align-left{-on-[breakpoint]}` | `*` |  Aligns text left |
| `.pf-u-text-align-center{-on-[breakpoint]}` | `*` |  Aligns text center |
| `.pf-u-text-align-right{-on-[breakpoint]}` | `*` |  Aligns text right |
| `.pf-u-text-align-justify{-on-[breakpoint]}` | `*` |  Aligns text justify |
