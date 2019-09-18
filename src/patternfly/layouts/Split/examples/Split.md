---
title: Split
section: layouts
cssPrefix: pf-l-split
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import SplitRaw from '!!raw-loader!./split-example.hbs';
import SplitGuttersRaw from '!!raw-loader!./split-gutters-example.hbs';
import Split from './split-example.hbs';
import SplitGutters from './split-gutters-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const split = Split();
  const splitGutters = SplitGutters();
  const headingText = 'Split';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot} className="is-layout-page">
      <Example heading="Split example" handlebars={SplitRaw}>
        {split}
      </Example>
      <Example heading="Split example with gutter" handlebars={SplitGuttersRaw}>
        {splitGutters}
      </Example>
    </Documentation>
  );
};
```

## Overview

The split layout is designed to position items horizontally, with one item filling the available horizontal space.

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-l-split` | `<div>`, `<section>`, or `<article>` | Initiates the split layout. |
| `.pf-l-split__item` | `<div>` | Initiates a split item. **Required** |
| `.pf-m-gutter` | `.pf-l-split` | Adds space between children by using the globally defined gutter value. |
| `.pf-m-fill` | `.pf-l-split__item` | Specifies which item(s) should fill the avaiable horizontal space. |
