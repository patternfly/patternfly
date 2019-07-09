import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import PageComponentDefaultNavHeaderExampleRaw from '!raw!./page-component-default-nav-header-example.hbs';
import PageComponentExpandableNavExampleRaw from '!raw!./page-component-expandable-nav-example.hbs';
import PageComponentHorizontalNavExampleRaw from '!raw!./page-component-horizontal-nav-example.hbs';
import PageComponentTertiaryNavExampleRaw from '!raw!./page-component-tertiary-nav-example.hbs';
import PageComponentGroupedNavExampleRaw from '!raw!./page-component-grouped-nav-example.hbs';
import PageComponentSidebarExpandedExampleRaw from '!raw!./page-component-sidebar-expanded-example.hbs';
import PageComponentSidebarCollapsedExampleRaw from '!raw!./page-component-sidebar-collapsed-example.hbs';
import PageComponentDrawerCollapsedExampleRaw from '!raw!./page-component-drawer-collapsed-example.hbs';
import PageComponentDrawerExpandedExampleRaw from '!raw!./page-component-drawer-expanded-example.hbs';

import PageComponentDefaultNavHeaderExample from './page-component-default-nav-header-example.hbs';
import PageComponentExpandableNavExample from './page-component-expandable-nav-example.hbs';
import PageComponentHorizontalNavExample from './page-component-horizontal-nav-example.hbs';
import PageComponentTertiaryNavExample from './page-component-tertiary-nav-example.hbs';
import PageComponentGroupedNavExample from './page-component-grouped-nav-example.hbs';
import PageComponentSidebarExpandedExample from './page-component-sidebar-expanded-example.hbs';
import PageComponentSidebarCollapsedExample from './page-component-sidebar-collapsed-example.hbs';
import PageComponentDrawerCollapsedExample from './page-component-drawer-collapsed-example.hbs';
import PageComponentDrawerExpandedExample from './page-component-drawer-expanded-example.hbs';

import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const pageComponentDefaultNavHeaderExample = PageComponentDefaultNavHeaderExample();
  const pageComponentExpandableNavExample = PageComponentExpandableNavExample();
  const pageComponentHorizontalNavExample = PageComponentHorizontalNavExample();
  const pageComponentTertiaryNavExample = PageComponentTertiaryNavExample();
  const pageComponentGroupedNavExample = PageComponentGroupedNavExample();
  const pageComponentSidebarExpandedExample = PageComponentSidebarExpandedExample();
  const pageComponentSidebarCollapsedExample = PageComponentSidebarCollapsedExample();
  const pageComponentDrawerCollapsedExample = PageComponentDrawerCollapsedExample();
  const pageComponentDrawerExpandedExample = PageComponentDrawerExpandedExample();
  const headingText = 'Page component demo';

  return (
    <Documentation data={props} docs={Docs} heading={headingText}>
      <Example
        heading="Page component default nav header example"
        fullPageOnly="true"
        handlebars={PageComponentDefaultNavHeaderExampleRaw}
      >
        {pageComponentDefaultNavHeaderExample}
      </Example>
      <Example
        heading="Page component expandable nav example"
        fullPageOnly="true"
        handlebars={PageComponentExpandableNavExampleRaw}
      >
        {pageComponentExpandableNavExample}
      </Example>
      <Example
        heading="Page component horizontal nav example"
        fullPageOnly="true"
        handlebars={PageComponentHorizontalNavExampleRaw}
      >
        {pageComponentHorizontalNavExample}
      </Example>
      <Example
        heading="Page component tertiary nav example"
        fullPageOnly="true"
        handlebars={PageComponentTertiaryNavExampleRaw}
      >
        {pageComponentTertiaryNavExample}
      </Example>
      <Example
        heading="Page component grouped nav example"
        fullPageOnly="true"
        handlebars={PageComponentGroupedNavExampleRaw}
      >
        {pageComponentGroupedNavExample}
      </Example>
      <Example
        heading="Page component sidebar expanded on mobile example"
        fullPageOnly="true"
        handlebars={PageComponentSidebarExpandedExampleRaw}
      >
        {pageComponentSidebarExpandedExample}
      </Example>
      <Example
        heading="Page component sidebar collapsed example"
        fullPageOnly="true"
        handlebars={PageComponentSidebarCollapsedExampleRaw}
      >
        {pageComponentSidebarCollapsedExample}
      </Example>
      <Example
        heading="Page component drawer collapsed example"
        fullPageOnly="true"
        handlebars={PageComponentDrawerCollapsedExampleRaw}
      >
        {pageComponentDrawerCollapsedExample}
      </Example>
      <Example
        heading="Page component drawer expanded example"
        fullPageOnly="true"
        handlebars={PageComponentDrawerExpandedExampleRaw}
      >
        {pageComponentDrawerExpandedExample}
      </Example>
    </Documentation>
  );
};
