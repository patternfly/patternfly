---
title: Display
section: utilities
---

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import displayInlineBlockExampleRaw from '!raw!./display-inline-block-example.hbs';
import displayBlockExampleRaw from '!raw!./display-block-example.hbs';
import displayFlexExampleRaw from '!raw!./display-flex-example.hbs';
import displayGridExampleRaw from '!raw!./display-grid-example.hbs';
import displayInlineFlexExampleRaw from '!raw!./display-inline-flex-example.hbs';
import displayInlineExampleRaw from '!raw!./display-inline-example.hbs';
import displayTableExampleRaw from '!raw!./display-table-example.hbs';
import displayNoneExampleRaw from '!raw!./display-none-example.hbs';

import DisplayInlineBlockExample from './display-inline-block-example.hbs';
import DisplayBlockExample from './display-block-example.hbs';
import DisplayFlexExample from './display-flex-example.hbs';
import DisplayGridExample from './display-grid-example.hbs';
import DisplayInlineFlexExample from './display-inline-flex-example.hbs';
import DisplayInlineExample from './display-inline-example.hbs';
import DisplayTableExample from './display-table-example.hbs';
import DisplayNoneExample from './display-none-example.hbs';

import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const displayInlineBlockExample = DisplayInlineBlockExample();
  const displayBlockExample = DisplayBlockExample();
  const displayFlexExample = DisplayFlexExample();
  const displayGridExample = DisplayGridExample();
  const displayInlineFlexExample = DisplayInlineFlexExample();
  const displayInlineExample = DisplayInlineExample();
  const displayTableExample = DisplayTableExample();
  const displayNoneExample = DisplayNoneExample();
  const headingText = 'Display';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} className="is-utility-page">
      <Example heading="Display inline-block" handlebars={displayInlineBlockExampleRaw}>
        {displayInlineBlockExample}
      </Example>
      <Example heading="Display block" handlebars={displayBlockExampleRaw}>
        {displayBlockExample}
      </Example>
      <Example heading="Display flex" handlebars={displayFlexExampleRaw}>
        {displayFlexExample}
      </Example>
      <Example heading="Display inline flex" handlebars={displayInlineFlexExampleRaw}>
        {displayInlineFlexExample}
      </Example>
      <Example heading="Display grid" handlebars={displayGridExampleRaw}>
        {displayGridExample}
      </Example>
      <Example heading="Display inline" handlebars={displayInlineExampleRaw}>
        {displayInlineExample}
      </Example>
      <Example heading="Display table" handlebars={displayTableExampleRaw}>
        {displayTableExample}
      </Example>
      <Example heading="Display none" handlebars={displayNoneExampleRaw}>
        {displayNoneExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

Breakpoint is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. **Example .pf-u-display-inline-block-on-lg**


## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-u-display-inline-block{-on-[breakpoint]}` | `*` |  Sets display: inline-block |
| `.pf-u-display-block{-on-[breakpoint]}` | `*` |  Sets display: block |
| `.pf-u-display-inline{-on-[breakpoint]}` | `*` |  Sets display: inline |
| `.pf-u-display-flex{-on-[breakpoint]}` | `*` |  Sets display: flex |
| `.pf-u-display-inline-flex{-on-[breakpoint]}` | `*` |  Sets display: inline-flex |
| `.pf-u-display-table{-on-[breakpoint]}` | `*` |  Sets display: table |
| `.pf-u-display-table-row{-on-[breakpoint]}` | `*` |  Sets display: table-row |
| `.pf-u-display-table-cell{-on-[breakpoint]}` | `*` |  Sets display: table-cell |
| `.pf-u-display-none{-on-[breakpoint]}` | `*` |  Sets display: none |
