---
title: Flex
section: utilities
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import flexEnableExampleRaw from '!!raw-loader!./flex-enable-example.hbs';
import flexDirectionExampleRaw from '!!raw-loader!./flex-direction-example.hbs';
import flexJustifyContentExampleRaw from '!!raw-loader!./flex-justify-content-example.hbs';
import flexAlignItemsExampleRaw from '!!raw-loader!./flex-align-items-example.hbs';
import flexAlignSelfExampleRaw from '!!raw-loader!./flex-align-self-example.hbs';
import flexAlignContentExampleRaw from '!!raw-loader!./flex-align-content-example.hbs';
import flexShrinkExampleRaw from '!!raw-loader!./flex-shrink-example.hbs';
import flexGrowExampleRaw from '!!raw-loader!./flex-grow-example.hbs';
import flexBasisNoneExampleRaw from '!!raw-loader!./flex-basis-none-example.hbs';
import flexFillExampleRaw from '!!raw-loader!./flex-fill-example.hbs';
import flexWrapExampleRaw from '!!raw-loader!./flex-wrap-example.hbs';

import FlexEnableExample from './flex-enable-example.hbs';
import FlexDirectionExample from './flex-direction-example.hbs';
import FlexJustifyContentExample from './flex-justify-content-example.hbs';
import FlexAlignItemsExample from './flex-align-items-example.hbs';
import FlexAlignSelfExample from './flex-align-self-example.hbs';
import FlexAlignContentExample from './flex-align-content-example.hbs';
import FlexShrinkExample from './flex-shrink-example.hbs';
import FlexGrowExample from './flex-grow-example.hbs';
import FlexBasisNoneExample from './flex-basis-none-example.hbs';
import FlexFillExample from './flex-fill-example.hbs';
import FlexWrapExample from './flex-wrap-example.hbs';

