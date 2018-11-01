import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import PageLayoutDefaultNavTallHeaderExampleRaw from '!raw!./page-layout-default-nav-tall-header-example.hbs';
import PageLayoutExpandableNavExampleRaw from '!raw!./page-layout-expandable-nav-example.hbs';
import PageLayoutHorizontalNavExampleRaw from '!raw!./page-layout-horizontal-nav-example.hbs';
import PageLayoutSimpleNavExampleRaw from '!raw!./page-layout-simple-nav-example.hbs';
import PageLayoutGroupedNavExampleRaw from '!raw!./page-layout-grouped-nav-example.hbs';

import PageLayoutDefaultNavTallHeaderExample from './page-layout-default-nav-tall-header-example.hbs';
import PageLayoutExpandableNavExample from './page-layout-expandable-nav-example.hbs';
import PageLayoutHorizontalNavExample from './page-layout-horizontal-nav-example.hbs';
import PageLayoutSimpleNavExample from './page-layout-simple-nav-example.hbs';
import PageLayoutGroupedNavExample from './page-layout-grouped-nav-example.hbs';

import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const pageLayoutDefaultNavTallHeaderExample = PageLayoutDefaultNavTallHeaderExample();
  const pageLayoutExpandableNavExample = PageLayoutExpandableNavExample();
  const pageLayoutHorizontalNavExample = PageLayoutHorizontalNavExample();
  const pageLayoutSimpleNavExample = PageLayoutSimpleNavExample();
  const pageLayoutGroupedNavExample = PageLayoutGroupedNavExample();
  const headingText = 'Page Layout Demo';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example
        heading="Page Layout Default Nav Tall Header Example"
        fullPageOnly="true"
        handlebars={PageLayoutDefaultNavTallHeaderExampleRaw}
      >
        {pageLayoutDefaultNavTallHeaderExample}
      </Example>
      <Example
        heading="Page Layout Expandable Nav Example"
        fullPageOnly="true"
        handlebars={PageLayoutExpandableNavExampleRaw}
      >
        {pageLayoutExpandableNavExample}
      </Example>
      <Example
        heading="Page Layout Horizontal Nav Example"
        fullPageOnly="true"
        handlebars={PageLayoutHorizontalNavExampleRaw}
      >
        {pageLayoutHorizontalNavExample}
      </Example>
      <Example heading="Page Layout Simple Nav Example" fullPageOnly="true" handlebars={PageLayoutSimpleNavExampleRaw}>
        {pageLayoutSimpleNavExample}
      </Example>
      <Example
        heading="Page Layout Grouped Nav Example"
        fullPageOnly="true"
        handlebars={PageLayoutGroupedNavExampleRaw}
      >
        {pageLayoutGroupedNavExample}
      </Example>
    </Documentation>
  );
};
