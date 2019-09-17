---
title: Grid
section: layouts
cssPrefix: pf-l-grid
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import GridBaseRaw from '!raw!./grid-base-example.hbs';
import GridGutterRaw from '!raw!./grid-gutter-example.hbs';
import GridSmartRaw from '!raw!./grid-smart-grid-example.hbs';
import GridSmartOverridesRaw from '!raw!./grid-smart-grid-overrides-example.hbs';
import GridNestedRaw from '!raw!./grid-nested-example.hbs';
import GridOffsetsRaw from '!raw!./grid-offsets-example.hbs';
import GridResponsiveRaw from '!raw!./grid-responsive-example.hbs';
import GridRowspanRaw from '!raw!./grid-rowspan-example.hbs';
import GridBase from './grid-base-example.hbs';
import GridGutter from './grid-gutter-example.hbs';
import GridSmart from './grid-smart-grid-example.hbs';
import GridSmartOverrides from './grid-smart-grid-overrides-example.hbs';
import GridNested from './grid-nested-example.hbs';
import GridOffsets from './grid-offsets-example.hbs';
import GridResponsive from './grid-responsive-example.hbs';
import GridRowspan from './grid-rowspan-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const gridBase = GridBase();
  const gridGutter = GridGutter();
  const gridSmart = GridSmart();
  const gridSmartOverrides = GridSmartOverrides();
  const gridNested = GridNested();
  const gridOffsets = GridOffsets();
  const gridResponsive = GridResponsive();
  const gridRowspan = GridRowspan();
  const headingText = 'Grid';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot} className="is-layout-page">
      <Example heading="Smart grid (responsive)" handlebars={GridSmartRaw}>
        {gridSmart}
      </Example>
      <Example heading="Smart grid with overrides (responsive)" handlebars={GridSmartOverridesRaw}>
        {gridSmartOverrides}
      </Example>
      <Example heading="Base grid" handlebars={GridBaseRaw}>
        {gridBase}
      </Example>
      <Example heading="Grid gutter" handlebars={GridGutterRaw}>
        {gridGutter}
      </Example>
      <Example heading="Responsive grid" handlebars={GridResponsiveRaw}>
        {gridResponsive}
      </Example>
      <Example heading="Nested grids" handlebars={GridNestedRaw}>
        {gridNested}
      </Example>
      <Example heading="Offsets" handlebars={GridOffsetsRaw}>
        {gridOffsets}
      </Example>
      <Example heading="Row spans" handlebars={GridRowspanRaw}>
        {gridRowspan}
      </Example>
    </Documentation>
  );
};
```

## Overview

The grid layout is based on CSS Grid’s two-dimensional system of columns and rows. This layout styles the parent element and its children to achieve responsive column and row spans as well as gutters.

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-l-grid` | `<div>` | Initializes the grid layout. |
| `.pf-l-grid__item` | `<div>` | Explicitly sets a child of the grid. This class isn't necessary, but it is included to keep inline with BEM convention, and to provide an entity that will later be used for applying modifiers. |
| `.pf-m-gutter` | `.pf-l-grid` | Adds space between children by using the globally defined gutter value. |
| `.pf-m-all-{1-12}-col{-on-[breakpoint]}` | `.pf-l-grid` | Defines grid item size on grid container. |
| `.pf-m-{1-12}-col{-on-[breakpoint]}` | `.pf-l-grid__item` | Defines grid item size.  Although not required, they are strongly suggested. If not used, grid item will default to 12 col. |
| `.pf-m-{2-x}-row{-on-[breakpoint]}` | `.pf-l-grid__item` | Defines grid item row span.  For row spans to function correctly, the value of of the current row plus the grid items to span must be equal to or less than 12. Example: .pf-m-8-col.pf-m-2-row + .pf-m-4-col + .pf-m-4-col. There is no limit to number of spanned rows. |