import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const flexEnableExample = FlexEnableExample();
  const flexDirectionExample = FlexDirectionExample();
  const flexJustifyContentExample = FlexJustifyContentExample();
  const flexAlignItemsExample = FlexAlignItemsExample();
  const flexAlignSelfExample = FlexAlignSelfExample();
  const flexAlignContentExample = FlexAlignContentExample();
  const flexShrinkExample = FlexShrinkExample();
  const flexGrowExample = FlexGrowExample();
  const flexBasisNoneExample = FlexBasisNoneExample();
  const flexFillExample = FlexFillExample();
  const flexWrapExample = FlexWrapExample();
  const headingText = 'Flex';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} className="flex-examples is-utility-page">
      <Example heading="Enable flex" handlebars={flexEnableExampleRaw}>
        {flexEnableExample}
      </Example>
      <Example heading="Flex direction" handlebars={flexDirectionExampleRaw}>
        {flexDirectionExample}
      </Example>
      <Example heading="Flex justify content" handlebars={flexJustifyContentExampleRaw}>
        {flexJustifyContentExample}
      </Example>
      <Example heading="Flex align items" handlebars={flexAlignItemsExampleRaw}>
        {flexAlignItemsExample}
      </Example>
      <Example heading="Flex align self" handlebars={flexAlignSelfExampleRaw}>
        {flexAlignSelfExample}
      </Example>
      <Example heading="Flex align content" handlebars={flexAlignContentExampleRaw}>
        {flexAlignContentExample}
      </Example>
      <Example heading="Flex shrink" handlebars={flexShrinkExampleRaw}>
        {flexShrinkExample}
      </Example>
      <Example heading="Flex grow" handlebars={flexGrowExampleRaw}>
        {flexGrowExample}
      </Example>
      <Example heading="Flex basis and flex none" handlebars={flexBasisNoneExampleRaw}>
        {flexBasisNoneExample}
      </Example>
      <Example heading="Flex fill" handlebars={flexFillExampleRaw}>
        {flexFillExample}
      </Example>
      <Example heading="Flex wrap" handlebars={flexWrapExampleRaw}>
        {flexWrapExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

For these utilities to have effect, the parent element must be set to `display: flex` or `display: inline-flex`. Breakpoint is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. **Example .pf-u-flex-row-on-lg**

<!-- ## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role` or `aria` | `pf-u-flex` |  accessibility notes. |
 -->

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-u-flex-direction-row{-on-[breakpoint]}`            | `*` |  Sets flex-direction: row |
| `.pf-u-flex-direction-row-reverse{-on-[breakpoint]}`    | `*` |  Sets flex-direction: row-reverse |
| `.pf-u-flex-direction-column{-on-[breakpoint]}`         | `*` |  Sets flex-direction: column |
| `.pf-u-flex-direction-column-reverse{-on-[breakpoint]}` | `*` |  Sets flex-direction: column-reverse |
| `.pf-u-justify-content-flex-start{-on-[breakpoint]}`    | `*` |  Sets justify-content: flex-start |
| `.pf-u-justify-content-flex-end{-on-[breakpoint]}`      | `*` |  Sets justify-content: flex-end |
| `.pf-u-justify-content-center{-on-[breakpoint]}`        | `*` |  Sets justify-content: center |
| `.pf-u-justify-content-space-around{-on-[breakpoint]}`  | `*` |  Sets justify-content: space-around |
| `.pf-u-justify-content-space-between{-on-[breakpoint]}` | `*` |  Sets justify-content: space-between |
| `.pf-u-align-items-flex-start{-on-[breakpoint]}`        | `*` |  Sets align-items: flex-start |
| `.pf-u-align-items-flex-end{-on-[breakpoint]}`          | `*` |  Sets align-items: flex-start |
| `.pf-u-align-items-center{-on-[breakpoint]}`            | `*` |  Sets align-items: center |
| `.pf-u-align-items-baseline{-on-[breakpoint]}`          | `*` |  Sets align-items: baseline |
| `.pf-u-align-items-stretch{-on-[breakpoint]}`           | `*` |  Sets align-items: stretch |
| `.pf-u-align-self-flex-start{-on-[breakpoint]}`         | `*` |  Sets align-self: flex-start |
| `.pf-u-align-self-flex-end{-on-[breakpoint]}`           | `*` |  Sets align-self: flex-end |
| `.pf-u-align-self-center{-on-[breakpoint]}`             | `*` |  Sets align-self: center |
| `.pf-u-align-self-baseline{-on-[breakpoint]}`           | `*` |  Sets align-self: baseline |
| `.pf-u-align-self-stretch{-on-[breakpoint]}`            | `*` |  Sets align-self: stretch |
| `.pf-u-align-content-flex-start{-on-[breakpoint]}`      | `*` |  Sets align-content: flex-start |
| `.pf-u-align-content-flex-end{-on-[breakpoint]}`        | `*` |  Sets align-content: flex-end |
| `.pf-u-align-content-center{-on-[breakpoint]}`          | `*` |  Sets align-content: center |
| `.pf-u-align-content-space-between{-on-[breakpoint]}`   | `*` |  Sets align-content: space-between |
| `.pf-u-align-content-space-around{-on-[breakpoint]}`    | `*` |  Sets align-content: space-around |
| `.pf-u-align-content-stretch{-on-[breakpoint]}`         | `*` |  Sets align-content: stretch |
| `.pf-u-flex-shrink{1 or 0}{-on-[breakpoint]}`           | `*` |  Sets flex-shrink to 1 or 0 |
| `.pf-u-flex-grow{1 or 0}{-on-[breakpoint]}`             | `*` |  Sets flex-grow to 1 or 0 |
| `.pf-u-flex-basis{0 or auto}{-on-[breakpoint]}`         | `*` |  Sets flex-basis to 0 auto |
| `.pf-u-flex-fill{-on-[breakpoint]}`                     | `*` |  Sets flex to 1 1 auto |
| `.pf-u-flex-wrap{-on-[breakpoint]}`                     | `*` |  sets flex-wrap: wrap |
| `.pf-u-flex-nowrap{-on-[breakpoint]}`                   | `*` |  sets flex-wrap: nowrap |
| `.pf-u-flex-wrap-reverse{-on-[breakpoint]}`             | `*` |  sets flex-wrap: wrap-reverse |
