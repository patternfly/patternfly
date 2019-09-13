---
title: Accessibility
section: utilities
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import srOnlyExampleRaw from '!raw!./accessibility-screen-reader-example.hbs';
import visibleExampleRaw from '!raw!./accessibility-visible-example.hbs';
import hiddenExampleRaw from '!raw!./accessibility-hidden-example.hbs';
import SrOnlyExample from './accessibility-screen-reader-example.hbs';
import VisibleExample from './accessibility-visible-example.hbs';
import HiddenExample from './accessibility-hidden-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const srOnlyExample = SrOnlyExample();
  const visibleExample = VisibleExample();
  const hiddenExample = HiddenExample();
  const headingText = 'Accessibility';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} className="is-utility-page">
      <Example heading="Screen reader only" handlebars={srOnlyExampleRaw}>
        {srOnlyExample}
      </Example>
      <Example heading="Visible" handlebars={visibleExampleRaw}>
        {visibleExample}
      </Example>
      <Example heading="Hidden" handlebars={hiddenExampleRaw}>
        {hiddenExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

Breakpoint is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. **Example .pf-u-screen-reader-on-lg**

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-u-screen-reader{-on-[breakpoint]}` | `*` |  Visually hides element, but leaves accessible to assistive technologies |
| `.pf-u-visible{-on-[breakpoint]}` | `*` |  Unsets `.pf-u-screen-reader` and `.pf-screen-reader` |
