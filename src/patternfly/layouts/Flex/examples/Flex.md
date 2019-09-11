---
title: Flex
section: layouts
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import flexBasicExampleRaw from '!raw!./flex-basic-example.hbs';
import flexSpacingExampleRaw from '!raw!./flex-spacing-example.hbs';
import flexLayoutExampleRaw from '!raw!./flex-layout-example.hbs';
import flexLayoutColumnExampleRaw from '!raw!./flex-layout-column-example.hbs';
import flexLayoutResponsiveExampleRaw from '!raw!./flex-layout-responsive-example.hbs';
import flexAlignmentExampleRaw from '!raw!./flex-alignment-example.hbs';
import flexJustificationExampleRaw from '!raw!./flex-justification-example.hbs';

import FlexBasicExample from './flex-basic-example.hbs';
import FlexSpacingExample from './flex-spacing-example.hbs';
import FlexLayoutExample from './flex-layout-example.hbs';
import FlexLayoutColumnExample from './flex-layout-column-example.hbs';
import FlexLayoutResponsiveExample from './flex-layout-responsive-example.hbs';
import FlexAlignmentExample from './flex-alignment-example.hbs';
import FlexJustificationExample from './flex-justification-example.hbs';

import flexIntroDoc from '../docs/flex-intro.md';
import flexBasicExampleDoc from '../docs/flex-basic.md';
import flexSpacingExampleDoc from '../docs/flex-spacing.md';
import flexLayoutExampleDoc from '../docs/flex-layout.md';
import flexLayoutColumnExampleDoc from '../docs/flex-layout-column.md';
import flexLayoutResponsiveExampleDoc from '../docs/flex-layout-responsive.md';
import flexAlignmentExampleDoc from '../docs/flex-alignment.md';
import flexJustificationExampleDoc from '../docs/flex-justification.md';

import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const flexBasicExample = FlexBasicExample();
  const flexSpacingExample = FlexSpacingExample();
  const flexLayoutExample = FlexLayoutExample();
  const flexLayoutColumnExample = FlexLayoutColumnExample();
  const flexLayoutResponsiveExample = FlexLayoutResponsiveExample();
  const flexAlignmentExample = FlexAlignmentExample();
  const flexJustificationExample = FlexJustificationExample();
  const headingText = 'Flex layout system';
  const variablesRoot = 'pf-l-flex';

  return (
    <Documentation data={props}
      docs={Docs}
      heading={headingText}
      variablesRoot={variablesRoot}
      className="flex-documentation is-layout-page"
    >
      <Example intro={flexIntroDoc} heading="Flex basics" handlebars={flexBasicExampleRaw} docs={flexBasicExampleDoc}>
        {flexBasicExample}
      </Example>
      <Example heading="Flex spacing" handlebars={flexSpacingExampleRaw} docs={flexSpacingExampleDoc}>
        {flexSpacingExample}
      </Example>
      <Example heading="Flex layout modifiers" handlebars={flexLayoutExampleRaw} docs={flexLayoutExampleDoc}>
        {flexLayoutExample}
      </Example>
      <Example
        heading="Column layout modifiers"
        handlebars={flexLayoutColumnExampleRaw}
        docs={flexLayoutColumnExampleDoc}
      >
        {flexLayoutColumnExample}
      </Example>
      <Example
        heading="Responsive layout modifiers"
        handlebars={flexLayoutResponsiveExampleRaw}
        docs={flexLayoutResponsiveExampleDoc}
      >
        {flexLayoutResponsiveExample}
      </Example>
      <Example heading="Flex alignment" handlebars={flexAlignmentExampleRaw} docs={flexAlignmentExampleDoc}>
        {flexAlignmentExample}
      </Example>
      <Example heading="Flex justification" handlebars={flexJustificationExampleRaw} docs={flexJustificationExampleDoc}>
        {flexJustificationExample}
      </Example>
    </Documentation>
  );
};
```

The flex layout is based on the CSS Flex properties where the layout determines how a flex item will grow or shrink to fit the space available in its container. The system relies on a default spacer value that is applied to flex items.

### Default spacing for:
- Flex items (not last child): `margin-right: 16px`.
- Nested `.pf-l-flex` containers (not last child): `margin-right: 16px`.
- `.pf-m-column` direct descendants (not first child): `margin-bottom: 16px`.
- `.pf-m-column` nested `.pf-l-flex` containers (not last child): `margin-bottom: 16px`.

### Features:
- `.pf-l-flex` is infinitely nestable and can be used to group items within.
- `.pf-m-spacer-{xs,sm,md,lg,xl,2xl,3xl}` can be applied to parent or direct children and changes the spacer value for only the element to which it is applied. Responsive spacers can be used by appending `{-on-[breakpoint]}` to `.pf-m-spacer-{size}`. Example: `.pf-m-spacer-lg-on-xl`.
- `.pf-m-space-items-{xs,sm,md,lg,xl,2xl,3xl}` can be applied to `.pf-l-flex` only and changes the spacing of direct children only. Responsive spacers can be used by appending `{-on-[breakpoint]}` to `.pf-m-space-items-{size}`. Example: `.pf-m-space-items-lg-on-xl`.

### Available breakpoints are: `-on-sm, -on-md, -on-lg, -on-xl`.

### Use `.pf-l-flex` when:
- Content dictates layout and elements wrap when necessary.
- A rigid grid is not necessary/wanted.

### `.pf-l-flex` is different than a utility class in that:
- It contains multiple css declarations and does not use the !important tag.
- Does not require wrapping elements in columns or rows.
- Break dependency upon adding utility classes to each child.
- It can be applied to container elements or components.

# The CSS approach, by keeping specificity low on base class properties and resetting css variable values at higher specificities, allows any spacer property to be overwritten with a single selector (specificity of 10 or greater).

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-l-flex` | `*` |  Initiates flex layout. **Required** |
| `.pf-l-flex__item` | `.pf-l-flex > *` |  Identifies a flex item. **Optional** |

