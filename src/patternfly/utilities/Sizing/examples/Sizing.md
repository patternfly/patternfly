---
title: Sizing
section: components
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

// Raw
import sizingExampleWidthPercentRaw from '!!raw-loader!./sizing-width-percent.hbs';
import sizingExampleWidthViewportRaw from '!!raw-loader!./sizing-width-viewport.hbs';
import sizingExampleHeightPercentRaw from '!!raw-loader!./sizing-height-percent.hbs';
import sizingExampleHeightViewportRaw from '!!raw-loader!./sizing-height-viewport.hbs';

// Width
import SizingExampleWidthPercent from './sizing-width-percent.hbs';
import SizingExampleWidthViewport from './sizing-width-viewport.hbs';
import sizingWidthPercentDocs from '../docs/sizing-width-percent.md';
import sizingWidthViewportDocs from '../docs/sizing-width-viewport.md';

// Height
import SizingExampleHeightPercent from './sizing-height-percent.hbs';
import SizingExampleHeightViewport from './sizing-height-viewport.hbs';
import sizingHeightPercentDocs from '../docs/sizing-height-percent.md';
import sizingHeightViewportDocs from '../docs/sizing-height-viewport.md';

import docs from '../docs/code.md';

export const Docs = docs;
export const headingText = 'Sizing';

export default (props) => {
  const sizingExampleWidthPercent = SizingExampleWidthPercent();
  const sizingExampleWidthViewport = SizingExampleWidthViewport();
  const sizingExampleHeightPercent = SizingExampleHeightPercent();
  const sizingExampleHeightViewport = SizingExampleHeightViewport();

  return (
    <Documentation data={props} docs={Docs} heading={headingText} className="is-utility-page">
      <Example
        heading="Width -  base and percentage units"
        handlebars={sizingExampleWidthPercentRaw}
        docs={sizingWidthPercentDocs}
      >
        {sizingExampleWidthPercent}
      </Example>
      <Example
        heading="Width - viewport units"
        fullPageOnly="true"
        handlebars={sizingExampleWidthViewportRaw}
        docs={sizingWidthViewportDocs}
      >
        {sizingExampleWidthViewport}
      </Example>
      <Example
        heading="Height -  base and percentage units"
        handlebars={sizingExampleHeightPercentRaw}
        docs={sizingHeightPercentDocs}
        className="is-tall-body"
      >
        {sizingExampleHeightPercent}
      </Example>
      <Example
        heading="Height - viewport units"
        fullPageOnly="true"
        handlebars={sizingExampleHeightViewportRaw}
        docs={sizingHeightViewportDocs}
      >
        {sizingExampleHeightViewport}
      </Example>
    </Documentation>
  );
};
```

## Usage note

These utilities are not recommended for general layout purposes. They should primarily be used to enable responsive behaviors of certain components through breakpoints.

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-u-w-initial{-on-[breakpoint]}` | `*` | Sets width: initial (auto) |
| `.pf-u-w-inherit{-on-[breakpoint]}` | `*` | Sets width: inherit |
| `.pf-u-w-0{-on-[breakpoint]}`  | `*` | Sets width: 0% |
| `.pf-u-w-25{-on-[breakpoint]}` | `*` | Sets width: 25% |
| `.pf-u-w-33{-on-[breakpoint]}` | `*` | Sets width: calc(100% / 3) |
| `.pf-u-w-50{-on-[breakpoint]}` | `*` | Sets width: 50% |
| `.pf-u-w-66{-on-[breakpoint]}` | `*` | Sets width: calc(100% / 3 * 2) |
| `.pf-u-w-75{-on-[breakpoint]}` | `*` | Sets width: 75% |
| `.pf-u-w-100{-on-[breakpoint]}` | `*` | Sets width: 100% |

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-u-w-25vw{-on-[breakpoint]}` | `*` | Sets width: 25vw |
| `.pf-u-w-33vw{-on-[breakpoint]}` | `*` | Sets width: calc(100vw / 3) |
| `.pf-u-w-50vw{-on-[breakpoint]}` | `*` | Sets width: 50vw |
| `.pf-u-w-66vw{-on-[breakpoint]}` | `*` | Sets width: calc(100vw / 3 * 2) |
| `.pf-u-w-75vw{-on-[breakpoint]}` | `*` | Sets width: 75vw |
| `.pf-u-w-100vw{-on-[breakpoint]}` | `*` | Sets width: 100vw |

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-u-h-initial{-on-[breakpoint]}` | `*` | Sets height: initial (auto) |
| `.pf-u-h-inherit{-on-[breakpoint]}` | `*` | Sets height: inherit |
| `.pf-u-h-0{-on-[breakpoint]}` | `*` | Sets height: 0% |
| `.pf-u-h-25{-on-[breakpoint]}`| `*` | Sets height: 25% |
| `.pf-u-h-33{-on-[breakpoint]}`| `*` | Sets height: calc(100% / 3) |
| `.pf-u-h-50{-on-[breakpoint]}`| `*` | Sets height: 50% |
| `.pf-u-h-66{-on-[breakpoint]}`| `*` | Sets height: calc(100% / 3 * 2) |
| `.pf-u-h-75{-on-[breakpoint]}`| `*` | Sets height: 75% |
| `.pf-u-h-100{-on-[breakpoint]}` | `*` | Sets height: 100% |

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-u-h-25vh{-on-[breakpoint]}` | `*` | Sets height: 25vh |
| `.pf-u-h-33vh{-on-[breakpoint]}` | `*` | Sets height: calc(100vh / 3) |
| `.pf-u-h-50vh{-on-[breakpoint]}` | `*` | Sets height: 50vh |
| `.pf-u-h-66vh{-on-[breakpoint]}` | `*` | Sets height: calc(100vh / 3 * 2) |
| `.pf-u-h-75vh{-on-[breakpoint]}` | `*` | Sets height: 75vh |
| `.pf-u-h-100vh{-on-[breakpoint]}` | `*` | Sets height: 100vh |
