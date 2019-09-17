---
title: Stack
section: layouts
cssPrefix: pf-l-stack
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import StackRaw from '!raw!./stack-example.hbs';
import StackHasGutterRaw from '!raw!./stack-has-gutter-example.hbs';
import Stack from './stack-example.hbs';
import StackHasGutter from './stack-has-gutter-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const stack = Stack();
  const stackHasGutter = StackHasGutter();
  const headingText = 'Stack';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot} className="is-layout-page">
      <Example heading="Stack example" handlebars={StackRaw} minHeight="30em" className="is-height-flex-column-grow">
        {stack}
      </Example>
      <Example
        heading="Stack example with gutter"
        handlebars={StackHasGutterRaw}
        minHeight="30em"
        className="is-height-flex-column-grow"
      >
        {stackHasGutter}
      </Example>
    </Documentation>
  );
};
```

## Overview

The stack layout is designed to position items vertically, with one item filling the available vertical space.

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-l-stack` | `<div>`, `<section>`, or `<article>` | Initiates the stack layout. |
| `.pf-l-stack__item` | `<div>` | Initiates a stack item. **Required**  |
| `.pf-m-gutter` | `.pf-l-stack` | Adds space between children by using the globally defined gutter value. |
| `.pf-m-fill` | `.pf-l-stack__item` | Specifies which item(s) should fill the avaiable vertical space. |