# Applying `.pf-m-spacer-{size}` to direct descendants of `.pf-l-flex` will override css variable value.
# Applying `.pf-m-space-items-{size}` to `.pf-l-flex` will override css variable values for direct descendants, excluding last child. This spacing can be overridden for direct descendant with `.pf-m-spacer-{size}`.
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-spacer-{none, xs, sm, md, lg, xl, 2xl}{-on-[breakpoint]}` | `.pf-l-flex > *` |  Modifies spacer value. |
| `.pf-m-item-spacing-{none, xs, sm, md, lg, xl, 2xl}{-on-[breakpoint]}` | `.pf-l-flex` |  Modifies all direct descendant spacer values. |

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-inline-flex{-on-[breakpoint]}` | `.pf-l-flex` | Modifies display property to inline-flex. |
| `.pf-m-grow{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies flex-grow property to 1. |
| `.pf-m-shrink{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies flex-shrink property to 1. |
| `.pf-m-full-width{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies flex item to full width of parent. |
| `.pf-m-flex-1{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies flex shorthand property to 1 0 0. |
| `.pf-m-flex-2{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies flex shorthand property to 2 0 0. |
| `.pf-m-flex-3{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies flex shorthand property to 3 0 0. |
| `.pf-m-flex-default{-on-[breakpoint]}` | `.pf-l-flex > *` | Resets flex shorthand property to 0 1 auto. |
| `.pf-m-flex-none{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies flex shorthand property to none. |

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-column{-on-[breakpoint]}` | `.pf-l-flex` |  Modifies flex-direction property to column. |

## Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-column{-on-[breakpoint]}` | `.pf-l-flex`  |  Modifies flex-direction property to column. |
| `.pf-m-row{-on-[breakpoint]}` | `.pf-l-flex`  |  Modifies flex-direction property to row. |

# Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-align-right{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies margin-left property to auto. |
| `.pf-m-align-left{-on-[breakpoint]}` | `.pf-l-flex > *` | Resets margin-left property 0. |
| `.pf-m-align-self-flex-start{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies align-self property to flex-start. |
| `.pf-m-align-self-flex-end{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies align-self property to flex-end. |
| `.pf-m-align-self-flex-center{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies align-self property to center. |
| `.pf-m-align-self-flex-baseline{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies align-self property to baseline. |
| `.pf-m-align-self-flex-stretch{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies align-self property to stretch. |

# Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-justify-content-flex-end{-on-[breakpoint]}` | `.pf-l-flex` |  Modifies justification property and descendant spacing. |
| `.pf-m-justify-content-flex-space-between{-on-[breakpoint]}` | `.pf-l-flex` |  Modifies justification property and descendant spacing. |
| `.pf-m-justify-content-flex-start{-on-[breakpoint]}` | `.pf-l-flex` |  Modifies justification property and descendant spacing, used primarily to reset spacing to default. |

## Modifiers

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-flex{-on-[breakpoint]}` | `.pf-l-flex` | Initializes or resets display property to flex. |
| `.pf-m-inline-flex{-on-[breakpoint]}` | `.pf-l-flex` | Modifies display property to inline-flex. |
| `.pf-m-column-reverse{-on-[breakpoint]}` | `.pf-l-flex` | Modifies flex-direction property to column-reverse. |
| `.pf-m-row-reverse{-on-[breakpoint]}` | `.pf-l-flex` | Modifies flex-direction property to row-reverse. |
| `.pf-m-wrap{-on-[breakpoint]}` | `.pf-l-flex` | Modifies flex-wrap property to wrap. |
| `.pf-m-wrap-reverse{-on-[breakpoint]}` | `.pf-l-flex` | Modifies flex-wrap property to wrap-reverse. |
| `.pf-m-nowrap{-on-[breakpoint]}` | `.pf-l-flex` | Modifies flex-wrap property to nowrap. |
| `.pf-m-justify-content-flex-start{-on-[breakpoint]}` | `.pf-l-flex` | Modifies justify-content property to flex-start. |
| `.pf-m-justify-content-flex-end{-on-[breakpoint]}` | `.pf-l-flex` | Modifies justify-content property to flex-end. |
| `.pf-m-justify-content-center{-on-[breakpoint]}` | `.pf-l-flex` | Modifies justify-content property to center. |
| `.pf-m-justify-content-space-between{-on-[breakpoint]}` | `.pf-l-flex` | Modifies justify-content property to space-between. |
| `.pf-m-justify-content-space-around{-on-[breakpoint]}` | `.pf-l-flex` | Modifies justify-content property to space-around. |
| `.pf-m-justify-content-space-evenly{-on-[breakpoint]}` | `.pf-l-flex` | Modifies justify-content property to space-evenly. |
| `.pf-m-align-items-flex-start{-on-[breakpoint]}` | `.pf-l-flex` | Modifies align-items property to flex-start. |
| `.pf-m-align-items-flex-end{-on-[breakpoint]}` | `.pf-l-flex` | Modifies align-items property to flex-end. |
| `.pf-m-align-items-center{-on-[breakpoint]}` | `.pf-l-flex` | Modifies align-items property to center. |
| `.pf-m-align-items-stretch{-on-[breakpoint]}` | `.pf-l-flex` | Modifies align-items property to stretch. |
| `.pf-m-align-items-baseline{-on-[breakpoint]}` | `.pf-l-flex` | Modifies align-items property to baseline. |
| `.pf-m-align-content-flex-start{-on-[breakpoint]}` | `.pf-l-flex` | Modifies align-content property to flex-start. |
| `.pf-m-align-content-flex-end{-on-[breakpoint]}` | `.pf-l-flex` | Modifies align-content property to flex-end. |
| `.pf-m-align-content-center{-on-[breakpoint]}` | `.pf-l-flex` | Modifies align-content property to center. |
| `.pf-m-align-content-stretch{-on-[breakpoint]}` | `.pf-l-flex` | Modifies align-content property to stretch. |
| `.pf-m-align-content-space-between{-on-[breakpoint]}` | `.pf-l-flex` | Modifies align-content property to space-between. |
| `.pf-m-align-content-space-around{-on-[breakpoint]}` | `.pf-l-flex` | Modifies align-content property to space-around. |
| `.pf-m-align-left{-on-[breakpoint]}` | `.pf-l-flex`, `.pf-l-flex > *` | Resets margin-left property to 0. |
| `.pf-m-align-right{-on-[breakpoint]}` | `.pf-l-flex`, `.pf-l-flex > *` | Modifies margin-left property to auto. |
