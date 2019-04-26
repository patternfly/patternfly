import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import PageComponentDefaultNavHeaderExampleRaw from '!raw!./page-component-default-nav-header-example.hbs';
import PageComponentExpandableNavExampleRaw from '!raw!./page-component-expandable-nav-example.hbs';
import PageComponentHorizontalNavExampleRaw from '!raw!./page-component-horizontal-nav-example.hbs';
import PageComponentTertiaryNavExampleRaw from '!raw!./page-component-tertiary-nav-example.hbs';
import PageComponentGroupedNavExampleRaw from '!raw!./page-component-grouped-nav-example.hbs';

import PageComponentDefaultNavHeaderExample from './page-component-default-nav-header-example.hbs';
import PageComponentExpandableNavExample from './page-component-expandable-nav-example.hbs';
import PageComponentHorizontalNavExample from './page-component-horizontal-nav-example.hbs';
import PageComponentTertiaryNavExample from './page-component-tertiary-nav-example.hbs';
import PageComponentGroupedNavExample from './page-component-grouped-nav-example.hbs';

import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const pageComponentDefaultNavHeaderExample = PageComponentDefaultNavHeaderExample();
  const pageComponentExpandableNavExample = PageComponentExpandableNavExample();
  const pageComponentHorizontalNavExample = PageComponentHorizontalNavExample();
  const pageComponentTertiaryNavExample = PageComponentTertiaryNavExample();
  const pageComponentGroupedNavExample = PageComponentGroupedNavExample();
  const headingText = 'Page Component Demo';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example
        heading="Page Component Default Nav Header Example"
        fullPageOnly="true"
        handlebars={PageComponentDefaultNavHeaderExampleRaw}
      >
        {pageComponentDefaultNavHeaderExample}
      </Example>
      <Example
        heading="Page Component Expandable Nav Example"
        fullPageOnly="true"
        handlebars={PageComponentExpandableNavExampleRaw}
      >
        {pageComponentExpandableNavExample}
      </Example>
      <Example
        heading="Page Component Horizontal Nav Example"
        fullPageOnly="true"
        handlebars={PageComponentHorizontalNavExampleRaw}
      >
        {pageComponentHorizontalNavExample}
      </Example>
      <Example
        heading="Page Component Tertiary Nav Example"
        fullPageOnly="true"
        handlebars={PageComponentTertiaryNavExampleRaw}
      >
        {pageComponentTertiaryNavExample}
      </Example>
      <Example
        heading="Page Component Grouped Nav Example"
        fullPageOnly="true"
        handlebars={PageComponentGroupedNavExampleRaw}
      >
        {pageComponentGroupedNavExample}
      </Example>
    </Documentation>
  );
};
