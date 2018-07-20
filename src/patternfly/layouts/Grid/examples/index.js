import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import GridBaseRaw from '!raw!./grid-base-example.hbs';
import GridGridGapRaw from '!raw!./grid-grid-gap-example.hbs';
import GridSmartRaw from '!raw!./grid-smart-grid-example.hbs';
import GridSmartOverridesRaw from '!raw!./grid-smart-grid-overrides-example.hbs';
import GridNestedRaw from '!raw!./grid-nested-example.hbs';
import GridOffsetsRaw from '!raw!./grid-offsets-example.hbs';
import GridResponsiveRaw from '!raw!./grid-responsive-example.hbs';
import GridRowspanRaw from '!raw!./grid-rowspan-example.hbs';
import GridBase from './grid-base-example.hbs';
import GridGridGap from './grid-grid-gap-example.hbs';
import GridSmart from './grid-smart-grid-example.hbs';
import GridSmartOverrides from './grid-smart-grid-overrides-example.hbs';
import GridNested from './grid-nested-example.hbs';
import GridOffsets from './grid-offsets-example.hbs';
import GridResponsive from './grid-responsive-example.hbs';
import GridRowspan from './grid-rowspan-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const gridBase = GridBase();
  const gridGridGap = GridGridGap();
  const gridSmart = GridSmart();
  const gridSmartOverrides = GridSmartOverrides();
  const gridNested = GridNested();
  const gridOffsets = GridOffsets();
  const gridResponsive = GridResponsive();
  const gridRowspan = GridRowspan();

  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Smart grid (responsive)" handlebars={GridSmartRaw}>
        {gridSmart}
      </Example>
      <Example heading="Smart grid with overrides (responsive)" handlebars={GridSmartOverridesRaw}>
        {gridSmartOverrides}
      </Example>
      <Example heading="Base grid" handlebars={GridBaseRaw}>
        {gridBase}
      </Example>
      <Example heading="Gap definitions" handlebars={GridGridGapRaw}>
        {gridGridGap}
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
