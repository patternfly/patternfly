---
title: SkiptoContent
section: components
cssPrefix: pf-c-skip-to-content
---

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import skipToContentExampleRaw from '!!raw-loader!./skip-to-content-example.hbs';
import SkiptocontentExample from './skip-to-content-example.hbs';
import docs from '../docs/code.md';
import '../skip-to-content.scss';

export const Docs = docs;

export default (props) => {
  const skipToContentExample = SkiptocontentExample();
  const headingText = 'Skip to content';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example fullPageOnly="true" heading="Skip to content" handlebars={skipToContentExampleRaw}>
        {skipToContentExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

Skip to content allows screen reader and keyboard users to bypass navigation rather than tabbing through it.

When using `.pf-c-skip-to-content` you must provide an `href` attribute whose value corresponds to the `id` attribute of the primary content container for your application. In most cases this is the `<main>` element. For a demo of this see the [page demo](../../../demos/Page/examples), and note the use of `tabindex="-1"` which allows the element to receive focus programmatically.

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `href="[id of main container]"` | `.pf-c-skip-to-content` | Sends focus to the primary content container. **Required** |

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-skip-to-content` | `<a>` |  initiates the skip to content link. |
| `.pf-m-focus` | `.pf-c-skip-to-content` |  Forces display of the focus state. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:focus` pseudo-class. |
