---
title: Box Shadow
section: utilities
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import boxShadowSimpleExampleRaw from '!raw!./box-shadow-simple-example.hbs';
import BoxshadowSimpleExample from './box-shadow-simple-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const boxShadowSimpleExample = BoxshadowSimpleExample();
  const headingText = 'Box shadow';

  return (
    <Documentation data={props} docs={Docs} heading={headingText}>
      <Example
        className="box-shadow"
        heading="Boxshadow utility"
        handlebars={boxShadowSimpleExampleRaw}
        minHeight="20em"
      >
        {boxShadowSimpleExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

Box shadow utility

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-u-box-shadow-sm` | `*` |  Applies box-shadow small. |
| `.pf-u-box-shadow-sm-top` | `*` |  Applies box-shadow small top. |
| `.pf-u-box-shadow-sm-right` | `*` |  Applies box-shadow small right. |
| `.pf-u-box-shadow-sm-bottom` | `*` |  Applies box-shadow small bottom. |
| `.pf-u-box-shadow-sm-left` | `*` |  Applies box-shadow small left. |
| `.pf-u-box-shadow-md` | `*` |  Applies box-shadow medium. |
| `.pf-u-box-shadow-md-top` | `*` |  Applies box-shadow medium top. |
| `.pf-u-box-shadow-md-right` | `*` |  Applies box-shadow medium right. |
| `.pf-u-box-shadow-md-bottom` | `*` |  Applies box-shadow medium bottom. |
| `.pf-u-box-shadow-md-left` | `*` |  Applies box-shadow medium left. |
| `.pf-u-box-shadow-lg` | `*` |  Applies box-shadow large. |
| `.pf-u-box-shadow-lg-top` | `*` |  Applies box-shadow large top. |
| `.pf-u-box-shadow-lg-right` | `*` |  Applies box-shadow large right. |
| `.pf-u-box-shadow-lg-bottom` | `*` |  Applies box-shadow large bottom. |
| `.pf-u-box-shadow-lg-left` | `*` |  Applies box-shadow large left. |
