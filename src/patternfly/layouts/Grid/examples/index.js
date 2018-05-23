import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import GridBase from './grid-base.hbs';
import GridGutters from './grid-gutters.hbs';
import GridNested from './grid-nested.hbs';
import GridOffsets from './grid-offsets.hbs';
import GridResponsive from './grid-responsive.hbs';
import GridRowspan from './grid-rowspan.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const gridBase = GridBase();
  const gridGutters = GridGutters();
  const gridNested = GridNested();
  const gridOffsets = GridOffsets();
  const gridResponsive = GridResponsive();
  const gridRowspan = GridRowspan();

  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Base grid">{gridBase}</Example>
      <Example heading="Gutters">{gridGutters}</Example>
      <Example heading="Responsive grid">{gridResponsive}</Example>
      <Example heading="Nested grids">{gridNested}</Example>
      <Example heading="Offsets">{gridOffsets}</Example>
      <Example heading="Row spans">{gridRowspan}</Example>
    </Documentation>
  );
};
