import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import GridBaseRaw from '!raw!./grid-base-example.hbs';
import GridGuttersRaw from '!raw!./grid-gutters-example.hbs';
import GridSmartRaw from '!raw!./grid-smart-grid-example.hbs';
import GridNestedRaw from '!raw!./grid-nested-example.hbs';
import GridOffsetsRaw from '!raw!./grid-offsets-example.hbs';
import GridResponsiveRaw from '!raw!./grid-responsive-example.hbs';
import GridRowspanRaw from '!raw!./grid-rowspan-example.hbs';
import GridBase from './grid-base-example.hbs';
import GridGutters from './grid-gutters-example.hbs';
import GridSmart from './grid-smart-grid-example.hbs';
import GridNested from './grid-nested-example.hbs';
import GridOffsets from './grid-offsets-example.hbs';
import GridResponsive from './grid-responsive-example.hbs';
import GridRowspan from './grid-rowspan-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const gridBase = GridBase();
  const gridGutters = GridGutters();
  const gridSmart = GridSmart();
  const gridNested = GridNested();
  const gridOffsets = GridOffsets();
  const gridResponsive = GridResponsive();
  const gridRowspan = GridRowspan();

  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Smart grid (responsive)" handlebars={GridSmartRaw}>
        {gridSmart}
      </Example>
      <Example heading="Base grid" handlebars={GridBaseRaw}>
        {gridBase}
      </Example>
      <Example heading="Gutters" handlebars={GridGuttersRaw}>
        {gridGutters}
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
